//Import 
import React, { useEffect, useState } from 'react';
import Expenses from './Expenses';
import {v4 as uuidv4} from 'uuid'
import { Button, Modal } from 'react-bootstrap';
import AddForm from './AddForm';
import Pagination from './Pagination';


const ExpenseList = () => {
    
    //Get from LocalStorage
    const getLocalItems = ()=>{
        const list = localStorage.getItem('expenses')
        if(list) return JSON.parse(list)
        else return []
    }
    //UseState Hooks
    const [show,setShow] = useState(false)
    const [expenses,setExpenses] =  useState(getLocalItems())
    const sortedExpenses = expenses
    const [sort,setSort] = useState([]);
    
    const [currentPage,setCurrentPage] = useState(1)
    const [expensesPerPage] = useState(5)
    const indexOfLastExpense = currentPage * expensesPerPage
    const indexOfFirstExpense = indexOfLastExpense - expensesPerPage
    const currentExpense = sortedExpenses.slice(indexOfFirstExpense,indexOfLastExpense)
    const totalPageNum = Math.ceil(sortedExpenses.length/expensesPerPage) 

    

    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)


    
    //Set to LocalStorage
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify( expenses));
    },[expenses])
    

    //Sorting Function
    const sortBy = ()=>{
        if(sort){
            const sortByName = expenses.sort((a,b)=>{
                return (
                    a.name<b.name?-1:1
                )
            })
            setExpenses(sortByName)
        }else{
            const sortByDate =expenses.sort((a,b)=>{
                return(
                    a.date<b.date?-1:1
                )
            })
            setExpenses(sortByDate)
        }
    }

    //UseEffect Hook to sort and handle buttons
    useEffect(()=>{
        handleClose()
        sortBy()
    },[sortedExpenses,sort])


    
    //Add expenses
    const addExpenses = 
    (name,category,amount,date,ago)=>{
        setExpenses([...expenses,{id:uuidv4(),name,category,amount,date,ago}])
    }

    //Add expenses
    const updateExpense=(id,updated)=>{
        setExpenses(expenses.map((emp)=>emp.id===id? updated:emp))
    }

    //Delete expenses
    const deleteExpense = (id)=>{
        handleShow()
        setExpenses(expenses.filter((emp)=>emp.id !== id))
    }

    

  return (
    <>
        <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>My Expense <b>Manager</b></h2>
					</div>
					<div className="col-sm-6">
						<Button onClick={()=>setSort(false)} className="btn btn-success" data-toggle="modal"><span>Search by Name of Expense</span></Button>					
						<Button onClick={()=>setSort(true)} className="btn btn-success" data-toggle="modal"> <span>Search by Date of Expense</span></Button>					
						<Button onClick={handleShow} className="btn btn-success my-2" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Expense</span></Button>					
					</div>
				</div>
			</div>
            <table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>Amount</th>
						<th>Date of expense</th>
                        <th>Actions</th>
					</tr>
				</thead>
				<tbody>
				
                        {
                            currentExpense.map((expense)=>(
                                <tr key={expense.id} >
                                    <Expenses updateExpense={updateExpense} deleteExpense={deleteExpense} expense={expense}/>
                                </tr>
                            ))
                        }
                    
                    </tbody> 
                    </table>   
                    <Pagination currentExpense={currentExpense}  sortedExpenses={sortedExpenses} pages = {totalPageNum} setCurrentPage={setCurrentPage}/>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <AddForm  expenses={expenses} addExpenses={addExpenses}/>
                    </Modal.Body>
                <Modal.Footer>
    
                        <Button onClick={handleClose} variant='secondary'>
                            Close Button
                        </Button>
                </Modal.Footer>
            </Modal>    
    </>
  );
}

export default ExpenseList;
