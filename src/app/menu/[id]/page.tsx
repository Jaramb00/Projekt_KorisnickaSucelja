"use client";
import Link from "next/link";
import menuData from "@/app/MenuData";
import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation"; // Ispravan način dohvaćanja params

export default function Ingredients() {
  const params = useParams(); // Dohvaćamo params pomoću useParams()
  const { id } = params; // Sada ispravno radi
  const meal = menuData.find((dest) => String(dest.id) === id);

  if (!meal) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#0a0808] to-[#1a1a1a] flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#86A7DF]">Meal not found</h1>
        <Link href="/menu">
          <button className="px-8 py-3 bg-[#86A7DF] hover:bg-[#5482d2] text-white rounded-xl transition-colors duration-300 flex items-center">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to menu
          </button>
        </Link>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0808] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-12">
          <Link href="/menu">
            <button className="text-[#86A7DF] hover:text-[#5482d2] transition-colors duration-300 flex items-center">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to the menu
            </button>
          </Link>
        </div>

        {/* Meal Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#86A7DF] mb-6">
            Ingredients for {meal.name}
          </h1>
          <div className="relative w-full max-w-4xl mx-auto h-96 rounded-3xl overflow-hidden shadow-2xl">
          <div className="w-full max-w-lg mx-auto">
  <Image
    src={meal.img}
    alt={meal.name}
    width={500}
    height={300}
    className="rounded-lg object-cover w-full"
  />
</div>
           
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {meal.ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border-2 border-gray-800 hover:border-[#86A7DF] transition-all duration-300"
            >
              <div className="flex items-center">
                <span className="text-[#86A7DF] mr-3">▹</span>
                <h2 className="text-xl font-semibold text-white">
                  {ingredient.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
