"use client";

import Link from "next/link";
import menuData from "@/app/MenuData";
import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";

export default function Ingredients() {
  const params = useParams();
  const { id } = params;
  const meal = menuData.find((dest) => String(dest.id) === id);

  if (!meal) {
    return (
      <main className="ingredients-page-notfound">
        <h1>Meal not found</h1>
        <Link href="/menu">
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to menu
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="ingredients-page">
      <div className="ingredients-container">
        {/* Back Button */}
        <div className="ingredients-back">
          <Link href="/menu">
            <button>
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to the menu
            </button>
          </Link>
        </div>

        {/* Meal Header */}
        <div className="ingredients-header">
          <h1>Ingredients for {meal.name}</h1>
          <div className="ingredients-image-container">
            <Image
              src={meal.img}
              alt={meal.name}
              width={500}
              height={300}
              className="ingredients-image"
            />
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="ingredients-grid">
          {meal.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredients-card">
              <span>▹</span>
              <h2>{ingredient.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
