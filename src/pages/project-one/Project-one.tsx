import { useWebflowScripts } from '@/hooks/useWebflowScripts';


const ProjectOne = () => {
    // Initialize Webflow scripts and animations
    useWebflowScripts();
    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                <section className="section_project-details-header">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="project-details-header_content display-flex">
                                <div className="project-details_content_left display-vertical">
                                    <div className="article_tag-wrapper display-flex">
                                        <div className="article_tag display-flex is-left">
                                            <div className="article_tag-dot" />
                                            <div>Product</div>
                                        </div>
                                        <div className="article_tag display-flex is-left">
                                            <div className="article_tag-dot" />
                                            <div>UI UX Design</div>
                                        </div>
                                    </div>
                                    <h1 className="project-details_title">
                                        Omotive helped{" "}
                                        <span className="text-style-secondary-font">Nashouse</span> to{" "}
                                        <span className="text-style-secondary-font">redesign</span>{" "}
                                        their&nbsp;&nbsp;full website
                                    </h1>
                                </div>
                                <div className="project-details_content_right display-vertical">
                                    <p className="project-details-header_text body-l">
                                        We offer a comprehensive service, including branding design, web
                                        design, and UI/UX design, to create a cohesive online presence
                                        for our clients.
                                    </p>
                                    <div className="heading-style-h2">
                                        Our <span className="text-style-secondary-font">service</span>
                                    </div>
                                    <div className="service-tag_wrapper display-flex is-left">
                                        <div className="service-tag display-flex is-center">
                                            <div className="body-l">Branding design</div>
                                        </div>
                                        <div className="service-tag display-flex is-center">
                                            <div className="body-l">Web Design</div>
                                        </div>
                                        <div className="service-tag display-flex is-center">
                                            <div className="body-l">UI/UX Design</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <figure className="header_media position-relative overflow-hidden">
                                <img
                                    className="cover-image"
                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63aa16449d54242ee2e26_nashouse-header-high-min.jpg"
                                    alt="Nashouse header mockup"
                                    width={1290}
                                    height={644}
                                    loading="eager"
                                    fetchPriority="high"
                                    decoding="sync"
                                />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="section_about-project">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-project">
                                <h2 className="section_title heading-style-h1">
                                    About <span className="text-style-secondary-font">Nashouse</span>
                                </h2>
                                <p className="header-text body-l">
                                    Nas House is a place where ambitious people come together to
                                    connect, collaborate, and create. It’s more than just a space—it’s
                                    a community where you can work, rest, eat, network, and belong all
                                    under one roof.
                                </p>
                            </div>
                            <div className="about-project_grid">
                                <figure className="about-project_figure position-relative overflow-hidden">
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63b29cab409c556dcfd37_nashouse-about-1-high.jpg"
                                        alt="nashouse laptop mockup"
                                        width={635}
                                        height={644}
                                        loading="lazy"
                                        fetchPriority="low"
                                        decoding="async"
                                    />
                                </figure>
                                <figure className="about-project_figure position-relative overflow-hidden">
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63b53508515b6909d789d_nashouse-about-2-high.jpg"
                                        alt="nashouse mobile mockup"
                                        width={635}
                                        height={644}
                                        loading="lazy"
                                        fetchPriority="low"
                                        decoding="async"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_solution position-relative">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="solution_header display-vertical">
                                <div className="project_section_header display-flex">
                                    <h2 className="section_title heading-style-h2 text-color-alternate">
                                        The <span className="text-style-secondary-font">challenge</span>
                                    </h2>
                                    <p className="project_section_text body-l">
                                        Designing the Nas House website means creating a space that
                                        feels welcoming and vibrant, where users can easily explore all
                                        the ways to connect, work, and grow within a community they’ll
                                        want to be a part of
                                    </p>
                                </div>
                                <div className="project_section_header display-flex">
                                    <h2 className="section_title heading-style-h2 text-color-alternate">
                                        The <span className="text-style-secondary-font">solution</span>
                                    </h2>
                                    <p className="project_section_text body-l">
                                        The solution is to design nashouse website that feels as
                                        inviting and dynamic as Nas House itself. By focusing on clear
                                        navigation, engaging visuals, and intuitive features, we’ll
                                        create an experience that makes it easy for users to discover,
                                        connect, and engage with the community and opportunities at Nas
                                        House.
                                    </p>
                                </div>
                            </div>
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1 text-color-alternate">
                                    The <span className="text-style-secondary-font">Process</span>
                                </h2>
                            </div>
                            <div className="solution_grid">
                                <div className="solution_card display-vertical">
                                    <div className="solution_card_top display-flex">
                                        <div className="solution_card_icon display-flex is-center">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57151ca21d031b662d6ea_calender.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="body-l">001</div>
                                    </div>
                                    <div className="solution_card_content display-vertical">
                                        <h3 className="text-color-alternate">Initial Brief</h3>
                                        <p className="text-size-regular">
                                            Start by gathering an initial design brief to understand the
                                            client's aspirations
                                        </p>
                                    </div>
                                </div>
                                <div className="solution_card display-vertical">
                                    <div className="solution_card_top display-flex">
                                        <div className="solution_card_icon display-flex is-center">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57150a90a95057f29dba9_person.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="body-l">002</div>
                                    </div>
                                    <div className="solution_card_content display-vertical">
                                        <h3 className="text-color-alternate">Questionnaire</h3>
                                        <p className="text-size-regular">
                                            Ask insightful questions to clarify project requirements and
                                            gather valuable insights.
                                        </p>
                                    </div>
                                </div>
                                <div className="solution_card display-vertical">
                                    <div className="solution_card_top display-flex">
                                        <div className="solution_card_icon display-flex is-center">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57150b4de1911f9b773e8_estimate.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="body-l">003</div>
                                    </div>
                                    <div className="solution_card_content display-vertical">
                                        <h3 className="text-color-alternate">Estimate</h3>
                                        <p className="text-size-regular">
                                            Provide a transparent project quote that outlines costs and
                                            timelines, ensuring with the client's budget.
                                        </p>
                                    </div>
                                </div>
                                <div className="solution_card display-vertical">
                                    <div className="solution_card_top display-flex">
                                        <div className="solution_card_icon display-flex is-center">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c571504fcf89b38f96ae4c_kickoff.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="body-l">004</div>
                                    </div>
                                    <div className="solution_card_content display-vertical">
                                        <h3 className="text-color-alternate">Project Kick-off</h3>
                                        <p className="text-size-regular">
                                            Once the client approves the quote, initiate the project with
                                            a well-defined plan and open lines of communication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <picture className="bg-absolute-shape">
                        <source
                            srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57ad1211992d367f90ac2_solution-bg-high-min.png"
                            media="(max-width: 375px)"
                        />
                        <img
                            className="cover-image"
                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57ad1211992d367f90ac2_solution-bg-high-min.png"
                            alt=""
                            width="100%"
                            height="100%"
                            loading="lazy"
                            fetchPriority="low"
                            decoding="async"
                        />
                    </picture>
                </section>
                <section className="section_style-guide">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="header_content">
                                <h1 className="home-header_title">
                                    <div className="display-inline">Style guide</div>
                                </h1>
                                <div className="home-header_content-inner display-vertical is-left">
                                    <p className="project_other-text body-l">
                                        our primary objective is to ensure a consistent and cohesive
                                        visual and interactive experience across all digital
                                        touchpoints.
                                    </p>
                                </div>
                            </div>
                            <figure className="style-guide_figure position-relative overflow-hidden position-relative overflow-hidden">
                                <img
                                    className="cover-image"
                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63b92a6e51e35d4819be6_nashouse-style-guide-high.png"
                                    alt="Nashouse style guide"
                                    width={1290}
                                    height={878}
                                    loading="lazy"
                                    fetchPriority="low"
                                    decoding="async"
                                />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="section_home-screen">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    <span className="text-style-secondary-font">Home</span> Screen
                                </h2>
                            </div>
                            <figure className="home-screen_media position-relative overflow-hidden">
                                <img
                                    className="cover-image"
                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63d3d8879041ea3b5686c_nashouse-home-screen-high-min.jpg"
                                    alt="Nashouse homescreen mockup"
                                    width={1290}
                                    height={929}
                                    loading="lazy"
                                    fetchPriority="low"
                                    decoding="async"
                                />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="section_other-screen">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    <span className="text-style-secondary-font">Others</span>Screen
                                </h2>
                            </div>
                            <div className="position-relative overflow-hidden">
                                <picture className="bg-absolute-shape is-relative">
                                    <source
                                        srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63da16dc936a6b8b4a92b_nashouse-otherscreen-high-min.jpg"
                                        media="(max-width: 375px)"
                                    />
                                    <img
                                        className="max-width-full"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63da16dc936a6b8b4a92b_nashouse-otherscreen-high-min.jpg"
                                        alt=""
                                        width="100%"
                                        height="100%"
                                        loading="lazy"
                                        fetchPriority="low"
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section_testimonial-slider">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="client_testimonial-wrapper">
                                <div className="client_testimonial-headshot">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f232406efe01e0e0ac999_testimonial-imge.png"
                                        loading="lazy"
                                        alt=""
                                    />
                                </div>
                                <div className="client_testimonial">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4c3e2b3a9fead6ed357_quote.svg"
                                        loading="lazy"
                                        alt=""
                                    />
                                    <p className="body-xl text-color-primary">
                                        Omotive Design Agency did an outstanding job designing the
                                        websites for Nassummit, Nashouse, Nastravel, and Nasdaily. The
                                        sites are intuitive, visually engaging, and perfectly aligned
                                        with our brand. Highly recommend!
                                    </p>
                                    <div className="client-testimonial-card-footer">
                                        <div className="client-testimonial-card-user">
                                            <div className="client-testimonial-card-user-preview">
                                                <figure className="client-testimonial-meida">
                                                    <img
                                                        width={70}
                                                        height={70}
                                                        alt="nasir hussain"
                                                        loading="lazy"
                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9c_user-testimonial-1.png"
                                                        className="client-testimonial-media-image"
                                                    />
                                                </figure>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 82 82"
                                                    fill="none"
                                                    className="client-testimonial-media-progressbar"
                                                >
                                                    <path
                                                        d="M82 41C82 63.6437 63.6437 82 41 82C18.3563 82 0 63.6437 0 41C0 18.3563 18.3563 0 41 0C63.6437 0 82 18.3563 82 41ZM2.46 41C2.46 62.2851 19.7149 79.54 41 79.54C62.2851 79.54 79.54 62.2851 79.54 41C79.54 19.7149 62.2851 2.46 41 2.46C19.7149 2.46 2.46 19.7149 2.46 41Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 82 82"
                                                    fill="none"
                                                    className="client-testimonial-media-progressbar-progress"
                                                >
                                                    <path
                                                        d="M62.2565 74.589L62.9249 75.6453L62.2565 74.589C57.8455 77.3805 52.9279 79.2759 47.7844 80.1668C42.641 81.0577 37.3725 80.9268 32.2796 79.7816C27.1866 78.6364 22.3693 76.4994 18.1022 73.4925C13.8353 70.4854 10.2024 66.6675 7.41094 62.2565C4.6195 57.8455 2.7242 52.9279 1.83326 47.7844C0.942314 42.6409 1.07316 37.3725 2.21835 32.2796L0.998802 32.0054L2.21835 32.2796C3.36354 27.1866 5.50061 22.3693 8.5076 18.1022C11.5146 13.8353 15.3325 10.2024 19.7435 7.41095C24.1545 4.61951 29.0722 2.7242 34.2155 1.83326C39.359 0.942305 44.6277 1.07317 49.7205 2.21836C54.8133 3.36355 59.6308 5.50064 63.8977 8.50761L64.4234 7.76164L63.8977 8.50761C68.1647 11.5146 71.7975 15.3325 74.589 19.7435C77.3805 24.1545 79.2759 29.0722 80.1668 34.2155C81.0577 39.359 80.9268 44.6276 79.7816 49.7205C78.6365 54.8133 76.4994 59.6308 73.4923 63.8977L74.4385 64.5645L73.4923 63.8978C70.4854 68.1647 66.6675 71.7977 62.2565 74.589Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        pathLength={100}
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="client-testimonial-card-user-name text-bold">
                                                    Nuseir Yassin
                                                </div>
                                                <div className="client-testimonial-card-user-designation">
                                                    Founder &amp; CEO at Nas Company
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f211cfb52a2de165bf31f_nashouse-logo.png"
                                            loading="lazy"
                                            alt=""
                                            className="client_testimonial-project-logo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section_related-project">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Next <span className="text-style-secondary-font">Projects</span>
                                </h2>
                            </div>
                            <div className="related-project_grid">
                                <div className="project_single-item">
                                    <a
                                        href="/projects/nashouse"
                                        aria-current="page"
                                        className="project_figure position-relative overflow-hidden w-inline-block w--current is-related"
                                    >
                                        <img
                                            className="cover-image"
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c5b848efd444c01860932d_next-project-high.jpg"
                                            alt="omoskillo website mockup"
                                            width={614}
                                            height={576}
                                            loading="lazy"
                                            fetchPriority="low"
                                            decoding="async"
                                        />
                                    </a>
                                    <div className="project_content">
                                        <h3 className="heading-style-h2">
                                            <div className="display-inline">Omotive helped </div>
                                            <div className="display-inline text-style-secondary-font">
                                                Nashouse to redesign their&nbsp;&nbsp;full website
                                            </div>
                                        </h3>
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
                                                href="/projects/nashouse"
                                                aria-current="page"
                                                className="button w-inline-block w--current is-secondary"
                                            >
                                                <div>View case study</div>
                                                <div className="button-hover-bg-two" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project_single-item">
                                    <a
                                        href="/projects/nastravel"
                                        className="project_figure position-relative overflow-hidden w-inline-block is-related"
                                    >
                                        <img
                                            className="cover-image"
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c5b8485b462b3a3a91ebd7_next-project-2-high.jpg"
                                            alt="omoskillo website mockup"
                                            width={614}
                                            height={576}
                                            loading="lazy"
                                            fetchPriority="low"
                                            decoding="async"
                                        />
                                    </a>
                                    <div className="project_content">
                                        <h3 className="heading-style-h2">
                                            <div className="display-inline">Omotive helped </div>
                                            <div className="display-inline text-style-secondary-font">
                                                Nastravels to redesign their&nbsp;&nbsp;full website
                                            </div>
                                        </h3>
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
                                                href="/projects/nastravel"
                                                className="button w-inline-block is-secondary"
                                            >
                                                <div>View case study</div>
                                                <div className="button-hover-bg-two" />
                                            </a>
                                        </div>
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

export default ProjectOne;
