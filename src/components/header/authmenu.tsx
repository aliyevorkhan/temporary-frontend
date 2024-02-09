import { useAuth } from "@/providers/AuthProvider";
import Icon from "../icons";
import Link from "next/link";

type AuthMenuProps = {
  onClick?: () => void;
};

const AuthMenu = (props: AuthMenuProps) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <div className="">
      {user ? (
        <Link href="/profile" className="flex items-center">
          <div className="h-11 w-11 bg-white flex justify-center items-center rounded-full">
            <Icon name="user" className="fill-brand" />
          </div>
          <div>
            <span className="text-sm font-medium text-white focus:outline-none ms-2">
              Hesabım
            </span>
          </div>
        </Link>
      ) : (
        <button className="flex items-center" onClick={() => props.onClick?.()}>
          <div className="h-11 w-11 bg-white flex justify-center items-center rounded-full">
            <Icon name="user" className="fill-brand" />
          </div>

          <div className="hidden lg:block">
            <span className="text-sm font-medium text-white focus:outline-none ms-2">
              Daxil ol
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

export default AuthMenu;
