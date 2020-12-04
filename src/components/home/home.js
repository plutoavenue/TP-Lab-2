
import './home.css';
import $ from 'jquery'; 
import './main.js';



function Home() {

    return (
        <div className="home">          
            <div>
                    <div className="overlay" />
                    <header className="page-header-home">
                        <div className="description">
                            <h1>hi, it's plutoavenue!</h1>
                            <p>
                                student of ChNU, junior c++ developer. interested in 3D graphics, gamedev, algoriphms &amp; data structures
                             </p>
                            <button className="btn btn-outline-secondary btn-lg">Tell Me More!</button>
                        </div>
                    </header>
                    <div className="container features" id="cont-feat">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <h3 className="feature-title">C++</h3>
                                <img src="images/column-1.jpg" className="img-fluid" />
                                <p>I am a third year student of Chernivtsi National University. C++ is my basic specialization in Computer Science. I started learning of 3D programing from OpenGl, using it with c++. Now I use c++ with hard systems modeling and numerical analysis.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <h3 className="feature-title">Unreal Engine</h3>
                                <img src="images/column-2.jpg" className="img-fluid" />
                                <p>For the past two year, I have worked with open sources project “ShockError”, first-person shooter survival horror video games. We created the “ShockError” using Unreal Engine 4. So, now I have two years' experience in the game industry as a Level designer in PC MMO, PvP/PvE Shooters, Survival games.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <h3 className="feature-title">Get in Touch!</h3>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" name />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows={4} defaultValue={""} />
                            </div>
                            <input type="submit" className="btn btn-secondary btn-block" defaultValue="Send" name />
                            </div>
                        </div>
                      </div>
          
                    <footer className="page-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <h6 className="text-uppercase font-weight-bold">Additional Information</h6>
                                    <p>
                                        The website was developed as part of a learning programme.
                                        Лабораторна робота №2 Створення веб-сайту із використанням React
                                        19.
                                     </p>
                                    <p>...but as a student, I am always glad to be able to learn something new and get a job offer. This portfolio can be developed in future. :)
                                      </p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                    <p>
                                        Anastasiia Demian, 301 group.
                                      <br />demian.anastasiia@chnu.edu.ua
                                      <br />+ 01 234 567 88
                                      <br />+ 01 234 567 89
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
            </div>  
      </div>
    );
}

export default Home;