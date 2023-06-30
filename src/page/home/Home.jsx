import React from "react";
import "./Home.scss";
import cardPic1 from "../../img/card-1.png"
import cardPic2 from "../../img/card-2.png"
import cardPic3 from "../../img/card-3.png"
import cardPic4 from "../../img/card-4.png"
import cardPic5 from "../../img/card-5.png"
import cardPic6 from "../../img/card-6.png"
import cardPic7 from "../../img/card-7.png"
import cardPic8 from "../../img/card-8.png"
import cardPic9 from "../../img/card-9.png"
import cardPic10 from "../../img/card-10.png"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import Featured from "../../Components/featured/Featured";
import TrustedBy from "../../Components/trustedBy/TrustedBy";
import check from "../../img/check.png"
import { cards } from "../../data"

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Carousel>
      <Carousel.Item>
        
<CardGroup>
      <Card>
        <Card.Img variant="top" src={cardPic10} style={{width: 250, margin: 20}}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic9}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic8}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic7}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic6} style={{width: 250, margin: 20}} />
        
      </Card>
    </CardGroup>

        
      </Carousel.Item>
      <Carousel.Item>
        
<CardGroup>
      <Card>
        <Card.Img variant="top" src={cardPic5} style={{width: 250, margin: 20}} />
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic4}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic3}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic2}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic1}  style={{width: 250, margin: 20}}/>
        
      </Card>
    </CardGroup>

        
      </Carousel.Item>
      <Carousel.Item>
        
<CardGroup>
      <Card>
        <Card.Img variant="top" src={cardPic10}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic9}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic8}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic7}  style={{width: 250, margin: 20}}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={cardPic6} style={{width: 250, margin: 20}} />
        
      </Card>
    </CardGroup>

        
      </Carousel.Item>
    </Carousel>
      
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src={check} alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src={check} alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>

        </div>

        <div className="item">
          <video src="" controls poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"></video>
        </div>

      </div>

      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src={check} alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src={check} alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src={check} alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png'
              alt=""
            />
          </div>
        </div>
      </div><br />

      <div className="testimonial">
        <div className="left">
          <video src="" controls poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"></video>
        </div>
        <div className="right">
          <h5>Kay Kim, Co-Founder | {<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/rooted-logo-x2.7da3bc9.png" alt="" />}</h5>
          <div className="test-span">
            <span>"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;