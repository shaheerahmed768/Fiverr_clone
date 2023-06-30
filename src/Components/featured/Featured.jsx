import React from 'react'
import "./Featured.scss"
import searchbutton from "../../img/search.png"

export default function Featured() {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the right <i>freelance <br />service</i>, right away</h1>
                <div className="search">
                    <div className="searchInput">
                        
                        <input type="text" placeholder='Search for any service... '/>
                    </div>

                    <button><img src={searchbutton} alt="" /></button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Desing</button>
                    <button>AI Services</button>
                </div>
            </div>
        </div>
    </div>
  )
}
