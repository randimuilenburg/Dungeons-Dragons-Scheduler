const loginForm = () => {
  return (
    <form>
      <div class="form-outline mb-4">
        <input type="email" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">
          Email
        </label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">
          Password
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
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button type="button" class="btn btn-dark btn-block mb-4">
        Sign in
      </button>

      <div class="text-center">
        <p>
          New here? <a href="#!">Register!</a>
        </p>
      </div>
    </form>
  );
};

export default loginForm;
