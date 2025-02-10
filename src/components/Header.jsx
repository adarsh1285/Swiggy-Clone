import React, { useState } from "react"
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { ImProfile } from "react-icons/im";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSidemenu = () => {
        // console.log("clicked");
        setToggle(true);
    }

    const hideSidemenu = () => {
        // console.log("clicked");
        setToggle(false);
    }

    const links = [
        {
            icon: <IoSearchSharp className="text-[20px]"/>,
            name: "Search"
        },
        {
            icon: <MdHelpOutline className="text-[20px]"/>,
            name: "Offers",
            sup: "New"
        },{
            icon: <RiDiscountPercentLine className="text-[20px]"/>,
            name: "Help"
        },        
        {
            icon: <ImProfile className="text-[15px]"/>,
            name: "Sign In"
        },{
            icon: <PiShoppingCartSimpleBold className="text-[20px]"/>,
            name: "Carts"
        }
    ]
    return (
        <>
            <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSidemenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
            }}>
                <div className="w-[400px] bg-white h-full absolute duration-[400ms]" onClick={(e) => {
                    e.stopPropagation();
                }} style={{
                    left: toggle ? "0%" : "-100%"
                }}></div>
            </div>
            <header className="p-3 shadow-xl flex items-center justify-center text-[#282c3f] sticky top-0 z-[9999] bg-white">
                <div className="w-[1200px] flex items-center">
                    <div className="w-[130px] ">
                        <img src="images/swiggy logo.png" alt="" className="h-[60px]" />
                    </div>
                    <div onClick={showSidemenu} className="cursor-pointer">
                        <span className="font-bold border-b-[3px] border-[black]">Vikas Nagar</span> Lucknow , Utter Pradesh , India &nbsp;
                        <RxCaretDown
                            fontSize={25}
                            className="inline text-bolt text-[#ff5200]" />
                    </div>                    
                    <nav className="md:flex hidden flex list-none ml-auto gap-8 cursor-pointer ">
                       {
                        links.map((link, index) => {
                            return<li key={index} className="flex items-center gap-2 hover:text-[#ff5200]">
                                {link.icon}
                                {link.name}
                                <sup>
                                    {link.sup}
                                </sup>
                            </li>
                        })
                       }
                    </nav>
                </div>
            </header>
        </>
    )
}