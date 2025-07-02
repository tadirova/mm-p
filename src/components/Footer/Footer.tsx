import {DiscordLogoIcon, InstagramLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapperContainer from "../HOC/SectionWrapperContainer";
import Contact from "./Contact";

const DUMMY_SOCIALS = [
    {
        title: "Instagram",
        url: "https://www.instagram.com/tadirova/",
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/mihaela-tadirova-754787298/?viewAsMember=true",
    },
    {
        title: "Discord",
        url: "https://discordapp.com/users/miha#6303",
    },
];

const socialsList1 = DUMMY_SOCIALS?.map((social, i) => {
    return (
        <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            key={i}>
            <Link
                href={social.url}

                aria-label={social.title}
                target="_blank"
                rel="noopener noreferrer"
            >
                {social.title.toLowerCase() === "instagram" ? (
                    <InstagramLogoIcon className="text-[#ffd700]/30 hover:text-[#ffd700]/60 animate scale-150" />
                ) : social.title.toLowerCase() === "linkedin" ?  (
                    <LinkedInLogoIcon
                        className={`text-[#ffd700]/30 ml-6 mr-2 hover:text-[#ffd700]/60 animate scale-150`}
                    />
                ):
                    (<DiscordLogoIcon
                        className={`text-[#ffd700]/30 ml-6 mr-2 hover:text-[#ffd700]/60 animate scale-150`}
                    />)}
            </Link>
        </motion.div>
    );
});

const Footer = () => {
    return (
        <SectionWrapperContainer>
            <div
                id='contact'
                className="relative flex flex-col max-h-[1000px] items-center text-center overflow-x-hidden py-20
                px-0 sm:px-[50px] md:text-left max-w-full justify-center mx-auto overflow-y space-y-12"
            >
                <div className="flex items-center justify-center space-x-2 w-full pl-4">
                    {socialsList1}
                </div>

                <Contact/>

                <div className="paragraph-1">
                    <span>Designed and developed by: </span>
                    <Link
                        href="https://www.linkedin.com/feed/"
                        className="text-[#ffd700]/50 hover:text-[#ffd700]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @Mihaela Tadirova
                    </Link>
                </div>
            </div>
        </SectionWrapperContainer>
    );
};

export default Footer;
