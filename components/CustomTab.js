"use client";
import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import NetBandAccordion from "@/components/NetBandAccordion";
import Link from "next/link";

const CustomTab = () => {
  const [activeTab, setActiveTab] = useState("home");
  

 

  return (
    <div className="custom-tab-container">
      <Tab.Container
        defaultActiveKey={"home"}
        activeKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
      >
        <div className="custom-tab">
          <Nav as={"ul"} className="nav mb-4">
            <Nav.Item
              as={"li"}
              className="nav-item wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Nav.Link
                as={"a"}
                eventKey={"home"}
                href="#home"
                className={activeTab === "home" ? "active-tab" : ""}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              as={"li"}
              className="nav-item wow fadeInUp"
              data-wow-delay=".5s"
            >
              <Nav.Link
                as={"a"}
                eventKey={"bussiness"}
                href="#bussiness"
                className={activeTab === "bussiness" ? "active-tab" : ""}
              >
                Bussiness
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              as={"li"}
              className="nav-item wow fadeInUp"
              data-wow-delay=".7s"
            >
              <Nav.Link
                as={"a"}
                eventKey={"enterprise"}
                href="#enterprise"
                className={activeTab === "enterprise" ? "active-tab" : ""}
              >
                Enterprise
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Tab.Content className="">
          <Tab.Pane eventKey="home" className="tab-pane fade">
            {activeTab === "home" && (
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
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            100Mbps Facebook
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100Mbps YouTube
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support .
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
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            100Mbps Facebook
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100Mbps YouTube
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support .
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
                <div className="pricing-wrapper">
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
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            100Mbps Facebook
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100Mbps YouTube
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support .
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
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            100Mbps Facebook
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100Mbps YouTube
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support .
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
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            100Mbps Facebook
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100Mbps YouTube
                          </li>
                          <li>
                            <i className="far fa-check" />
                            100 Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Unlimited Usage
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support .
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
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            100Mbps Facebook
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100Mbps YouTube
                          </li>
                          <li>
                            <i className="far fa-check" />
                            100 Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Unlimited Usage
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support .
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

                <div className="pricing-wrapper ">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                      <div className="pricing-content-box d-flex align-items-center justify-content-between">
                        <div className="price-content">
                          <h3>Cherry Blaze</h3>

                          <p>Installation Charge: none</p>
                          <span class="cardPrice9">
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
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            100Mbps Facebook
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100Mbps YouTube
                          </li>
                          <li>
                            <i className="far fa-check" />
                            100 Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Unlimited Usage
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support .
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
                          <span class="cardPrice10">
                            <h2>120 Mbps</h2>
                          </span>
                        </div>
                        <div className="price-icon">
                          <div className="icon">
                            <i className="flaticon-television" />
                          </div>
                          <div className="icon">
                            <i className="flaticon-smartphone" />
                          </div>
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            100Mbps Facebook
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100Mbps YouTube
                          </li>
                          <li>
                            <i className="far fa-check" />
                            100 Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Unlimited Usage
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support .
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
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="bussiness" className="tab-pane fade">
            {activeTab === "bussiness" && (
              <div className="row pt-5 g-4">
                <div className="pricing-wrapper">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                      <div className="pricing-content-box d-flex align-items-center justify-content-between">
                        <div className="price-content">
                          <h3>Basic</h3>

                          <p>Installation Charge: none</p>
                          <span class="cardPrice3">
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
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            25 Mbps Stable Internet
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100 Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Unlimited Usage
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Low Latancy
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support
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
                <div className="pricing-wrapper ">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                      <div className="pricing-content-box d-flex align-items-center justify-content-between">
                        <div className="price-content">
                          <h3>Startup</h3>

                          <p>Installation Charge: none</p>
                          <span class="cardPrice2">
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
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            40 Mbps Stable Internet
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100 Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Unlimited Usage
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Low Latancy
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support
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
                          <h3>Boost</h3>

                          <p>Installation Charge: none</p>
                          <span class="cardPrice5">
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
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            60 Mbps Stable Internet
                          </li>

                          <li>
                            <i className="far fa-check" />
                            100 Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Unlimited Usage
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Low Latancy
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support
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
                <div className="pricing-wrapper ">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                      <div className="pricing-content-box d-flex align-items-center justify-content-between">
                        <div className="price-content">
                          <h3>Ultra</h3>

                          <p>Installation Charge: none</p>
                          <span className="cardPrice4">
                            <h2>90 Mbps</h2>
                          </span>
                        </div>
                        <div className="price-icon">
                          <div className="icon">
                            <i className="flaticon-television" />
                          </div>
                          <div className="icon">
                            <i className="flaticon-smartphone" />
                          </div>
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            90 Mbps Stable Internet
                          </li>

                          <li>
                            <i className="far fa-check" />
                            200 Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            4K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Unlimited Usage
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Low Latancy
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support
                          </li>
                        </ul>
                        <div className="price-button">
                          <h3>
                            <i>৳</i>6000
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
                          <h3>Base</h3>

                          <p>Installation Charge: none</p>
                          <span className="cardPrice2">
                            <h2>120 Mbps</h2>
                          </span>
                        </div>
                        <div className="price-icon">
                          <div className="icon">
                            <i className="flaticon-television" />
                          </div>
                          <div className="icon">
                            <i className="flaticon-smartphone" />
                          </div>
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-12">
                      <div className="pricing-list-items d-flex align-items-center">
                        <ul className="price-list">
                          <li>
                            <i className="far fa-check" />
                            120 Mbps Stable Internet
                          </li>

                          <li>
                            <i className="far fa-check" />
                            200 Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            8K YouTube & Facebook Streaming
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Pure Optical Fiber
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Unlimited Usage
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Low Latancy
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Multiple Device Support
                          </li>
                          <li>
                            <i className="far fa-check" />
                            24/7 Customer Support
                          </li>
                        </ul>
                        <div className="price-button">
                          <h3>
                            <i>৳</i>8000
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
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="enterprise" className="tab-pane fade">
            {activeTab === "enterprise" && (
              <div className="row pt-5 g-4">
                <div className="pricing-wrapper">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                      <div className="pricing-content-box d-flex align-items-center justify-content-between">
                        <div className="price-content">
                          <h3>Startup Packages</h3>

                          <span class="cardPrice1">
                            <h2>20 Mbps dedicated bandwidth</h2>
                          </span>
                        </div>
                        {/* <div className="price-icon">
                          <div className="icon">
                            <i className="flaticon-television" />
                          </div>
                          <div className="icon">
                            <i className="flaticon-smartphone" />
                          </div>
                          <div className="icon">
                            <i className="flaticon-connection" />
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                      <div className="pricing-list-items  align-items-center">
                        <ul className="price-list">
                          {/* <li>
                            <i className="far fa-check" />
                            25 Mbps Stable Internet 
                          </li> */}

                          <li>
                            <i className="far fa-check" />
                            Unlimited Mbps BDIX Speed
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Symmetric(equal upload and download speed)
                          </li>
                          <li>
                            <i className="far fa-check" />
                            100% Fiber optic
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Static Ip (Available Optional)
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Uptime Guarantee (99.9% With SLA support)
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Customer support(24/7 Priority Business Support)
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Suitable for Offices,IT companies,Call
                            Centres,Corporate Use
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Customization (Packages can be tailored as per
                            business needs)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default CustomTab;
