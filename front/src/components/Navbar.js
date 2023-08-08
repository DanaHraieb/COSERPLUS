import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
   
<header>
  <div className="header">
    <div className="container-fluid">
      <div className="row d_flex" style={{marginTop:"-25px"}}>
        <div className=" col-md-2 col-sm-3 col logo_section">
          <div className="full">
            <div className="center-desk">
              <div className="logo">
                <Link to="/"><img src="images/coserpluss.svg"  /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <nav className="navigation navbar navbar-expand-md navbar-dark ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <div class="dropdown">
  <Link to={'/'} style={{fontWeight:"400"}}  class="dropbtn">Accueil</Link>
  
</div>                </li>
                
                <li className='nav-item'>
                <div class="dropdown">
  <Link to={"/service"} style={{fontWeight:"400"}}  class="dropbtn">Service</Link>
  <div class="dropdown-content">
 <Link to={'/service#service-COMPTABILITEETFINANCE-id'}  style={{fontWeight:"400"}}>COMPTABILITE ET FINANCE</Link>
   <Link to={'/service#service-fiscal-id'}  style={{fontWeight:"400"}}>ERVICES FISCAUX</Link>
  <Link to={'/service#service-juridique-id'} style={{fontWeight:"400"}}>SERVICES JURIDIQUES</Link>
  <Link to={'/service#service-social-id'} style={{fontWeight:"400"}}>SERVICES SOCIALES</Link>
  </div>
</div>
</li>
                <li className="nav-item">
                <div class="dropdown">
  <Link to={"/investir"} style={{fontWeight:"400"}}  class="dropbtn">Investir en tunisie</Link>
  <div class="dropdown-content">
  <Link style={{fontWeight:"400"}} to={'/business'}>Doing Business</Link>
  <Link style={{fontWeight:"400"}} to={'/liens'}>Liens utiles</Link>
  
  </div>
</div>                </li>
<li className="nav-item">
                <div class="dropdown">
  <Link to={"/contact"}  class="dropbtn">contact</Link>
  
</div>                </li>
<li className="nav-item">
                <div class="dropdown">
  <Link to={"/actualité"}  class="dropbtn">Actualités</Link>
  
</div>                </li>
<li className="nav-item">
                <div class="dropdown">
  <Link to={"/login"}  class="dropbtn">Login</Link>
  
</div>                </li>
              </ul>
            </div>
          </nav>
        </div>
       
      </div>
    </div>
  </div>
</header>

  )
}

export default Navbar