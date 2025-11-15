import { ArticleResponse } from '@/types/response'

export const getArticles = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs`,
      {
        next: { revalidate: 60 },
      },
    )

    if (!response.ok) {
      throw new Error('Failed to fetch articles')
    }

    const data = await response.json()
    return data.data as ArticleResponse[]
  } catch {
    return []
  }
}
