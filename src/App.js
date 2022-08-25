
import './App.css';
import gth1 from './img/gth1.webp'
import im2 from './img/im2.jpg'

import im4 from './img/im4.jpg'

import im5 from './img/im5.jpg'

function App() {
  return (
    <div>
     
  <nav className="navbar navbar-expand-lg bg-danger">
    <div className="container-fluid ">
      <a className="navbar-brand tech" href="#">CompanyName</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
          <li className="nav-item">
            <a className="nav-link text" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text" href="#">Client</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text" href="#" id="navbarScrollingDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu text" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="#">Web Development</a></li>
              <li><a className="dropdown-item" href="#">App Development</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link text" aria-current="page" href="#">Contact Us</a>
          </li>


        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
{/* slider */}
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={im2} height="500vh"  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={im5} height="500vh"  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={im4} height="500vh"  className="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container-fluid">
 {/* tagline */}
  <div className="row">
    <div className="col-12">
      <h3 className="display-6 text-center mt-5 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.{'\n'} Laudantium fugit accusantium facilis eius inventore quibusdam.</h3>
    </div>
  </div>
{/* Feature */}
  <div className="row justify-content-evenly pt-3 pb-3">
    <div className="col-md-3 text-center mt-5">
      <h1><i className="bi bi-file-code-fill text-primary"></i></h1>
      <h5>Built for devloper</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque mollitia facilis minus.</p>
    </div>
    <div className="col-md-3 text-center mt-5">
 <h1><i className="bi bi-easel-fill text-danger"></i></h1>
 <h5>Built for devloper</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque mollitia facilis minus.</p>
    </div>
    <div className="col-md-3 text-center mt-5">
      <h1><i className="bi bi-calendar-range-fill text-success"></i></h1>
      <h5>Built for devloper</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque mollitia facilis minus.</p>
    </div>
  </div>

{/* Line */}
<hr/>

{/* grouth */}
<div className="row justify-content-evenly pt-3 pb-5">
  <div className="col-md-5 pt-3">
    <img src={gth1} className="img-fluid"/>
  </div>
  <div className="col-md-5 pt-3">

    <h5 className="mt-3">Web Development</h5>
    <div className="progress">
      <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
    </div>

    <h5 className="mt-3">App Development</h5>
    <div className="progress">
      <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
    </div>

    <h5 className="mt-3">Software Development</h5>
    <div className="progress">
      <div className="progress-bar bg-warning" role="progressbar"  style={{width: "75%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
    </div>

    <h5 className="mt-3">SEO</h5>
    <div className="progress">
      <div className="progress-bar bg-danger" role="progressbar" style={{width: '30%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
    </div>

    <h5 className="mt-3">Marketing</h5>
    <div className="progress">
      <div className="progress-bar bg-primery" role="progressbar" style={{width: '85%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
    </div>

  </div>
</div>

{/* contact */}
<div className="row justify-content-evenly pt-2 pb-5" style={{backgroundColor: "#f1f1f1"}}>
  <div className="col-md-5 mt-5">
    <h3 className="mb-4">Contact Form</h3>
    <form>
      <div className="mb-3">
        <label id="name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label id="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label id="exampleFormControlTextarea1" className="form-label">Massage</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-danger">Submit</button>
    </form>
  </div>
  <div className="col-md-5 mt-5">
    <h3 className="mb-4">Address</h3>
    <p>Lorem ipsum dolor sit amet.{'\n'}Lorem, ipsum dolor.{'\n'}
      <i className="bi bi-telephone"></i> : 8938869463{'\n'}</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.3356125115847!2d77.53756927347399!3d29.973177878275585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eea8b392923d3%3A0x60065f1cbfdb40cc!2sMasjid%20Aatish%20Bazan!5e0!3m2!1sen!2sin!4v1657692099875!5m2!1sen!2sin" ></iframe>
  </div>
</div>



{/* FAQ */}
<div className="row justify-content-evenly pt-5 pb-5">
  <div className="col-md-10">
    <h3 className="text-center pb-4">FAQ</h3>
    <div className="accordion border" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



{/* footer */}

<div className="row justify-content-evenly bg-dark text-white pt-2 pb-5">
  <div className="col-md-3 pt-3">
    <h5>CompanyName</h5>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita inventore velit aperiam obcaecati in harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minima quam quod? Quaerat!</p>
  </div>
  <div className="col-md-3 pt-3">
<h5>Important Links</h5>

  <p><a href="#" className="link-light text-decoration-none">Home</a></p>
  <p><a href="#" className="link-light text-decoration-none">About</a></p>
  <p><a href="#" className="link-light text-decoration-none">learn More</a></p>
  <p><a href="#" className="link-light text-decoration-none">Contact</a></p>

  </div>
  <div className="col-md-3 pt-3">
    <h5>Contact Us</h5>
    <p>Lorem ipsum dolor sit amet.{'\n'}Lorem, ipsum dolor.{'\n'}
      <i className="bi bi-telephone"></i> : 8938869463</p>
  </div>
</div>


<div className="row bg-secondary text-white text-center p-3">
<div className="col-md-12">
<p>Copyright 1999-2021 By CompanyName. All Right Reserved.</p>
</div>
</div>
{/* container End */}


</div>
    </div>
  );
}

export default App;
