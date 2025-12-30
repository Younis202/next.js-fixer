import React from 'react';

// ============================================================
// DATA CONFIGURATIONS
// ============================================================

const DESIGN_PROCESS_STEPS = [
    {
        number: '001',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bff7f640912009094a64fd_heart-icon.svg',
        title: "Let's Meet",
        description: "We want to dig deep, and find out what makes you tick. Your values, expertise and company history are behind everything we do, so let us"
    },
    {
        number: '002',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffa4bec44a21c544a32d6_tictactoi.svg',
        title: 'Moodboard Dreaming',
        description: "We're a collaborative and open-minded team that creates exceptional designs by embracing every voice and idea"
    },
    {
        number: '003',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffa82bb83378bdacd6b5e_desktop-settings.svg',
        title: 'Figma UI Design',
        description: 'Now things start to come together. We start bringing your plan and vision to life and create the website UI in Figma, building the foundations'
    },
    {
        number: '004',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffaa5b7cb67f2e43f6136_code.svg',
        title: 'Webflow Development',
        description: "Bob the Builder's got nothing on us. Our website development geniuses get to work recreating the site UI in WordPress, Shopify, HubSpot"
    },
    {
        number: '005',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffb1e3e5f1a358c9f068c_quality.svg',
        title: 'Quality Assurance',
        description: "Checkboards ready—we rigorously test every website element to ensure it's bug-free and ready for launch. Smooth sailing ahead!"
    },
    {
        number: '006',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffba93278e50f2580a7d5_grid.svg',
        title: 'We Have Liftoff!',
        description: '3...2...1... Liftoff! Your rocket ship is ready to go. We are live to launch and watch the crowds burst with excitement.'
    }
];

const CORE_VALUES = [
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02cacd9ea0f26bb5ae4da_blueprinnt-icon.svg',
        title: 'Blueprint',
        text: "We dive deep into your brand, conducting research and analysis to develop tailored blueprints that set you up for increased recognition within today's market."
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b6fe961651407268d79fd8_foundation-icon.svg',
        title: 'Foundation',
        text: 'Our team brings your brand to life through intuitive websites and engaging mobile apps, innovation to captivate and keep loyal audiences.'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b6feaff171efceff6d1921_expansion-icon.svg',
        title: 'Expansion',
        text: 'We inspire deeper connection and help you realize lasting measurable results through cross-channel the right message at the right time.'
    }
];

const EXCELLENCE_ITEMS = [
    {
        number: '001',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c01087aa70a95dc2666593_revision-icon.svg',
        title: 'Identify  Your Business Challenges',
        text: "We offer unlimited revisions as standard. So rest assured that be happy with all deliverables!"
    },
    {
        number: '002',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0200dc5b1446fccbaf4dc_hidden-fees-icon.svg',
        title: 'No Hidden Fees',
        text: 'Transparent web design services with no hidden fees, delivering clear, upfront pricing for your business'
    },
    {
        number: '003',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02042f98a35e36081b3ca_process-icon.svg',
        title: 'A Personal Process',
        text: 'We focus on personalized processes that make your journey smooth, friendly, and enjoyable from start to finish'
    },
    {
        number: '004',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c020b2859565df01fbcb78_sheet-icon.svg',
        title: 'Efficient Project Management',
        text: 'With our efficient project management, we ensure a smooth, friendly experienc, delivering results on time and with care'
    },
    {
        number: '005',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c020ebc1250a94c3f2016c_track-icon.svg',
        title: 'Proven Track Record',
        text: "With our proven track record, we've built lasting relationships and deliver results you can count on"
    }
];

const CTA_LIST_ITEMS = [
    'Stunning, User-Centered Designs',
    'Optimized for Conversions & Engagement',
    'Unlimited Revisions & Clear, Transparent Contracts',
    'Fast, Responsive, and Scalable Websites'
];

const OTHER_SERVICES = [
    {
        href: '/sevices/mobile-application-design',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee659183921f02be7b7_other-service-1-low.webp',
        imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee74b5b818456b278c2_other-service-1-high.jpg',
        title: 'Mobile application design',
        description: 'We create mobile apps that not only fuel your growth but also truly connect ...'
    },
    {
        href: '/sevices/web-application',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c00032441d1178ff95f846_other-service-2-low.webp',
        imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c000326d559e692450982b_other-service-2-high.jpg',
        title: 'Web Application',
        description: 'We create mobile apps that not only fuel your growth but also truly connect ...'
    },
    {
        href: '/service-two',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee659183921f02be7b7_other-service-1-low.webp',
        imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee74b5b818456b278c2_other-service-1-high.jpg',
        title: 'Webflow Developement',
        description: 'We create mobile apps that not only fuel your growth but also truly connect ...'
    }
];

const WORK_PROCESS_FEATURES = [
    'Pixel Perfect',
    'Custom Design With Figma',
    'Ultra-Fast Expedited Service Available'
];

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

const DesignProcessItem = ({ number, icon, title, description }) => (
    <div className="design-process_item">
        <div className="design-process_icon-wrapper display-flex">
            <div className="design-process_icon display-flex is-center">
                <img src={icon} loading="lazy" alt="" />
            </div>
            <div className="body-l">{number}</div>
        </div>
        <div className="design-process_content display-vertical">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const CoreValueCard = ({ icon, title, text }) => (
    <div className="core-value_card is-center">
        <div className="margin-bottom margin-custom1">
            <img src={icon} loading="lazy" alt="" />
        </div>
        <div className="margin-bottom margin-custom2">
            <h3 className="core-value_card_title">{title}</h3>
        </div>
        <p className="core-value_card_text">{text}</p>
    </div>
);

const ExcellenceItem = ({ number, icon, title, text }) => (
    <div className="excellence_item">
        <div className="excellence_content display-vertical">
            <div>//{number}</div>
            <h3 className="heading-style-h3">{title}</h3>
        </div>
        <div className="excellence_icon display-flex is-center">
            <img src={icon} loading="lazy" alt="" />
            <div gradient={1} className="gradient_icon-gradient pointer-events-none" />
        </div>
        <p className="excellence_item_text body-l">{text}</p>
        <div className="process-item-border position-absolute" />
    </div>
);

const OtherServiceCard = ({ href, imageLow, imageHigh, title, description }) => (
    <div className="other-service_card display-vertical">
        <a href={href} className="other-service_figure position-relative overflow-hidden w-inline-block">
            <img
                className="cover-image"
                src={imageLow}
                data-lazy-src={imageHigh}
                alt="Mobile application service"
                width={414}
                height={259}
                loading="lazy"
                fetchpriority="low"
                decoding="async"
            />
        </a>
        <div className="other-service_content">
            <div className="margin-bottom margin-small">
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
        <div className="display-flex">
            <a
                data-w-id="bdbc966e-3c4b-ff76-f07f-0dcb8ba5abe8"
                href={href}
                className="button is-secondary w-inline-block is-secondary"
            >
                <div>View service details</div>
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
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
                <div className="button-hover-bg-two" />
            </a>
        </div>
    </div>
);

const MagnaticButton = ({ href, text }) => (
    <div
        className="is-magnatic"
        style={{
            willChange: "transform",
            transform: "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
        }}
    >
        <a
            data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
            href={href}
            className="button is-small w-inline-block"
        >
            <div className="button-text">{text}</div>
            <div
                className="button-hover-bg"
                style={{
                    transform: "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                }}
            />
        </a>
    </div>
);

// ============================================================
// MAIN COMPONENT
// ============================================================

const ServiceOne = () => {
    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                {/* Header Section */}
                <header className="section_other-header">
                    <div className="padding-global padding-xxlarge">
                        <div className="container-large">
                            <div className="header_component">
                                <div className="header_content">
                                    <h1 className="home-header_title">
                                        <div className="display-inline text-style-secondary-font">
                                            Web design and branding{" "}
                                        </div>
                                        <div className="br hide-mobile-portrait" />
                                        <div className="display-inline">
                                            &nbsp;powered to fuel your growth
                                        </div>
                                    </h1>
                                    <div className="home-header_content-inner display-vertical is-left">
                                        <p className="service_header-text text-size-large">
                                            Web design and branding powered to fuel your growth goals with
                                            user-centric and high-impact solutions
                                        </p>
                                    </div>
                                </div>
                                <div className="services_header-grid">
                                    <figure className="services_header-figure position-relative overflow-hidden">
                                        <img
                                            className="cover-image"
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bede953b2a09cfc2af8fe2_reviewxpo-service-mockup-high.jpg"
                                            alt="Reviewxpo website mockup"
                                            width={874}
                                            height={585}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="sync"
                                        />
                                    </figure>
                                    <div className="service_review display-vertical position-relative">
                                        <div className="service_review_content display-vertical">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" viewBox="0 0 22 16" fill="none">
                                                <g opacity="0.8">
                                                    <path
                                                        d="M9.18681 1.14286C9.18681 0.511675 8.67514 0 8.04396 0H1.14286C0.511675 0 0 0.511676 0 1.14286V8.1203C0 8.75148 0.511675 9.26316 1.14286 9.26316H3.16862C4.01655 9.26316 4.5692 10.1541 4.1925 10.9137L2.48882 14.3494C2.11212 15.1091 2.66477 16 3.5127 16H5.18021C5.59178 16 5.97157 15.7787 6.1745 15.4206L9.03825 10.3674C9.13563 10.1956 9.18681 10.0014 9.18681 9.80394V1.14286Z"
                                                        fill="#677084"
                                                    />
                                                    <path
                                                        d="M21.7143 1.14286C21.7143 0.511675 21.2026 0 20.5714 0H13.6703C13.0391 0 12.5275 0.511676 12.5275 1.14286V8.1203C12.5275 8.75148 13.0391 9.26316 13.6703 9.26316H15.6961C16.544 9.26316 17.0967 10.1541 16.72 10.9137L15.0163 14.3494C14.6396 15.1091 15.1922 16 16.0402 16H17.7077C18.1193 16 18.499 15.7787 18.702 15.4206L21.5657 10.3674C21.6631 10.1956 21.7143 10.0014 21.7143 9.80394V1.14286Z"
                                                        fill="#677084"
                                                    />
                                                </g>
                                            </svg>
                                            <p>
                                                Omotive design agency took the time to understand my
                                                industry. They knew what our visitors wanted, and they did
                                                an exceptional job to meet those needs. We've seen great
                                                improvements in impression and conversion after the
                                                redesign. I vouch for them!
                                            </p>
                                        </div>
                                        <div className="service_review_author display-flex is-left">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4211329b6fc32d099d2b1_arifur-rahaman.png"
                                                loading="lazy"
                                                alt="arifur rahaman "
                                                className="service_review_auhtor-image"
                                            />
                                            <div className="service_review_author-info">
                                                <div className="text-color-primary">Arifur Rahaman</div>
                                                <div>CEO at ReviewXpo</div>
                                            </div>
                                        </div>
                                        <div
                                            className="margin-top margin-xlarge is-magnatic"
                                            style={{
                                                willChange: "transform",
                                                transform: "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                transformStyle: "preserve-3d"
                                            }}
                                        >
                                            <a
                                                data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                                                href="/projects"
                                                className="button is-small w-inline-block"
                                            >
                                                <div className="button-text">View all project</div>
                                                <div
                                                    className="button-hover-bg"
                                                    style={{
                                                        transform: "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                        transformStyle: "preserve-3d"
                                                    }}
                                                />
                                            </a>
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="100%"
                                            strokeDasharray={1000}
                                            fill="none"
                                            className="service_review_svg-line position-absolute"
                                        >
                                            <path
                                                d="M200.117 1H51C23.3858 1 1 23.3857 1 51L1 535C1 562.614 23.3858 585 51 585H261"
                                                stroke="#8C73F4"
                                                className="path"
                                                y={0}
                                                x={0}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Work Process Section */}
                <section className="section_work-process">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="work-process_grid">
                                <div id="w-node-_8b952f68-d200-9754-3e83-c5a593ddf12a-70bb1425" className="work-process_left">
                                    <div className="work-process_content display-vertical">
                                        <h2 className="heading-style-h1 work-process_title">
                                            We <span className="text-style-secondary-font">create</span>{" "}
                                            show-stopping{" "}
                                            <span className="text-style-secondary-font">websites</span>
                                        </h2>
                                        <p className="work-process_text body-l">
                                            We design digital platforms that empower users and your
                                            brand's tribe, creating strategies that drive rapid ROI and
                                            business growth
                                        </p>
                                        <ul role="list" className="work-process_list display-vertical">
                                            {WORK_PROCESS_FEATURES.map((feature, index) => (
                                                <li key={index} className="work-process_list_item text-weight-medium">
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="display-flex margin-top margin-custom3">
                                        <MagnaticButton href="/projects" text="View all project" />
                                    </div>
                                </div>
                                <figure
                                    id="w-node-b64d0b16-1584-0269-75b2-1f53a818bbc8-70bb1425"
                                    className="work-process_figure position-relative overflow-hidden"
                                >
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bef97e021d2a52a3859858_reviewxpo-showeel-high.jpg"
                                        alt="reviewxpo showreel mockup"
                                        width={614}
                                        height={488}
                                        loading="lazy"
                                        fetchpriority="low"
                                        decoding="async"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Process Section */}
                <div className="section_design-process">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Our web design{" "}
                                    <span className="text-style-secondary-font">process</span>
                                </h2>
                            </div>
                            <div className="design-process_grid">
                                {DESIGN_PROCESS_STEPS.map((step, index) => (
                                    <DesignProcessItem key={index} {...step} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values Section */}
                <section className="section_core-values">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    How we're{" "}
                                    <span className="text-style-secondary-font">unique</span>
                                </h2>
                            </div>
                            <div className="core-value_gird">
                                {CORE_VALUES.map((value, index) => (
                                    <CoreValueCard key={index} {...value} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Excellence Section */}
                <div className="section_excellence position-relative">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1 text-color-alternate">
                                    Why We{" "}
                                    <span className="text-style-secondary-font">Stand Out</span>
                                </h2>
                            </div>
                            {EXCELLENCE_ITEMS.map((item, index) => (
                                <ExcellenceItem key={index} {...item} />
                            ))}
                        </div>
                    </div>
                    <picture className="bg-absolute-shape">
                        <source
                            srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1401bf85dac5f3ac2f219_excellent-bg-mobile.webp"
                            media="(max-width: 375px)"
                        />
                        <img
                            className="cover-image"
                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02229864bddf9f6b48eae_excilent-bg.webp"
                            data-lazy-src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0219e7255db47324d1333_excilent-bg.png"
                            alt=""
                            width="100%"
                            height="100%"
                            loading="lazy"
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                </div>

                {/* CTA Section */}
                <section className="section_cta">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="work-process_grid">
                                <div id="w-node-f958ccdd-385d-cb31-93c9-9e161a5a0399-1a5a0395" className="work-process_left">
                                    <div className="work-process_content display-vertical">
                                        <h2 className="heading-style-h1">
                                            We're a{" "}
                                            <span className="text-style-secondary-font">top rated</span>{" "}
                                            web <span className="text-style-secondary-font">design</span>
                                            agency
                                        </h2>
                                        <p className="work-process_text body-l">
                                            Our website design &amp; development clients consistently rate
                                            us exceptionally well across the internet- our work has even
                                            won us awards!
                                        </p>
                                        <div role="list" className="cta_list display-vertical">
                                            {CTA_LIST_ITEMS.map((item, index) => (
                                                <div key={index} role="listitem" className="cta_list_item body-l">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="display-flex margin-top margin-custom3">
                                        <MagnaticButton href="/book-a-call" text="Book a free call" />
                                    </div>
                                </div>
                                <figure
                                    id="w-node-f958ccdd-385d-cb31-93c9-9e161a5a03b2-1a5a0395"
                                    className="cta_figure position-relative overflow-hidden"
                                >
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c00447170174072cbadcdf_cta-low.webp"
                                        data-lazy-src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0044a3edafe371b946e46_cta-high.jpg"
                                        alt="reviewxpo showreel mockup"
                                        width={614}
                                        height={488}
                                        loading="lazy"
                                        fetchpriority="low"
                                        decoding="async"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Services Section */}
                <section className="section_other-services">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Other <span className="text-style-secondary-font">services</span>
                                </h2>
                            </div>
                            <div className="other-services_grid">
                                {OTHER_SERVICES.map((service, index) => (
                                    <OtherServiceCard key={index} {...service} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServiceOne;