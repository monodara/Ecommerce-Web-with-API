import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchBar from "../components/search/SearchBar";
import ItemCard from "../components/product/ProductCard";
import ProductsFetchData from "../components/product/Products";
import { Provider } from "react-redux";
import store from "../redux/store";
import ProductCollect from "./ProductCollect";

export default function Home() {
  return (
    <div>
      {/* <HomeIcon />
      <SearchBar /> */}
      {/* <h1>Catogaries</h1>
      <Provider store={store} children={<CategoryFetchData />}></Provider>
      <h1>Products</h1> */}
      <Provider store={store} children={<ProductCollect />}></Provider>

      {/* <div className="block_container">
        <ItemCard />
      </div> */}
    </div>
  );
}