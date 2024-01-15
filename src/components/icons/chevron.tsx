import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  direction?: "up" | "down" | "left" | "right";
};

const ChevronIcon = (props: Props) => {
  const { direction, ...rest } = props;

  if (direction === "up") {
    return (
      <svg
        fill="#374151"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9 9.4-9.4 24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9L294.1 256z"></path>
      </svg>
    );
  }

  if (direction === "down") {
    // copiliot will generate me correct down icon here

    return (
      <svg
        fill="#374151"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path d="M256 313l136-136c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L256 244.1 154 142c-9.4-9.4-24.6-9.3-34 0-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.4 24.6 9.3 34 0z"></path>
      </svg>
    );
  }

  if (direction === "right") {
    return (
      <svg
        fill="#374151"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9 9.4-9.4 24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9L294.1 256z"></path>
      </svg>
    );
  }

  return (
    <svg
      fill="#374151"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
    </svg>
  );
};

export default ChevronIcon;
