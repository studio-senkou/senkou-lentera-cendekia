export const getAssetUrl = (path: string): string => {
    // If it's already a full URL or local path, return as-is
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/')) {
        return path
    }
    const baseUrl = process.env.NEXT_PUBLIC_OBJECT_STORAGE_URL
    if (!baseUrl) {
        return `/${path}`
    }
    return `${baseUrl}/${path}`
}

