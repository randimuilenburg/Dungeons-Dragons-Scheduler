// import { Mongoose } from "mongoose";
import { useState } from "react";
import { Form, Button, Label, Col, Row } from "react-bootstrap";

const WelcomeBack = () => {
  //   const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  //   const [lastNameIsValid, setLastNameIsValid] = useState(true);
  //   const [emailIsValid, setEmailIsValid] = useState(true);
  //   const [passwordIsValid, setPasswordIsValid] = useState(true);
  //   const [retypedPasswordIsValid, setRetypedPasswordIsValid] = useState(true);

  //   // Validating Input Fields:
  //   const validateField = (e) => {
  //     let fieldValue = e.target.value;
  //     let fieldId = e.target.id;
  //     switch (fieldId) {
  //       case "formBasicInput1":
  //         validateFirstName(fieldValue);
  //         break;
  //       case "formBasicInput2":
  //         validateLastName(fieldValue);
  //         break;
  //       case "formBasicEmail":
  //         validateEmail(fieldValue);
  //         break;
  //       case "formBasicPassword":
  //         validatePassword(fieldValue);
  //         break;
  //       case "formBasicPassword2":
  //         validateRetypedPassword(fieldValue);
  //         break;
  //     }
  //   };

  //   // Validating First Name:
  //   const validateFirstName = (fieldValue) => {
  //     if (fieldValue === null || fieldValue.trim() === "") {
  //       setFirstNameIsValid(false);
  //     } else {
  //       setFirstNameIsValid(true);
  //     }
  //   };

  //   //   Validating Last Name:
  //   const validateLastName = (fieldValue) => {
  //     if (fieldValue === null || fieldValue.trim() === "") {
  //       setLastNameIsValid(false);
  //     } else {
  //       setLastNameIsValid(true);
  //     }
  //   };

  //   // Validating Email:
  //   const validateEmail = (fieldValue) => {
  //     if (fieldValue.includes("@" && ".com", ".net")) {
  //       setEmailIsValid(true);
  //     } else {
  //       setEmailIsValid(false);
  //     }
  //   };

  return (
    <Row>
      <Col xs lg="12">
        <h2 className="landingParagraph">Welcome back, CHARACTER.</h2>
      </Col>
      <Col xs lg="12">
        <h5 className="landingParagraph">
          Remember that campaigns are at least two to three hours, traveler.
          Plan your time accordingly.
        </h5>
      </Col>
      <Col>
        <Form className="registerForm">
          <Form.Group className="mb-3" controlId="formBasicDate1">
            <Form.Label>Enter your first preferred date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter your first preferred date"
              //   class="form-label"
              for="form2Example1"
              //   isInvalid={firstNameIsValid === false}
              //   onBlur={(e) => {
              //     validateField(e);
              //   }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTime1">
            <Form.Label>
              Enter your preferred start time for your first date
            </Form.Label>
            <Form.Control
              type="time"
              placeholder="Enter your preferred start time for your first date"
              //   class="form-label"
              for="form2Example1"
              //   isInvalid={firstNameIsValid === false}
              //   onBlur={(e) => {
              //     validateField(e);
              //   }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate2">
            <Form.Label>Enter your second preferred date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter your second preferred date"
              //   class="form-label"
              for="form2Example1"
              //   isInvalid={firstNameIsValid === false}
              //   onBlur={(e) => {
              //     validateField(e);
              //   }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTime2">
            <Form.Label>
              Enter your preferred start time for your second date
            </Form.Label>
            <Form.Control
              type="time"
              placeholder="Enter your preferred start time for your second date"
              //   class="form-label"
              for="form2Example1"
              //   isInvalid={firstNameIsValid === false}
              //   onBlur={(e) => {
              //     validateField(e);
              //   }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate3">
            <Form.Label>Enter your third preferred date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter your third preferred date"
              //   class="form-label"
              for="form2Example1"
              //   isInvalid={firstNameIsValid === false}
              //   onBlur={(e) => {
              //     validateField(e);
              //   }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTime3">
            <Form.Label>
              Enter your preferred start time for your third date
            </Form.Label>
            <Form.Control
              type="time"
              placeholder="Enter your preferred start time for your third date"
              //   class="form-label"
              for="form2Example1"
              //   isInvalid={firstNameIsValid === false}
              //   onBlur={(e) => {
              //     validateField(e);
              //   }}
            />
          </Form.Group>
          <Button variant="outline-danger" type="submit">
            Submit{" "}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default WelcomeBack;
