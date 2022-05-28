import react from 'react'
import logo from '../Images/white_logo.png'
import { Navbar , Nav , NavDropdown } from 'react-bootstrap';
import {isAuthenticated} from '../Pages/Private/Auth/APIs'

const NavbarLayout = () => {
  const validateUser = isAuthenticated()
    return(
        <div className='row'>
            <div className='col-12 ' >
          
            <Navbar fixed="top" collapseOnSelect className="px-4" expand="lg"  variant="light" style={{backgroundColor:'white',borderBottom:'1px solid #eeee'}}>
 
  <Navbar.Brand href="http://localhost:3001/" style={{color:'white'}}>
    <img className="img-fluid" src={logo} style={{ height: '6vh' }} /> 
    <span  className="pt-4" style={{color:'black',fontSize:'2vh',fontWeight:'bold',fontFamily: "'Friz Quadrata Std', sans-serif"}}>
{'   '} Up To Something
    </span>
  
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto" >
    <Nav.Link href="http://localhost:3001/about" style={{color:'black',fontWeight:'bold',fontFamily: "'Libre Baskerville', serif"}}>About</Nav.Link>
    <Nav.Link href="http://localhost:3001/" style={{color:'black',fontWeight:'bold',fontFamily: "'Libre Baskerville', serif"}}>Work</Nav.Link>
    <Nav.Link href="/strngr" style={{color:'black',fontWeight:'bold',fontFamily: "'Libre Baskerville', serif"}}>STRNGR</Nav.Link>

    {validateUser &&
    <Nav.Link href="/admin/manage/blogs" style={{color:'black',fontWeight:'bold',fontFamily: "'Libre Baskerville', serif"}}>Dashboard</Nav.Link>
    }


     
    </Nav>
   
  
  </Navbar.Collapse>
 
</Navbar>
            </div>
        </div>
    )
}
export default NavbarLayout