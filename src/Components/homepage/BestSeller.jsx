import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function BestSeller() {
  const books = [
    "book-1",
    "book-2",
    "book-3",
    "book-4",
    "book-5",
    "book-6",
    "book-7",
  ];
  const data = JSON.parse(localStorage.getItem("contactData"));
  return (
    <>
      <div className="bg-[#3B2F4A] py-30">
        <div className="text-white  px-126 flex flex-col items-center text-center pb-10">
          <h3 className="text-[26px] font-bold pb-2">Best Seller</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0, 
            disableOnInteraction: false,
          }}
          navigation={true}
          speed={2000}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide className="rounded-2xl overflow-hidden ">
              <img className="rounded-2xl" src={`./public/${book}.png`} alt={book} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center pt-10">
          <button
            onClick={() => {
              console.log(data);
            }}
            className="bg-[#D9176C] text-white py-3 px-10 rounded-[10px] text-[16px] font-semibold"
          >
            Shop now
          </button>
        </div>
      </div>
    </>
  );
}
