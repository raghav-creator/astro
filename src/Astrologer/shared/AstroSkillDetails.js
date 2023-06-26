import React from 'react'
import Layout from '../layout/layout'
import { Container, Form } from 'react-bootstrap'
import editDetails from'../../Assets/imgs/editDetails.png'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Stepper } from 'react-form-stepper';


const AstroSkillDetails = () => {
   const navigate = useNavigate();
  return (
     
    <Layout>
         {/* <Stepper
  steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
  activeStep={0}
/>  */}
      <Container>
        <div className='row justify-content-center'>
          <div class="col-md-5 text-center">
            <div className='editDetailsImgBox mx-auto'>
               <img src={editDetails} className='editDetailsImg'/>
            </div>

       <p className='text-darkGray'><b>Profile pic*</b>(jpg,png,jpeg only)</p>
       <p className='uploadphotoTxt'>Please Upload image below 5 mb)</p>

          </div>

        </div>
        <section className='my-5'>
          <Form>
          <div className='row'>
                 <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Gender* <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Other</option>
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3 d-flex gap-3 flex-sm-wrap align-items-end'>
                  <Form.Group  controlId="exampleForm.ControlInput1" className='flex-grow-1'>
                     <Form.Label>Date of Birth* <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">12</option>
                      <option value="2">13</option>
                      <option value="3">14</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group  controlId="exampleForm.ControlInput1"  className='flex-grow-1'>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">Jan</option>
                      <option value="2">June</option>
                      <option value="3">March</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group  controlId="exampleForm.ControlInput1"  className='flex-grow-1'>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">1980</option>
                      <option value="2">1981</option>
                      <option value="3">1983</option>
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Primary Skills <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">Vedic, Numerology, Vastu, Prashana, KP</option>
                      <option value="1">Vedic, Numerology, Vastu, Prashana, KP</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>All Skills <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">Vedic, Numerology, Vastu, Prashana, KP</option>
                      <option value="1">Vedic, Numerology, Vastu, Prashana, KP</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Language <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">English, Hindi</option>
                      <option value="1">Punjabi</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Experience in years <sup class="text-danger">*</sup></Form.Label>

                    <Form.Select aria-label="Default select example" className='form-control'>
                    
                      <option value="1">30</option>
                      <option value="1">32</option>
                      
                    </Form.Select>
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>How many hours you can contribute daily? <sup class="text-danger">*</sup></Form.Label>
                      <Form.Control type="text" placeholder='Ener your full name' />
                    </Form.Group>
                  </div>
                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>How many hours you can contribute daily? <sup class="text-danger">*</sup></Form.Label>
                      <Form.Control type="text" placeholder='Ener your full name' />
                    </Form.Group>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                      <Form.Label>Are you working on other online platform? <sup class="text-danger">*</sup></Form.Label>
                    
                      <div className='d-flex gap-3 align-items-center'>
                      <Form.Check type="radio" aria-label="radio 1" label="Yes"/>
                      <Form.Check type="radio" aria-label="radio 1" label="No"/>
                      </div>  
                    </Form.Group>
                  </div>

          </div>

          <div className='row mt-5 justify-content-center'>
            <div className='col-md-4'>
              <Button variant="danger" onClick={()=> navigate('/astroOtherDetails')} className=' w-100 astroRegisterBtn'>Next</Button>
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

export default AstroSkillDetails
