// filepath: app/components/funding-item.tsx
interface FundingItemProps {
    title: string;
    source: string;
    period: string;
}

export function FundingItem({ title, source, period }: FundingItemProps) {
    return (
        <div className="mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <h3 className="font-medium mb-1 text-neutral-900 dark:text-neutral-100">
                {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-1 text-sm mt-2">
                <div className="md:col-span-1 text-neutral-600 dark:text-neutral-400">
                    Source:
                </div>
                <div className="md:col-span-4 text-neutral-800 dark:text-neutral-200">
                    {source}
                </div>


                <div className="md:col-span-1 text-neutral-600 dark:text-neutral-400">
                    Period:
                </div>
                <div className="md:col-span-4 text-neutral-800 dark:text-neutral-200">
                    {period}
                </div>
            </div>
        </div>
    )
}
