import type { ArticleResponse } from '@/shared/types/response'
import { dummyArticles } from '@/entities/articles'
import { getSupabase } from './supabase'

// Database row type from Supabase
interface ArticleRow {
    id: number
    title: string
    content: string
    author_name: string | null
    author_email: string | null
    author_role: string | null
    created_at: string
    updated_at: string
}

// Transform database row to ArticleResponse
const transformArticle = (row: ArticleRow): ArticleResponse => ({
    id: row.id,
    title: row.title,
    content: row.content,
    author: {
        id: row.id,
        name: row.author_name || 'Lentera Cendekia',
        email: row.author_email || '',
        role: row.author_role || 'Admin',
        created_at: row.created_at,
        updated_at: row.updated_at,
    },
    created_at: row.created_at,
    updated_at: row.updated_at,
})

export const getArticles = async (): Promise<ArticleResponse[]> => {
    try {
        const supabase = getSupabase()
        
        // Fallback to dummy articles if Supabase is not configured
        if (!supabase) {
            console.log('Supabase not configured, using dummy articles')
            return dummyArticles
        }

        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching articles:', error)
            return dummyArticles
        }

        if (!data || data.length === 0) {
            return dummyArticles
        }

        return data.map(transformArticle)
    } catch (error) {
        console.error('Error fetching articles:', error)
        return dummyArticles
    }
}

export const getArticleById = async (id: string): Promise<ArticleResponse | null> => {
    try {
        const supabase = getSupabase()
        
        // Fallback to dummy articles if Supabase is not configured
        if (!supabase) {
            const article = dummyArticles.find(a => a.id === parseInt(id))
            return article || null
        }

        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .eq('id', parseInt(id))
            .single()

        if (error) {
            console.error('Error fetching article:', error)
            const article = dummyArticles.find(a => a.id === parseInt(id))
            return article || null
        }

        if (!data) {
            const article = dummyArticles.find(a => a.id === parseInt(id))
            return article || null
        }

        return transformArticle(data)
    } catch (error) {
        console.error('Error fetching article:', error)
        const article = dummyArticles.find(a => a.id === parseInt(id))
        return article || null
    }
}

