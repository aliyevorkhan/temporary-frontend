import { SwiperSlide, Swiper, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import { PropsWithChildren, useRef } from "react";
import Icon from "../icons";
import type { Swiper as SwiperRef } from "swiper";

type Props = PropsWithChildren<SwiperProps>;

const Carousel = (props: Props) => {
  const { children, ...restProps } = props;
  const swiperRef = useRef<SwiperRef>();

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        {...restProps}
      >
        {children}
      </Swiper>

      <div className="flex items-center w-full absolute top-2/4 z-10 justify-between">
        <button
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
          className="prev-arrow absolute top-1/2 -translate-y-1/2 h-10 w-10 rounded-full shadow-navigation hover:bg-brand transition-all flex items-center justify-center bg-white group"
        >
          <Icon name="chevron-left" className="group-hover:fill-white" />
        </button>
        <button
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
          className="prev-arrow absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full shadow-navigation hover:bg-brand transition-all flex items-center justify-center bg-white group"
        >
          <Icon name="chevron-right" className="group-hover:fill-white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
