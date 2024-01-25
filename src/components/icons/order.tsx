import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const OrderIcon = (props: Props) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_848_2785)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.75005 3.38391L1.69199 5.44197L0.808105 4.55809L4.37505 0.991144L7.94199 4.55809L7.05811 5.44197L5.00005 3.38391L5.00005 13.75H3.75005L3.75005 3.38391ZM7.05811 10.442L7.94199 9.55809L10 11.6161V1.25003H11.25V11.6161L13.3081 9.55809L14.192 10.442L10.625 14.0089L7.05811 10.442Z"
          fill="#3A3A3A"
        />
      </g>
      <defs>
        <clipPath id="clip0_848_2785">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OrderIcon;
