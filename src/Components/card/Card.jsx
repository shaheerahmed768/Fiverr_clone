import React from 'react'
import "./Card.css"
import Card from 'react-bootstrap/Card';

const BasicExample = ()=> {
  return (
    <>
    <div className="header"><br />

        <h1>Guides to help you grow</h1>
    </div>
    <div className="cards">

    <div className='card-1'>
        <Card >
      <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png" />
      <Card.Body>
        <Card.Title>Start online business & work from home</Card.Title>
        <Card.Text>
        A complete guide to starting a small business online
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='card-2'>
        <Card >
      <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png" />
      <Card.Body>
        <Card.Title>Digital marketing made easy</Card.Title>
        <Card.Text>
        A practical guide to understand what is digital marketing
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='card-3'>
        <Card >
      <Card.Img variant="top" className='card-img' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png" />
      <Card.Body>
        <Card.Title>Create a logo for your business</Card.Title>
        <Card.Text>
        A step-by-step guide to create a memorable business logo
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  )
}

export default BasicExample;