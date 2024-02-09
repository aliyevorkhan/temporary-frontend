import Button from "@/components/form/button";
import InstallmentBadge from "@/components/installment";
import PriceDifference from "@/components/pricedifference";
import { Offer } from "@/services/offers";
import Countdown, { CountdownRenderProps, zeroPad } from "react-countdown";

type Props = {
  offer: Offer;
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
    <div className="flex items-center gap-0.5 font-semibold text-brand">
      <span>{zeroPad(days)}</span>:<span>{zeroPad(hours)}</span>:
      <span>{zeroPad(minutes)}</span>:<span>{zeroPad(seconds)}</span>
    </div>
  );
};

const OfferCard = ({ offer }: Props) => {
  const {
    name,
    image_file,
    price,
    amount_of_discount,
    discount_rate,
    installment,
    redirect_url,
    store,
    end_date,
  } = offer;
  const handleOfferClick = () => {
    window.open(redirect_url, "_blank");
  };

  console.log({installment});

  return (
    <div className="px-4 py-5 flex flex-col rounded overflow-hidden hover:shadow-offerCard border border-[#e3e3e3] transition-all">
      <div className="h-[160px] max-h-[160px] relative">
        <img
          className="object-contain w-full h-full"
          src={image_file}
          alt={name || "Product Image"}
        />

        {discount_rate && (
          <div className="bg-brand-dark absolute left-2 top-2 px-2 rounded flex items-center py-0.5">
            <span className="font-semibold text-white">{discount_rate} %</span>
          </div>
        )}
      </div>
      <div className="flex items-center flex-1 pt-4">
        <span className="text-2xl font-medium ">{offer.name}</span>
      </div>
      <div className="pt-2 mt-auto">
        <PriceDifference amountOfDiscount={amount_of_discount} price={price} />
        <div className="flex justify-between items-center mt-[10px] mb-5">
          <div>
            <Countdown
              date={new Date(end_date)}
              intervalDelay={1000}
              renderer={renderer}
            />
          </div>
          <div>
            <InstallmentBadge {...installment} />
          </div>
        </div>
        <div className="flex gap-1 text-lg">
          <span className="font-medium">Market:</span>
          <span className="font-normal">{store.name}</span>
        </div>
        <div className="pt-4">
          <Button
            className="w-full"
            size="sm"
            onClick={() => handleOfferClick()}
          >
            Mehsula bax
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
