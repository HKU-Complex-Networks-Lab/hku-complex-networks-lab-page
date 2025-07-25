// filepath: app/components/research-area.tsx
import Image from 'next/image'
import Link from 'next/link'

interface ResearchAreaProps {
    title: string;
    description: string;
    image?: string;
}

export function ResearchArea({ title, description, image }: ResearchAreaProps) {
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
                </div>
            </div>
        </div>
    )
}
