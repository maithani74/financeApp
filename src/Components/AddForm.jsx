//Imports
import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';

const AddForm = ({expenses,addExpenses}) => {

  //Setting Expenses
  const [expensesList,setExpensesList] = useState({
    name:"",category:'',amount:'',date:'',ago:''
  })

  const onInputChange=(e)=>{
    setExpensesList({...expensesList,[e.target.name]:e.target.value})
  }
  const {name,category,amount,date,ago} =expensesList;

  //Submit Function
  const handleSubmit=(e)=>{
    e.preventDefault()
    addExpenses(name,category,amount,date,ago);
  }

  return (
    <>
    
    <Form onSubmit={handleSubmit}>
      <Form.Group>
      <label htmlFor='newExpense'>Name</label>
        <Form.Control
          type='text'
          placeholder='Name'
          name="name"
          value={name}
          onChange={(e)=>onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
      <label htmlFor='newExpense'>Description</label>
        <Form.Control
          type='text'
          placeholder='Description'
          name="name"
          required
        />
      </Form.Group>
      <Form.Group>
      <label htmlFor='newExpense'  value={category}
          onChange={(e)=>onInputChange(e)}>Category</label>
      

          <select onChange={(e)=>onInputChange(e)} value={category} name='category'className='px-3 py-3'>
              <option>Books</option>
              <option>Groceries</option>
              <option>Heath</option>
              <option>Electronic</option>
              <option>Training and education</option>
              <option>Business meals and travel expenses</option>
              <option> Business insurance</option>
              <option>Employee benefits</option>
              <option>Vehicle expenses</option>
              <option> Furniture, equipment, and machinery</option>
              <option>Entertainment</option>
                </select>
      </Form.Group>
      <label htmlFor='newExpense'>Amount</label>
      <Form.Group>
        <Form.Control
          type='number'
          name='amount'
          placeholder='INR'
          value={amount}
          onChange={(e)=>onInputChange(e)}
          required
        />
      </Form.Group>
      <label htmlFor='newExpense'>Date of expense</label>
      <Form.Group>
        <Form.Control
          type='date'
          name='date'
          placeholder='date'
          value={date}
          onChange={(e)=>onInputChange(e)}
          required
        />
      </Form.Group>
      <Button className='my-4' block variant="success" type='submit'>Add New Expense</Button>
      </Form>
      
      
      </>
  );
}

export default AddForm;
