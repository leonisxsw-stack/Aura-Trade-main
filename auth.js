// ============================================================
// Aura Trade — Auth System (Google + Supabase)
// ============================================================

const SESSION_KEY = 'aura_user';

// Supabase Configuration
// Vérifie si on est dans le popup OAuth qui a été redirigé
if (window.location.search.includes('discordOAuth=true')) {
    const params = new URLSearchParams(window.location.search);
    const discord = params.get('discord');
    const isBooster = params.get('isBooster') === 'true';
    if (window.opener) {
        window.opener.postMessage({ auraDiscordOAuth: true, discord: discord, isBooster: isBooster }, '*');
    }
    window.close();
}

const SUPABASE_URL = 'https://dpnmafmlwfetaadvyzeu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwbm1hZm1sd2ZldGFhZHZ5emV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwMTkzMDcsImV4cCI6MjA5NDU5NTMwN30.RpmxuMAPh3W79weyLS5VroTYgeFkjo8TAkw2QKkqF-8';

// Initialize Supabase Client
let _supabase = null;
if (typeof supabase !== 'undefined') {
    const { createClient } = supabase;
    _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// --- Decode a Google JWT ---
function parseJwt(token) {
    try {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    } catch { return null; }
}

// --- Save user session & Update Supabase ---
async function saveSession(payload) {
    let existingProfile = null;
    if (_supabase) {
        try {
            const { data } = await _supabase.from('profiles').select('*').eq('id', payload.sub).single();
            existingProfile = data;
        } catch (e) { }
    }

    const user = {
        id: payload.sub,
        name: payload.name,
        pseudo: existingProfile?.pseudo || null,
        email: payload.email,

        picture: existingProfile?.avatar_url || payload.picture,
        google_picture: payload.picture,
        avatar: payload.name.charAt(0),
        exp: payload.exp,
        rating: existingProfile?.trades > 0 && existingProfile?.rating !== undefined && existingProfile?.rating !== null ? parseFloat(existingProfile.rating) : 0.0,
        trades: existingProfile?.trades || 0,
        is_premium: existingProfile?.is_premium || false,
        premium_style: existingProfile?.premium_style || 'anim-gold',
        is_admin: existingProfile?.is_admin || false,
        discord: existingProfile?.discord || null,
        badges: existingProfile?.badges || []
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(user));

    if (_supabase) {
        try {
            await _supabase.from('profiles').upsert({
                id: payload.sub,
                email: payload.email,
                full_name: payload.name,
                avatar_url: existingProfile?.avatar_url || payload.picture,
                pseudo: user.pseudo,
                rating: existingProfile ? (existingProfile.trades > 0 ? existingProfile.rating : 0.0) : 0.0,
                trades: existingProfile ? existingProfile.trades : 0,
                last_seen: new Date().toISOString()
            });
        } catch (e) { console.error('Supabase Profile Sync failed:', e); }
    }
    return user;
}

// --- Get current user ---
function getUser() {
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const user = JSON.parse(raw);
        if (user.exp && Date.now() / 1000 > user.exp) {
            localStorage.removeItem(SESSION_KEY);
            return null;
        }
        return user;
    } catch { return null; }
}

// --- Auth Controls ---
async function logOut() {
    const user = getUser();
    if (user && _supabase) {
        try {
            const resetAvatar = user.google_picture || user.picture;
            if (resetAvatar) {
                // Reset database profile avatar to original Google picture
                await _supabase.from('profiles').update({ avatar_url: resetAvatar }).eq('id', user.id);
                // Reset sellerPicture on all user announcements
                await _supabase.from('announces').update({ sellerPicture: resetAvatar }).eq('sellerId', user.id);
            }
        } catch (e) {
            console.error('Failed to reset avatar on logout:', e);
        }
    }
    if (typeof google !== 'undefined' && google.accounts) {
        if (user && user.email) {
            google.accounts.id.revoke(user.email, () => { });
        }
        google.accounts.id.disableAutoSelect();
    }
    localStorage.removeItem(SESSION_KEY);
    window.location.href = 'login.html?logout=true';
}

function requireAuth() {
    if (!getUser()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function redirectIfLoggedIn(destination = 'index.html') {
    if (getUser()) { window.location.href = destination; }
}

function initGoogleAuth({ onSuccess, onError } = {}) {
    google.accounts.id.initialize({
        client_id: '466158961924-monhu20ncvso1p06aecegq9t4549ihk6.apps.googleusercontent.com',
        locale: 'fr',

        callback: async (response) => {
            const payload = parseJwt(response.credential);
            if (!payload) { onError?.('Token invalide'); return; }
            const user = await saveSession(payload);
            onSuccess?.(user);
        },
        auto_select: false,
    });
}

function renderGoogleButton(containerId, theme = 'outline') {
    const el = document.getElementById(containerId);
    if (!el) return;
    google.accounts.id.renderButton(el, {
        type: 'standard', size: 'large', theme: theme,
        text: 'signin_with', shape: 'pill', width: 300
    });
}

// Site déployé (GitHub Pages)
window.AURA_SITE_URL = 'https://leonisxsw-stack.github.io/Aura-Trade-main';

// Serveur OAuth du bot — en local : localhost:3850 | en prod : URL publique du bot
window.AURA_DISCORD_OAUTH_API = 'https://dpnmafmlwfetaadvyzeu.supabase.co/functions/v1/discord-oauth';

window.AuraAuth = { getUser, logOut, requireAuth, redirectIfLoggedIn, initGoogleAuth, renderGoogleButton, _supabase };
