export default function Categories({ category }) {
//   console.log(category);
  return (
    <>
      <div className="w-100  h-full pt-15 pb-24 ps-10 pe-5">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={1.5}
              d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
            ></path>
          </svg>
          <p>Filter</p>
        </div>
        <div className="  bg-white p-5 mt-5">
          <p>Categories</p>
          <div className="flex flex-col gap-4 py-5">
            {category.map((el, endix) => {
              return (
                <div className="flex gap-1" key={endix}>
                    <input id={el.categoryName} type="checkbox" />
                  <label className="flex justify-between w-full" htmlFor={el.categoryName}>
                    <p>{el.categoryName}</p>
                    <p className="text-[14px] text-[#22222280]">({el.books_count})</p>
                  </label>
                </div>
              );
            })}
          </div>
          <p>Load More</p>
        </div>
      </div>
    </>
  );
}
