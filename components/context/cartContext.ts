import { createContext } from "react";
import items from "../../data/items";

const ShoppingCartContext = createContext({
  items: {},
  setItems: () => null,
});

export default ShoppingCartContext;
