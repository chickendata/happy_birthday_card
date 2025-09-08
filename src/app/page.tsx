'use client'
import { useEffect, useState } from "react";
import ColorfulRainCountdown from "./components/rainAnimated";

export default function Home() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    function checkOrientation() {
      setIsPortrait(window.innerHeight > window.innerWidth);
    }

    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);
  return (
    <>
      {isPortrait && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            textAlign: "center",
            padding: "1rem",
            fontSize: "1.5rem",
          }}
        >
          Vui lòng xoay ngang màn hình để có trải nghiệm tốt nhất!
        </div>
      )}
      <ColorfulRainCountdown />
    </>
  );
}
