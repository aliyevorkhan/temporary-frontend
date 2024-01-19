import Icon from "@/components/icons";
import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";

const ProfileNavigations = () => {
  const { logout, fetch } = useAuth();

  return (
    <div>
      <nav className="flex flex-col pb-2 md:pb-6 border border-border-base rounded-md">
        <Link
          href="/profile/settings"
          className="flex items-center cursor-pointer text-sm lg:text-lg py-3.5 px-3.6 lg:px-4 hover:bg-[#f4f6f9] hover:text-brand gap-3 text-black group"
        >
          <Icon
            name="account"
            className="group-hover:stroke-brand group-hover:fill-brand"
          />

          <span>Hesabım</span>
        </Link>
        <Link
          href="/profile/settings"
          className="flex items-center cursor-pointer text-sm lg:text-lg py-3.5 px-3.6 lg:px-4 hover:bg-[#f4f6f9] hover:text-brand gap-3 text-black group"
        >
          <Icon name="settings" className="group-hover:stroke-brand" />

          <span>Tənzimləmələr</span>
        </Link>

        <button
          className="flex items-center cursor-pointer text-sm lg:text-lg py-3.5 px-3.6 lg:px-4 hover:bg-[#f4f6f9] hover:text-brand gap-3 text-black group"
          onClick={() => {
            logout();
          }}
        >
          <Icon name="lock" className="group-hover:fill-brand" />

          <span>Hesabdan çıxış</span>
        </button>
      </nav>
    </div>
  );
};

export default ProfileNavigations;
