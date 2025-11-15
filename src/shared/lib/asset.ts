import type { StaticAssetResponse } from '@/shared/types/response'

export const getStaticAssets = async (): Promise<StaticAssetResponse[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/static-assets`)

        const data = await response.json()

        return data.data as StaticAssetResponse[]
    } catch {
        return []
    }
}

export const getAssetUrl = (path: string): string => {
    const baseUrl = process.env.NEXT_PUBLIC_OBJECT_STORAGE_URL
    return `${baseUrl}/${path}`
}
