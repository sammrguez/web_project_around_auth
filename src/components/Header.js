import logo from "../images/logo-vector.svg";

function Header() {
  return (
    <section class="header">
      <img class="header__logo" src={logo} alt="logo del proyecto" />
    </section>
  );
}
export default Header;
