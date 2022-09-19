import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import ShoppingCartContext from "../components/context/cartContext";
import { useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [items, setItems]: any = useState({});
  return (
    <ShoppingCartContext.Provider value={{ items, setItems }}>
      <Navbar />
      <div className="w-9/12 m-auto pt-10">
        <Component {...pageProps} />
      </div>
    </ShoppingCartContext.Provider>
  );
};

export default MyApp;
