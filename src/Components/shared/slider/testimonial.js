import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Heading from './../common/heading';
import Paragraph from '../common/paragraph';

function TestimonialSlider() {
  return (
    <div>
    <Heading title="What our client say" />
    <Carousel className="container testimonial">
      <Carousel.Item className="col-md-4">
        <div className="row mx-auto"> 
        
        <Card className='mx-auto'>
          <Card.Img variant="top" src="./card3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
       
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item className="col-md-4">
        <div className="row mx-auto"> 
            <Card className='mx-auto'>
              <Card.Img variant="top" src="./card1.png" />
              <Card.Body>
                <Card.Title>ShwetaC</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item className="col-md-4">
        <div className="row mx-auto"> 
          <Card className='mx-auto'>
            <Card.Img variant="top" src="./card2.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="col-md-4">
        <div className="row mx-auto"> 
            <Card className='mx-auto'>
              <Card.Img variant="top" src="./card1.png" />
              <Card.Body>
                <Card.Title>ShwetaC</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default TestimonialSlider;