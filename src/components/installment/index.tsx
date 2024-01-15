type Props = {
  period: number;
  price: number;
};

const InstallmentBadge = (props: Props) => {
  const { period, price } = props;

  return (
    <div className="px-1 rounded-lg bg-beige">
      <span className="text-sm font-medium text-iridium">
        {price} ₼ x {period} ay
      </span>
    </div>
  );
};

export default InstallmentBadge;
