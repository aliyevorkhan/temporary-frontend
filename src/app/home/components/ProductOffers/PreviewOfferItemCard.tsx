import clsx from "clsx";
import Countdown, { CountdownRenderProps, zeroPad } from "react-countdown";
import { Offer } from "@/services/offers";
import InstallmentBadge from "@/components/installment";

type ProductProps = {
  offer: Offer;
  className?: string;
  endDate: string;
};

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return null;
  }

  return (
    <>
      <h2 className="mb-2 text-skin-base text-opacity-60 sm:text-sm lg:text-15px">
        Bitmə vaxti
      </h2>
      <div className="flex items-center gap-0.5 font-semibold text-brand">
        <span>{zeroPad(days)}</span>:<span>{zeroPad(hours)}</span>:
        <span>{zeroPad(minutes)}</span>:<span>{zeroPad(seconds)}</span>
      </div>
    </>
  );
};

const PreviewOfferItemCard = ({ offer, className, endDate }: ProductProps) => {
  const {
    name,
    image_url,
    image_file,
    price,
    amount_of_discount,
    discount_rate,
    installment,
    redirect_url,
    store,
  } = offer ?? {};

  const handleOfferClick = () => {
    window.open(redirect_url, "_blank");
  };

  return (
    <article
      className={clsx(
        "flex flex-col justify-between group cursor-pointer relative px-4 lg:px-4",
        className
      )}
      onClick={handleOfferClick}
      title={name}
    >
      <div className="flex gap-[70px] hover:shadow-previewOfferCard px-4 transition-all border-x border-[#e3e3e3]">
        <div className="relative col-span-12 sm:col-span-3">
          <div className="relative flex justify-center mx-auto overflow-hidden h-[350px]">
            <img
              src={image_file}
              alt={name || "Product Image"}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="w-full h-full absolute top-0 z-10 -mx-0.5 sm:-mx-1">
            <span className="text-[10px]  text-white uppercase inline-block bg-brand rounded-sm px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
              {discount_rate}%
            </span>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-4 flex flex-col pb-5 lg:pb-6 mb-0.5 lg:pt-3 h-full">
          <h2 className="mb-4 text-base font-semibold text-skin-base">
            {name}
          </h2>
          <div className="mb-1 flex gap-1 items-center lg:mb-4">
            <span className="inline-block text-sm font-semibold sm:text-15px lg:text-base text-skin-primary">
              {price} ₼
            </span>
            {price && (
              <del className="text-sm text-skin-base text-opacity-70">
                {parseFloat(price) + parseFloat(amount_of_discount)} ₼
              </del>
            )}
          </div>
          <Countdown
            date={new Date(endDate)}
            intervalDelay={1000}
            renderer={renderer}
          />

          <div className="flex justify-between mt-4 flex-col lg:flex-row lg:items-center">
            <div>
              <span className="font-medium">Market:</span>
              <span className="font-normal">{store.name}</span>
            </div>

            <div className="w-max">
              <InstallmentBadge {...installment} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PreviewOfferItemCard;
