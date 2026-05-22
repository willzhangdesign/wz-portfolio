import { useState, useEffect } from "react";
import heroFrame1 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 1.png";
import heroFrame2 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 2.png";
import heroFrame3 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 3.png";
import heroFrame4 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 4.png";
import heroFrame5 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 5.png";
import heroFrame6 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 6.png";
import heroFrame7 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 7.png";
import heroFrame8 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 8.png";
import heroFrame9 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 9.png";
import heroFrame10 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 10.png";
import heroFrame11 from "../assets/nyc-redesign/NycRedesign_HeroAnimation 11.png";
import nycLogo from "../assets/nyc-redesign/NYC Logo.svg";
import taglineSvg from "../assets/nyc-redesign/now-easier-tagline.svg";

const frames = [
  heroFrame1, heroFrame2, heroFrame3, heroFrame4, heroFrame5,
  heroFrame6, heroFrame7, heroFrame8, heroFrame9, heroFrame10, heroFrame11,
];

const frameDurations = [1130, 830, 530, 230, 183, 183, 183, 183, 183, 183, 182];

export function NycHeroAnimation() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [flipbookDone, setFlipbookDone] = useState(false);
  const [faded, setFaded] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (flipbookDone) return;

    const timeout = setTimeout(() => {
      if (frameIndex < frames.length - 1) {
        setFrameIndex((i) => i + 1);
      } else {
        setFlipbookDone(true);
      }
    }, frameDurations[frameIndex]);

    return () => clearTimeout(timeout);
  }, [flipbookDone, frameIndex]);

  useEffect(() => {
    if (!flipbookDone) return;

    // fade to black (500ms via CSS transition)
    requestAnimationFrame(() => setFaded(true));

    // 500ms fade + 300ms pause → logo appears (500ms transition)
    const t1 = setTimeout(() => setShowLogo(true), 800);

    // + 500ms logo transition + 500ms pause → tagline slides out (500ms transition)
    const t2 = setTimeout(() => setShowTagline(true), 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [flipbookDone]);

  return (
    <div
      className="relative w-full rounded-[12px] overflow-hidden bg-black"
      style={{ aspectRatio: "1665 / 1135" }}
    >
      {/* Layer 1: Flipbook image */}
      <img
        src={frames[flipbookDone ? frames.length - 1 : frameIndex]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Layer 2: Black overlay that fades in */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-500 ease-in-out"
        style={{ opacity: faded ? 1 : 0 }}
      />

      {/* Layer 3: Logo + tagline */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={nycLogo}
          alt="NYC"
          className="w-[30%] max-w-[280px] transition-opacity duration-500 ease-in-out"
          style={{ opacity: showLogo ? 1 : 0 }}
        />
        <div
          className="overflow-hidden transition-all duration-500 ease-out"
          style={{
            maxWidth: showTagline ? "400px" : "0px",
            paddingLeft: showTagline ? "24px" : "0px",
            opacity: showTagline ? 1 : 0,
          }}
        >
          <img
            src={taglineSvg}
            alt="now easier for everyone"
            style={{
              height: "clamp(56px, 8vw, 84px)",
              width: "calc(clamp(56px, 8vw, 84px) * 145 / 42)",
              minWidth: "calc(clamp(56px, 8vw, 84px) * 145 / 42)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
