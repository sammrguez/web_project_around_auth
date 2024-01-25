import logo from '../images/logo-vector.svg';

function Header({ children }) {
  return (
    <section className='header'>
      <img className='header__logo' src={logo} alt='logo del proyecto' />
      {children}
    </section>
  );
}
export default Header;
