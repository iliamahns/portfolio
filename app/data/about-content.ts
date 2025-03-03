export type Skill = {
    name: string;
    category: 'UI/UX' | 'Visual & Creative Design' | 'Interpersonal' | 'Education';
};

export type Language = {
    name: string;
    level: string;
};

export type Certification = {
    name: string;
    issuer: string;
    date: string;
    validUntil?: string;
    logo: string;
    url?: string;
};

export type Experience = {
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    period: string;
    description: string;
    skills: string[];
    logo: string;
};

export type Education = {
    school: string;
    degree: string;
    period: string;
    details: string[];
    logo: string;
};

export const ABOUT_PAGE = {
    skills: {
        'Digital Design Tools': [
            'Figma',
            'GitHub',
            'Cursor AI',
            'Adobe InDesign',
            'Google Slides'
        ],
        'UI/UX Design': [
            'User-Centered Design',
            'User Research',
            'Storyboarding',
            'Information Architecture',
            'Wireframing',
            'Rapid Prototyping',
            'Visual Design',
            'Web Development',
            'Typescript'
        ],
        'Creative & Educational Expertise': [
            'Creative Expression',
            'Education',
            'Lesson Planning',
            'Curriculum Building',
            'Literacy Learning',
            'English Language Learning',
            'Trauma-Informed Care',
            'Cross-Cultural Communication',
            'Conflict Resolution',
            'Team Leadership',
            'Mixed Media Arts',
            'Photography',
            'Floristry'
        ],
        'Language and Safety': [
            'Proficient Spanish',
            'Basic Japanese',
            'First Aid/Lifeguard Certified'
        ]
    },

    languages: [
        {
            name: 'English',
            level: 'Native'
        },
        {
            name: 'Spanish',
            level: 'Prof. Working Proficiency'
        },
        {
            name: 'Japanese',
            level: 'Elementary Proficiency'
        }
    ],

    certifications: [
        {
            name: 'Google UX Design Professional Certificate',
            issuer: 'Google',
            date: '2024-2025',
            logo: '/images/logos/google.png',
            url: 'https://www.coursera.org/professional-certificates/google-ux-design'
        },
        {
            name: 'First Aid/CPR/AED',
            issuer: 'American Red Cross',
            date: '2023',
            validUntil: '2025',
            logo: '/images/logos/red_cross.png',
            url: 'https://www.redcross.org/take-a-class/first-aid'
        },
        {
            name: 'Lifeguard Certification',
            issuer: 'American Red Cross',
            date: '2023',
            validUntil: '2025',
            logo: '/images/logos/red_cross.png'
        }
    ],

    experience: [
        {
            title: 'International Language Educator',
            company: 'NALCAP',
            companyUrl: 'https://www.educacionyfp.gob.es/eeuu/convocatorias-programas/convocatorias-eeuu/nalcap.html',
            location: 'Cadiz, Spain',
            period: 'September 2024 - Present',
            description: 'Teaching English language and cultural exchange in Spanish public schools.',
            skills: ['Cross-Cultural Communication', 'Curriculum Development', 'English Language Learning'],
            logo: '/images/logos/nalcap.jpeg'
        },
        {
            title: 'Outdoor Program Instructor',
            company: 'SNJ',
            companyUrl: 'https://www.sierranevadajourneys.org/',
            location: 'Sierra Nevada, California',
            period: 'February 2024 - June 2024',
            description: 'Led outdoor education programs focusing on environmental awareness and team building.',
            skills: ['Leadership', 'Public Speaking', 'Environmental Education'],
            logo: '/images/logos/snj.png'
        },
        {
            title: 'Visual Arts Lead Teacher',
            company: 'PlayArts',
            companyUrl: 'https://www.playartsphilly.com/',
            location: 'Philadelphia, Pennsylvania',
            period: 'September 2023 - February 2024',
            description: 'Developed and taught art curriculum for young learners.',
            skills: ['Creative Expression', 'Curriculum Development', 'Visual Design'],
            logo: '/images/logos/play_arts.jpg'
        },
        {
            title: 'Florist',
            company: 'Market Blooms',
            location: 'Philadelphia, Pennsylvania',
            companyUrl: 'https://readingterminalmarket.org/merchant/market-blooms/',
            period: 'September 2023 - February 2024',
            description: 'Led outdoor education programs focusing on environmental awareness and team building.',
            skills: ['Leadership', 'Public Speaking', 'Environmental Education'],
            logo: '/images/logos/mb.jpg'
        },
        {
            title: 'Peer Mentor',
            company: 'International Rescue Committee',
            companyUrl: 'https://www.rescue.org',
            location: 'Manhattan, New York',
            period: 'Summer 2022',
            description: '',
            skills: [],
            logo: '/images/logos/irc.jpeg'
        },
        {
            title: 'Peer Educator Intern',
            company: 'Support Advocacy & Violence Prevention (SAVP) - Vassar College',
            companyUrl: 'https://offices.vassar.edu/savp/',
            location: 'Poughkeepsie, New York',
            period: 'Fall 2021 - Spring 2023',
            description: '',
            skills: [],
            logo: '/images/logos/savp.png'
        }
    ],

    education: [
        {
            school: 'Google UX Design Course',
            degree: 'Professional Certificate',
            period: 'Fall 2024 - Spring 2025',
            details: [
                '7 course series for entry-level job readiness'
            ],
            logo: '/images/logos/google.png'
        },
        {
            school: 'Vassar College',
            degree: 'Bachelor of Arts',
            period: '2019-2023',
            details: [
                "Dean's List",
                'Major in International Studies',
                'Minors in Education and Hispanic Studies'
            ],
            logo: '/images/logos/vassar.png'
        }
    ]
}; 