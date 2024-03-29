import React, { useEffect, useRef, useState } from 'react'
import './css/home.css'
import { Background } from '../components/Background'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Typed from 'typed.js'
import Skill from '../components/Skill'
import Project from '../components/Project'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import profileImage from '../images/profile-photo.jpeg'
import webGallery from '../images/webGallery.png'
import portfolio from '../images/portfolio.jpg'
import amazon_website from '../images/amazon_website.png'
import emailjs from '@emailjs/browser'

function Home() {
  const typedEl = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const template_id : string  = process.env.REACT_APP_TEMPLATE_ID as string;
  const user_id : string  = process.env.REACT_APP_USER_ID as string;
  const key : string = process.env.REACT_APP_KEY as string;

  const data = {
    name : name,
    email : email,
    subject : subject,
    message : message    
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()

    emailjs.send(user_id, template_id, data, key)
      .then((result) => {
        alert("Message Sent, We will get back to you shortly " + result.text);
      },
        (error) => {
          alert("An error occurred, Please try again " + error.text);
        });
  };

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['a Programmer and', 'a Web-Developer.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    }
  }, [])
  return (
    <div className='home'>
      <Background />
      <Header />
      <h1>I am Ankit Kushwaha.<br />And I am <span ref={typedEl} /></h1>
      <section className='about container' id='about'>
        <h2>About Me</h2>
        <div className='about-me'>
          <div className='left'>
            <img src={profileImage} alt='My Photo' />
          </div>
          <div className='right'>
            <p>
              As an aspiring programmer and web developer,
              I am eager to embark on my journey in the world
              of technology. Equipped with a solid understanding
              of programming fundamentals and a thirst for knowledge,
              I am committed to honing my skills and creating
              exceptional digital experiences. With a collaborative
              mindset and a drive to innovate, I am excited to
              contribute to impactful projects and grow as a
              professional in this ever-evolving field
            </p>
            <a className='btn btn-primary' href={process.env.PUBLIC_URL + '/resume.pdf'} download='resume.pdf'><span className='download-icon'><FileDownloadIcon /></span>Download Resume</a>
          </div>
        </div>
        {/* <div className='contact'>
            <div className='left'>
              <h3>Contact Details</h3>
              <p>
                Ankit Kumar Kushwaha <br />
                H No. 165/22, Gandhi Nagar, <br />
                Gurgaon, Haryana-122001 <br />
                +91-9718695208 <br />
                ankit971869@gmail.com
              </p>
            </div>
            <div className='right'>
              <a className='btn btn-primary' download='resume.pdf'><span className='download-icon'><FileDownloadIcon /></span>Download Resume</a>
            </div>
          </div> */}
        <div className='education'>
          <h3>Education</h3>
          <p>Bachelor’s Degree in Computer Application from Maharshi Dayanand University in 2022.</p>
        </div>
        <div className='skills'>
          <h3>Skills</h3>
          <Skill class='html' name='Html' knowledgeInPercent={90} />
          <Skill class='css' name='CSS' knowledgeInPercent={90} />
          <Skill class='sass' name='Sass' knowledgeInPercent={90} />
          <Skill class='javascript' name='JavaScript' knowledgeInPercent={80} />
          <Skill class='typescript' name='TypeScript' knowledgeInPercent={80} />
          <Skill class='react' name='React' knowledgeInPercent={80} />
          <Skill class='python' name='Python' knowledgeInPercent={80} />
          <Skill class='django' name='Django' knowledgeInPercent={70} />
        </div>
      </section>
      <section className='work container' id='works'>
        <h2>Works</h2>
        <p>Checkout Some of My Work.</p>
        <div className='project-wrapper row'>
          <Project projectLink='https://next-amazon-clone-nai8.vercel.app/' thumbnail={amazon_website} projectName='Amazon Clone Website' projectTitle='A Fully Responsive website built in Next.js, a react framework and having authentication functionality Of oAuth, add to cart functionality etc.' />
          <Project projectLink='#' thumbnail={portfolio} projectName='Portfolio' projectTitle='A Fully Responsive and Static Website for Portfolio developed using React.' />
          <Project projectLink='https://ankit04042001.github.io/web-gallery/' thumbnail={webGallery} projectName='Web Gallery' projectTitle='A Fully Responsive and Static Mini WebPage for Web Gallery developed using Html, CSS and Javascript only.' />
        </div>
      </section>

      <section className='contact container' id='contact'>
        <div className='container'>
          <h2>Message Me</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={(e)=>(setName(e.target.value))} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="email"  onChange={(e)=>setEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" onChange={(e)=>setSubject(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Enter Your Message</Form.Label>
              <Form.Control as="textarea" rows={5} onChange={(e)=>setMessage(e.target.value)} required/>
            </Form.Group>
            <Button variant='primary' type='submit' className='w-100'>Submit</Button>
          </Form>
          <div className='other-contacts'>
            <div className='call'>
              <p >Call Me</p>
              <span className='icon'><CallIcon /></span> +91-9718695208
            </div>
            <div className='email'>
              <p >Email Me</p>
              <span className='icon'><EmailIcon /></span> ankit971869@gmail.com
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home