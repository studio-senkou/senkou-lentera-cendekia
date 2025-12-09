import { ArticleResponse } from '@/shared/types/response'
import { ArticleCard } from './article-card'

interface ArticleListProps {
    articles: ArticleResponse[]
}

export const ArticleList = ({ articles }: ArticleListProps) => {
    if (!articles || articles.length === 0) {
        return (
            <div className="text-center py-20 bg-neutral-50 rounded-lg">
                <p className="text-neutral-500 text-lg">Belum ada artikel yang tersedia saat ini.</p>
                <p className="text-neutral-400 text-sm mt-2">Silakan kembali lagi nanti untuk update terbaru.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    )
}
