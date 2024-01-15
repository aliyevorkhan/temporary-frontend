import React from "react";

import clsx from "clsx";
import Icon from "../icons";

type SearchProps = {
  className?: string;
  searchId?: string;
  onSubmit: (e: React.SyntheticEvent) => void;
  onClear: (e: React.SyntheticEvent) => void;
  onFocus?: (e: React.SyntheticEvent) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyUp?: React.KeyboardEventHandler | undefined;
  name: string;
  value: string;
};

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      className,
      searchId = "search",
      value,
      onSubmit,
      onClear,
      onFocus,
      onKeyUp,
      ...rest
    },
    ref
  ) => {
    return (
      <form
        className="relative flex w-full "
        noValidate
        role="search"
        onSubmit={onSubmit}
      >
        <label htmlFor={searchId} className="flex flex-1 items-center py-0.5">
          <input
            id={searchId}
            className={clsx(
              "text-heading outline-none w-full h-11 ps-5 md:ps-6 pe-14 md:pe-16 bg-skin-full text-skin-base text-sm rounded-full transition-all duration-200"
            )}
            placeholder="Axtar"
            aria-label={searchId}
            autoComplete="off"
            value={value}
            onFocus={onFocus}
            ref={ref}
            onKeyUp={onKeyUp}
            {...rest}
          />
        </label>
        {value ? (
          <button
            type="button"
            onClick={onClear}
            title="Clear search"
            className="absolute top-0 flex items-center justify-center h-full transition duration-200 ease-in-out outline-none end-0 w-14 md:w-16 hover:text-heading focus:outline-none"
          >
            <Icon
              name="close"
              className="w-[17px] h-[17px] text-skin-base text-opacity-40"
            />
          </button>
        ) : (
          <span className="absolute top-0 flex items-center justify-center flex-shrink-0 h-full w-14 md:w-16 end-0 focus:outline-none">
            <Icon
              name="magnifier"
              className="w-5 h-5 text-skin-base text-opacity-40"
            />
          </span>
        )}
      </form>
    );
  }
);

export default Search;
