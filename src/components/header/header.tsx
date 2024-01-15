import Image from "next/image";
import Container from "../container";
import Link from "next/link";
import AuthMenu from "./authmenu";
import SearchInput from "../search-input";

const Header = () => {
  return (
    <header className="bg-brand py-4">
      <Container>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap">
          <div className="h-[80px] w-[80px] relative lg:order-none">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="object-contain"
                fill
              />
            </Link>
          </div>

          <div className="order-3 lg:order-none w-full lg:w-max">
            <SearchInput />
          </div>
          <div className="order-2 lg:order-none">
            <AuthMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
