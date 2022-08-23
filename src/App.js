import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <div className="login-page">
        <div className="main-content">
          <div className="company-logo">
            {/* <img src={Navigation} alt="navigation-logo" /> */}
          </div>
          <div className="form-content">
            <h4 role="heading" aria-level="1">
              Welcome!
            </h4>
            <p>Please login using your account</p>
            <form>
              <div className="form-group login-fields">
                <label>USERNAME</label>
                <input
                  type="text"
                  className="form-control"
                  value="demo@pdsgalaxy.com"
                  aria-label="Username"
                />
              </div>
              <div className="form-group login-fields">
                <label>PASSWORD</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder=""
                  value="test@123"
                />
                {/* <img src={openeye} alt="openeye-logo" className="password-img" /> */}
              </div>
              {/* <button
                type="button"
                onClick={() => history.push("/account-details")}
                // eslint-disable-next-line react/no-unknown-property
                class="login-btn btn-block"
              >
                LOGIN
              </button> */}
              <div className="more-info">
                <div className="forgot-pw">
                  <a href="/">Forgot your password?</a>
                </div>
                <div className="reset">{/* <a href="/"></a> */}</div>
              </div>
              <button type="submit" class="signup-btn btn-block">
                CREATE AN ACCOUNT
              </button>
            </form>
          </div>
        </div>
        <div class="copyright">
          <p style={{ color: '#000' }}>&copy;2021 PDS Galaxy</p>
        </div>
      </div>
    </div>
  );
}
