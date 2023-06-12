import { useContext } from "react";
import CartContext from "../context/ListContext";

export const useCartContext = () => useContext(CartContext);
