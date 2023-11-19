"use client"

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "./main-nav.scss";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/portfolio",
    name: "Portfolio",
  },
  {
    path: "/courses",
    name: "Courses",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";
  const itemsToRender = navItems.slice(1);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const variants = {
    open: { opacity: 0.9, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const exitVariants = {
    opacity: 0,
    y: -20,
  };

  const linkVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    closed: exitVariants,
  };

  useEffect(() => {
    if (isOpen) {
      controls.start("open");
    } else {
      controls.start("closed");
    }
  }, [isOpen, controls]);

  return (
    <nav className="main-nav">
      <div className="main-nav__top">
        <div className="main-nav__logo-container">
          <Link key={navItems[0].name} href={navItems[0].path}>
            <Image
              width={80}
              height={80}
              alt="logo"
              src="/images/che-logo.webp"
              className="main-nav__logo"
            />
          </Link>
        </div>
        <div className="main-nav__button" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </div>
      </div>
      <motion.div
        className={`main-nav__items main-nav__items--${
          isOpen ? "open" : "closed"
        }`}
        initial="closed"
        animate={controls}
        exit="closed"
        variants={variants}
        transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.4 }}
      >
        {itemsToRender.map((item, index) => (
          <motion.a
            key={item.path}
            className="main-nav__item"
            href={item.path}
            variants={linkVariants}
            whileHover={{ scale: 1.1, color: "#FECF00" }}
            whileTap={{ scale: 0.9 }}
          >
            <span>{item.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
}
