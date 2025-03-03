'use client';

import { ABOUT_PAGE } from '../data/about-content';
import Image from 'next/image';

function SkillTagSmall({ name }: { name: string }) {
    return (
        <span className="inline-block bg-[#F2F5EA] px-3 py-1 text-sm mr-2 mb-2">
            {name}
        </span>
    );
}

function SkillTabs() {
    const categories = Object.keys(ABOUT_PAGE.skills);

    return (
        <div className="space-y-6">
            {categories.map(category => (
                <div key={category}>
                    <h3 className="font-medium mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {ABOUT_PAGE.skills[category as keyof typeof ABOUT_PAGE.skills].map(skill => (
                            <SkillTagSmall key={skill} name={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function About() {
    return (
        <main className="min-h-screen max-w-[1400px] mx-auto p-8 mb-32">
            {/* Header Section */}
            <div className="mt-20 mb-32">
                <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center md:items-start">
                    <div className="flex-1">
                        <h1 className="text-6xl font-bold mb-6">HI, I&apos;M ILIA :)</h1>
                        <p className="text-xl max-w-[450px]">
                            A blossoming designer, educator and artist who is driven by a passion for continuous learning, creative expression, and collective growth.
                        </p>
                    </div>
                    <div className="w-[300px] md:w-[450px] relative flex-shrink-0">
                        <Image
                            src="/images/ilia.png"
                            alt="Profile"
                            width={450}
                            height={450}
                            className="object-cover h-full w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Three Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {/* Education Column */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">EDUCATION</h2>
                    {ABOUT_PAGE.education.map((edu, index) => (
                        <div key={index} className="mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 relative flex-shrink-0">
                                    <Image
                                        src={edu.logo}
                                        alt={`${edu.school} logo`}
                                        width={48}
                                        height={48}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">{edu.school}</h3>
                                    <p className="text-sm mb-1">
                                        {edu.degree} • <span>{edu.period}</span>
                                    </p>
                                    {edu.details.map((detail, i) => (
                                        <p key={i} className="text-sm text-gray-600">{detail}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience Column */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">EXPERIENCE</h2>
                    {ABOUT_PAGE.experience.map((exp, index) => (
                        <div key={index} className="mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 relative flex-shrink-0">
                                    <Image
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        width={48}
                                        height={48}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">{exp.title}</h3>
                                    <p className="text-sm">
                                        {exp.companyUrl ? (
                                            <a 
                                                href={exp.companyUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                {exp.company}
                                            </a>
                                        ) : exp.company}
                                    </p>
                                    <p className="text-sm">{exp.period}</p>
                                    <p className="text-sm text-gray-600">{exp.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills Column */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">SKILLS</h2>
                    <SkillTabs />
                </div>
            </div>
        </main>
    );
} 