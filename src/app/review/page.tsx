"use client";

import { useState } from "react";
import Link from "next/link";

interface Review {
  name: string;
  text: string;
  rating: number;
}

export default function ReviewPage() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Molimo odaberite ocjenu zvjezdicama.");
      return;
    }

    setReviews([{ name, text, rating }, ...reviews]);
    setName("");
    setText("");
    setRating(0);
    setHoverRating(0);
  };

  return (
    <main className="review-page">
      <h1 className="review-title">Ostavi recenziju</h1>

      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          placeholder="Vaše ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="review-input"
          required
        />

        <textarea
          placeholder="Vaša recenzija"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="review-textarea"
          rows={4}
          required
        />

        <div className="review-stars">
          {[1, 2, 3, 4, 5].map((star) => {
            const isActive = hoverRating >= star || (!hoverRating && rating >= star);
            return (
              <span
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className={`review-star ${isActive ? "active" : ""}`}
              >
                ★
              </span>
            );
          })}
        </div>

        <button type="submit" className="review-submit">
          Pošalji recenziju
        </button>
      </form>

      <div className="review-list">
        {reviews.length === 0 && <p className="review-empty">Još nema recenzija.</p>}
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <div className="review-header">
              <span className="review-name">{r.name}</span>
              <span className="review-rating">
                {[1, 2, 3, 4, 5].map((star) =>
                  star <= r.rating ? "★" : "☆"
                ).join("")}
              </span>
            </div>
            <p className="review-text">{r.text}</p>
          </div>
        ))}
      </div>

      <Link href="/" className="review-back">
        ← Povratak na početnu
      </Link>
    </main>
  );
}
