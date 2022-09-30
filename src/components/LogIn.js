import { useState } from "react";
import { Form, Button, Label, Col, Row } from "react-bootstrap";

const LoggingInForm = () => {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  // Validating Input Fields:
  const validateField = (e) => {
    let fieldValue = e.target.value;
    let fieldId = e.target.id;
    switch (fieldId) {
      case "formBasicEmail":
        validateEmail(fieldValue);
        break;
      case "formBasicPassword":
        validatePassword(fieldValue);
        break;
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

  // Validating Password:
  const validatePassword = (fieldValue) => {
    if (fieldValue === null || fieldValue.trim() === "") {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };

  return (
    <Row>
      <Col>
        <Form className="loggingForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              class="form-label"
              for="form2Example1"
              isInvalid={emailIsValid === false}
              onBlur={(e) => {
                validateField(e);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              class="form-label"
              for="form2Example2"
              isInvalid={passwordIsValid === false}
              onBlur={(e) => {
                validateField(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Remember Me"
              class="form-check-input"
              value=""
              id="rememberCheckbox"
            />
          </Form.Group>
          <Button variant="outline-danger" type="submit">
            Submit
          </Button>
          <div className="forgetPassword">
            <a href="#!">Forget your password, traveler?</a>
          </div>
          <div className="registerHere">
            <p>
              New to the game? <a href="#!">Register here.</a>
            </p>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default LoggingInForm;
