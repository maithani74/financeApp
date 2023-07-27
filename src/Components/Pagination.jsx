//Imports
import React,{useEffect, useState} from 'react';

const Pagination = ({currentExpense,sortedExpenses,pages,setCurrentPage}) => {
	
	//UseState Hooks
	const [currentButton,setCurrentButton] = useState(1)

    //Number of Pages
    const numsOfpages = []
    for(let i=1; i<=pages;i++){
        numsOfpages.push(i)
    }
	
	//UseEffect Hook to set pages
	useEffect(()=>{
			setCurrentPage(currentButton)
	},[currentButton,setCurrentPage])

  return (
    <div class="clearfix">
				<div className="hint-text">Showing <b>{currentExpense.length}</b> out of <b>{sortedExpenses.length}</b> entries</div>
				<ul className="pagination">
                	<li onClick={()=>setCurrentButton((prev)=>prev === 1 ? prev : prev-1)} 
					className= "{`${currentButton === 1 ? `page-item disabled`: `page-item`}`} " ><a href="#">
						
						Previous
						</a></li>
					{numsOfpages.map((page,idx)=>{
						return(
							<li key={idx}
							onClick={()=>setCurrentButton(page)}
							className=   "{`${currentButton === page ? `page-item active`: `page-item`}`} "><a href="#!" className="page-link">{page}</a></li>
						)
					})}
					<li onClick={()=>setCurrentButton((next)=>next === numsOfpages ? next : next+1)} 
					className=   "{`${currentButton === numsOfpages.length  ? `page-item disabled`: `page-item`}`} " ><a href="#">
						
					Next
					</a></li>
				</ul>
			</div>
  );
}

export default Pagination;