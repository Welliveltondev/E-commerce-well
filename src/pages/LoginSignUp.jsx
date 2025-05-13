import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  <div className="loginsignup">
    <div className="loginsignup-container">
      <h2>Sign Up</h2>
      <div className="loginsignup-fields">
        <input type="text" placeholder="Your name"/>
        <input type="email" placeholder="Your email"/>
        <input type="password" placeholder="Password"/>
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already have an account? <span>Login</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing, i agree to the terns of use & privacy policy.</p>
      </div>
    </div>
  </div>
}

export default LoginSignUp