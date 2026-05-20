-- ============================================================
-- FIX PGRST204 — Créer discord_oauth_states (Aura Trade)
-- Supabase → SQL Editor → Coller tout → Run
-- ============================================================

DROP TABLE IF EXISTS public.discord_oauth_states CASCADE;

CREATE TABLE public.discord_oauth_states (
    state uuid PRIMARY KEY,
    user_id text NOT NULL,
    mode text NOT NULL DEFAULT 'link',
    expires_at timestamptz NOT NULL,
    used boolean NOT NULL DEFAULT false,
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX discord_oauth_states_user_id_idx ON public.discord_oauth_states (user_id);

GRANT INSERT, SELECT ON public.discord_oauth_states TO anon;
GRANT INSERT, SELECT, UPDATE, DELETE ON public.discord_oauth_states TO service_role;

ALTER TABLE public.discord_oauth_states ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "allow insert discord oauth states" ON public.discord_oauth_states;
CREATE POLICY "allow insert discord oauth states"
    ON public.discord_oauth_states FOR INSERT TO anon, authenticated
    WITH CHECK (true);

DROP POLICY IF EXISTS "allow select discord oauth states" ON public.discord_oauth_states;
CREATE POLICY "allow select discord oauth states"
    ON public.discord_oauth_states FOR SELECT TO anon, authenticated
    USING (true);

-- Rafraîchir le cache API (fix PGRST204 après création)
NOTIFY pgrst, 'reload schema';
