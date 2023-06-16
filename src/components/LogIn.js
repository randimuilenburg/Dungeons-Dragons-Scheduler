import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Form, Button, Label, Col, Row } from "react-bootstrap";
// import api.json from ''

const LoggingInForm = () => {
  const [pageIsFresh, setPageIsFresh] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  // Validating Input Fields:
  const validateField = (e) => {
    let fieldValue = e.target.value;
    let fieldId = e.target.id;
    switch (fieldId) {
      case "formBasicEmail":
        validateEmail(fieldValue) || validatePage(true);
        break;
      case "formBasicPassword":
        validatePassword(fieldValue) || validatePage(true);
        break;
    }
  };

  // Validating whether the page is fresh or not:
  const validatePage = (fieldValue) => {
    if (fieldValue === undefined) {
      setPageIsFresh(true);
    } else {
      setPageIsFresh(false);
    }
  };

  // Validating Email:
  const validateEmail = (fieldValue) => {
    if (!fieldValue.includes("@" && ".com", ".net") || fieldValue === null) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
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

  // API TEST CODE
  // const playerName =

  // const testCode = () => {
  //   return `Here is ${apiData.players[0].character}!`;
  // };

  // UseEffect
  // (onSubmit) = useEffect in Submit button
  // use it to look up email, match email to user, console.log user to see if it works?

  return (
    <Row>
      <Col>
        <Form className="loggingForm">
          <h5>Welcome.</h5>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              class="form-label"
              for="form2Example1"
              isInvalid={pageIsFresh === false && emailIsValid === false}
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
              isInvalid={pageIsFresh === false && passwordIsValid === false}
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
          <Button
            disabled={
              emailIsValid !== true ||
              undefined ||
              passwordIsValid !== true ||
              undefined
            }
            variant="outline-danger"
            type="submit"
          >
            {" "}
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
          {/* API TEST CODE */}
          {/* <div>
            <p>`Testing something! Here is: ${testCode}.`</p>
          </div> */}
        </Form>
      </Col>
    </Row>
  );
};

export default LoggingInForm;
