import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";

const NavbarMain = () => {
  return (
    <nav className="text-blue-300 max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 top-0 ">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto p-6 font-bold">
        <NavbarLogo />
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default NavbarMain;
