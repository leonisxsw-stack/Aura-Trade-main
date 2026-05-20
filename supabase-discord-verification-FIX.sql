-- Table utilisée par OAuth + !verify (si elle n'existe pas encore)
-- Supabase → SQL Editor → Run

CREATE TABLE IF NOT EXISTS public.discord_verifications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id text NOT NULL,
    code text NOT NULL,
    verified boolean NOT NULL DEFAULT false,
    verification_type text,
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS discord_verifications_user_id_idx ON public.discord_verifications (user_id);
CREATE INDEX IF NOT EXISTS discord_verifications_code_idx ON public.discord_verifications (code);

GRANT INSERT, SELECT, DELETE ON public.discord_verifications TO anon;
GRANT ALL ON public.discord_verifications TO service_role;

ALTER TABLE public.discord_verifications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "allow insert discord verifications" ON public.discord_verifications;
CREATE POLICY "allow insert discord verifications"
    ON public.discord_verifications FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "allow select discord verifications" ON public.discord_verifications;
CREATE POLICY "allow select discord verifications"
    ON public.discord_verifications FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "allow delete discord verifications" ON public.discord_verifications;
CREATE POLICY "allow delete discord verifications"
    ON public.discord_verifications FOR DELETE TO anon, authenticated USING (true);

NOTIFY pgrst, 'reload schema';
