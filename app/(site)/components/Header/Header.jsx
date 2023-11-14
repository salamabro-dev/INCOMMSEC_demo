import Hamburger from "./Hamburger";
import Logo from "./Logo";
import ProductAndServices from "./ProductAndServices";
import HeaderClient from "./HeaderClient";

function Header({ disableScroll }) {
  return (
    <>
      <HeaderClient>
        <nav className="flex px-5 lg:px-10 py-5 font-bold items-center bg-primary-white-p">
          <Logo />
          <ProductAndServices disableScroll={disableScroll} />
          <Hamburger />
        </nav>
      </HeaderClient>
    </>
  );
}

export default Header;
