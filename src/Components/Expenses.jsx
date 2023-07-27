//Imports
import React,{useState,useEffect} from 'react';
import EditForm from './EditForm';
import { Button, Modal } from 'react-bootstrap';
import moment from 'moment/moment';
const Expenses = ({updateExpense,expense,deleteExpense}) => {
    //useState Hook
    const [show,setShow] = useState(false)

    //Function to Show or Hide Expenses
	const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)

    //UseEffect Hook to show or hide expenses
    useEffect(()=>{
        handleClose()
    },[expense])

	return (
    <>
        <td>{expense.name}</td>
		<td>{expense.category}</td>
		<td>{expense.amount}</td>
		<td>{expense.date}</td>
        
		<td>
			<button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons"  title="Edit">&#xE254;</i></button>
			<button onClick={()=>deleteExpense(expense.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons"  title="Delete">&#xE872;</i></button>
		</td>
		<Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <EditForm expense={expense} updateExpense={updateExpense} />
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

export default Expenses;
