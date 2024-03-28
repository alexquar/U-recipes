import './Create.css'
import { useState, useRef } from 'react'
import { useFetch } from '../hooks/useFetch'
export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const {error, isPending, postData} = useFetch('http://localhost:3000/recipes', 'POST')
    const handleSubmit =(e)=>{
        e.preventDefault()
        postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    }

    const handleAdd = (e) =>{
        e.preventDefault()
        const ing = newIngredient.trim()
        if(ing && !ingredients.includes(ing)){
        setIngredients(prevIngredients => [...prevIngredients, ing])
    }
        setNewIngredient('')
        ingredientInput.current.focus()
    }
  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

    <label> 
        <span>Ingredients:</span>
        <div className="ingredients">
            <input onChange={(e)=>setNewIngredient(e.target.value)} value={newIngredient} type="text" ref={ingredientInput}/>
            <button onClick={handleAdd} className="btn" >Add</button>
        </div>
    </label>
    <p>
       Current Ingredients: {ingredients.map((ingredient)=>(
        <em key={ingredient}> 
            {ingredient}, 
        </em>
       ))}
    </p>
        <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input 
            type="number" 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required 
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}
