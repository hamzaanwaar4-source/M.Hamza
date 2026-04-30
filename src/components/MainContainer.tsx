import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
const About = lazy(() => import("./About"));
const Career = lazy(() => import("./Career"));
const Contact = lazy(() => import("./Contact"));
const Cursor = lazy(() => import("./Cursor"));
const Landing = lazy(() => import("./Landing"));
const Navbar = lazy(() => import("./Navbar"));
const SocialIcons = lazy(() => import("./SocialIcons"));
const WhatIDo = lazy(() => import("./WhatIDo"));
const Work = lazy(() => import("./Work"));
const TechStack = lazy(() => import("./TechStack"));
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Suspense fallback={null}>
        <Cursor />
        <Navbar />
        <SocialIcons />
      </Suspense>
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Suspense fallback={<div className="loading-fallback" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0e17", color: "#fff" }}>Loading...</div>}>
              <Landing>{!isDesktopView && children}</Landing>
              <About />
              <WhatIDo />
              <Career />
              <Work />
              {isDesktopView && <TechStack />}
              <Contact />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
