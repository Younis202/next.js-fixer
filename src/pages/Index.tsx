import React from 'react';
import { useWebflowScripts } from '@/hooks/useWebflowScripts';


// ============================================================
// DATA CONFIGURATIONS
// ============================================================

const CLIENT_LOGOS = [
  {
    src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67adab7f109ea0ce63c3ff5f_nas-house.svg',
    alt: ''
  },
  {
    src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b429026535397fbda12509_mymenu-logo.svg',
    alt: 'My Menu logo'
  },
  {
    src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4291146efe5712ec684cf_nasdaily-logo.svg',
    alt: 'Nasdaily logo'
  },
  {
    src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f12e3eb736dc8ba34f988_exitstack-logo.svg',
    alt: ''
  },
  {
    src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4296a18fbfc438e57163f_nastravel-logo.svg',
    alt: 'Nastravel Logo'
  },
  {
    src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42978d5f25f6f99420436_reviewxpo-logo.svg',
    alt: 'Reviewxpo logo'
  },
  {
    src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42988a54127b5b18d2668_nassummit-log.svg',
    alt: 'nassummit logo'
  }
];

const HOME_PROJECTS = [
  {
    href: '/projects/omoskillo',
    imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b08fea00250a4417c8fe10_Omoskillo-website-mockup-low.webp',
    imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b08feb2550411c49ff62b2_Omoskillo-website-mockup-high.jpg',
    alt: 'omoskillo website mockup',
    title: 'Omoskillo',
    subtitle: 'Website design',
    isNegative: false
  },
  {
    href: '/projects/omostate',
    imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b096e2d2812e66e167f5ae_omostate-application-mockup-low.webp',
    imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b096e2eca50e5956c77842_omostate-application-mockup-high.jpg',
    alt: 'omoskillo website mockup',
    title: 'Omostate Real estate',
    subtitle: 'Application design',
    isNegative: true
  },
  {
    href: '/projects/omoskillo',
    imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b0976a39cf14b1edd4a611_omoskillo-app-design-mockup-low.webp',
    imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b0976bc569e1e4c9944a00_omoskillo-app-design-mockup-high.jpg',
    alt: 'omoskillo website mockup',
    title: 'Omoskillo E-learning',
    subtitle: 'App design',
    isNegative: false
  },
  {
    href: '#',
    imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b097fd5aa2c7918f1a89d0_mymenu-clickpro-mockup-low.webp',
    imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b097fda3b03ecab8bdce3b_mymenu-clickpro-mockup-high.jpg',
    alt: 'omoskillo website mockup',
    title: 'Mymanu clikpro',
    subtitle: 'Product design',
    isNegative: false
  }
];

const CORE_SERVICES = [
  {
    number: '01',
    title: 'Website & Branding',
    href: '/sevices/service-one',
    isActive: true,
    description: 'Experience <strong>responsive web design</strong>, <strong>custom branding packages</strong>, and<strong>user-centric website development</strong> tailored to your business goals.',
    imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b1f4e6d7d4e41d3a380f52_core-service-1-low.webp',
    imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b1f4e6db0bda26bd26cacd_core-service-1-high.jpg',
    dataWId: '8b01261a-02a7-00c6-a0f5-03418c16637e'
  },
  {
    number: '02',
    title: 'Mobile Apps',
    href: '/sevices/mobile-application-design',
    isActive: false,
    description: 'Delivering user-centric solutions that combine creativity with strategy to drive business growth',
    imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706942a9764c6d4d158f2_core-service-mobile-app-low.webp',
    imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70694bedede1779d8aa3c_core-service-mobile-app-high.jpg',
    dataWId: '74b1622e-a2d0-bbf4-0006-e83ceba3ac0f'
  },
  {
    number: '03',
    title: 'Web Application',
    href: '/sevices/web-application',
    isActive: false,
    description: 'Delivering user-centric solutions that combine creativity with strategy to drive business growth',
    imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706c08d1c3060ecb941c7_core-service-web-app-low.webp',
    imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706c06561d1219bf28746_core-service-web-app-high.jpg',
    dataWId: 'c364578e-4cd2-13a0-0ff5-fee5181e4bb7'
  },
  {
    number: '04',
    title: 'Webflow Developement',
    href: '/service-two',
    isActive: false,
    description: 'Delivering user-centric solutions that combine creativity with strategy to drive business growth',
    imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706f0f53741a37050423c_core-service-webflow-low.webp',
    imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706f0a79f0c901c03469c_core-service-webflow-high.jpg',
    dataWId: '4376dfb3-2db8-372e-be2f-c27aa1f8389c'
  }
];

const TESTIMONIALS_SET_1 = [
  {
    text: "Omotive Design Agency did an outstanding job designing the websites for Nassummit, Nashouse, Nastravel, and Nasdaily. The sites are intuitive, visually engaging, and perfectly aligned with our brand. Highly recommend!",
    authorImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b2fb3d53859433ab0046c6_nuseir-yassin.png',
    authorName: 'Nuseir Yassin',
    authorDesignation: 'Founder & CEO at Nas Company',
    authorAlt: 'Nasir Yassin',
    swiperClass: 'swiper-slide-active'
  },
  {
    text: "Was a pleasure working with Omotive on launching ExitStack.  They understood the vision and worked efficiently, with great communications, to execute it.  Looking forward to working with them again!",
    authorImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b306fbc1a90c60620ce1b6_Rahat%20Ahmed.png',
    authorName: 'Rahat Ahmed',
    authorDesignation: 'Founding CEO, Anchorless Bangladesh',
    authorAlt: 'Rahat Ahamed',
    swiperClass: 'swiper-slide-next'
  },
  {
    text: "Omotive's expertise to detail made the Mymanu Airbuds interface innovative and user-friendly. Their understanding of our vision and commitment to human-centered design exceeded our expectations. I highly recommend Omotive for their creativity, technical skill, and user-focused approach. We look forward to future collaborations.",
    authorImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b3073e37c5fce4f02305c9_danny-menu.png',
    authorName: 'Danny Manu',
    authorDesignation: 'Founder & CEO, mymanu',
    authorAlt: 'Danny Menu',
    swiperClass: ''
  }
];

const TESTIMONIALS_SET_2 = [
  {
    text: "Omotive design agency took the time to understand my industry. They knew what our visitors wanted, and they did an exceptional job to meet those needs. We've seen great improvements in impression and conversion after the redesign. I vouch for them!",
    authorImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4211329b6fc32d099d2b1_arifur-rahaman.png',
    authorName: 'Arifur Rahaman',
    authorDesignation: 'CEO at ReviewXpo',
    authorAlt: 'arifur rahaman ',
    swiperClass: 'swiper-slide-active'
  },
  {
    text: "Omotive has a structured process for UI/UX design. Their human centered design approach the key for us to collaborate. They delivered on their promises very well and was open to constructive feedback. Our project came out according to our expectations and I would recommend them for web design.",
    authorImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42131553bf680ce6418b6_Ishti-alam.png',
    authorName: 'Ishti Alam',
    authorDesignation: 'Investments at Anchorless Bangladesh',
    authorAlt: 'Ishti Alam',
    swiperClass: 'swiper-slide-next'
  },
  {
    text: "Mufidul is an exceptional product designer with passion to make something very unique. Through working with him we developed a great friendship. He has a firm grasp for the vision of the project and will take the initiative to see it flourish. I am excited to continue working with him into the future!",
    authorImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67cfe710ff85e927f4fb2fa3_damien-haris.png',
    authorName: 'Damien Harris',
    authorDesignation: 'Enterprise Technology at Bloomberg L.P',
    authorAlt: '',
    swiperClass: ''
  }
];

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none" className="testimonail_icon">
    <g opacity="0.8">
      <path
        d="M9.18681 1.14286C9.18681 0.511675 8.67514 0 8.04396 0H1.14286C0.511675 0 0 0.511676 0 1.14286V8.1203C0 8.75148 0.511675 9.26316 1.14286 9.26316H3.16862C4.01655 9.26316 4.5692 10.1541 4.1925 10.9137L2.48882 14.3494C2.11212 15.1091 2.66477 16 3.5127 16H5.18021C5.59178 16 5.97157 15.7787 6.1745 15.4206L9.03825 10.3674C9.13563 10.1956 9.18681 10.0014 9.18681 9.80394V1.14286Z"
        fill="currentColor"
      />
      <path
        d="M21.7143 1.14286C21.7143 0.511675 21.2026 0 20.5714 0H13.6703C13.0391 0 12.5275 0.511676 12.5275 1.14286V8.1203C12.5275 8.75148 13.0391 9.26316 13.6703 9.26316H15.6961C16.544 9.26316 17.0967 10.1541 16.72 10.9137L15.0163 14.3494C14.6396 15.1091 15.1922 16 16.0402 16H17.7077C18.1193 16 18.499 15.7787 18.702 15.4206L21.5657 10.3674C21.6631 10.1956 21.7143 10.0014 21.7143 9.80394V1.14286Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
    <path
      d="M12.129 9.9165L3 9.9165L3 8.4165L12.129 8.4165L8.106 4.3935L9.1665 3.333L15 9.1665L9.1665 15L8.106 13.9395L12.129 9.9165Z"
      fill="currentColor"
    />
  </svg>
);

const ClientLogo = ({ src, alt }) => (
  <div className="client-logo_wrap">
    <img src={src} loading="lazy" alt={alt} />
  </div>
);

const ProjectItem = ({ href, imageLow, imageHigh, alt, title, subtitle, isNegative }) => {
  const content = (
    <div className="project_single-item">
      <a href={href} className="project_figure position-relative overflow-hidden w-inline-block">
        <img
          className="cover-image"
          src={imageLow}
          data-lazy-src={imageHigh}
          alt={alt}
          width={614}
          height={576}
          loading="lazy"
          fetchPriority="low"
          decoding="async"
        />
      </a>
      <div className="project_content">
        <h3 className="heading-style-h2">
          <div className="display-inline">{title} </div>
          <div className="display-inline text-style-secondary-font">{subtitle}</div>
        </h3>
        <div
          className="is-magnatic"
          style={{
            willChange: "transform",
            transform: "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        >
          <a href={href} className="button w-inline-block is-secondary">
            <div>View case study</div>
            <div className="button-hover-bg-two" />
          </a>
        </div>
      </div>
    </div>
  );

  return isNegative ? <div className="project_item-negative">{content}</div> : content;
};

const CoreServiceLink = ({ number, title, href, isActive }) => (
  <a
    href={href}
    className={`core-service_link${isActive ? ' is-active' : ''} w-inline-block display-flex position-relative`}
  >
    <div className="core-service_content display-flex is-left">
      <div className="heading-style-h3">{number}</div>
      <h3 className="heading-style-h2">{title}</h3>
    </div>
    <div className="core-service_icon display-flex is-center">
      <ArrowIcon />
    </div>
    <div className="core-service-border position-absolute" />
  </a>
);

const CoreServiceFigure = ({ imageLow, imageHigh, isActive }) => (
  <figure className={`core-service_figure${isActive ? ' is-active' : ''} position-relative overflow-hidden`}>
    <img
      className="cover-image"
      src={imageLow}
      data-lazy-src={imageHigh}
      alt=""
      width={388}
      height={243}
      loading="lazy"
      fetchPriority="low"
      decoding="async"
    />
  </figure>
);

const CoreServiceContent = ({ title, description, href, isActive, dataWId }) => (
  <div className={`core-service_right_content${isActive ? ' is-active' : ''}`}>
    <h3 className="heading-style-h2 text-color-alternate">{title}</h3>
    <p className="core-service_text body-l" dangerouslySetInnerHTML={{ __html: description }} />
    <div
      className="is-magnatic"
      style={{
        willChange: "transform",
        transform: "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d"
      }}
    >
      <a
        data-w-id={dataWId}
        href={href}
        className="footer_social-link is-service w-inline-block"
      >
        <div>Learn More</div>
        <div className="footer_social-overlay" />
        <div
          style={{
            transform: "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
          className="button-hover-bg"
        />
      </a>
    </div>
  </div>
);

const TestimonialItem = ({ text, authorImage, authorName, authorDesignation, authorAlt, swiperClass }) => (
  <div
    className={`swiper-slide${swiperClass ? ` ${swiperClass}` : ''}`}
    role="group"
    style={{ width: 408, marginRight: 24 }}
  >
    <div className="testimonail_item is-dark">
      <div className="testimonail_content">
        <QuoteIcon />
        <p className="testimonail_text">{text}</p>
      </div>
      <div className="testimonail_author">
        <img
          src={authorImage}
          loading="lazy"
          alt={authorAlt}
          className="testimonail_author-image"
        />
        <div className="testimonail_author-content">
          <div className="testimonail_author_name body-l">{authorName}</div>
          <div className="testimonail_author_designation">{authorDesignation}</div>
        </div>
      </div>
    </div>
  </div>
);

// ============================================================
// MAIN COMPONENT
// ============================================================

const Index = () => {
  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        {/* Header Section */}
        <header id="header" className="section_home-header">
          <div className="padding-global padding-xxlarge">
            <div className="container-large">
              <div className="header_component">
                <div className="header_content">
                  <div className="header_content_right">
                    <div className="clutch-badge">
                      <div>5.0 rating on</div>
                      <a
                        href="https://clutch.co/profile/omotive#highlights"
                        target="_blank"
                        className="clutch-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67ad9ed90e735bf1e8fe9095_clutch_logo.svg.svg"
                          loading="eager"
                          width={50}
                          height={14}
                          alt="clutch icon"
                        />
                      </a>
                    </div>
                    <h1 className="home-header_title">
                      <div className="display-inline">
                        AI+UI Design Services<span className="br"> </span>to
                      </div>
                      <div className="display-inline text-style-secondary-font">
                        <span> </span>grow your business
                      </div>
                    </h1>
                  </div>
                  <div className="home-header_content-inner display-vertical is-left">
                    <p className="text-size-large">
                      Struggling to turn design into revenue? <br />
                      We craft UI/UX solutions that deliver millions in business growth.
                    </p>
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
                        href="/book-a-call"
                        className="button is-small w-inline-block is-gradient"
                      >
                        <div className="button-text">Book a free call</div>
                        <div
                          className="button-hover-bg"
                          style={{
                            transform: "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="home-header_lightbox w-inline-block w-lightbox"
                  aria-label="open lightbox"
                  aria-haspopup="dialog"
                >
                  <figure className="header_media position-relative overflow-hidden">
                    <video
                      autoPlay={true}
                      loop={true}
                      muted={true}
                      playsInline={true}
                      poster="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/68e738b4941759e4f6bbd513_Screenshot%202025-10-09%20at%2012.22.24%E2%80%AFAM.avif"
                      className="cover-image"
                    >
                      <source
                        data-src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/68e94d717e0e3c2bd466c76f_banner-showreel.webm"
                        type="video/webm"
                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/68e94d717e0e3c2bd466c76f_banner-showreel.webm"
                      />
                      <source
                        data-src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/68e94d714ee010ce2010de44_banner-showreel.mp4"
                        type="video/mp4"
                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/68e94d714ee010ce2010de44_banner-showreel.mp4"
                      />
                    </video>
                  </figure>
                  <div
                    className="position-absolute is-magnatic"
                    style={{
                      willChange: "transform",
                      transform: "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <button
                      data-w-id="567be1f6-53e5-a0f8-4878-36669bd1dc8f"
                      type="button"
                      className="home-header_lightbox_button button"
                    >
                      <div className="button-text">PLAY REEL</div>
                      <div
                        style={{
                          transform: "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                        className="button-hover-bg"
                      />
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Client Logos Section */}
        <section className="section_client-logos overflow-hidden">
          <div className="padding-global padding-xlarge">
            <div className="container-large">
              <div className="client-logos_component">
                {CLIENT_LOGOS.map((logo, index) => (
                  <ClientLogo key={index} {...logo} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Home Projects Section */}
        <section className="section_home-projects">
          <div className="padding-global padding-section">
            <div className="container-large">
              <div className="section_header">
                <h2 className="section_title heading-style-h1">
                  Our solutions<span className="br"> </span>are{" "}
                  <span className="text-style-secondary-font">making $millions</span>
                </h2>
              </div>
              <div className="home-project_grid">
                {HOME_PROJECTS.map((project, index) => (
                  <ProjectItem key={index} {...project} />
                ))}
              </div>
              <div className="margin-top margin-xlarge">
                <div className="display-flex is-center">
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
                      href="/projects"
                      className="button is-small w-inline-block"
                    >
                      <div className="button-text">View all work</div>
                      <div
                        className="button-hover-bg"
                        style={{
                          transform: "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Section (Core Services & Testimonials) */}
        <section className="section_dark">
          {/* Core Services Section */}
          <section className="section_core-service">
            <div className="padding-global padding-section is-top-0">
              <div className="container-large">
                <div className="section_header is-center">
                  <h2 className="section_title heading-style-h1 text-color-alternate">
                    Core <span className="text-style-secondary-font">Services</span>
                  </h2>
                </div>
                <div className="core-service_grid">
                  <div className="core-service_left display-vertical is-left">
                    {CORE_SERVICES.map((service, index) => (
                      <CoreServiceLink key={index} {...service} />
                    ))}
                  </div>
                  <div
                    id="w-node-_5e8c2d7b-72f2-7980-36ac-aae6922ec255-42cbb208"
                    className="core-service_right display-vertical"
                  >
                    <div className="core-service_media">
                      {CORE_SERVICES.map((service, index) => (
                        <CoreServiceFigure key={index} {...service} />
                      ))}
                    </div>
                    <div className="core-service_right_content-wrap">
                      {CORE_SERVICES.map((service, index) => (
                        <CoreServiceContent key={index} {...service} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="section_testimonial overflow-hidden">
            <div className="padding-global">
              <div className="container-large">
                <div className="section_header is-center">
                  <h2 className="section_title heading-style-h1 text-color-alternate">
                    Loved by <span className="text-style-secondary-font">Hundreds</span>
                  </h2>
                </div>
                <div className="testimonail_grid">
                  {/* First Testimonial Swiper */}
                  <div className="testimonial-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div
                      className="swiper-wrapper"
                      id="swiper-wrapper-886eb78f1a1756d1"
                      aria-live="polite"
                    >
                      {TESTIMONIALS_SET_1.map((testimonial, index) => (
                        <TestimonialItem
                          key={index}
                          {...testimonial}
                          aria-label={`${index + 1} / 3`}
                        />
                      ))}
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                  </div>

                  {/* Second Testimonial Swiper (Hide on Tablet) */}
                  <div className="testimonial-swiper hide-tablet swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div
                      className="swiper-wrapper"
                      id="swiper-wrapper-29faa469f5f11f16"
                      aria-live="polite"
                    >
                      {TESTIMONIALS_SET_2.map((testimonial, index) => (
                        <TestimonialItem
                          key={index}
                          {...testimonial}
                          aria-label={`${index + 1} / 3`}
                        />
                      ))}
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Background Images */}
          <picture className="bg-absolute-shape">
            <source
              srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b31c19114d5e14877eb4c4_dark-section-bg-high-mobile.png"
              media="(max-width: 375px)"
            />
            <img
              className="cover-image"
              src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b31d0fa5f73003e7a9cff0_dark-section-bg-low-desktop.webp"
              data-lazy-src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b31cc3d36dc4f7094900a2_dark-section-bg-high-dekstop.png"
              alt=""
              width="100%"
              height="100%"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
            />
          </picture>
          <img
            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b32472eff2002c12ff78b7_dark-section-pattern.png"
            loading="lazy"
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b32472eff2002c12ff78b7_dark-section-pattern-p-500.png 500w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b32472eff2002c12ff78b7_dark-section-pattern-p-800.png 800w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b32472eff2002c12ff78b7_dark-section-pattern-p-1080.png 1080w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b32472eff2002c12ff78b7_dark-section-pattern.png 1440w"
            alt=""
            className="dark_bg-pattern"
          />
        </section>

        {/* Booking Section */}
        <section className="section_articles">
          <div className="padding-global padding-section">
            <div className="container-large">
              <div className="section_header is-center">
                <h2 className="section_title heading-style-h1">
                  <span className="text-style-secondary-font">Book a free</span> Call{" "}
                </h2>
              </div>
              <div className="booking-embed">
                <div className="code-embed w-embed w-script">
                  <div
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    id="my-cal-inline-30min"
                    className="cal-inline-container"
                  >
                    <div
                      data-theme="light"
                      data-layout="month_view"
                      style={{
                        maxHeight: "inherit",
                        height: "inherit",
                        minHeight: "inherit",
                        display: "flex",
                        position: "relative",
                        flexWrap: "wrap",
                        width: "100%"
                      }}
                      className="cal-element-embed-light"
                    >
                      <iframe
                        className="cal-embed"
                        name="cal-embed=30min"
                        title="Book a call"
                        data-cal-link="mufidul-tapadar-nwmykh/30min"
                        allow="payment"
                        src="https://app.cal.com/mufidul-tapadar-nwmykh/30min/embed?embed=30min&layout=month_view&theme=light&embedType=inline"
                        style={{ height: 570, width: "100%" }}
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
                        `
                      }}
                    />
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

export default Index;