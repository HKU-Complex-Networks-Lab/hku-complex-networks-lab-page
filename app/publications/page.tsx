// filepath: app/publications/page.tsx
import { PublicationCard } from '../components/publication-card'

export const metadata = {
    title: 'Publications',
    description: 'Research publications from junior members of the HKU Complex Networks Lab.',
}

export default function PublicationsPage() {
    const publications = [
        {
            title: "Learning when to rank: Estimation of partial rankings from sparse, noisy comparisons",
            authors: "S. Morel-Balbi and A. Kirkley",
            venue: "arXiv preprint",
            year: 2025,
            url: "https://arxiv.org/abs/2501.02505",
        },
        {
            title: "Bayesian regionalization of urban mobility networks",
            authors: "S. Morel-Balbi and A. Kirkley",
            venue: "Physical Review Research",
            year: 2024,
            url: "https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.6.033307",
        },
        
    ];
    
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Publications</h1>
            
            <div className="mt-6">
                {publications.map((pub, i) => (
                    <PublicationCard 
                        key={i}
                        title={pub.title}
                        authors={pub.authors}
                        venue={pub.venue}
                        year={pub.year}
                        url={pub.url}
                        focus={pub.focus}
                    />
                ))}
            </div>
        </section>
    )
}
