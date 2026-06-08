import { useState } from "react";
import DonationCards from "../components/donation/DonationCards";
import ImpactSection from "../components/donation/ImpactSection";
import DonationForm from "../components/donation/DonationForm";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(1100);

  return (
    <>
      <DonationForm
        selectedAmount={selectedAmount}
      />
      <DonationCards
        onSelectAmount={setSelectedAmount}
      />
      <ImpactSection />
    </>
  );
};

export default Donation;