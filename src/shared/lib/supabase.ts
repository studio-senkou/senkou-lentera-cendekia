import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseInstance: SupabaseClient | null = null

export const getSupabase = (): SupabaseClient | null => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
    
    if (!supabaseUrl || !supabasePublishableKey) {
        return null
    }
    
    if (!supabaseInstance) {
        supabaseInstance = createClient(supabaseUrl, supabasePublishableKey)
    }
    
    return supabaseInstance
}

