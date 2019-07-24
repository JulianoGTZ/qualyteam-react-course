import React, { useEffect, useState, Fragment } from "react";

import { Card } from "../../components/card";
import { Navbar } from '../../components/navbar'

import "../../App.scss";

const List = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchRecipes() {
      fetch(`http://localhost:4000/food?q=${search}`)
        .then(res => res.json())
        .then(data => {
          setRecipes(data);
        })
        .catch(err => console.log(err));
    }

    fetchRecipes();
  }, [search]);

  return (
    <Fragment>
      <Navbar {...props} onSearchChange={setSearch} />
      <main className="content--container">
        {recipes.map(recipe => <Card key={recipe.id} {...recipe} {...props} />)}
      </main>
    </Fragment>
  );
}
export { List };
