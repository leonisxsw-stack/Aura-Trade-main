-- ============================================================
-- SQL Configuration — RLS Policy for Profiles (Aura Trade)
-- Supabase → SQL Editor → Coller tout → Run
-- ============================================================

-- Permet aux administrateurs et au propriétaire principal de modifier n'importe quel profil
-- (Avertissements, Kicks, Bans, Pseudos, Badges, Premium, Rôles Admin)
DROP POLICY IF EXISTS "allow admins to update profiles" ON public.profiles;

CREATE POLICY "allow admins to update profiles" 
    ON public.profiles FOR UPDATE TO anon, authenticated
    USING (
        (SELECT is_admin FROM public.profiles WHERE id = auth.uid()) = true
        OR
        (SELECT email FROM public.profiles WHERE id = auth.uid()) = 'leoazex20@gmail.com'
    )
    WITH CHECK (true);

-- Au cas où RLS n'est pas activé ou s'il manque des permissions de lecture
DROP POLICY IF EXISTS "allow select all profiles" ON public.profiles;
CREATE POLICY "allow select all profiles"
    ON public.profiles FOR SELECT TO anon, authenticated
    USING (true);

-- Notification pour recharger le schéma PostgREST de Supabase
NOTIFY pgrst, 'reload schema';
