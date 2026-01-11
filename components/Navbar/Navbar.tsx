import Logo from "../Logo/Logo";
import NavbarCTA from "./NavbarCTA";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center items-center w-full py-4 md:py-6">
      <div className="max-w-[1500px] w-full px-6">
        <nav className="flex flex-row justify-between items-center w-full">
          <div className="flex-1 flex justify-start">
            <Logo variant="header" />
          </div>
          <div className="hidden lg:flex flex-[2] justify-center">
            <NavbarLinks />
          </div>
          <div className="flex-1 flex justify-end items-center gap-4">
            <NavbarCTA />
            <MobileMenu />
          </div>
        </nav>
      </div>
    </div>
  );
}
