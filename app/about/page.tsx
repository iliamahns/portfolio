'use client';

import { ABOUT_PAGE } from '../data/about-content';
import { useState } from 'react';
import Image from 'next/image';

function SkillTagSmall({ name }: { name: string }) {
    return (
        <span className="inline-block bg-black/5 rounded-full px-3 py-1 text-xs mr-2 mb-2">
            {name}
        </span>
    );
}

function SkillTabs() {
    type SkillCategories = keyof typeof ABOUT_PAGE.skills;
    const [activeTab, setActiveTab] = useState<SkillCategories>(Object.keys(ABOUT_PAGE.skills)[0] as SkillCategories);
    const categories = Object.keys(ABOUT_PAGE.skills);

    return (
        <div className="mt-8">
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-2 mb-4">

                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category as SkillCategories)}
                        className={`px-4 py-2 text-sm rounded-full transition-colors
                            ${activeTab === category
                                ? 'bg-black text-white'
                                : 'bg-black/5 hover:bg-black/10'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="flex flex-wrap gap-2">
                {ABOUT_PAGE.skills[activeTab].map(skill => (
                    <SkillTagSmall key={skill} name={skill} />
                ))}
            </div>
        </div>
    );
}

export default function About() {
    return (
        <main className="min-h-screen max-w-[1400px] mx-auto p-8">
            {/* Header Section */}
            <div className="mt-20 mb-20">
                <div className="flex gap-8 items-start">
                    <div>
                        <h1 className="text-6xl font-bold mb-6">HI, I'M ILIA :)</h1>

                        <p className="text-lg flex-1 mb-4">
                            A blossoming designer, educator and artist who is driven by a passion for continuous learning, creative expression, and collective growth.
                        </p>

          
                    </div>
                    <div className="max-w-[400px] relative">
                        <Image
                            src="/images/ilia.png"
                            alt="Profile"
                            width={400}
                            height={400}
                            className="object-cover h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="mb-20">
                <h2 className="text-2xl font-bold mb-6">EXPERIENCE</h2>
                {ABOUT_PAGE.experience.map((exp, index) => (
                    <div key={index} className="mb-8 border-b border-gray-200 pb-8">
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
                                <p className="text-sm mb-1">
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
                                    {' • '}{exp.location}{' • '}<span className="text-gray-600">{exp.period}</span>
                                </p>
                                <p className="text-sm mb-2">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Certifications Section */}
            <div className="mb-20">
                <h2 className="text-2xl font-bold mb-6">CERTIFICATIONS</h2>
                {ABOUT_PAGE.certifications.map((cert, index) => (
                    <div key={index} className="mb-4 flex items-center gap-4">
                        <div className="w-10 h-10 relative flex-shrink-0">
                            <Image
                                src={cert.logo}
                                alt={`${cert.issuer} logo`}
                                width={40}
                                height={40}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div>
                            <h3 className="font-medium">
                                {cert.url ? (
                                    <a 
                                        href={cert.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {cert.name}
                                    </a>
                                ) : cert.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {cert.issuer} • {cert.date}{cert.validUntil && ` - ${cert.validUntil}`}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Education Section */}
            <div className="mb-20">
                <h2 className="text-2xl font-bold mb-6">EDUCATION</h2>
                {ABOUT_PAGE.education.map((edu, index) => (
                    <div key={index} className="mb-8 flex items-start gap-4">
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
                                {edu.degree} • <span className="text-gray-600">{edu.period}</span>
                            </p>
                            <ul className="list-disc list-inside text-sm">
                                {edu.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Languages Section */}
            <div className="mb-20">
                <h2 className="text-2xl font-bold mb-6">SKILLS</h2>
                <SkillTabs />
            </div>
                   {/* Languages Section */}
                   <div className="mb-20">
                <h2 className="text-2xl font-bold mb-6">LANGUAGES</h2>
                <div className="flex flex-wrap gap-4">
                    {ABOUT_PAGE.languages.map((lang, index) => (
                        <div key={index} className="w-[200px] bg-black/5 rounded-lg p-3">
                            <h3 className="font-medium">{lang.name}</h3>
                            <p className="text-sm text-gray-600">{lang.level}</p>
                        </div>
                    ))}
                </div>
            </div>
                          

        </main>
    );
} 