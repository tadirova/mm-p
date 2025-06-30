import Link from "next/link";
import ContainerHeader from "../HOC/ContainerHeader";
import SheetMenu from "./SheetMenu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <ContainerHeader>
      <Link
        href="/#header"
        className="py-6 lg:ml-0 sm:w-[175px] w-[11rem] rounded-full mx-auto hover:bg-gradient-to-br from-[#003767]/20 to-[#ffd700]/30"
      >
        {/* <Image
          src="/assets/we-talk-data-logo--transparent.png"
          alt="logo"
          width={175}
          height={100}
          className="w-52 h-18"
          priority
        /> */}
      </Link>
      <Navbar />
      <div className="xl:hidden">
        <SheetMenu />
      </div>
    </ContainerHeader>
  );
};

export default Header;
