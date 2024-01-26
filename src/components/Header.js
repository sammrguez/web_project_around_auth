<<<<<<< HEAD
import logo from "../images/logo-vector.svg";

function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={logo} alt="logo del proyecto" />
=======
import logo from '../images/logo-vector.svg';

function Header({ children }) {
  return (
    <section className='header'>
      <img className='header__logo' src={logo} alt='logo del proyecto' />
      {children}
>>>>>>> 0655cacaebc9bb658b14d8b00735e9d57daf195e
    </section>
  );
}
export default Header;
