// filepath: app/components/news-item.tsx
import { formatDate } from 'app/blog/utils'
import Link from 'next/link'

interface NewsItemProps {
    title: string;
    date: string;
    summary: string;
    slug: string;
}

export function NewsItem({ title, date, summary, slug }: NewsItemProps) {
    return (
        <Link
            className="flex flex-col space-y-2 mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800"
            href={`/news/${slug}`}
        >
            <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(date, false)}
                </p>
                <div>
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-semibold">
                        {title}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2 mt-1 text-sm">
                        {summary}
                    </p>
                </div>
            </div>
        </Link>
    )
}