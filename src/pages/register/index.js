import React from "react";
import { Button } from "../../components/button";

const Register = () => {
  

  const handleClick = () => {
    console.log('ueeh');
  }


  return(
  <div className="register">
    <h1>Nova receita</h1>

    <div className="register--container">
      <form className="register--container--form">
        <div className="register--container--side">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Imagem (URL)</label>
            <input id="image" />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredientes</label>
            <textarea id="ingredients" />
          </div>
        </div>
        <div className="register--container--side">
          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" />
          </div>
        </div>
      </form>
      <Button onClick={handleClick}>Create</Button>
    </div>
  </div>
  ); 
};

export { Register };
