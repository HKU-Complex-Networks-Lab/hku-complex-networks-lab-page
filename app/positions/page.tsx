// filepath: app/positions/page.tsx
export const metadata = {
    title: 'Open Positions',
    description: 'Join our team!',
}

export default function PositionsPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Open Positions</h1>
            
            <p className="mb-8">
                We are looking for talented and motivated individuals to join our research group.
            </p>
            
            <div className="border p-6 rounded-lg mb-8 bg-neutral-50 dark:bg-neutral-900">
                <h2 className="font-semibold text-xl mb-2">Postdoctoral Research Fellow</h2>
                <p className="mb-4 text-neutral-800 dark:text-neutral-200">
                    We're seeking a Postdoctoral Fellow with interests in complex networks, statistical physics, inference, or urban science.
                </p>
                <h3 className="font-medium mb-1">Requirements:</h3>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300">
                    <li>PhD in Physics, Mathematics, Statistics, Computer Science, Data Science, or related fields</li>
                    <li>Strong programming skills (Python, R, Julia)</li>
                    <li>Experience with statistical analysis and data visualization</li>
                    <li>Publication record in relevant fields</li>
                </ul>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Application deadline: N/A
                </p>
                <a 
                    href="mailto:akirkley@hku.hk"
                    className="inline-block mt-4 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                >
                    Apply Now
                </a>
            </div>
            
            <div className="border p-6 rounded-lg mb-8 bg-neutral-50 dark:bg-neutral-900">
                <h2 className="font-semibold text-xl mb-2">PhD Student Positions</h2>
                <p className="mb-4 text-neutral-800 dark:text-neutral-200">
                    We have openings for PhD students interested in complex networks research. PhD applicants may also be interested in checking out the{' '}
                    <a 
                        href="https://cerg1.ugc.edu.hk/hkpfs/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Hong Kong PhD Fellowship Scheme
                    </a>
                    , which provides an excellent stipend and support for PhD studies in Hong Kong.
                </p>
                <h3 className="font-medium mb-1">Research Areas:</h3>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300">
                    <li>Theory of Complex Networks and Statistical Physics</li>
                    <li>Statistical Inference for Networks</li>
                    <li>Applications of Network Science to Understand Urban and Geographical Data</li>
                </ul>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Apply through the HKU Graduate School. <br />
                    Next application deadline: December 1, 2025 for Fall 2026 admission
                </p>
                <a 
                    href="https://gradsch.hku.hk/prospective_students/application/how_to_apply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                >
                    Application Details
                </a>
            </div>
            
            <div className="border p-6 rounded-lg mb-8 bg-neutral-50 dark:bg-neutral-900">
                <h2 className="font-semibold text-xl mb-2">Research Opportunities</h2>
                <p className="mb-4 text-neutral-800 dark:text-neutral-200">
                    We welcome masters students and final-year undergraduate students interested in conducting research projects in our lab. Projects can be tailored to match your interests within our research areas.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">
                    If you're interested, please email us with your CV and a brief statement of your research interests.
                </p>
                <a 
                    href="mailto:akirkley@hku.hk"
                    className="inline-block mt-4 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                >
                    Contact Us
                </a>
            </div>
        </section>
    )
}
