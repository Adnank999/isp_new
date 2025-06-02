"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import CustomTab from "@/components/CustomTab";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

const page = () => {
  return (
    <NetBandLayout header={2} footer={2}>
     
      {/* Tabs for plan */}
    
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section-2 fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-0 ">
            {/* <span>OUR PRICING PLAN</span> */}
            <h2>Our Pricing Plan</h2>
              <CustomTab/>
          </div>
          {/* <div className="row pt-5 g-4">
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
          </div> */}
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
