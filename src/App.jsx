import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./assets/react.svg"

function Cards() {
  return (
    <Card className='px-0 cards-main'>
      <Card.Img variant="top" src={img} className='py-5 px-3' />
      <Card.Body className='cards-body px-5 py-4'>
        <div className='text-center text-white'>
          <Card.Title className='name mb-0'>Elemeje Ayomide</Card.Title>
          <p className='role mb-0'>Frontend Developer</p>
          <small className='website'>phisherman.com</small>
        </div>
        <div className='row justify-content-between pt-3'>
          <Button className='text-dark bg-white px-0 cards-btn'><IoMail size={18} /><small className='ps-2'>E-mail</small></Button>
          <Button className='text-white bg-primary px-0 cards-btn'><FaLinkedin size={18} /><small className='ps-2'>Linkedin</small></Button>
        </div>
        <div className='pt-4'>
          <h4 className='cards-content-heading'>About</h4>
          <p className='mb-0 cards-content'>I am a frontend developer with a particular 
            interest in making things simple and automating daily tasks. 
            I try to keep up with security and best practices, and am always 
            looking for new things to learn.
          </p>
          <h4 className='pt-3 cards-content-heading'>Interest</h4>
          <p className='mb-0 cards-content'>Food expert. Music scholar. 
            Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. 
            Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </Card.Body>
      <Card.Footer className='cards-footer py-3'>
        <div className='d-flex justify-content-center'>
          <a href='#' className='cards-footer-icon me-3'>
            <FaTwitter />
          </a>
          <a href='#' className='cards-footer-icon me-3'>
            <FaFacebookF />
          </a >
          <a href='#' className='cards-footer-icon me-3'>
            <FaInstagram />
          </a >
          <a href='#' className='cards-footer-icon'>
            <FaGithub />
          </a >
        </div>
      </Card.Footer>
    </Card>
  )
}

function App() {
  return (
    <>
      <div className='body p-5 w-100'>
        <div className='row justify-content-around'>
          <Cards />
        </div>
      </div>
    </>
  )
}

export default App
