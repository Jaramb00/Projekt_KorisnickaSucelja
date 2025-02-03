import ImageTextComponent from "./components/HomeImageText";

export default function Home() {
  return (
    <div className="relative home-background-pic">
      {/* Pozadinska slika restorana */}
      <img
        src="img/matejuska.jpg"
        alt="Restaurant Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay za tamniji efekt (po potrebi) */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Kontejner za naslov i opis */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white p-6">
        {/* Naslov restorana */}
        <h2 className="text-4xl lg:text-6xl md:text-4xl sm:text-2xl font-cursive w-full p-4 sm:p-2 md:p-4 lg:p-6">
          Welcome to A'Familia – A Fine Dining Experience
        </h2>
      </div>

      {/* Sekcija s dodatnim sadržajem */}
      <div>
        <ImageTextComponent
          title="Menu"
          description="Take a peek at our menu and discover a delightful selection of Dalmatian-inspired dishes! From fresh seafood and traditional delicacies to mouthwatering desserts, every bite is crafted with passion and authentic flavors. Enjoy the taste of the Adriatic in every dish!"
          imageUrl="/img/lignje.jpg"
          reverse
        />
        <ImageTextComponent
          title="Reservations"
          description="Reserve your table and experience a memorable dining experience with us! Whether it's a special occasion or a casual meal, we're here to ensure you have a fantastic time. Book now and enjoy the finest Dalmatian cuisine in a cozy and inviting atmosphere."
          imageUrl="/img/grilled_fish.jpg"
        />
      </div>
    </div>
  );
}
