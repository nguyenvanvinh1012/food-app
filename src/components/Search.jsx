import React, { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "640b7a4386ff4ad6969ec51a7f572fe4";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const result = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await result.json();
      // console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        type="text"
        placeholder="Search here..."
        // onChange={(e) => setFoodData(e.target.value)}
      />
    </div>
  );
};

export default Search;
