import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "../components/ImageContainer";

function Products() {
  return (
    <div className="bg-base-200">
      <section className="max-w-[1440px] mx-auto px-5 pt-10 pb-6">
        <div className="flex flex-col gap-4 rounded-3xl bg-base-100 p-8 shadow-sm">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-primary">
              Katalog va kolleksiyalar
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">
              Mahsulotlar katalogi
            </h1>
            <p className="text-base-content/70">
              Eng yaxshi brendlar, tezkor yetkazib berish va qulay to‘lovlar.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary">Chegirmalar</button>
            <button className="btn btn-outline">Yangi kelganlar</button>
            <Link to="/" className="btn btn-ghost">
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </section>
      <ImageContainer />
    </div>
  );
}

export default Products;
