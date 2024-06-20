import React, { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6538c3c6a7124ec59ce9e5cd16da28cd";

const Search = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchFood() {
      const result = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await result.json();
      console.log(data);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;
