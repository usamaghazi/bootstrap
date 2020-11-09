import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import './App.css';
// import { Button, Form, FormControl } from 'react-bootstrap'
function App() {
  return (
    <>
    <Navbar className="navbar-dark bg-dark" expand="md">
    <div className="container-fluid mx-4">
    <Navbar.Brand href="#home">
    <img
      alt=""
      src="images/logo.png"
      className="d-inline-block align-top"
    />{' '}
    <span style={{fontWeight:'bold', fontSize:'30px'}}>CodeMan</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
      <NavDropdown title="Explore" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">React js</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Node js</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Bootstrap</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Competative</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
  {/*React Bootstrap Carsouel */}
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="images/cr.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <div className="d-md-block d-sm-none d-none">
      <h3 >First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="images/cr.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="d-md-block d-sm-none d-none ">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/*React Bootstrap Jumbotron*/ }
<div className="container-fluid">
<div className="row jumbotron">
<div className="col-md-9 col-xl-10">
  <p className="lead">
  This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
  </p>
</div>
<div className="col-md-3 col-xl-2">
  <button type="button" 
  className="btn btn-outline-secondary btn-lg">
  Web Hosting
  </button>
</div>
</div>
</div>
{/* Boostrap Body*/}
<div className="container">
<div className="row">
<div className="col-12 text-center px-4 pt-4 pb-1">
<h4 className="display-4 lead"style={{fontSize:'5vw' , fontWeight:'300'}}>
Built with Ease
</h4>
<hr style={{border:'0.01px solid grey', width:'50vw'}}/>
</div>
</div>
<div className="row">
  <div className="col-12 text-center">
    <p className="lead">
    My Boodjagsdhsak msdf absdja kahdaj 
    aksgdja mabdjga
    asjdgsaj agdjags
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    </p>
  </div>
</div>
</div>
{/*Colum Section */}
<div className="container mt-5">
  <div className="row text-center">
    <a href="/html" className="col-xs-12 col-sm-6 col-md-4 p-4" >
      <img className="img-fluid" src="images/html.png" alt=""/>
      <h3>HTML 5</h3>
      <p>Built the latest Version of HTML 5</p>
    </a>
    <a href="/css" className="col-xs-12 col-sm-6 col-md-4 p-4" >
      <img className="img-fluid" src="images/css.png" alt=""/>
      <h3>CSS3</h3>
      <p>Built the latest Version of CSS 3</p>
    </a>
    <a href="/react" className="col-sm-12 col-md-4 p-4" >
      <img className="img-fluid" src="images/reacto.png" alt=""/>
      <h3>React Js</h3>
      <p>Built the latest Version of React js</p>
    </a>
  </div>
  <hr style={{border:'0.01px solid grey', width:'50vw'}}/>
</div>
{/*2  COLIUMS ROM */}
<div className="container mt-5">
  <div className="row">
    <div className="col-lg-6 p-2"> 
      <h2>
      If You Build it.....
      </h2>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
      <p>
      There are many variations of passages of Lorem Ipsum available, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </p>
      <p>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
      </p>
      <button type="button" class="btn btn-primary">Learn More</button>
      </div>
  <div className="col-lg-6 p-3">
  <img className="img-fluid ml-0" src="images/programa.jpeg" alt="kol"/>
  </div>
  </div>
</div>
{/*Background Fixed Image */}

<div className="Fixed-Image" >
  <div style={{padding:'200px 0px',backgroundColor:'blue',opacity:'0.2'}} className="gap100">
  </div>
</div>
{/*Now Cards*/}
<div className="container">
<div className="row pt-4 text-center pb-2">
  <div className="col-12">
    <h1 className="display-4">Meet The Team</h1>
  </div>
</div>
<hr style={{border:'0.01px solid grey', width:'50vw'}}/>
<div className="row p-2">
  <div className="col-lg-4 col-12 p-2">
  <div className="card Shadow" style={{width: '18rem'}}>
  <img className="card-img-top img-fluid" src='images/card.jpg' alt="opl"/>
  <div className="card-body">
    <h5 className="card-title">Muhammad Usama</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/photo" class="btn btn-outline-secondary">See Profile</a>
  </div>
</div>
  </div>
  <div className="col-lg-4 col-12 p-2">
  <div className="card Shadow" style={{width: '18rem'}}>
  <img className="card-img-top img-fluid" src='images/card.jpg' alt="opl"/>
  <div className="card-body">
    <h5 className="card-title">Ehtisham Ali Attari</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/photo" class="btn btn-outline-secondary">See Profile</a>
  </div>
</div>
  </div>
  <div className="col-lg-4 col-12 p-2">
  <div className="card Shadow" style={{width: '18rem'}}>
  <img className="card-img-top img-fluid" src='images/card.jpg' alt="opl"/>
  <div className="card-body">
    <h5 className="card-title">Ertugrul Ghazi</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/photo" class="btn btn-outline-secondary">See Profile</a>
  </div>
</div>
  </div>
</div>
</div>
{/*Two Colums Without buttons */}
<div className="container mt-5">
  <div className="row">
    <div className="col-lg-6 p-2"> 
      <h2>
      Our Goal
      </h2>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
      <p>
      There are many variations of passages of Lorem Ipsum available, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </p>
      </div>
  <div className="col-lg-6">
  <div style={{padding:'5px'}}>
  <img className="img-fluid ml-0" src="images/goal.jpg" alt="kol"/>
  </div>
  </div>
  </div>
</div>
{/*Footer */}
<div className="container-fluid mt-5">
<div className="row bg-dark pt-5 pb-4 text-center">
  <div className="col-md-6">
    <span><img src="images/logo.png" alt="lopo"/>
    <span 
    style={{fontWeight:'bold',fontSize:'30px',color:'white'}}>CodeMan</span>
    </span>
    <hr style={{backgroundColor:'white',width:'50%'}}/>
    <p style={{color:'wheat'}}>051-2670155</p>
    <p style={{color:'wheat'}}>codeman@gmail.com</p>
    <p style={{color:'wheat'}}>2nd Floor Mid City Mall, Rawalpindi</p>
  </div>
  <div className="col-md-6">
    <hr style={{backgroundColor:'white',width:'30%'}}/>
    <h5 style={{color:'white',marginTop:'-3px'}}>Our Hours</h5>
    <hr style={{backgroundColor:'white',width:'30%',marginTop:'0px'}}/>
    <p style={{color:'wheat'}}>Monday TO Friday: 9am - 5am</p>
    <p style={{color:'wheat'}}>Saturday: 10am - 4am</p>
    <p style={{color:'wheat'}}>Sunday: Closed</p>
  </div>
</div>
<div className="row bg-dark" style={{marginTop:'1px'}}>
  <div className="col-12 text-center">
    <p style={{color:'wheat'}}>&copy; codeMan.com</p>
  </div>
</div>
</div>
</>
  );
}

export default App;
