import { useState } from "react";
import { Form, Button, Label, Col, Row } from "react-bootstrap";

const ForgotPassword = () => {
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);

  //   const [passwordIsValid, setPasswordIsValid] = useState(true);

  // Validating Input Fields:
  const validateField = (e) => {
    let fieldValue = e.target.value;
    let fieldId = e.target.id;
    switch (fieldId) {
      case "formBasicInput1":
        validateFirstName(fieldValue);
        break;
      case "formBasicInput2":
        validateLastName(fieldValue);
        break;
      case "formBasicEmail":
        validateEmail(fieldValue);
        break;
    }
  };

  // Validating First Name:
  const validateFirstName = (fieldValue) => {
    if (fieldValue === null || fieldValue.trim() === "") {
      setFirstNameIsValid(false);
    } else {
      setFirstNameIsValid(true);
    }
  };

  //   Validating Last Name:
  const validateLastName = (fieldValue) => {
    if (fieldValue === null || fieldValue.trim() === "") {
      setLastNameIsValid(false);
    } else {
      setLastNameIsValid(true);
    }
  };

  // Validating Email:
  const validateEmail = (fieldValue) => {
    if (fieldValue.includes("@" && ".com", ".net")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  return (
    <Row>
      <Col>
        <Form className="passwordResetForm">
          <Form.Group className="mb-3" controlId="formBasicInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your first name"
              class="form-label"
              for="form2Example1"
              isInvalid={firstNameIsValid === false}
              onBlur={(e) => {
                validateField(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInput2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your last name"
              class="form-label"
              for="form2Example1"
              isInvalid={lastNameIsValid === false}
              onBlur={(e) => {
                validateField(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              class="form-label"
              for="form2Example1"
              isInvalid={emailIsValid === false}
              onBlur={(e) => {
                validateField(e);
              }}
            />
          </Form.Group>
          <Button variant="outline-danger" type="submit">
            Get my password
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ForgotPassword;
