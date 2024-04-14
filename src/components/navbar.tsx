"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen min-h-[8vh] bg-[#8075FF] flex items-center justify-center">
      <div
        className="absolute z-50 left-8 cursor-pointer"
        onClick={handleClick}
      >
        {!isOpen ? <GiHamburgerMenu size={25} color="white" /> : <IoMdClose size={30} color="white"/>}
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 h-screen w-screen bg-black/80 flex flex-col justify-center items-center gap-3"
        >
          <p className="text-white text-5xl mb-4">Menu</p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Link
              href="/dashboard"
              className="text-white font-montserrat text-xl"
            >
              Dashboard
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Link
              href="/catalogue"
              className="text-white font-montserrat text-xl"
            >
              Catalogue
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Link
              href="/inventory"
              className="text-white font-montserrat text-xl"
            >
              Inventory
            </Link>
          </motion.div>
        </motion.div>
      )}
      <div className="">
        <Image
          src="/logo.svg"
          alt="logo"
          height={0}
          width={0}
          className="h-[10] w-fit mb-1"
        />
      </div>
    </div>
  );
};

export default Navbar;
