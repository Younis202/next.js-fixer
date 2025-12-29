import { useWebflowScripts } from '@/hooks/useWebflowScripts';


const Contact = () => {

    // Initialize Webflow scripts and animations
    useWebflowScripts();
    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                <section className="section_contact">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="contact_grid">
                                <div className="contact_left display-vertical">
                                    <h1>
                                        Have a great idea<span className="br"> </span>
                                        <span className="text-style-secondary-font">
                                            Tell us about it.
                                        </span>
                                    </h1>
                                    <div>
                                        <div className="margin-bottom margin-small">
                                            <div className="body-xl text-color-secondary">
                                                Just say hello
                                            </div>
                                        </div>
                                        <a
                                            href="#"
                                            className="copy-email-wrapper copy-parent w-inline-block"
                                        >
                                            <div id="textToCopy2" className="footer_cta_text">
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
                                    <div
                                        tf-sliders="wrapper"
                                        className="client-testimonial-sliders-wrapper"
                                    >
                                        <div className="client-testimonial-navigation-slider-wrapper">
                                            <div
                                                tf-slider="navigation"
                                                className="client-testimonial-navigation-slider splide splide--loop splide--ttb splide--draggable splide--nav is-active is-initialized"
                                                id="splide02"
                                                role="region"
                                                aria-roledescription="carousel"
                                                style={{ height: "243.812px" }}
                                            >
                                                <div
                                                    className="splide__track splide__track--loop splide__track--ttb splide__track--draggable splide__track--nav"
                                                    id="splide02-track"
                                                    style={{ paddingTop: 0, paddingBottom: 0 }}
                                                >
                                                    <div
                                                        className="splide__list"
                                                        id="splide02-list"
                                                        role="presentation"
                                                        aria-orientation="vertical"
                                                        style={{ transform: "translateY(-488px)" }}
                                                    >
                                                        <div
                                                            className="splide__slide splide__slide--clone is-active"
                                                            id="splide02-clone01"
                                                            role="button"
                                                            aria-label="Go to slide 1"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-current="true"
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                                tabIndex={-1}
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Nasir Yassin"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b2fb3d53859433ab0046c6_nuseir-yassin.png"
                                                                        className="client-testimonial-media-image"
                                                                    />
                                                                </figure>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone"
                                                            id="splide02-clone02"
                                                            role="button"
                                                            aria-label="Go to slide 2"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                                tabIndex={-1}
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Rahat ahmed"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9f_user-testimonial-2.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone"
                                                            id="splide02-clone03"
                                                            role="button"
                                                            aria-label="Go to slide 3"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                                tabIndex={-1}
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="danny menu"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea4_user-testimonial-3.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone"
                                                            id="splide02-clone04"
                                                            role="button"
                                                            aria-label="Go to slide 4"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                                tabIndex={-1}
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="damien haris"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea1_user-testimonial-4.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-active"
                                                            id="splide02-clone05"
                                                            role="button"
                                                            aria-label="Go to slide 1"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-current="true"
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                                tabIndex={-1}
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Nasir Yassin"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b2fb3d53859433ab0046c6_nuseir-yassin.png"
                                                                        className="client-testimonial-media-image"
                                                                    />
                                                                </figure>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone"
                                                            id="splide02-clone06"
                                                            role="button"
                                                            aria-label="Go to slide 2"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                                tabIndex={-1}
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Rahat ahmed"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9f_user-testimonial-2.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone"
                                                            id="splide02-clone07"
                                                            role="button"
                                                            aria-label="Go to slide 3"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                                tabIndex={-1}
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="danny menu"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea4_user-testimonial-3.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-prev"
                                                            id="splide02-clone08"
                                                            role="button"
                                                            aria-label="Go to slide 4"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                                tabIndex={-1}
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="damien haris"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea1_user-testimonial-4.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide is-active is-visible"
                                                            id="splide02-slide01"
                                                            role="button"
                                                            aria-label="Go to slide 1"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-controls="splide01-slide01"
                                                            aria-current="true"
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Nasir Yassin"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b2fb3d53859433ab0046c6_nuseir-yassin.png"
                                                                        className="client-testimonial-media-image"
                                                                    />
                                                                </figure>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide is-visible is-next"
                                                            id="splide02-slide02"
                                                            role="button"
                                                            aria-label="Go to slide 2"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-controls="splide01-slide02"
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Rahat ahmed"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9f_user-testimonial-2.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide is-visible"
                                                            id="splide02-slide03"
                                                            role="button"
                                                            aria-label="Go to slide 3"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-controls="splide01-slide03"
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="danny menu"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea4_user-testimonial-3.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide is-visible"
                                                            id="splide02-slide04"
                                                            role="button"
                                                            aria-label="Go to slide 4"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-controls="splide01-slide04"
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="damien haris"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea1_user-testimonial-4.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-active is-visible"
                                                            id="splide02-clone09"
                                                            role="button"
                                                            aria-label="Go to slide 1"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-current="true"
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Nasir Yassin"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b2fb3d53859433ab0046c6_nuseir-yassin.png"
                                                                        className="client-testimonial-media-image"
                                                                    />
                                                                </figure>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-visible"
                                                            id="splide02-clone10"
                                                            role="button"
                                                            aria-label="Go to slide 2"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Rahat ahmed"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9f_user-testimonial-2.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-visible"
                                                            id="splide02-clone11"
                                                            role="button"
                                                            aria-label="Go to slide 3"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="danny menu"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea4_user-testimonial-3.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-visible"
                                                            id="splide02-clone12"
                                                            role="button"
                                                            aria-label="Go to slide 4"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="damien haris"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea1_user-testimonial-4.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-active is-visible"
                                                            id="splide02-clone13"
                                                            role="button"
                                                            aria-label="Go to slide 1"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            aria-current="true"
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Nasir Yassin"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b2fb3d53859433ab0046c6_nuseir-yassin.png"
                                                                        className="client-testimonial-media-image"
                                                                    />
                                                                </figure>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-visible"
                                                            id="splide02-clone14"
                                                            role="button"
                                                            aria-label="Go to slide 2"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={36}
                                                                        height={36}
                                                                        alt="Rahat ahmed"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9f_user-testimonial-2.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-visible"
                                                            id="splide02-clone15"
                                                            role="button"
                                                            aria-label="Go to slide 3"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="danny menu"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea4_user-testimonial-3.png"
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
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="splide__slide splide__slide--clone is-visible"
                                                            id="splide02-clone16"
                                                            role="button"
                                                            aria-label="Go to slide 4"
                                                            style={{
                                                                marginBottom: 16,
                                                                height: "calc(25% - 12px)"
                                                            }}
                                                            tabIndex={0}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="client-testimonial-pagination"
                                                            >
                                                                <figure className="client-testimonial-meida">
                                                                    <img
                                                                        width={70}
                                                                        height={70}
                                                                        alt="damien haris"
                                                                        loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea1_user-testimonial-4.png"
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
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="client-testimonial-content-slider-wrapper">
                                            <div
                                                tf-slider="content"
                                                className="client-testimonial-content-slider splide splide--fade splide--ltr splide--draggable is-active is-overflow is-initialized"
                                                id="splide01"
                                                role="region"
                                                aria-roledescription="carousel"
                                            >
                                                <div
                                                    className="splide__track splide__track--fade splide__track--ltr splide__track--draggable"
                                                    id="splide01-track"
                                                    style={{ paddingLeft: 0, paddingRight: 0 }}
                                                    aria-live="polite"
                                                    aria-atomic="true"
                                                >
                                                    <div
                                                        className="splide__list"
                                                        id="splide01-list"
                                                        role="presentation"
                                                    >
                                                        <div
                                                            className="splide__slide is-active is-visible"
                                                            id="splide01-slide01"
                                                            role="group"
                                                            aria-roledescription="slide"
                                                            aria-label="1 of 4"
                                                            style={{
                                                                width: "calc(100%)",
                                                                height: "auto",
                                                                transform: "translateX(0%)"
                                                            }}
                                                        >
                                                            <div className="client-testimonial-card">
                                                                <div className="client-testimonial-card-icon" />
                                                                <p className="client-testimonial-card-text">
                                                                    Omotive design agency took the time to understand
                                                                    my industry. They knew what our visitors wanted,
                                                                    and they did an exceptional job to meet those
                                                                    needs. We've seen great improvements in impression
                                                                    and conversion after the redesign. I vouch for
                                                                    them!
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="splide__slide is-next"
                                                            id="splide01-slide02"
                                                            role="group"
                                                            aria-roledescription="slide"
                                                            aria-label="2 of 4"
                                                            style={{
                                                                width: "calc(100%)",
                                                                height: "auto",
                                                                transform: "translateX(-100%)"
                                                            }}
                                                            aria-hidden="true"
                                                        >
                                                            <div className="client-testimonial-card">
                                                                <div className="client-testimonial-card-icon" />
                                                                <p className="client-testimonial-card-text">
                                                                    Was a pleasure working with Omotive on launching
                                                                    ExitStack.&nbsp;&nbsp;They understood the vision
                                                                    and worked efficiently, with great communications,
                                                                    to execute it.&nbsp;&nbsp;Looking forward to
                                                                    working with them again!
                                                                </p>
                                                                <div className="client-testimonial-card-footer">
                                                                    <div className="client-testimonial-card-user">
                                                                        <div className="client-testimonial-card-user-preview">
                                                                            <figure className="client-testimonial-meida">
                                                                                <img
                                                                                    width={70}
                                                                                    height={70}
                                                                                    alt="Rahat ahmed"
                                                                                    loading="lazy"
                                                                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9f_user-testimonial-2.png"
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
                                                                                Rahat Ahmed
                                                                            </div>
                                                                            <div className="client-testimonial-card-user-designation">
                                                                                Founding CEO, Anchorless Bangladesh
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="splide__slide"
                                                            id="splide01-slide03"
                                                            role="group"
                                                            aria-roledescription="slide"
                                                            aria-label="3 of 4"
                                                            style={{
                                                                width: "calc(100%)",
                                                                height: "auto",
                                                                transform: "translateX(-200%)"
                                                            }}
                                                            aria-hidden="true"
                                                        >
                                                            <div className="client-testimonial-card">
                                                                <div className="client-testimonial-card-icon" />
                                                                <p className="client-testimonial-card-text">
                                                                    Omotive's expertise to detail made the Mymanu
                                                                    Airbuds interface innovative and user-friendly.
                                                                    Their understanding of our vision and commitment
                                                                    to human-centered design exceeded our
                                                                    expectations. I highly recommend Omotive for their
                                                                    creativity, technical skill, and user-focused
                                                                    approach. We look forward to future
                                                                    collaborations.
                                                                </p>
                                                                <div className="client-testimonial-card-footer">
                                                                    <div className="client-testimonial-card-user">
                                                                        <div className="client-testimonial-card-user-preview">
                                                                            <figure className="client-testimonial-meida">
                                                                                <img
                                                                                    width={70}
                                                                                    height={70}
                                                                                    alt="danny menu"
                                                                                    loading="lazy"
                                                                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea4_user-testimonial-3.png"
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
                                                                                Danny Manu
                                                                            </div>
                                                                            <div className="client-testimonial-card-user-designation">
                                                                                Founder &amp; CEO, Mymanu
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="splide__slide"
                                                            id="splide01-slide04"
                                                            role="group"
                                                            aria-roledescription="slide"
                                                            aria-label="4 of 4"
                                                            style={{
                                                                width: "calc(100%)",
                                                                height: "auto",
                                                                transform: "translateX(-300%)"
                                                            }}
                                                            aria-hidden="true"
                                                        >
                                                            <div className="client-testimonial-card">
                                                                <div className="client-testimonial-card-icon" />
                                                                <p className="client-testimonial-card-text">
                                                                    Mufidul is an exceptional product designer with
                                                                    passion to make something very unique. Through
                                                                    working with him we developed a great friendship.
                                                                    He has a firm grasp for the vision of the project
                                                                    and will take the initiative to see it flourish. I
                                                                    am excited to continue working with him into the
                                                                    future!
                                                                </p>
                                                                <div className="client-testimonial-card-footer">
                                                                    <div className="client-testimonial-card-user">
                                                                        <div className="client-testimonial-card-user-preview">
                                                                            <figure className="client-testimonial-meida">
                                                                                <img
                                                                                    width={70}
                                                                                    height={70}
                                                                                    alt="damien haris"
                                                                                    loading="lazy"
                                                                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea1_user-testimonial-4.png"
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
                                                                                Damien Harris
                                                                            </div>
                                                                            <div className="client-testimonial-card-user-designation">
                                                                                Enterprise Technology at Bloomberg L.P
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review_logo-wrapper display-flex">
                                        <a href="#" className="review_logo-link w-inline-block">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bdac8ba112bbfbf20b80f6_clutch-logo-c.svg"
                                                loading="lazy"
                                                alt="Clutch Logo"
                                            />
                                        </a>
                                        <a href="#" className="review_logo-link w-inline-block">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bdac8b568326871d738810_behance-logo.svg"
                                                loading="lazy"
                                                alt="Behance Logo"
                                            />
                                        </a>
                                        <a href="#" className="review_logo-link w-inline-block">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bdac8b08e1c7c513781dc9_medium-logo.svg"
                                                loading="lazy"
                                                alt="Medium Logo"
                                            />
                                        </a>
                                        <a href="#" className="review_logo-link w-inline-block">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bdac8bc99e57b02082b09a_dribbble-logo.svg"
                                                loading="lazy"
                                                alt="dribble logo"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    id="w-node-a3ba80a6-31fc-eed1-caaa-3754f599e440-05fab082"
                                    className="contact_right"
                                >
                                    <div className="contact_form-block w-form">
                                        <form
                                            id="wf-form-Contact-Form"
                                            name="wf-form-Contact-Form"
                                            data-name="Contact Form"
                                            method="get"
                                            className="contact_form display-vertical"
                                            data-wf-page-id="67bd67370ac28e0c05fab082"
                                            data-wf-element-id="249d2cd8-37f7-9057-fe81-0ac00ca0fc61"
                                            aria-label="Contact Form"
                                        >
                                            <div className="contact_form-inner-block display-flex">
                                                <div className="contact_form_field-wrapper">
                                                    <label
                                                        htmlFor="name"
                                                        className="contact_form_lebel body-l text-weight-medium"
                                                    >
                                                        Name or Company
                                                    </label>
                                                    <input
                                                        className="contact_form_field w-input"
                                                        maxLength={256}
                                                        name="name"
                                                        data-name="Name"
                                                        placeholder="Enter Name"
                                                        type="text"
                                                        id="name"
                                                    />
                                                </div>
                                                <div className="contact_form_field-wrapper">
                                                    <label
                                                        htmlFor="email"
                                                        className="contact_form_lebel body-l text-weight-medium"
                                                    >
                                                        Your Email*
                                                    </label>
                                                    <input
                                                        className="contact_form_field w-input"
                                                        maxLength={256}
                                                        name="email"
                                                        data-name="Email"
                                                        placeholder="Enter Email"
                                                        type="email"
                                                        id="email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="contact_form-inner-block">
                                                <label htmlFor="" className="contact_form_lebel">
                                                    I'm interested in*
                                                </label>
                                                <div
                                                    tf-custom-select-multiple=""
                                                    tf-custom-select-wrapper=""
                                                    className="position-relative"
                                                >
                                                    <select
                                                        id="Interested-In"
                                                        name="Interested-In"
                                                        data-name="Interested In"
                                                        required
                                                        multiple
                                                        tf-custom-select-input=""
                                                        className="contact_form_hidden-input w-select"
                                                        tabIndex={-1}
                                                    >
                                                        <option value="">Select multiple custom option</option>
                                                        <option value="App from scratch">
                                                            App from scratch
                                                        </option>
                                                        <option value="Branding">Branding</option>
                                                        <option value="Website design">Website design</option>
                                                        <option value="Webflow development">
                                                            Webflow development
                                                        </option>
                                                    </select>
                                                    <div className="contact_form_check-wrapper display-flex">
                                                        <button
                                                            type="button"
                                                            data-submit="ignore"
                                                            tf-custom-select-option-value="App from scratch"
                                                            className="contact_form_check display-flex is-center"
                                                        >
                                                            <div className="checkbox_icon" />
                                                            <div className="checkbox_label">App from scratch</div>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            data-submit="ignore"
                                                            tf-custom-select-option-value="Branding"
                                                            className="contact_form_check display-flex is-center"
                                                        >
                                                            <div className="checkbox_icon" />
                                                            <div className="checkbox_label">Branding</div>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            data-submit="ignore"
                                                            tf-custom-select-option-value="Website design"
                                                            className="contact_form_check display-flex is-center"
                                                        >
                                                            <div className="checkbox_icon" />
                                                            <div className="checkbox_label">Website design</div>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            data-submit="ignore"
                                                            tf-custom-select-option-value="Webflow development"
                                                            className="contact_form_check display-flex is-center"
                                                        >
                                                            <div className="checkbox_icon" />
                                                            <div className="checkbox_label">
                                                                Webflow development
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact_form-inner-block">
                                                <label htmlFor="" className="contact_form_lebel">
                                                    Project Budget*
                                                </label>
                                                <div
                                                    tf-custom-select-wrapper=""
                                                    className="position-relative"
                                                >
                                                    <input
                                                        className="contact_form_hidden-input w-input"
                                                        maxLength={256}
                                                        name="Project-Budget"
                                                        data-name="Project Budget"
                                                        placeholder="Project Budget"
                                                        tf-custom-select-input=""
                                                        type="text"
                                                        id="Project-Budget"
                                                        required
                                                        tabIndex={-1}
                                                    />
                                                    <div className="contact_form_check-wrapper display-flex">
                                                        <button
                                                            type="button"
                                                            data-submit="ignore"
                                                            tf-custom-select-option-value="$10K or Below"
                                                            className="contact_form_check display-flex is-center"
                                                        >
                                                            <div className="checkbox_icon" />
                                                            <div className="checkbox_label">$10K or Below</div>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            data-submit="ignore"
                                                            tf-custom-select-option-value="$20k-$30k"
                                                            className="contact_form_check display-flex is-center"
                                                        >
                                                            <div className="checkbox_icon" />
                                                            <div className="checkbox_label">$20k-$30k</div>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            data-submit="ignore"
                                                            tf-custom-select-option-value="20k-50k"
                                                            className="contact_form_check display-flex is-center"
                                                        >
                                                            <div className="checkbox_icon" />
                                                            <div className="checkbox_label">$30k-$50k+</div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact_form-inner-block">
                                                <label htmlFor="Message" className="contact_form_lebel">
                                                    Project details*
                                                </label>
                                                <textarea
                                                    placeholder="Write your project details here"
                                                    maxLength={5000}
                                                    id="Message"
                                                    name="Message"
                                                    data-name="Message"
                                                    className="contact_form_text_field w-input"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <input
                                                type="submit"
                                                data-wait="Please wait..."
                                                className="contact_form_button w-button"
                                                defaultValue="Submit"
                                            />
                                        </form>
                                        <div
                                            className="w-form-done"
                                            tabIndex={-1}
                                            role="region"
                                            aria-label="Contact Form success"
                                        >
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div
                                            className="w-form-fail"
                                            tabIndex={-1}
                                            role="region"
                                            aria-label="Contact Form failure"
                                        >
                                            <div>
                                                Oops! Something went wrong while submitting the form.
                                            </div>
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

export default Contact;
