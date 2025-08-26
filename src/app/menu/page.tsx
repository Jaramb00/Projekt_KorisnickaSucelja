"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import menuData from "@/app/MenuData"; // adjust path as needed
import "../globals.css"; // import global styles

export default function MenuPage() {
  const [search, setSearch] = useState("");

  const filteredMenuData = menuData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="menu-page">
      <div className="menu-search-container">
        <form className="menu-search-form">
          <input
            type="text"
            placeholder="Search for dinner"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="menu-search-input"
          />
          <FontAwesomeIcon icon={faSearch} className="menu-search-icon" />
        </form>

        <div className="menu-grid">
          {filteredMenuData.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-image-container">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={500}
                  height={300}
                  className="menu-image"
                />
              </div>
              <div className="menu-card-content">
                <p className="menu-name">{item.name}</p>
                <p className="menu-info">{item.info}</p>
                <Link href={`menu/${item.id}`}>
                  <button className="menu-more-btn">More info</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
