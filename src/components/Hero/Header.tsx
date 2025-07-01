import Link from "next/link";
import ContainerHeader from "../HOC/ContainerHeader";
import SheetMenu from "./SheetMenu";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <ContainerHeader>
      <Link
        href="/#header"
        className="py-2 lg:ml-0 sm:w-[4rem] w-[8rem] rounded-full mx-auto hover:bg-gradient-to-br from-[#003767]/20 to-[#ffd700]/30"
      >
         <Image
          src="/logo.png"
          alt="logo"
          width={75}
          height={75}
          className="w-12 h-12 mx-auto"
          priority
        />
      </Link>
      <Navbar />
      <div className="xl:hidden">
        <SheetMenu />
      </div>
    </ContainerHeader>
  );
};

export default Header;
