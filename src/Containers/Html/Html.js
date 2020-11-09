import React from 'react'

import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Content from '../../Components/Content/Content';
import Footer from '../../Components/Footer/Footer';
// import Combine from '../../Components/Combine/Combine';
 import './Html.css';
const Html = (props) => {
    return(
   <main className="Acc">
   <div className="Upper">
      <Sidebar/> 
   </div>
       <div className="Lower">
          <Header/>
          <Content/>
          <Footer/> 
       </div>
   </main>  
   
   
    
    )
}

export default Html