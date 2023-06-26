import React from 'react'
import Layout from '../layout/layout' 

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Astro = () => {
  const navigate = useNavigate();
  const otherdetails=()=> {
    navigate("/astrodetails");
  }
  return (
   <Layout>
    <section className='d-flex  align-items-center logincardContiner' >

  <div className='container'>
    <div className='row'>
      <div className='col-md-5 mx-auto '>

        <div className='card bg-white w-100 borderRounded-50 p-60'>
<div className='card-body'>
<Form>
                  <div className='form'>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <div className='my-3'>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder='Ener your full name' />
                      </div>
                      </Form.Group>
                      <Form.Group>
                      <div className='my-3'>
                      <Form.Label>Email id</Form.Label>
                      <Form.Control type="email" placeholder='@example.com' />
                      </div>
                      
                      </Form.Group>
                      <Form.Group>
                      <div className='my-3'>
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" placeholder='Enter mobile no.' />
                      </div>
                      </ Form.Group>
                        <div class="forgot-link text-gray my-3 d-flex align-items-center gap-3">
                        <Form.Check type='check'></Form.Check>
                        I agree to the Terms And Conditions*
                        </div>
                      <div className='continue-btn mt-5 d-flex justify-content-center'> 
                      <Button variant="danger" size="lg" onClick={otherdetails}>
                        Continue
                        <span><img src='../../circle-right.png' className='wd-40' /></span>
                      </Button>
                      </div>
               
                  </div>
                </Form>
</div>
        </div>
      </div>
    </div>
  </div>
    </section>
    <div className='container mt-5 py-5'>
      <div className='row'>
        <div className='col-md-12'>
<h2 className='text-center'>Sign up to become an Astrodevam Verified Astrologer</h2>

<p className='mt-4'>If looking forward to taking your astrology skills online, join India’s largest astrology platform, which brings you a tremendous opportunity to expand your customer base, both nationally and internationally. With 4,50,000+ daily users, and 2.5-million+ monthly users, the Astrodevam app is the most widely used astrology platform in India, with the highest percentage of paid and repeating users awaiting your expertise. Astrodevam was recently awarded the Most Trusted Astrology Platform at the prestigious Zee National Achievers Award.
  </p>
  
  <p>
Having served over 3-crore customers, the Astrodevam app is home to 5000+ astrologers and offers them a platform to showcase their skills and help them develop a distinctive online presence. The app is available in 20+ languages and welcomes experts across astrological disciplines, including Vedic Astrology, Tarot Reading, Lal Kitab Reading, Numerology, and much more. In fact, to further help you broaden your horizon, Astrodevam brings you as many as three ways to interact and earn from the users - Talk to Astrologer, Chat with Astrologer, and Live Sessions.
</p>
<p>
Astrodevam believes in taking everyone together and thus gives both budding and well-experienced astrologers a fair chance to show off their skills. The Online astrologer registration process is fairly easy, and our customer care executives on the other side shall help you 24/7 just in case you need any assistance.
Having said that, fill out the form on the right to begin your journey with Astrodevam.</p>
        </div>
      </div>
    </div>
   </Layout>
  )
}

export default Astro