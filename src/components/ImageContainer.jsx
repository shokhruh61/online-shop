import React, { useEffect, useState } from "react";
import { request } from "../util/request";
import { FaSearch } from "react-icons/fa";

function ImageContainer() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const limit = 10;
    const skip = (currentPage - 1) * limit;

    request
      .get(`/products?limit=${limit}&skip=${skip}`)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.products;
          if (Array.isArray(data)) {
            setImages(data);
            const total = res.data.total || 0;
            setTotalPages(Math.ceil(total / limit));
          } else {
            console.error("Kutilgan array emas:", data);
          }
        }
      })
      .catch((err) => {
        console.error("Xatolik:", err.message);
      });
  }, [currentPage]);

  const categories = [
    "Elektronika",
    "Moda",
    "Go‘zallik",
    "Uy & Ofis",
    "Sport",
    "Bolalar",
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-5 pb-12">
      <div className="flex flex-col gap-6 rounded-3xl bg-base-100 p-6 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-primary font-semibold">
              Eng ko‘p sotilganlar
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Trend mahsulotlar
            </h2>
            <p className="text-sm text-base-content/70 mt-2">
              Mashhur brendlar, chegirmalar va yangi kelgan mahsulotlar.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
              <input
                type="text"
                className="grow"
                placeholder="Mahsulot qidirish"
              />
              <FaSearch className="h-4 w-4 opacity-70" />
            </label>
            <select className="select select-bordered w-full sm:w-52">
              <option>Eng yangi</option>
              <option>Narx: arzon</option>
              <option>Narx: qimmat</option>
              <option>Reyting bo‘yicha</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="btn btn-sm btn-outline btn-primary"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((image) => (
            <div
              className="group border border-base-200 rounded-2xl p-4 transition hover:-translate-y-1 hover:shadow-lg bg-base-100"
              key={image.id}
            >
              <div className="relative rounded-xl bg-base-200/60 p-3">
                <img
                  src={image.thumbnail}
                  alt={image.description}
                  className="h-40 w-full object-contain"
                />
                {image.discountPercentage ? (
                  <span className="badge badge-secondary absolute left-3 top-3">
                    -{Math.round(image.discountPercentage)}%
                  </span>
                ) : null}
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold">{image.title}</h3>
                <p className="text-sm text-base-content/70">
                  {image.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">${image.price}</p>
                  <span className="badge badge-outline">
                    ⭐ {image.rating}
                  </span>
                </div>
                <div className="flex gap-2 pt-2">
                  <button className="btn btn-primary btn-sm flex-1">
                    Savatga
                  </button>
                  <button className="btn btn-outline btn-sm">
                    Batafsil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-base-200 pt-5">
          <p className="text-sm text-base-content/60">
            Sahifa {currentPage} / {totalPages}
          </p>
          <div className="join">
            <button
              className="join-item btn"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              1
            </button>
            <button
              className="join-item btn"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="join-item btn"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
            <button
              className="join-item btn"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              {totalPages}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageContainer;
