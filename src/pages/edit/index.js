import React, { useEffect, useState } from "react";
import { Button } from "../../components/button";

const EditRecipe = ({ match, history }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        async function fetchRecipe() {
            fetch(`http://localhost:4000/food/${match.params.id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setIngredients(data.ingredients);
                    setDescription(data.description);
                    setImageUrl(data.imageUrl);
                })
                .catch(err => console.log(err));
        }

        fetchRecipe();
    }, [match.params.id]);

    function update() {
        fetch(`http://localhost:4000/food/${match.params.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, ingredients, description, imageUrl })
        }).then(() => history.push('/'));
    }

    return (
        <div className="register">
            <div className="register--container">
                <form className="register--container--form">
                    <div className="register--container--side">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input id="title" value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Imagem (URL)</label>
                            <input id="image" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ingredients">Ingredientes</label>
                            <textarea id="ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)} />
                        </div>
                    </div>
                    <div className="register--container--side">
                        <div className="form-group">
                            <label htmlFor="description">Descrição</label>
                            <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                    </div>
                </form>
                <Button onClick={update}>Save</Button>
            </div>
        </div>
    );
}

export { EditRecipe };
