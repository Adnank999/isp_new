"use client";
import { netBandUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Home1 = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      netBandUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
   
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);

  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev">
          <i className="fas fa-chevron-left" />
        </button>
        <button className="array-next">
          <i className="fas fa-chevron-right" />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        {...sliderProps.home1}
        className="swiper hero-slider"
       
      >
        <SwiperSlide className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero-1.jpg")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-8">
                <div className="hero-content">
                  <h6
                    data-animation="fadeInUp"
                    data-delay="1.3s"
                    data-duration=".3s"
                  >
                    Dhaka's Internet, Elevated by Cherry.
                  </h6>
                  <h1
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                    data-duration=".3s"
                  >
                    Your Connection,
                    <br /> Our Priority.
                  </h1>
                  <h2
                    data-animation="fadeInUp"
                    data-delay="1.7s"
                    data-duration=".3s"
                  >
                    Home, Starts ৳700 <span>/ Month</span>
                  </h2>
                  <p
                    data-animation="fadeInUp"
                    data-delay="1.7s"
                    data-duration=".3s"
                  >
                    The Future of Connectivity, Now.
                  </p>
                  {/* <div className="hero-button">
                    <Link
                      href="/"
                      className="theme-btn"
                      data-animation="fadeInUp"
                      data-delay="1.59s"
                      data-duration=".3s"
                    >
                      <span>
                        {" "}
                        Explore More
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                    <span
                      className="button-text"
                      data-animation="fadeInUp"
                      data-delay="1.9s"
                      data-duration=".3s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <span className="ms-4 d-line">Watch Video</span>
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="frame-shape">
                  <img src="assets/img/hero/frame-shape.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero-2.jpg")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-8">
                <div className="hero-content">
                  <h6
                    data-animation="fadeInUp"
                    data-delay="1.3s"
                    data-duration=".3s"
                  >
                    Connecting Dhaka's Homes, Offices & Corporations.
                  </h6>
                  <h1
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                    data-duration=".3s"
                  >
                    Cutting-Edge Internet Solutions
              
                  </h1>
                  <h2
                    data-animation="fadeInUp"
                    data-delay="1.7s"
                    data-duration=".3s"
                  >
                    SME,Starts ৳2000 <span>/ Month</span>
                  </h2>
                  <p
                    data-animation="fadeInUp"
                    data-delay="1.7s"
                    data-duration=".3s"
                  >
                    Make your Bussiness Simplified..
                  </p>
                  {/* <div className="hero-button">
                    <Link
                      href="/"
                      className="theme-btn"
                      data-animation="fadeInUp"
                      data-delay="1.59s"
                      data-duration=".3s"
                    >
                      <span>
                        {" "}
                        Explore More
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                    <span
                      className="button-text"
                      data-animation="fadeInUp"
                      data-delay="1.9s"
                      data-duration=".3s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <span className="ms-4 d-line">Watch Video</span>
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="frame-shape">
                  <img src="assets/img/hero/frame-shape.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("assets/img/hero/hero-3.jpg")' }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-8">
                <div className="hero-content">
                  <h6
                    data-animation="fadeInUp"
                    data-delay="1.3s"
                    data-duration=".3s"
                  >
                    99.99% Uptime, Uninterrupted Connectivity.
                  </h6>
                  <h1
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                    data-duration=".3s"
                  >
                    Intelligent Networks, Infinite Possibilities for
                    Large Organization
                  </h1>
                  {/* <h2
                    data-animation="fadeInUp"
                    data-delay="1.7s"
                    data-duration=".3s"
                  >
              
                    Experience the Difference and Redefine Internet with <br/>
                    <span style={{color: "red",fontSize: "50px"}}>Cherry Enterprise.</span>
                  </h2> */}
                  {/* <p
                    data-animation="fadeInUp"
                    data-delay="1.7s"
                    data-duration=".3s"
                  >
                    Redefining Internet with Cherry Enterprise.
                  </p> */}
                  {/* <div className="hero-button">
                    <Link
                      href="/"
                      className="theme-btn"
                      data-animation="fadeInUp"
                      data-delay="1.59s"
                      data-duration=".3s"
                    >
                      <span>
                        {" "}
                        Explore More
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                    <span
                      className="button-text"
                      data-animation="fadeInUp"
                      data-delay="1.9s"
                      data-duration=".3s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <span className="ms-4 d-line">Watch Video</span>
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="frame-shape">
                  <img src="assets/img/hero/frame-shape.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home1;
