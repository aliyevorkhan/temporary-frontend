import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const OrderIcon = (props: Props) => {
  return (
    <svg
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75005 2.38391L1.69199 4.44197L0.808105 3.55809L4.37505 -0.00885534L7.94199 3.55809L7.05811 4.44197L5.00005 2.38391L5.00005 12.75H3.75005L3.75005 2.38391ZM7.05811 9.44197L7.94199 8.55809L10 10.6161V0.250028H11.25V10.6161L13.3081 8.55809L14.192 9.44197L10.625 13.0089L7.05811 9.44197Z"
        fill="#3A3A3A"
      />
    </svg>
  );
};

export default OrderIcon;
