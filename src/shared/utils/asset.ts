export const getAssetUrl = (path: string): string => {
    const baseUrl = process.env.NEXT_PUBLIC_OBJECT_STORAGE_URL
    return `${baseUrl}/${path}`
}
