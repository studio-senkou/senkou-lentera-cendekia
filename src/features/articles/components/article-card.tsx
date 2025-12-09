import { ArticleResponse } from '@/shared/types/response'
import { createExcerpt, estimateReadTime } from '@/shared/utils/string'
import Link from 'next/link'
import Image from 'next/image'

interface ArticleCardProps {
    article: ArticleResponse
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
    return (
        <article className="group flex flex-col md:flex-row gap-6 py-8 border-b border-neutral-light last:border-0">
            <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-sm text-neutral-base">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-neutral-lighter">
                         <Image 
                            src={`https://ui-avatars.com/api/?name=${article.author?.name || 'Admin'}&background=f2f2f2&color=242424`} 
                            alt={article.author?.name || 'Author'}
                            fill
                            className="object-cover"
                         />
                    </div>
                    <span className="text-neutral-dark">{article.author?.name || 'Lentera Cendekia'}</span>
                </div>
                
                <Link href={`/articles/${article.id}`} className="block">
                    <h2 className="text-xl font-bold text-neutral-darkest group-hover:underline leading-snug mb-2">
                        {article.title}
                    </h2>
                </Link>
                
                <p className="text-neutral-base leading-relaxed line-clamp-2 text-sm">
                    {createExcerpt(article.content, 160)}
                </p>

                <div className="flex items-center gap-3 text-xs text-neutral-base pt-1">
                    <span>{new Date(article.created_at).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })}</span>
                    <span>·</span>
                    <span>{estimateReadTime(article.content)} min read</span>
                </div>
            </div>

            <Link href={`/articles/${article.id}`} className="relative w-full md:w-40 h-32 md:h-28 bg-neutral-lighter rounded overflow-hidden shrink-0">
                <Image
                    src={`https://picsum.photos/seed/${article.id}/400/300`} 
                    alt={article.title}
                    fill
                    className="object-cover"
                />
            </Link>
        </article>
    )
}
