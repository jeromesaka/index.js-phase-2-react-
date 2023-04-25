import React from "react"; 
  
 function Transaction({date, description, category, amount,}) { 
   return ( 
     <tr className="bank-font"> 
       <td >{date}</td> 
       <td>{description}</td> 
       <td>{category}</td> 
       <td>{amount}</td> 
     </tr> 
   ); 
 } 
  
 export default Transaction;