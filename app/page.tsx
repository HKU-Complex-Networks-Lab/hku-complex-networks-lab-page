// filepath: app/page.tsx
import { ResearchArea } from './components/research-area'
import { Button } from "@/components/ui/button"


export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                HKU Complex Networks Lab
            </h1>
            <p className="mb-8">
                The HKU Complex Networks Lab is a research group at the University of Hong Kong focused on developing tools for understanding complex systems through the lens of network science. Our work is highly interdisciplinary in nature and draws on ideas from a range of disciplines including statistical physics, information theory, Bayesian inference, scientific computing, and machine learning. 
            </p>
            
            <h2 className="text-xl font-semibold mb-8 tracking-tighter">Research Areas</h2>
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
            </div>
            <ResearchArea 
                title="Developing statistically principled unsupervised learning methods for noisy network data"
                description="Networks present new challenges for inference and learning due to their relational, hierarchical, and high (usually infinite!) dimensional nature. There are also many ways in which uncertainty can be introduced into network datasets: Networks may be noisy due to statistical or systematic measurement errors; Networks measured in cross-sectional or longitudinal studies may be subject to errors across different experimental environments; Samples of networks or their partitions from a Bayesian posterior distribution are subject to the intrinsic uncertainties in their corresponding statistical model. In this line of research I aim to develop principled, flexible, and interpretable methods to model network data in a variety of forms (temporal/multilayer networks, hypergraphs, etc), which do not overfit or rely on the ad hoc heuristics commonly used in modern machine learning methodology. The methods I develop typically require the formulation of new learning objectives as well as novel sampling and optimization techniques to reveal the patterns of interest and distinguish statistically meaningful structure from noise."
                image="/images/area1.png"
                papers={[
                    {
                        title: "Fast nonparametric inference of network backbones for weighted graph sparsification",
                        authors: "Alec Kirkley",
                        venue: "Physical Review X",
                        year: 2025,
                        url: "https://journals.aps.org/prx/abstract/10.1103/4pg6-mtmt"
                    },
                    {
                        title: "Community structure in social and biological networks",
                        authors: "Girvan, M., & Newman, M. E.",
                        venue: "Proceedings of the National Academy of Sciences",
                        year: 2002,
                        url: "https://doi.org/10.1073/pnas.122653799"
                    }
                ]}
            />
            
            <ResearchArea 
                title="Improving the efficiency and interpretability of network model fitting and evaluation"
                description="The discrete, high-dimensional nature of networks also introduces new challenges for model optimization and evaluation, since many objectives of interest are combinatorial in nature, depend on large-scale network properties such as long loops or paths, and produce unwieldy outputs in the form of sets or partitions. As a result, many existing methods for network inference and model evaluation suffer from issues of scalability, interpretability, and subtle but important biases that can compromise the quality of the results in practical applications. In this line of research I aim to develop improved computational methods to enable the scaling of inference methods to large networks as well as robust, interpretable comparisons of network structures based on fundamental principles."
                image="/images/area2.png"
                papers={[
                    {
                        title: "Belief propagation for networks with loops",
                        authors: "Alec Kirkley, George T. Cantwell, and M. E. J. Newman",
                        venue: "Sicence Advances",
                        year: 2021,
                        url: "https://www.science.org/doi/10.1126/sciadv.abf1211"
                    },
                    {
                        title: "Representative community divisions of networks",
                        authors: "Alec Kirkley & M. E. J. Newman",
                        venue: "Nature Communications physics",
                        year: 2022,
                        url: "https://www.nature.com/articles/s42005-022-00816-3"
                    },
                    {
                        title: "Network mutual information measures for graph similarity",
                        authors: "Helcio Felippe, Federico Battiston, Alec Kirkley",
                        venue: "Nature Communications physics",
                        year: 2024,
                        url: "https://www.nature.com/articles/s42005-024-01830-3"
                    }
                ]}
            />
            
            <ResearchArea 
                title="Modelling urban mobility networks and their impact on city prosperity and resilience"
                description="Urban mobility infrastructure and dynamics play a critical role in determining the social, economic, and physical well-being of cities and their residents. Structural networks such as street and other transportation networks facilitate the distribution of resources as well as the accessibility of jobs, amenities, and services. Meanwhile, networks of human mobility dynamics determine the mixing and contact patterns of urban residents, which impacts the spread of ideas and infectious diseases as well as the vibrancy, safety, and congestion of urban spaces."
                image="/images/area3.png"
                papers={[
                    {
                        title: "From the betweenness centrality in street networks to structural invariants in random planar graphs",
                        authors: "Alec Kirkley, Hugo Barbosa, Marc Barthelemy & Gourab Ghoshal",
                        venue: "Nature Communications",
                        year: 2018,
                        url: "https://www.nature.com/articles/s41467-018-04978-z"
                    },
                    {
                        title: "Bayesian regionalization of urban mobility networks",
                        authors: "Sebastian Morel-Balbi & Alec Kirkley",
                        venue: "Physical Review",
                        year: 2024,
                        url: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.033307"
                    },
                    {
                        title: "Connecting intercity mobility with urban welfare",
                        authors: "Sayat Mimar, David Soriano-Paños, Alec Kirkley, Hugo Barbosa, Adam Sadilek, Alex Arenas, Jesus Gómez-Gardeñes, Gourab Ghoshal",
                        venue: "PNAS Nexus",
                        year: 2022,
                        url: "https://academic.oup.com/pnasnexus/article/1/4/pgac178/6693724?login=false"
                    }
                ]}
            />

            <ResearchArea 
                title="Characterizing heterogeneity and correlations in urban spatial data with network methods"
                description="There is an abundance of spatial data available to help understand the structure and function of urban regions, from census data providing demographic information for urban populations, to the precise locations of points of interest such as services or attractions, to satellite imagery capturing large scale land usage patterns. Due to high levels of heterogeneity in population density and the strong dependence of statistical analyses on spatial scale, topologically motivated methods based on spatial network analysis provide a robust lens through which to study urban spatial data."
                image="/images/area4.png"
                papers={[
                    {
                        title: "Spatial regionalization based on optimal information compression",
                        authors: "Alec Kirkley",
                        venue: "Nature Communications physics",
                        year: 2022,
                        url: "https://www.nature.com/articles/s42005-022-01029-4"
                    },
                    {
                        title: "Information theoretic network approach to socioeconomic correlations",
                        authors: "Alec Kirkley",
                        venue: "Physical Review",
                        year: 2020,
                        url: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.043212#/"
                    },
                    {
                        title: "Characterizing network circuity among heterogeneous urban amenities",
                        authors: "Bibandhan Poudyal, Gourab Ghoshal and Alec Kirkley",
                        venue: "Journal of The Royal Society Interface",
                        year: 2023,
                        url: "https://royalsocietypublishing.org/doi/10.1098/rsif.2023.0296"
                    }
                ]}
            />
        </section>
    )
}
