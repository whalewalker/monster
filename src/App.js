import React, { useEffect, useState } from "react";
import CardListComponent from "./components/card-list/Card-list.component";
import Search from "./components/search-box/Search-box.component";
import "./App.css"

const fetchData = async (url) => {
  const data = await fetch(url);
  return await data.json();
};

const URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLocaleLowerCase()));

  useEffect(() => {
    fetchData(URL).then((user) => setMonsters(user));
  }, []);

  
  return (
    <div className = "App">
      <h1>Monsters Rolodex</h1>
      <Search  placeholder = "Search monsters" handleChange = {e => setSearch(e.target.value)}/>
      <CardListComponent monsters={filteredMonsters} />
    </div>
  );
};

export default App;
