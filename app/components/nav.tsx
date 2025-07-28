import Link from 'next/link'
import { Button } from "@/components/ui/button"

const navItems = {
    '/': {
        name: 'Research',
    },
    '/members': {
        name: 'Members',
    },
    '/news': {
        name: 'News',
    },
    '/publications': {
        name: 'Publications',
    },
    '/funding': {
        name: 'Funding',
    },
    '/positions': {
        name: 'Positions',
    },
    'https://github.com/hku-complex-networks-lab': {
        name: 'GitHub',
    },
}

export function Navbar() {
    return (
        <aside className="-ml-[12px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-wrap max-w-screen items-start relative px-0 pb-0 fade"
                    id="nav"
                >
                    <div className="space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                            <Button
                                key={path}
                                variant="link"
                                size="sm"
                                asChild
                            >
                                <Link
                                    href={path}
                                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                                >
                                    {name}
                                </Link>
                            </Button>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    )
}