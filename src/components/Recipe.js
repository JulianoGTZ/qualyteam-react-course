import React, { useEffect, useState } from "react";
import { Button } from "./button";

const Recipe = ({ match, history }) => {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    async function fetchRecipe() {
      fetch(`http://localhost:4000/food/${match.params.id}`)
        .then(res => res.json())
        .then(data => {
          setRecipe(data);
        })
        .catch(err => console.log(err));
    }

    fetchRecipe();
  }, [match.params.id]);

  function remove() {
    fetch(`http://localhost:4000/food/${match.params.id}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    }).then(() => history.push('/'));
  }

  if (!recipe) { return null; }
  return (
    <div className="recipe">
      <div className="recipe--container">
        <figure>
          <div
            className="recipe--container-image"
            style={{ backgroundImage: `url(${recipe.imageUrl})` }}
          />
        </figure>
        <div className="recipe--info">
          <h1> {recipe.title}</h1>
          <div className="recipe--info--description">
            <p>{recipe.description}</p>
            <span>{recipe.ingredients}</span>
          </div>
        </div>
      </div>
      <div className="recipe--preparation">
        <h2>Preparação</h2>
        <p>{recipe.preparation}</p>
      </div>
      <Button onClick={remove}>Remover</Button>

    </div>
  );
}

export { Recipe };
