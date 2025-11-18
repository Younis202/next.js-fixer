import { Link } from 'react-router-dom';

export default function Header() {
return (
<section className="css-130va89 e11y9y9c0">
    <div className="header-wrap">
        <div className="head-skinny-wrap">
            <section className="css-xedisy e1qv8zp50">
                <div className="navigation-head-skinny-wrap">
                    <div className="navigation-head"><button type="button" className="navigation-hamburger"
                            aria-label="Open main navigation"><svg viewBox="0 0 50 50" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-label="image with 3 lines representing menu"
                                role="img">
                                <path
                                    d="M16.25 18.625C16.25 18.3125 16.5234 18 16.875 18H33.125C33.4375 18 33.75 18.3125 33.75 18.625C33.75 18.9766 33.4375 19.25 33.125 19.25H16.875C16.5234 19.25 16.25 18.9766 16.25 18.625ZM16.25 24.875C16.25 24.5625 16.5234 24.25 16.875 24.25H33.125C33.4375 24.25 33.75 24.5625 33.75 24.875C33.75 25.2266 33.4375 25.5 33.125 25.5H16.875C16.5234 25.5 16.25 25.2266 16.25 24.875ZM33.125 31.75H16.875C16.5234 31.75 16.25 31.4766 16.25 31.125C16.25 30.8125 16.5234 30.5 16.875 30.5H33.125C33.4375 30.5 33.75 30.8125 33.75 31.125C33.75 31.4766 33.4375 31.75 33.125 31.75Z"
                                    fill="#153A5B"></path>
                            </svg></button>
                        <div className="main-navigation-wrap">
                            <nav className="main-navigation-links main-navigation-links-left" role="navigation"
                                aria-label="main navigation">
                                <ul>
                                    <li><button className="" aria-label="Bottles" tabIndex={0}
                                            role="button">Bottles</button></li>
                                    <li><button className="" aria-label="Pitchers" tabIndex={0}
                                            role="button">Pitchers</button></li>
                                    <li>
                                        <Link to="/shop">Shop all</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="navigation-logo">
                                <Link to="/" aria-label="LARQ Homepage">
                                    <svg width="85" height="20" viewBox="0 0 85 20"
                                fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Larq logo" role="img">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M74.7998 16.9523C71.0144 16.9523 67.8164 13.6743 67.8164 9.79426C67.8164 5.91404 71.0144 2.63602 74.7998 2.63602C78.5852 2.63602 81.7831 5.91404 81.7831 9.79426C81.7831 11.2661 81.3218 12.6507 80.5439 13.8033L78.4165 11.642L76.6477 13.4391L78.7948 15.6206C77.654 16.4549 76.272 16.9523 74.7998 16.9523ZM84.7023 18.0283L82.5766 15.8685C83.9015 14.2143 84.6865 12.1116 84.6865 9.79426C84.6865 4.33536 80.3436 0.0597534 74.7998 0.0597534C69.2556 0.0597534 64.9127 4.33536 64.9127 9.79426C64.9127 15.2529 69.2556 19.5288 74.7998 19.5288C77.0548 19.5288 79.1111 18.8211 80.7572 17.6143L82.9335 19.8255L84.7023 18.0283Z"
                                    fill="#153A5B"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M0.669189 19.1244V0.462435H3.3895V16.5479H14.4834V19.1244H0.669189Z"
                                    fill="#153A5B"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M46.914 10.3998H52.6442C55.633 10.3998 56.6933 8.41762 56.6933 6.7196C56.6933 5.0218 55.633 3.0396 52.6442 3.0396H46.914V10.3998ZM55.8915 19.1244L51.8878 12.977H46.914V19.1244H44.1937V0.462457H52.9192C56.8037 0.462457 59.4137 2.97674 59.4137 6.7196C59.4137 9.23828 57.7643 11.3851 55.2114 12.188L54.6711 12.3583L59.339 19.1244H55.8915Z"
                                    fill="#153A5B"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M24.3447 0.462457L17.6387 19.1244H20.7672L22.3519 14.7856H30.8814L32.4658 19.1244H35.5945L28.8885 0.462457H24.3447ZM26.6166 4.68956L29.9213 12.4511H23.3119L26.6166 4.68956Z"
                                    fill="#153A5B"></path>
                            </svg>
                                </Link>
                        </div>
                        <div className="main-navigation-wrap">
                            <nav className="main-navigation-links main-navigation-links-right" role="navigation"
                                aria-label="main navigation">
                                <ul>
                                    <li><button className="" aria-label="PureVis Technology" tabIndex={0}
                                            role="button">PureVis™ Technology</button></li>
                                    <li><button className="" aria-label="Giving Back" tabIndex={0}
                                            role="button">Giving Back</button></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="navigation-store-locator"><button className="" aria-label="Find a Store"
                                tabIndex={0} role="button"><svg width="20" height="20" viewBox="0 0 20 20"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="location pin map icon"
                                    role="img">
                                    <path
                                        d="M10.0014 19.0404L9.64478 18.8337C9.32695 18.6504 5.83398 16.6504 4.01395 14.3437C1.66726 11.4004 1.35059 8.60372 1.35059 6.68372C1.35059 3.73539 3.72059 1.35039 6.64893 1.35039C8.30226 1.35039 9.76893 2.12039 10.6673 3.36706C10.9339 3.75706 11.5173 3.75706 11.784 3.36706C12.6823 2.11873 14.149 1.35039 15.8023 1.35039C18.7306 1.35039 21.1006 3.73539 21.1006 6.68372C21.1006 8.60372 20.784 11.4004 18.4373 14.3454C16.6173 16.652 13.1223 18.652 12.8056 18.8337L12.449 19.0404C11.6823 19.4687 10.7673 19.4687 10.0006 19.0404H10.0014ZM6.64893 2.66706C4.4506 2.66706 2.66726 4.46706 2.66726 6.68372C2.66726 8.43539 2.95059 10.9021 5.01726 13.5104C6.51726 15.427 9.42559 17.1771 10.4356 17.7871C10.9006 18.0537 11.5506 18.0537 12.0173 17.7871C13.0256 17.1787 15.9356 15.427 17.4356 13.5104C19.5023 10.9021 19.7856 8.43539 19.7856 6.68372C19.7856 4.46706 18.0023 2.66706 15.8039 2.66706C14.5156 2.66706 13.3323 3.30206 12.6356 4.38539C11.8673 5.58539 10.584 5.58539 9.81562 4.38539C9.11895 3.30206 7.93562 2.66706 6.64728 2.66706H6.64893Z"
                                        fill="#153A5B" stroke="#153A5B" strokeWidth="0.3"></path>
                                </svg></button></div>
                        <div className="navigation-icons"><button className="" aria-label="Login" tabIndex={0}
                                role="button"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" aria-label="user account icon" role="img">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M10 0C12.6766 0 14.8462 2.14765 14.8462 4.79698V7.30353C14.8462 9.95287 12.6766 12.1005 10 12.1005C7.3234 12.1005 5.15385 9.95287 5.15385 7.30353V4.79698C5.15385 2.14765 7.3234 0 10 0ZM10 1.45381C8.13908 1.45381 6.63077 2.94758 6.63077 4.79698V7.30353C6.63077 9.15293 8.13908 10.6467 10 10.6467C11.8609 10.6467 13.3692 9.15293 13.3692 7.30353V4.79698C13.3692 2.94758 11.8609 1.45381 10 1.45381Z"
                                        fill="#153A5B" stroke="#153A5B" strokeWidth="0.5"></path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M0.738574 18.1533C0.738574 18.5548 1.06396 18.8802 1.46549 18.8802H18.5352C18.9367 18.8802 19.2621 18.5548 19.2621 18.1533V17.4878C19.2621 15.6384 18.527 13.8649 17.2217 12.5596C15.9164 11.2543 14.1429 10.5192 12.2935 10.5192H7.70694C5.8575 10.5192 4.08402 11.2543 2.77874 12.5596C1.47345 13.8649 0.738574 15.6384 0.738574 17.4878V18.1533ZM7.70694 11.9731C6.24253 11.9731 4.83793 12.5544 3.80693 13.5854C2.77593 14.6164 2.19464 16.021 2.19464 17.4854V17.4264H17.8061V17.4854C17.8061 16.021 17.2248 14.6164 16.1938 13.5854C15.1628 12.5544 13.7582 11.9731 12.2938 11.9731H7.70694Z"
                                        fill="#153A5B" stroke="#153A5B" strokeWidth="0.5"></path>
                                </svg></button><button className="" aria-label="Open mini cart" tabIndex={0}
                                role="button"><svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" aria-label="shopping bag icon" role="img">
                                    <path
                                        d="M16.0527 20.4785H4.94655C2.58322 20.4785 0.666016 18.5618 0.666016 16.1985V12.8518C0.666016 11.6618 1.09768 10.5352 1.88268 9.66516C2.66768 8.79516 3.73435 8.26516 4.91768 8.17683V6.19683C4.91768 3.34516 7.24768 1.01516 10.0993 1.01516H10.8993C13.751 1.01516 16.081 3.34516 16.081 6.19683V8.17683C17.2643 8.26516 18.331 8.7935 19.116 9.66516C19.901 10.5368 20.3327 11.6618 20.3327 12.8518V16.1985C20.3327 18.5618 18.416 20.4785 16.0527 20.4785ZM10.0993 2.4485C8.03935 2.4485 6.35101 4.13683 6.35101 6.19683V8.08516H14.6477V6.19683C14.6477 4.13683 12.9593 2.4485 10.8993 2.4485H10.0993ZM4.94768 9.51683C2.99768 9.51683 1.90935 10.8652 1.90935 12.8518V16.1985C1.90935 17.7685 3.37768 19.0368 4.94768 19.0368H16.0543C17.6243 19.0368 18.8927 17.5685 18.8927 16.1985V12.8518C18.8927 10.8652 17.8043 9.51683 15.8543 9.51683H4.94768Z"
                                        fill="#153A5B"></path>
                                </svg><span className="navigation-count-badge">0</span></button></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</section>
)
}
