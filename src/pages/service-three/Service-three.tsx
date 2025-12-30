import React from 'react';

// ============================================================
// DATA CONFIGURATIONS
// ============================================================

const WORK_PROCESS_FEATURES = [
    'Boost User Engagement and Drive Results',
    'Full Ownership',
    'Ultra-Fast Expedited Service Available'
];

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
    'User-Centric & Scalable Designs',
    'Optimized for Speed & Functionality',
    'Unlimited Revisions & Clear, Transparent Contracts',
    'Seamless Cross-Device Experience'
];

const OTHER_SERVICES = [
    {
        href: '/sevices/mobile-application-design',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee74b5b818456b278c2_other-service-1-high.jpg',
        title: 'Mobile application design',
        description: 'We create mobile apps that not only fuel your growth but also truly connect ...'
    },
    {
        href: '/sevices/website-design-branding',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c000326d559e692450982b_other-service-2-high.jpg',
        title: 'Website design and branding',
        description: 'We create mobile apps that not only fuel your growth but also truly connect ...'
    },
    {
        href: '/sevices/webflow-development',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee74b5b818456b278c2_other-service-1-high.jpg',
        title: 'Webflow Developement',
        description: 'We create mobile apps that not only fuel your growth but also truly connect ...'
    }
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

const OtherServiceCard = ({ href, image, title, description }) => (
    <div className="other-service_card display-vertical">
        <a href={href} className="other-service_figure position-relative overflow-hidden w-inline-block">
            <img
                className="cover-image"
                src={image}
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

const ServiceThree = () => {
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
                                        <div className="display-inline">
                                            Turning Your Ideas into{" "}
                                            <span className="text-style-secondary-font">web</span>
                                        </div>
                                        <div className="br hide-mobile-portrait" />
                                        <div className="display-inline text-style-secondary-font">
                                            app Experiences
                                        </div>
                                    </h1>
                                    <div className="home-header_content-inner display-vertical is-left">
                                        <p className="service_header-text text-size-large">
                                            We create Web apps that not only fuel your growth but also
                                            truly connect with your users, delivering solutions that make
                                            an impact
                                        </p>
                                    </div>
                                </div>
                                <figure className="service_header_media position-relative overflow-hidden">
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02af3394f82bb121e9e54_web-apps-header-high.jpg"
                                        alt="web app mockup"
                                        width={1290}
                                        height={644}
                                        loading="eager"
                                        fetchpriority="high"
                                        decoding="sync"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Work Process Section */}
                <section className="section_work-process">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="work-process_grid">
                                <div
                                    id="w-node-ecd417c3-a45a-2f66-d034-e21242cf5427-1df20acc"
                                    className="work-process_left"
                                >
                                    <div className="work-process_content display-vertical">
                                        <h2 className="heading-style-h1 work-process_title">
                                            Why Our{" "}
                                            <span className="text-style-secondary-font">
                                                Web App Design Services
                                            </span>{" "}
                                            Are the Right Fit for You
                                        </h2>
                                        <p className="work-process_text body-l">
                                            Engage your users and grow your app with designs that truly
                                            connect. We provide solutions tailored to your goals, along
                                            with full access to tools and top talent—all delivered quickly
                                            and hassle-free
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
                                        <MagnaticButton href="/contact" text="Get a quote" />
                                    </div>
                                </div>
                                <figure
                                    id="w-node-ecd417c3-a45a-2f66-d034-e21242cf543b-1df20acc"
                                    className="work-process_figure position-relative overflow-hidden"
                                >
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02ba80b1495fd2cf74477_web-apps-min-high.jpg"
                                        alt="web appliction mockup"
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
                                    Web application design{" "}
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
                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0219e7255db47324d1333_excilent-bg.png"
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
                                <div
                                    id="w-node-e5352b00-13d2-f08f-1d83-947bdd6350d3-1df20acc"
                                    className="work-process_left"
                                >
                                    <div className="work-process_content display-vertical">
                                        <h2 className="heading-style-h1">
                                            We're a{" "}
                                            <span className="text-style-secondary-font">top rated</span>{" "}
                                            <span>web application </span>
                                            <span className="text-style-secondary-font">design</span>{" "}
                                            agency
                                        </h2>
                                        <p className="work-process_text body-l">
                                            Our web application designs are highly rated for usability,
                                            scalability, and performance trusted by businesses worldwide!
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
                                    id="w-node-e5352b00-13d2-f08f-1d83-947bdd6350e4-1df20acc"
                                    className="cta_figure position-relative overflow-hidden"
                                >
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0044a3edafe371b946e46_cta-high.jpg"
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

export default ServiceThree;