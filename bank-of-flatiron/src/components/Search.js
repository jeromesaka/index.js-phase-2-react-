import React from "react"; 
  
 function Search({ search, setSearch}) { 
  
   function handleOnChange(e){ 
     setSearch(e.target.value) 
   } 
  
   return ( 
     <div className="ui large icon input"> 
       <input 
         type="text" 
         placeholder="Search your Recent Transactions" 
         value={search} 
         onChange={handleOnChange} 
       /> 
     </div> 
   ); 
 } 
  
 export default Search;