// filepath: app/components/research-area.tsx
import Image from 'next/image'
import Link from 'next/link'

interface ResearchAreaProps {
    title: string;
    description: string;
    image?: string;
    papers: {
        title: string;
        authors: string;
        venue: string;
        year: number;
        url: string;
    }[];
}

export function ResearchArea({ title, description, image, papers }: ResearchAreaProps) {
    return (
        <div className="mb-12">
            <h2 className="font-semibold text-xl mb-4 tracking-tight">{title}</h2>
            <div className="flex flex-col md:flex-row gap-6">
                {image && (
                    <div className="md:w-1/3">
                        <Image
                            src={image}
                            alt={title}
                            width={300}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <div className={image ? "md:w-2/3" : "w-full"}>
                    <p className="mb-4 text-neutral-800 dark:text-neutral-200">
                        {description}
                    </p>
                    {papers.length > 0 && (
                        <>
                            <h3 className="font-medium text-md mb-2 mt-4">Representative Papers:</h3>
                            <ul className="list-disc pl-6 text-sm text-neutral-700 dark:text-neutral-300">
                                {papers.map((paper, i) => (
                                    <li key={i} className="mb-2">
                                        <Link href={paper.url} className="hover:underline">
                                            {paper.title}
                                        </Link>
                                        <p className="text-neutral-600 dark:text-neutral-400">
                                            {paper.authors} ({paper.year}), {paper.venue}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}