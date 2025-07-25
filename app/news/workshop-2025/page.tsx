export const metadata = {
    title: 'HKU IDS Interdisciplinary Workshop: Understanding Complex Networks for Advancing Fundamental Data Science',
    description: 'Two-day workshop at HKU bringing together researchers working at the frontiers of network theory and interdisciplinary applications of networks.',
}

interface Speaker {
    name: string
    university: string
    bio: string
    email: string
    profilePic: string
}

interface ScheduleItem {
    time: string
    session: string
    speaker?: string
    affiliation?: string
    title?: string
}

export default function Workshop2025Page() {
    const keynoteSpeakers = [
        {
            name: "Guanrong Chen",
            affiliation: "City University of Hong Kong",
            email: "eegchen@cityu.edu.hk",
            bio: "Professor Chen received his master's degree in computer science from Sun Yat-sen University at Guangzhou in 1981 and his Ph.D. in applied mathematics from Texas A&M University in 1987. Since 2000, he has been a Chair Professor at the City University of Hong Kong. Professor Chen was elected Fellow of the IEEE in 1997 and Fellow of the Network Science Society in 2025. He was awarded the second prize of the National Natural Science Award in 2008, 2012 and 2016, respectively. In 2011, he was conferred an honorary doctorate by St. Petersburg State University and awarded the Euler Gold Medal by the Euler Foundation in Russia. In 2014, he was conferred an honorary doctorate by the University of Normandy France and was elected Member of the European Academy of Sciences. In 2015, he was elected Member of the European Academy of Engineering and Fellow of The World Academy of Sciences.",
            profilePic: "/images/speakers/guanrong-chen.jpg"
        },
        {
            name: "Tiago Peixoto",
            affiliation: "IT:U Austria",
            email: "tiago.peixoto@it-u.at",
            bio: "Tiago P. Peixoto is a Professor of Complex Systems and Network Science at IT:U, Austria. His research group works at the interface between statistical physics, computational statistics, information theory, Bayesian inference, and machine learning, and has as its main focus the study of inverse problems in network science and complex systems. He received an habilitation in theoretical physics at the University of Bremen in 2017. Previously, he was an Associate Professor at the Central European University (2019-2024), Assistant Professor in Applied Mathematics at the University of Bath (2016-2019), External Researcher at the ISI Foundation (2015-2020), and post-doc researcher at the University of Bremen (2011-2016) and Technical University of Darmstadt (2008-2011). He received a PhD in Physics at the University of São Paulo in 2008.",
            profilePic: "/images/speakers/tiago-peixoto.png"
        }
    ]

    const invitedSpeakers = [
        {
            name: "Jean-Gabriel Young",
            affiliation: "University of Vermont",
            email: "Jean-Gabriel.Young@uvm.edu",
            bio: "Jean-Gabriel Young is an Assistant Professor at the University of Vermont, where he studies statistical inference and complex systems, with a focus on network science and epidemiology. Trained as a physicist, he earned his PhD from Université Laval and was a James S. McDonnell Fellow at the University of Michigan. His work blends theory and computation to understand how structure shapes dynamics in social and biological systems.",
            urls: {
                website: "https://jgyoung.ca/",
                x: "https://x.com/_jgyou",
                bsky: "https://bsky.app/profile/jgyou.bsky.social"
            },
            profilePic: "/images/speakers/jean-gabriel-young.png"
        },
        {
            name: "George Cantwell",
            affiliation: "University of Cambridge",
            email: "gtc31@cam.ac.uk",
            bio: "",
            profilePic: "/images/speakers/george-cantwell.jpg"
        },
        {
            name: "Hao Liao",
            affiliation: "Shenzhen University",
            email: "liaohao@szdx.wecom.work",
            bio: "",
            profilePic: "/images/speakers/hao-liao.jpg"
        },
        {
            name: "Lin Wang",
            affiliation: "Shanghai Jiao Tong University",
            email: "wanglin@sjtu.edu.cn",
            bio: "Lin Wang, Professor at Shanghai Jiao Tong University, Shanghai Dawn Scholar. Her research focuses on collaborative control and game theory for networked systems, along with scheduling optimization for large-scale swarm systems. She was honored with the First Prize of Natural Science Award by Chinese Association of Automation (2022) and the Second Prize of Shanghai Natural Science Award (2022). She currently serves as the Vice Chair of IFAC Technical Committee on Large-Scale Complex Systems, and the Vice Director of CSIAM Technical Committee on Complex Networks and Complex Systems.",
            profilePic: "/images/speakers/lin-wang.jpg"
        },
        {
            name: "Xiang Li",
            affiliation: "Fudan University",
            email: "lix@fudan.edu.cn",
            bio: "",
            profilePic: "/images/speakers/xiang-li.jpg"
        },
        {
            name: "Yi Zhao",
            affiliation: "Harbin Institute of Technology (Shenzhen)",
            email: "zhao.yi@hit.edu.cn",
            bio: "Yi Zhao received the Ph.D. degree from Hong Kong Polytechnic University, Hong Kong, China, in 2007. Since graduating, he has been with the Harbin Institute of Technology, Shenzhen, China, and is currently a professor. His recent works have been on the application of mathematical methods to a diverse range of application problems. His research interests include nonlinear dynamics, nonlinear time series analysis, and complex system modeling. He is also a Distinguished Professor of Shenzhen Pengcheng Scholars and a Fellow of the Institute of Mathematics and its Applications (FIMA, UK).",
            profilePic: "/images/speakers/yi-zhao.jpg"
        },
        {
            name: "Kwang-Il Goh",
            affiliation: "Korea University",
            email: "kgoh@korea.ac.kr",
            bio: "I received a PhD in statistical physics from Seoul National University, Korea, in 2004. After a postdoctoral training at University of Notre Dame, USA, I joined the faculty of Physics Department at Korea University, Korea, in 2007. My main research interest is theoretical network science---in particular, the statistical physics of network systems ranging from scale-free networks and multiplex networks to hypergraphs most recently.",
            profilePic: "/images/speakers/kwang-il-goh.jpg"
        },
        {
            name: "Gangmin Son",
            affiliation: "Korea Institute for Advanced Study",
            email: "gmson102@gmail.com",
            bio: "Gangmin Son is a Research Fellow at the Korea Institute for Advanced Study (KIAS). He received his PhD in Physics from KAIST in 2024. During his PhD, he studied the statistical physics of networks and its real-world applications. His current research focuses mainly on generalized networks, such as multiplex networks and hypergraphs, and how their structural properties influence collective phenomena, including phase transitions.",
            profilePic: "/images/speakers/gangmin-son.png"
        }
    ]

    const hkuSpeakers = [
        {
            name: "Qingpeng Zhang",
            affiliation: "University of Hong Kong",
            email: "qpzhang@hku.hk",
            bio: "Professor Qingpeng Zhang is an Associate Professor in the Musketeers Foundation Institute of Data Science and the Department of Pharmacology and Pharmacy at HKU. He received the B.S. degree in Automation from Huazhong University of Science and Technology in 2009, and the M.S. and the Ph.D. degrees in Systems and Industrial Engineering (minor in Management Information Systems) from the University of Arizona, in 2011 and 2012, respectively. Prior to joining HKU in 08/2023, he was an Associate Professor with the School of Data Science at The City University of Hong Kong (CityU). He previously worked as a Postdoctoral Research Associate in the Tetherless World Constellation, Department of Computer Science at Rensselaer Polytechnic Institute.",
            profilePic: "/images/speakers/qingpeng-zhang.jpg"
        },
        {
            name: "Shihui Feng",
            affiliation: "University of Hong Kong",
            email: "shihuife@hku.hk",
            bio: "Assistant Professor",
            profilePic: "/images/speakers/shihui-feng.jpg"
        },
        {
            name: "Guodong Li",
            affiliation: "University of Hong Kong",
            email: "gdli@hku.hk",
            bio: "Professor Guodong Li joined the Department of Statistics & Actuarial Science, The University of Hong Kong, in 2009 as an Assistant Professor, and currently is a Professor. Prior to this, Professor Li had worked at the Division of Mathematical Sciences, Nanyang Technological University, Singapore, as an Assistant Professor since he received his PhD degree in statistics from the University of Hong Kong in 2007. He got his Bachelor and Master degrees in Statistics from Peking University.",
            profilePic: "/images/speakers/guodong-li.jpg"
        },
        {
            name: "Alec Kirkley",
            affiliation: "University of Hong Kong",
            email: "akirkley@hku.hk",
            bio: "Professor Alec Kirkley is a physicist interested in the theory of complex networks, statistical physics, as well as their applications to urban and social systems. The mathematical and computational methods he develops in his research draw on ideas from a range of disciplines including statistical physics, information theory, Bayesian inference, scientific computing, and machine learning. He received his PhD in Physics at the University of Michigan in 2021 under the supervision of Mark Newman and joined HKU as an Assistant Professor in 2022. His main research interests lie in developing principled unsupervised learning methods for noisy network data and improving the efficiency and interpretability of statistical inference methods for networks. He also adapts and applies these techniques to uncover new insights about the structure and dynamics of urban mobility as well as the underlying topology of geographical data.",
            profilePic: "/images/speakers/alec-kirkley.jpg"
        }
    ]

    const day1Schedule: ScheduleItem[] = [
        {
            time: "09:30 – 09:35",
            session: "Opening remarks & logistics",
            speaker: "—",
            affiliation: "—"
        },
        {
            time: "09:35 – 10:35",
            session: "Keynote 1",
            speaker: "Guanrong Chen",
            affiliation: "City University of Hong Kong"
        },
        {
            time: "10:35 – 10:50",
            session: "Coffee break",
            speaker: "—",
            affiliation: "—"
        },
        {
            time: "10:50 – 11:20",
            session: "Invited talk 1",
            speaker: "Jean-Gabriel Young",
            affiliation: "University of Vermont"
        },
        {
            time: "11:20 – 11:50",
            session: "Invited talk 2",
            speaker: "Qingpeng Zhang",
            affiliation: "University of Hong Kong"
        },
        {
            time: "11:50 – 13:20",
            session: "Lunch break (90 min)",
            speaker: "—",
            affiliation: "—"
        },
        {
            time: "13:20 – 13:50",
            session: "Invited talk 3",
            speaker: "Hao Liao",
            affiliation: "Shenzhen University"
        },
        {
            time: "13:50 – 14:20",
            session: "Invited talk 4",
            speaker: "Lin Wang",
            affiliation: "Shanghai Jiao Tong University"
        },
        {
            time: "14:20 – 14:35",
            session: "Coffee break",
            speaker: "—",
            affiliation: "—"
        },
        {
            time: "14:35 – 15:05",
            session: "Invited talk 5",
            speaker: "Xiang Li",
            affiliation: "Fudan University"
        },
        {
            time: "15:05 – 15:35",
            session: "Invited talk 6",
            speaker: "Kwang-Il Goh",
            affiliation: "Korea University"
        },
        {
            time: "15:35 onwards",
            session: "Panel discussion \"Going beyond AI: Why data science needs complex systems and network science\"",
            speaker: "Guanrong Chen, Tiago Peixoto, Kwang-Il Goh, Xiang Li, George Cantwell",
            affiliation: "—"
        }
    ]

    const day2Schedule: ScheduleItem[] = [
        {
            time: "09:30 – 09:35",
            session: "Day-2 welcome & recap",
            speaker: "—",
            affiliation: "—"
        },
        {
            time: "09:35 – 10:35",
            session: "Keynote 2",
            speaker: "Tiago Peixoto",
            affiliation: "IT:U Austria"
        },
        {
            time: "10:35 – 10:50",
            session: "Coffee break",
            speaker: "—",
            affiliation: "—"
        },
        {
            time: "10:50 – 11:20",
            session: "Invited talk 7",
            speaker: "George Cantwell",
            affiliation: "University of Cambridge"
        },
        {
            time: "11:20 – 11:50",
            session: "Invited talk 8",
            speaker: "Yi Zhao",
            affiliation: "Harbin Institute of Technology (Shenzhen)"
        },
        {
            time: "11:50 – 13:20",
            session: "Lunch break (90 min)",
            speaker: "—",
            affiliation: "—"
        },
        {
            time: "13:20 – 13:50",
            session: "Invited talk 9",
            speaker: "Gangmin Son",
            affiliation: "Korea Institute for Advanced Study"
        },
        {
            time: "13:50 – 14:20",
            session: "Invited talk 10",
            speaker: "Alec Kirkley",
            affiliation: "University of Hong Kong"
        },
        {
            time: "14:20 – 14:35",
            session: "Coffee break",
            speaker: "—",
            affiliation: "—"
        },
        {
            time: "14:35 – 15:05",
            session: "Invited talk 11",
            speaker: "Shihui Feng",
            affiliation: "University of Hong Kong"
        },
        {
            time: "15:05 – 15:35",
            session: "Invited talk 12",
            speaker: "Guodong Li",
            affiliation: "University of Hong Kong"
        },
        {
            time: "15:35 onwards",
            session: "Panel discussion \"Emerging opportunities for interdisciplinary applications of network science\"",
            speaker: "Qingpeng Zhang, Jean-Gabriel Young, Lin Wang, Shihui Feng",
            affiliation: "—"
        }
    ]

    return (
        <section>
            <h1 className="font-semibold text-3xl mb-8 tracking-tighter">
                HKU IDS Interdisciplinary Workshop: Understanding Complex Networks for Advancing Fundamental Data Science
            </h1>
            
            {/* Workshop Introduction */}
            <div className="mb-12">
                <h2 className="font-semibold text-2xl mb-6 tracking-tighter">Workshop Introduction</h2>
                <div className="prose max-w-none">
                    <p className="mb-4">
                        "The next century will be the century of complexity.” - Stephen Hawking
                    </p>
                    <p className="mb-4">
                        The Complex Networks Lab at the University of Hong Kong is proud to host this interdisciplinary workshop that brings together leading researchers and practitioners in the field of complex networks. This two-day event aims to foster collaboration and knowledge exchange across disciplines, from theoretical foundations to practical applications.
                    </p>
                    <p className="mb-4">
                        Network science has emerged as a powerful framework for understanding complex systems across diverse domains including social sciences, biology, transportation, and information systems. This workshop will explore cutting-edge research in network theory, computational methods, and real-world applications.
                    </p>
                    <p className="mb-4">
                        Participants will have the opportunity to engage with world-class speakers, present their own research, and participate in collaborative sessions designed to identify new research directions and potential partnerships. The workshop is designed for researchers, graduate students, and practitioners interested in advancing the field of network science.
                    </p>
                </div>
            </div>

            {/* Date and Venue */}
            <div className="mb-12">
                <h2 className="font-semibold text-2xl mb-6 tracking-tighter">Date and Venue</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Date</h3>
                            <p className="text-gray-700">August 28-29, 2025</p>
                            <p className="text-gray-700">9:00 AM - 4:30 PM (Day 1)</p>
                            <p className="text-gray-700">9:00 AM - 4:30 PM (Day 2)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Venue</h3>
                            <p className="text-gray-700">Centennial campus</p>
                            <p className="text-gray-700">The University of Hong Kong</p>
                            <p className="text-gray-700">Pokfulam, Hong Kong</p>
                        </div>
                    </div>
                </div>
            </div>

			{/* Speakers */}
            <div className="mb-12">
                <h2 className="font-semibold text-2xl mb-6 tracking-tighter">Speakers</h2>
                
                {/* Keynote Speakers */}
                <div className="mb-8">
                    <h3 className="font-semibold text-xl mb-4 tracking-tighter">Keynote Speakers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {keynoteSpeakers.map((speaker, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                <div className="flex flex-col items-center">
                                    <img 
                                        src={speaker.profilePic} 
                                        alt={speaker.name}
                                        className="w-48 h-48 object-contain rounded-full bg-white mb-4"
                                    />
                                    <h4 className="font-semibold text-lg mb-2 text-center">{speaker.name}</h4>
                                    <p className="text-blue-600 font-medium mb-3 text-sm text-center">{speaker.affiliation}</p>
                                    <p className="text-gray-700 text-xs mb-3 leading-relaxed text-left">{speaker.bio}</p>
                                    <a 
                                        href={`mailto:${speaker.email}`}
                                        className="text-blue-600 hover:text-blue-800 text-sm"
                                    >
                                        {speaker.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Invited Speakers */}
                <div className="mb-8">
                    <h3 className="font-semibold text-xl mb-4 tracking-tighter">Invited Speakers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {invitedSpeakers.map((speaker, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                <div className="flex flex-col items-center">
                                    <img 
                                        src={speaker.profilePic} 
                                        alt={speaker.name}
                                        className="w-48 h-48 object-contain rounded-full bg-white mb-4"
                                    />
                                    <h4 className="font-semibold text-lg mb-2 text-center">{speaker.name}</h4>
                                    <p className="text-blue-600 font-medium mb-3 text-sm text-center">{speaker.affiliation}</p>
                                    <p className="text-gray-700 text-xs mb-3 leading-relaxed text-left">{speaker.bio}</p>
                                    <a 
                                        href={`mailto:${speaker.email}`}
                                        className="text-blue-600 hover:text-blue-800 text-sm"
                                    >
                                        {speaker.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* HKU Speakers */}
                <div className="mb-8">
                    <h3 className="font-semibold text-xl mb-4 tracking-tighter">HKU Speakers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hkuSpeakers.map((speaker, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                <div className="flex flex-col items-center">
                                    <img 
                                        src={speaker.profilePic} 
                                        alt={speaker.name}
                                        className="w-48 h-48 object-contain rounded-full bg-white mb-4"
                                    />
                                    <h4 className="font-semibold text-lg mb-2 text-center">{speaker.name}</h4>
                                    <p className="text-blue-600 font-medium mb-3 text-sm text-center">{speaker.affiliation}</p>
                                    <p className="text-gray-700 text-xs mb-3 leading-relaxed text-left">{speaker.bio}</p>
                                    <a 
                                        href={`mailto:${speaker.email}`}
                                        className="text-blue-600 hover:text-blue-800 text-sm"
                                    >
                                        {speaker.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Event Schedule */}
            <div className="mb-12">
                <h2 className="font-semibold text-2xl mb-6 tracking-tighter">Event Schedule</h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Day 1 */}
                    <div>
                        <h3 className="font-semibold text-xl mb-4 tracking-tighter">Day 1 - August 28, 2025</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-3 py-3 text-left font-semibold text-sm">Time</th>
                                        <th className="px-3 py-3 text-left font-semibold text-sm">Session / Speaker / Affiliation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {day1Schedule.map((item, index) => (
                                        <tr key={index} className="border-t border-gray-200">
                                            <td className="px-3 py-3 font-mono text-sm align-top">{item.time}</td>
                                            <td className="px-3 py-3 text-sm">
                                                <div className="mb-1 font-medium">{item.session}</div>
                                                {item.speaker && item.speaker !== "—" && (
                                                    <div className="text-gray-700">{item.speaker}</div>
                                                )}
                                                {item.affiliation && item.affiliation !== "—" && (
                                                    <div className="text-gray-600 text-xs">{item.affiliation}</div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div>
                        <h3 className="font-semibold text-xl mb-4 tracking-tighter">Day 2 - August 29, 2025</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-3 py-3 text-left font-semibold text-sm">Time</th>
                                        <th className="px-3 py-3 text-left font-semibold text-sm">Session / Speaker / Affiliation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {day2Schedule.map((item, index) => (
                                        <tr key={index} className="border-t border-gray-200">
                                            <td className="px-3 py-3 font-mono text-sm align-top">{item.time}</td>
                                            <td className="px-3 py-3 text-sm">
                                                <div className="mb-1 font-medium">{item.session}</div>
                                                {item.speaker && item.speaker !== "—" && (
                                                    <div className="text-gray-700">{item.speaker}</div>
                                                )}
                                                {item.affiliation && item.affiliation !== "—" && (
                                                    <div className="text-gray-600 text-xs">{item.affiliation}</div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

			{/* Registration/Contact Info */}
            <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Registration Information</h3>
                <p className="text-gray-700 mb-4">
                    Registration is required for this workshop. Please register using the form below or contact us for more information about attendance and logistics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd6WuEQKFDYjNgMwRRqZTGt31htcHhUNoXmAxHWsXj8KDkurA/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Register Now
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
                    <p className="text-gray-700 text-sm mt-4">
                        For questions, please email: 
                        <a href="mailto:akirkley@hku.hk" className="text-blue-600 hover:text-blue-800">
                            akirkley@hku.hk
                        </a>
                    </p>
            </div>
        </section>
    )
}
