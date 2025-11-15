export interface Teacher {
    id: number
    name: string
    role?: string
    description?: string
    image: string
    social?: {
        facebook?: string
        twitter?: string
        instagram?: string
        linkedin?: string
    }
    created_at: string
    updated_at: string
}

export interface Testimony {
    id: number
    testimoner: string
    testimoner_position?: string
    quote: string
    image: string
    created_at: string
    updated_at: string
}

export interface FAQ {
    id: number
    question: string
    answer: string
    created_at: string
    updated_at: string
}
