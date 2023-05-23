import React from "react";
import SidebarLayout from "../layout/sidebarLayout";
import { Container } from "react-bootstrap";
import chaticons from "../../Assets/imgs/chat.png";
import chatcards from "../../Assets/imgs/chatOne.png";
import arrowright from "../../Assets/imgs/ArrowRight.svg";
import calendar from "../../Assets/imgs/calendar.png";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function Dashboard() {
  return (
    <SidebarLayout>
      <Container>
        <div className="row justify-content-between gap-3 gap-md-0">
          <div className="col-md-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>
        </div>

        <div className="row justify-content-between my-5">
          <div className="col-md-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>
        </div>
      </Container>

      <Container className="my-5">
        <div className="row gap-3 gap-md-0">
          <div className="col-md-6">
            <Card className="w-100 infoCards text-white">
              <Card.Body>
                <Card.Title>Important Policies:</Card.Title>
                <Card.Text>
                  1. Never be rude to any customer
                  <br />
                  2. Never share your personal details with any customer
                </Card.Text>
                <button className="btn btn-white">Go somewhere</button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="w-100 bg-purple-dark text-white border-20">
              <Card.Body>
                <Card.Title>Check Your Performance:</Card.Title>
                <Card.Text>
                  Look into your daily ratings, earning and performance on
                  Astrotalk
                </Card.Text>
                <button className="btn btn-white">View my socres</button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      <Container className="my-5">
        <div className="row">
          <div className="col-md-12">
            <Card className="tablecustom bg-white border-20 px-0">
              <Card.Body>
                <Table bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Your price</th>
                      <th>Status</th>
                      <th>Next online time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Report</td>
                      <td>(0.0/query)</td>
                      <td>
                        <Form>
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label=""
                            className="astroSwitch"
                          />
                        </Form>
                      </td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      <Container className="my-5">
        <div className="row gap-3 gap-md-0">
          <div className="col-md-6">
            <div class="cardShortOptions p-4 d-flex align-items-center justify-content-between gap-3 ">
              <img src={calendar} />
              <h4>Weekly Time-Table</h4>
              <img src={arrowright} />
            </div>
          </div>
          <div className="col-md-6">
            <div class="cardShortOptions p-4 d-flex align-items-center justify-content-between gap-3 ">
              <img src={chatcards} />
              <h4>Chat as your own Assistant</h4>
              <img src={arrowright} />
            </div>
          </div>
        </div>
      </Container>

      <Container className="my-5">
        <div className="row">
          <div class="col-md-6">
            <Card className="w-100  bg-white">
              <Card.Body>
                <Card.Title className="mb-0">
                  Feedback to the CEO Office!
                </Card.Title>
                <p>Please share your honest feedback to help us improve</p>
                <Card.Text>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control
                        as="textarea"
                        className="textAreaHeight"
                        placeholder="Please share your honest feedback to help
us improve "
                      />
                    </Form.Group>
                  </Form>
                </Card.Text>
                <button className="btn btn-yellow-500">Send Feedback</button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </SidebarLayout>
  );
}

export default Dashboard;
