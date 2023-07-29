import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div>
<div className="main-frame">
      <div className="frame-21">
        <div className="image"></div>

        <div className="login">
          <div className="frame-11">
            <div className="logo">
              <div className="series">SERIES</div>
            </div>

            <div className="greetings">
              <div className="frame-17">
                <div className="hey-welcome-here">HEY, WELCOME HERE!</div>

                <div className="login-to-experience-our-services">
                  Login to experience our services
                </div>
              </div>
            </div>

            <div className="email">
              <div className="frame-112">
                <div className="frame-15">
                  {/* <div className="enter-phone-number">Enter Phone Number</div> */}

                  <input className="rectangle-1" placeholder='Phone Number'></input>
                </div>
              </div>
            </div>

            <div className="password">
              <div className="frame-10">
                <div className="frame-152">
                  <div className="otp">OTP</div>

                  <input className="rectangle-2" placeholder='OTP' disabled={true}></input>
                </div>
              </div>
            </div>

            <div className="remember-me">
              <div className="frame-9">
                <div className="frame-13">
                  <div className="frame-16">
                    <div className="frame-18">
                      <div className="send-otp">Send OTP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="or-line">
              <div className="frame-20">
                <div className="line-1"></div>

                <div className="or">or</div>

                <div className="line-2"></div>
              </div>
            </div>

            <div className="google">
              <div className="frame-19">
                <div className="google-authentication">
                  Google Authentication
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>
  )
}

export default Login
