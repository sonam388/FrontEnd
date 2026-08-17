import { useState } from "react";

import DonationHero from "../components/donation/DonationHero";

import DonationForm from "../components/donation/DonationForm";

const Donation = () => {
  const [amount, setAmount] = useState(501);

  return (
    <>
      <DonationHero />
      
      <DonationForm amount={amount} />
    </>
  );
};

export default Donation;