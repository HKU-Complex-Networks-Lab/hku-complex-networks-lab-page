// filepath: app/members/page.tsx
import { MemberCard } from '../components/member-card'

export const metadata = {
    title: 'Lab Members',
    description: 'Meet the HKU Complex Networks Lab team.',
}

export default function MembersPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Lab Members</h1>
            
            <h2 className="text-xl font-medium mb-6">Faculty</h2>
            <MemberCard 
                name="Prof. Alec Kirkley"
                position="Assistant Professor, HKU Institute of Data Science and Department of Urban Planning & Design"
                interests={["Network Science", "Statistical Physics", "Complex Systems", "Statistical Inference", "Urban Science"]}
                photo="/images/members/alec-kirkley.jpg"
                links={[
                    {type: "personal", url: "https://aleckirkley.com/"},
                    {type: "scholar", url: "https://scholar.google.com/citations?hl=en&user=42b-2NcAAAAJ"},
                    {type: "github", url: "https://github.com/aleckirkley"}
                ]}
            />
            
            <h2 className="text-xl font-medium mb-6 mt-12">Postdoctoral Researchers</h2>
            <MemberCard 
                name="Dr. Seongmin Kim"
                position="Postdoctoral Fellow"
                interests={["Statistical Physics", "Network Science", "Complex Systems", "Granular Materials"]}
                photo="/images/seongmin-kim.jpg"
                links={[
                    {type: "personal", url: "https://seongmingranular.wordpress.com"},
                    {type: "scholar", url: "https://scholar.google.com/citations?user=BZjZQ4QAAAAJ&hl=ko&oi=sra"},
                    {type: "github", url: "https://github.com/seongmin-kim-1"}
                ]}
            />
            
            <h2 className="text-xl font-medium mb-6 mt-12">PhD Students</h2>
            <MemberCard 
                name="Baiyue He"
                position="PhD Student"
                interests={["Network Science", "Spatiotemporal Analysis"]}
                photo="/images/members/baiyue-he.jpg"
                links={[
                    {type: "scholar", url: "https://orcid.org/0009-0007-9787-9726"},
                    {type: "github", url: "https://github.com/baiyueh"}
                ]}
            />
            
            <MemberCard 
                name="Ya Wen"
                position="PhD Candidate"
                interests={["Urban Science", "Geospatial AI"]}
                photo="/images/members/ya-wen.jpg"
                links={[
                    {type: "scholar", url: ""},
                    {type: "github", url: "https://github.com/wy062111"}
                ]}
            />

            <MemberCard 
                name="Jiayu Weng"
                position="PhD Student"
                interests={["Network Science", "Neural Network", "Complex Systems"]}
                photo="/images/members/jiayu-weng.jpg"
                links={[
                    {type: "scholar", url: "https://scholar.google.com/citations?user=KZGlHNIAAAAJ&hl=en"},
                    {type: "github", url: "https://github.com/yukiweng62"}
                ]}
            />

            <MemberCard 
                name="Yanting Zhang"
                position="PhD Student"
                interests={["TBD"]}
                photo="/images/members/yanting-zhang.jpg"
                links={[
                    {type: "personal", url: ""},
                    {type: "scholar", url: ""},
                    {type: "github", url: ""}
                ]}
            />
            
            <MemberCard 
                name="Yingbang Zang"
                position="PhD Student"
                interests={["Network Science", "Network Inference", "Complex Systems & AI"]}
                photo="/images/members/yingbang-zang.jpg"
                links={[
                    {type: "scholar", url: "https://scholar.google.com/citations?hl=zh-CN&user=y0FjOMsAAAAJ"},
                    {type: "github", url: "https://github.com/zangyingbang"}
                ]}
            />

            <h2 className="text-xl font-medium mb-6 mt-12">Master's Students</h2>
            <MemberCard 
                name="Jianrui Wu"
                position="MPhil Student"
                interests={["ML methods for network science"]}
                photo="/images/members/jianrui-wu.webp"
                links={[
                    {type: "personal", url: "https://jer-ry.github.io"},
                    {type: "github", url: "https://github.com/JER-ry"}
                ]}
            />
            
            <h2 className="text-xl font-medium mb-6 mt-12">Former Lab Members</h2>
            <MemberCard 
                name="Sebastian Morel-Balbi"
                position="Postdoctoral Fellow"
                interests={["Statistical Physics","Complex Systems","Network Science"]}
                photo="/images/members/sebastian-morel.jpg"
                links={[
                    {type: "personal", url: ""},
                    {type: "scholar", url: ""},
                    {type: "github", url: ""}
                ]}
            />
            
        </section>
        
        
    )
}
