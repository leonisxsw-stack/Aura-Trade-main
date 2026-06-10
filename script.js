// ==================== SVG ICONS (inline reuse) ====================
const icons = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
    heartFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>',
    chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    messageCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    barChart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
};

// ==================== BADGE SYSTEM ====================
const BADGE_DEFS = {
    'Staff': { icon: '🛠️', label: 'Staff', color: '#FFFFFF', bg: '#007AFF', title: 'Staff Aura Trade' },
    'Premium': { icon: '💎', label: 'Premium', color: '#FFFFFF', bg: '#BF5AF2', title: 'Membre Premium' },
    'OG': { icon: '👑', label: 'OG', color: '#FFFFFF', bg: '#FFD700', title: 'Membre Original (OG)' },
    'Bug hunter': { icon: '🐛', label: 'Chasseur de Bugs', color: '#FFFFFF', bg: '#30D158', title: 'Bug Hunter' },
    'Server Booster': { icon: '🔥', label: 'Booster', color: '#FFFFFF', bg: '#FF9500', title: 'Server Booster' }
};

function getUserBadges(profile) {
    if (!profile) return [];
    const b = profile.badges;
    if (Array.isArray(b)) return b;
    if (typeof b === 'string') {
        try { const parsed = JSON.parse(b); if (Array.isArray(parsed)) return parsed; } catch (e) { }
        return b.split(',').map(s => s.trim()).filter(Boolean);
    }
    return [];
}

function hasServerBoosterBadge(profile) {
    return getUserBadges(profile || currentUser).includes('Server Booster');
}

function escapeHtmlJsString(str) {
    if (!str) return '';
    return str
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r');
}

function renderUserBadges(profileOrBadgesArray, isLarge = false) {
    const list = Array.isArray(profileOrBadgesArray)
        ? [...profileOrBadgesArray]
        : getUserBadges(profileOrBadgesArray);

    if (profileOrBadgesArray && typeof profileOrBadgesArray === 'object' && !Array.isArray(profileOrBadgesArray)) {
        if ((profileOrBadgesArray.is_admin || profileOrBadgesArray.email === 'leoazex20@gmail.com') && !list.includes('Staff')) list.push('Staff');
        if (profileOrBadgesArray.is_premium && !list.includes('Premium')) list.push('Premium');
    }

    const size = isLarge ? '24px' : '18px';
    const fontSize = isLarge ? '0.85rem' : '0.68rem';
    const margin = isLarge ? '0 4px' : '0 0 0 6px';

    return list.map(bKey => {
        const def = BADGE_DEFS[bKey];
        if (!def) return '';
        return `<span class="user-badge" data-tooltip="${def.title}" style="display:inline-flex; align-items:center; justify-content:center; background:${def.bg}; color:${def.color}; width:${size}; height:${size}; border-radius:50%; margin:${margin}; vertical-align:middle; cursor:default; box-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            <span style="font-size: ${fontSize}; line-height: 1; display: block; transform: translateY(0.5px);">${def.icon}</span>
        </span>`;
    }).join('');
}

// ==================== AUTH & USER ====================
let currentUser = AuraAuth.getUser() || {
    id: 'guest', name: 'Invité', pseudo: 'Guest', avatar: '?',
    memberSince: '2026', rating: 0.0, totalAnnounces: 0, totalTrades: 0, tradeHistory: [],
};

function refreshUserData() {
    const user = AuraAuth.getUser();
    const userActions = document.getElementById('userActions');
    const loginBtn = document.getElementById('loginBtn');

    if (user) {
        currentUser = user;
        if (currentUser.email === 'leoazex20@gmail.com') currentUser.is_premium = true;
        if (userActions) userActions.style.display = 'flex';
        if (loginBtn) loginBtn.style.display = 'none';

        if (!currentUser.is_admin && currentUser.email !== 'leoazex20@gmail.com') startSanctionPolling();

        if (AuraAuth._supabase && currentUser.id !== 'guest') {
            AuraAuth._supabase.from('profiles').upsert({
                id: currentUser.id, email: currentUser.email, pseudo: currentUser.pseudo,
                rating: currentUser.trades > 0 && currentUser.rating !== undefined && currentUser.rating !== null ? parseFloat(currentUser.rating) : 0.0,
                trades: currentUser.trades || 0, last_seen: new Date().toISOString()
            }, { onConflict: 'id' }).then(() => {
                AuraAuth._supabase.from('profiles').select('*').eq('id', currentUser.id).single()
                    .then(({ data }) => {
                        if (data) {
                            let updated = false;
                            if (currentUser.is_admin !== data.is_admin) { currentUser.is_admin = data.is_admin; updated = true; }
                            if (currentUser.is_premium !== data.is_premium) { currentUser.is_premium = data.is_premium; updated = true; }
                            if (currentUser.premium_style !== data.premium_style) { currentUser.premium_style = data.premium_style; updated = true; }
                            if (currentUser.pseudo !== data.pseudo) { currentUser.pseudo = data.pseudo; updated = true; }
                            if (currentUser.picture !== data.avatar_url) { currentUser.picture = data.avatar_url; updated = true; }
                            const expectedRating = data.trades > 0 && data.rating !== undefined && data.rating !== null ? parseFloat(data.rating).toFixed(1) : '0.0';
                            if (parseFloat(currentUser.rating) !== parseFloat(expectedRating)) { currentUser.rating = expectedRating; updated = true; }
                            if (currentUser.trades !== data.trades) { currentUser.trades = data.trades || 0; updated = true; }
                            if (JSON.stringify(getUserBadges(currentUser)) !== JSON.stringify(getUserBadges(data))) { currentUser.badges = getUserBadges(data); updated = true; }
                            if (currentUser.discord !== data.discord) { currentUser.discord = data.discord; updated = true; }
                            if (currentUser.can_view_logs !== data.can_view_logs) { currentUser.can_view_logs = data.can_view_logs; updated = true; }
                            // Sync new profile fields
                            if (currentUser.bio !== data.bio) { currentUser.bio = data.bio; updated = true; }
                            if (currentUser.banner_url !== data.banner_url) { currentUser.banner_url = data.banner_url; updated = true; }
                            if (currentUser.profile_accent !== data.profile_accent) { currentUser.profile_accent = data.profile_accent; updated = true; }
                            if (currentUser.profile_title !== data.profile_title) { currentUser.profile_title = data.profile_title; updated = true; }
                            if (currentUser.social_youtube !== data.social_youtube) { currentUser.social_youtube = data.social_youtube; updated = true; }
                            if (currentUser.social_tiktok !== data.social_tiktok) { currentUser.social_tiktok = data.social_tiktok; updated = true; }
                            if (currentUser.social_twitter !== data.social_twitter) { currentUser.social_twitter = data.social_twitter; updated = true; }
                            if (updated) {
                                localStorage.setItem('aura_user', JSON.stringify(currentUser));
                                if (currentPage === 'settings' || currentPage === 'admin') renderApp();
                            }
                        }
                    }).catch(err => console.error('Background profile sync error:', err));
            });
        }

        const avatarEl = document.getElementById('headerAvatar');
        if (avatarEl) {
            avatarEl.textContent = currentUser.avatar;
            if (currentUser.picture) {
                avatarEl.style.backgroundImage = `url(${currentUser.picture})`;
                avatarEl.style.backgroundSize = 'cover';
                avatarEl.textContent = '';
            }
        }

        const premiumBtn = document.querySelector('.premium-header-btn');
        if (premiumBtn) {
            premiumBtn.innerHTML = '<span class="btn-icon">🛒</span> <span class="btn-text">Boutique</span>';
            premiumBtn.onclick = () => navigate('premium');
        }

        const isAdmin = currentUser.is_admin || currentUser.email === 'leoazex20@gmail.com';
        const btnAdminHeader = document.getElementById('btn-admin-header');
        const btnAdminNav = document.getElementById('bottomNavAdmin');
        if (btnAdminHeader) btnAdminHeader.style.display = isAdmin ? 'flex' : 'none';
        if (btnAdminNav) btnAdminNav.style.display = isAdmin ? 'flex' : 'none';
    } else {
        if (userActions) userActions.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'block';
    }
}

const games = [
    { id: 'schoolfr', name: 'School Fr RP', icon: '🏫' },
    { id: 'adoptme', name: 'Adopt Me !', icon: '🐾' },
    { id: 'mm2', name: 'Murder Mystery 2', icon: '🔪' },
    { id: 'petsim', name: 'Pet Simulator X', icon: '💎' },
    { id: 'bloxfruits', name: 'Blox Fruits', icon: '🍎' },
    { id: 'brookhaven', name: 'Brookhaven RP', icon: '🏘️' },
];

let announces = [];
let messages = [];
let profilesCache = {
    'aura-support': { id: 'aura-support', pseudo: '👑 Support Aura Trade', avatar_url: null, is_admin: true, email: 'support@auratrade.com' }
};

let nextId = 1;
let currentPage = 'home';
let _adminLiveInterval = null;
let currentDetailId = null;
let currentProfileUserId = null;
let currentCreateStep = 1;
let createData = {};
let activeGameFilter = null;
let activeSearchQuery = '';

// ==================== NAVIGATION ====================
function navigate(page, param) {
    const authRequired = ['detail', 'create', 'messages', 'profile', 'favorites', 'settings', 'admin', 'config_premium'];
    if (authRequired.includes(page) && !AuraAuth.getUser()) { window.location.href = 'login.html'; return; }
    currentPage = page;
    if (page === 'detail') currentDetailId = param;
    if (page === 'profile') currentProfileUserId = param || null;
    if (page === 'create') { currentCreateStep = 1; createData = {}; }
    if (page === 'explore') {
        if (typeof param === 'string' && param.startsWith('search:')) { activeSearchQuery = param.replace('search:', ''); activeGameFilter = null; }
        else if (param) { activeGameFilter = param; activeSearchQuery = ''; }
        else if (currentPage !== 'explore') { activeGameFilter = null; activeSearchQuery = ''; }
    }
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== RENDER ====================
function renderApp() {
    const container = document.getElementById('appContent');
    const pages = {
        'home': renderHome, 'detail': () => renderDetail(currentDetailId),
        'create': renderCreate, 'explore': renderExplore,
        'profile': () => renderProfile(currentProfileUserId),
        'messages': renderMessages, 'favorites': renderFavorites,
        'settings': renderSettings, 'admin': renderAdmin,
        'premium': renderPremium, 'config_premium': renderPremium,
    };
    container.innerHTML = (pages[currentPage] || renderHome)();
    attachListeners();
    updateBadges();
    if (currentPage === 'profile') loadUserProfilePage(currentProfileUserId);
}

function updateBadges() {
    const unread = messages.filter(m => m.toUserId === currentUser.id && !m.read).length;
    const badge = document.getElementById('msgBadge');
    if (badge) { badge.style.display = unread > 0 ? 'flex' : 'none'; badge.textContent = unread; }
}

function renderCard(a) {
    const isLiked = (a.likedBy || []).includes(currentUser.id);
    const imageStyle = a.imageUrl ? `background-image:url(${a.imageUrl}); background-size:cover;` : '';
    const premiumClass = a.sellerPremium ? 'premium-card' : '';
    const pseudoClass = a.sellerPremium ? `animated-pseudo ${a.sellerPremiumStyle || 'anim-gold'}` : '';
    const badgesHtml = renderUserBadges({ is_premium: a.sellerPremium, badges: a.sellerBadges || [] });

    return `
    <div class="card ${premiumClass}" onclick="navigate('detail', ${a.id})">
        <div class="card-image ${a.rarityClass}" style="${imageStyle}">
            ${!a.imageUrl ? `<span class="item-emoji">${a.imageEmoji}</span>` : ''}
            <span class="card-rarity rarity-${a.rarityClass}">${a.rarity}</span>
        </div>
        <div class="card-body">
            <div class="card-game">${a.gameName}</div>
            <div class="card-title">${a.title}</div>
            <div class="card-search">Cherche : ${a.searchFor}</div>
            <div style="font-size:0.8rem;color:var(--white-50);margin-top:8px;display:flex;align-items:center;gap:6px;">
                <div class="avatar-sm" style="width:20px;height:20px;font-size:0.7rem;${a.sellerPicture ? `background-image:url(${a.sellerPicture});background-size:cover;color:transparent;` : ''}">${a.sellerPicture ? '' : (a.sellerAvatar || '?')}</div>
                <span>Par <span class="${pseudoClass}">${a.sellerName}</span>${badgesHtml}</span>
            </div>
            <div class="card-footer">
                <div class="card-stats">
                    <span>${icons.eye} ${a.views || 0}</span>
                    <span>${icons.heart} ${a.likes || 0}</span>
                </div>
                <button class="card-like-btn ${isLiked ? 'liked' : ''}" onclick="event.stopPropagation();toggleLike(${a.id}, this)" title="J'aime">
                    ${isLiked ? icons.heartFilled : icons.heart}
                </button>
            </div>
        </div>
    </div>`;
}

function renderHome() {
    const getScore = (a) => ((a.views || 0) + (a.likes || 0) * 5) + (a.sellerPremium ? 10000 : 0);
    const featured = [...announces].sort((a, b) => getScore(b) - getScore(a)).slice(0, 5);
    const recent = [...announces].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    return `
    <div class="container">
        <section class="hero">
            <div class="hero-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Plus de 200 échanges réalisés ce mois
            </div>
            <h1>Le <span class="highlight">bon coin</span> des items Roblox</h1>
            <p>Échangez vos items en toute simplicité. Gratuit, sécurisé, sans argent.</p>
            <div class="hero-search-wrap">
                ${icons.search}
                <input type="text" placeholder="Cherchez un item, un jeu..." id="heroSearchInput">
            </div>
        </section>
        <section class="section">
            <div class="section-header">
                <h2>${icons.trending} Offres à la une</h2>
                <span class="section-link" onclick="navigate('explore')">Tout voir ${icons.chevronRight}</span>
            </div>
            <div class="carousel-wrap">
                <button class="carousel-btn prev" onclick="scrollCarousel('featured', -1)">${icons.chevronLeft}</button>
                <div class="carousel" id="carouselFeatured">
                    ${featured.length > 0 ? featured.map(a => renderCard(a)).join('') : '<p class="empty-msg">Aucune offre à la une pour le moment.</p>'}
                </div>
                <button class="carousel-btn next" onclick="scrollCarousel('featured', 1)">${icons.chevronRight}</button>
            </div>
        </section>
        <section class="section">
            <div class="section-header"><h2>${icons.clock} Toutes les annonces</h2></div>
            <div class="grid-3">
                ${recent.length > 0 ? recent.map(a => renderCard(a)).join('') : '<p class="empty-msg" style="grid-column: 1 / -1;">Aucune annonce publiée récemment.</p>'}
            </div>
        </section>
    </div>`;
}

function renderExplore() {
    let filtered = announces;
    if (activeGameFilter) filtered = filtered.filter(a => a.gameId === activeGameFilter);
    if (activeSearchQuery) {
        const q = activeSearchQuery.toLowerCase();
        filtered = filtered.filter(a => a.title.toLowerCase().includes(q) || a.gameName.toLowerCase().includes(q) || a.description.toLowerCase().includes(q));
    }
    const gameName = activeGameFilter ? games.find(g => g.id === activeGameFilter)?.name : (activeSearchQuery ? `Résultats pour "${activeSearchQuery}"` : 'Tous les jeux');
    return `
    <div class="container">
        <div style="display:flex;gap:24px;align-items:flex-start;">
            <div class="explore-sidebar">
                <div class="filter-card">
                    <h3 class="filter-title">Catégories</h3>
                    <div class="filter-list">
                        <span class="filter-item ${!activeGameFilter && !activeSearchQuery ? 'active' : ''}" onclick="activeGameFilter=null;activeSearchQuery='';navigate('explore')">🌟 Tous les jeux</span>
                        ${games.map(g => `<span class="filter-item ${activeGameFilter === g.id ? 'active' : ''}" onclick="navigate('explore', '${g.id}')">${g.icon} ${g.name}</span>`).join('')}
                    </div>
                    <button class="btn btn-secondary btn-sm btn-block mt-4" onclick="activeGameFilter=null;activeSearchQuery='';navigate('explore')">Effacer</button>
                </div>
            </div>
            <div style="flex:1;">
                <h2 style="font-size:1.4rem;font-weight:800;color:var(--white);margin-bottom:6px;">🔍 ${gameName}</h2>
                <p style="color:var(--white-50);margin-bottom:20px;">${filtered.length} annonce${filtered.length > 1 ? 's' : ''} trouvée${filtered.length > 1 ? 's' : ''}</p>
                <div class="grid-3">${filtered.map(a => renderCard(a)).join('')}</div>
                ${filtered.length === 0 ? '<p class="empty-msg">Aucune annonce trouvée pour votre recherche.</p>' : ''}
            </div>
        </div>
    </div>`;
}

function renderDetail(id) {
    const a = announces.find(ann => ann.id === id);
    if (!a) return '<div class="container"><p style="color:var(--white-50);padding:60px 0;text-align:center;">Annonce introuvable.</p></div>';
    if (AuraAuth._supabase) AuraAuth._supabase.rpc('increment_views', { announce_id: a.id });
    a.views = (a.views || 0) + 1;
    const isLiked = (a.likedBy || []).includes(currentUser.id);
    const similar = announces.filter(ann => ann.id !== a.id && ann.gameId === a.gameId).slice(0, 4);
    return `
    <div class="container">
        <a class="back-link" onclick="navigate('home')">
            <span class="icon-wrap-sm">${icons.arrowLeft}</span>
            Retour à l'accueil
        </a>
        <div class="detail-layout">
            <div class="detail-main">
                <div class="detail-hero-card">
                    <div class="detail-image-lg ${a.rarityClass}" style="${a.imageUrl ? `background-image:url(${a.imageUrl}); background-size:cover; background-position:center;` : ''}">
                        ${!a.imageUrl ? `<span class="item-emoji-lg">${a.imageEmoji}</span>` : ''}
                        <div class="detail-rarity-badge rarity-${a.rarityClass}">${a.rarity}</div>
                    </div>
                    <div class="detail-header-info">
                        <div class="detail-game-label">${a.gameName}</div>
                        <h1 class="detail-title-lg">${a.title}</h1>
                        <div class="detail-meta-row">
                            <span class="meta-item"><span class="icon-inline">${icons.clock}</span> Publié le ${a.date}</span>
                            <span class="meta-item"><span class="icon-inline">${icons.eye}</span> ${a.views} vues</span>
                        </div>
                    </div>
                </div>
                <div class="detail-content-section">
                    <h3 class="section-title">Description</h3>
                    <p class="detail-description-text">${a.description || 'Aucune description fournie.'}</p>
                </div>
                <div class="detail-content-section highlight-box">
                    <div class="search-for-header">
                        <span class="icon-wrap-md">${icons.search}</span>
                        <h3 class="section-title">Ce que je recherche</h3>
                    </div>
                    <p class="search-for-text">${a.searchFor}</p>
                </div>
                <div class="detail-tags">
                    <span class="tag">${a.gameName}</span>
                    <span class="tag">${a.rarity}</span>
                </div>
            </div>
            <div class="detail-sidebar">
                <div class="sidebar-card seller-card" title="Voir le profil" style="transition: transform 0.2s, box-shadow 0.2s;" onmouseenter="this.style.transform='translateY(-2px)';" onmouseleave="this.style.transform='none';">
                    <div class="seller-header" style="cursor:pointer;" onclick="navigate('profile', '${a.sellerId}')">
                        <div class="avatar-md" style="${a.sellerPicture ? `background-image:url(${a.sellerPicture});background-size:cover;color:transparent;` : ''}">${a.sellerPicture ? '' : (a.sellerAvatar || '?')}</div>
                        <div class="seller-meta" style="display:flex; flex-direction:column; gap:4px;">
                            <div class="seller-name ${a.sellerPremium ? `animated-pseudo ${a.sellerPremiumStyle || 'anim-gold'}` : ''}" style="font-weight:800; font-size:1.15rem; line-height:1.2;">${a.sellerName}</div>
                            <div class="seller-badges-row" style="display:flex; align-items:center; gap:2px; margin:2px 0;">
                                ${renderUserBadges({ is_premium: a.sellerPremium, badges: a.sellerBadges || [] }, true)}
                            </div>
                            <div class="seller-rating">
                                ${icons.star} <span>${a.sellerTrades > 0 && a.sellerRating !== undefined && a.sellerRating !== null ? parseFloat(a.sellerRating).toFixed(1) : '0.0'}</span>
                                <span class="dot">·</span>
                                <span>${a.sellerTrades || 0} échanges</span>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-actions">
                        <button class="btn btn-primary btn-block btn-lg" onclick="openContactModal(${a.id})">
                            <span class="icon-inline">${icons.messageCircle}</span> Proposer un échange
                        </button>
                        <button class="btn btn-secondary btn-block" onclick="toggleLike(${a.id})">
                            <span class="icon-inline">${isLiked ? icons.heartFilled : icons.heart}</span>
                            ${isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                        </button>
                        <button class="btn btn-ghost btn-block btn-sm" style="margin-top:8px;color:var(--orange);" onclick="openReviewModal('${a.sellerId}', '${escapeHtmlJsString(a.sellerName)}')">
                            ⭐ Laisser un avis sur le joueur
                        </button>
                    </div>
                </div>
                <div class="sidebar-card stats-card">
                    <h4 class="sidebar-title">Informations complémentaires</h4>
                    <div class="sidebar-stats-list">
                        <div class="stat-row"><span class="stat-label">Identifiant</span><span class="stat-value">#${a.id}</span></div>
                        <div class="stat-row"><span class="stat-label">Popularité</span><span class="stat-value"><span class="icon-inline" style="color:var(--danger)">${icons.heart}</span> ${a.likes || 0}</span></div>
                        <div class="stat-row"><span class="stat-label">Statut</span><span class="stat-value status-online">Disponible</span></div>
                    </div>
                    <button class="btn btn-ghost btn-block mt-4" onclick="shareAnnounce(${a.id})">
                        <span class="icon-inline">${icons.share}</span> Partager l'annonce
                    </button>
                </div>
                <div class="sidebar-card safety-tip-card">
                    <div class="safety-header">
                        <span class="icon-wrap-sm" style="color:var(--success)">${icons.shield}</span>
                        <span>Conseil de sécurité</span>
                    </div>
                    <p class="safety-text">Réalisez toujours vos échanges directement dans le jeu Roblox. Ne partagez jamais vos identifiants.</p>
                </div>
            </div>
        </div>
        ${similar.length > 0 ? `
        <section class="section" style="margin-top:60px;">
            <div class="section-header"><h2>${icons.plus} Annonces similaires</h2></div>
            <div class="carousel-wrap">
                <button class="carousel-btn prev" onclick="scrollCarousel('similar', -1)">${icons.chevronLeft}</button>
                <div class="carousel" id="carouselSimilar">${similar.map(a => renderCard(a)).join('')}</div>
                <button class="carousel-btn next" onclick="scrollCarousel('similar', 1)">${icons.chevronRight}</button>
            </div>
        </section>` : ''}
    </div>`;
}

function renderCreate() {
    const steps = ['Le jeu', 'Ce que je possède', 'Ce que je recherche', 'Récapitulatif'];
    return `
    <div class="container" style="max-width:600px;">
        <h2 style="font-size:1.4rem;font-weight:800;color:var(--white);margin-bottom:4px;">📝 Publier une annonce</h2>
        <p style="color:var(--white-50);margin-bottom:20px;">Étape ${currentCreateStep}/4 · ${steps[currentCreateStep - 1]}</p>
        <div class="stepper">
            ${steps.map((_, i) => `<div class="step-dot ${i + 1 < currentCreateStep ? 'done' : ''} ${i + 1 === currentCreateStep ? 'active' : ''}"></div>`).join('')}
        </div>
        ${renderCreateStep()}
    </div>`;
}

function renderCreateStep() {
    if (currentCreateStep === 1) {
        return `
        <div class="form-group"><label>Jeu Roblox *</label>
            <select id="createGame">
                <option value="">Sélectionnez un jeu...</option>
                ${games.map(g => `<option value="${g.id}" ${createData.gameId === g.id ? 'selected' : ''}>${g.icon} ${g.name}</option>`).join('')}
                <option value="other">✨ Autre (précisez)</option>
            </select>
        </div>
        <div class="form-group hidden" id="otherGameGroup">
            <label>Nom du jeu</label>
            <input type="text" id="createOtherGame" placeholder="Ex: Mon Jeu RP..." value="${createData.otherGame || ''}">
        </div>
        <button class="btn btn-primary" onclick="nextStep()">Continuer ${icons.arrowRight}</button>`;
    } else if (currentCreateStep === 2) {
        return `
        <div class="form-group"><label>Nom de l'item que tu possèdes *</label>
            <input type="text" id="createTitle" placeholder="Ex: Aura Légendaire du Dragon" value="${createData.title || ''}">
        </div>
        <div class="form-group"><label>Rareté</label>
            <select id="createRarity">
                <option value="Commun" ${createData.rarity === 'Commun' ? 'selected' : ''}>Commun</option>
                <option value="Rare" ${createData.rarity === 'Rare' ? 'selected' : ''}>Rare</option>
                <option value="Ultra-Rare" ${createData.rarity === 'Ultra-Rare' ? 'selected' : ''}>Ultra-Rare</option>
                <option value="Légendaire" ${createData.rarity === 'Légendaire' ? 'selected' : ''}>Légendaire</option>
                <option value="Mythique" ${createData.rarity === 'Mythique' ? 'selected' : ''}>Mythique</option>
            </select>
        </div>
        <div class="form-group"><label>Description</label>
            <textarea id="createDescription" rows="3" placeholder="Décris ton item (effets, particularités, état...)">${createData.description || ''}</textarea>
        </div>
        <div style="display:flex;gap:10px;">
            <button class="btn btn-secondary" onclick="prevStep()">${icons.arrowLeft} Retour</button>
            <button class="btn btn-primary" onclick="nextStep()">Continuer ${icons.arrowRight}</button>
        </div>`;
    } else if (currentCreateStep === 3) {
        return `
        <div class="form-group"><label>Ce que tu recherches en échange *</label>
            <textarea id="createSearchFor" rows="3" placeholder="Décris ce que tu veux recevoir en échange...">${createData.searchFor || ''}</textarea>
        </div>
        <div class="form-group"><label>Uploader une image (Max 8 MB)</label>
            <input type="file" id="createImageFile" accept="image/*" style="padding:10px;background:var(--bg-card);border:1px solid var(--border-light);border-radius:var(--radius-md);width:100%;color:var(--white);">
            <p style="font-size:0.7rem;color:var(--white-30);margin-top:4px;">Sélectionne une capture d'écran de ton item.</p>
        </div>
        <div style="display:flex;gap:10px;">
            <button class="btn btn-secondary" onclick="prevStep()">${icons.arrowLeft} Retour</button>
            <button class="btn btn-primary" onclick="nextStepImage()">Continuer ${icons.arrowRight}</button>
        </div>`;
    } else {
        const gameName = createData.otherGame || games.find(g => g.id === createData.gameId)?.name || createData.gameId;
        const rcMap = { 'Commun': 'common', 'Rare': 'rare', 'Ultra-Rare': 'ultra-rare', 'Légendaire': 'legendary', 'Mythique': 'legendary' };
        const rc = rcMap[createData.rarity] || 'common';
        return `
        <div style="background:var(--bg-card);border:1px solid var(--border-light);border-radius:var(--radius-xl);padding:22px;margin-bottom:16px;">
            <div class="card-image ${rc}" style="height:110px;border-radius:var(--radius-lg);margin-bottom:14px;">
                <span class="item-emoji">📦</span>
                <span class="card-rarity rarity-${rc}">${createData.rarity}</span>
            </div>
            <h3 style="color:var(--white);">${createData.title}</h3>
            <p style="color:var(--white-50);">${gameName} · ${createData.rarity}</p>
            <p style="color:var(--white-70);margin-top:8px;">${createData.description || 'Aucune description'}</p>
            <div style="background:var(--bg-tertiary);padding:12px 14px;border-radius:var(--radius-md);margin-top:12px;border:1px solid var(--border-light);">
                <strong style="color:var(--white);">🔍 Recherche :</strong>
                <span style="color:var(--white-70);">${createData.searchFor}</span>
            </div>
        </div>
        <div style="display:flex;gap:10px;">
            <button class="btn btn-secondary" onclick="prevStep()">${icons.arrowLeft} Retour</button>
            <button class="btn btn-primary" onclick="publishAnnounce()">${icons.check} Publier l'annonce</button>
        </div>`;
    }
}

function nextStep() {
    if (currentCreateStep === 1) {
        const gameId = document.getElementById('createGame')?.value;
        const otherGame = document.getElementById('createOtherGame')?.value;
        if (!gameId) return showToast('⚠️ Sélectionne un jeu');
        if (gameId === 'other' && !otherGame) return showToast('⚠️ Entre le nom du jeu');
        createData.gameId = gameId; createData.otherGame = otherGame || null;
    } else if (currentCreateStep === 2) {
        const title = document.getElementById('createTitle')?.value;
        if (!title || !title.trim()) return showToast('⚠️ Entre le nom de ton item');
        createData.title = title.trim();
        createData.rarity = document.getElementById('createRarity')?.value || 'Commun';
        createData.description = document.getElementById('createDescription')?.value || '';
    } else if (currentCreateStep === 3) {
        const sf = document.getElementById('createSearchFor')?.value;
        if (!sf || !sf.trim()) return showToast('⚠️ Décris ce que tu recherches');
        createData.searchFor = sf.trim();
    }
    if (currentCreateStep < 4) { currentCreateStep++; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

async function nextStepImage() {
    const fileInput = document.getElementById('createImageFile');
    const sf = document.getElementById('createSearchFor')?.value;
    if (!sf || !sf.trim()) return showToast('⚠️ Décris ce que tu recherches');
    createData.searchFor = sf.trim();
    if (fileInput && fileInput.files[0]) {
        const file = fileInput.files[0];
        if (file.size > 8 * 1024 * 1024) return showToast("⚠️ L'image ne doit pas dépasser 8 MB");
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800; const MAX_HEIGHT = 800;
                let width = img.width; let height = img.height;
                if (width > height && width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
                else if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
                canvas.width = width; canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                createData.imageUrl = canvas.toDataURL('image/jpeg', 0.8);
                if (currentCreateStep < 4) { currentCreateStep++; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    } else {
        createData.imageUrl = null;
        if (currentCreateStep < 4) { currentCreateStep++; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    }
}

function prevStep() {
    if (currentCreateStep > 1) { currentCreateStep--; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

async function publishAnnounce() {
    const gameName = createData.otherGame || games.find(g => g.id === createData.gameId)?.name || createData.gameId;
    const rcMap = { 'Commun': 'common', 'Rare': 'rare', 'Ultra-Rare': 'ultra-rare', 'Légendaire': 'legendary', 'Mythique': 'legendary' };
    const emojiMap = { 'Commun': '⚪', 'Rare': '💙', 'Ultra-Rare': '💜', 'Légendaire': '⭐', 'Mythique': '🌟' };
    const newAnnounce = {
        gameId: createData.gameId, gameName, title: createData.title,
        rarity: createData.rarity || 'Commun', rarityClass: rcMap[createData.rarity] || 'common',
        imageEmoji: emojiMap[createData.rarity] || '📦', imageUrl: createData.imageUrl || null,
        description: createData.description || '', searchFor: createData.searchFor,
        sellerId: currentUser.id, sellerName: currentUser.pseudo, sellerAvatar: currentUser.avatar,
        sellerPicture: currentUser.picture || null,
        sellerRating: currentUser.trades > 0 ? currentUser.rating : 0.0,
        sellerTrades: currentUser.trades || 0,
        sellerPremium: currentUser.is_premium || false,
        sellerPremiumStyle: currentUser.premium_style || 'anim-gold',
        sellerBadges: (() => {
            const list = getUserBadges(currentUser);
            if ((currentUser.is_admin || currentUser.email === 'leoazex20@gmail.com') && !list.includes('Staff')) list.push('Staff');
            if (currentUser.is_premium && !list.includes('Premium')) list.push('Premium');
            return list;
        })(),
        views: 0, likes: 0, likedBy: [], editCount: 0, date: new Date().toISOString(),
    };
    if (AuraAuth._supabase) {
        try {
            const { data, error } = await AuraAuth._supabase.from('announces').insert([newAnnounce]).select();
            if (error) throw error;
            announces.unshift(data[0]);
        } catch (e) {
            console.error('Supabase save failed:', e);
            showToast('Erreur DB : ' + (e.message || JSON.stringify(e)));
            newAnnounce.id = Date.now();
            announces.unshift(newAnnounce);
        }
    } else { newAnnounce.id = Date.now(); announces.unshift(newAnnounce); }
    showToast('✅ Annonce publiée avec succès !');
    navigate('home');
}

function renderFavorites() {
    const favs = announces.filter(a => (a.likedBy || []).includes(currentUser.id));
    return `
    <div class="container">
        <h2 style="font-size:1.6rem;font-weight:800;color:var(--white);margin-bottom:20px;">❤️ Mes favoris</h2>
        ${favs.length > 0 ? `<div class="grid-3">${favs.map(a => renderCard(a)).join('')}</div>` : '<p class="empty-msg">Vous n\'avez pas encore d\'annonces en favoris.</p>'}
    </div>`;
}

// ==================== SETTINGS ====================
function renderSettings() {
    const isBooster = hasServerBoosterBadge(currentUser);
    return `
    <div class="container" style="max-width:600px;">
        <h2 style="font-size:1.6rem;font-weight:800;color:var(--white);margin-bottom:24px;">⚙️ Paramètres</h2>

        <div class="sidebar-card">
            <h3 class="section-title">Profil</h3>
            <div class="form-group">
                <label>Nom d'utilisateur (Pseudo) ${currentUser.is_premium ? '<span style="color:#FFD700;font-size:0.7rem;">(Premium: Pas de délai)</span>' : '<span style="color:var(--white-50);font-size:0.7rem;">(Changeable tous les 24h)</span>'}</label>
                <input type="text" id="settingsPseudo" value="${currentUser.pseudo || ''}" placeholder="Ton pseudo Roblox...">
            </div>

            <!-- BIO — gratuit pour tous -->
            <div class="form-group">
                <label>Bio / Description <span style="color:var(--white-50);font-size:0.7rem;">(Visible sur ton profil)</span></label>
                <textarea id="settingsBio" rows="3" placeholder="Parle de toi, de ton style de trade..." style="resize:vertical;">${currentUser.bio || ''}</textarea>
                <p style="font-size:0.7rem;color:var(--white-30);margin-top:4px;" id="bioCharCount">${(currentUser.bio || '').length}/200 caractères</p>
            </div>

            <!-- PREMIUM ONLY BLOCK -->
            <div style="background:rgba(162,58,255,0.06); border:1px solid rgba(162,58,255,0.25); border-radius:var(--radius-lg); padding:18px; margin-bottom:18px;">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:14px;">
                    <span style="font-size:1.1rem;">💎</span>
                    <span style="color:#BF5AF2; font-weight:800; font-size:0.95rem;">Fonctionnalités Premium</span>
                    ${!currentUser.is_premium ? `<button class="btn btn-purple btn-sm" style="margin-left:auto;font-size:0.72rem;padding:4px 10px;" onclick="navigate('premium')">Débloquer</button>` : ''}
                </div>

                <!-- Bannière / Cover -->
                <div class="form-group" style="${!currentUser.is_premium ? 'opacity:0.45;pointer-events:none;' : ''}">
                    <label style="color:${currentUser.is_premium ? 'var(--white)' : 'var(--white-30)'};">
                        🖼️ Bannière / Cover
                        ${!currentUser.is_premium ? '<span style="color:#BF5AF2;font-size:0.7rem;margin-left:6px;">⭐ Premium requis</span>' : ''}
                    </label>
                    <input type="text" id="settingsBannerUrl" value="${currentUser.banner_url || ''}" placeholder="URL image ou GIF (1200×300 recommandé)">
                </div>

                <!-- Couleur d'accent -->
                <div class="form-group" style="${!currentUser.is_premium ? 'opacity:0.45;pointer-events:none;' : ''}">
                    <label style="color:${currentUser.is_premium ? 'var(--white)' : 'var(--white-30)'};">
                        🎨 Couleur d'accent du profil
                        ${!currentUser.is_premium ? '<span style="color:#BF5AF2;font-size:0.7rem;margin-left:6px;">⭐ Premium requis</span>' : ''}
                    </label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="color" id="settingsAccentColor" value="${currentUser.profile_accent || '#FF6B2B'}" style="width:48px;height:38px;padding:2px;background:var(--bg-card);border:1px solid var(--border-light);border-radius:var(--radius-md);cursor:pointer;">
                        <input type="text" id="settingsAccentColorHex" value="${currentUser.profile_accent || '#FF6B2B'}" placeholder="#FF6B2B" style="flex:1;" oninput="syncColorPicker(this.value)">
                        <div id="accentPreviewDot" style="width:24px;height:24px;border-radius:50%;background:${currentUser.profile_accent || '#FF6B2B'};border:2px solid rgba(255,255,255,0.2);flex-shrink:0;"></div>
                    </div>
                    <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;">
                        ${['#FF6B2B','#007AFF','#BF5AF2','#30D158','#FFD700','#FF453A','#5AC8FA','#FF2D55'].map(c =>
                            `<div onclick="setAccentColor('${c}')" style="width:22px;height:22px;border-radius:50%;background:${c};cursor:pointer;border:2px solid rgba(255,255,255,0.15);transition:transform 0.1s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"></div>`
                        ).join('')}
                    </div>
                </div>

                <!-- Titre / Statut personnalisé -->
                <div class="form-group" style="${!currentUser.is_premium ? 'opacity:0.45;pointer-events:none;' : ''}">
                    <label style="color:${currentUser.is_premium ? 'var(--white)' : 'var(--white-30)'};">
                        🏷️ Titre / Statut personnalisé
                        ${!currentUser.is_premium ? '<span style="color:#BF5AF2;font-size:0.7rem;margin-left:6px;">⭐ Premium requis</span>' : ''}
                    </label>
                    <input type="text" id="settingsProfileTitle" value="${currentUser.profile_title || ''}" placeholder='Ex: "Trader Pro", "Chasseur de Légendaires"...'>
                    <p style="font-size:0.7rem;color:var(--white-30);margin-top:4px;">S'affiche sous ton pseudo sur ton profil public.</p>
                </div>

                <!-- Réseaux sociaux -->
                <div class="form-group" style="${!currentUser.is_premium ? 'opacity:0.45;pointer-events:none;' : ''}; margin-bottom:0;">
                    <label style="color:${currentUser.is_premium ? 'var(--white)' : 'var(--white-30)'};">
                        🔗 Réseaux Sociaux
                        ${!currentUser.is_premium ? '<span style="color:#BF5AF2;font-size:0.7rem;margin-left:6px;">⭐ Premium requis</span>' : ''}
                    </label>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div style="display:flex;align-items:center;gap:8px;">
                            <span style="font-size:1rem;width:22px;flex-shrink:0;">📺</span>
                            <input type="text" id="settingsYoutube" value="${currentUser.social_youtube || ''}" placeholder="YouTube (ex: @MaChaine ou lien complet)">
                        </div>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <span style="font-size:1rem;width:22px;flex-shrink:0;">🎵</span>
                            <input type="text" id="settingsTiktok" value="${currentUser.social_tiktok || ''}" placeholder="TikTok (ex: @MonPseudo)">
                        </div>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <span style="font-size:1rem;width:22px;flex-shrink:0;">𝕏</span>
                            <input type="text" id="settingsTwitter" value="${currentUser.social_twitter || ''}" placeholder="Twitter/X (ex: @MonPseudo)">
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label>Compte Discord</label>
                <div style="color:var(--white-50); font-size:0.75rem; margin-bottom:12px; line-height:1.45;">
                    Connecte ton Discord en un clic (comme sur guns.lol). On vérifie automatiquement que <strong>c'est bien ton compte</strong> qui boost le serveur.
                </div>
                ${currentUser.discord
                    ? `<div style="display:flex; align-items:center; gap:10px; background:rgba(88,101,242,0.1); border:1px solid rgba(88,101,242,0.3); border-radius:var(--radius-md); padding:10px 14px; margin-bottom:12px;">
                        <div style="flex:1;">
                            <div style="color:#5865F2; font-weight:700; font-size:0.9rem;">✅ ${currentUser.discord}</div>
                            <div style="font-size:0.7rem; margin-top:2px; color:${isBooster ? '#30D158' : 'var(--white-50)'};">
                                ${isBooster ? '🔥 Boost serveur vérifié' : 'Booste le serveur puis reconnecte Discord pour le badge'}
                            </div>
                        </div>
                        <button class="btn btn-ghost btn-sm" style="color:var(--danger); font-size:0.7rem;" onclick="unlinkDiscord()">Délier</button>
                    </div>
                    ${!isBooster ? `<button type="button" class="btn btn-block" onclick="openDiscordOAuthLink()" style="background:#5865F2;border:none;color:#fff;display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 18px;font-weight:700;font-size:0.95rem;border-radius:var(--radius-md);">Vérifier mon boost Discord</button>` : `
                    <div style="background:rgba(255,149,0,0.1); border:1px solid rgba(255,149,0,0.25); border-radius:var(--radius-md); padding:10px 14px; font-size:0.78rem; color:#FF9500; font-weight:600; margin-bottom:8px;">
                        ✅ Badge Server Booster actif
                    </div>`}`
                    : `<div style="display:flex; flex-direction:column; gap:10px;">
                        <button type="button" class="btn btn-block" onclick="openDiscordOAuthLink()" style="background:#5865F2;border:none;color:#fff;display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 18px;font-weight:700;font-size:0.95rem;border-radius:var(--radius-md);">Vérifier mon Discord</button>
                    </div>`
                }
            </div>
            ${currentUser.is_premium ? `
            <div class="form-group">
                <label style="color:#FFD700;">Avatar Premium (URL ou GIF)</label>
                <input type="text" id="settingsAvatarUrl" value="${currentUser.picture || ''}" placeholder="Lien vers une image ou un GIF (Imgur, Discord...)">
            </div>
            ` : `
            <div class="form-group" style="opacity:0.5;pointer-events:none;">
                <label>Avatar Personnalisé <span style="color:#FFD700;font-size:0.7rem;">(⭐ Réservé Premium)</span></label>
                <input type="text" placeholder="Débloque le Premium pour utiliser un GIF !">
            </div>
            `}
            <button class="btn btn-primary" onclick="updateProfile()">Enregistrer les modifications</button>
        </div>

        <div class="sidebar-card mt-4">
            <h3 class="section-title">Sécurité & Compte</h3>
            <p style="color:var(--white-50);font-size:0.9rem;margin-bottom:16px;">
                Connecté avec : <strong style="color:var(--white);">${currentUser.email || 'Google Account'}</strong>
            </p>
            <div style="display:flex;flex-direction:column;gap:10px;">
                <button class="btn btn-secondary btn-block" onclick="AuraAuth.logOut()">Se déconnecter</button>
                <button class="btn btn-ghost btn-block" style="color:var(--danger);border:1px solid rgba(255, 69, 58, 0.2);" onclick="confirmDeleteAccount()">
                    Supprimer mon compte Aura Trade
                </button>
            </div>
        </div>
    </div>`;
}

// Color picker sync helpers
function syncColorPicker(hexValue) {
    const colorInput = document.getElementById('settingsAccentColor');
    const dot = document.getElementById('accentPreviewDot');
    if (/^#[0-9A-Fa-f]{6}$/.test(hexValue)) {
        if (colorInput) colorInput.value = hexValue;
        if (dot) dot.style.background = hexValue;
    }
}
function setAccentColor(hex) {
    const colorInput = document.getElementById('settingsAccentColor');
    const hexInput = document.getElementById('settingsAccentColorHex');
    const dot = document.getElementById('accentPreviewDot');
    if (colorInput) colorInput.value = hex;
    if (hexInput) hexInput.value = hex;
    if (dot) dot.style.background = hex;
}

async function generateDiscordVerification() {
    if (!AuraAuth._supabase || !currentUser || currentUser.id === 'guest') return showToast("❌ Connecte-toi d'abord avec Google.");
    const code = 'AT-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    await AuraAuth._supabase.from('discord_verifications').delete().eq('user_id', currentUser.id);
    const row = { user_id: currentUser.id, code, verified: false, verification_type: 'link' };
    let { error } = await AuraAuth._supabase.from('discord_verifications').insert(row);
    if (error && error.message?.includes('verification_type')) { delete row.verification_type; ({ error } = await AuraAuth._supabase.from('discord_verifications').insert(row)); }
    if (error) { console.error('Verification error:', error); return showToast('❌ Erreur lors de la génération. Réessaie.'); }
    const modalHtml = `
    <div class="modal-overlay" id="discordVerifyModal" style="display:flex;">
        <div class="modal" style="text-align:center; max-width:400px; padding:24px;">
            <h3 style="margin-bottom:15px; color:#5865F2;">Lier Discord</h3>
            <p style="color:var(--white-70); font-size:0.95rem; margin-bottom:15px; line-height:1.4;">Copiez cette commande et envoyez-la dans le serveur Discord Aura Trade :</p>
            <div style="background:rgba(0,0,0,0.3); padding:15px; border-radius:var(--radius-md); font-size:1.4rem; font-weight:800; letter-spacing:1px; margin-bottom:15px; color:#30D158; user-select:all; border:1px solid rgba(255,255,255,0.1);">
                !verify ${code}
            </div>
            <button class="btn btn-primary btn-block" onclick="navigator.clipboard.writeText('!verify ${code}'); showToast('✅ Commande copiée !');">📋 Copier la commande</button>
            <button class="btn btn-secondary btn-block mt-2" onclick="document.getElementById('discordVerifyModal').remove()">Fermer</button>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openDiscordOAuthLink() {
    if (!AuraAuth._supabase || !currentUser || currentUser.id === 'guest') return showToast("❌ Connecte-toi d'abord avec Google.");
    const base = window.AURA_DISCORD_OAUTH_API || 'http://localhost:3850';
    const popupUrl = `${base.replace(/\/$/, '')}/start?userId=${encodeURIComponent(currentUser.id)}`;
    const w = 600, h = 700;
    const left = Math.round((screen.width - w) / 2);
    const top = Math.round((screen.height - h) / 2);
    const popup = window.open(popupUrl, 'discord_oauth', `width=${w},height=${h},left=${left},top=${top}`);
    if (!popup) return showToast('❌ Popup bloquée. Autorise les popups pour ce site.');
    const origin = (() => { try { return new URL(base).origin; } catch (e) { return null; } })();
    function onMessage(e) {
        if (origin && e.origin !== origin && e.origin !== window.location.origin) return;
        const d = e.data;
        if (d && d.auraDiscordOAuth) {
            if (d.discord) {
                currentUser.discord = d.discord;
                if (d.isBooster) {
                    const badges = getUserBadges(currentUser) || [];
                    if (!badges.includes('Server Booster')) { badges.push('Server Booster'); currentUser.badges = badges; showToast('✅ Discord lié et boost détecté ! Badge ajouté.'); }
                    else showToast('✅ Discord lié : ' + d.discord + ' (Boost déjà présent)');
                } else showToast('✅ Discord lié : ' + d.discord);
                localStorage.setItem('aura_user', JSON.stringify(currentUser));
                renderApp();
            } else showToast('❌ Échec du lien Discord');
            window.removeEventListener('message', onMessage);
            try { if (popup && !popup.closed) popup.close(); } catch (e) { }
        }
    }
    window.addEventListener('message', onMessage);
}

async function unlinkDiscord() {
    if (!confirm('Veux-tu vraiment délier ton compte Discord ?')) return;
    if (!AuraAuth._supabase || !currentUser) return;
    try {
        currentUser.discord = null;
        let badges = getUserBadges(currentUser);
        badges = badges.filter(b => b !== 'Server Booster');
        currentUser.badges = badges;
        await AuraAuth._supabase.from('profiles').update({ discord: null, badges }).eq('id', currentUser.id);
        await AuraAuth._supabase.from('announces').update({ sellerBadges: badges }).eq('sellerId', currentUser.id);
        localStorage.setItem('aura_user', JSON.stringify(currentUser));
        showToast('✅ Compte Discord délié.');
        renderApp();
    } catch (e) { console.error(e); showToast('❌ Erreur lors de la suppression du lien Discord.'); }
}

async function logStaffAction(action, targetId, details) {
    if (!AuraAuth._supabase || !currentUser || currentUser.id === 'guest') return;
    try {
        const { error } = await AuraAuth._supabase.from('staff_logs').insert({
            staff_id: currentUser.id, staff_pseudo: currentUser.pseudo || currentUser.email || 'Staff',
            action, target_id: targetId || null, details
        });
        if (error) { console.error('[Staff Log] ERREUR INSERT:', JSON.stringify(error)); return; }
        console.log(`[Staff Log] Action logged: ${action} - ${details}`);
    } catch (e) { console.error('[Staff Log] EXCEPTION:', e.message, e); }
}

// ==================== ADMIN PANEL ====================
function renderAdmin() {
    if (currentUser.email !== 'leoazex20@gmail.com' && !currentUser.is_admin && !currentUser.can_view_logs) return '<div class="container">Accès refusé</div>';
    if (_adminLiveInterval) { clearInterval(_adminLiveInterval); _adminLiveInterval = null; }
    setTimeout(adminShowDashboard, 50);
    setTimeout(adminShowUsers, 50);
    setTimeout(adminShowAnnounces, 50);
    setTimeout(adminShowLogs, 50);
    setTimeout(adminShowUnban, 50);
    _adminLiveInterval = setInterval(() => {
        if (currentPage !== 'admin') { clearInterval(_adminLiveInterval); _adminLiveInterval = null; return; }
        adminShowDashboard();
        const usersTab = document.getElementById('adminTab_users');
        if (usersTab && usersTab.classList.contains('active')) {
            const searchInput = document.getElementById('adminSearchUserInput');
            if (searchInput && document.activeElement !== searchInput && !searchInput.value.trim()) adminShowUsers();
        }
        const announcesTab = document.getElementById('adminTab_announces');
        if (announcesTab && announcesTab.classList.contains('active')) adminShowAnnounces();
        const logsTab = document.getElementById('adminTab_logs');
        if (logsTab && logsTab.classList.contains('active')) adminShowLogs();
        const unbanTab = document.getElementById('adminTab_unban');
        if (unbanTab && unbanTab.classList.contains('active')) adminShowUnban();
    }, 5000);
    return `
    <div class="container" style="max-width: 800px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <h2 style="font-size:1.8rem;font-weight:900;color:var(--orange);">👑 Panel Admin</h2>
            <button class="btn btn-secondary" onclick="navigate('settings')">Retour</button>
        </div>
        <div class="admin-tabs">
            <div class="admin-tab active" onclick="switchAdminTab('dashboard', this)">📊 Dashboard</div>
            <div class="admin-tab" onclick="switchAdminTab('users', this)">👥 Utilisateurs</div>
            <div class="admin-tab" onclick="switchAdminTab('announces', this)">📢 Annonces</div>
            <div class="admin-tab" onclick="switchAdminTab('logs', this)">📜 Logs</div>
            <div class="admin-tab" onclick="switchAdminTab('unban', this)">🔓 Unban</div>
        </div>
        <div id="adminTab_dashboard" class="admin-view-content active">
            <div id="adminDashboardView"><p style="color:var(--white-50);">Chargement du tableau de bord...</p></div>
        </div>
        <div id="adminTab_users" class="admin-view-content">
            <input type="text" id="adminSearchUserInput" class="admin-search-input" placeholder="Rechercher par pseudo, ID ou email..." onkeyup="filterAdminUsers()">
            <div id="adminUsersView" class="sidebar-card"><p style="color:var(--white-50);">Chargement des utilisateurs...</p></div>
        </div>
        <div id="adminTab_announces" class="admin-view-content">
            <div id="adminAnnouncesView" class="sidebar-card"><p style="color:var(--white-50);">Chargement des annonces...</p></div>
        </div>
        <div id="adminTab_logs" class="admin-view-content">
            <div id="adminLogsView" class="sidebar-card"><p style="color:var(--white-50);">Chargement des logs...</p></div>
        </div>
        <div id="adminTab_unban" class="admin-view-content">
            <div id="adminUnbanView" class="sidebar-card"><p style="color:var(--white-50);">Chargement des utilisateurs bannis...</p></div>
        </div>
    </div>`;
}

function switchAdminTab(tabId, el) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-view-content').forEach(c => c.classList.remove('active'));
    if (el) el.classList.add('active');
    const content = document.getElementById('adminTab_' + tabId);
    if (content) content.classList.add('active');
}

async function adminShowDashboard() {
    const view = document.getElementById('adminDashboardView');
    if (!view) return;
    let totalUsers = '...', onlineUsers = '...', staffCount = '...';
    if (AuraAuth._supabase) {
        const { data: users } = await AuraAuth._supabase.from('profiles').select('last_seen, is_admin, email, badges');
        if (users) {
            totalUsers = users.length;
            onlineUsers = users.filter(u => u.last_seen && (Date.now() - new Date(u.last_seen).getTime()) < 3600000).length;
            staffCount = users.filter(u => u.is_admin || u.email === 'leoazex20@gmail.com' || getUserBadges(u).includes('Staff')).length;
        }
    }
    view.innerHTML = `
        <div class="admin-stats-grid">
            <div class="admin-stat-card"><div class="admin-stat-title">Total Annonces</div><div class="admin-stat-value" style="color:var(--orange);">${announces.length}</div></div>
            <div class="admin-stat-card"><div class="admin-stat-title">Utilisateurs Inscrits</div><div class="admin-stat-value" style="color:#FFD700;">${totalUsers}</div></div>
            <div class="admin-stat-card"><div class="admin-stat-title">En Ligne (1h)</div><div class="admin-stat-value" style="color:#30D158;">${onlineUsers}</div></div>
            <div class="admin-stat-card"><div class="admin-stat-title">Membres du Staff</div><div class="admin-stat-value" style="color:#5AC8FA;">${staffCount}</div></div>
        </div>`;
}

function filterAdminUsers() {
    const input = document.getElementById('adminSearchUserInput');
    if (!input) return;
    const query = input.value.toLowerCase();
    document.querySelectorAll('.admin-user-row').forEach(row => {
        const text = row.getAttribute('data-searchable') || '';
        row.style.display = text.toLowerCase().includes(query) ? 'flex' : 'none';
    });
}

async function adminShowUsers() {
    const view = document.getElementById('adminUsersView');
    if (!view) return;
    if (!AuraAuth._supabase) return view.innerHTML = '<p>Erreur: Supabase non connecté.</p>';
    const { data: users, error } = await AuraAuth._supabase.from('profiles').select('*').order('last_seen', { ascending: false });
    if (error) return view.innerHTML = '<p>Erreur: ' + error.message + '</p>';
    const staffUsers = users.filter(u => u.is_admin || u.email === 'leoazex20@gmail.com' || getUserBadges(u).includes('Staff'));
    const playerUsers = users.filter(u => !(u.is_admin || u.email === 'leoazex20@gmail.com' || getUserBadges(u).includes('Staff')));
    const renderRow = (u) => {
        const unreadSupportCount = messages.filter(m => m.fromUserId === u.id && m.toUserId === 'aura-support' && !m.read).length;
        const searchData = escapeHtmlJsString(`${u.pseudo || ''} ${u.email || ''} ${u.id}`);
        let sanctionBadge = '';
        if (u.banned) {
            if (u.banned_until) {
                const untilStr = new Date(u.banned_until).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
                sanctionBadge = `<span style="background:rgba(255,107,43,0.15); border:1px solid rgba(255,107,43,0.3); color:var(--orange); font-size:0.75rem; font-weight:700; padding:2px 8px; border-radius:6px; margin-left:6px; display:inline-flex; align-items:center; gap:4px;">⏳ Ban → ${untilStr}</span>`;
            } else sanctionBadge = `<span style="background:rgba(255,69,58,0.15); border:1px solid rgba(255,69,58,0.3); color:#FF453A; font-size:0.75rem; font-weight:700; padding:2px 8px; border-radius:6px; margin-left:6px; display:inline-flex; align-items:center; gap:4px;">🚫 Banni Définitif</span>`;
        } else if (u.pending_warning) {
            sanctionBadge = `<span style="background:rgba(255,214,10,0.15); border:1px solid rgba(255,214,10,0.3); color:#FFD60A; font-size:0.75rem; font-weight:700; padding:2px 8px; border-radius:6px; margin-left:6px; display:inline-flex; align-items:center; gap:4px;">⚠️ Averti</span>`;
        }
        return `
            <div class="admin-user-row" data-searchable="${searchData}" style="padding:14px; background:rgba(255,255,255,0.02); border:1px solid var(--border-light); border-radius:var(--radius-md); margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; transition:var(--transition);">
                <div style="flex:1; min-width:200px;">
                    <strong style="color:var(--white); display:inline-flex; align-items:center; flex-wrap:wrap; gap:4px; font-size:1.05rem;">${u.pseudo || 'Sans pseudo'}${renderUserBadges(u)}${sanctionBadge}</strong>
                    <div style="font-size:0.75rem;color:var(--white-50); margin-top:4px; font-family:monospace; background:rgba(0,0,0,0.2); padding:2px 6px; border-radius:4px; display:inline-block;">ID: ${u.id}</div>
                    <div style="font-size:0.8rem;color:var(--white-70); margin-top:4px;">${u.email === 'leoazex20@gmail.com' ? 'Email masqué' : (u.email || 'Email masqué')}</div>
                    ${u.banned ? `<div style="font-size:0.75rem; margin-top:6px; background:rgba(255,69,58,0.08); border:1px solid rgba(255,69,58,0.2); border-radius:6px; padding:5px 10px; display:inline-flex; flex-direction:column; gap:2px;"><span style="color:#FF453A; font-weight:700;">🚫 ${u.banned_until ? '⏳ Ban temporaire jusqu\'au ' + new Date(u.banned_until).toLocaleString('fr-FR', {day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit'}) : 'Ban définitif'}</span>${u.ban_reason ? `<span style="color:var(--white-50);">Raison : ${u.ban_reason}</span>` : ''}</div>` : ''}
                    ${u.pending_warning ? `<div style="font-size:0.75rem; margin-top:6px; background:rgba(255,214,10,0.08); border:1px solid rgba(255,214,10,0.2); border-radius:6px; padding:5px 10px; display:inline-flex; align-items:center; gap:6px;"><span style="color:#FFD60A; font-weight:700;">⚠️ Avertissement en attente de lecture</span></div>` : ''}
                </div>
                <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
                    <button class="btn btn-secondary btn-sm" onclick="adminEditPseudo('${u.id}')">✏️ Pseudo</button>
                    <button class="btn btn-secondary btn-sm" style="background:rgba(255,149,0,0.15); border:1px solid rgba(255,149,0,0.3); color:#FF9500;" onclick="adminManageBadges('${u.id}')">🏷️ Badges</button>
                    <button class="btn btn-primary btn-sm" style="display:flex;align-items:center;gap:6px;" onclick="openSupportChat('${u.id}', '${escapeHtmlJsString(u.pseudo || 'Sans pseudo')}')">
                        ✉️ Message
                        ${unreadSupportCount > 0 ? `<span style="background:white; color:var(--orange); font-size:0.7rem; font-weight:800; min-width:16px; height:16px; padding:0 4px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">${unreadSupportCount}</span>` : ''}
                    </button>
                    <button class="btn btn-ghost btn-sm" style="color:#FF453A; background:rgba(255,69,58,0.12); border:1px solid rgba(255,69,58,0.2); font-weight:700;" onclick="openModerationModal('${u.id}', '${escapeHtmlJsString(u.pseudo || 'Sans pseudo')}', ${u.banned ? 'true' : 'false'})">🔨 Modérer</button>
                </div>
            </div>`;
    };
    view.innerHTML = `
        <div style="display: flex; gap: 32px; flex-wrap: wrap; margin-top: 12px; align-items: start;">
            <div style="flex: 1; min-width: 320px;">
                <h4 style="font-size:1.15rem; color:#5AC8FA; font-weight:900; margin-bottom:16px; display:flex; align-items:center; gap:8px; border-bottom:2px solid rgba(90, 200, 250, 0.2); padding-bottom:10px;">🛡️ Staff (${staffUsers.length})</h4>
                <div style="max-height:600px; overflow-y:auto; padding-right:8px; display:flex; flex-direction:column; gap:10px;">
                    ${staffUsers.length === 0 ? '<p style="color:var(--white-30); font-size:0.9rem; font-style:italic;">Aucun membre du staff.</p>' : staffUsers.map(renderRow).join('')}
                </div>
            </div>
            <div class="admin-players-col" style="flex: 1.2; min-width: 320px; border-left: 1px solid rgba(255,255,255,0.08); padding-left: 32px;">
                <h4 style="font-size:1.15rem; color:#fff; font-weight:900; margin-bottom:16px; display:flex; align-items:center; gap:8px; border-bottom:2px solid rgba(255, 255, 255, 0.1); padding-bottom:10px;">👥 Joueurs (${playerUsers.length})</h4>
                <div style="max-height:600px; overflow-y:auto; padding-right:8px; display:flex; flex-direction:column; gap:10px;">
                    ${playerUsers.length === 0 ? '<p style="color:var(--white-30); font-size:0.9rem; font-style:italic;">Aucun joueur.</p>' : playerUsers.map(renderRow).join('')}
                </div>
            </div>
        </div>`;
}

// ==================== ONGLET UNBAN ====================
async function adminShowUnban() {
    const view = document.getElementById('adminUnbanView');
    if (!view) return;
    if (!AuraAuth._supabase) return view.innerHTML = '<p style="color:var(--danger);">Supabase non connecté.</p>';
    const { data: bannedUsers, error } = await AuraAuth._supabase.from('profiles').select('*').eq('banned', true).order('last_seen', { ascending: false });
    if (error) return view.innerHTML = `<p style="color:var(--danger);">Erreur: ${error.message}</p>`;
    if (!bannedUsers || bannedUsers.length === 0) {
        view.innerHTML = `<h3 class="section-title" style="color:#30D158; margin-bottom:16px; display:flex; align-items:center; gap:8px;">🔓 Utilisateurs Bannis</h3><div style="text-align:center; padding:50px 0;"><div style="font-size:3.5rem; margin-bottom:14px;">✅</div><p style="color:var(--white-70); font-size:1rem; font-weight:600;">Aucun utilisateur banni pour le moment.</p></div>`;
        return;
    }
    view.innerHTML = `
        <h3 class="section-title" style="color:#30D158; margin-bottom:16px; display:flex; align-items:center; gap:8px;">
            🔓 Utilisateurs Bannis
            <span style="background:rgba(255,69,58,0.15); border:1px solid rgba(255,69,58,0.3); color:#FF453A; font-size:0.78rem; font-weight:800; padding:3px 10px; border-radius:20px;">${bannedUsers.length}</span>
        </h3>
        <div style="display:flex; flex-direction:column; gap:10px; max-height:600px; overflow-y:auto; padding-right:8px;">
            ${bannedUsers.map(u => {
                const isTempBan = u.banned_until && new Date(u.banned_until) > new Date();
                const untilStr = u.banned_until ? new Date(u.banned_until).toLocaleString('fr-FR', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' }) : null;
                const banTypeColor = isTempBan ? 'rgba(255,107,43,0.15)' : 'rgba(255,69,58,0.1)';
                const banTypeBorder = isTempBan ? 'rgba(255,107,43,0.3)' : 'rgba(255,69,58,0.25)';
                const banTypeTextColor = isTempBan ? 'var(--orange)' : '#FF453A';
                const banTypeLabel = isTempBan ? '⏳ Ban Temporaire' : '🚫 Ban Définitif';
                return `
                <div style="padding:18px; background:rgba(255,69,58,0.04); border:1px solid rgba(255,69,58,0.15); border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px; transition:var(--transition);">
                    <div style="flex:1; min-width:220px;">
                        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:8px;">
                            <strong style="color:var(--white); font-size:1.05rem;">${u.pseudo || 'Sans pseudo'}</strong>
                            <span style="background:${banTypeColor}; border:1px solid ${banTypeBorder}; color:${banTypeTextColor}; font-size:0.72rem; font-weight:700; padding:2px 9px; border-radius:20px;">${banTypeLabel}</span>
                        </div>
                        <div style="font-size:0.75rem; color:var(--white-40); font-family:monospace; background:rgba(0,0,0,0.25); padding:2px 8px; border-radius:4px; display:inline-block; margin-bottom:6px;">ID: ${u.id}</div>
                        <div style="font-size:0.8rem; color:var(--white-60); margin-bottom:4px;">${u.email === 'leoazex20@gmail.com' ? 'Email masqué' : (u.email || 'Email masqué')}</div>
                        ${isTempBan ? `<div style="font-size:0.78rem; color:var(--orange); margin-top:4px; display:flex; align-items:center; gap:5px;"><span>⏳</span> <span>Banni jusqu'au <strong>${untilStr}</strong></span></div>` : ''}
                        ${u.ban_reason ? `<div style="margin-top:6px; background:rgba(255,69,58,0.06); border:1px solid rgba(255,69,58,0.15); border-radius:var(--radius-sm); padding:6px 10px; font-size:0.78rem; color:var(--white-70); display:flex; gap:6px;"><span style="flex-shrink:0;">📋</span><span><strong style="color:var(--white);">Raison :</strong> ${u.ban_reason}</span></div>` : ''}
                    </div>
                    <button onclick="adminUnbanFromPanel('${u.id}', '${escapeHtmlJsString(u.pseudo || 'Sans pseudo')}')"
                        style="padding:10px 22px; background:#30D158; color:#000; border:none; border-radius:var(--radius-md); font-weight:800; cursor:pointer; font-size:0.92rem; transition:opacity 0.2s; flex-shrink:0; white-space:nowrap;"
                        onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
                        ✅ Débannir
                    </button>
                </div>`;
            }).join('')}
        </div>`;
}

async function adminUnbanFromPanel(userId, pseudo) {
    if (!confirm(`Débannir ${pseudo} ?`)) return;
    try {
        const { data, error } = await AuraAuth._supabase.from('profiles').update({ banned: false, banned_until: null, ban_reason: null }).eq('id', userId).select();
        if (error) throw error;
        if (!data || data.length === 0) { showToast('❌ Échec : vérifiez les permissions SQL (GRANT + RLS).'); return; }
        showToast(`✅ ${pseudo} a été débanni.`);
        await logStaffAction('DEBANNIR_UTILISATEUR', userId, `A débanni l'utilisateur "${pseudo}" (ID: ${userId}) depuis l'onglet Unban`);
        adminShowUnban(); adminShowUsers();
    } catch (e) { console.error('[adminUnbanFromPanel] Erreur:', e); showToast('❌ Erreur : ' + e.message); }
}

async function adminToggleLogsPermission(userId, allow) {
    if (!AuraAuth._supabase) return showToast('❌ Supabase non connecté');
    try {
        const { data: user, error: fetchErr } = await AuraAuth._supabase.from('profiles').select('pseudo, email').eq('id', userId).single();
        if (fetchErr || !user) return showToast('❌ Utilisateur non trouvé');
        const { error } = await AuraAuth._supabase.from('profiles').update({ can_view_logs: allow }).eq('id', userId);
        if (error) throw error;
        showToast(allow ? '✅ Permission logs accordée' : '🚫 Permission logs retirée');
        await logStaffAction('GERER_PERMISSIONS', userId, `A ${allow ? 'accordé' : 'retiré'} la permission de voir les logs à l'utilisateur "${user.pseudo || 'Sans pseudo'}" (${user.email === 'leoazex20@gmail.com' ? 'Email masqué' : (user.email || 'Email masqué')})`);
        adminShowUsers();
    } catch (e) { console.error(e); showToast('❌ Erreur de mise à jour des permissions'); }
}

async function adminEditPseudo(userId) {
    if (!AuraAuth._supabase) return showToast('❌ Supabase non connecté');
    try {
        const { data: user } = await AuraAuth._supabase.from('profiles').select('pseudo').eq('id', userId).single();
        const currentPseudo = user ? (user.pseudo || 'Sans pseudo') : '';
        const p = prompt('Nouveau pseudo pour ' + currentPseudo + ' :');
        if (!p) return;
        await AuraAuth._supabase.from('profiles').update({ pseudo: p.trim() }).eq('id', userId);
        showToast('✅ Pseudo mis à jour');
        await logStaffAction('RENOMMER_UTILISATEUR', userId, `A modifié le pseudo de l'utilisateur "${currentPseudo}" (ID: ${userId}) en "${p.trim()}"`);
        adminShowUsers();
    } catch (e) { console.error(e); }
}

function openSupportChat(playerId, playerPseudo) {
    const unreadMsgs = messages.filter(m => m.fromUserId === playerId && m.toUserId === 'aura-support' && !m.read);
    if (unreadMsgs.length > 0) {
        unreadMsgs.forEach(m => m.read = true); updateBadges(); adminShowUsers();
        if (AuraAuth._supabase) AuraAuth._supabase.from('messages').update({ read: true }).eq('fromUserId', playerId).eq('toUserId', 'aura-support').then(({ error }) => { if (error) console.error('Failed to mark support messages as read:', error); });
    }
    const conv = messages.filter(m => (m.fromUserId === 'aura-support' && m.toUserId === playerId) || (m.toUserId === 'aura-support' && m.fromUserId === playerId)).sort((a, b) => new Date(a.date) - new Date(b.date));
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay'; overlay.id = 'activeModal';
    overlay.innerHTML = `
    <div class="modal" style="max-width:540px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
            <div class="avatar-sm">🛡️</div>
            <strong style="color:var(--white);">Support Aura Trade <span style="color:var(--white-50);font-weight:400;">(Chat avec ${playerPseudo})</span></strong>
        </div>
        <div class="msg-thread" id="chatThread">
            ${conv.map(m => {
                const isSent = m.fromUserId === 'aura-support';
                if (isSent) return `<div style="display:flex;align-items:flex-end;gap:8px;align-self:flex-end;max-width:85%;flex-direction:row-reverse;"><div class="avatar-sm" style="width:28px;height:28px;font-size:0.7rem;flex-shrink:0;">🛡️</div><div style="text-align:right;"><div style="font-size:0.7rem;color:var(--white-50);margin-bottom:3px;font-weight:600;">Support Aura Trade</div><div class="msg-bubble sent" style="align-self:auto;">${m.content}<div class="time">${new Date(m.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div></div></div></div>`;
                const u = getProfileDisplay(m.fromUserId);
                return `<div style="display:flex;align-items:flex-end;gap:8px;align-self:flex-start;max-width:85%;"><div class="avatar-sm" style="width:28px;height:28px;font-size:0.7rem;flex-shrink:0;">${u.avatar}</div><div><div style="font-size:0.7rem;color:var(--white-50);margin-bottom:3px;font-weight:600;">${u.name}</div><div class="msg-bubble received" style="align-self:auto;">${m.content}<div class="time">${new Date(m.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div></div></div></div>`;
            }).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:14px;">
            <input type="text" id="chatInput" placeholder="Écris ton message en tant que Support..." style="flex:1;padding:11px 14px;background:var(--bg-input);border:1.5px solid var(--border);border-radius:var(--radius-full);color:var(--white);font-family:'Inter',sans-serif;outline:none;">
            <button class="btn btn-primary" onclick="sendSupportChatMsg('${playerId}', '${escapeHtmlJsString(playerPseudo)}')">${icons.send}</button>
        </div>
    </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    setTimeout(() => { const t = document.getElementById('chatThread'); if (t) t.scrollTop = t.scrollHeight; }, 150);
}

async function sendSupportChatMsg(playerId, playerPseudo) {
    const input = document.getElementById('chatInput');
    const content = input?.value.trim();
    if (!content) return;
    const newMsg = { announceId: 1, fromUserId: 'aura-support', toUserId: playerId, content, date: new Date().toISOString(), read: false };
    if (AuraAuth._supabase) {
        try {
            const { data, error } = await AuraAuth._supabase.from('messages').insert([newMsg]).select();
            if (error) throw error;
            messages.push(data[0]); closeModal(); openSupportChat(playerId, playerPseudo);
        } catch (e) { console.error('Support Chat send failed:', e); messages.push(newMsg); closeModal(); openSupportChat(playerId, playerPseudo); }
    } else { messages.push(newMsg); closeModal(); openSupportChat(playerId, playerPseudo); }
}

// ==================== MODERATION MODAL ====================
function openModerationModal(userId, pseudo, isBanned) {
    closeModal();
    const escapedPseudo = escapeHtmlJsString(pseudo);
    const overlay = document.createElement('div');
    overlay.id = 'moderationModal';
    overlay.style.cssText = `position:fixed; inset:0; background:rgba(0,0,0,0.85); backdrop-filter:blur(12px); z-index:9999; display:flex; align-items:center; justify-content:center; padding:20px; animation: fadeIn 0.2s ease-out;`;
    overlay.innerHTML = `
        <div style="background:linear-gradient(135deg, #1a1a1e 0%, #16161a 100%); border:1px solid rgba(255,69,58,0.3); border-radius:20px; padding:28px; width:100%; max-width:460px; box-shadow:0 20px 60px rgba(0,0,0,0.8);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <div>
                    <div style="font-size:1.4rem; font-weight:900; color:#fff;">🔨 Modérer</div>
                    <div style="color:rgba(255,255,255,0.5); font-size:0.88rem; margin-top:2px;">Cible : <strong style="color:var(--orange);">${pseudo}</strong></div>
                </div>
                <button onclick="closeModal()" style="background:rgba(255,255,255,0.08); border:none; color:#fff; width:32px; height:32px; border-radius:50%; cursor:pointer; font-size:1.1rem;">✕</button>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px;">
                <div style="background:rgba(255,214,10,0.07); border:1px solid rgba(255,214,10,0.2); border-radius:14px; padding:16px;">
                    <div style="font-weight:700; color:#FFD60A; margin-bottom:10px;">⚠️ Avertissement</div>
                    <textarea id="warnReason_${userId}" placeholder="Raison de l'avertissement..." rows="2" style="width:100%; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:10px; color:#fff; padding:10px; font-family:inherit; font-size:0.9rem; outline:none; resize:none; box-sizing:border-box;"></textarea>
                    <button onclick="adminWarn('${userId}', '${escapedPseudo}')" style="margin-top:8px; padding:8px 18px; background:#FFD60A; color:#000; border:none; border-radius:10px; font-weight:800; cursor:pointer; font-size:0.9rem;">Envoyer l'avertissement</button>
                </div>
                <div style="background:rgba(255,107,43,0.07); border:1px solid rgba(255,107,43,0.2); border-radius:14px; padding:16px;">
                    <div style="font-weight:700; color:var(--orange); margin-bottom:10px;">⏳ Ban Temporaire</div>
                    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:8px;">
                        <select id="tempbanDuration_${userId}" style="flex:1; min-width:120px; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.1); border-radius:10px; color:#fff; padding:8px; font-family:inherit; font-size:0.85rem; outline:none;">
                            <option value="1">1 heure</option>
                            <option value="24" selected>1 jour</option>
                            <option value="72">3 jours</option>
                            <option value="168">1 semaine</option>
                            <option value="720">30 jours</option>
                        </select>
                    </div>
                    <textarea id="tempbanReason_${userId}" placeholder="Raison du ban temporaire..." rows="2" style="width:100%; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:10px; color:#fff; padding:10px; font-family:inherit; font-size:0.9rem; outline:none; resize:none; box-sizing:border-box;"></textarea>
                    <button onclick="adminTempBan('${userId}', '${escapedPseudo}')" style="margin-top:8px; padding:8px 18px; background:var(--orange); color:#fff; border:none; border-radius:10px; font-weight:800; cursor:pointer; font-size:0.9rem;">Appliquer le ban temporaire</button>
                </div>
                <div style="background:rgba(255,69,58,0.07); border:1px solid rgba(255,69,58,0.3); border-radius:14px; padding:16px;">
                    <div style="font-weight:700; color:#FF453A; margin-bottom:10px;">🚫 Ban Définitif</div>
                    <textarea id="permbanReason_${userId}" placeholder="Raison du ban définitif..." rows="2" style="width:100%; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:10px; color:#fff; padding:10px; font-family:inherit; font-size:0.9rem; outline:none; resize:none; box-sizing:border-box;"></textarea>
                    <button onclick="adminPermBan('${userId}', '${escapedPseudo}')" style="margin-top:8px; padding:8px 18px; background:#FF453A; color:#fff; border:none; border-radius:10px; font-weight:800; cursor:pointer; font-size:0.9rem;">Bannir définitivement</button>
                </div>
                ${isBanned ? `
                <div style="background:rgba(48,209,88,0.07); border:1px solid rgba(48,209,88,0.3); border-radius:14px; padding:16px; display:flex; justify-content:space-between; align-items:center;">
                    <div style="font-weight:700; color:#30D158;">✅ Cet utilisateur est banni</div>
                    <button onclick="adminUnban('${userId}')" style="padding:8px 18px; background:#30D158; color:#000; border:none; border-radius:10px; font-weight:800; cursor:pointer;">Débannir</button>
                </div>` : ''}
            </div>
        </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

// ==================== SANCTION FUNCTIONS ====================
async function adminWarn(userId, pseudo) {
    const reason = document.getElementById(`warnReason_${userId}`)?.value?.trim();
    if (!reason) return showToast('⚠️ Écris une raison pour l\'avertissement.');
    try {
        const warningData = JSON.stringify({ reason, date: new Date().toISOString() });
        const { data, error } = await AuraAuth._supabase.from('profiles').update({ pending_warning: warningData }).eq('id', userId).select();
        if (error) throw error;
        if (!data || data.length === 0) { showToast('❌ Échec : vérifiez les permissions SQL (GRANT + RLS).'); return; }
        const { data: check } = await AuraAuth._supabase.from('profiles').select('pending_warning').eq('id', userId).single();
        if (!check?.pending_warning) { showToast('❌ Échec : l\'avertissement n\'a pas été enregistré en base.'); return; }
        await logStaffAction('AVERTISSEMENT', userId, `A averti ${pseudo} : "${reason}"`);
        showToast('⚠️ Avertissement envoyé à ' + pseudo);
        closeModal(); adminShowUsers();
    } catch (e) { console.error('[adminWarn] Erreur:', e); showToast('❌ Erreur : ' + e.message); }
}

async function adminKick(userId, pseudo) {
    const reason = document.getElementById(`kickReason_${userId}`)?.value?.trim();
    if (!reason) return showToast('⚠️ Écris une raison pour le kick.');
    try {
        const kickToken = Date.now().toString();
        const { data, error } = await AuraAuth._supabase.from('profiles').update({ kick_token: kickToken, pending_kick: JSON.stringify({ reason, date: new Date().toISOString() }) }).eq('id', userId).select();
        if (error) throw error;
        if (!data || data.length === 0) { showToast('❌ Échec : vérifiez les permissions SQL.'); return; }
        await logStaffAction('KICK', userId, `A expulsé ${pseudo} : "${reason}"`);
        showToast('🥾 ' + pseudo + ' a été expulsé.');
        closeModal(); adminShowUsers();
    } catch (e) { console.error('[adminKick] Erreur:', e); showToast('❌ Erreur : ' + e.message); }
}

async function adminTempBan(userId, pseudo) {
    const hours = parseInt(document.getElementById(`tempbanDuration_${userId}`)?.value || '24');
    const reason = document.getElementById(`tempbanReason_${userId}`)?.value?.trim();
    if (!reason) return showToast('⚠️ Écris une raison pour le ban temporaire.');
    const bannedUntil = new Date(Date.now() + hours * 3600000).toISOString();
    const label = hours < 24 ? `${hours}h` : hours < 168 ? `${hours / 24}j` : hours < 720 ? `${Math.round(hours / 168)} semaine(s)` : '30 jours';
    try {
        const { data, error } = await AuraAuth._supabase.from('profiles').update({ banned: true, banned_until: bannedUntil, ban_reason: reason }).eq('id', userId).select();
        if (error) throw error;
        if (!data || data.length === 0) { showToast('❌ Échec : vérifiez les permissions SQL (GRANT + RLS).'); return; }
        const { data: check } = await AuraAuth._supabase.from('profiles').select('banned, banned_until').eq('id', userId).single();
        if (!check?.banned || !check?.banned_until) { showToast('❌ Échec : le ban temporaire n\'a pas été enregistré en base.'); return; }
        await logStaffAction('BAN_TEMPORAIRE', userId, `A banni temporairement ${pseudo} pour ${label} : "${reason}"`);
        showToast(`⏳ ${pseudo} banni pour ${label}.`);
        closeModal(); adminShowUsers(); adminShowUnban();
    } catch (e) { console.error('[adminTempBan] Erreur:', e); showToast('❌ Erreur : ' + e.message); }
}

async function adminPermBan(userId, pseudo) {
    const reason = document.getElementById(`permbanReason_${userId}`)?.value?.trim();
    if (!reason) return showToast('⚠️ Écris une raison pour le ban définitif.');
    if (!confirm(`Bannir définitivement ${pseudo} ?\nRaison : ${reason}`)) return;
    try {
        const { data, error } = await AuraAuth._supabase.from('profiles').update({ banned: true, banned_until: null, ban_reason: reason }).eq('id', userId).select();
        if (error) throw error;
        if (!data || data.length === 0) { showToast('❌ Échec : vérifiez les permissions SQL (GRANT + RLS).'); return; }
        const { data: check } = await AuraAuth._supabase.from('profiles').select('banned, ban_reason').eq('id', userId).single();
        if (!check?.banned) { showToast('❌ Échec : le ban définitif n\'a pas été enregistré en base.'); return; }
        await logStaffAction('BAN_DEFINITIF', userId, `A banni définitivement ${pseudo} : "${reason}"`);
        showToast('🚫 ' + pseudo + ' banni définitivement.');
        closeModal(); adminShowUsers(); adminShowUnban();
    } catch (e) { console.error('[adminPermBan] Erreur:', e); showToast('❌ Erreur : ' + e.message); }
}

async function adminBan(userId) { await adminPermBan(userId, userId); }

async function adminUnban(userId) {
    if (!confirm('Débannir cet utilisateur ?')) return;
    try {
        const { data: user } = await AuraAuth._supabase.from('profiles').select('pseudo, email').eq('id', userId).single();
        const ident = user ? `${user.pseudo || 'Sans pseudo'}` : `ID: ${userId}`;
        const { data, error } = await AuraAuth._supabase.from('profiles').update({ banned: false, banned_until: null, ban_reason: null }).eq('id', userId).select();
        if (error) throw error;
        if (!data || data.length === 0) { showToast('❌ Échec : vérifiez les permissions SQL.'); return; }
        showToast('✅ ' + ident + ' débanni.');
        await logStaffAction('DEBANNIR_UTILISATEUR', userId, `A débanni l'utilisateur : ${ident}`);
        closeModal(); adminShowUsers(); adminShowUnban();
    } catch (e) { console.error('[adminUnban] Erreur:', e); showToast('❌ Erreur : ' + e.message); }
}

// ==================== REAL-TIME SANCTION CHECK ====================
let _lastKickToken = null;
let _sanctionCheckInterval = null;

function startSanctionPolling() {
    if (_sanctionCheckInterval) return;
    _sanctionCheckInterval = setInterval(checkCurrentUserSanctions, 12000);
    checkCurrentUserSanctions();
}

async function checkCurrentUserSanctions() {
    if (!AuraAuth._supabase || !currentUser?.id || currentUser.id === 'guest') return;
    if (currentUser.is_admin || currentUser.email === 'leoazex20@gmail.com') return;
    try {
        const { data, error: fetchError } = await AuraAuth._supabase.from('profiles').select('banned, banned_until, ban_reason, kick_token, pending_kick, pending_warning').eq('id', currentUser.id).single();
        if (fetchError) { console.error('[SanctionCheck] Erreur fetch:', fetchError); return; }
        if (!data) return;
        if (data.pending_warning) {
            let warn = data.pending_warning;
            if (typeof warn === 'string') { try { warn = JSON.parse(warn); } catch(e) { warn = { reason: warn }; } }
            showSanctionOverlay('warn', { reason: warn?.reason || 'Aucune raison spécifiée.' });
            await AuraAuth._supabase.from('profiles').update({ pending_warning: null }).eq('id', currentUser.id);
            return;
        }
        if (data.kick_token && data.kick_token !== _lastKickToken) {
            if (_lastKickToken !== null) {
                let kickData = data.pending_kick;
                if (typeof kickData === 'string') { try { kickData = JSON.parse(kickData); } catch(e) { kickData = { reason: kickData }; } }
                showSanctionOverlay('kick', { reason: kickData?.reason || 'Aucune raison spécifiée.' });
                await AuraAuth._supabase.from('profiles').update({ kick_token: null, pending_kick: null }).eq('id', currentUser.id);
                setTimeout(() => { AuraAuth.logOut(); window.location.href = 'login.html'; }, 6000);
                return;
            }
            _lastKickToken = data.kick_token;
        }
        if (_lastKickToken === null) _lastKickToken = data.kick_token || '';
        if (data.banned && data.banned_until) {
            const until = new Date(data.banned_until).getTime();
            if (Date.now() < until) { showSanctionOverlay('tempban', { reason: data.ban_reason, until: data.banned_until }); return; }
            else await AuraAuth._supabase.from('profiles').update({ banned: false, banned_until: null, ban_reason: null }).eq('id', currentUser.id);
        }
        if (data.banned && !data.banned_until) {
            showSanctionOverlay('permban', { reason: data.ban_reason });
            setTimeout(() => { AuraAuth.logOut(); window.location.href = 'login.html'; }, 8000);
        }
    } catch(e) { /* silent fail */ }
}

function showSanctionOverlay(type, { reason, until } = {}) {
    if (document.getElementById('sanctionOverlay')) return;
    const configs = {
        warn: { icon: '⚠️', title: 'Avertissement officiel', subtitle: 'Tu as reçu un avertissement de la part du staff Aura Trade.', color: '#FFD60A', glow: 'rgba(255,214,10,0.3)', bg: 'rgba(255,214,10,0.06)', border: 'rgba(255,214,10,0.4)', btnLabel: 'J\'ai compris', btnAction: 'document.getElementById(\'sanctionOverlay\').remove()', canClose: true },
        kick: { icon: '🥾', title: 'Tu as été expulsé', subtitle: 'Le staff Aura Trade t\'a expulsé du site. Tu seras déconnecté dans quelques secondes.', color: '#FF9500', glow: 'rgba(255,149,0,0.3)', bg: 'rgba(255,149,0,0.06)', border: 'rgba(255,149,0,0.4)', btnLabel: 'Déconnexion...', btnAction: '', canClose: false },
        tempban: { icon: '⏳', title: 'Compte suspendu temporairement', subtitle: until ? `Ton accès est suspendu jusqu\'au ${new Date(until).toLocaleString('fr-FR', { day:'2-digit', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' })}.` : 'Ton compte est suspendu temporairement.', color: 'var(--orange)', glow: 'rgba(255,107,43,0.3)', bg: 'rgba(255,107,43,0.06)', border: 'rgba(255,107,43,0.4)', btnLabel: 'Quitter', btnAction: 'AuraAuth.logOut(); window.location.href=\'login.html\'', canClose: false },
        permban: { icon: '🚫', title: 'Compte banni définitivement', subtitle: 'Ton compte Aura Trade a été banni définitivement par le staff suite à une violation de nos règles.', color: '#FF453A', glow: 'rgba(255,69,58,0.35)', bg: 'rgba(255,69,58,0.06)', border: 'rgba(255,69,58,0.5)', btnLabel: 'Quitter', btnAction: 'AuraAuth.logOut(); window.location.href=\'login.html\'', canClose: false },
    };
    const c = configs[type] || configs.warn;
    const el = document.createElement('div');
    el.id = 'sanctionOverlay';
    el.style.cssText = `position:fixed; inset:0; z-index:99999; background:rgba(0,0,0,0.92); backdrop-filter:blur(20px) saturate(0.5); display:flex; align-items:center; justify-content:center; padding:24px; animation: sanctionIn 0.5s cubic-bezier(0.16,1,0.3,1) both;`;
    el.innerHTML = `
        <style>
            @keyframes sanctionIn { from { opacity:0; transform:scale(0.9) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }
            @keyframes sanctionPulse { 0%,100% { box-shadow: 0 0 0 0 ${c.glow}; } 50% { box-shadow: 0 0 0 20px rgba(0,0,0,0); } }
            @keyframes sanctionShake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
        </style>
        <div style="background: linear-gradient(135deg, #111113 0%, #0d0d0f 100%); border: 1.5px solid ${c.border}; border-radius: 24px; padding: 40px 32px; max-width: 460px; width: 100%; text-align: center; box-shadow: 0 0 80px ${c.glow}, 0 30px 80px rgba(0,0,0,0.9); animation: sanctionShake 0.5s 0.3s ease both;">
            <div style="font-size:0.85rem; font-weight:800; letter-spacing:0.15em; color:rgba(255,255,255,0.3); text-transform:uppercase; margin-bottom:24px;">⚡ Aura Trade — Staff</div>
            <div style="font-size:4rem; margin-bottom:20px; display:inline-flex; align-items:center; justify-content:center; width:90px; height:90px; background:${c.bg}; border:2px solid ${c.border}; border-radius:50%; animation:sanctionPulse 2s ease-in-out infinite;">${c.icon}</div>
            <h2 style="color:${c.color}; font-size:1.5rem; font-weight:900; margin:0 0 8px; letter-spacing:-0.02em;">${c.title}</h2>
            <p style="color:rgba(255,255,255,0.55); font-size:0.92rem; line-height:1.6; margin-bottom:24px;">${c.subtitle}</p>
            ${reason ? `<div style="background:${c.bg}; border:1px solid ${c.border}; border-radius:14px; padding:16px 20px; margin-bottom:24px; text-align:left;"><div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:${c.color}; margin-bottom:8px;">📋 Raison</div><div style="color:#fff; font-size:0.95rem; line-height:1.5; font-weight:500;">${reason}</div></div>` : ''}
            <button onclick="${c.btnAction}" style="width:100%; padding:14px; background:${c.color}; color:${type === 'warn' ? '#000' : '#fff'}; border:none; border-radius:14px; font-size:1rem; font-weight:800; cursor:pointer; font-family:inherit; letter-spacing:0.02em; transition:opacity 0.2s;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">${c.btnLabel}</button>
            <div style="margin-top:16px; font-size:0.75rem; color:rgba(255,255,255,0.2);">Si tu penses que c'est une erreur, contacte le support.</div>
        </div>`;
    document.body.appendChild(el);
}

function adminShowAnnounces() {
    const view = document.getElementById('adminAnnouncesView');
    if (!view) return;
    view.innerHTML = `
        <h3 class="section-title" style="color:var(--orange);">📢 Modération des Annonces (${announces.length} en ligne)</h3>
        <div style="max-height:500px;overflow-y:auto; padding-right:8px;">
            ${announces.length === 0 ? `<p style="color:var(--white-50); padding:14px; background:rgba(255,255,255,0.02); border-radius:var(--radius-md);">Aucune annonce active en ligne.</p>` : announces.map(a => `
                <div style="padding:14px; background:rgba(255,255,255,0.02); border:1px solid var(--border-light); border-radius:var(--radius-md); margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                    <div style="flex:1; min-width:200px;">
                        <strong style="color:var(--white); font-size:1.05rem;">${a.title}</strong>
                        <div style="font-size:0.85rem;color:var(--white-70); margin-top:4px;">Créé par <strong style="color:var(--white);">${a.sellerName}</strong></div>
                        <div style="font-size:0.75rem;color:var(--white-50); margin-top:4px; font-family:monospace; background:rgba(0,0,0,0.2); padding:2px 6px; border-radius:4px; display:inline-block;">ID: ${a.id}</div>
                    </div>
                    <button class="btn btn-ghost btn-sm" style="color:var(--danger); background:rgba(255,69,58,0.1);" onclick="adminDeleteAnnounce(${a.id})">🗑️ Supprimer l'annonce</button>
                </div>`).join('')}
        </div>`;
}

async function adminShowLogs() {
    const view = document.getElementById('adminLogsView');
    if (!view) return;
    if (!AuraAuth._supabase) { view.innerHTML = '<p style="color:var(--white-50); padding:10px;">Supabase non connecté.</p>'; return; }
    try {
        const { data: logs, error } = await AuraAuth._supabase.from('staff_logs').select('*').order('created_at', { ascending: false }).limit(100);
        if (error) throw error;
        if (!logs || logs.length === 0) { view.innerHTML = `<h3 class="section-title" style="color:var(--orange);">📜 Logs de Modération</h3><p style="color:var(--white-50); padding:10px;">Aucune action enregistrée pour le moment.</p>`; return; }
        const actionColors = {
            'RENOMMER_UTILISATEUR': { bg: 'rgba(90, 200, 250, 0.1)', color: '#5AC8FA', label: '✏️ Pseudo' },
            'BANNIR_UTILISATEUR': { bg: 'rgba(255, 69, 58, 0.1)', color: '#FF453A', label: '🚫 Banni' },
            'DEBANNIR_UTILISATEUR': { bg: 'rgba(48, 209, 88, 0.1)', color: '#30D158', label: '✅ Débanni' },
            'AVERTISSEMENT': { bg: 'rgba(255, 214, 10, 0.1)', color: '#FFD60A', label: '⚠️ Avertissement' },
            'KICK': { bg: 'rgba(255, 149, 0, 0.1)', color: '#FF9500', label: '🦶 Kick' },
            'BAN_TEMPORAIRE': { bg: 'rgba(255, 107, 43, 0.1)', color: '#FF6B2B', label: '⏳ Ban Temp' },
            'BAN_DEFINITIF': { bg: 'rgba(255, 69, 58, 0.15)', color: '#FF453A', label: '🚫 Ban Déf' },
            'GERER_BADGES': { bg: 'rgba(255, 159, 10, 0.1)', color: '#FF9F0A', label: '🏷️ Badges' },
            'DONNER_PREMIUM': { bg: 'rgba(191, 90, 242, 0.1)', color: '#BF5AF2', label: '💎 +Premium' },
            'RETIRER_PREMIUM': { bg: 'rgba(191, 90, 242, 0.05)', color: '#BF5AF2', label: '💎 -Premium' },
            'PROMOUVOIR_ADMIN': { bg: 'rgba(48, 209, 88, 0.1)', color: '#30D158', label: '👑 +Admin' },
            'RETIRER_ADMIN': { bg: 'rgba(255, 69, 58, 0.1)', color: '#FF453A', label: '👑 -Admin' },
            'SUPPRIMER_ANNONCE': { bg: 'rgba(255, 69, 58, 0.1)', color: '#FF453A', label: '🗑️ Annonce Sup' },
        };
        view.innerHTML = `
            <h3 class="section-title" style="color:var(--orange); display:flex; align-items:center; gap:8px;">📜 Logs de Modération (100 derniers)</h3>
            <div style="max-height:500px; overflow-y:auto; margin-top:12px; display:flex; flex-direction:column; gap:8px; padding-right:8px;">
                ${logs.map(log => {
                    const style = actionColors[log.action] || { bg: 'rgba(255, 255, 255, 0.05)', color: 'var(--white-50)', label: log.action };
                    const dateStr = new Date(log.created_at).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
                    return `
                        <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-light); padding:14px; border-radius:var(--radius-md); display:flex; flex-direction:column; gap:8px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                    <span style="font-size:0.75rem; font-weight:700; background:${style.bg}; color:${style.color}; padding:4px 10px; border-radius:12px; border:1px solid ${style.color}22;">${style.label}</span>
                                    <strong style="color:var(--white); font-size:0.95rem;">🧑‍💻 ${log.staff_pseudo}</strong>
                                </div>
                                <span style="font-size:0.75rem; color:var(--white-30); background:rgba(0,0,0,0.3); padding:4px 8px; border-radius:var(--radius-md);">${dateStr}</span>
                            </div>
                            <div style="font-size:0.88rem; color:var(--white-70); line-height:1.5;">${log.details}</div>
                            ${currentUser.email === 'leoazex20@gmail.com' ? `<div style="margin-top:8px; text-align:right;"><button onclick="deleteStaffLog(${log.id})" style="background:rgba(255,69,58,0.1); border:1px solid rgba(255,69,58,0.3); color:#FF453A; font-size:0.72rem; font-weight:700; padding:3px 10px; border-radius:8px; cursor:pointer;">🗑️ Supprimer</button></div>` : ''}
                        </div>`;
                }).join('')}
            </div>`;
    } catch (err) { console.error('Failed to load staff logs:', err); view.innerHTML = `<p style="color:var(--danger); padding:10px;">Erreur lors du chargement des logs : ${err.message}</p>`; }
}

async function deleteStaffLog(logId) {
    if (currentUser.email !== 'leoazex20@gmail.com') return;
    if (!confirm('Supprimer ce log ?')) return;
    const { error } = await AuraAuth._supabase.from('staff_logs').delete().eq('id', logId);
    if (error) return showToast('❌ Erreur : ' + error.message);
    showToast('🗑️ Log supprimé.'); adminShowLogs();
}

async function adminDeleteAnnounce(id) {
    if (!confirm('Supprimer cette annonce ?')) return;
    const announceToDelete = announces.find(a => a.id === id);
    const details = announceToDelete ? `A supprimé l'annonce "${announceToDelete.title}" (ID: ${id}) créée par ${announceToDelete.sellerName}` : `A supprimé l'annonce (ID: ${id})`;
    await AuraAuth._supabase.from('announces').delete().eq('id', id);
    announces = announces.filter(a => a.id !== id);
    showToast('🗑️ Annonce supprimée');
    await logStaffAction('SUPPRIMER_ANNONCE', id.toString(), details);
    adminShowAnnounces();
}

async function adminGrantPremium(userId) {
    if (!confirm('Donner le grade Premium à cet utilisateur ?')) return;
    try {
        const { data: profile } = await AuraAuth._supabase.from('profiles').select('badges').eq('id', userId).single();
        const badges = getUserBadges(profile);
        if (!badges.includes('Premium')) badges.push('Premium');
        await AuraAuth._supabase.from('profiles').update({ is_premium: true, badges }).eq('id', userId);
        await AuraAuth._supabase.from('announces').update({ sellerPremium: true, sellerBadges: badges }).eq('sellerId', userId);
        announces.forEach(ann => { if (ann.sellerId === userId) { ann.sellerPremium = true; ann.sellerBadges = badges; } });
        showToast('⭐ Premium accordé');
        await logStaffAction('DONNER_PREMIUM', userId, `A attribué le grade Premium à l'utilisateur (ID: ${userId})`);
        adminShowUsers(); renderApp();
    } catch (e) { console.error(e); showToast('❌ Erreur lors de l\'attribution'); }
}

async function adminRevokePremium(userId) {
    if (!confirm('Retirer le grade Premium à cet utilisateur ?')) return;
    try {
        const { data: profile } = await AuraAuth._supabase.from('profiles').select('badges').eq('id', userId).single();
        const badges = getUserBadges(profile).filter(b => b !== 'Premium');
        await AuraAuth._supabase.from('profiles').update({ is_premium: false, badges }).eq('id', userId);
        await AuraAuth._supabase.from('announces').update({ sellerPremium: false, sellerBadges: badges }).eq('sellerId', userId);
        announces.forEach(ann => { if (ann.sellerId === userId) { ann.sellerPremium = false; ann.sellerBadges = badges; } });
        showToast('❌ Premium retiré');
        await logStaffAction('RETIRER_PREMIUM', userId, `A retiré le grade Premium à l'utilisateur (ID: ${userId})`);
        adminShowUsers(); renderApp();
    } catch (e) { console.error(e); showToast('❌ Erreur lors du retrait'); }
}

async function adminGrantAdmin(userId) {
    if (!confirm('Promouvoir cet utilisateur au rang d\'Administrateur ?')) return;
    try {
        const { data: profile } = await AuraAuth._supabase.from('profiles').select('badges').eq('id', userId).single();
        const badges = getUserBadges(profile);
        if (!badges.includes('Staff')) badges.push('Staff');
        await AuraAuth._supabase.from('profiles').update({ is_admin: true, badges }).eq('id', userId);
        if (userId === currentUser.id) { currentUser.is_admin = true; currentUser.badges = badges; }
        showToast('👑 Administrateur promu');
        await logStaffAction('PROMOUVOIR_ADMIN', userId, `A promu l'utilisateur (ID: ${userId}) au rang d'Administrateur (Badge Staff ajouté)`);
        adminShowUsers();
    } catch (e) { console.error(e); showToast('❌ Erreur lors de la promotion'); }
}

async function adminRevokeAdmin(userId) {
    const { data: user } = await AuraAuth._supabase.from('profiles').select('email, badges').eq('id', userId).single();
    if (user && user.email === 'leoazex20@gmail.com') return showToast('❌ Vous ne pouvez pas vous retirer vous-même');
    if (!confirm('Retirer le rôle d\'Administrateur de cet utilisateur ?')) return;
    try {
        const badges = getUserBadges(user).filter(b => b !== 'Staff');
        await AuraAuth._supabase.from('profiles').update({ is_admin: false, badges }).eq('id', userId);
        if (userId === currentUser.id) { currentUser.is_admin = false; currentUser.badges = badges; }
        showToast('🚫 Administrateur retiré');
        await logStaffAction('RETIRER_ADMIN', userId, `A révoqué le rang d'Administrateur de l'utilisateur (ID: ${userId}) (Badge Staff retiré)`);
        adminShowUsers();
    } catch (e) { console.error(e); showToast('❌ Erreur lors du retrait'); }
}

async function adminManageBadges(userId) {
    if (!AuraAuth._supabase) return showToast('❌ Supabase non connecté');
    try {
        const { data: user, error } = await AuraAuth._supabase.from('profiles').select('pseudo, badges').eq('id', userId).single();
        if (error || !user) return showToast('❌ Impossible de charger l\'utilisateur');
        const userPseudo = user.pseudo || 'Sans pseudo';
        const activeBadges = getUserBadges(user);
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay'; overlay.id = 'badgeManagerModal';
        overlay.innerHTML = `
        <div class="modal" style="max-width:380px; text-align:left;">
            <h3 style="color:var(--white); margin-bottom:12px; display:flex; align-items:center; gap:8px;">🏷️ Gérer les Badges</h3>
            <p style="color:var(--white-50); font-size:0.85rem; margin-bottom:20px;">Gérer les badges de <strong>${userPseudo}</strong></p>
            <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:24px;">
                ${Object.keys(BADGE_DEFS).map(bKey => {
                    const def = BADGE_DEFS[bKey];
                    const isChecked = activeBadges.includes(bKey);
                    return `
                    <label style="display:flex; align-items:center; justify-content:space-between; background:var(--bg-input); padding:10px 14px; border-radius:var(--radius-md); border:1.5px solid var(--border); cursor:pointer;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="font-size:1.2rem;">${def.icon}</span>
                            <div><span style="font-weight:600; color:${def.color};">${def.label}</span><div style="font-size:0.72rem; color:var(--white-30);">${def.title}</div></div>
                        </div>
                        <input type="checkbox" class="badge-checkbox" data-badge="${bKey}" ${isChecked ? 'checked' : ''} style="margin-left:auto; width:18px; height:18px; accent-color:var(--orange);">
                    </label>`;
                }).join('')}
            </div>
            <div style="display:flex; gap:10px; justify-content:flex-end;">
                <button class="btn btn-secondary" onclick="closeBadgeModal()">Annuler</button>
                <button class="btn btn-primary" onclick="adminSaveBadges('${userId}')">Enregistrer</button>
            </div>
        </div>`;
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('active'), 10);
    } catch (e) { console.error(e); }
}

function closeBadgeModal() {
    const modal = document.getElementById('badgeManagerModal');
    if (modal) { modal.classList.remove('active'); setTimeout(() => modal.remove(), 300); }
}

async function adminSaveBadges(userId) {
    if (!AuraAuth._supabase) return;
    const checkboxes = document.querySelectorAll('.badge-checkbox');
    const selectedBadges = [];
    checkboxes.forEach(cb => { if (cb.checked) selectedBadges.push(cb.getAttribute('data-badge')); });
    try {
        const hasPremium = selectedBadges.includes('Premium');
        const hasStaff = selectedBadges.includes('Staff');
        const { error } = await AuraAuth._supabase.from('profiles').update({ badges: selectedBadges, is_premium: hasPremium, is_admin: hasStaff }).eq('id', userId);
        if (error) throw error;
        if (userId === currentUser.id) { currentUser.badges = selectedBadges; currentUser.is_premium = hasPremium; currentUser.is_admin = hasStaff; }
        await AuraAuth._supabase.from('announces').update({ sellerBadges: selectedBadges, sellerPremium: hasPremium }).eq('sellerId', userId);
        announces.forEach(ann => { if (ann.sellerId === userId) { ann.sellerPremium = hasPremium; ann.sellerBadges = selectedBadges; } });
        showToast('✅ Badges et Rôles mis à jour avec succès !');
        await logStaffAction('GERER_BADGES', userId, `A mis à jour les badges de l'utilisateur (ID: ${userId}) : [${selectedBadges.join(', ')}] (Premium: ${hasPremium}, Admin: ${hasStaff})`);
        closeBadgeModal(); adminShowUsers(); renderApp();
    } catch (e) { console.error('Error saving badges:', e); showToast('❌ Erreur lors de l\'enregistrement.'); }
}

// ==================== PREMIUM PAGE ====================
function renderPremium() {
    const checkIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    return `
    <div class="container" style="max-width:1100px; padding: 40px 14px;">
        <div class="premium-hero" style="text-align:center; margin-bottom:40px;">
            <h1 style="font-size:2.8rem;font-weight:900;color:#A23AFF;margin-bottom:16px;letter-spacing:-0.03em;">Boutique & <span style="color:#FFD700;">Premium</span></h1>
            <p style="color:var(--white-70);font-size:1.1rem;max-width:700px;margin:0 auto;">L'abonnement ultime et les insignes de prestige pour dominer le marché. Obtenez un statut exclusif et rejoignez l'élite.</p>
        </div>
        <div style="display:flex; flex-direction:row; gap:30px; width:100%; align-items:stretch; flex-wrap:wrap;">
            ${currentUser.is_premium ? `
            <div class="sidebar-card" style="flex: 1.2; min-width: 320px; border: 1.5px solid rgba(162,58,255,0.3); background: rgba(162,58,255,0.03); padding: 24px; margin: 0; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <h3 class="section-title" style="color:#A23AFF; font-size:1.25rem; margin-bottom:6px;">⚙️ Configuration Premium</h3>
                    <p style="color:var(--white-50);font-size:0.82rem;margin-bottom:20px;">Choisissez le dégradé animé qui apparaîtra sur toutes vos annonces et votre profil.</p>
                    <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
                        <label style="display:flex;align-items:center;gap:12px;cursor:pointer;"><input type="radio" name="premiumStyle" value="anim-gold" ${currentUser.premium_style === 'anim-gold' || !currentUser.premium_style ? 'checked' : ''}><span class="animated-pseudo anim-gold" style="font-size:1.1rem; font-weight:700;">Or Classique</span></label>
                        <label style="display:flex;align-items:center;gap:12px;cursor:pointer;"><input type="radio" name="premiumStyle" value="anim-rgb" ${currentUser.premium_style === 'anim-rgb' ? 'checked' : ''}><span class="animated-pseudo anim-rgb" style="font-size:1.1rem; font-weight:700;">Arc-en-ciel (RGB)</span></label>
                        <label style="display:flex;align-items:center;gap:12px;cursor:pointer;"><input type="radio" name="premiumStyle" value="anim-purple" ${currentUser.premium_style === 'anim-purple' ? 'checked' : ''}><span class="animated-pseudo anim-purple" style="font-size:1.1rem; font-weight:700;">Élitis (Violet)</span></label>
                        <label style="display:flex;align-items:center;gap:12px;cursor:pointer;"><input type="radio" name="premiumStyle" value="anim-ocean" ${currentUser.premium_style === 'anim-ocean' ? 'checked' : ''}><span class="animated-pseudo anim-ocean" style="font-size:1.1rem; font-weight:700;">Océan Glacé</span></label>
                    </div>
                    <div style="border-top:1px solid rgba(162,58,255,0.15); padding-top:16px; margin-top:16px;">
                        <h4 style="color:#FFD700; font-size:0.95rem; font-weight:700; margin-bottom:6px;">Avatar Premium (GIF & Image)</h4>
                        <p style="color:var(--white-50);font-size:0.75rem;margin-bottom:12px;">Collez le lien direct (URL) d'une image (PNG, JPG) ou d'un GIF pour votre profil.</p>
                        <div class="form-group" style="margin-bottom:0;"><input type="text" id="configAvatarUrl" value="${currentUser.picture || ''}" placeholder="https://exemple.com/mon-gif.gif" style="border: 1px solid rgba(162,58,255,0.25); background:rgba(0,0,0,0.2);"></div>
                    </div>
                </div>
                <button class="btn btn-purple btn-block" onclick="savePremiumConfig()" style="margin-top:24px;">Sauvegarder ma Configuration</button>
            </div>
            ` : `
            <div class="pricing-card" style="flex: 1.2; min-width: 320px; margin: 0; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <h3 style="color:#A23AFF; text-transform:uppercase; font-size:0.85rem; letter-spacing:0.1em; margin-bottom:12px; font-weight:800;">Abonnement Élitis</h3>
                    <div class="pricing-price" style="font-size:2.4rem; margin-bottom:10px;">Sur Devis <span style="font-size:1rem;">/ à vie</span></div>
                    <p style="color:var(--white-50);font-size:0.88rem;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:16px;margin-bottom:16px;">Places strictement limitées. Soumis à validation.</p>
                    <ul class="pricing-features" style="gap:10px;">
                        <li>${checkIcon} <strong>Logo Certifié</strong> officiel à côté de votre pseudo</li>
                        <li>${checkIcon} <strong>Pseudo Animé</strong> avec effet de dégradé exclusif</li>
                        <li>${checkIcon} <strong>Changement de Pseudo illimité</strong> (plus d'attente de 24h)</li>
                        <li>${checkIcon} <strong>Boost Algorithmique :</strong> Annonces toujours en tête de l'Accueil</li>
                        <li>${checkIcon} <strong>Cartes Premium :</strong> Effet de lueur dorée sur vos annonces</li>
                        <li>${checkIcon} <strong>Avatar GIF :</strong> Débloquez les photos de profil animées</li>
                        <li>${checkIcon} <strong>Bannière / Cover :</strong> Image ou GIF en haut de votre profil</li>
                        <li>${checkIcon} <strong>Couleur d'accent</strong> personnalisée sur votre profil</li>
                        <li>${checkIcon} <strong>Titre / Statut</strong> personnalisé affiché sous votre pseudo</li>
                        <li>${checkIcon} <strong>Réseaux Sociaux :</strong> YouTube, TikTok, Twitter/X</li>
                    </ul>
                </div>
                <div style="background:var(--bg-tertiary);border-radius:var(--radius-lg);padding:16px;text-align:center;margin-top:20px;border:1px solid var(--border-light);">
                    <p style="font-weight:600;color:var(--white-90);margin-bottom:10px;font-size:0.85rem;">Pour souscrire, contactez la direction sur Discord :</p>
                    <div style="display:flex;align-items:center;justify-content:center;gap:10px;">
                        <code style="background:var(--bg-body);padding:8px 14px;border-radius:var(--radius-md);font-size:1rem;color:#A23AFF;font-weight:bold;letter-spacing:1px;">i.loxs</code>
                        <button class="btn btn-purple" style="width:auto;padding:8px 14px;font-size:0.85rem;" onclick="navigator.clipboard.writeText('i.loxs');showToast('📋 Pseudo Discord copié !')">Copier</button>
                    </div>
                </div>
            </div>`}
            <div class="sidebar-card" style="flex: 1; min-width: 320px; border: 1px solid var(--border-light); background: rgba(255,255,255,0.01); padding: 24px; margin: 0; display:flex; flex-direction:column; justify-content:flex-start;">
                <h3 class="section-title" style="font-size:1.25rem; margin-bottom:6px;">🏷️ Boutique des Badges</h3>
                <p style="color:var(--white-50);font-size:0.82rem;margin-bottom:20px;">Découvrez les badges officiels de prestige. Voici vos badges actifs et les critères d'obtention :</p>
                <div style="display:flex; flex-direction:column; gap:12px;">
                    <div style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.02); padding:12px 14px; border-radius:var(--radius-md); border:1px solid var(--border-light);">
                        <div style="display:flex; align-items:center; gap:12px;"><span class="user-badge" style="background:#007AFF; color:#fff; width:24px; height:24px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; box-shadow: 0 1px 3px rgba(0,0,0,0.3); flex-shrink:0;"><span style="font-size:0.85rem;">🛠️</span></span><div><div style="font-weight:700; color:var(--white); font-size:0.92rem;">Badge Staff</div><div style="font-size:0.72rem; color:var(--white-50); margin-top:1px;">Équipe officielle d'Aura Trade.</div></div></div>
                        <div style="flex-shrink:0;">${(currentUser.is_admin || currentUser.email === 'leoazex20@gmail.com') ? '<span style="color:#30D158; font-size:0.75rem; font-weight:700; background:rgba(48,209,88,0.1); padding:4px 8px; border-radius:12px;">Actif</span>' : '<span style="color:var(--white-30); font-size:0.72rem; background:rgba(255,255,255,0.03); padding:4px 8px; border-radius:12px;">Staff</span>'}</div>
                    </div>
                    <div style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.02); padding:12px 14px; border-radius:var(--radius-md); border:1px solid var(--border-light);">
                        <div style="display:flex; align-items:center; gap:12px;"><span class="user-badge" style="background:#BF5AF2; color:#fff; width:24px; height:24px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; box-shadow: 0 1px 3px rgba(0,0,0,0.3); flex-shrink:0;"><span style="font-size:0.85rem;">💎</span></span><div><div style="font-weight:700; color:var(--white); font-size:0.92rem;">Badge Premium</div><div style="font-size:0.72rem; color:var(--white-50); margin-top:1px;">Inclus avec l'abonnement Élitis.</div></div></div>
                        <div style="flex-shrink:0;">${currentUser.is_premium ? '<span style="color:#30D158; font-size:0.75rem; font-weight:700; background:rgba(48,209,88,0.1); padding:4px 8px; border-radius:12px;">Actif</span>' : '<button class="btn btn-purple btn-sm" onclick="window.scrollTo({top:0, behavior:\'smooth\'})" style="font-size:0.72rem; padding:4px 10px; border-radius:12px;">Obtenir</button>'}</div>
                    </div>
                    <div style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.02); padding:12px 14px; border-radius:var(--radius-md); border:1px solid var(--border-light);">
                        <div style="display:flex; align-items:center; gap:12px;"><span class="user-badge" style="background:#FFD700; color:#fff; width:24px; height:24px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; box-shadow: 0 1px 3px rgba(0,0,0,0.3); flex-shrink:0;"><span style="font-size:0.85rem;">👑</span></span><div><div style="font-weight:700; color:var(--white); font-size:0.92rem;">Badge OG</div><div style="font-size:0.72rem; color:var(--white-50); margin-top:1px;">Premiers membres historiques.</div></div></div>
                        <div style="flex-shrink:0;">${getUserBadges(currentUser).includes('OG') ? '<span style="color:#30D158; font-size:0.75rem; font-weight:700; background:rgba(48,209,88,0.1); padding:4px 8px; border-radius:12px;">Actif</span>' : '<span style="color:var(--white-30); font-size:0.72rem; background:rgba(255,255,255,0.03); padding:4px 8px; border-radius:12px;">Clôturé</span>'}</div>
                    </div>
                    <div style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.02); padding:12px 14px; border-radius:var(--radius-md); border:1px solid var(--border-light);">
                        <div style="display:flex; align-items:center; gap:12px;"><span class="user-badge" style="background:#FF9500; color:#fff; width:24px; height:24px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; box-shadow: 0 1px 3px rgba(0,0,0,0.3); flex-shrink:0;"><span style="font-size:0.85rem;">🔥</span></span><div><div style="font-weight:700; color:var(--white); font-size:0.92rem;">Badge Server Booster</div><div style="font-size:0.72rem; color:var(--white-50); margin-top:1px;">Boostez notre serveur Discord.</div></div></div>
                        <div style="flex-shrink:0;">${getUserBadges(currentUser).includes('Server Booster') ? `<div style="display:flex; align-items:center; gap:8px;"><span style="color:#30D158; font-size:0.75rem; font-weight:700; background:rgba(48,209,88,0.1); padding:4px 8px; border-radius:12px;">Actif</span> <a href="https://discord.gg/qAmaaUw52b" target="_blank" class="btn btn-secondary btn-sm" style="font-size:0.72rem; padding:4px 8px; border:none; background:rgba(255,255,255,0.05); color:#fff; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; border-radius:12px;">Serveur</a></div>` : `<button class="btn btn-secondary btn-sm" onclick="navigate('settings'); setTimeout(() => openDiscordOAuthLink(), 300)" style="font-size:0.72rem; padding:4px 8px; background:#5865F2; border:none; color:#fff; border-radius:12px;">🚀 Lier Discord</button>`}</div>
                    </div>
                    <div style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.02); padding:12px 14px; border-radius:var(--radius-md); border:1px solid var(--border-light);">
                        <div style="display:flex; align-items:center; gap:12px;"><span class="user-badge" style="background:#30D158; color:#fff; width:24px; height:24px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; box-shadow: 0 1px 3px rgba(0,0,0,0.3); flex-shrink:0;"><span style="font-size:0.85rem;">🐛</span></span><div><div style="font-weight:700; color:var(--white); font-size:0.92rem;">Badge Bug Hunter</div><div style="font-size:0.72rem; color:var(--white-50); margin-top:1px;">Signalez un bug d'exploitation.</div></div></div>
                        <div style="flex-shrink:0;">${getUserBadges(currentUser).includes('Bug hunter') ? '<span style="color:#30D158; font-size:0.75rem; font-weight:700; background:rgba(48,209,88,0.1); padding:4px 8px; border-radius:12px;">Actif</span>' : '<button class="btn btn-secondary btn-sm" onclick="openChat(\'aura-support\')" style="font-size:0.72rem; padding:4px 10px; border-radius:12px;">Signaler</button>'}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

async function savePremiumConfig() {
    const styleRadios = document.getElementsByName('premiumStyle');
    let selectedStyle = 'anim-gold';
    for (const r of styleRadios) { if (r.checked) selectedStyle = r.value; }
    const newAvatar = document.getElementById('configAvatarUrl')?.value.trim() || currentUser.picture;
    currentUser.premium_style = selectedStyle; currentUser.picture = newAvatar;
    localStorage.setItem('aura_user', JSON.stringify(currentUser));
    if (AuraAuth._supabase) {
        try {
            const { error: profileErr } = await AuraAuth._supabase.from('profiles').update({ premium_style: selectedStyle, avatar_url: newAvatar }).eq('id', currentUser.id);
            if (profileErr) throw profileErr;
            await AuraAuth._supabase.from('announces').update({ sellerPremiumStyle: selectedStyle, sellerPicture: newAvatar }).eq('sellerId', currentUser.id);
            showToast('✨ Configuration Premium sauvegardée !');
        } catch (e) { console.error('Error saving premium configuration:', e); showToast('❌ Erreur DB (Colonnes premium_style manquantes ?)'); }
    }
    refreshUserData(); renderApp();
}

async function confirmDeleteAccount() {
    if (confirm("⚠️ Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible et supprimera votre profil ainsi que toutes vos annonces.")) {
        if (AuraAuth._supabase) { try { await AuraAuth._supabase.from('profiles').delete().eq('id', currentUser.id); } catch (e) { console.error(e); } }
        showToast('👋 Compte supprimé avec succès.');
        localStorage.removeItem('aura_user');
        setTimeout(() => { window.location.href = 'index.html'; }, 800);
    }
}

async function updateProfile() {
    const newPseudo = document.getElementById('settingsPseudo')?.value.trim();
    if (!newPseudo) return showToast('⚠️ Le pseudo ne peut pas être vide');

    // Bio (free for all)
    const newBio = (document.getElementById('settingsBio')?.value || '').substring(0, 200);

    let updates = {}, needsUpdate = false;

    if (newPseudo !== currentUser.pseudo) {
        if (!currentUser.is_premium) {
            const lastChange = localStorage.getItem('last_pseudo_change');
            if (lastChange) {
                const hoursPassed = (Date.now() - parseInt(lastChange)) / (1000 * 60 * 60);
                if (hoursPassed < 24) { const hoursLeft = Math.ceil(24 - hoursPassed); return showToast(`⏳ Attends encore ${hoursLeft}h pour changer de pseudo.`); }
            }
        }
        currentUser.pseudo = newPseudo; updates.pseudo = newPseudo; needsUpdate = true;
        localStorage.setItem('last_pseudo_change', Date.now().toString());
    }

    if (newBio !== (currentUser.bio || '')) {
        currentUser.bio = newBio; updates.bio = newBio; needsUpdate = true;
    }

    if (currentUser.is_premium) {
        const newAvatar = document.getElementById('settingsAvatarUrl')?.value.trim();
        if (newAvatar !== currentUser.picture) { currentUser.picture = newAvatar; updates.avatar_url = newAvatar; needsUpdate = true; }

        const newBanner = document.getElementById('settingsBannerUrl')?.value.trim() || '';
        if (newBanner !== (currentUser.banner_url || '')) { currentUser.banner_url = newBanner; updates.banner_url = newBanner; needsUpdate = true; }

        const colorInput = document.getElementById('settingsAccentColor');
        const newAccent = colorInput?.value || currentUser.profile_accent || '#FF6B2B';
        if (newAccent !== (currentUser.profile_accent || '#FF6B2B')) { currentUser.profile_accent = newAccent; updates.profile_accent = newAccent; needsUpdate = true; }

        const newTitle = (document.getElementById('settingsProfileTitle')?.value || '').trim().substring(0, 50);
        if (newTitle !== (currentUser.profile_title || '')) { currentUser.profile_title = newTitle; updates.profile_title = newTitle; needsUpdate = true; }

        const newYoutube = (document.getElementById('settingsYoutube')?.value || '').trim();
        if (newYoutube !== (currentUser.social_youtube || '')) { currentUser.social_youtube = newYoutube; updates.social_youtube = newYoutube; needsUpdate = true; }

        const newTiktok = (document.getElementById('settingsTiktok')?.value || '').trim();
        if (newTiktok !== (currentUser.social_tiktok || '')) { currentUser.social_tiktok = newTiktok; updates.social_tiktok = newTiktok; needsUpdate = true; }

        const newTwitter = (document.getElementById('settingsTwitter')?.value || '').trim();
        if (newTwitter !== (currentUser.social_twitter || '')) { currentUser.social_twitter = newTwitter; updates.social_twitter = newTwitter; needsUpdate = true; }
    }

    if (!needsUpdate) return showToast('⚠️ Aucune modification détectée');
    localStorage.setItem('aura_user', JSON.stringify(currentUser));
    if (AuraAuth._supabase) {
        try { const { error } = await AuraAuth._supabase.from('profiles').update(updates).eq('id', currentUser.id); if (error) throw error; showToast('✅ Profil mis à jour !'); }
        catch (e) { console.error(e); showToast('❌ Erreur base de données (Profil local mis à jour)'); }
    } else showToast('✅ Profil mis à jour !');
    refreshUserData(); renderApp();
}

// ==================== PROFILE PAGE ====================
function renderProfile(userId = null) {
    const isOwnProfile = !userId || userId === currentUser.id;
    const targetUserId = isOwnProfile ? currentUser.id : userId;
    return `
    <div class="container" style="max-width:800px;" id="profilePageViewContainer" data-user-id="${targetUserId}">
        <p style="text-align:center;color:var(--white-50);padding:60px 0;">Chargement du profil...</p>
    </div>`;
}

function renderMyAnnounceCard(a) {
    const imageStyle = a.imageUrl ? `background-image:url(${a.imageUrl}); background-size:cover;` : '';
    const premiumClass = a.sellerPremium ? 'premium-card' : '';
    const isOwnerOrAdmin = a.sellerId === currentUser.id || currentUser.is_admin || currentUser.email === 'leoazex20@gmail.com';
    return `
    <div class="card ${premiumClass}">
        <div class="card-image ${a.rarityClass}" style="${imageStyle} cursor:pointer;" onclick="navigate('detail', ${a.id})">
            ${!a.imageUrl ? `<span class="item-emoji">${a.imageEmoji}</span>` : ''}
            <span class="card-rarity rarity-${a.rarityClass}">${a.rarity}</span>
        </div>
        <div class="card-body">
            <div class="card-game">${a.gameName}</div>
            <div class="card-title" style="cursor:pointer;" onclick="navigate('detail', ${a.id})">${a.title}</div>
            ${isOwnerOrAdmin ? `<div style="font-size:0.8rem;color:var(--white-50);margin-top:8px;">Modifications : ${a.editCount || 0}/2</div>` : ''}
            ${isOwnerOrAdmin ? `
            <div class="card-footer" style="margin-top:16px;">
                <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="editMyAnnounce(${a.id})">✏️ Modifier</button>
                <button class="btn btn-ghost btn-sm" style="flex:1;color:var(--danger);" onclick="deleteMyAnnounce(${a.id})">🗑️ Supprimer</button>
            </div>` : ''}
        </div>
    </div>`;
}

async function editMyAnnounce(id) {
    const a = announces.find(ann => ann.id === id);
    if (!a) return;
    if (a.sellerId !== currentUser.id && !currentUser.is_admin && currentUser.email !== 'leoazex20@gmail.com') { showToast('❌ Vous n\'êtes pas autorisé à modifier cette annonce.'); return; }
    if ((a.editCount || 0) >= 2) return showToast('⚠️ Limite de modifications atteinte (2/2)');
    const newDesc = prompt('Nouvelle description :', a.description);
    if (newDesc === null) return;
    const newCount = (a.editCount || 0) + 1;
    a.description = newDesc; a.editCount = newCount;
    if (AuraAuth._supabase) await AuraAuth._supabase.from('announces').update({ description: newDesc, editCount: newCount }).eq('id', id);
    showToast('✏️ Annonce modifiée (' + newCount + '/2)'); renderApp();
}

async function deleteMyAnnounce(id) {
    const a = announces.find(ann => ann.id === id);
    if (!a) return;
    if (a.sellerId !== currentUser.id && !currentUser.is_admin && currentUser.email !== 'leoazex20@gmail.com') { showToast('❌ Vous n\'êtes pas autorisé à supprimer cette annonce.'); return; }
    if (!confirm('Voulez-vous vraiment supprimer cette annonce ?')) return;
    announces = announces.filter(ann => ann.id !== id);
    if (AuraAuth._supabase) await AuraAuth._supabase.from('announces').delete().eq('id', id);
    showToast('🗑️ Annonce supprimée'); renderApp();
}

function getProfileDisplay(userId) {
    if (userId === 'aura-support') return { name: '👑 Support Aura Trade', avatar: '🛡️' };
    const profile = profilesCache[userId];
    if (profile) {
        const name = profile.pseudo || profile.email || 'Utilisateur';
        const avatar = profile.avatar_url ? `<img src="${profile.avatar_url}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;">` : (profile.pseudo ? profile.pseudo.charAt(0).toUpperCase() : '?');
        return { name, avatar };
    }
    return { name: 'Utilisateur', avatar: '?' };
}

function renderMessages() {
    const conversations = {};
    messages.forEach(m => {
        if ((currentUser.is_admin || currentUser.email === 'leoazex20@gmail.com') && (m.fromUserId === 'aura-support' || m.toUserId === 'aura-support')) return;
        const otherId = m.fromUserId === currentUser.id ? m.toUserId : m.fromUserId;
        if (!conversations[otherId]) conversations[otherId] = [];
        conversations[otherId].push(m);
    });
    const missingIds = Object.keys(conversations).filter(id => id !== 'aura-support' && !profilesCache[id]);
    if (missingIds.length > 0 && AuraAuth._supabase) {
        AuraAuth._supabase.from('profiles').select('id, pseudo, avatar_url, email, is_admin, is_premium, badges, discord').in('id', missingIds)
            .then(({ data: profiles }) => { if (profiles && profiles.length > 0) { profiles.forEach(p => { profilesCache[p.id] = p; }); if (currentPage === 'messages') renderApp(); } })
            .catch(e => console.error('Profile fetch for messages failed:', e));
    }
    return `
    <div class="container" style="max-width:700px;">
        <h2 style="font-size:1.4rem;font-weight:800;color:var(--white);margin-bottom:20px;">💬 Messages</h2>
        ${Object.keys(conversations).length === 0 ? '<p style="text-align:center;color:var(--white-50);padding:60px 0;">Aucun message.</p>' :
            Object.keys(conversations).map(otherId => {
                const conv = conversations[otherId].sort((a, b) => new Date(b.date) - new Date(a.date));
                const last = conv[0];
                const u = getProfileDisplay(otherId);
                const unreadCount = conv.filter(m => m.toUserId === currentUser.id && !m.read).length;
                const hasUnread = unreadCount > 0;
                const announce = announces.find(a => a.id === conv[0].announceId);
                return `
            <div class="msg-preview ${hasUnread ? 'unread' : ''}" onclick="openChat('${otherId}')">
                <div class="avatar-sm">${u.avatar}</div>
                <div style="flex:1;min-width:0;">
                    <strong style="color:var(--white);display:block;">${u.name}</strong>
                    <p style="font-size:0.78rem;color:var(--white-50);margin-top:2px;">${announce ? 'Re: ' + announce.title : 'Conversation'}</p>
                    <p style="font-size:0.75rem;color:var(--white-30);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${last.content.substring(0, 55)}...</p>
                </div>
                ${hasUnread ? `<span style="background:var(--orange); color:white; font-size:0.75rem; font-weight:800; min-width:18px; height:18px; padding:0 5px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">${unreadCount}</span>` : ''}
            </div>`;
            }).join('')}
    </div>`;
}

// ==================== MODALS ====================
function openContactModal(announceId) {
    const a = announces.find(ann => ann.id === announceId);
    if (!a) return;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay'; overlay.id = 'activeModal';
    overlay.innerHTML = `
    <div class="modal">
        <h3>💬 Contacter ${a.sellerName}</h3>
        <p class="subtitle">Annonce : <strong style="color:var(--white);">${a.title}</strong><br>Recherche : ${a.searchFor}</p>
        <div class="form-group"><label>Ton message</label><textarea id="contactMsg" placeholder="Explique ce que tu proposes en échange..."></textarea></div>
        <div class="modal-actions">
            <button class="btn btn-secondary" onclick="closeModal()">Annuler</button>
            <button class="btn btn-primary" onclick="sendContactMsg(${announceId})">${icons.send} Envoyer</button>
        </div>
    </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

async function sendContactMsg(announceId) {
    const content = document.getElementById('contactMsg')?.value.trim();
    if (!content) return showToast('⚠️ Écris un message');
    const a = announces.find(ann => ann.id === announceId);
    if (!a) return;
    const newMsg = { announceId, fromUserId: currentUser.id, toUserId: a.sellerId, content, date: new Date().toISOString(), read: false };
    if (AuraAuth._supabase) {
        try { const { data, error } = await AuraAuth._supabase.from('messages').insert([newMsg]).select(); if (error) throw error; messages.push(data[0]); }
        catch (e) { console.error('Send message failed:', e); messages.push(newMsg); }
    } else messages.push(newMsg);
    closeModal(); showToast('✅ Message envoyé à ' + a.sellerName); updateBadges();
}

function renderChatBubble(m, otherId, u) {
    const isSent = m.fromUserId === currentUser.id;
    if (isSent) {
        const myAvatarUrl = currentUser.picture ? `<img src="${currentUser.picture}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;">` : (currentUser.pseudo ? currentUser.pseudo.charAt(0).toUpperCase() : '?');
        return `<div style="display:flex;align-items:flex-end;gap:8px;align-self:flex-end;max-width:85%;flex-direction:row-reverse;"><div class="avatar-sm" style="width:28px;height:28px;font-size:0.7rem;flex-shrink:0;">${myAvatarUrl}</div><div style="text-align:right;"><div style="font-size:0.7rem;color:var(--white-50);margin-bottom:3px;font-weight:600;">${currentUser.pseudo || 'Moi'}</div><div class="msg-bubble sent" style="align-self:auto;">${m.content}<div class="time">${new Date(m.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div></div></div></div>`;
    } else {
        return `<div style="display:flex;align-items:flex-end;gap:8px;align-self:flex-start;max-width:85%;"><div class="avatar-sm" style="width:28px;height:28px;font-size:0.7rem;flex-shrink:0;">${u.avatar}</div><div><div style="font-size:0.7rem;color:var(--white-50);margin-bottom:3px;font-weight:600;">${u.name}</div><div class="msg-bubble received" style="align-self:auto;">${m.content}<div class="time">${new Date(m.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div></div></div></div>`;
    }
}

function openChat(otherId) {
    const unreadMsgs = messages.filter(m => m.fromUserId === otherId && m.toUserId === currentUser.id && !m.read);
    if (unreadMsgs.length > 0) {
        unreadMsgs.forEach(m => m.read = true); updateBadges(); renderApp();
        if (AuraAuth._supabase) AuraAuth._supabase.from('messages').update({ read: true }).eq('fromUserId', otherId).eq('toUserId', currentUser.id).then(({ error }) => { if (error) console.error('Failed to mark messages as read:', error); });
    }
    const conv = messages.filter(m => (m.fromUserId === currentUser.id && m.toUserId === otherId) || (m.toUserId === currentUser.id && m.fromUserId === otherId)).sort((a, b) => new Date(a.date) - new Date(b.date));
    const u = getProfileDisplay(otherId);
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay'; overlay.id = 'activeModal';
    overlay.innerHTML = `
    <div class="modal" style="max-width:540px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
            <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="${otherId !== 'aura-support' ? `closeModal(); navigate('profile', '${otherId}');` : ''}" title="${otherId !== 'aura-support' ? 'Voir le profil' : ''}">
                <div class="avatar-sm">${u.avatar}</div>
                <strong style="color:var(--white);">${u.name}</strong>
            </div>
            ${otherId !== 'aura-support' ? `<button class="btn btn-ghost btn-sm" style="color:var(--orange);font-size:0.8rem;padding:4px 8px;border:1px solid rgba(255, 145, 0, 0.2);border-radius:12px;" onclick="openReviewModal('${otherId}', '${escapeHtmlJsString(u.name)}')">⭐ Donner un avis</button>` : ''}
        </div>
        <div class="msg-thread" id="chatThread">${conv.map(m => renderChatBubble(m, otherId, u)).join('')}</div>
        <div style="display:flex;gap:8px;margin-top:14px;">
            <input type="text" id="chatInput" placeholder="Écris ton message..." style="flex:1;padding:11px 14px;background:var(--bg-input);border:1.5px solid var(--border);border-radius:var(--radius-full);color:var(--white);font-family:'Inter',sans-serif;outline:none;">
            <button class="btn btn-primary" onclick="sendChatMsg('${otherId}')">${icons.send}</button>
        </div>
    </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    setTimeout(() => { const t = document.getElementById('chatThread'); if (t) t.scrollTop = t.scrollHeight; }, 150);
}

async function sendChatMsg(otherId) {
    const input = document.getElementById('chatInput');
    const content = input?.value.trim();
    if (!content) return;
    const refMsg = messages.find(m => (m.fromUserId === currentUser.id && m.toUserId === otherId) || (m.toUserId === currentUser.id && m.fromUserId === otherId));
    const newMsg = { announceId: refMsg?.announceId || 1, fromUserId: currentUser.id, toUserId: otherId, content, date: new Date().toISOString(), read: false };
    if (AuraAuth._supabase) {
        try { const { data, error } = await AuraAuth._supabase.from('messages').insert([newMsg]).select(); if (error) throw error; messages.push(data[0]); closeModal(); openChat(otherId); }
        catch (e) { console.error('Chat send failed:', e); messages.push(newMsg); closeModal(); openChat(otherId); }
    } else { messages.push(newMsg); closeModal(); openChat(otherId); }
}

function closeModal() {
    const m = document.getElementById('activeModal'); if (m) m.remove();
    const mod = document.getElementById('moderationModal'); if (mod) mod.remove();
}

// ==================== ACTIONS ====================
async function toggleLike(announceId, btnEl) {
    if (!AuraAuth.getUser()) { window.location.href = 'login.html'; return; }
    const a = announces.find(ann => ann.id === announceId);
    if (!a) return;
    const idx = (a.likedBy || []).indexOf(currentUser.id);
    if (idx > -1) { a.likedBy.splice(idx, 1); a.likes = Math.max(0, a.likes - 1); }
    else { if (!a.likedBy) a.likedBy = []; a.likedBy.push(currentUser.id); a.likes++; }
    if (AuraAuth._supabase) AuraAuth._supabase.from('announces').update({ likes: a.likes, likedBy: a.likedBy }).eq('id', a.id).then();
    if (btnEl) { btnEl.classList.add('just-liked'); setTimeout(() => btnEl.classList.remove('just-liked'), 400); }
    renderApp();
}

function openPseudoSetupModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay'; overlay.id = 'activeModal';
    overlay.innerHTML = `
    <div class="modal">
        <h3>✨ Bienvenue sur Aura Trade !</h3>
        <p class="subtitle">Pour commencer, choisis ton pseudo de trader Roblox.</p>
        <div class="form-group"><label>Ton Pseudo</label><input type="text" id="setupPseudo" placeholder="Ex: MasterTrader_99"></div>
        <div class="modal-actions" style="display:flex; gap:10px; margin-top:16px;">
            <button class="btn btn-secondary" onclick="AuraAuth.logOut()" style="flex:1;">Quitter</button>
            <button class="btn btn-primary" onclick="saveInitialPseudo()" style="flex:2;">Commencer l'aventure</button>
        </div>
    </div>`;
    document.body.appendChild(overlay);
}

async function saveInitialPseudo() {
    const p = document.getElementById('setupPseudo')?.value.trim();
    if (!p) return showToast('⚠️ Entre un pseudo !');
    currentUser.pseudo = p;
    localStorage.setItem('aura_user', JSON.stringify(currentUser));
    localStorage.setItem('last_pseudo_change', Date.now().toString());
    if (AuraAuth._supabase) await AuraAuth._supabase.from('profiles').update({ pseudo: p }).eq('id', currentUser.id);
    const modal = document.getElementById('activeModal'); if (modal) modal.remove();
    showToast('🚀 C\'est parti, ' + p + ' !');
    refreshUserData(); renderApp();
}

function shareAnnounce(id) {
    const url = window.location.origin + window.location.pathname + '?page=detail&id=' + id;
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => showToast('📋 Lien copié !'));
    else showToast('📋 Lien: ' + url);
}

function scrollCarousel(name, dir) {
    const el = document.getElementById(name === 'featured' ? 'carouselFeatured' : 'carouselSimilar');
    if (el) el.scrollBy({ left: dir * 290, behavior: 'smooth' });
}

function showToast(msg) {
    const container = document.getElementById('toastContainer');
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; container.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(120%)'; t.style.transition = '0.3s ease'; setTimeout(() => t.remove(), 350); }, 2600);
}

// ==================== LISTENERS ====================
function attachListeners() {
    document.getElementById('heroSearchInput')?.addEventListener('keypress', function (e) { if (e.key === 'Enter') navigate('explore', 'search:' + this.value); });
    document.getElementById('headerSearchInput')?.addEventListener('keypress', function (e) { if (e.key === 'Enter') navigate('explore', 'search:' + this.value); });
    const cg = document.getElementById('createGame');
    if (cg) {
        cg.addEventListener('change', function () { const og = document.getElementById('otherGameGroup'); if (og) og.classList.toggle('hidden', this.value !== 'other'); });
        if (cg.value === 'other') document.getElementById('otherGameGroup')?.classList.remove('hidden');
    }
    // Bio char counter
    const bioInput = document.getElementById('settingsBio');
    const bioCount = document.getElementById('bioCharCount');
    if (bioInput && bioCount) {
        bioInput.addEventListener('input', function () { bioCount.textContent = `${Math.min(this.value.length, 200)}/200 caractères`; if (this.value.length > 200) this.value = this.value.substring(0, 200); });
    }
    // Accent color sync
    const colorPicker = document.getElementById('settingsAccentColor');
    if (colorPicker) {
        colorPicker.addEventListener('input', function () {
            const hexInput = document.getElementById('settingsAccentColorHex');
            const dot = document.getElementById('accentPreviewDot');
            if (hexInput) hexInput.value = this.value;
            if (dot) dot.style.background = this.value;
        });
    }
}

// ==================== DATABASE ====================
async function fetchAnnounces() {
    if (!AuraAuth._supabase) return;
    try {
        const { data, error } = await AuraAuth._supabase.from('announces').select('*').order('date', { ascending: false });
        if (error) throw error;
        const now = new Date().getTime();
        const validAnnounces = [];
        for (const a of (data || [])) {
            const dateObj = new Date(a.date);
            const ageHours = (now - dateObj.getTime()) / (1000 * 60 * 60);
            const maxHours = a.sellerPremium ? (5 * 24) : 48;
            if (ageHours > maxHours) await AuraAuth._supabase.from('announces').delete().eq('id', a.id);
            else validAnnounces.push(a);
        }
        const newHash = JSON.stringify(validAnnounces);
        if (window._lastAnnHash !== newHash) { window._lastAnnHash = newHash; announces = validAnnounces; if (currentPage === 'home' || currentPage === 'explore' || currentPage === 'profile') renderApp(); }
    } catch (e) { console.error('Fetch failed:', e); }
}

async function fetchMessages() {
    if (!AuraAuth._supabase || !currentUser.id) return;
    try {
        let query = AuraAuth._supabase.from('messages').select('*');
        if (currentUser.is_admin || currentUser.email === 'leoazex20@gmail.com') query = query.or(`fromUserId.eq.${currentUser.id},toUserId.eq.${currentUser.id},fromUserId.eq.aura-support,toUserId.eq.aura-support`);
        else query = query.or(`fromUserId.eq.${currentUser.id},toUserId.eq.${currentUser.id}`);
        const { data, error } = await query.order('date', { ascending: false });
        if (error) throw error;
        const otherIds = new Set();
        (data || []).forEach(m => { if (m.fromUserId && m.fromUserId !== currentUser.id) otherIds.add(m.fromUserId); if (m.toUserId && m.toUserId !== currentUser.id) otherIds.add(m.toUserId); });
        const idsToFetch = Array.from(otherIds).filter(id => !profilesCache[id]);
        if (idsToFetch.length > 0) {
            try {
                const { data: profiles } = await AuraAuth._supabase.from('profiles').select('id, pseudo, avatar_url, email, is_admin, is_premium, badges, discord').in('id', idsToFetch);
                if (profiles) { profiles.forEach(p => { profilesCache[p.id] = p; }); if (currentPage === 'messages') renderApp(); }
            } catch (pErr) { console.error('Failed to prefetch profile info:', pErr); }
        }
        const newHash = JSON.stringify(data || []);
        if (window._lastMsgHash !== newHash) {
            window._lastMsgHash = newHash; messages = data || []; updateBadges();
            if (currentPage === 'messages') renderApp();
            const chatThread = document.getElementById('chatThread');
            if (chatThread) {
                const btn = document.querySelector('button[onclick^="sendChatMsg"], button[onclick^="sendSupportChatMsg"]');
                if (btn) {
                    const onclickAttr = btn.getAttribute('onclick');
                    const otherId = onclickAttr.match(/'([^']+)'/)[1];
                    const isSupport = onclickAttr.startsWith('sendSupportChatMsg');
                    const isAtBottom = chatThread.scrollHeight - chatThread.scrollTop <= chatThread.clientHeight + 10;
                    let conv = [];
                    if (isSupport) conv = messages.filter(m => (m.fromUserId === 'aura-support' && m.toUserId === otherId) || (m.toUserId === 'aura-support' && m.fromUserId === otherId)).sort((a, b) => new Date(a.date) - new Date(b.date));
                    else conv = messages.filter(m => (m.fromUserId === currentUser.id && m.toUserId === otherId) || (m.toUserId === currentUser.id && m.fromUserId === otherId)).sort((a, b) => new Date(a.date) - new Date(b.date));
                    const refreshU = getProfileDisplay(otherId);
                    chatThread.innerHTML = conv.map(m => {
                        if (isSupport) {
                            const isSent = m.fromUserId === 'aura-support';
                            if (isSent) return `<div class="msg-bubble sent">${m.content}<div class="time">${new Date(m.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div></div>`;
                            const senderU = getProfileDisplay(m.fromUserId);
                            return `<div style="display:flex;align-items:flex-end;gap:8px;align-self:flex-start;max-width:85%;"><div class="avatar-sm" style="width:28px;height:28px;font-size:0.7rem;flex-shrink:0;">${senderU.avatar}</div><div><div style="font-size:0.7rem;color:var(--white-50);margin-bottom:3px;font-weight:600;">${senderU.name}</div><div class="msg-bubble received" style="align-self:auto;">${m.content}<div class="time">${new Date(m.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div></div></div></div>`;
                        } else return renderChatBubble(m, otherId, refreshU);
                    }).join('');
                    if (isAtBottom) chatThread.scrollTop = chatThread.scrollHeight;
                }
            }
        }
    } catch (e) { console.error('Fetch messages failed:', e); }
}

// ==================== INIT ====================
async function init() {
    refreshUserData();
    await fetchAnnounces();
    await fetchMessages();
    setInterval(() => { fetchAnnounces(); if (currentUser.id !== 'guest') fetchMessages(); }, 10000);
    if (currentUser.id !== 'guest' && !currentUser.pseudo) openPseudoSetupModal();
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const id = params.get('id');
    if (page === 'settings') navigate('settings');
    else if (page === 'detail' && id) navigate('detail', parseInt(id));
    else if (page === 'explore') navigate('explore');
    else navigate('home');
}

// ============================================================
// Aura Trade — Player Review & Rating System
// ============================================================
let currentRatingSelection = 0;

async function loadReceivedReviews() {
    const view = document.getElementById('receivedReviewsView');
    if (!view) return;
    let list = [];
    if (AuraAuth._supabase) {
        try {
            const { data, error } = await AuraAuth._supabase.from('reviews').select('*').eq('to_user_id', currentUser.id).order('created_at', { ascending: false });
            if (!error && data) list = data;
            else if (error && error.code === '42P01') { view.innerHTML = `<div style="text-align:center;padding:30px 10px;background:var(--bg-input);border-radius:var(--radius-md);border:1px dashed var(--border);"><p style="color:var(--orange);font-weight:700;margin-bottom:8px;">⚠️ Table 'reviews' non créée</p></div>`; return; }
        } catch (e) { console.error('Failed to load reviews:', e); }
    }
    if (AuraAuth._supabase) {
        AuraAuth._supabase.from('profiles').select('rating, trades').eq('id', currentUser.id).single()
            .then(({ data }) => {
                if (data) {
                    currentUser.rating = data.trades > 0 && data.rating !== undefined && data.rating !== null ? parseFloat(data.rating).toFixed(1) : '0.0';
                    currentUser.trades = data.trades || 0;
                    localStorage.setItem('aura_user', JSON.stringify(currentUser));
                    const ratingVal = document.getElementById('profileRatingVal');
                    const tradesVal = document.getElementById('profileTradesVal');
                    if (ratingVal) ratingVal.textContent = `⭐ ${currentUser.rating}`;
                    if (tradesVal) tradesVal.textContent = currentUser.trades;
                }
            });
    }
    if (list.length === 0) { view.innerHTML = '<p style="text-align:center;color:var(--white-50);padding:30px 0;">Aucun avis reçu pour le moment.</p>'; return; }
    view.innerHTML = list.map(r => {
        const stars = '⭐'.repeat(r.rating);
        const dateStr = new Date(r.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const isMyReview = r.from_user_id === currentUser.id;
        return `<div class="trade-history-item" style="margin-bottom:12px; padding:12px; background:var(--bg-input); border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center;">
            <div style="flex:1; padding-right:12px;"><strong style="color:var(--white);">${r.from_user_pseudo || 'Utilisateur'}</strong><p style="font-size:0.85rem;color:var(--white-70);margin-top:4px;word-break:break-word;">${r.comment || 'Aucun commentaire.'}</p></div>
            <div style="text-align:right; flex-shrink:0; display:flex; flex-direction:column; align-items:flex-end;">
                <div style="color:var(--orange); font-size:0.9rem;">${stars}</div>
                <div style="font-size:0.72rem;color:var(--white-30);margin-top:4px;">${dateStr}</div>
                ${isMyReview ? `<div style="display:flex; gap:6px; margin-top:6px;">
                    <button class="btn btn-secondary btn-xs" style="padding:2px 8px; font-size:0.7rem; border-radius:var(--radius-sm); cursor:pointer;" onclick="openReviewModal('${r.to_user_id}', 'Ce joueur', '${r.id}', ${r.rating}, '${escapeHtmlJsString(r.comment)}')">✏️ Modifier</button>
                    <button class="btn btn-ghost btn-xs" style="padding:2px 8px; font-size:0.7rem; border-radius:var(--radius-sm); color:var(--danger); cursor:pointer;" onclick="deleteReview('${r.id}', '${r.to_user_id}')">🗑️ Supprimer</button>
                </div>` : ''}
            </div>
        </div>`;
    }).join('');
}

async function openReviewModal(targetUserId, targetUserPseudo, reviewId = null, initialRating = 5, initialComment = '') {
    currentRatingSelection = initialRating;
    const isEdit = !!reviewId;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay'; overlay.id = 'reviewModal';
    overlay.innerHTML = `
    <div class="modal" style="max-width:400px;text-align:center;">
        <h3 style="color:var(--white);margin-bottom:12px;">${isEdit ? '✏️ Modifier votre avis' : '⭐ Laisser un avis'}</h3>
        <p style="color:var(--white-50);font-size:0.85rem;margin-bottom:20px;">Évaluez votre échange avec <strong>${targetUserPseudo}</strong></p>
        <div style="display:flex;justify-content:center;gap:10px;margin-bottom:20px;" id="ratingStarsRow">
            ${[1, 2, 3, 4, 5].map(num => `<span class="star-btn" data-num="${num}" style="font-size:1.8rem;cursor:pointer;color:#FFD700;transition:transform 0.1s;display:inline-block;" onclick="setRatingSelection(${num})">⭐</span>`).join('')}
        </div>
        <textarea id="reviewComment" placeholder="Laissez un commentaire sur le joueur (rapide, fiable, honnête...)" style="width:100%;height:100px;padding:12px;background:var(--bg-input);border:1.5px solid var(--border);border-radius:var(--radius-md);color:var(--white);font-family:'Inter',sans-serif;outline:none;resize:none;margin-bottom:20px;font-size:0.85rem;">${initialComment}</textarea>
        <div style="display:flex;gap:10px;justify-content:flex-end;">
            <button class="btn btn-secondary" onclick="closeReviewModal()">Annuler</button>
            <button class="btn btn-primary" onclick="submitReview('${targetUserId}', '${escapeHtmlJsString(targetUserPseudo)}', ${reviewId ? `'${reviewId}'` : 'null'})">Soumettre</button>
        </div>
    </div>`;
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('active'), 10);
    setRatingSelection(currentRatingSelection);
}

function closeReviewModal() {
    const modal = document.getElementById('reviewModal');
    if (modal) { modal.classList.remove('active'); setTimeout(() => modal.remove(), 300); }
}

function setRatingSelection(num) {
    currentRatingSelection = num;
    document.querySelectorAll('#ratingStarsRow .star-btn').forEach(s => {
        const starNum = parseInt(s.getAttribute('data-num'));
        s.style.opacity = starNum <= num ? '1' : '0.3';
        s.style.transform = starNum <= num ? 'scale(1.15)' : 'scale(1)';
    });
}

async function submitReview(targetUserId, targetUserPseudo, reviewId = null) {
    if (!currentRatingSelection || currentRatingSelection === 0) { showToast('⚠️ Veuillez sélectionner une note (au moins 1 étoile).'); return; }
    const comment = document.getElementById('reviewComment').value.trim();
    if (!comment) { showToast('⚠️ Veuillez écrire un petit commentaire.'); return; }
    if (!AuraAuth._supabase) { showToast('❌ Supabase non connecté.'); return; }
    try {
        let saveErr = null;
        if (reviewId) { const { error } = await AuraAuth._supabase.from('reviews').update({ rating: currentRatingSelection, comment, created_at: new Date().toISOString() }).eq('id', reviewId); saveErr = error; }
        else { const { error } = await AuraAuth._supabase.from('reviews').insert([{ from_user_id: currentUser.id, from_user_pseudo: currentUser.pseudo || currentUser.name || 'Utilisateur', to_user_id: targetUserId, rating: currentRatingSelection, comment }]); saveErr = error; }
        if (saveErr) { if (saveErr.code === '42P01') { showToast('❌ Erreur: Table reviews manquante.'); return; } throw saveErr; }
        const { data: allReviews, error: fetchErr } = await AuraAuth._supabase.from('reviews').select('rating').eq('to_user_id', targetUserId);
        if (!fetchErr && allReviews) {
            const newTradesCount = allReviews.length;
            const newAvgRating = parseFloat((allReviews.reduce((sum, r) => sum + r.rating, 0) / newTradesCount).toFixed(1));
            await AuraAuth._supabase.from('profiles').update({ rating: newAvgRating, trades: newTradesCount }).eq('id', targetUserId);
            await AuraAuth._supabase.from('announces').update({ sellerRating: newAvgRating, sellerTrades: newTradesCount }).eq('sellerId', targetUserId);
            announces.forEach(ann => { if (ann.sellerId === targetUserId) { ann.sellerRating = newAvgRating; ann.sellerTrades = newTradesCount; } });
        }
        showToast('🌟 Avis soumis avec succès !'); closeReviewModal(); renderApp();
    } catch (e) { console.error('Submit review error:', e); showToast('❌ Erreur lors de la soumission de l\'avis.'); }
}

async function deleteReview(reviewId, targetUserId) {
    if (!confirm('Voulez-vous vraiment supprimer cet avis ?')) return;
    if (!AuraAuth._supabase) { showToast('❌ Supabase non connecté.'); return; }
    try {
        const { error } = await AuraAuth._supabase.from('reviews').delete().eq('id', reviewId);
        if (error) throw error;
        showToast('🗑️ Avis supprimé avec succès.');
        const { data: allReviews, error: fetchErr } = await AuraAuth._supabase.from('reviews').select('rating').eq('to_user_id', targetUserId);
        let newAvgRating = 0.0, newTradesCount = 0;
        if (!fetchErr && allReviews && allReviews.length > 0) { newTradesCount = allReviews.length; newAvgRating = parseFloat((allReviews.reduce((sum, r) => sum + r.rating, 0) / newTradesCount).toFixed(1)); }
        await AuraAuth._supabase.from('profiles').update({ rating: newAvgRating, trades: newTradesCount }).eq('id', targetUserId);
        await AuraAuth._supabase.from('announces').update({ sellerRating: newAvgRating, sellerTrades: newTradesCount }).eq('sellerId', targetUserId);
        announces.forEach(ann => { if (ann.sellerId === targetUserId) { ann.sellerRating = newAvgRating; ann.sellerTrades = newTradesCount; } });
        if (currentPage === 'profile') loadUserProfilePage(targetUserId); else renderApp();
    } catch (e) { console.error('Delete review error:', e); showToast("❌ Erreur lors de la suppression de l'avis."); }
}

// ============================================================
// Aura Trade — Public Profiles system
// ============================================================

// Helper: build a social link row
function renderSocialLink(icon, label, value, baseUrl = '') {
    if (!value) return '';
    const display = value.startsWith('http') ? value : (baseUrl + value.replace(/^@/, ''));
    const handle = value.startsWith('http') ? value.split('/').pop() : value;
    return `<a href="${display}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:6px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:5px 12px; text-decoration:none; color:var(--white-70); font-size:0.78rem; font-weight:600; transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.color='var(--white)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.color='var(--white-70)'">
        <span>${icon}</span><span>${handle}</span>
    </a>`;
}

async function loadUserProfilePage(userId) {
    const isOwnProfile = !userId || userId === currentUser.id;
    const targetUserId = isOwnProfile ? currentUser.id : userId;
    const container = document.getElementById('profilePageViewContainer');
    if (!container) return;
    let profile = null;
    if (AuraAuth._supabase) {
        try {
            const { data, error } = await AuraAuth._supabase.from('profiles').select('*').eq('id', targetUserId).single();
            if (!error && data) {
                profile = {
                    id: data.id,
                    name: data.full_name || 'Utilisateur',
                    pseudo: data.pseudo || 'Sans pseudo',
                    picture: data.avatar_url,
                    avatar: (data.pseudo || data.full_name || 'U').charAt(0).toUpperCase(),
                    rating: data.trades > 0 && data.rating !== undefined && data.rating !== null ? parseFloat(data.rating).toFixed(1) : '0.0',
                    trades: data.trades || 0,
                    is_premium: data.is_premium || false,
                    is_admin: data.is_admin || false,
                    premium_style: data.premium_style || 'anim-gold',
                    badges: data.badges,
                    discord: data.discord || null,
                    memberSince: data.created_at ? new Date(data.created_at).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }) : 'récemment',
                    // New profile fields
                    bio: data.bio || null,
                    banner_url: data.banner_url || null,
                    profile_accent: data.profile_accent || null,
                    profile_title: data.profile_title || null,
                    social_youtube: data.social_youtube || null,
                    social_tiktok: data.social_tiktok || null,
                    social_twitter: data.social_twitter || null,
                };
                if (isOwnProfile) { currentUser.rating = profile.rating; currentUser.trades = profile.trades; localStorage.setItem('aura_user', JSON.stringify(currentUser)); }
            }
        } catch (e) { console.error('Failed to load profile from database:', e); }
    }
    if (!profile) { container.innerHTML = '<p style="text-align:center;color:var(--white-50);padding:60px 0;">Impossible de charger ce profil.</p>'; return; }

    const myAnnounces = announces.filter(a => a.sellerId === targetUserId);
    const premiumClass = profile.is_premium ? 'premium-card' : '';
    const pseudoClass = profile.is_premium ? `animated-pseudo ${profile.premium_style || 'anim-gold'}` : '';
    const accentColor = profile.profile_accent || 'var(--orange)';

    // Banner HTML
    const bannerHtml = profile.banner_url
        ? `<div style="width:100%; height:160px; background-image:url(${profile.banner_url}); background-size:cover; background-position:center; border-radius:var(--radius-xl) var(--radius-xl) 0 0; margin:-24px -24px 0; position:relative; overflow:hidden;">
               <div style="position:absolute;inset:0;background:linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7));"></div>
           </div>`
        : profile.is_premium
            ? `<div style="width:100%; height:80px; background:linear-gradient(135deg, rgba(162,58,255,0.3) 0%, rgba(255,107,43,0.2) 100%); border-radius:var(--radius-xl) var(--radius-xl) 0 0; margin:-24px -24px 0; border-bottom:1px solid rgba(162,58,255,0.2);"></div>`
            : '';

    // Avatar HTML
    const avatarHtml = profile.picture
        ? `<div class="avatar-lg" style="margin:0 auto 14px;background-image:url(${profile.picture});background-size:cover;color:transparent;border:3px solid ${accentColor};box-shadow:0 0 0 4px ${accentColor}22;${profile.banner_url ? 'margin-top:-36px;position:relative;z-index:2;' : ''}"></div>`
        : `<div class="avatar-lg" style="margin:0 auto 14px;border:3px solid ${accentColor};box-shadow:0 0 0 4px ${accentColor}22;${profile.banner_url ? 'margin-top:-36px;position:relative;z-index:2;' : ''}">${profile.avatar}</div>`;

    // Bio HTML
    const bioHtml = profile.bio
        ? `<p style="color:var(--white-70); font-size:0.88rem; line-height:1.6; max-width:480px; margin:8px auto 0; text-align:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:var(--radius-md); padding:10px 16px;">${profile.bio.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`
        : '';

    // Custom title HTML
    const titleHtml = profile.profile_title
        ? `<div style="display:inline-block; margin-top:4px; padding:3px 12px; background:${accentColor}22; border:1px solid ${accentColor}55; border-radius:20px; font-size:0.78rem; font-weight:700; color:${accentColor};">${profile.profile_title}</div>`
        : '';

    // Social links HTML
    const socialsHtml = (profile.social_youtube || profile.social_tiktok || profile.social_twitter)
        ? `<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:8px; margin-top:12px;">
            ${renderSocialLink('📺', 'YouTube', profile.social_youtube, 'https://youtube.com/')}
            ${renderSocialLink('🎵', 'TikTok', profile.social_tiktok, 'https://tiktok.com/@')}
            ${renderSocialLink('𝕏', 'Twitter/X', profile.social_twitter, 'https://x.com/')}
           </div>`
        : '';

    // Discord HTML
    const discordHtml = profile.discord
        ? `<div style="margin-top:10px; display:inline-flex; align-items:center; gap:6px; background:rgba(88,101,242,0.12); color:#5865F2; padding:5px 12px; border-radius:12px; font-size:0.8rem; font-weight:700; border:1px solid rgba(88,101,242,0.25);">
               <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/></svg>
               ${profile.discord}
           </div>`
        : '';

    container.innerHTML = `
        <div class="profile-header-card ${premiumClass}" style="${profile.is_premium && profile.profile_accent ? `--profile-accent: ${accentColor};` : ''}">
            ${bannerHtml}
            ${avatarHtml}
            <h2 style="font-weight:800;color:var(--white); font-size: 2.1rem; margin-bottom: 2px;"><span class="${pseudoClass}">${profile.pseudo}</span></h2>
            ${titleHtml}
            <div class="profile-badges-row" style="display:flex; justify-content:center; align-items:center; gap:6px; margin: 10px 0 14px;">${renderUserBadges(profile, true)}</div>
            <p style="color:var(--white-50);">${isOwnProfile ? profile.name : 'Membre'} · Membre depuis ${profile.memberSince || 'récemment'}</p>
            ${discordHtml}
            ${socialsHtml}
            ${bioHtml}
            <div class="profile-stats-row" style="margin-top:16px; border-top:1px solid rgba(255,255,255,0.06); padding-top:16px;">
                <div class="profile-stat"><div class="val">${myAnnounces.length}</div><div class="lbl">Annonces</div></div>
                <div class="profile-stat"><div class="val" id="profileTradesVal">${profile.trades || 0}</div><div class="lbl">Échanges</div></div>
                <div class="profile-stat"><div class="val" id="profileRatingVal">⭐ ${profile.rating}</div><div class="lbl">Note</div></div>
            </div>
            <div style="margin-top:24px;display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
                ${isOwnProfile ? `
                    <button class="btn btn-secondary" onclick="navigate('settings')">⚙️ Paramètres</button>
                    <button class="btn btn-ghost" style="color:var(--orange);border:1.5px solid rgba(255,145,0,0.3);border-radius:var(--radius-full);padding:8px 18px;" onclick="openReviewModal('${profile.id}', '${escapeHtmlJsString(profile.pseudo || 'Sans pseudo')}')">⭐ Laisser un avis</button>
                ` : `
                    <button class="btn btn-primary" onclick="openProfileContact('${profile.id}')">💬 Contacter le joueur</button>
                    <button class="btn btn-ghost" style="color:var(--orange);border:1.5px solid rgba(255,145,0,0.3);border-radius:var(--radius-full);padding:8px 18px;" onclick="openReviewModal('${profile.id}', '${escapeHtmlJsString(profile.pseudo || 'Sans pseudo')}')">⭐ Laisser un avis</button>
                `}
            </div>
        </div>
        <div style="display:flex;gap:4px;margin-bottom:20px;border-bottom:1px solid var(--border);">
            <button class="btn btn-ghost" style="border-bottom:2px solid ${accentColor};border-radius:0;color:var(--white);">${isOwnProfile ? 'Mes annonces' : 'Ses annonces'}</button>
            <button class="btn btn-ghost" style="border-radius:0;" onclick="document.getElementById('tradeHistorySection').scrollIntoView({behavior:'smooth'})">⭐ Avis reçus</button>
        </div>
        <div class="grid-3">${myAnnounces.map(a => renderMyAnnounceCard(a)).join('')}</div>
        ${myAnnounces.length === 0 ? `<p style="text-align:center;color:var(--white-50);padding:40px 0;">Aucune annonce active.</p>` : ''}
        <div id="tradeHistorySection" style="margin-top:40px;">
            <div class="section-header"><h2>⭐ Avis reçus</h2></div>
            <div id="receivedReviewsView" style="margin-top:16px;"><p style="color:var(--white-50);padding:30px 0;text-align:center;">Chargement des avis...</p></div>
        </div>`;
    loadReceivedReviewsForUser(targetUserId);
}

function openProfileContact(sellerId) { openChat(sellerId); }

async function loadReceivedReviewsForUser(targetUserId) {
    const view = document.getElementById('receivedReviewsView');
    if (!view) return;
    let list = [];
    if (AuraAuth._supabase) {
        try {
            const { data, error } = await AuraAuth._supabase.from('reviews').select('*').eq('to_user_id', targetUserId).order('created_at', { ascending: false });
            if (!error && data) list = data;
            else if (error && error.code === '42P01') { view.innerHTML = `<div style="text-align:center;padding:30px 10px;background:var(--bg-input);border-radius:var(--radius-md);border:1px dashed var(--border);"><p style="color:var(--orange);font-weight:700;">⚠️ Script SQL non exécuté</p></div>`; return; }
        } catch (e) { console.error('Failed to load reviews:', e); }
    }
    if (list.length === 0) { view.innerHTML = '<p style="text-align:center;color:var(--white-50);padding:30px 0;">Aucun avis reçu pour le moment.</p>'; return; }
    view.innerHTML = list.map(r => {
        const stars = '⭐'.repeat(r.rating);
        const dateStr = new Date(r.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const isMyReview = r.from_user_id === currentUser.id;
        return `<div class="trade-history-item" style="margin-bottom:12px; padding:12px; background:var(--bg-input); border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center;">
            <div style="flex:1; padding-right:12px;"><strong style="color:var(--white);">${r.from_user_pseudo || 'Utilisateur'}</strong><p style="font-size:0.85rem;color:var(--white-70);margin-top:4px;word-break:break-word;">${r.comment || 'Aucun commentaire.'}</p></div>
            <div style="text-align:right; flex-shrink:0; display:flex; flex-direction:column; align-items:flex-end;">
                <div style="color:var(--orange); font-size:0.9rem;">${stars}</div>
                <div style="font-size:0.72rem;color:var(--white-30);margin-top:4px;">${dateStr}</div>
                ${isMyReview ? `<div style="display:flex; gap:6px; margin-top:6px;">
                    <button class="btn btn-secondary btn-xs" style="padding:2px 8px; font-size:0.7rem; border-radius:var(--radius-sm); cursor:pointer;" onclick="openReviewModal('${r.to_user_id}', 'Ce joueur', '${r.id}', ${r.rating}, '${escapeHtmlJsString(r.comment)}')">✏️ Modifier</button>
                    <button class="btn btn-ghost btn-xs" style="padding:2px 8px; font-size:0.7rem; border-radius:var(--radius-sm); color:var(--danger); cursor:pointer;" onclick="deleteReview('${r.id}', '${r.to_user_id}')">🗑️ Supprimer</button>
                </div>` : ''}
            </div>
        </div>`;
    }).join('');
}

init();
console.log('%c⚡ Aura Trade %cPrototype Pro %cChargé', 'color:#FF6B2B;font-size:1.4em;font-weight:900;', 'color:#fff;font-size:1em;', 'color:#aaa;');
