import { useWebflowScripts } from '@/hooks/useWebflowScripts';

const Projects = () => {
    // Initialize Webflow scripts and animations
    useWebflowScripts();
    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
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
                <section className="section_client-logos overflow-hidden">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="client-logos_component is-project">
                                <div className="client-logo_wrap">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67adab7f109ea0ce63c3ff5f_nas-house.svg"
                                        loading="lazy"
                                        alt=""
                                    />
                                </div>
                                <div className="client-logo_wrap">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b429026535397fbda12509_mymenu-logo.svg"
                                        loading="lazy"
                                        alt="My Menu logo"
                                    />
                                </div>
                                <div className="client-logo_wrap">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4291146efe5712ec684cf_nasdaily-logo.svg"
                                        loading="lazy"
                                        alt="Nasdaily logo"
                                    />
                                </div>
                                <div className="client-logo_wrap">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4295646efe5712ec6b3e8_existack.png"
                                        loading="lazy"
                                        alt="Exitstack Logo"
                                    />
                                </div>
                                <div className="client-logo_wrap">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4296a18fbfc438e57163f_nastravel-logo.svg"
                                        loading="lazy"
                                        alt="Nastravel Logo"
                                    />
                                </div>
                                <div className="client-logo_wrap">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42978d5f25f6f99420436_reviewxpo-logo.svg"
                                        loading="lazy"
                                        alt="Reviewxpo logo"
                                    />
                                </div>
                                <div className="client-logo_wrap">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42988a54127b5b18d2668_nassummit-log.svg"
                                        loading="lazy"
                                        alt="nassummit logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_home-projects">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="all_project_grid_wrap">
                                <div className="all_project_grid">
                                    <div className="project_single-item">
                                        <a
                                            href="/projects/nashouse"
                                            className="project_figure w-inline-block position-relative overflow-hidden"
                                        >
                                            <img
                                                className="cover-image"
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4cd215468e2baaaf8dea_nas-house-work-high.jpg"
                                                alt="nashouse website mockup"
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
                                                    Nashouse{" "}
                                                </div>
                                                <div className="display-inline">
                                                    to redesign their&nbsp;&nbsp;full website
                                                </div>
                                            </h3>
                                            <a
                                                data-w-id="b4f3a605-7f72-be37-28f2-25ea57072743"
                                                href="/projects/nashouse"
                                                className="button is-secondary w-inline-block is-secondary"
                                            >
                                                <div>View case study</div>
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
                                                <div className="button-hover-bg-two" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="project_single-item">
                                        <a
                                            href="/projects/nassummit"
                                            className="project_figure w-inline-block position-relative overflow-hidden"
                                        >
                                            <img
                                                className="cover-image"
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4d1d544503c3feb896e1_nas-summit-work-high.jpg"
                                                alt="nassummit website mockup"
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
                                                    Nassummit{" "}
                                                </div>
                                                <div className="display-inline">
                                                    to redesign their&nbsp;&nbsp;full website
                                                </div>
                                            </h3>
                                            <a
                                                data-w-id="e7a35a53-1750-6700-3378-bd99db11c3f1"
                                                href="/projects/nassummit"
                                                className="button is-secondary w-inline-block is-secondary"
                                            >
                                                <div>View case study</div>
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
                                                <div className="button-hover-bg-two" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="all_project_grid is-left-layout">
                                    <div className="project_single-item">
                                        <a
                                            href="/projects/nastravel"
                                            className="project_figure w-inline-block position-relative overflow-hidden"
                                        >
                                            <img
                                                className="cover-image"
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4e22a224221439807852_nas-travel-wok-high.jpg"
                                                alt="nashouse website mockup"
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
                                                    Nastravel{" "}
                                                </div>
                                                <div className="display-inline">
                                                    to redesign their&nbsp;&nbsp;full website
                                                </div>
                                            </h3>
                                            <a
                                                data-w-id="f63cc83e-e075-ba82-9101-5143d0a8c700"
                                                href="/projects/nastravel"
                                                className="button is-secondary w-inline-block is-secondary"
                                            >
                                                <div>View case study</div>
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
                                                <div className="button-hover-bg-two" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="project_single-item">
                                        <a
                                            href="/projects/reviewxpo"
                                            className="project_figure w-inline-block position-relative overflow-hidden"
                                        >
                                            <img
                                                className="cover-image"
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4e664f95d500738d7095_reviewxpo-work-high.jpg"
                                                alt="nassummit website mockup"
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
                                                    Reviewxpo{" "}
                                                </div>
                                                <div className="display-inline">
                                                    to redesign their&nbsp;&nbsp;full website
                                                </div>
                                            </h3>
                                            <a
                                                data-w-id="bfdf6af8-e698-9772-40a5-a7f0802ad200"
                                                href="/projects/reviewxpo"
                                                className="button is-secondary w-inline-block is-secondary"
                                            >
                                                <div>View case study</div>
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
                                                <div className="button-hover-bg-two" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="all_project_grid is-right-layout">
                                    <div className="project_single-item">
                                        <a
                                            href="/projects/nasdaily"
                                            className="project_figure w-inline-block position-relative overflow-hidden"
                                        >
                                            <img
                                                className="cover-image"
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4eb5fc2dc5f801235abd_nas-daily-work-high.jpg"
                                                alt="nashouse website mockup"
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
                                                    Nasdaily{" "}
                                                </div>
                                                <div className="display-inline">
                                                    to redesign their&nbsp;&nbsp;full website
                                                </div>
                                            </h3>
                                            <a
                                                data-w-id="fa24c397-1f71-8efa-725a-78ea1bc30004"
                                                href="/projects/nasdaily"
                                                className="button is-secondary w-inline-block is-secondary"
                                            >
                                                <div>View case study</div>
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
                                                <div className="button-hover-bg-two" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="project_single-item">
                                        <a
                                            href="/projects/dontdiesummit"
                                            className="project_figure w-inline-block position-relative overflow-hidden"
                                        >
                                            <img
                                                className="cover-image"
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4f10432130b7246ae876_dd-sumit-work-high.jpg"
                                                alt="nassummit website mockup"
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
                                                    Don't die summit
                                                </div>
                                                <div className="display-inline">
                                                    to redesign their&nbsp;&nbsp;full website
                                                </div>
                                            </h3>
                                            <a
                                                data-w-id="0f6e9eb4-48ba-bb05-d214-1e819b417a59"
                                                href="/projects/dontdiesummit"
                                                className="button is-secondary w-inline-block is-secondary"
                                            >
                                                <div>View case study</div>
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

export default Projects;
