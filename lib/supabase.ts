import { createClient } from '@supabase/supabase-js'

// El signo "!" al final le dice a TypeScript que estamos seguros de que estas variables existen
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)