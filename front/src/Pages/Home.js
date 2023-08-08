import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
  });
  
  const [name , setName] = useState("");
 const [num, setNum]= useState("");
 const [Email, setEmail]= useState("");
 const [Message, setMessage]= useState("");
 
const onSubmit = (e)=>{
    e.preventDefault();
    console.log(name,num,Email,Message)
    alert("evoyé avec success!!!")
}
  return (
   <div>
   
  <div id="top_section" className=" banner_main" >
    <div className="container">
      <div className="row" >
        <div className="col-md-12">
          <div id="myCarousel" className="carousel slide" data-ride="carousel"  >
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to={0} className="active" />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
              <li data-target="#myCarousel" data-slide-to={3} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="carousel-caption relative">
                    <div className="bluid" >
                      <h1 style={{color:"black" , fontSize:"75px"}}>Solutions  <br />comptables complètes </h1>
                      <p style={{color:"black"}}> 
Tenue de livres, états financiers, planification et conformité fiscale
                      </p>
                      <Link to="/about" className="read_more" >A propos </Link><Link to="/contact"className="read_more" >Contact </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="carousel-caption relative">
                    <div className="bluid">
                      <h1 style={{color:"black" , fontSize:"75px"}}>Gestion fiable  <br />de la paie </h1>
                      <p style={{color:"black"}}> 
Services de paie efficaces pour votre tranquillité d'esprit
                      </p>
                      <Link to="/about" className="read_more" >A propos </Link><Link to="/contact"className="read_more" >Contact </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="carousel-caption relative">
                    <div className="bluid">
                      <h1 style={{color:"black" , fontSize:"75px"}}>Confidentialité <br />et professionnalisme </h1>
                      <p style={{color:"black"}}>Traitement de vos informations financières avec le plus grand soin
                      </p>
                      <Link to="/about" className="read_more" >A propos </Link><Link to="/contact"className="read_more" >Contact </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="carousel-caption relative">
                    <div className="bluid">
                      <h1 style={{color:"black" , fontSize:"75px"}}>Contactez-nous <br/>dès aujourd'hui</h1>
                      <p style={{color:"black"}}>Découvrez comment nos services comptables peuvent vous être bénéfiques
                      </p>
                      <Link to="/about" className="read_more" >A propos </Link><Link to="/contact"className="read_more" >Contact </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end slider section */}
  {/* we_do */}
  <div className="we_do">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage text_align_center">
            <h2>Services</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="we1" className="carousel slide" data-ride="carousel" loop>
            <ol className="carousel-indicators">
              <li data-target="#we1" data-slide-to={0}  className="active" />
              <li data-target="#we1" data-slide-to={1} />
              <li data-target="#we1" data-slide-to={2} />
              <li data-target="#we1" data-slide-to={3} />
              <li data-target="#we1" data-slide-to={0} />
              <li data-target="#we1" data-slide-to={1} />

            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="carousel-caption we1_do">
                    <div className="row">
                      <div className="col-md-4">
                        <div id="bo_ho" className="we_box text_align_center">
                          <i><img src="images/accounting.png" alt="#" /></i>
                          <h3>COMPTABILITE ET FINANCE</h3>
                          <p>
                          la comptabilité et les finances s'occupent toutes deux de la gestion de l'argent, mais elles sont utilisées à deux fins très différentes. Pour faire simple, la comptabilité s'occupe davantage de ce qui s'est passé dans le passé, tandis que la finance consiste à faire de bonnes prévisions pour l'avenir.
                          </p>
                          <a className="read_more" href="/service#service-COMPTABILITEETFINANCE-id" >Voir plus...</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div id="bo_ho" className="we_box text_align_center">
                          <i><img src="images/fiscal.png" alt="#" /></i>
                          <h3>SERVICES FISCAUX</h3>
                          <p>Les services fiscaux, souvent résumés en "fisc", désignent les services chargés de percevoir les taxes et les impôts. Ils sont en charge des impôts directs comme la TVA, de la taxe d'habitation, de la taxe foncière, de la redevance télévision, de la taxation des plus-values, de l'impôt sur la fortune, de l'impôt sur les successions, et des recettes de poche.
                          </p>
                          <a className="read_more" href="/service#service-fiscal-id">Voir plus...</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div id="bo_ho" className="we_box text_align_center">
                          <i><img src="images/compliant.png" alt="#" /></i>
                          <h3>SERVICES JURIDIQUES</h3>
                          <p>Le service juridique est le département de l'entreprise responsable du maintien de celle-ci dans le cadre de la loi et des réglementations en vigueur. Il est composé de juristes, des professionnels du droit, que l'on peut considérer comme des avocats de l'entreprise.
                          </p>
                          <a className="read_more" href="/service#service-juridique-id">Voir plus...</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{textAlign:"center"}}>
              
                <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="carousel-caption we1_do">
                    <div className="row">
                    <div className="col-md-4">
                    <div id="bo_ho" className="we_box text_align_center">
                          <i><img src="images/administrator.png" alt="#" /></i>
                          <h3>SERVICES SOCIALES</h3>
                          <p>Les services sociaux de comptabilité regroupent des prestations et des aides comptables offertes dans le cadre des activités de soutien social et de bien-être. Ces services visent à aider les individus, les familles et les organisations sociales à gérer leurs finances, à se conformer aux exigences financières et fiscales, et à améliorer leur stabilité financière globale
                          </p>
                          <a className="read_more" href="/service#service-social-id">Voir plus...</a>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div id="bo_ho" className="we_box text_align_center">
                          <i><img src="images/accounting.png" alt="#" /></i>
                          <h3>COMPTABILITE ET FINANCE</h3>
                          <p>
                          la comptabilité et les finances s'occupent toutes deux de la gestion de l'argent, mais elles sont utilisées à deux fins très différentes. Pour faire simple, la comptabilité s'occupe davantage de ce qui s'est passé dans le passé, tandis que la finance consiste à faire de bonnes prévisions pour l'avenir.
                          </p>
                          <a className="read_more" href="/service#service-COMPTABILITEETFINANCE-id" >Voir plus...</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div id="bo_ho" className="we_box text_align_center">
                          <i><img src="images/fiscal.png" alt="#" /></i>
                          <h3>SERVICES FISCAUX</h3>
                          <p>Les services fiscaux, souvent résumés en "fisc", désignent les services chargés de percevoir les taxes et les impôts. Ils sont en charge des impôts directs comme la TVA, de la taxe d'habitation, de la taxe foncière, de la redevance télévision, de la taxation des plus-values, de l'impôt sur la fortune, de l'impôt sur les successions, et des recettes de poche.
                          </p>
                          <a className="read_more" href="/service#service-fiscal-id">Voir plus...</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
            </div>
            <a className="carousel-control-prev" href="#we1" role="button" data-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#we1" role="button" data-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end we_do */}
  {/* about */}
  <div className="about">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="titlepage text_align_center">
            <h2>COSERPLUS</h2>
            <p>Cabinet de Comptabilité COSERPLUS

Transformons vos chiffres en succès

Le cabinet de comptabilité COSERPLUS a été fondé par ZOUAI NABIL est une entreprise dédiée à fournir des services comptables de haute qualité et des solutions financières adaptées aux besoins spécifiques de ses clients. Nous comprenons que la comptabilité est le pilier fondamental de toute entreprise prospère, et c'est pourquoi nous nous efforçons d'offrir des services professionnels, précis et fiables pour aider nos clients à prendre des décisions éclairées et à atteindre leurs objectifs financiers.
<br/>Le cabinet offre une gamme de services comptables, tels que la tenue de livres, l'établissement des états financiers, la préparation des déclarations fiscales, la gestion de la paie, le conseil en planification financière et fiscale, ainsi que la consultation sur des questions financières spécifiques.
</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className=" text_align_center">
            <img src='images/about_bg.jpeg' /><br/>
           <br/> <Link to="/contact"className="read_more" >Contactez-Nous </Link>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  {/* end about */}
 
  
  {/* contact */}
  

    
  
  <div className="contact">
    <div className="container">
      <div className="row ">
        <div className="col-md-6">
          <div className="titlepage text_align_left">
            <h2>Contactez-nous</h2>
          </div>
     

          <form onSubmit={onSubmit} id="request" className="main_form">
          <div className="row">
            <div className="col-md-12">
              <input className="contactus" placeholder="Nom" onChange={e=>{setName(e.target.value);console.log(e.target.value)}} type="type" name=" Name" /> 
            </div>
            <div className="col-md-12">
              <input className="contactus" placeholder="Num"onChange={e=>{setNum(e.target.value);console.log(e.target.value)}} type="type" name="Phone Number" />                          
            </div>
            <div className="col-md-12">
              <input className="contactus" placeholder="Email"onChange={e=>{setEmail(e.target.value);console.log(e.target.value)}} type="type" name="Email" />                          
            </div>
            <div className="col-md-12">
              <textarea className="textarea" placeholder="Message" onChange={e=>{setMessage(e.target.value);console.log(e.target.value)}} type="type" message="Name" defaultValue={""} />
            </div>
            <div className="col-md-12">
              <button type='submit' className="send_btn">Envoyer</button>

              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className=" text_align_left" >
            <h2 style={{fontWeight: "800" , fontSize:"35px" }}><span style={{textDecoration:"underline" , textDecorationThickness:"0.3em"}}>CE</span> QUE NOS<br/> PARTENAIRES DISENT DE NOUS</h2>
          </div>
          <div id="clientsl" className="carousel slide our_clientsl" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#clientsl" data-slide-to={0} className="active" />
              <li data-target="#clientsl" data-slide-to={1} />
              <li data-target="#clientsl" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption posi_in">
                    <div className="clientsl_text">
                      <i><img src="images/fish.jpg" alt="#" /></i>
                       <h3>Sté Fish Monastir <img src="images/icon.png" /></h3>
                       <p>Chez COSERPLUS, notre mission est de vous accompagner dans votre succès financier. Nous nous engageons à fournir des services de la plus haute qualité, en maintenant une relation de confiance et de respect mutuel avec nos clients. Notre approche centrée sur le client nous permet de comprendre vos besoins uniques et de vous offrir des solutions adaptées qui correspondent à vos objectifs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption posi_in">
                    <div className="clientsl_text">
                      <i><img src="images/promac.jpg"  /></i>
                      <h3>Société Promac <img src="images/icon.png" alt="#"/></h3>
                      <p> Confiez votre comptabilité à COSERPLUS, et laissez-nous transformer vos chiffres en succès. Prenez rendez-vous dès aujourd'hui pour une consultation confidentielle et découvrez comment nous pouvons contribuer à la croissance et à la prospérité de votre entreprise.

</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption posi_in">
                    <div className="clientsl_text">
                      <i><img src="images/ABIR.jpg"  /></i>
                      <br/><h3>Sté Chaussettes Abir    <img src="images/icon.png" /></h3>
                      <p> "Le cabinet de comptabilité COSERPLUS a été un partenaire précieux pour notre entreprise. Leurs conseils financiers avisés ont grandement contribué à notre croissance et à notre rentabilité."

</p>
</div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#clientsl" role="button" data-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#clientsl" role="button" data-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
  

 }


export default Home