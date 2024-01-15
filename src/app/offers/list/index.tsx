import Container from "@/components/container";
import OfferCard from "./offer-card";
import { Offer } from "@/services/offers";

type Props = {
  offerResponse: Pagination<Offer>;
};

const OffersList = ({ offerResponse }: Props) => {
  const { results: offers } = offerResponse;

  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {offers.map((offer) => (
          <OfferCard offer={offer} />
        ))}
      </div>
    </Container>
  );
};

export default OffersList;
