import { Form, Button, Label, Col, Row } from "react-bootstrap";

const loggingIn = () => {
  return (
    <div>
      <Row>
        {/* <Col></Col> */}
        <Col>{loginForm()}</Col>
      </Row>
    </div>
  );
};

const loginForm = () => {
  return (
    <form className="loggingForm">
      <div class="form-outline mb-4">
        <input type="email" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">
          Enter Email
        </label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">
          Enter Password
        </label>
      </div>

      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="rememberCheckbox"
            />
            <label class="form-check-label" for="rememberMe">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div class="col">
          <a href="#!">Forgot your password, traveler?</a>
        </div>
      </div>

      <button
        className="enterButton"
        type="button"
        class="btn btn-success btn-block mb-4"
      >
        Enter
      </button>

      <div class="text-center">
        <p>
          New to the game? <a href="#!">Register here.</a>
        </p>
      </div>
    </form>
  );
};

export default loggingIn;
