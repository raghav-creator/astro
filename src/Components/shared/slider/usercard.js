import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Heading from "./../common/heading";
import Paragraph from "../common/paragraph";

function UsercardSlider() {
  return (
    <section className="my-4">
      <Heading title="Our Astrologers" />
      <div className="container">
        <Paragraph
          paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
      <Carousel className="container d-none d-md-block">
        <Carousel.Item>
          <div className="row mx-auto">
            <div className="col-lg-4 col-md-6 d-none d-lg-block">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card1.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>ShwetaC</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card2.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card3.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row mx-auto">
            <div className="col-lg-4 col-md-6 d-none d-lg-block">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card1.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>ShwetaC</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card2.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card3.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row mx-auto">
            <div className="col-lg-4 col-md-6  d-none d-lg-block">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card1.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>ShwetaC</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card2.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card3.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>

      <Carousel className="container d-block d-md-none">
        <Carousel.Item>
          <div className="row mx-auto">
            <div className="col-md-12">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card1.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>ShwetaC</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <Carousel.Caption>
              {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row mx-auto">
            <div className="col-md-12">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card2.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <Carousel.Caption>
              {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row mx-auto">
            <div className="col-md-12">
              <Card className="mx-auto">
                <Card.Img variant="top" src="./card3.png" />
                <Card.Body className="text-center text-white">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default UsercardSlider;
