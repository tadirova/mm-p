import { useScroll } from "@/contexts/ScrollContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { NavItem } from "../heroTypes";
import {navItems} from "@/constants/constants";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("");
    const { scrolled } = useScroll();

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    const navbarList = navItems.map((navBar: NavItem) => (
        <motion.div
            key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                className={cn(
                    "cursor-pointer text-lg text-[#151525] font-semibold rounded-full hover:shadow-lg hover:shadow-[#81c154]/50 text-center p-[5em]",
                    activeLink === navBar.navBarTitle && "shadow-lg shadow-[#81c154]/50 bg-gradient-to-br from-blue-800/60 to-[#81c154]/30",
                    scrolled && "text-[#81c154]",
                    "px-[1em] py-[0.5em] hover:bg-gradient-to-br hover:from-blue-800/20 hover:to-[#81c154]/20"
                )}
                href={navBar.idLink}
                onClick={() => handleLinkClick(navBar.navBarTitle)}
            >
                {navBar.navBarTitle.toUpperCase()}
            </Link>
        </motion.div>
    ));

    if (!activeLink && navItems[0].idLink.length > 0) {
        setActiveLink(navItems[0]?.idLink);
    }

    return (
        <nav className="text-right absolute xl:text-center space-x-4 hidden xl:flex w-full justify-center xl:pr-14 py-10">
            {navbarList}
        </nav>
    );
};

export default Navbar;
