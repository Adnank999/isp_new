"use client";
import NiceSelect from "@/components/NiceSelect";
import Link from "next/link";
import { Fragment, useState } from "react";
import Menus from "./Menus";
import Offcanvas from "./Offcanvas";
import Search from "./Search";

const Header = ({ header, single, menus }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const openSidebar = () => setSidebarToggle(true),
    closeSidebar = () => setSidebarToggle(false);

  const headerChoose = () => {
    switch (header) {
      case 1:
        return (
          <Header1 openSidebar={openSidebar} single={single} menus={menus} />
        );
      case 3:
        return (
          <Header3 openSidebar={openSidebar} single={single} menus={menus} />
        );
      case 4:
        return (
          <Header4 openSidebar={openSidebar} single={single} menus={menus} />
        );
      default:
        return (
          <Header2 openSidebar={openSidebar} single={single} menus={menus} />
        );
    }
  };
  return (
    <Fragment>
      {headerChoose(header)}
      <Offcanvas
        sidebar={sidebarToggle}
        closeSidebar={closeSidebar}
        single={single}
      />
      <Search />
    </Fragment>
  );
};
export default Header;

const SearchBtn = () => {
  const onClick = () => {
    document.querySelector(".search-wrap").classList.add("d-block");
  };
  return (
    <a
      href="#0"
      className="search-trigger search-icon"
      onClick={() => onClick()}
    >
      <i className="fal fa-search" />
    </a>
  );
};

const Header1 = ({ openSidebar, single, menus }) => {
  return (
    <Fragment>
      <div className="header-top-section fix">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:info@internetcherry.com" className="link">
                  info@internetcherry.com
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt" />
                Umesh Datta road, Chak bazar, Dhaka, Bangladesh.
              </li>
            </ul>
            <div className="top-right">
              <div className="social-icon d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-vimeo-v" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
              <ul className="header-menu">
                <li>
                  <Link href="contact">Help</Link>
                </li>
                <li>
                  <Link href="contact">Support</Link>
                </li>
                <li>
                  <Link href="faq">Faqs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header className="header-section-1">
        <div id="header-sticky" className="header-1">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img src="assets/img/logo/cclogo.png" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <Menus single={single} menus={menus} />
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="contact-info">
                    <div className="icon">
                      <img src="assets/img/call.png" alt="img" />
                    </div>
                    <div className="content">
                      <p>Phone:</p>
                      <h6>
                        <a href="tel:+09613338833">+09613338833</a>
                      </h6>
                    </div>
                  </div>
                  <div className="header-button">
                    <Link href="contact" className="link-btn">
                      <span>Contact us</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                  <SearchBtn />
                  <div className="header__hamburger d-xl-none my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => openSidebar()}
                    >
                      <i className="far fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Header2 = ({ openSidebar, single, menus }) => {
  return (
    <header>
      <div id="header-sticky" className="header-2">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main style-2">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/cclogo.png" alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menus single={single} menus={menus} />
                  </div>
                </div>
                
                <div className="">
                  <Link
                    href="https://wa.me/+8801897664670"
                    className=""
                    style={{ fontSize: "2.5rem", color: "#25D366" }}
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                  </Link>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => openSidebar()}
                  >
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Header3 = ({ openSidebar, single, menus }) => {
  return (
    <Fragment>
      {/* Header Top Start */}
      <div className="header-top-section-3">
        <div className="container-fluid">
          <div className="header-top-wrapper style-2 style-3">
            <div className="top-left">
              <ul className="contact-list">
                <li>
                  <span>Call</span>Consult With It Advisor?{" "}
                  <Link href="contact">Click Now</Link>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  734 H, Bryan Burlington, NC 27215
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <a href="mailto:info@example.com" className="line-none">
                    info@example.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-right">
              <NiceSelect customClass="style-2" />
              <div className="flag-wrap">
                <div className="flag">
                  <img src="assets/img/flag.png" alt="flag" />
                </div>
                <NiceSelect
                  customClass=""
                  items={[
                    { id: 1, value: "English" },
                    { id: 2, value: "Bangla" },
                    { id: 3, value: "Hindi" },
                  ]}
                />
              </div>
              <div className="social-icon d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-vimeo-v" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Area Start */}
      <header className="header-section-3">
        <div id="header-sticky" className="header-3">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/logo-2.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="header-left">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <Menus single={single} menus={menus} />
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="header-button">
                    <Link href="contact" className="theme-btn theme-btn-2">
                      <span>
                        contact us
                        <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => openSidebar()}
                    >
                      <div className="header-bar">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Header4 = ({ openSidebar, single, menus }) => {
  return (
    <header id="header-sticky" className="header-4">
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main style-2">
            <div className="header-left">
              <div className="logo">
                <Link href="/" className="header-logo">
                  <img src="assets/img/logo/logo.svg" alt="logo-img" />
                </Link>
                <Link href="/" className="header-logo-2">
                  <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                </Link>
              </div>
            </div>
            <div className="mean__menu-wrapper">
              <div className="main-menu">
                <Menus single={single} menus={menus} />
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <SearchBtn />
              <div className="header-button">
                <Link href="contact" className="theme-btn">
                  <span>
                    subscribe now
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle" onClick={() => openSidebar()}>
                  <i className="fas fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
