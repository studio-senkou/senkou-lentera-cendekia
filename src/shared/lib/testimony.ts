import type { TestimonyResponse } from '@/shared/types/response'
import { testimonials as dummyTestimonials } from '@/entities/testimonials'
import { getSupabase } from './supabase'

// Database row type from Supabase
interface TestimonyRow {
    id: number
    testimoner_name: string
    testimoner_position: string | null
    testimoner_photo: string | null
    testimony_text: string
    is_active: boolean
    created_at: string
    updated_at: string
}

// Transform database row to TestimonyResponse
const transformTestimony = (row: TestimonyRow): TestimonyResponse => ({
    id: row.id,
    testimoner_name: row.testimoner_name,
    testimoner_current_position: row.testimoner_position || undefined,
    testimoner_photo: row.testimoner_photo || '',
    testimony_text: row.testimony_text,
    created_at: row.created_at,
    updated_at: row.updated_at,
})

// Transform dummy testimony to TestimonyResponse
const transformDummyTestimony = (t: typeof dummyTestimonials[0]): TestimonyResponse => ({
    id: t.id,
    testimoner_name: t.testimoner,
    testimoner_current_position: t.testimoner_position,
    testimoner_photo: t.image,
    testimony_text: t.quote,
    created_at: t.created_at,
    updated_at: t.updated_at,
})

export const getTestimonies = async (): Promise<TestimonyResponse[]> => {
    try {
        const supabase = getSupabase()
        
        // Fallback to dummy testimonials if Supabase is not configured
        if (!supabase) {
            console.log('Supabase not configured, using dummy testimonials')
            return dummyTestimonials.map(transformDummyTestimony)
        }

        const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .eq('is_active', true)
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching testimonials:', error)
            return dummyTestimonials.map(transformDummyTestimony)
        }

        if (!data || data.length === 0) {
            return dummyTestimonials.map(transformDummyTestimony)
        }

        return data.map(transformTestimony)
    } catch (error) {
        console.error('Error fetching testimonials:', error)
        return dummyTestimonials.map(transformDummyTestimony)
    }
}

export const getTestimonyById = async (id: string): Promise<TestimonyResponse | null> => {
    try {
        const supabase = getSupabase()
        
        // Fallback to dummy testimonials if Supabase is not configured
        if (!supabase) {
            const testimony = dummyTestimonials.find(t => t.id === parseInt(id))
            return testimony ? transformDummyTestimony(testimony) : null
        }

        const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .eq('id', parseInt(id))
            .single()

        if (error) {
            console.error('Error fetching testimony:', error)
            const testimony = dummyTestimonials.find(t => t.id === parseInt(id))
            return testimony ? transformDummyTestimony(testimony) : null
        }

        if (!data) {
            const testimony = dummyTestimonials.find(t => t.id === parseInt(id))
            return testimony ? transformDummyTestimony(testimony) : null
        }

        return transformTestimony(data)
    } catch (error) {
        console.error('Error fetching testimony:', error)
        const testimony = dummyTestimonials.find(t => t.id === parseInt(id))
        return testimony ? transformDummyTestimony(testimony) : null
    }
}
