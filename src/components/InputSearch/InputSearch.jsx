import React, { useState } from "react";
import { Search } from "./style";

const InputSearch = ({ filteredProduct }) => {
  const [search, setSearch] = useState("");

  return (
    <Search>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" onClick={() => filteredProduct(search)}>
        Pesquisar
      </button>
    </Search>
  );
};

export default InputSearch;
