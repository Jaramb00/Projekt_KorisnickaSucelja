import ImageTextComponent from "./components/HomeImageText";

export default function Home() {
  return (
    <div>
      <div className="relative home-background-pic">
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl lg:text-6xl md:text-4xl sm:text-2xl font-cursive text-center w-full p-4 sm:p-2 md:p-4 lg:p-6">
         Opis restorana
        </h2>
        <img
          src="img/backgroundPhotoRestourant.jpg"
          alt="Restaurant Background"
          className="w-full h-auto object-cover"
        />
      </div>
      <div>
        <ImageTextComponent
          title="Menu"
          description="Opis restorana i menia"
          imageUrl="/img/plate1.jpg"
          reverse
        />
        <ImageTextComponent
          title="Reserve"
          description="Poziv za rezervaciju"
          imageUrl="/img/plate2.webp"
        />
      </div>
    </div>
  );
}
