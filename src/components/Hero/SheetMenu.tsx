import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "../../constants/constants";
import { NavItem } from "../heroTypes";



const SheetMenu = () => {
    const [activeLink, setActiveLink] = useState("");

    if (!activeLink && navItems[0]?.idLink.length > 0) {
        setActiveLink(navItems[0]?.idLink);
    }

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    const barsList = navItems.map((bar: NavItem) => (
        <SheetClose
            key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
            asChild={true}>
            <Link
                className={`cursor-pointer text-[#ffd700] hover:text-[#001330] text-center ${activeLink === bar.navBarTitle
                    ? "bg-gradient-to-br from-[#ffd700]/30 to-[#003767]/30"
                    : "bg-[#003767]/30"
                    } hover:bg-gradient-to-br active:bg-gradient-to-br from-[#ffd700]/30 to-[#003767]/30 p-[15px] rounded-full shadow-xl`}
                href={`${bar.idLink}`}
                onClick={() => {
                    handleLinkClick(bar.idLink);
                }}
            >
                {bar.navBarTitle.toUpperCase()}
            </Link>
        </SheetClose>
    ));

    return (
        <Sheet>
            <SheetTrigger
                className={`text-[#ffd700]/50 hover:text-[#ffd700]`}
                asChild={true}
            >
                <HamburgerMenuIcon className="h-[8vw] w-[10vw] sm:h-8 sm:w-8" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full xl:block">
                <nav className="flex flex-col gap-4 mt-16 font-bold">{barsList}</nav>
            </SheetContent>
        </Sheet>
    );
};

export default SheetMenu;
