import "swiper/css";

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
      <div className="text-white  px-126 flex flex-col items-center text-center">
        <h3 className="text-[26px] font-bold pb-2">Best Seller</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
      </div>
    <div className="flex px-10 gap-8 py-20">
      {books.map((book) => (
        <div key={book} className="rounded-2xl overflow-hidden">
          <img src={`./public/${book}.png`} alt={book} loading="lazy" />
        </div>
      ))}
    </div>
    <div className="flex justify-center">
      <button onClick={(()=>{
        console.log(data);
        
      })} className="bg-[#D9176C] text-white py-3 px-10 rounded-[10px] text-[16px] font-semibold">Shop now</button>
    </div>
    </div>
</>

  );
}
