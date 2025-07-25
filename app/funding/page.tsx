// filepath: app/funding/page.tsx
import { FundingItem } from '../components/funding-item'

export const metadata = {
    title: 'Research Funding',
    description: 'Grants and funding supporting research at HKU Complex Networks Lab.',
}

export default function FundingPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Research Funding</h1>
            
            <p className="mb-8">
                Our research is generously supported by grants from various funding agencies.
            </p>
            
            <h2 className="text-xl font-medium mb-6">Current Grants as PI</h2>
            
            <FundingItem 
                title="General Research Fund (GRF)"
                projectnum="17300225"
                source="Hong Kong Research Grants Council"
                period="2026-2028"
            />
            
            <FundingItem 
                title="Young Scientist Fund"
                projectnum="12405044"
                source="National Science Foundation of China"
                period="2025-2027"
            />
            
            <FundingItem 
                title="General Research Fund (GRF)"
                projectnum="17301024"
                source="Hong Kong Research Grants Council"
                period="2025-2027"
            />
            
            <FundingItem 
                title="Early Career Scheme (ECS)"
                projectnum="27302523"
                source="Hong Kong Research Grants Council"
                period="2024-2026"
            />

            <FundingItem 
                title="Urban Systems Institute Fellowship Grant"
                source="University of Hong Kong"
                period="2024-2026"
            />
            
            <FundingItem 
                title="Data Science Research Seed Fund (Co-PI)"
                source="University of Hong Kong"
                period="2024-2026"
            />

            <FundingItem 
                title="HKU-100 Scholars Start Up Grant"
                source="University of Hong Kong"
                period="2022-2025"
            />

        </section>
    )
}
