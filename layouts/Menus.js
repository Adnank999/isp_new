"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

const Menus = ({ single, menus }) => {
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "about", title: "About Us" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "blog", title: "Blog" },
      ];
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      {single ? (
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-homemenu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-one-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-2" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-two-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-3" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-three-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-4" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-four-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="team" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/">Home 01</Link>
              </li>
              <li>
                <Link href="index-2">Home 02</Link>
              </li>
              <li>
                <Link href="index-3">Home 03</Link>
              </li>
              <li>
                <Link href="index-4">Home 04</Link>
              </li>
            </ul>
          </li>
          {singleMenus.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="xl:flex xl:items-center xl:gap-6 xl:space-x-6 text-lg  font-semibold">
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              {/* <i className="fas fa-angle-down" /> */}
            </Link>
           
          </li>
         
          <li>
            <Link href="about">About Us</Link>
          </li>
         
          <li className="has-dropdown">
            <Link href="pricing">
              Pricing
              {/* <i className="fas fa-angle-down" /> */}
            </Link>
          
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
          <li>
            <Link
              href="https://radius.internetcherry.com/user/login.php"
              target="_blank"
            >
              Pay Bills
              {/* <i className="fas fa-angle-down" /> */}
            </Link>
           
          </li>
         
        </ul>
      )}
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "/", title: "Home" },
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "blog", title: "Blog" },
      ];
  return (
    <nav className="mean-nav d-block d-xl-none">
      <ul>
        
        {single ? (
          <Fragment>
            {singleMenus.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`} className="border-none">
                  {menu.title}
                </a>
              </li>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="pricing" onClick={() => activeMenuSet("Pricing")}>
                Pricing
              </Link>
            </li>
            <li className="has-dropdown">
              <Link href="contact" onClick={() => activeMenuSet("Contact")}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://www.google.com"
                target="_blank"
                onClick={() => activeMenuSet("PayBills")}
              >
                Pay Bills
              </Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};
