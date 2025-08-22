// filepath: app/publications/page.tsx
import { PublicationCard } from '../components/publication-card'

export const metadata = {
    title: 'Research publications from lab members',
    description: 'Research publications from lab members',
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
            title: "HINA: A Learning Analytics Tool for Heterogenous Interaction Network Analysis in Python",
            authors: "S. Feng, B. He, and A. Kirkley",
            venue: "Journal of Open Source Software",
            year: 2025,
            url: "https://joss.theoj.org/papers/10.21105/joss.08299",
        },
        {
            title: "PANINIpy: Package of Algorithms for Nonparametric Inference with Networks In Python",
            authors: "A. Kirkley and B. He",
            venue: "Journal of Open Source Software",
            year: 2024,
            url: "https://joss.theoj.org/papers/10.21105/joss.07312",
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
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Research publications from lab members</h1>
            
            <div className="mt-6">
                {publications.map((pub, i) => (
                    <PublicationCard 
                        key={i}
                        title={pub.title}
                        authors={pub.authors}
                        venue={pub.venue}
                        year={pub.year}
                        url={pub.url}
                    />
                ))}
            </div>
        </section>
    )
}
