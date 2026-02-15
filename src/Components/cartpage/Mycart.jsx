import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FaPlusCircle, FaMinusCircle, FaTrashAlt } from "react-icons/fa";

export default function Mycart() {
  const { Cart, setCart } = useContext(CartContext);
  console.log(Cart);
  const mycart = Cart.cart;

  const increaseQty = (index) => {
    setCart((prev) => {
      const newCart = [...prev.cart];
      newCart[index].quantity = (newCart[index].quantity || 1) + 1;
      return { ...prev, cart: newCart };
    });
  };

  // تقليل الكمية
  const decreaseQty = (index) => {
    setCart((prev) => {
      const newCart = [...prev.cart];
      const currentQty = newCart[index].quantity || 1;
      if (currentQty > 1) {
        newCart[index].quantity = currentQty - 1;
        return { ...prev, cart: newCart };
      }
      return prev; // لو الكمية 1، ما نغير شيء
    });
  };

  // حذف عنصر
  const removeItem = (index) => {
    setCart((prev) => {
      const newCart = [...prev.cart];
      newCart.splice(index, 1);
      return { ...prev, cart: newCart };
    });
  };

  return (
    <>
      <div className=" w-full lg:h-30 h-25 inset-0">
        <img
          className=" object-cover w-full h-full rotate-180   top-0 "
          src="./public/imglogin.png"
          alt=""
        />
        <div className="absolute w-full lg:h-30 h-25 inset-0 bg-[#00000099] flex items-center justify-center "></div>
      </div>

      <div className="px-15 bg-[#F5F5F5]">
        <table
          className="w-full table-auto bg-[#F5F5F5] "
          style={{ borderCollapse: "separate", borderSpacing: "0 1rem" }}
        >
          <thead>
            <tr className="bg-[#F5F5F5]">
              <th className="py-4 px-6 text-left font-semibold text-gray-700">
                Item
              </th>
              <th className="py-4 px-6 text-center font-semibold text-gray-700">
                Quantity
              </th>
              <th className="py-4 px-6 text-right font-semibold text-gray-700">
                Price
              </th>
              <th className="py-4 px-6 text-right font-semibold text-gray-700">
                Total Price
              </th>
              <th className="py-4 px-6 text-center font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody
            style={{ borderCollapse: "separate", borderSpacing: "0 1rem" }}
            className="bg-[#F5F5F5]"
          >
            {mycart.map((el, index) => (
              <tr
                key={el.id || index}
                className="bg-white "
                style={{ borderRadius: "8px" }}
              >
                {/* Item */}
                <td className="flex gap-4 items-start py-6 px-6 max-w-lg">
                  <img
                    src={el.image || `/book-${index + 1}.png`}
                    alt={el.bookName}
                    className="w-42.5 h-62.5 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{el.bookName}</h3>
                    <p className="text-gray-600 text-sm">
                      Author: <span className="font-medium">{el.author}</span>
                    </p>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-3">
                      {el.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-10">
                      ASIN: {el.asin || "B09TWSRMCB"}
                    </p>
                  </div>
                </td>

                {/* Quantity */}
                <td className="text-center py-6 px-6">
                  <div className="inline-flex items-center gap-3 text-pink-600">
                    <button
                      onClick={() => {
                        el.quantity == 1
                          ? removeItem(index)
                          : decreaseQty(index);
                      }}
                      aria-label="Decrease quantity"
                    >
                      <FaMinusCircle size={20} />
                    </button>
                    <span className="text-lg font-semibold">
                      {el.quantity || 1}
                    </span>
                    <button
                      onClick={() => increaseQty(index)}
                      aria-label="Increase quantity"
                    >
                      <FaPlusCircle size={20} />
                    </button>
                  </div>
                </td>

                {/* Price */}
                <td className="text-right py-6 px-6 font-semibold">
                  ${el.final_price.toFixed(2)}
                </td>

                {/* Total Price */}
                <td className="text-right py-6 px-6 font-semibold">
                  ${(el.final_price * (el.quantity || 1)).toFixed(2)}
                </td>

                <td className="text-center py-6 px-6 text-pink-600">
                  <button
                    onClick={() => removeItem(index)}
                    aria-label="Remove item"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
