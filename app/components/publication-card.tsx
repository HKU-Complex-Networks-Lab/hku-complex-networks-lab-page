// filepath: app/components/publication-card.tsx
import Link from 'next/link'

interface PublicationCardProps {
    title: string;
    authors: string;
    venue: string;
    year: number;
    url: string;
    focus: string;
}

export function PublicationCard({ title, authors, venue, year, url, focus }: PublicationCardProps) {
    return (
        <div className="mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <Link 
                href={url}
                className="block mb-1 text-neutral-900 dark:text-neutral-100 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
            >
                {title}
            </Link>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                {authors}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                {venue}, {year}
            </p>
            <div className="mt-2">
                <span className="inline-block px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-md">
                    {focus}
                </span>
            </div>
        </div>
    )
}