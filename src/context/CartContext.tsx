import { createContext, useState } from "react";

type CartContextType = {
  isOpen: boolean;
  cartItems: [];
};

type CartDispatchContextType = {
  setIsOpen: (state: unknown) => void;
  setCartItems: (state: unknown) => void;
};

const CartContext = createContext<CartContextType | null>(null);
const CartDispatchContext = createContext<CartDispatchContextType | null>(null);

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState<any>(false);
  const [cartItems, setCartItems] = useState<any>([]);

  return (
    <CartContext.Provider value={{ isOpen, cartItems }}>
      <CartDispatchContext.Provider value={{ setIsOpen, setCartItems }}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext, CartDispatchContext };
