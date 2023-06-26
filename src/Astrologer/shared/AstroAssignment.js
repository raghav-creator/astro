import React from 'react'
import Layout from '../layout/layout'
import { Container, Form } from 'react-bootstrap'
import thanku from'../../Assets/imgs/thanku.png'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const AstroAssignment = () => {
   const navigate = useNavigate();
  return (
    <Layout>
      <Container>
       
        <section className='my-5'>
          <Form>
          <div className='row'>
                 <div className='col-md-12 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Number of the foreign countries you lived/travelled to? <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">1-2</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-12 mb-3 '>
                  <Form.Group  controlId="exampleForm.ControlInput1" className='flex-grow-1'>
                     <Form.Label>Are you currently working a fulltime job? <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">No, I am working as a part-timer or freelancer</option>
                    
                    </Form.Select>
                    </Form.Group>

                    
                  </div>

                  <div className='col-md-12 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>What are some good quality of a prefect astrologer? <sup class="text-danger">*</sup></Form.Label>

                    <Form.Control as="textarea" className='textAreaHeightmin' placeholder='Please let us know your thought' />
                   
                    </Form.Group>
                  </div>

                  <div className='col-md-12 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>What was the biggest challange you faced and how did you overcome it? <sup class="text-danger">*</sup></Form.Label>

                    <Form.Control as="textarea" className='textAreaHeightmin' placeholder='Write a challenge you faced in brief' />
                   
                    </Form.Group>
                  </div>

                  <div className='col-md-12 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>A customer is asking the same question repeatedly; what will you do? <sup class="text-danger">*</sup></Form.Label>

                    <Form.Control as="textarea" className='textAreaHeightmin' placeholder='Please let us know in brief' />
                   
                    </Form.Group>
                  </div>

                  <div className='col-md-12 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>What was the biggest challange you faced and how did you overcome it? <sup class="text-danger">*</sup></Form.Label>

                    <Form.Control as="textarea" className='textAreaHeightmin' placeholder='Write a challenge you faced in brief' />

                    </Form.Group>
                  </div>
 

                  <div className='col-md-12 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Maximum Earning Expectation from Astrodevam <sup class="text-danger">*</sup></Form.Label>
                      <Form.Control as="textarea" className='textAreaHeightmin' placeholder='Please let us know more about you ' />
                    </Form.Group>
                  </div>

          </div>

          <div className='row mt-5 justify-content-center gap-3'>
            <div className='col-md-4'>
              <Button variant="lightgray" className=' w-100 astroRegisterBtn' onClick={() => navigate('/astroOtherDetails')}>Back</Button>
            </div>
            <div className='col-md-4'>
              <Button variant="danger" className=' w-100 astroRegisterBtn' onClick={() => navigate('/Thank')}>Next</Button>
            </div>

            <div className='col-md-12 mt-5'>
              <p><i>You can reach out to us for Astrologer onboarding support team at onboarding@astrodevam.com case of
any issues or queries.</i></p>
            </div>
          </div>

          
          </Form>
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
      </Container>
    </Layout>
  )
}

export default AstroAssignment
