import React from 'react';
import { useWebflowScripts } from '@/hooks/useWebflowScripts';

// ==========================================
// DATA CONFIGURATIONS
// ==========================================

// Client Logos Data
const CLIENT_LOGOS = [
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67adab7f109ea0ce63c3ff5f_nas-house.svg',
        alt: '',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b429026535397fbda12509_mymenu-logo.svg',
        alt: 'My Menu logo',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4291146efe5712ec684cf_nasdaily-logo.svg',
        alt: 'Nasdaily logo',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4295646efe5712ec6b3e8_existack.png',
        alt: 'Exitstack Logo',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4296a18fbfc438e57163f_nastravel-logo.svg',
        alt: 'Nastravel Logo',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42978d5f25f6f99420436_reviewxpo-logo.svg',
        alt: 'Reviewxpo logo',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42988a54127b5b18d2668_nassummit-log.svg',
        alt: 'nassummit logo',
    },
];

// Projects Data
const PROJECTS_GRID_ONE = [
    {
        href: '/projects/nashouse',
        imageSrc: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4cd215468e2baaaf8dea_nas-house-work-high.jpg',
        imageAlt: 'nashouse website mockup',
        clientName: 'Nashouse',
        dataWId: 'b4f3a605-7f72-be37-28f2-25ea57072743',
    },
    {
        href: '/projects/nassummit',
        imageSrc: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4d1d544503c3feb896e1_nas-summit-work-high.jpg',
        imageAlt: 'nassummit website mockup',
        clientName: 'Nassummit',
        dataWId: 'e7a35a53-1750-6700-3378-bd99db11c3f1',
    },
];

const PROJECTS_GRID_TWO = [
    {
        href: '/projects/nastravel',
        imageSrc: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4e22a224221439807852_nas-travel-wok-high.jpg',
        imageAlt: 'nashouse website mockup',
        clientName: 'Nastravel',
        dataWId: 'f63cc83e-e075-ba82-9101-5143d0a8c700',
    },
    {
        href: '/projects/reviewxpo',
        imageSrc: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4e664f95d500738d7095_reviewxpo-work-high.jpg',
        imageAlt: 'nassummit website mockup',
        clientName: 'Reviewxpo',
        dataWId: 'bfdf6af8-e698-9772-40a5-a7f0802ad200',
    },
];

const PROJECTS_GRID_THREE = [
    {
        href: '/projects/nasdaily',
        imageSrc: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4eb5fc2dc5f801235abd_nas-daily-work-high.jpg',
        imageAlt: 'nashouse website mockup',
        clientName: 'Nasdaily',
        dataWId: 'fa24c397-1f71-8efa-725a-78ea1bc30004',
    },
    {
        href: '/projects/dontdiesummit',
        imageSrc: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4f10432130b7246ae876_dd-sumit-work-high.jpg',
        imageAlt: 'nassummit website mockup',
        clientName: "Don't die summit",
        dataWId: '0f6e9eb4-48ba-bb05-d214-1e819b417a59',
    },
];

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

// Client Logo Component
const ClientLogo = ({ src, alt }: { src: string; alt: string }) => (
    <div className="client-logo_wrap">
        <img src={src} loading="lazy" alt={alt} />
    </div>
);

// Arrow Icon Component
const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
    >
        <g opacity="0.9">
            <path
                d="M4.8125 2.625L9.1875 7L4.8125 11.375"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

// Project Card Component
const ProjectCard = ({
    href,
    imageSrc,
    imageAlt,
    clientName,
    dataWId,
}: {
    href: string;
    imageSrc: string;
    imageAlt: string;
    clientName: string;
    dataWId: string;
}) => (
    <div className="project_single-item">
        <a
            href={href}
            className="project_figure w-inline-block position-relative overflow-hidden"
        >
            <img
                className="cover-image"
                src={imageSrc}
                alt={imageAlt}
                width={614}
                height={576}
                loading="lazy"
                fetchpriority="low"
                decoding="async"
            />
        </a>
        <div className="project_content">
            <h3 className="all_project_title heading-style-h2">
                <div className="display-inline">Omotive helped </div>
                <div className="display-inline text-style-secondary-font">
                    {clientName}{' '}
                </div>
                <div className="display-inline">
                    to redesign their&nbsp;&nbsp;full website
                </div>
            </h3>
            <a
                data-w-id={dataWId}
                href={href}
                className="button is-secondary w-inline-block is-secondary"
            >
                <div>View case study</div>
                <ArrowIcon />
                <div className="button-hover-bg-two" />
            </a>
        </div>
    </div>
);

// ==========================================
// MAIN COMPONENT
// ==========================================

const Projects = () => {
    // Initialize Webflow scripts and animations
    useWebflowScripts();

    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                {/* Header Section */}
                <header id="header" className="section_home-header">
                    <div className="padding-global padding-xxlarge">
                        <div className="container-large">
                            <div className="header_component">
                                <div className="header_content">
                                    <h1 className="home-header_title">
                                        <div className="display-inline">From Unique </div>
                                        <div className="display-inline text-style-secondary-font">
                                            Ideas to<span className="br"></span>Big Results
                                        </div>
                                    </h1>
                                    <div className="home-header_content-inner display-vertical is-left">
                                        <p className="project-header_text text-size-large">
                                            omotive is an established brand agency helping B2B companies
                                            resonate with their customers and stand out as industry
                                            leaders.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Client Logos Section */}
                <section className="section_client-logos overflow-hidden">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="client-logos_component is-project">
                                {CLIENT_LOGOS.map((logo, index) => (
                                    <ClientLogo key={index} src={logo.src} alt={logo.alt} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="section_home-projects">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="all_project_grid_wrap">
                                {/* First Grid - Default Layout */}
                                <div className="all_project_grid">
                                    {PROJECTS_GRID_ONE.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </div>

                                {/* Second Grid - Left Layout */}
                                <div className="all_project_grid is-left-layout">
                                    {PROJECTS_GRID_TWO.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </div>

                                {/* Third Grid - Right Layout */}
                                <div className="all_project_grid is-right-layout">
                                    {PROJECTS_GRID_THREE.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Projects;