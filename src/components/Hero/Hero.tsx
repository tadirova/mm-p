import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";
import { GitHubLogoIcon, FileTextIcon } from "@radix-ui/react-icons";

const Hero = () => {

  return (
    <>
      <header
        className=" relative flex flex-col overflow-hidden bg-cover bg-no-repeat
                 h-screen items-center justify-center text-center sm:space-y-5 space-y-2 px-3 sm:px-0"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url('/hero-portfolio.jpg')`,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          transition={{
            duration: 1.25,
          }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
          src="/hero-port.png"
          alt="logo"
          width={800}
          height={400}
          className="opacity-70 pt-64"
          priority
        />
        </motion.div>
      </header>
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 hover:bg-white text-black font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition"
        >
          <GitHubLogoIcon width={20} height={20} />
          GitHub
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 hover:bg-white text-black font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition"
        >
          <FileTextIcon width={20} height={20} />
          CV
        </a>
      </div>
    </>
  );
};

export default Hero;
