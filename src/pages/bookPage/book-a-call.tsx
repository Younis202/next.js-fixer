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

// FAQ Data
const FAQ_ITEMS = [
    {
        question: 'What makes Omotive stand out?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        question: 'How long will it take to complete my design project?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        question: 'What is your web design process?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        question: 'How long will it take to complete my design project?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        question: 'What are your main focus areas in designing?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        question: 'How much will my web design project cost?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
];

// Articles Data
const ARTICLES = [
    {
        url: 'https://uxplanet.org/a-usability-test-of-bangladesh-railway-ticket-booking-56450ec3f03a',
        image:
            'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b09bbb563981b63fd2830e_article-image-1.jpg',
        title: 'A Usability test of Bangladesh Railway Ticket Booking',
        tags: ['Product', 'Product'],
    },
    {
        url: 'https://medium.muz.li/branding-case-study-designops-agency-7fd8d4083748',
        image:
            'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b0b70eac26ee049c7a1d6d_article-image-2-high.jpg',
        title: 'Branding Case-Study Design- Ops Agency',
        tags: ['Product', 'Product'],
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

// FAQ Plus Icon Component
const FaqPlusIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        viewBox="0 0 24 24"
        fill="none"
        className="faq-card_pluse_icon position-relative"
    >
        <g clipPath="url(#clip0_1820_12856)" className="overflow-hidden">
            <path
                d="M12 19L12 5"
                stroke="#10131B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="faq-card_pluse_vertical"
            />
            <path
                d="M19 12L5 12"
                stroke="#10131B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

// FAQ Card Component
const FaqCard = ({ question, answer }: { question: string; answer: string }) => (
    <div data-faq="card" className="faq-card">
        <button type="button" data-faq="toggler" className="faq-card_header">
            <h3 className="faq-card_title body-l">{question}</h3>
            <div className="faq-card_arrow position-relative">
                <FaqPlusIcon />
            </div>
        </button>
        <div data-faq="body" className="faq-card-body overflow-hidden">
            <div className="faq-card_content">
                <p className="faq-card-text">{answer}</p>
            </div>
        </div>
    </div>
);

// Article Tag Component
const ArticleTag = ({ tag }: { tag: string }) => (
    <div className="article_tag display-flex is-left">
        <div className="article_tag-dot" />
        <div>{tag}</div>
    </div>
);

// Article Card Component
const ArticleCard = ({
    url,
    image,
    title,
    tags,
}: {
    url: string;
    image: string;
    title: string;
    tags: string[];
}) => (
    <div className="articles_single-item">
        <a
            href={url}
            target="_blank"
            className="article_figure w-inline-block position-relative overflow-hidden"
        >
            <img
                className="cover-image"
                src={image}
                alt="article post mockup"
                width={614}
                height={459}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
            />
        </a>
        <div className="article_content">
            <div className="article_tag-wrapper display-flex">
                {tags.map((tag, index) => (
                    <ArticleTag key={index} tag={tag} />
                ))}
            </div>
            <a href={url} target="_blank" className="w-inline-block">
                <h3 className="article_title heading-style-h2">{title}</h3>
            </a>
        </div>
    </div>
);

// ==========================================
// MAIN COMPONENT
// ==========================================

const BookACall = () => {
    // Initialize Webflow scripts and animations
    useWebflowScripts();

    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                {/* Header Section */}
                <section className="section_book-a-call_header">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="book-a-call_header_content display-flex">
                                <h1 className="book-a-call_header_title">
                                    Let's{' '}
                                    <span className="text-style-secondary-font">Start Redefining</span>{' '}
                                    What's Possible, our team is ready to help you
                                </h1>
                                <p className="book-a-call_header_text text-size-large">
                                    With over 100 successful collaborations, we're ready to turn your
                                    vision into a story of impact and innovation.
                                </p>
                            </div>
                            <div className="booking-embed">
                                <div className="w-embed w-script">
                                    {/* Cal inline embed code begins */}
                                    <div
                                        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                                        id="my-cal-inline"
                                        className="cal-inline-container"
                                    >
                                        <div
                                            data-layout="month_view"
                                            style={{
                                                maxHeight: 'inherit',
                                                height: 'inherit',
                                                minHeight: 'inherit',
                                                display: 'flex',
                                                position: 'relative',
                                                flexWrap: 'wrap',
                                                width: '100%',
                                            }}
                                            className="cal-element-embed-dark"
                                        >
                                            <iframe
                                                className="cal-embed"
                                                name="cal-embed=30min"
                                                title="Book a call"
                                                data-cal-link="mufidul-tapadar-nwmykh/30min"
                                                allow="payment"
                                                src="https://app.cal.com/mufidul-tapadar-nwmykh/30min/embed?embed=30min&layout=month_view&embedType=inline"
                                                style={{ height: 574, width: '100%' }}
                                            />
                                        </div>
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: `
                                        .cal-inline-container::-webkit-scrollbar {
                                            display: none
                                        }

                                        .cal-inline-container {
                                            scrollbar-width: none
                                        }
                                    `,
                                            }}
                                        />
                                    </div>
                                    {/* Cal inline embed code ends */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Logos Section */}
                <section className="section_client-logos padding-top padding-custom3">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="client-logos_component">
                                {CLIENT_LOGOS.map((logo, index) => (
                                    <ClientLogo key={index} src={logo.src} alt={logo.alt} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <div className="section_faq">
                    <div className="padding-global padding-section is-bottom-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    <span className="text-style-secondary-font">Questions?</span>
                                    &nbsp;We're glad<span className="br"></span>you asked.
                                </h2>
                            </div>
                            <div data-faq="list" className="faq_grid">
                                {FAQ_ITEMS.map((faq, index) => (
                                    <FaqCard key={index} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Articles Section */}
                <section className="section_articles">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    <span className="text-style-secondary-font">Omotive's</span> Articles
                                </h2>
                            </div>
                            <div className="articles_grid">
                                {ARTICLES.map((article, index) => (
                                    <ArticleCard
                                        key={index}
                                        url={article.url}
                                        image={article.image}
                                        title={article.title}
                                        tags={article.tags}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BookACall;