import Icon, { IconNames } from "@/components/icons";
import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigations = [
  {
    href: "/profile",
    icon: "account",
    title: "Hesabım",
  },
  {
    href: "/profile/settings",
    icon: "settings",
    title: "Tənzimləmələr",
  },
  {
    href: "/profile/password-change",
    icon: "settings",
    title: "Şifrəni dəyiş",
  },
];

const ProfileNavigations = () => {
  const { logout } = useAuth();
  const pathname = usePathname();

  return (
    <div>
      <nav className="flex flex-col pb-2 md:pb-6 border border-border-base rounded-md">
        {navigations.map((navigation, index) => (
          <Link
            key={index}
            href={navigation.href}
            className={`flex items-center cursor-pointer text-sm lg:text-lg py-3.5 px-3.6 lg:px-4 hover:bg-[#f4f6f9] hover:text-brand gap-3 text-black group ${
              pathname === navigation.href
                ? "bg-[#f4f6f9] text-brand"
                : "text-black"
            }`}
          >
            <Icon name={navigation.icon as IconNames} />

            <span>{navigation.title}</span>
          </Link>
        ))}

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
