import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../../Context/CartContext';

export default function Cart() {
  const { cart, removeItem, updateQuantity, total } = useContext(CartContext);

  const sendWhatsApp = () => {
    const text = cart
      .map((item) => `${item.name} - الكمية: ${item.quantity}`)
      .join('%0A');
    const url = `https://wa.me/201286178631?text=مرحبا، هذه طلبيتي:%0A${text}%0Aإجمالي السعر: ${total} جنيه`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#f8f1ec] py-24 px-6  w-full h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-[#fdfaf8] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-[#5a3d2b]">عربة التسوق</h2>
        {cart.length === 0 ? (
          <p className="text-[#5a3d2b]">العربة فارغة</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1 mx-4">
                  <h3 className="font-semibold text-[#5a3d2b]">{item.name}</h3>
                  <p className="text-[#5a3d2b]">{item.price} جنيه للواحدة</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 bg-[#e8d9cc] rounded hover:bg-[#d4c1b0]"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 bg-[#e8d9cc] rounded hover:bg-[#d4c1b0]"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-4 text-lg font-semibold text-[#7e5a3d]">
              <span>الإجمالي:</span>
              <span>{total} جنيه</span>
            </div>

            <button
              onClick={sendWhatsApp}
              className="mt-4 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              تواصل عبر واتساب
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
