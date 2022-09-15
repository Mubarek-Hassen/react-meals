import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import { useRef } from 'react'

const MealItemForm =(props)=>{
  const amountInputRef = useRef()

  const submitHandler = event =>{
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value;
  }


  return <form className={classes.form} onSubmit={submitHandler}>
    <Input 
    ref = {amountInputRef}
    label="Amount" 
    input={{
      id: 'amount_' + props.id,
      min: '1',
      max: '5',
      step: '1',
      defaultValue: '1'
    }} />
    <button>+ Add</button>
  </form>
}

export default MealItemForm