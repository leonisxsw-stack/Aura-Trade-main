-- ============================================================
-- SQL Configuration — RLS Policy for Profiles (Aura Trade)
-- Supabase → SQL Editor → Coller tout → Run
-- ============================================================

-- Permet aux administrateurs et aux utilisateurs de modifier les profils.
-- Requis car l'application utilise une connexion Google côté client sans session Supabase Auth,
-- ce qui fait que auth.uid() est toujours NULL pour PostgREST.
DROP POLICY IF EXISTS "allow admins to update profiles" ON public.profiles;
DROP POLICY IF EXISTS "allow public update profiles" ON public.profiles;

CREATE POLICY "allow public update profiles" 
    ON public.profiles FOR UPDATE TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- Au cas où RLS n'est pas activé ou s'il manque des permissions de lecture
DROP POLICY IF EXISTS "allow select all profiles" ON public.profiles;
CREATE POLICY "allow select all profiles"
    ON public.profiles FOR SELECT TO anon, authenticated
    USING (true);

-- En cas de besoin d'insertion lors de la première connexion
DROP POLICY IF EXISTS "allow insert profiles" ON public.profiles;
CREATE POLICY "allow insert profiles"
    ON public.profiles FOR INSERT TO anon, authenticated
    WITH CHECK (true);

-- Notification pour recharger le schéma PostgREST de Supabase
NOTIFY pgrst, 'reload schema';
