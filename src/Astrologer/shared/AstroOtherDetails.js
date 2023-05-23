import React from 'react'
import Layout from '../layout/layout'
import { Container, Form } from 'react-bootstrap'
import editDetails from'../../Assets/imgs/editDetails.png'
import Button from 'react-bootstrap/Button';
import { Stepper } from 'react-form-stepper';


const AstroOtherDetails = () => {
   
  return (
    <Layout>
      <Container>
       
        <section className='my-5'>
          <Form>
          <div className='row'>
                 <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Why do you think we should onboard you? <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">Rich Experience,  Deep Knowledge</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3 '>
                  <Form.Group  controlId="exampleForm.ControlInput1" className='flex-grow-1'>
                     <Form.Label>What is suitable time for interview? <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">12</option>
                      <option value="2">13</option>
                      <option value="3">14</option>
                    </Form.Select>
                    </Form.Group>

                    
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Which city do you currently live in? <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">Noida</option>
                      <option value="1">Vedic, Numerology, Vastu, Prashana, KP</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Main source of business(other than astrology)?<sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">None of the  above</option>
                      <option value="1">Vedic, Numerology, Vastu, Prashana, KP</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Select you highest qualification <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">Post graduationt</option>
                      <option value="1">Punjabi</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Degree/Diploma <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">MA</option>
                      <option value="1">32</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>College/School/University <sup class="text-danger">*</sup></Form.Label>
                      <Form.Control type="text" placeholder='xyz University' />
                      
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>From where did you learn astrology? <sup class="text-danger">*</sup></Form.Label>
                      <Form.Control type="text" placeholder='xyz universtiy' />
                      
                    </Form.Group>
                  </div>
                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Instagram profile link</Form.Label>
                      <Form.Control type="text" placeholder='@xyzhindi' />
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Facebook profile link</Form.Label>
                      <Form.Control type="text" placeholder='@xyzhindi' />
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Linkedin profile link</Form.Label>
                      <Form.Control type="text" placeholder='@xyzhindi' />
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Youtube profile link</Form.Label>
                      <Form.Control type="text" placeholder='@xyzhindi' />
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Website  link</Form.Label>
                      <Form.Control type="text" placeholder='1' />
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Did anybody refer you to Astrodevam?</Form.Label>
                    
                      <div className='d-flex gap-3 align-items-center heightCheckbox'>
                      <Form.Check type="radio" aria-label="radio 1" label="Yes"/>
                      <Form.Check type="radio" aria-label="radio 1" label="No"/>
                      </div>  
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Minimum Earning Expectation from Astrodevam <sup class="text-danger">*</sup></Form.Label>
                      <Form.Control type="text" placeholder='20,000' />
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Maximum Earning Expectation from Astrodevam <sup class="text-danger">*</sup></Form.Label>
                      <Form.Control type="text" placeholder='40,000' />
                    </Form.Group>
                  </div>

                  <div className='col-md-12 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Maximum Earning Expectation from Astrodevam <sup class="text-danger">*</sup></Form.Label>
                      <Form.Control as="textarea" className='textAreaHeight' placeholder='Please let us know more about you ' />
                    </Form.Group>
                  </div>

          </div>

          <div className='row mt-5 justify-content-center gap-3'>
            <div className='col-md-4'>
              <Button variant="lightgray" className=' w-100 astroRegisterBtn'>Back</Button>
            </div>
            <div className='col-md-4'>
              <Button variant="danger" className=' w-100 astroRegisterBtn'>Next</Button>
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

export default AstroOtherDetails
