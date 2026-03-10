"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <span className="logo-r">Rimo</span>
            <span className="logo-v">Valley</span>
          </a>
          <ul className="nav-menu">
            <li><a href="#business">사업영역</a></li>
            <li><a href="#about">회사소개</a></li>
            <li><a href="#contact">문의</a></li>
          </ul>
          <a href="#contact" className="nav-cta">문의하기</a>
          <button
            className={`nav-toggle${menuOpen ? " active" : ""}`}
            aria-label="메뉴"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <a href="#business" onClick={closeMenu}>사업영역</a>
        <a href="#about" onClick={closeMenu}>회사소개</a>
        <a href="#contact" onClick={closeMenu}>문의</a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>문의하기</a>
      </div>
    </>
  );
}
