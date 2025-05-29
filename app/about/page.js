import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import ManageItSection from "@/components/ManageItSection";
import ProgressBar from "@/components/ProgressBar";
import BrandSlider from "@/components/slider/BrandSlider";
import NewsSlider from "@/components/slider/NewsSlider";
import { TestimonialSlider4 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout header={2} footer={2}>
      {/* <Breadcrumb pageTitle={"about us"} /> */}
      {/*<< About Section Start >>*/}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-8">
                <div className="about-image-items big-image">
                  <div
                    className="about-image bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/about.png")',
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0">
                <div className="mt-5">
                  <h2>Who We Are</h2>
                  <p className="pt-2">
                    We proudly stand as the nation's largest and #1 fiber
                    broadband internet service provider, as recognized by APNIC.
                    Our aim is to ensure high-speed, reliable internet for the
                    whole nation, bridging connectivity gaps even in
                    fiber-inaccessible regions. With our legacy of trust, we
                    empower individuals, businesses, and communities to flourish
                    in today's digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Service Section Start >>*/}
      <section className="service-section-3 fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">our fucusable services</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              How we help you <br />
              to Enjoy non-stop internet with no bounds
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-wifi-router-5" />
                </div>
                <div className="content">
                  <h3>Broadband</h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  {/* <Link href="service-details" className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-box-items ">
                <div className="icon">
                  <i className="flaticon-wi-fi" />
                </div>
                <div className="content">
                  <h3>WIFI Internet</h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  {/* <Link href="service-details" className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-satellite-tv" />
                </div>
                <div className="content">
                  <h3>Low Latency</h3>
                  <p>We offer low latency internet services 24/7</p>
                  {/* <Link href="service-details" className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-tv-box" />
                </div>
                <div className="content">
                  <h3>Upstream</h3>
                  <p>Our upstream services quality is better than others</p>
                  {/* <Link href="service-details" className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Manage It Section Start >>*/}
      {/* <ManageItSection /> */}
      {/* Home section included  */}

      <section className="trusted-client-section fix section-padding">
        <div className="container custom-container-2">
          <div className="cta-subscribe-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="cta-subscribe-image">
                  <img src="assets/img/feature/trusted.jpg" alt="img" />
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

      {/*<< Cta Parallax Section Start >>*/}
      <div
        className="cta-parallax-section bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/02.jpg")' }}
      >
        <div className="container">
          <div className="cta-parallax-wrapper text-center">
            <h2 className="text-white">
              Need Fast &amp; Secure Broadband? Use <br /> Netfix &amp; The Real
              Network
            </h2>
            <div className="button-items">
              <Link href="pricing" className="theme-btn">
                <span>
                  View our Plans <i className="fas fa-chevron-right" />
                </span>
              </Link>
              <span className="or">or</span>
              <a href="tel:+1718-904-4450" className="theme-btn bg-white">
                <span>
                  +1718-904-4450 <i className="fas fa-chevron-right" />
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
            <div className="counter-items">
              <h2>
                <Counter end={10} />+
              </h2>
              <p>
                YEARS OF <br />
                EXPERIENCE
              </p>
            </div>
            <div className="counter-items">
              <h2>
                + <Counter end={1000} />
              </h2>
              <p>
                Customers
              </p>
            </div>
            <div className="counter-items">
              <h2>
                <Counter end={25000} />
              </h2>
              <p>
                KILOMETERS <br />
                OF FIBERS
              </p>
            </div>
           
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      {/* <TestimonialSlider4 /> */}
      {/*<< Brand Section Start >>*/}
      {/* <div className="brand-section-3 fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <BrandSlider />
          </div>
        </div>
      </div> */}
      {/*<< News Section Start >>*/}
      {/* <section className="news-section-2 section-padding fix">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title">
              <span className="wow fadeInUp">5m+ Trusted Our Clients</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Read Our News &amp; Blogs
              </h2>
            </div>
            <Link
              href="news-details"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                Explore Our news
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <NewsSlider />
        </div>
      </section> */}
    </NetBandLayout>
  );
};
export default page;
