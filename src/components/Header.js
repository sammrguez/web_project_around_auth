import logo from "../images/logo-vector.svg";

function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={logo} alt="logo del proyecto" />
    </section>
  );
}
export default Header;
