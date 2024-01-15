import Link from "next/link";
import Icon from "../icons";

const AuthMenu = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="h-11 w-11 bg-white flex justify-center items-center rounded-full">
          <Icon name="user" className="fill-brand" />
        </div>

        <div className="hidden lg:block">
          <span className="text-sm font-medium text-white focus:outline-none ms-2">
            Daxil ol
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AuthMenu;
