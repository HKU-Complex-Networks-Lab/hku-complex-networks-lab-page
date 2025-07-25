// filepath: app/news/page.tsx
import { NewsItem } from '../components/news-item'

export const metadata = {
    title: 'News & Events',
    description: 'Latest news and events from HKU Complex Networks Lab.',
}

export default function NewsPage() {
    const newsItems = [
        {
            title: "HKU IDS Interdisciplinary Workshop: Understanding Complex Networks for Advancing Fundamental Data Science",
            date: "2025-07-24",
            summary: "The Complex Networks Lab will host a two day workshop from August 28th to August 29th on Complex Networks at HKU. The event will bring together researchers and practitioners from interdisciplinary studies.",
            slug: "workshop-2025"
        },
        {
            title: "New Software Package Released",
            date: "2024-11-14",
            summary: "Our lab has released Paninipy, a new Python package collecting a number of recent works on nonparametric inference for unsupervised learning with network data. This open-source tool provides implementations of novel algorithms developed in our research.",
            slug: "paninipy-release"
        }
    ];
    
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">News & Events</h1>
            
            <div className="mt-6">
                {newsItems.map((item, i) => (
                    <NewsItem 
                        key={i}
                        title={item.title}
                        date={item.date}
                        summary={item.summary}
                        slug={item.slug}
                    />
                ))}
            </div>
        </section>
    )
}
