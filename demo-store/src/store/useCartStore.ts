import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  productSize: string;
  price: number;
  productStock: number;
}

interface Cart {
  products: CartItem[];
  addItem: (cartItem: CartItem) => void;
  removeItem: (id: number) => void;
  totalPrice: () => number;
}

export const useCartStore = create(
  persist(
    (set, get) => ({
      products: [],
      addItem: (cartItem: CartItem) =>
        set((state: Cart) => ({ products: [...state.products, cartItem] })),
      removeItem: (id: number) =>
        set((state) => ({
          products: state.products.filter((cartItem: CartItem) => cartItem.id !== id),
        })),
      totalPrice: () =>
        get().products.reduce(
          (previousValue: number, currentValue: CartItem) => {
            return previousValue + currentValue.price;
          },
          0
        ),
    }),
    {
      name: "cart-store",
    }
  )
);

export default useCartStore;
