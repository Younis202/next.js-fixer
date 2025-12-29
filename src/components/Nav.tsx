import { useWebflowScripts } from '@/hooks/useWebflowScripts';

const Nav = () => {
    // Initialize Webflow scripts and animations
    useWebflowScripts();

    return (
        <nav className="nav_component">
            <div className="padding-global">
                <div className="container-large">
                    <div className="nav_wrapper">
                        <a
                            href="/"
                            aria-current="page"
                            className="nav_logo-link w-inline-block w--current"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67ac925dc3a152594b6bcc01_logo.svg"
                                loading="eager"
                                width={124}
                                height={28}
                                alt="Omotive Logo"
                                className="nav_logo"
                            />
                        </a>
                        <div className="nav_menu-wrapper">
                            <nav id="main-menu" role="navigation" className="nav_menu">
                                <ul role="list" className="nav_list">
                                    <li className="nav_list-item">
                                        <a href="/projects" className="nav_link">
                                            works
                                        </a>
                                        <div className="mobile-nav-arrow">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9.13306 5.69139L4.11237 10.7121L3.28741 9.88712L8.3081 4.86643L3.88303 4.86643L3.88303 3.69994L10.2996 3.69994L10.2996 10.1165L9.13306 10.1165L9.13306 5.69139Z"
                                                    fill="#10131B"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="nav_list-item">
                                        <div
                                            data-hover="true"
                                            data-delay={0}
                                            data-w-id="9cf03c1b-9963-f5c9-751d-ff0b100cb4c3"
                                            className="nav_dropdown w-dropdown"
                                        >
                                            <div
                                                className="nav_link w-dropdown-toggle"
                                                id="w-dropdown-toggle-0"
                                                aria-controls="w-dropdown-list-0"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <a href="/services" className="nav_link is-dropdown">
                                                    services
                                                </a>
                                            </div>
                                            <nav
                                                className="nav_dropdown-list w-dropdown-list"
                                                id="w-dropdown-list-0"
                                                aria-labelledby="w-dropdown-toggle-0"
                                                style={{
                                                    transform:
                                                        "translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d",
                                                    opacity: 0
                                                }}
                                            >
                                                <div className="nav_dropdown-list-inner">
                                                    <div
                                                        role="list"
                                                        className="nav_services_list display-vertical"
                                                    >
                                                        <a
                                                            role="listtiem"
                                                            href="/sevices/service-one"
                                                            className="nav_services_list-item is-active w-inline-block"
                                                            tabIndex={0}
                                                        >
                                                            <div>01</div>
                                                            <div>Website &amp; Branding</div>
                                                        </a>
                                                        <a
                                                            role="listtiem"
                                                            href="/sevices/mobile-application-design"
                                                            className="nav_services_list-item w-inline-block"
                                                            tabIndex={0}
                                                        >
                                                            <div>02</div>
                                                            <div>Mobile Apps</div>
                                                        </a>
                                                        <a
                                                            role="listtiem"
                                                            href="/sevices/web-application"
                                                            className="nav_services_list-item w-inline-block"
                                                            tabIndex={0}
                                                        >
                                                            <div>03</div>
                                                            <div>Web Application</div>
                                                        </a>
                                                        <a
                                                            role="listtiem"
                                                            href="/service-two"
                                                            className="nav_services_list-item w-inline-block"
                                                            tabIndex={0}
                                                        >
                                                            <div>04</div>
                                                            <div>Webflow Developement</div>
                                                        </a>
                                                    </div>
                                                    <div className="nav_services_media">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67adfa1f0bf9c103b13afa27_dropdown-service.jpg"
                                                            loading="lazy"
                                                            alt="A computer monitor sitting on top of a rock."
                                                            className="nav_service_image is-active"
                                                        />
                                                        <img
                                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d705308d1c3060ecb7eb16_dropdown-Mobile%20Apps.jpg"
                                                            loading="lazy"
                                                            alt=""
                                                            className="nav_service_image"
                                                        />
                                                        <img
                                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70549c5c4b283a4831d4e_dropdown-web-application.jpg"
                                                            loading="lazy"
                                                            alt=""
                                                            className="nav_service_image"
                                                        />
                                                        <img
                                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d7054ab1eecae2159d6173_dropdown-webflow.jpg"
                                                            loading="lazy"
                                                            alt=""
                                                            className="nav_service_image"
                                                        />
                                                    </div>
                                                    <div className="nav_services_content">
                                                        <div className="nav_services_content-inner is-active">
                                                            <div className="margin-bottom margin-medium text-weight-medium">
                                                                Service
                                                            </div>
                                                            <div className="margin-bottom margin-small">
                                                                <div className="nav_service_title body-xl text-color-primary">
                                                                    Website &amp; Branding
                                                                </div>
                                                            </div>
                                                            <p className="nav_service_subtext">
                                                                Delivering user-centric solutions that combine
                                                                creativity with strategy to drive business growth
                                                            </p>
                                                        </div>
                                                        <div className="nav_services_content-inner">
                                                            <div className="margin-bottom margin-medium text-weight-medium">
                                                                Service
                                                            </div>
                                                            <div className="margin-bottom margin-small">
                                                                <div className="nav_service_title body-xl text-color-primary">
                                                                    Mobile Apps
                                                                </div>
                                                            </div>
                                                            <p className="nav_service_subtext">
                                                                Delivering user-centric solutions that combine
                                                                creativity with strategy to drive business growth
                                                            </p>
                                                        </div>
                                                        <div className="nav_services_content-inner">
                                                            <div className="margin-bottom margin-medium text-weight-medium">
                                                                Service
                                                            </div>
                                                            <div className="margin-bottom margin-small">
                                                                <div className="nav_service_title body-xl text-color-primary">
                                                                    Web Application
                                                                </div>
                                                            </div>
                                                            <p className="nav_service_subtext">
                                                                Delivering user-centric solutions that combine
                                                                creativity with strategy to drive business growth
                                                            </p>
                                                        </div>
                                                        <div className="nav_services_content-inner">
                                                            <div className="margin-bottom margin-medium text-weight-medium">
                                                                Service
                                                            </div>
                                                            <div className="margin-bottom margin-small">
                                                                <div className="nav_service_title body-xl text-color-primary">
                                                                    Webflow Development
                                                                </div>
                                                            </div>
                                                            <p className="nav_service_subtext">
                                                                Delivering user-centric solutions that combine
                                                                creativity with strategy to drive business growth
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="mobile-nav-arrow">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9.13306 5.69139L4.11237 10.7121L3.28741 9.88712L8.3081 4.86643L3.88303 4.86643L3.88303 3.69994L10.2996 3.69994L10.2996 10.1165L9.13306 10.1165L9.13306 5.69139Z"
                                                    fill="#10131B"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="nav_list-item">
                                        <a href="/about" className="nav_link">
                                            About
                                        </a>
                                        <div className="mobile-nav-arrow">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9.13306 5.69139L4.11237 10.7121L3.28741 9.88712L8.3081 4.86643L3.88303 4.86643L3.88303 3.69994L10.2996 3.69994L10.2996 10.1165L9.13306 10.1165L9.13306 5.69139Z"
                                                    fill="#10131B"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div
                                className="nav_button is-magnatic"
                                style={{
                                    willChange: "transform",
                                    transform:
                                        "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    transformStyle: "preserve-3d"
                                }}
                            >
                                <a
                                    data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                                    href="/contact"
                                    className="button is-small w-inline-block is-small"
                                >
                                    <div className="button-text">Let's chat</div>
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
                        <button
                            type="button"
                            role="button"
                            aria-haspopup="true"
                            aria-controls="main-menu"
                            aria-label="Open Menu"
                            className="nav_menu-button"
                        >
                            <span className="nav_menu-bar cc-top" />
                            <span className="nav_menu-bar cc-middle" />
                            <span className="nav_menu-bar cc-bottom" />
                        </button>
                    </div>
                </div>
            </div>
            <nav className="mobile-menu-wrapper">
                <div className="mobile-menu_content">
                    <div role="list" className="mobile-menu_list">
                        <a
                            role="listitem"
                            href="/projects"
                            className="mobile-menu_list_item w-inline-block"
                        >
                            <div className="mobile-menu_link heading-style-h3 text-weight-medium">
                                Projects
                            </div>
                            <div className="mobile-menu_arrow display-flex is-center position-relative overflow-hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M9.13306 5.69139L4.11237 10.7121L3.28741 9.88712L8.3081 4.86643L3.88303 4.86643L3.88303 3.69994L10.2996 3.69994L10.2996 10.1165L9.13306 10.1165L9.13306 5.69139Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div
                                    data-gradient={1}
                                    className="mobile-menu_gradient position-absolute z-index-n1 pointer-events-none"
                                />
                            </div>
                        </a>
                        <a
                            role="listitem"
                            href="/services"
                            className="mobile-menu_list_item w-inline-block"
                        >
                            <div className="mobile-menu_link heading-style-h3 text-weight-medium">
                                Services
                            </div>
                            <div className="mobile-menu_arrow display-flex is-center position-relative overflow-hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M9.13306 5.69139L4.11237 10.7121L3.28741 9.88712L8.3081 4.86643L3.88303 4.86643L3.88303 3.69994L10.2996 3.69994L10.2996 10.1165L9.13306 10.1165L9.13306 5.69139Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div
                                    data-gradient={1}
                                    className="mobile-menu_gradient position-absolute z-index-n1 pointer-events-none"
                                />
                            </div>
                        </a>
                        <a
                            role="listitem"
                            href="/about"
                            className="mobile-menu_list_item w-inline-block"
                        >
                            <div className="mobile-menu_link heading-style-h3 text-weight-medium">
                                About Us
                            </div>
                            <div className="mobile-menu_arrow display-flex is-center position-relative overflow-hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M9.13306 5.69139L4.11237 10.7121L3.28741 9.88712L8.3081 4.86643L3.88303 4.86643L3.88303 3.69994L10.2996 3.69994L10.2996 10.1165L9.13306 10.1165L9.13306 5.69139Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div
                                    data-gradient={1}
                                    className="mobile-menu_gradient position-absolute z-index-n1 pointer-events-none"
                                />
                            </div>
                        </a>
                    </div>
                    <a
                        data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                        href="/contact"
                        className="button is-small w-inline-block"
                    >
                        <div className="button-text">Contact us</div>
                        <div
                            className="button-hover-bg"
                            style={{
                                transform:
                                    "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        ></div>
                    </a>
                    <div className="mobile-menu_bottom display-vertical">
                        <div>
                            <div className="margin-bottom margin-small">
                                <div className="body-xl text-color-secondary">Get in touch</div>
                            </div>
                            <a
                                href="#"
                                className="copy-email-wrapper copy-parent is-mobile w-inline-block"
                            >
                                <div id="textToCopy" className="footer_cta_text">
                                    mufidul@omotive.co
                                </div>
                                <div className="copy-button is-two display-vertical  is-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        className="copy-button-icon is-two"
                                    >
                                        <path
                                            d="M16.5 12.9V17.1C16.5 20.6 15.1 22 11.6 22H7.4C3.9 22 2.5 20.6 2.5 17.1V12.9C2.5 9.4 3.9 8 7.4 8H11.6C15.1 8 16.5 9.4 16.5 12.9Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M22.5 6.9V11.1C22.5 14.6 21.1 16 17.6 16H16.5V12.9C16.5 9.4 15.1 8 11.6 8H8.5V6.9C8.5 3.4 9.9 2 13.4 2H17.6C21.1 2 22.5 3.4 22.5 6.9Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div data-gradient={1} className="copy-button-overlay" />
                                </div>
                                <div data-gradient={1} className="copy-result">
                                    <div>copied!</div>
                                </div>
                            </a>
                        </div>
                        <div className="mobile-menu_social display-vertical">
                            <div className="heading-style-h3">Socials</div>
                            <div className="mobile-menu_social_links display-flex is-left">
                                <a
                                    href="https://dribbble.com/designopsagency"
                                    target="_blank"
                                    className="mobile-menu_social_link w-inline-block"
                                >
                                    <div>Dribble</div>
                                </a>
                                <a
                                    href="https://www.behance.net/designopsagency"
                                    target="_blank"
                                    className="mobile-menu_social_link w-inline-block"
                                >
                                    <div>Behance</div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/omotive-agency/?viewAsMember=true"
                                    target="_blank"
                                    className="mobile-menu_social_link w-inline-block"
                                >
                                    <div>Linkedin</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    );
};

export default Nav;
