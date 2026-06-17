import { getSupabase } from './supabase'
import type { Program } from '@/shared/types/response'
import { dummyPrograms } from '@/entities/programs'

export const getPrograms = async (): Promise<Program[]> => {
    try {
        const supabase = getSupabase()
        
        if (!supabase) {
            console.log('Supabase not configured, returning empty programs')
            return dummyPrograms
        }

        const { data, error } = await supabase
            .from('programs')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching programs:', error)
            return dummyPrograms
        }

        if (!data || data.length === 0) {
            return dummyPrograms
        }

        return data
    } catch (error) {
        console.error('Error fetching programs:', error)
        return dummyPrograms
    }
}
