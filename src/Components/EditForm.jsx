import React, { useState ,useEffect} from 'react';
import { Form,Button } from 'react-bootstrap';
const EditForm = ({updateExpense,expense}) => {


    //useState hooks

    const id = expense.id
    const [name,setName] = useState(expense.name)
    const [category,setCategory] = useState(expense.category)
    const [amount,setAmount] = useState(expense.amount)
    const [date,setDate] = useState(expense.date)
    const updateExpenses = {id,name,category,amount,date}

    // Submit Function
    const handleSubmit = (e)=>{
      e.preventDefault()
      updateExpense(id,updateExpenses)
      
    }
    

    return (

    <>
    
    <Form  onSubmit={handleSubmit}>
      <Form.Group>
      <label htmlFor='newExpense'>Name</label>
        <Form.Control
          type='text'
          placeholder='Name'
          name="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
      <label htmlFor='newExpense'>Description</label>
        <Form.Control
          type='text'
          placeholder='Description'
          name="name"
        />
      </Form.Group>
      <Form.Group>
      <label htmlFor='newExpense' 
         >Category</label>
      

          <select value={category}  onChange={(e)=>setCategory(e.target.value)} name='category'className='px-3 py-3'>
              <option>Books</option>
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
          onChange={(e)=>setAmount(e.target.value)}
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
           onChange={(e)=>setDate(e.target.value)}
          required
        />
      </Form.Group>

      <Button  className='my-4' block variant="success" type='submit'>Edit Expenses</Button>
      </Form>
      </>
    );
}

export default EditForm;