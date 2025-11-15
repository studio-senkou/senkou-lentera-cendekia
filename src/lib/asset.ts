import { StaticAssetResponse } from '@/types/response'

export const getStaticAssets = async (): Promise<StaticAssetResponse[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/static-assets`,
    )

    const data = await response.json()

    return data.data as StaticAssetResponse[]
  } catch {
    return []
  }
}
