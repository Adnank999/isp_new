"use client";
import NiceSelect from "@/components/NiceSelect";
import Link from "next/link";
import { Fragment, useState } from "react";
import Menus from "./Menus";
import Offcanvas from "./Offcanvas";
import Search from "./Search";

const HeaderCustom = ({ header, single, menus }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const openSidebar = () => setSidebarToggle(true),
    closeSidebar = () => setSidebarToggle(false);

  const headerChoose = () => {
    switch (header) {
      default:
        return (
          <Header2 openSidebar={openSidebar} single={single} menus={menus} />
        );
    }
  };

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

  const Header2 = ({ openSidebar, single, menus }) => {
    return (
      //   <header>
      //     <div
      //       id="header-sticky"
      //       className="header-2 !bg-white/30 !backdrop-blur-md !shadow-md !fixed w-full"
      //     >
      //       <div className="container-fluid">
      //         <div className="mega-menu-wrapper">
      //           <div className="header-main style-2">
      //             <div className="header-left">
      //               <div className="logo">
      //                 <Link href="/" className="header-logo">
      //                   <img src="assets/img/logo/cclogo.png" alt="logo-img" />
      //                 </Link>
      //               </div>
      //             </div>
      //             <div className="header-right d-flex justify-content-end align-items-center">
      //               <div className="mean__menu-wrapper">
      //                 <div className="main-menu">
      //                   <Menus single={single} menus={menus} />
      //                 </div>
      //               </div>

      //               <div className="">
      //                 <Link
      //                   href="https://wa.me/+8801897664670"
      //                   className=""
      //                   style={{ fontSize: "2.5rem", color: "#25D366" }}
      //                 >
      //                   <i className="fab fa-whatsapp" aria-hidden="true" />
      //                 </Link>
      //               </div>
      //               <div className="header__hamburger d-xl-block my-auto">
      //                 <div
      //                   className="sidebar__toggle"
      //                   onClick={() => openSidebar()}
      //                 >
      //                   <i className="fas fa-bars" />
      //                 </div>
      //               </div>
      //             </div>

      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </header>

      <header className="fixed top-4 left-0 w-full z-[1000] flex justify-center">
        <div
          id="header-sticky"
          className="backdrop-blur-md bg-white/50 shadow-lg rounded-full px-6 py-3 max-w-7xl w-full mx-4"
        >
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/assets/img/logo/cclogo.png"
                  alt="logo"
                  className="h-10"
                />
                <span className="font-semibold text-black text-lg">
                  Cherry Enterprise
                </span>
              </Link>
            </div>

            {/* Center - Main Menu (desktop only) */}
            <div className="hidden xl:block">
              <div className="main-menu">
                <Menus single={single} menus={menus} />
              </div>
            </div>

            {/* Right - Contact + Button + Hamburger */}
            <div className="flex items-center gap-4">
              {/* Contact */}
              <div className="hidden md:flex items-center gap-2 text-black">
                {/* WhatsApp (optional) */}
                <Link
                  href="https://wa.me/+8801897664670"
                  className="text-3xl text-green-500 hidden md:block "
                >
                  <i className="fab fa-whatsapp text-green-600" />
                </Link>
                {/* <i className="fas fa-phone-alt" /> */}
                <span className="text-xl font-bold">09613338833</span>
              </div>

              {/* Hamburger for mobile */}
              <div className="block xl:hidden">
                <div className="cursor-pointer" onClick={() => openSidebar()}>
                  <i className="fas fa-bars text-xl text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
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
export default HeaderCustom;
