import React from "react"; 
 import AccountContainer from "./AccountContainer"; 
  
 function App() { 
   return ( 
     <div className="ui raised segment"> 
       <div className="ui segment red inverted"> 
         <h2 className="bank-font">The Flatiron Bank </h2> 
       </div> 
       <AccountContainer /> 
     </div> 
   ); 
 } 
  
 export default App;