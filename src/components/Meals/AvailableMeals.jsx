import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';



const AvailableMeals =()=>{

  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchMeals = async ()=>{ 
      setIsLoading(true)
      const res = await fetch('https://react-http-62223-default-rtdb.firebaseio.com/meals.json');
      const data = await res.json()
      const loadedMeals = []
      for (const key in data){
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
  }
  fetchMeals()
  },[])


  if(isLoading){
    return ( 
    <section className={classes.MealsLoading}>
      <h3>Loading...</h3>
    </section>)
  }

  const mealsList = meals.map(meal => <MealItem key={meal.id} name={meal.name} description = {meal.description} price = {meal.price} id={meal.id}/>)

  return <section className={classes.meals}>
    <Card>
    <ul>{mealsList}</ul>
    </Card>
  </section>
};


export default AvailableMeals;