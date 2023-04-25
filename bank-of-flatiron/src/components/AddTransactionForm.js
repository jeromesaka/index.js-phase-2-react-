import React, { useState } from "react"; 
//import Transaction from "./Transaction"; 
  
 function AddTransactionForm({ newTransaction }) { 
  
   const [inputData, setInputData] = useState({ 
     date:"", 
     description:"", 
     amount:0, 
     category:"" 
   }); 
  
   function handleOnChange(event) { 
     setInputData({ 
       ...inputData, [event.target.name] : event.target.value 
     }) 
   } 
  
   function handleOnSubmit(event) { 
     event.preventDefault() 
  
     fetch("http://localhost:3000/transactions", { 
       method: 'POST', 
       headers : { 
         'Content-Type': 'application/json' 
       }, 
       body: JSON.stringify(inputData) 
     }) 
     .then(r => r.json()) 
     .then(data => newTransaction(data)) 
      
   } 
  
    
   return ( 
     <div className="ui segment"> 
       <form className="ui form" onSubmit={handleOnSubmit}> 
         <div className="inline fields"> 
           <input type="date" name="date" onChange={ handleOnChange }/> 
           <input type="text" name="description" placeholder="Description" onChange={handleOnChange}/> 
           <input type="text" name="category" placeholder="Category" onChange={handleOnChange}/> 
           <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleOnChange}/> 
         </div> 
         <button className="btn btn-danger" type="submit"> 
           Update Transaction 
         </button> 
       </form> 
     </div> 
   ); 
 } 
  
 export default AddTransactionForm;