import type { TestimonyResponse } from '@/shared/types/response'

export const getTestimonies = async (): Promise<TestimonyResponse[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonies`)

        if (!response.ok) {
            throw new Error('Failed to fetch testimonies')
        }

        const data = await response.json()
        return data.data.testimonials as TestimonyResponse[]
    } catch {
        return []
    }
}
