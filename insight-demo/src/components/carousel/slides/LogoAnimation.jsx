import React, { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import { SlideContext } from "../../../store/SlideContext";

function LogoAnimation() {
  const slideIndex = useContext(SlideContext);

  const logoRef = useRef();

  const tl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const slideAnimation = () => {
    tl.current
      .set(logoRef.current, { x: 0, y: 0, opacity: 0 })
      .to(logoRef.current, { duration: 2, opacity: 100 })
      .to(".logo", { x: 7500, ease: "power4.inOut", duration: 1 }, 2.75)
      .to(
        ".logo-letter",
        {
          duration: 0.2,
          opacity: 0,
          xPercent: 10,
          stagger: 0.05,
          ease: "none",
        },
        2.9
      )
      .to(".logo", { opacity: 0, duration: 2 }, 4.25)
      .to("#logo-line-left", { yPercent: 5000 }, 4)
      .to("#logo-line-top", { xPercent: 5000 }, 4.1)
      .to("#logo-line-right", { yPercent: -5000 }, 4.2)
      .to("#logo-line-btm", { xPercent: -5000 }, 4.3)
      .to("#logo-dot-top", { yPercent: 5000 }, 4.4)
      .to("#logo-dot-left", { xPercent: -5000 }, 4.4)
      .to("#logo-dot-right", { xPercent: 5000 }, 4.4)
      .to("#logo-dot-btm", { yPercent: -5000 }, 4.4)
      .to(".background-cont", { yPercent: -100, duration: 0.5 }, 7)
      .to(".logo-vertical", { opacity: 100, duration: 1.5 }, 8.5);
  };

  useEffect(() => {
    if (slideIndex === 0) {
      console.log("running slide 0");
      slideAnimation();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1945.000000 500.000000"
        preserveAspectRatio="xMidYMid meet"
        className="logo-svg"
        ref={logoRef}
      >
        <g
          transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            className="logo logo-dot"
            id="logo-dot-top"
            d="M2682 4826 c-124 -41 -205 -153 -205 -286 0 -88 31 -157 94 -214 149
            -134 383 -88 470 92 31 64 32 177 2 243 -61 135 -223 210 -361 165z"
          />
          <path
            className="logo logo-line"
            id="logo-line-top"
            d="M1790 3775 l0 -245 975 0 975 0 0 245 0 245 -975 0 -975 0 0 -245z"
          />
          <path
            className="logo logo-dot"
            id="logo-dot-right"
            d="M3483 2520 c-83 -17 -169 -81 -206 -155 -38 -76 -38 -192 0 -272 55
            -117 201 -183 332 -149 117 30 198 112 221 223 43 204 -143 393 -347 353z"
          />
          <path
            className="logo logo-line"
            id="logo-line-right"
            d="M2530 2235 l0 -975 243 2 242 3 3 973 2 972 -245 0 -245 0 0 -975z"
          />
          <path
            className="logo logo-dot"
            id="logo-dot-btm"
            d="M1171 1749 c-147 -29 -236 -137 -236 -289 0 -123 56 -214 163 -267
            155 -76 354 6 408 169 22 66 15 177 -14 234 -22 43 -83 104 -129 128 -22 11
            -144 40 -147 35 -1 -1 -21 -5 -45 -10z"
          />
          <path
            className="logo logo-line"
            id="logo-line-btm"
            d="M262 2228 l3 -243 972 -3 973 -2 0 245 0 245 -975 0 -975 0 2 -242z"
          />
          <path
            className="logo logo-dot"
            id="logo-dot-left"
            d="M375 4056 c-60 -19 -97 -41 -131 -78 -108 -114 -110 -283 -6 -399 60
              -67 110 -91 198 -97 101 -6 163 16 229 82 62 61 85 121 85 217 0 193 -191 333
              -375 275z"
          />
          <path
            className="logo logo-line"
            id="logo-line-left"
            d="M980 3765 l0 -975 245 0 245 0 0 975 0 975 -245 0 -245 0 0 -975z"
          />

          <path
            className="logo-letter"
            id="logo-letter-capital-i"
            d="M5010 3000 l0 -1740 285 0 285 0 0 1740 0 1740 -285 0 -285 0 0
            -1740z"
          />
          <path
            className="logo-letter"
            id="logo-letter-n"
            d="M6820 3765 c-190 -30 -393 -93 -573 -177 l-107 -51 2 -1136 3 -1136
            275 0 275 0 3 981 2 981 78 26 c229 80 485 76 645 -10 72 -39 150 -121 186
            -195 60 -128 61 -138 61 -1003 l0 -785 275 0 275 0 0 798 c0 474 -4 825 -10
            867 -68 475 -367 764 -870 840 -118 18 -403 18 -520 0z"
          />
          <path
            className="logo-letter"
            id="logo-letter-s"
            d="M9455 3779 c-348 -25 -614 -178 -734 -421 -56 -113 -74 -204 -68
            -343 12 -257 132 -433 390 -570 45 -24 185 -87 312 -140 274 -115 333 -145
            392 -202 55 -54 73 -96 73 -173 0 -154 -126 -256 -349 -281 -174 -20 -365 22
            -571 124 -69 34 -128 63 -131 65 -3 1 -52 -83 -108 -188 -120 -222 -125 -190
            44 -275 255 -127 524 -184 810 -172 537 23 868 310 868 752 0 187 -52 327
            -167 452 -115 124 -244 200 -577 338 -238 99 -313 139 -371 196 -72 72 -87
            154 -43 246 27 60 84 103 170 129 71 22 227 29 326 15 99 -15 260 -66 356
            -115 l70 -35 102 192 c118 220 120 192 -19 262 -153 77 -353 131 -523 141 -50
            2 -105 6 -122 7 -16 2 -75 0 -130 -4z"
          />
          <path
            className="logo-letter"
            id="logo-letter-i-base"
            d="M10802 2488 l3 -1223 275 0 275 0 3 1223 2 1222 -280 0 -280 0 2
            -1222z"
          />
          <path
            className="logo-letter"
            id="logi-letter-i-dot"
            d="M11013 4770 c-239 -50 -339 -349 -177 -529 26 -29 69 -62 102 -78 49
              -24 69 -28 142 -28 73 0 93 4 141 28 158 77 223 266 147 428 -61 134 -211 209
              -355 179z"
          />
          <path
            className="logo-letter"
            id="logo-letter-g"
            d="M12815 3765 c-473 -83 -808 -365 -949 -799 -115 -353 -93 -769 60
              -1104 111 -243 329 -459 567 -559 308 -130 671 -137 980 -18 15 6 17 -1 17
              -77 0 -163 -59 -319 -159 -418 -98 -98 -211 -148 -394 -176 -170 -26 -454 -5
              -682 51 -33 8 -63 14 -67 15 -5 0 -8 -101 -8 -224 l0 -224 73 -16 c240 -53
              618 -72 825 -42 592 87 909 449 962 1100 6 78 10 547 10 1196 l0 1067 -91 42
              c-124 58 -359 135 -509 167 -108 22 -155 26 -340 30 -155 2 -237 -1 -295 -11z
              m442 -470 c43 -8 113 -27 155 -41 l78 -26 0 -734 0 -733 -29 -15 c-37 -20
              -168 -53 -256 -66 -172 -24 -309 -4 -455 67 -79 38 -109 60 -176 128 -139 140
              -209 315 -221 552 -13 257 42 458 171 630 83 110 214 195 360 233 89 24 263
              26 373 5z"
          />
          <path
            className="logo-letter"
            id="logo-letter-h"
            d="M14590 3065 l0 -1805 275 0 275 0 0 983 0 983 68 26 c95 37 217 58
            337 58 272 0 457 -117 537 -340 l23 -65 5 -820 5 -820 273 -3 273 -2 -3 842
            -3 843 -27 97 c-101 368 -351 615 -715 708 -222 57 -541 37 -720 -44 l-53 -25
            0 595 0 594 -275 0 -275 0 0 -1805z"
          />
          <path
            className="logo-letter"
            id="logo-letter-t"
            d="M17160 3318 c0 -726 4 -1174 11 -1247 33 -360 173 -590 431 -711 139
            -65 358 -100 624 -100 l114 0 0 234 0 233 -117 6 c-294 15 -434 116 -489 352
            -14 59 -17 159 -21 623 l-5 552 316 0 316 0 0 225 0 225 -315 0 -315 0 0 370
            0 370 -275 0 -275 0 0 -1132z"
          />
        </g>
      </svg>
    </Container>
  );
}

export default LogoAnimation;
