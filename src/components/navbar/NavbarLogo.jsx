import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
      <Link
        to="top"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="text-4xl font-bold cursor-pointer "
      >
        Kojun Coffee
      </Link>
    </div>
  );
};

export default NavbarLogo;
