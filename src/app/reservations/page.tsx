import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
};

export default function Reservations() {
  return (
    <main className="reservations-page">
      {/* Header */}
      <h1 className="reservations-title">Reservations</h1>
      <p className="reservations-subtitle">
        Reserve your table easily and enjoy an unforgettable dining experience with us. 
        Whether it’s a romantic dinner, family gathering, or business lunch — we’ve got you covered.
      </p>

      {/* Reservation Info */}
      <div className="reservations-grid md:grid-cols-2">
        <div className="reservations-card">
          <h2 className="reservations-card-title">📞 Call Us</h2>
          <p className="reservations-card-text">Prefer a quick call? Reach us directly:</p>
          <p className="reservations-card-strong">+385 (0)21 123 456</p>
        </div>

        <div className="reservations-card">
          <h2 className="reservations-card-title">📍 Visit Us</h2>
          <p className="reservations-card-text">Our team is happy to help in person:</p>
          <p className="reservations-card-strong">123 Main Street, Split, Croatia</p>
        </div>
      </div>

      {/* Extra info */}
      <section className="reservations-guidelines">
        <h3 className="reservations-guidelines-title">Reservation Guidelines</h3>
        <ul className="reservations-guidelines-list">
          <li>✔️ Please reserve at least 24 hours in advance for weekends.</li>
          <li>✔️ Groups of 8+ should contact us directly by phone.</li>
          <li>✔️ Special requests (allergies, celebrations) are welcome.</li>
        </ul>
      </section>
    </main>
  );
}
