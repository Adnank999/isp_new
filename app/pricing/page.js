import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout header={2} footer={2}>
      {/* <Breadcrumb pageTitle={"Our Pricing"} /> */}
      {/*<< Feature Section Start >>*/}
      {/* <section className="feature-section fix section-padding">
        <div className="shape-image">
          <img src="assets/img/shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>TV &amp; Streaming</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-smart-tv-1" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-feature-items active">
                <div className="content">
                  <span>Features</span>
                  <h3>Fast Internet</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-connection" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>All for Mobile</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-smart-tv-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*<< Pricing Section Start >>*/}
      {/* <section className="pricing-section fix section-padding">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Tariffs</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Choose your plan
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>Internet</h6>
                  <h3>Easy Surfing</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 50Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Night Turbo-Speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    WiFi router
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited devices
                  </li>
                </ul>
                <div className="price">
                  $24.99 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>TV</h6>
                  <h3>Impression</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-smart-tv" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 50Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Night Turbo-Speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    WiFi router
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited devices
                  </li>
                </ul>
                <div className="price">
                  $18.99 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="pricing-card-items">
                <span className="tag">popular</span>
                <div className="pricing-header">
                  <h6>Internet + TV</h6>
                  <h3>Home Comfort</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                  <li>
                    <i className="flaticon-smart-tv" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 50Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Night Turbo-Speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    WiFi router
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited devices
                  </li>
                </ul>
                <div className="price">
                  $37.99 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>Internet + TV + Phone</h6>
                  <h3>Premium Plan</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                  <li>
                    <i className="flaticon-smart-tv" />
                  </li>
                  <li>
                    <i className="flaticon-smart-tv-3" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 50Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Night Turbo-Speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    WiFi router
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited devices
                  </li>
                </ul>
                <div className="price">
                  $49.99 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*<< Feature Video Section Start >>*/}
      {/* <section
        className="feature-video-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/video_bg.jpg")' }}
      >
        <div className="container">
          <div className="feature-video-wrapper">
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-lg-6">
                <div className="feature-video-content">
                  <div className="section-title mb-0">
                    <h2>Experience The Features Magic of Netfix</h2>
                  </div>
                  <p className="mt-4">
                    Good Time is very good in what they're doing and more than
                    happy to challenge and push you to think about your
                    decisions both from usability and design standpoints.
                  </p>
                  <div className="counter-area">
                    <div className="counter-items">
                      <h4>
                        <Counter end={4} />k
                      </h4>
                      <p>Ultra HD Quality</p>
                    </div>
                    <div className="counter-items">
                      <h4>
                        <Counter end={90} />+
                      </h4>
                      <p>Online TV Channels</p>
                    </div>
                    <div className="counter-items">
                      <h4>
                        <Counter end={350} />+
                      </h4>
                      <p>Mbps Speed Internet</p>
                    </div>
                  </div>
                  <Link href="pricing" className="theme-btn">
                    <span>
                      Try Us Free <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section-2 fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-0">
            {/* <span>OUR PRICING PLAN</span> */}
            <h2>Our Pricing Plan</h2>
          </div>
          <div className="row pt-5 g-4">
            <div className="pricing-wrapper">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <h3>Cherry Seed</h3>

                      <p>Installation Charge: none</p>
                      <span class="cardPrice1">
                        <h2>15 Mbps</h2>
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-signal" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 15 Mbps
                      </li>

                      <li>
                        <i className="far fa-check" />
                        100 Mbps BDIX and Other Speed
                      </li>
                      <li>
                        <i className="far fa-check" />
                        4K Youtube and Facebook Stream.
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Optical Fiber Connection
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        <i>৳</i>500
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-wrapper ">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <h3>Cherry Spark</h3>

                      <p>Installation Charge: none</p>
                       <span class="cardPrice2">
                        <h2>25 Mbps</h2>
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 25 Mbps
                      </li>

                      <li>
                        <i className="far fa-check" />
                        100 Mbps BDIX and Other Speed
                      </li>
                      <li>
                        <i className="far fa-check" />
                        4K Youtube and Facebook Stream.
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Optical Fiber Connection
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        <i>৳</i>700
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-wrapper ">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <h5>Cherry Bloom</h5>

                      <p>Installation Charge: none</p>
                       <span class="cardPrice3">
                        <h2>40 Mbps</h2>
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 40 Mbps
                      </li>

                      <li>
                        <i className="far fa-check" />
                        100 Mbps BDIX and Other Speed
                      </li>
                      <li>
                        <i className="far fa-check" />
                        4K Youtube and Facebook Stream.
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Optical Fiber Connection
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        <i>৳</i>1000
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-wrapper ">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <h3>Cherry Pop</h3>

                      <p>Installation Charge: none</p>
                       <span class="cardPrice4">
                        <h2>50 Mbps</h2>
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 50 Mbps
                      </li>

                      <li>
                        <i className="far fa-check" />
                        100 Mbps BDIX and Other Speed
                      </li>
                      <li>
                        <i className="far fa-check" />
                        4K Youtube and Facebook Stream.
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Optical Fiber Connection
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        <i>৳</i>1200
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-wrapper ">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <h3>Cherry Rush</h3>

                      <p>Installation Charge: none</p>
                       <span class="cardPrice1">
                        <h2>60 Mbps</h2>
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 60 Mbps
                      </li>

                      <li>
                        <i className="far fa-check" />
                        100 Mbps BDIX and Other Speed
                      </li>
                      <li>
                        <i className="far fa-check" />
                        4K Youtube and Facebook Stream.
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Optical Fiber Connection
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        <i>৳</i>1500
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-wrapper ">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <h3>Cherry Blast</h3>

                      <p>Installation Charge: none</p>
                       <span class="cardPrice2">
                        <h2>80 Mbps</h2>
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 80 Mbps
                      </li>

                      <li>
                        <i className="far fa-check" />
                        100 Mbps BDIX and Other Speed
                      </li>
                      <li>
                        <i className="far fa-check" />
                        4K Youtube and Facebook Stream.
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Optical Fiber Connection
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        <i>৳</i>2000
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-wrapper">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <h3>Cherry Blaze</h3>

                      <p>Installation Charge: none</p>
                       <span class="cardPrice3">
                        <h2>100 Mbps</h2>
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 100 Mbps
                      </li>

                      <li>
                        <i className="far fa-check" />
                        100 Mbps BDIX and Other Speed
                      </li>
                      <li>
                        <i className="far fa-check" />
                        4K Youtube and Facebook Stream.
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Optical Fiber Connection
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        <i>৳</i>3000
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-wrapper ">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <h3>Cherry Max</h3>

                      <p>Installation Charge: none</p>
                      <span class="cardPrice4">
                        <h2>150 Mbps</h2>
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 120 Mbps
                      </li>

                      <li>
                        <i className="far fa-check" />
                        100 Mbps BDIX and Other Speed
                      </li>
                      <li>
                        <i className="far fa-check" />
                        4K Youtube and Facebook Stream.
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Optical Fiber Connection
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        <i>৳</i>4000
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
