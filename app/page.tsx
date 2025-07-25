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
            />
            
            <ResearchArea 
                title="Improving the efficiency and interpretability of network model fitting and evaluation"
                description="The discrete, high-dimensional nature of networks also introduces new challenges for model optimization and evaluation, since many objectives of interest are combinatorial in nature, depend on large-scale network properties such as long loops or paths, and produce unwieldy outputs in the form of sets or partitions. As a result, many existing methods for network inference and model evaluation suffer from issues of scalability, interpretability, and subtle but important biases that can compromise the quality of the results in practical applications. In this line of research I aim to develop improved computational methods to enable the scaling of inference methods to large networks as well as robust, interpretable comparisons of network structures based on fundamental principles."
                image="/images/area2.png"
            />
            
            <ResearchArea 
                title="Modelling urban mobility networks and their impact on city prosperity and resilience"
                description="Urban mobility infrastructure and dynamics play a critical role in determining the social, economic, and physical well-being of cities and their residents. Structural networks such as street and other transportation networks facilitate the distribution of resources as well as the accessibility of jobs, amenities, and services. Meanwhile, networks of human mobility dynamics determine the mixing and contact patterns of urban residents, which impacts the spread of ideas and infectious diseases as well as the vibrancy, safety, and congestion of urban spaces."
                image="/images/area3.png"
            />

            <ResearchArea 
                title="Characterizing heterogeneity and correlations in urban spatial data with network methods"
                description="There is an abundance of spatial data available to help understand the structure and function of urban regions, from census data providing demographic information for urban populations, to the precise locations of points of interest such as services or attractions, to satellite imagery capturing large scale land usage patterns. Due to high levels of heterogeneity in population density and the strong dependence of statistical analyses on spatial scale, topologically motivated methods based on spatial network analysis provide a robust lens through which to study urban spatial data."
                image="/images/area4.png"
            />
        </section>
    )
}
