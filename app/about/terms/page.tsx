import TermsAccordion from "@/app/components/TermsAccordion";
import styles from "./Terms.module.css";
import HeroJustText from "@/app/components/HeroJustText";

export default function Terms() {
  const terms = [
    {
      title: "Bookings & Payment",
      content:
        "Bookings will be paid in full prior to the commencement of the lesson. Alpine Sports Andermatt reserves the right to refuse any client if payment has not been made in full prior to the start of the lesson.",
    },
    {
      title: "Cancellations & Amendments",
      content:
        "Bookings can be cancelled or amended free of charge up to 14 days prior to your booking commencing. For cancellations or amendments made fewer than 14 days before arrival, a charge of 50% of the total amount will be levied. Cancellations received less than 24 hours before the reservation was due to start will be charged in full.",
    },
    {
      title: "Weather Conditions",
      content:
        "Our snow sport instructors teach in all weather conditions. Lessons will be cancelled and refunded in full if all lifts in the Andermatt-Sedrun ski area are closed and no suitable alternatives are available.",
    },
    {
      title: "Health & Insurance",
      content:
        "In cases of sickness or injury, refunds will be issued upon presentation of a valid medical certificate. Clients are responsible for their own insurance.",
    },
    {
      title: "Liability",
      content:
        "Alpine Sports Andermatt does not accept liability for accidents during lessons or organised events. Lift passes are obligatory and the responsibility of the client.",
    },
  ];

  return (
    <>
    
    <HeroJustText 
      text="GENERAL BUSINESS TERMS AND CONDITIONS OF ALPINE SPORTS"
    />
    <section className={styles.terms}>
      <TermsAccordion items={terms} />
    </section>
    </>
    
  );
}
