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
                        setTotalPages(Math.ceil(total / limit)); // sahifalar sonini hisoblash
                    } else {
                        console.error("Kutilgan array emas:", data);
                    }
                }
            })
            .catch((err) => {
                console.error("Xatolik:", err.message);
            });
    }, [currentPage]);


    return (
        <div className="max-w-[1400px] mx-auto p-5">
            <div className="mt-5 mb-5 justify-center text-center flex w-full ">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <FaSearch className="h-4 w-4 opacity-70" />
                </label>
                <button className="btn btn-primary ml-2"> search</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        className="border-2 shadow-xl cursor-pointer hover:shadow-none transition hover:scale-[1.02] duration-500 border-base-300 flex p-5 rounded-lg flex-col items-center justify-center"
                        key={index}
                    >
                        <img
                            src={image.thumbnail}
                            alt={image.description}
                            className="w-40 h-40 sm:w-60 sm:h-60 rounded-lg bg-white mb-4"
                        />
                        <p>{image.title}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-6">
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
    );
}

export default ImageContainer;
