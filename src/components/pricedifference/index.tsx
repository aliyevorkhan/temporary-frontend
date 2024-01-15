type Props = {
  price: string;
  amountOfDiscount: string;
};

const PriceDifference = (props: Props) => {
  const { amountOfDiscount, price } = props;

  return (
    <div className="flex flex-row items-center gap-1">
      <span className="text-xl font-medium">{price} ₼</span>
      <del className="text-base text-[#9597AB]">
        {parseFloat(price) + parseFloat(amountOfDiscount)} ₼
      </del>
    </div>
  );
};

export default PriceDifference;
