//Imports
import React from 'react';
import ExpenseList from './ExpenseList';

const Home = () => {
  return (
    <div className="container-xl">
	    <div className="table-responsive">
		    <div className="table-wrapper">
                <ExpenseList/>
            </div>
        </div>
    </div>
  );
}

export default Home;
