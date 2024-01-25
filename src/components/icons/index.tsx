import { ReactElement } from "react";
import MagnifierIcon from "./magnifier";
import ChevronIcon from "./chevron";
import UserIcon from "./user";
import CloseIcon from "./close";
import SearchIcon from "./search";
import EyeIcon from "./eye";
import EyeOff from "./eye-off";
import EyeOffIcon from "./eye-off";
import AccountIcon from "./account";
import SettingsIcon from "./settings";
import LockIcon from "./lock";
import OrderIcon from "./order";
import CheckIcon from "./check";

export type IconNames =
  | "account"
  | "check"
  | "eye"
  | "eye-off"
  | "magnifier"
  | "close"
  | "chevron-left"
  | "chevron-right"
  | "chevron-down"
  | "chevron-up"
  | "lock"
  | "order"
  | "search"
  | "settings"
  | "user";

type Props = {
  name: IconNames;
  className?: string;
};

const Icon = (props: Props) => {
  const { name, className = "" } = props;
  let Component: ((props: Props) => ReactElement) | null = null;
  let additionalProps = {};

  switch (name) {
    case "magnifier":
      Component = MagnifierIcon;
      break;
    case "chevron-left":
      Component = ChevronIcon;
      additionalProps = {
        direction: "left",
      };
      break;
    case "chevron-right":
      Component = ChevronIcon;
      additionalProps = {
        direction: "right",
      };
      break;
    case "chevron-down":
      Component = ChevronIcon;
      additionalProps = {
        direction: "down",
      };
      break;
    case "chevron-up":
      Component = ChevronIcon;
      additionalProps = {
        direction: "up",
      };
      break;
    case "user":
      Component = UserIcon;
      break;
    case "search":
      Component = SearchIcon;
      break;
    case "close":
      Component = CloseIcon;
      break;
    case "eye":
      Component = EyeIcon;
      break;
    case "eye-off":
      Component = EyeOffIcon;
      break;
    case "account":
      Component = AccountIcon;
      break;
    case "settings":
      Component = SettingsIcon;
      break;
    case "lock":
      Component = LockIcon;
      break;
    case "order":
      Component = OrderIcon;
    case "check":
      Component = CheckIcon;
    default:
  }

  if (!Component) {
    return null;
  }

  return <Component {...props} {...additionalProps} className={className} />;
};

export default Icon;
