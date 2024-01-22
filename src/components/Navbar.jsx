import logo from "../images/iconos/logobop.svg";

const Navbar = () => {
  return (
    <nav className="md:absolute md:left-0 md:w-[400px] absolute  w-[400px] top-[0px] z-10 ">
      <ul className="flex justify-around items-center border-2 border-black rounded-[30px] mx-[40px] h-[60px] mt-5">
        <li>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </li>
        <li>
          <a className="  font-bold hover:underline   " href="#">
            Side-Event
          </a>
        </li>
        <li>
          <a className="  font-bold hover:underline  " href="#">
            Sponsor
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
