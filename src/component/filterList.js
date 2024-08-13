import React, { useState } from "react";

const FiltreListe = () => {
  const [filter, setFilter] = useState("");
  const [listData, setListData] = useState([]);

  const addData = () => {
    setListData([
      ...listData,
      { id: listData.length, name: `Item ${listData.length + 1}` },
    ]);
  };

  const filteredList = listData;

  return (
    <div>
      <div class="input-group">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          class="form-control"
          placeholder="Rechercher"
        />
        <div class="input-group-append">
          <button class="btn btn-secondary" type="button">
            <i class="fa fa-search">Filtre</i>
          </button>
        </div>
      </div>

      {/* <ul>
        {listData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}

      <h1>{filter}</h1>

      <button onClick={addData} class="btn btn-primary mt-3" />
    </div>
  );
};

export default FiltreListe;
