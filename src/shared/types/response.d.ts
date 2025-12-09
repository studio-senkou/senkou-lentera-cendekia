export interface User {
    id: number
    name: string
    email: string
    role: string
    created_at: string
    updated_at: string
}

export interface TestimonyResponse {
    id: number
    testimoner_name: string
    testimoner_current_position?: string
    testimoner_previous_position?: string
    testimoner_photo: string
    testimony_text: string
    created_at: string
    updated_at: string
}

export interface StaticAssetResponse {
    id: number
    asset_name: string
    asset_type: string
    asset_url: string
    asset_description?: string
    created_at: string
    updated_at: string
}

export interface ArticleResponse {
    id: number
    title: string
    content: string
    author: User
    created_at: string
    updated_at: string
}
