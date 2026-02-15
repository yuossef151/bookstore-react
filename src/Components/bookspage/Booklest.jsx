import { useContext, useEffect, useMemo, useState } from "react";
import Bookdata from "./Bookdata";
import Categories from "./Categories";
import { getbooksAPI, getcartAPI, getcategoryAPI } from "../../API/Auth";
import { filter } from "lodash";
import { CartContext } from "../cartpage/CartContext";

export default function Booklest() {
  const [books, setbooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setpage] = useState(1);
  const [pages, setpages] = useState([]);
  const { cart, loading } = useContext(CartContext);

  useEffect(() => {
    const bookapi = async () => {
      try {
        const res = await getbooksAPI(page, {
          params: {
            filters: {
              category_name: {
                $in: "Petroleum Pump Operator",
              },
            },
          },
        });
        setbooks(res.data.data.books);
        setpages(res.data.data.pagination_links.meta);
        console.log(res.data.data.pagination_links.meta);
      } catch (error) {
        console.log(error);
      }
    };
    const categoryapi = async () => {
      try {
        const res = await getcategoryAPI();
        // console.log(res.data.data.items);
        setCategories(res.data.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    bookapi();
    categoryapi();
  }, [page]);

  const totalCount = categories.reduce((sum, cat) => {
    return sum + cat.books_count;
  }, 0);

  console.log(totalCount);
  return (
    <>
      <div className="flex bg-[#F5F5F5] ">
        <Categories category={categories} />
        <div className="grow">
          <Bookdata
            page={page}
            pages={pages}
            settpage={setpage}
            book={books}
            cart ={cart}
            booktotal={totalCount}
          />
        </div>
      </div>
    </>
  );
}
