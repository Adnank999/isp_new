import NetBandAccordion from "@/components/NetBandAccordion";
import Pricing from "@/components/Pricing";
import ProgressBar from "@/components/ProgressBar";
import Service1 from "@/components/Service";
import BrandSlider from "@/components/slider/BrandSlider";
import Home1 from "@/components/slider/Home1";
import MovieSlider from "@/components/slider/MovieSlider";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout header={2} footer={2}>
      {/*<< Hero Section Start >>*/}
      <Home1 />
      {/*<< Network Solutions Section Start >>*/}
      <section className="network-solution-section section-padding fix pt-10">
        <div className="container custom-container-2">
          <div className="network-solution-wrapper">
            <div className="section-title text-center">
              <span className="wow fadeInUp">Best Network</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Find Perfect Network <br />
                Solutions
              </h2>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-connection" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Corporate Internet</Link>
                    </h4>
                    <p>Latency free and lightning-fast upload & download.</p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-signal" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Home Internet</Link>
                    </h4>
                    <p>Nonstop fast, uninterrupted access to online 24/7.</p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-server" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Freelancers</Link>
                    </h4>
                    <p>
                      Stable, high-speed video calls and cloud access with no
                      interruptions.
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-satellite-dish" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Gamers</Link>
                    </h4>
                    <p>Low-latency and lightning-fast response times.</p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< About Section Start >>*/}
      {/* <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="circle-shape">
                    <img
                      src="assets/img/about/circle.png"
                      alt="img"
                      className="text-circle"
                    />
                    <div className="award-img">
                      <img src="assets/img/about/award.png" alt="img" />
                    </div>
                  </div>
                  <div className="border-shape">
                    <img
                      src="assets/img/about/border-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div
                    className="about-image bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/about.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img src="assets/img/about/about-2.jpg" alt="about-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      About Cherry Enterprise
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Why Everybody is Using CherryInternet?
                    </h2>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    To enjoy non-stop connectivity without worrying about data
                    caps. Our network is built to deliver consistent performance
                    no matter how many devices you’re using.
                  </p>
                  <div className="circle-progress-bar-wrapper">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <ProgressBar value={90} />
                      <div className="content">
                        <h6>
                          Client Retention <br />
                        </h6>
                      </div>
                    </div>
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <ProgressBar value={100} />
                      <div className="content">
                        <h6>Modern Technology</h6>
                      </div>
                    </div>
                  </div>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                    <li>
                      <i className="far fa-check me-2" />
                      Bufferless video call
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Nonstop social media scrolls
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      24/7 support
                    </li>
                  </ul>
                  <div className="about-author">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <Link href="about" className="theme-btn">
                        <span>
                          Explore more about
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}
      {/*<< Movie Section Start >>*/}
      {/* <section className="movie-section movie-bg">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <span className="text-white wow fadeInUp">What’s new</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Popular Tv show Sports <br />
              &amp; Live Streaming
            </h2>
          </div>
          <MovieSlider />
        </div>
      </section> */}
      {/*<< Marque Studies Start >>*/}
      {/* <div className="marque-section section-padding pt-0 mt-5">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {/*<< Service Section Start >>*/}
      {/* <Service1 /> */}

      {/*<< Cta Banner Section Start >>*/}
      {/* <section
        className="cta-banner-section bg-cover section-padding"
        style={{ backgroundImage: 'url("assets/img/banner/02.jpg")' }}
      >
        <div className="container">
          <div className="cta-banner-wrapper section-padding pt-0">
            <div className="section-title mb-0">
              <span className="text-white wow fadeInUp">
                Subscribe Nextflix Tv
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Enjoy Sports Movies, TV Shows &amp; More.
                <br />
                Please Call :{" "}
                <a href="tel:123884400" className="text-white">
                  (123) 884400
                </a>
              </h2>
            </div>
            <Link
              href="service"
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                View All Services
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section> */}
      {/*<< Feature Icon Box Section Start >>*/}
      {/* <section className="feature-icon-box-area">
        <div className="container">
          <div className="feature-icon-box-wrapper">
            <div className="row g-4">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-tv-box-1" />
                  </div>
                  <div className="content">
                    <h3>Smart TV Box</h3>
                    <p>200+ entertainment channels for different age groups</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon-box-items active">
                  <div className="icon">
                    <i className="flaticon-smartphone" />
                  </div>
                  <div className="content">
                    <h3>Mobile connection</h3>
                    <p>Use our router to stay online on all your devices.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-wifi-router-2" />
                  </div>
                  <div className="content">
                    <h3>Wifi internet</h3>
                    <p>
                      High-speed Internet access that is always on &amp; fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*<< Cta Subscribe Section Start >>*/}
      <section className="trusted-client-section fix section-padding">
        <div className="container custom-container-2">
          <div className="cta-subscribe-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div className="cta-subscribe-image">
                  <img src="assets/img/about/aboutTv.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-md-0">
                <div className="cta-subscribe-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">Immersive experience</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Enjoy Bufferless Youtube <br /> TV Shows &amp; More
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Real-time internet with low ping is the backbone of a
                    seamless digital experience, ensuring smooth interactions
                    across gaming, streaming, video conferencing, and other
                    online activities. A low ping—or low latency—means minimal
                    delay between a user's action and the system's response,
                    creating an instantaneous and uninterrupted experience.
                  </p>
                  <h4
                    className="cta-sub-title wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <span>Pick the broadband plan </span> <br />
                    that matches your needs
                  </h4>
                  <div className="subscribe-plan">
                    <h3 className="price wow fadeInUp" data-wow-delay=".5s">
                      <span>starts only</span> ৳500<sub>/Mon</sub>
                    </h3>
                    <Link
                      href="pricing"
                      className="link-btn style-2 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <span>View All Plans</span>{" "}
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<< Brand Section Start >>*/}
      <section className="brand-section fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
              1K+ BRANDS TRUST US
            </h6>
            <BrandSlider />
          </div>
        </div>
      </section>
      {/*<< Team Section Start >>*/}
      {/* <section className="team-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">our members</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Meet With Our Fantastic <br />
              Support Team
            </h2>
          </div>
          <div className="team-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/01.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Leslie Alexander</Link>
                    </h4>
                    <p>Support Enginner</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/02.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Alexander Sandro</Link>
                    </h4>
                    <p>Team Leader</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/03.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Devid Jackson</Link>
                    </h4>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/04.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Jack Miller</Link>
                    </h4>
                    <p>Development</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-7 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-team-items">
                  <div className="team-join-content text-center">
                    <div className="circle-shape">
                      <img
                        src="assets/img/team/circle-shape.png"
                        alt="shape-img"
                      />
                    </div>
                    <div className="dot-shape">
                      <img
                        src="assets/img/team/dot-shape.png"
                        alt="shape-img"
                      />
                    </div>
                    <h2>
                      JOIN OUR <span>TEAM</span>
                    </h2>
                    <h3>98+ Member</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-1" />
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/04.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Sutton Tanner</Link>
                    </h4>
                    <p>Support Enginner</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/05.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Leslie Braxton</Link>
                    </h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*<< Pricing Section Start >>*/}
      <Pricing />

      {/*<< Product Section Start >>*/}
      {/* <section className="product-section fix section-padding pt-0">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title">
              <span className="wow fadeInUp">Top Sales</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Our Top Products
              </h2>
            </div>
            <Link href="shop" className="theme-btn">
              <span>
                More Products <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/01.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Archer Router <br /> for Home
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/02.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Smart TV Box <br /> for Home
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/03.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Virtual Reality <br /> Helmet
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/04.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Camera Gear 360 <br /> for Home
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*<< Cta Parallax Section Start >>*/}
      <div
        className="cta-parallax-section bg-cover"
        style={{ backgroundImage: 'url("assets/img/paralax.jpg")' }}
      >
        <div className="container">
          <div className="cta-parallax-wrapper text-center">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              How to Get Connections? Call us or fill out the connection request
              form.
            </h2>
            <div className="button-items">
              <Link
                href="pricing"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>
                  Get Connection Now <i className="fas fa-chevron-right" />
                </span>
              </Link>
              <span className="or">or</span>
              <a
                href="tel:+1718-904-4450"
                className="theme-btn bg-white wow fadeInUp"
                data-wow-delay=".7s"
              >
                <span>
                  +09613338833 <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<< Counter Section Start >>*/}
      <section className="counter-section">
        <div className="container">
          <div className="counter-wrapper">
            <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
              <h2>
                <span className="count">10</span>+
              </h2>
              <p>
                YEARS OF <br />
                EXPERIENCE
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
              <h2>
                <span className="count">1000+</span>
              </h2>
              <p>
                CLIENTS <br />
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
              <h2>
                <span className="count">90%</span>
              </h2>
              <p>
                Clients <br />
                Rentention
              </p>
            </div>
            {/* <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
              <h2>
                <span className="count">991</span>
              </h2>
              <p>
                SATELLITE <br />
                CHANNELS
              </p>
            </div> */}
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      {/* <section className="testimonial-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">trusted clients feedback</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Why Is Everyone Choosing
              <br />
              Cherry Internet?
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section> */}
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding">
        <div className="faq-image">
          <img src="assets/img/faq.png" alt="img" />
        </div>
        <div className="faq-shape">
          <img src="assets/img/faq-shape-1.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      Our question &amp; answer
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Have Any Questions About <br />
                      Our Cherry Enterprise?
                    </h2>
                  </div>
                  <div className="faq-accordion mt-4 mt-md-0">
                    <NetBandAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section Start */}
      {/* <section className="news-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">news &amp; blog</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              update news &amp; blog
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details">
                      Children Loves the Cartoons And Our New Channels
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Network
                    </li>
                    <li>
                      <i className="fal fa-user" />
                      Admin
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      June 25, 2024
                    </li>
                  </ul>
                  <p>
                    These agencies specialize leveraging various digital
                    channels, such as social media
                  </p>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details">
                      Broadband May Disconnect in July Cause of Electricity
                      Issues
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Network
                    </li>
                    <li>
                      <i className="fal fa-user" />
                      Admin
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      June 25, 2024
                    </li>
                  </ul>
                  <p>
                    These agencies specialize leveraging various digital
                    channels, such as social media
                  </p>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details">
                      We Newly Added Some International Comedy Channels
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Network
                    </li>
                    <li>
                      <i className="fal fa-user" />
                      Admin
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      June 25, 2024
                    </li>
                  </ul>
                  <p>
                    These agencies specialize leveraging various digital
                    channels, such as social media
                  </p>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </NetBandLayout>
  );
};
export default page;
