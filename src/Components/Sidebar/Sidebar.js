import React from 'react'
import  './Sidebar.css'
const Sidebar = () => {
    return(
        <div className="Sidebar">
            <div className="Profile-name">
            <span className="Myname"><strong>Muhammad Usama</strong></span>
            <br/>
            <span className="Myjob">Front-end Developer</span>
            </div>
            <div className="Transform">
            <img className="Image" src="/images/ussama.jpg" alt="my-profile-pic"/>
            </div>
            <div className="List">
            <ul className="Unorder-list">
            <li className="Item"><span className="First">Name:</span>
            <span className="Second"> Muhammad Usama</span></li>
            <li className="Item"><span className="First">Birthday:</span>
            <span className="Second"> 8 April 1996</span></li>
            <li className="Item"><span className="First">Job:</span>
            <span className="Second"> Front-end Developer</span></li>
            <li className="Item" style={{paddingRight:'2vw'}}><span className="First">Contact:</span>
            <br/><span className="Secondd"> mohammad.usama441@gmail.com</span>
            <br/><span className="Second">+923109000033</span></li>
            </ul>
            </div>
        </div>
    )
}

export default Sidebar