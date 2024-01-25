"use client";

import Container from "@/components/container";
import ProductCampaigns from "./components/ProductCampaigns";
import ProductOffers from "./components/ProductOffers";
import Stores from "./components/Stores";
import AccountConfirmation from "./components/AccountConfirmation";

const HomePage = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-8">
          <Stores />
          <ProductCampaigns />
          <ProductOffers />
        </div>
      </Container>
      <AccountConfirmation />
    </>
  );
};

export default HomePage;
