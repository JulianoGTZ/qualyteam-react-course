import React, { useState } from "react";
import { Button } from "../../components/button";

const Register = ({ history }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleClick = () => {
    fetch('http://localhost:4000/food', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, ingredients, description, imageUrl })
    }).then(() => history.push('/'));
  }


  return (
    <div className="register">
      <h1>Nova receita</h1>

      <div className="register--container">
        <form className="register--container--form">
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input id="title" onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="image">Imagem (URL)</label>
              <input id="image" onChange={e => setImageUrl(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="ingredients">Ingredientes</label>
              <textarea id="ingredients" onChange={e => setIngredients(e.target.value)} />
            </div>
          </div>
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea id="description" onChange={e => setDescription(e.target.value)} />
            </div>
          </div>
        </form>
        <Button onClick={handleClick}>Create</Button>
      </div>
    </div>
  );
};

export { Register };
