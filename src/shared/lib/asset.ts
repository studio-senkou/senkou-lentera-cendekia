import type { StaticAssetResponse } from '@/shared/types/response'
import { getSupabase } from './supabase'

// Dummy assets for fallback
const dummyAssets: StaticAssetResponse[] = [
    { id: 1, asset_name: 'Foto Bersama', asset_type: 'hero_carousel', asset_url: 'https://is3.cloudhost.id/lentera-cendekia/static_assets/LANDING_PAGE/GENERATED_FOTO_BERSAMA.webp', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    { id: 2, asset_name: 'Kelas Praktikum Interaktif', asset_type: 'hero_carousel', asset_url: 'https://is3.cloudhost.id/lentera-cendekia/static_assets/LANDING_PAGE/GENERATED_FOTO_PRAKTIKUM.webp', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    { id: 3, asset_name: 'Kegiatan Siswa', asset_type: 'hero_carousel', asset_url: 'https://is3.cloudhost.id/lentera-cendekia/static_assets/LANDING_PAGE/GENERATED_FOTO_BELAJAR.webp', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
]

export const getStaticAssets = async (assetType?: string): Promise<StaticAssetResponse[]> => {
    try {
        const supabase = getSupabase()
        
        if (!supabase) {
            return assetType ? dummyAssets.filter(a => a.asset_type === assetType) : dummyAssets
        }

        let query = supabase
            .from('static_assets')
            .select('*')
            .eq('is_active', true)
            .order('display_order', { ascending: true })

        if (assetType) {
            query = query.eq('asset_type', assetType)
        }

        const { data, error } = await query

        if (error) {
            console.error('Error fetching static assets:', error)
            return assetType ? dummyAssets.filter(a => a.asset_type === assetType) : dummyAssets
        }

        if (!data || data.length === 0) {
            return assetType ? dummyAssets.filter(a => a.asset_type === assetType) : dummyAssets
        }

        return data as StaticAssetResponse[]
    } catch (error) {
        console.error('Error fetching static assets:', error)
        return assetType ? dummyAssets.filter(a => a.asset_type === assetType) : dummyAssets
    }
}

export const getAssetUrl = (path: string): string => {
    // If it's already a full URL, return as-is
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path
    }
    const baseUrl = process.env.NEXT_PUBLIC_OBJECT_STORAGE_URL
    return `${baseUrl}/${path}`
}

