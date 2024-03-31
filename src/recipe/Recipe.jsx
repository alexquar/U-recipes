import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'
export default function Recipe() {
    const {id} = useParams()
    const {mode} = useTheme()
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then(doc => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('This recipe does not exist')
      }
    })

  }, [id])

  return (
    <div className={`recipe ${mode}`}>
    {error && <p className="error">{error}</p>}
    {isPending && <p className="loading">Loading...</p>}
    {recipe && (
        <>
       <h1 className="page-title">{recipe.title}</h1> 
        <p>Takes {recipe.cookingTime} to cook.</p>
        <ul>
        {recipe.ingredients.map((ingredient)=>(
            <li>{ingredient}</li>
        ))}
        </ul>
        <p className="method">{recipe.method}</p>
        </>
    )}
  </div>
  )
}
