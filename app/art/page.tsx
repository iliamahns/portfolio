'use client';

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { ART_PAGE, ArtItem } from '../data/art-content';
import ImagePopup from '../components/ImagePopup';

// Utility to find an ArtItem by its slug
function findImageBySlug(slug: string): ArtItem | null {
    for (const category of Object.values(ART_PAGE)) {
        const image = category.find((item) => item.slug === slug);
        if (image) return image;
    }
    return null;
}

type ArtSectionProps = {
    title: string;
    id: string;
    items: ArtItem[];
    onImageSelect: (image: ArtItem) => void;
};

function ArtSection({ title, id, items, onImageSelect }: ArtSectionProps) {
    const handleImageClick = (item: ArtItem) => {
        onImageSelect(item);
        window.history.pushState({}, '', `/art#${item.slug}`);
    };

    return (
        <section id={id} className="mb-48 scroll-mt-24">
            {/*
        Hide the title on desktop with md:hidden,
        so it only appears on mobile/small screens
      */}
            <h2 className="text-2xl font-bold mb-16 md:hidden">{title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer"
                        onClick={() => handleImageClick(item)}
                    >
                        <div className="aspect-square relative overflow-hidden">
                            <Image
                                src={item.path}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-40 transition-opacity" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function Art() {
    const [selectedImage, setSelectedImage] = useState<ArtItem | null>(null);
    const [activeSection, setActiveSection] = useState<string>('acrylic');

    // The IDs and titles for each section
    const sectionIds = useMemo(() => [
        { id: 'fine-line', title: 'Fine Line Drawings' },
        { id: 'mixed-media', title: 'Mixed Media Collages' },
        { id: 'acrylic', title: 'Acrylic Paintings' },
        { id: 'flowers', title: 'Flower Arrangements' },
        { id: 'bw-film', title: 'Black & White Film Photography' },
        { id: 'digital', title: 'Digital Photography' },
    ], []);

    // Check the URL hash on initial load to open any linked image
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const image = findImageBySlug(hash);
            if (image) {
                setSelectedImage(image);
            }
        }
    }, []);

    // === Intersection Observer to highlight the active section ===
    useEffect(() => {
        const currentSections = new Map(); // Changed from let to const
        
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -30% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1]
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const rect = entry.target.getBoundingClientRect();
                const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                const visibilityRatio = visibleHeight / window.innerHeight;

                if (entry.isIntersecting) {
                    currentSections.set(entry.target.id, visibilityRatio);
                } else {
                    currentSections.delete(entry.target.id);
                }
            });

            // Find the section with the highest visibility ratio
            let maxVisibility = 0;
            let mostVisibleSection = activeSection; // Default to current active section

            currentSections.forEach((ratio, sectionId) => {
                if (ratio > maxVisibility) {
                    maxVisibility = ratio;
                    mostVisibleSection = sectionId;
                }
            });

            if (mostVisibleSection && maxVisibility > 0.3) {
                setActiveSection(mostVisibleSection);
            }
        };

        const observer = new IntersectionObserver(callback, observerOptions);

        sectionIds.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds, activeSection]); // Include activeSection in dependencies

    const handleClosePopup = () => {
        setSelectedImage(null);
        window.history.pushState({}, '', '/art');
    };

    // Sidebar link scroll
    const handleMenuClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="relative flex min-h-screen max-w-[1400px] mx-auto">
            {/* LEFT SIDEBAR */}
            <aside className="w-64 shrink-0 sticky top-0 self-start h-screen p-6 hidden md:block">
                <h1 className="text-6xl font-bold mb-12 pb-2">ART</h1>
                <nav className="space-y-4">
                    {sectionIds.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => handleMenuClick(section.id)}
                            className={`block w-full text-left p-2 transition-colors 
                ${activeSection === section.id
                                        ? 'bg-[#D8E1C3] font-semibold'
                                        : 'hover:bg-[#F2F5EA]'
                                    }`}
                        >
                            {section.title}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* RIGHT CONTENT (scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 pt-[144px]">
                {/* Add mobile title */}
                <h1 className="text-6xl font-bold mb-12 pb-2 md:hidden">ART</h1>
                <ArtSection
                    title="Fine Line Drawings"
                    id="fine-line"
                    items={ART_PAGE.fine_line_drawings}
                    onImageSelect={setSelectedImage}
                />
                <ArtSection
                    title="Mixed Media Collages"
                    id="mixed-media"
                    items={ART_PAGE.mixed_media_collages}
                    onImageSelect={setSelectedImage}
                />
                <ArtSection
                    title="Acrylic Paintings"
                    id="acrylic"
                    items={ART_PAGE.acrylic_paintings}
                    onImageSelect={setSelectedImage}
                />
                <ArtSection
                    title="Flower Arrangements"
                    id="flowers"
                    items={ART_PAGE.flower_arrangements}
                    onImageSelect={setSelectedImage}
                />
                <ArtSection
                    title="Black & White Film Photography"
                    id="bw-film"
                    items={ART_PAGE.bw_film_photography}
                    onImageSelect={setSelectedImage}
                />
                <ArtSection
                    title="Digital Photography"
                    id="digital"
                    items={ART_PAGE.digital_photography}
                    onImageSelect={setSelectedImage}
                />

                {/* Popup */}
                <ImagePopup image={selectedImage} onClose={handleClosePopup} />
            </div>
        </main>
    );
}
