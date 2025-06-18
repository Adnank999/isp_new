import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/animate.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/slick.css";
import "@css/swiper-bundle.min.css";
import "@css/nice-select.css";
import "@css/main.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";

export const metadata = {
  title: "Cherry Internet - Best Internet Provider and Broadband service",
  description:
    "Cherry Internet Service Provider - The nation's leading internet service provider, delivering high-speed, reliable connectivity solutions across Bangladesh with exceptional customer service and cutting-edge technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Preloader /> */}
        {children}</body>
    </html>
  );
}
