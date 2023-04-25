import React from "react"; 
 import Transaction from "./Transaction"; 
  
 function TransactionsList({transactionsArray, transactionSetter, searchValue}) { 
  
    let listOfTransactions = "" 
  
  if (transactionsArray){ 
    const filteredTransactions = transactionsArray.filter((transaction) => { 
       return (transaction.description.toLowerCase().includes(searchValue.toLowerCase())) 
    }) 
    listOfTransactions = filteredTransactions.map((transaction)=> { 
       return <Transaction  
          key={transaction.id}  
          date={transaction.date} 
          description={transaction.description} 
          category={transaction.category} 
          amount={transaction.amount} 
          /> 
       }) 
  } 
   
  
   return ( 
     <table className="table table-bordered border-primary"> 
     <tbody> 
      <tr> 
      <th> 
         <h3 className="ui center header red">Date</h3> 
      </th> 
      <th> 
         <h3 className="ui center header red">Description</h3> 
      </th> 
      <th> 
         <h3 className="ui center header red">Category</h3> 
      </th> 
      <th> 
         <h3 className="ui center header red">Amount</h3> 
      </th> 
      </tr> 
      {listOfTransactions} 
     </tbody> 
   </table> 
   ); 
 } 
    
  
 export default TransactionsList;