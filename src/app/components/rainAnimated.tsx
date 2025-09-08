"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import { Typewriter } from "react-simple-typewriter";
import Page6 from "./Page6";
import Page7 from "./Page7";

interface HeartDrop {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  opacity: number;
  color: string;
}

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function ColorfulRainCountdown() {
  const [countdown, setCountdown] = useState(3);
  const [started, setStarted] = useState(false);
  const [rainDrops, setRainDrops] = useState<HeartDrop[]>([]);
  const [messageIndex, setMessageIndex] = useState(-1);
  const [showStars, setShowStars] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);
  const [showGif, setShowGif] = useState(true);
  const [showBook, setShowBook] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const messages = ["HAPPY", "BIRTHDAY", "TO", "YOU"];

  // Generate colorful rain drops
  useEffect(() => {
    const colors = ["#ff69b4", "#ff1493", "#db7093", "#ffc0cb", "#ffb6c1"];
    const hearts: HeartDrop[] = [];

    for (let i = 0; i < 100; i++) {
      hearts.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 3, // slower fall
        opacity: Math.random() * 0.5 + 0.5,
        size: Math.random() * 24 + 16,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setRainDrops(hearts);
  }, []);

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.muted = true;
  }, []);

  useEffect(() => {
    if (started) {
      // Khi bắt đầu, mở tiếng và phát nhạc
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {});
      }
      // Bắt đầu countdown
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      if (countdown === 0) {
        clearTimeout(timer);
      }
      return () => clearTimeout(timer);
    }
  }, [countdown, started]);

  // Countdown → Messages
  useEffect(() => {
    if (countdown > 0 && started) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < messages.length) {
          setMessageIndex(i);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setShowStars(true);
          }, 1200);
        }
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [countdown, messages.length, started]);

  // Generate stars
  useEffect(() => {
    if (showStars) {
      const colors = [
        "#FFFFFF",
        "#FFD93D",
        "#4D96FF",
        "#FF4D6D",
        "#9D4EDD",
        "#6BCB77",
        "#00C9A7",
      ];
      const newStars: Star[] = [];
      for (let i = 0; i < 120; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 3 + 2,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setStars(newStars);
    }
  }, [showStars]);

  useEffect(() => {
    if (showStars) {
      const timer = setTimeout(() => {
        setShowGif(false); // ẩn sau 4s
        setShowBook(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showStars]);

  return (
    <div className='relative w-full h-screen bg-black overflow-hidden flex items-center justify-center'>
      {!started && (
        <button
          onClick={() => setStarted(true)}
          className='px-8 py-4 bg-pink-500 text-white rounded-lg text-xl font-bold hover:bg-pink-600 transition'
        >
          Xin chào Trang :^ Hãy mở món quà của tớ dành cho cậu nhé ^^
        </button>
      )}
      {/* Rain drops */}
      {!showStars &&
        rainDrops.map((heart: HeartDrop) => (
          <div
            key={heart.id}
            className='absolute text-center select-none pointer-events-none'
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              color: heart.color,
              opacity: heart.opacity,
              animation: `fall ${heart.animationDuration}s linear infinite`,
            }}
          >
            ❤️
          </div>
        ))}

      {/* Countdown or Messages */}
      {!showStars && started && (
        <div className='relative z-10 text-center space-y-4'>
          {countdown > 0 ? (
            <div className='text-8xl md:text-9xl font-bold text-white mb-4 font-mono animate-pulse'>
              {countdown}
            </div>
          ) : (
            messageIndex >= 0 &&
            messageIndex < messages.length && (
              <div
                key={messageIndex}
                className='text-9xl font-bold text-[#ff1492] font-mono animate-fade-in-out'
              >
                {messages[messageIndex]}
              </div>
            )
          )}
        </div>
      )}

      {showStars &&
        stars.map((star) => (
          <div
            key={star.id}
            className='absolute rounded-full'
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: 0.8,
              animation: `float ${star.duration}s ease-in-out ${
                star.delay
              }s infinite alternate,
                         twinkle ${star.duration / 2}s ease-in-out infinite`,
            }}
          />
        ))}

      {showStars && showGif && (
        <Image
          className='animate-fade-in-out-gif'
          src={
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9yMTYzN3g3eXFhNm5kZG5iaW1zazFzMDVpMjJvdXJsbWI5cHhtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ma2tHGDcRRf8CC0jyT/giphy.gif"
          }
          alt='gif'
          unoptimized
          width={350}
          height={350}
        />
      )}

      {showBook && (
        <div className='flex flex-col gap-8 text-wrap'>
          <div className='w-[450px] bg-white text-black flex items-center p-2 rounded'>
            {/* Bên trái: text */}
            <div className='pr-1'>
              <p className='text-[11px] leading-snug whitespace-normal'>
                <Typewriter
                  words={[
                    "Anh không cần một lý do để yêu em. Chỉ cần em là chính em.",
                    "Bên em, mọi khoảnh khắc đều trở nên ý nghĩa.",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle=''
                  typeSpeed={40}
                  deleteSpeed={20}
                  delaySpeed={5000}
                />
              </p>
            </div>
          </div>
          <HTMLFlipBook
            width={240}
            height={240}
            className={"w-32 h-32"}
            style={{}}
            startPage={0}
            size={"fixed"}
            minWidth={0}
            maxWidth={0}
            minHeight={0}
            maxHeight={240}
            drawShadow={false}
            flippingTime={1500}
            usePortrait={false}
            startZIndex={0}
            autoSize={false}
            maxShadowOpacity={0}
            showCover={true}
            mobileScrollSupport={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={50}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            <div className='page bg-[#f6bcd1]'>
              <Page1 />
            </div>
            <div className='page bg-white'>
              <Page2 />
            </div>
            <div className='page bg-[#d2c1c7]'>
              <Page3 />
            </div>
            <div className='page bg-black/10 border-2 border-white'>
              <Page4 />
            </div>
            <div className='page'>
              <Page5 />
            </div>
            <div className='page'>
              <Page6 />
            </div>
            <div className='page'>
              <Page7 />
            </div>
          </HTMLFlipBook>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInOutGif {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          25% {
            opacity: 1;
            transform: scale(1);
          }
          75% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
          100% {
            transform: translateY(10px) translateX(-5px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-fade-in-out {
          animation: fadeInOut 1s ease-in-out forwards;
        }

        .animate-fade-in-out-gif {
          animation: fadeInOutGif 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
