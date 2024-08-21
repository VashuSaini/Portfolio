import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-100 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-between items-center">
        <span>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    <Image src={"/images/Logo.png"} width={100} height={100}/>
                 </Link>
        </span>
        <div className="flex flex-col gap-1 text-slate-600">
          <span>Vashu Saini</span>
          <span>sainivashu12@gmail.com</span>
          <span>+919289029989</span>
          <span>Narela, Delhi-110040 </span>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
