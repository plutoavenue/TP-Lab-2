import React from 'react';
import "./news.css";


const news = () => {
    return (
        <div className="news"> 
            <a name="top" />    
            <div className="headernews">
                <img src="logo/logo.png" />
                <p>We don't have any news :)</p>
            </div>
            <div className="main">
                <div className="side">
                    <div className="side-about">
                        <strong>About me</strong>
                        <div className="animate"><img className="animate" src="logo/ra.jpg" /> </div>
                        <p>Hello! This is just a fake page for my website developed as part of a learning program. I was trying to understand React and placed here only additional information, just for fun (I actually use this page for HTML5 course when I was a freshman). But! Human design is a really special thing for every single people in the world.</p>
                    </div>
                    <div className="side-posts">
                        <strong>Popular posts</strong>
                        <div className="animate"><p>Ra Uru Khu</p>
                            <img className="animate" src="logo/ra.jpg" />
                        </div>
                        <div className="animate">
                            <p>Types</p>
                            <img className="animate" src="logo/type.jpg" />
                        </div>
                        <div className="animate">
                            <p>Lection</p>
                            <img className="animate" src="logo/hqdefault.jpg" />
                        </div>
                    </div>
                    <div className="side-follow">
                        <strong>Read me ;)
                            
                            </strong>
                        <p>
                        </p>
                        <a href="https://ru.bookmate.com/books/c5XcRPmt">
                            Book about Human Design</a>
                    </div>
                </div>
                <div className="main-content">
                    <div className="TH1">
                        <h2> WHAT IS HUMAN DESIGN? </h2>
                        <p> <strong> TRIANGLE OF POWER. </strong> Based on the date, time and place of birth, an individual card is made - a bodygraph, or a rave mandala. This is a triangle that mimics the figure of a man (see figure). It marks nine centers (triangles and squares) connected by channels. The junction of the center with the channel is called the gate. Any center can be either defined (painted) or open (not painted). What is given to us from birth and cannot be changed is called certain. Open channels or hubs are areas we can't really control. Therefore, they will soon become for us what we strive for the most. The column of numbers and signs in red refers to the Design, ie the unconscious in us, to the body. The black column is Man, that is, the conscious mind. </p>
                        <p> There are many aspects associated with these centers and channels that allow you to read the bodygraph at different levels: from physiology to psychology and spirituality. Basic reading is a person's acquaintance with his type, strategic and internal authorities. Deeper reading - on the values ​​of life, purpose. There may be health reading, which, for example, helps to adjust the diet. Yes, we all know that food should be varied. But for some types of people this mode is not suitable: they are comfortable with monotonous food. </p>
                       </div>
                </div>
            </div>
            <div className="footer">
                <div className="icon">
                    <a href="https://www.facebook.com"><i className="fa fa-facebook-square" aria-hidden="true" /></a>
                    <a href="https://twitter.com"><i className="fa fa-twitter-square" aria-hidden="true" /></a>
                    <a href="https://www.instagram.com"><i className="fa fa-instagram" aria-hidden="true" /></a>
                    <a href="https://www.youtube.com"><i className="fa fa-youtube-play" aria-hidden="true" /></a>
                </div>
               
            </div>
            <div className="scrollup">
                <a href="#top"> <i className="fa fa-chevron-up" /></a>
        </div>
         </div >
    );
}
export default news;