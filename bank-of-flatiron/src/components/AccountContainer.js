import React, { useState, useEffect }from "react"; 
 import TransactionsList from "./TransactionsList"; 
 import Search from "./Search"; 
 import AddTransactionForm from "./AddTransactionForm"; 
  
 function AccountContainer() { 
   const [transactions, setTransactions] = useState([]); 
   const [search, setSearch] = useState(""); 
   useEffect(() =>{ 
     fetch("http://localhost:3000/transactions") 
     .then(res => res.json()) 
     .then(data => { 
       setTransactions(data) 
     }) 
   },[]) 
  
   const newTransaction = (newTransaction) => { 
     const updatedArray = [...transactions ,newTransaction] 
     setTransactions(updatedArray) 
   } 
  
   return ( 
     <div> 
       <Search search={search} setSearch = {setSearch}/> 
       <AddTransactionForm newTransaction={ newTransaction }/> 
       <TransactionsList transactionsArray={transactions} transactionsSetter={ setTransactions } searchValue={search}/> 
     </div> 
   ); 
 } 
  
 export default AccountContainer;