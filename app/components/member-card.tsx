import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface MemberCardProps {
    name: string;
    position: string;
    interests: string[];
    photo: string;
    links: {
        type: 'personal' | 'scholar' | 'github';
        url: string;
    }[];
}

export function MemberCard({ name, position, interests, photo, links }: MemberCardProps) {
    const getLinkText = (type: string) => {
        switch (type) {
            case 'personal':
                return 'Website';
            case 'scholar':
                return 'Scholar';
            case 'github':
                return 'GitHub';
            default:
                return 'Link';
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <Image
                    src={photo}
                    alt={name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover w-full h-full"
                />
            </div>
            <div className="flex-1">
                <h2 className="font-semibold text-lg mb-1">{name}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">{position}</p>
                
                <div className="mb-3">
                    <h3 className="text-sm font-medium mb-1">Research Interests:</h3>
                    <div className="flex flex-wrap gap-2">
                        {interests.map((interest, i) => (
                            <span 
                                key={i} 
                                className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-md"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {links.map((link, i) => (
                        <Button
                            key={i}
                            // variant="ghost"
                            size="sm"
                            asChild
                        >
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {getLinkText(link.type)}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}