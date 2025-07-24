// filepath: app/publications/page.tsx
import { PublicationCard } from '../components/publication-card'

export const metadata = {
    title: 'Publications',
    description: 'Research publications from the HKU Complex Networks Lab.',
}

export default function PublicationsPage() {
    const publications = [
        {
            title: "Resilience of Multilayer Urban Transportation Networks",
            authors: "Smith, J., Wang, M., Chen, S., & Hassan, A.",
            venue: "Nature Communications",
            year: 2024,
            url: "https://doi.org/10.1038/s41467-024-00001-1",
            focus: "Transportation Networks"
        },
        {
            title: "Information Diffusion Patterns in Polarized Social Networks",
            authors: "Chen, S., Smith, J., & Wei, L.",
            venue: "Proceedings of the National Academy of Sciences",
            year: 2023,
            url: "https://doi.org/10.1073/pnas.2023123120",
            focus: "Social Networks"
        },
        {
            title: "Higher-Order Interactions in Urban Mobility Networks",
            authors: "Wang, M., Hassan, A., & Smith, J.",
            venue: "Science Advances",
            year: 2023,
            url: "https://doi.org/10.1126/sciadv.abd2456",
            focus: "Transportation Networks"
        },
        {
            title: "Detecting Community Structure in Multilayer Networks",
            authors: "Hassan, A., Smith, J., & Chen, S.",
            venue: "Physical Review E",
            year: 2022,
            url: "https://doi.org/10.1103/PhysRevE.102.012301",
            focus: "Network Theory"
        },
        {
            title: "Urban Mobility Patterns During the COVID-19 Pandemic",
            authors: "Smith, J., Wang, M., & Wei, L.",
            venue: "Scientific Reports",
            year: 2022,
            url: "https://doi.org/10.1038/s41598-022-12345-6",
            focus: "Transportation Networks"
        },
        {
            title: "Network Inference from Incomplete Observations",
            authors: "Wang, M., Chen, S., & Smith, J.",
            venue: "Journal of Complex Networks",
            year: 2021,
            url: "https://doi.org/10.1093/comnet/cnab001",
            focus: "Network Theory"
        }
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