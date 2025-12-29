import { useWebflowScripts } from '@/hooks/useWebflowScripts';

const About = () => {


    // Initialize Webflow scripts and animations
    useWebflowScripts();

    return (
        <div className="page-wrapper">

            <main className="main-wrapper">
                <header className="section_other-header">
                    <div className="padding-global padding-xxlarge">
                        <div className="container-large">
                            <div className="header_component">
                                <div className="header_content">
                                    <h1 className="home-header_title">
                                        <div className="display-inline">
                                            Elevating Brands with<span className="br"> </span>
                                        </div>
                                        <div className="display-inline text-style-secondary-font">
                                            UX/UI &amp; Identity Design
                                        </div>
                                    </h1>
                                    <div className="home-header_content-inner display-vertical is-left">
                                        <p className="header-text text-size-large">
                                            We turn your vision into reality with business-focused UX/UI
                                            and brand-identity designs, helping startups and brands craft
                                            unforgettable experiences with lasting impact
                                        </p>
                                    </div>
                                </div>
                                <figure className="header_media position-relative overflow-hidden">
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b45853da2cccf3e5aa1767_about-hero-high-quality.jpg"
                                        alt="Omotive"
                                        width={1290}
                                        height={644}
                                        loading="eager"
                                        fetchPriority="high"
                                        decoding="sync"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="section_experiance">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="header_content">
                                <h2 className="section_title heading-style-h1">
                                    Turning Ideas into<span className="br"></span>Successful business
                                    <span className="br"> </span>
                                    <span className="text-style-secondary-font">that drive</span> ROI
                                </h2>
                                <p className="section-text text-size-large">
                                    We specialize in turning innovative ideas into thriving businesses
                                    with exceptional UX/UI and brand-identity design. We craft
                                    user-centered experiences that captivate and strengthen brands
                                </p>
                            </div>
                            <div className="experiance_grid">
                                <div className="experiance_card display-vertical is-center">
                                    <div className="experiance_card_content text-align-center">
                                        <div className="heading-style-h2">2.3M</div>
                                        <div className="experiance_card_text">Client raised</div>
                                    </div>
                                </div>
                                <div className="experiance_card display-vertical is-center">
                                    <div className="experiance_card_content text-align-center">
                                        <div className="heading-style-h2">100%</div>
                                        <div className="experiance_card_text">Client Satisfaction</div>
                                    </div>
                                </div>
                                <div className="experiance_card display-vertical is-center">
                                    <div className="experiance_card_content text-align-center">
                                        <div className="heading-style-h2">50+</div>
                                        <div className="experiance_card_text">Projects completed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_operations">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="operation_grid">
                                <div
                                    id="w-node-_71bf2356-68f2-0b8e-31a5-7052f3b832e5-45375106"
                                    className="operation_content display-vertical is-left"
                                >
                                    <div className="margin-bottom margin-medium">
                                        <h2 className="heading-style-h1">
                                            What <span className="text-style-secondary-font">We do</span>
                                        </h2>
                                    </div>
                                    <p className="operation_text text-size-large">
                                        We help businesses thrive by transforming their digital presence
                                        with purposeful design. Whether you're a startup or an
                                        established brand, we specialize in creating websites, intuitive
                                        interfaces, and brand identities that drive real growth.
                                        <br />
                                        <br />
                                        We focus on solutions that deliver results—boosting engagement,
                                        increasing conversions, and driving ROI. By combining strategic
                                        UX/UI design and brand development, we bring your vision to life
                                        and strengthen your market position.
                                    </p>
                                    <div className="margin-top margin-large">
                                        <div
                                            className="is-magnatic"
                                            style={{
                                                willChange: "transform",
                                                transform:
                                                    "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
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
                                                        transform:
                                                            "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                        transformStyle: "preserve-3d"
                                                    }}
                                                ></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <figure className="operation_media position-relative overflow-hidden">
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4732f3d80550bd7fd61b7_about-work.jpg"
                                        alt=""
                                        width={614}
                                        height={488}
                                        loading="lazy"
                                        fetchPriority="low"
                                        decoding="async"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_core-values">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Our <span className="text-style-secondary-font">Core Values</span>
                                </h2>
                            </div>
                            <div className="core-value_gird">
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom1">
                                        <img
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b475a572811e4459f4e09a_static-design-icon.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </div>
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">Strategic design</h3>
                                    </div>
                                    <p className="core-value_card_text">
                                        We approach every project with dedication and care, treating it
                                        as our own to deliver impactful designs and exceptional results
                                    </p>
                                </div>
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom1">
                                        <img
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d9231d2e7b3b0c3f05841d_ego-free.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </div>
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">Ego-free focus</h3>
                                    </div>
                                    <p className="core-value_card_text">
                                        We’re a collaborative and open-minded team that creates
                                        exceptional designs by embracing every voice and idea
                                    </p>
                                </div>
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom1">
                                        <img
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d92340de8dc811a08388d8_graph.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </div>
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">Lead with innovation</h3>
                                    </div>
                                    <p className="core-value_card_text">
                                        We embrace challenges as opportunities to innovate, grow, and
                                        deliver impactful solutions through collaboration and
                                        creativity.
                                    </p>
                                </div>
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom1">
                                        <img
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c14cf45a3dd5cefd23b615_chrome-extention.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </div>
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">Expect the Best</h3>
                                    </div>
                                    <p className="core-value_card_text">
                                        We build real connections through trust, kindness, and open
                                        talks, making every interaction simple and smooth
                                    </p>
                                </div>
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom1">
                                        <img
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d923bb330856358443adf5_file.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </div>
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">
                                            Deliver best Every Time
                                        </h3>
                                    </div>
                                    <p className="core-value_card_text">
                                        We strive for excellence in every detail, delivering results
                                        that reflect our passion and commitment to quality
                                    </p>
                                </div>
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom1">
                                        <img
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b6feaff171efceff6d1921_expansion-icon.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </div>
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">Empathy-driven design</h3>
                                    </div>
                                    <p className="core-value_card_text">
                                        We listen with empathy, value diverse perspectives, and connect
                                        with people through openness and understanding
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_process">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="header_content">
                                <h2 className="section_title heading-style-h1 text-color-alternate">
                                    Proven Work Process&nbsp;&nbsp;for
                                    <span className="br hide-mobile-portrait"> </span>
                                    <span className="text-style-secondary-font">
                                        Delivering Exceptional
                                    </span>
                                    <span className="br hide-mobile-portrait"> </span>
                                    <span className="text-style-secondary-font">Results</span>
                                </h2>
                                <p className="section-text text-color-alternate">
                                    Our streamlined work process ensures exceptional results, focusing
                                    on efficiency, collaboration, and quality at every step
                                </p>
                            </div>
                            <div className="process_item_grid">
                                <div className="process_item display-flex is-center">
                                    <div className="process_item_content">
                                        <div>//001</div>
                                        <h3 className="process_item_title heading-style-h2">
                                            Identify Your Business Challenges
                                        </h3>
                                        <p className="body-l">
                                            Identify key challenges and create tailored solutions to drive
                                            your business forward
                                        </p>
                                    </div>
                                    <div className="process_item_icon-wrapper">
                                        <div className="process_item_icon display-flex is-center">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b577a45d72d1df495cccb0_business-step-icon.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="process_item_button">
                                            <div
                                                className="is-magnatic"
                                                style={{
                                                    willChange: "transform",
                                                    transform:
                                                        "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d"
                                                }}
                                            >
                                                <a
                                                    data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                                                    href="/projects"
                                                    className="button is-small w-inline-block is-gradient"
                                                >
                                                    <div className="button-text">View all project</div>
                                                    <div
                                                        className="button-hover-bg"
                                                        style={{
                                                            transform:
                                                                "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            transformStyle: "preserve-3d"
                                                        }}
                                                    ></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="core-service-border position-absolute pointer-events-none" />
                                </div>
                                <div className="process_item display-flex is-center">
                                    <div className="process_item_content">
                                        <div>//002</div>
                                        <h3 className="process_item_title heading-style-h2">
                                            Discover Effective Solutions
                                        </h3>
                                        <p className="body-l">
                                            Find tailored solutions to solve your challenges and boost
                                            your business growth
                                        </p>
                                    </div>
                                    <div className="process_item_icon-wrapper">
                                        <div className="process_item_icon display-flex is-center">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b577a45d72d1df495cccb0_business-step-icon.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="process_item_button">
                                            <div
                                                className="is-magnatic"
                                                style={{
                                                    willChange: "transform",
                                                    transform:
                                                        "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d"
                                                }}
                                            >
                                                <a
                                                    data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                                                    href="/projects"
                                                    className="button is-small w-inline-block is-gradient"
                                                >
                                                    <div className="button-text">View all project</div>
                                                    <div
                                                        className="button-hover-bg"
                                                        style={{
                                                            transform:
                                                                "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            transformStyle: "preserve-3d"
                                                        }}
                                                    ></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="core-service-border position-absolute pointer-events-none" />
                                </div>
                                <div className="process_item display-flex is-center">
                                    <div className="process_item_content">
                                        <div>//003</div>
                                        <h3 className="process_item_title heading-style-h2">
                                            Mix Your Hope &amp; Our Creativity
                                        </h3>
                                        <p className="body-l">
                                            Combining your vision with our creativity to deliver
                                            outstanding results
                                        </p>
                                    </div>
                                    <div className="process_item_icon-wrapper">
                                        <div className="process_item_icon display-flex is-center">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57966ce0989b332aa83a3_eye-search-icon.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="process_item_button">
                                            <div
                                                className="is-magnatic"
                                                style={{
                                                    willChange: "transform",
                                                    transform:
                                                        "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d"
                                                }}
                                            >
                                                <a
                                                    data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                                                    href="/projects"
                                                    className="button is-small w-inline-block is-gradient"
                                                >
                                                    <div className="button-text">View all project</div>
                                                    <div
                                                        className="button-hover-bg"
                                                        style={{
                                                            transform:
                                                                "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            transformStyle: "preserve-3d"
                                                        }}
                                                    ></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="core-service-border position-absolute pointer-events-none" />
                                </div>
                                <div className="process_item display-flex is-center">
                                    <div className="process_item_content">
                                        <div>//004</div>
                                        <h3 className="process_item_title heading-style-h2">
                                            Deliver Outstanding Result
                                        </h3>
                                        <p className="body-l">
                                            Delivering high-quality results that exceed expectations and
                                            drive success
                                        </p>
                                    </div>
                                    <div className="process_item_icon-wrapper">
                                        <div className="process_item_icon display-flex is-center">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57a72027be6ac0c422f7f_result-sheet-icon.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="process_item_button">
                                            <div
                                                className="is-magnatic"
                                                style={{
                                                    willChange: "transform",
                                                    transform:
                                                        "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d"
                                                }}
                                            >
                                                <a
                                                    data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                                                    href="/projects"
                                                    className="button is-small w-inline-block is-gradient"
                                                >
                                                    <div className="button-text">View all project</div>
                                                    <div
                                                        className="button-hover-bg"
                                                        style={{
                                                            transform:
                                                                "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            transformStyle: "preserve-3d"
                                                        }}
                                                    ></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="core-service-border position-absolute pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg.png"
                        loading="lazy"
                        sizes="(max-width: 1440px) 100vw, 1440px"
                        srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg-p-500.png 500w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg-p-800.png 800w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg-p-1080.png 1080w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg.png 1440w"
                        alt=""
                        className="process_bg-gradient"
                    />
                </section>
                <section className="section_team-member">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Behind the{" "}
                                    <span className="text-style-secondary-font">Magic</span>
                                </h2>
                            </div>
                            <div className="team-member_grid">
                                <div className="team-member_card">
                                    <figure className="team-member_figure position-relative overflow-hidden">
                                        <img
                                            className="cover-image"
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b47fff6ddf7a8b6dd37239_mufidul%20islam%20tapadar%20high%20quality.jpg"
                                            alt="Founder & Lead product designer"
                                            width={408}
                                            height={425}
                                            loading="lazy"
                                            fetchPriority="low"
                                            decoding="async"
                                        />
                                    </figure>
                                    <div className="team-member_info display-vertical">
                                        <h3 className="heading-style-h2">Mufidul islam tapadar</h3>
                                        <div className="team-member_designation">
                                            Founder &amp; Lead product designer
                                        </div>
                                    </div>
                                </div>
                                <div className="team-member_card">
                                    <figure className="team-member_figure position-relative overflow-hidden">
                                        <img
                                            className="cover-image"
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/688850a9e6e61ea20272cd4b_saim-ahammed-high.jpg"
                                            alt="Business developer"
                                            width={408}
                                            height={425}
                                            loading="lazy"
                                            fetchPriority="low"
                                            decoding="async"
                                        />
                                    </figure>
                                    <div className="team-member_info display-vertical">
                                        <h3 className="heading-style-h2">Siam Hossain</h3>
                                        <div className="team-member_designation">
                                            Business&nbsp;developer
                                        </div>
                                    </div>
                                </div>
                                <div className="team-member_card">
                                    <figure className="team-member_figure position-relative overflow-hidden">
                                        <img
                                            className="cover-image"
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4817902030315b521d6c8_ahsanul-islam-tapadar-high-quality.jpg"
                                            alt="Head of design"
                                            width={408}
                                            height={425}
                                            loading="lazy"
                                            fetchPriority="low"
                                            decoding="async"
                                        />
                                    </figure>
                                    <div className="team-member_info display-vertical">
                                        <h3 className="heading-style-h2">Ahsanul islam tapadar</h3>
                                        <div className="team-member_designation">Head of design</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>

    );
};

export default About;
