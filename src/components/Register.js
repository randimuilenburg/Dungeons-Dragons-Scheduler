import { useState } from "react";
import { Form, Button, Label, Col, Row } from "react-bootstrap";

const CreateNewUser = () => {
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [retypedPasswordIsValid, setRetypedPasswordIsValid] = useState(true);
  const [password, setPassword] = useState(null);

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
      case "formBasicPassword":
        validatePassword(fieldValue);
        break;
      case "formBasicPassword2":
        validateRetypedPassword(fieldValue);
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

  // Validating Password:
  const validatePassword = (fieldValue) => {
    if (fieldValue === null || fieldValue.trim() === "") {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };

  // Validating Retyped Password:
  const validateRetypedPassword = (fieldValue) => {
    if (
      fieldValue === null ||
      fieldValue.trim() === "" ||
      fieldValue !== password
    ) {
      setRetypedPasswordIsValid(false);
    } else {
      setRetypedPasswordIsValid(true);
    }
  };

  return (
    <Row>
      <Col>
        <Form className="registerForm">
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Choose a password"
              class="form-label"
              for="form2Example2"
              isInvalid={passwordIsValid === false}
              onBlur={(e) => {
                validateField(e);
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Retype Your Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Type your password again"
              class="form-label"
              for="form2Example2"
              isInvalid={
                retypedPasswordIsValid === false ||
                retypedPasswordIsValid !== passwordIsValid

                // EDIT HERE
              }
              onBlur={(e) => {
                validateField(e);
              }}
            />
          </Form.Group>
          <Button
            disabled={
              firstNameIsValid !== true ||
              lastNameIsValid !== true ||
              emailIsValid !== true ||
              passwordIsValid !== true ||
              retypedPasswordIsValid !== true
            }
            variant="outline-danger"
            type="submit"
          >
            Register{" "}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateNewUser;
