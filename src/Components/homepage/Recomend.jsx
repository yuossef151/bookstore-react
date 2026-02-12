import { useEffect, useState } from "react";
import { getbooks } from "../../API/Auth";
import Star from "./Star";

export default function Recomend() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getbooks();
        setBook(res.data.data.recommended);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);
  console.log(book);
  const bookimg = ["./public/book-1.png", "./public/book-5.png"];
  console.log(bookimg[0]);

  return (
    <>
      <div className="lg:py-30 py-3 px-5 md:py-15 lg:px-15 bg-[#F5F5F5]">
        <p className="pb-10 lg:text-[26px] text-[20px] font-bold">Recomended For You</p>
        <div className="flex flex-col lg:flex-row gap-6 w-full ">
          {book.map((el, index) => (
            <div
              key={el.id || index}
              className="flex flex-col md:flex-row lg:flex-row  lg:p-10 p-4 bg-white gap-9.75 lg:w-1/2 "
            >
              <img className=" h-80" src={bookimg[index]} alt="" />

              <div>
                <h3 className="text-[18px] font-bold">{el.bookName}</h3>
                <p className="pb-2 pt-1 text-[#22222280]">
                  Author:{" "}
                  <span className="text-black font-medium">{el.author}</span>
                </p>
                <p className="text-[#22222280]">{el.description}</p>
                <div className="flex  justify-between items-center pt-6 gap-3 lg:gap-0">
                  <div>
                    <Star rate={el.rate} countReview={el.countReview} />
                    <p>{el.rate}</p>
                  </div>
                  <div>
                    <p className="text-green-500 text-end">
                      Discount: {el.discount}%
                    </p>
                    <div className="flex gap-1 items-end ">
                      <p className="text-[18px] font-medium">
                        ${el.final_price}
                      </p>
                      <span className="text-red-500">
                        <del>${el.price}</del>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <button className="flex grow-4 bg-[#D9176C] py-3.25 justify-center rounded-lg items-center text-white">
                    Add To Cart
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 512 512"
                    >
                      <circle
                        cx={176}
                        cy={416}
                        r={16}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                      ></circle>
                      <circle
                        cx={400}
                        cy={416}
                        r={16}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                      ></circle>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M48 80h64l48 272h256"
                      ></path>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
                      ></path>
                    </svg>
                  </button>
                  <button className="flex grow py-3.25 justify-center rounded-lg border border-[#D9176C] text-[#D9176C]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
