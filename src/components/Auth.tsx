import React from "react";
import { Logo } from "../../public/logo/vector/Logo";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  return (
    <>
      {/* signup */}
      <section className="auth-page">
        <div className="auth-container">
          <div className="auth-logo">
            <Logo />
          </div>

          <div className="auth-header">
            <p>join our network</p>
            <p>
              Secure your digital life with our app, generating strong passwords
              for ultimate online protection.
            </p>
          </div>

          <div className="auth-google">
            <span>
              <FcGoogle size={30} />
            </span>
            <p>Sign up with Google</p>
          </div>

          <div className="auth-span">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <div className="auth-credentials">
            <label htmlFor="Name">Name*</label>
            <input type="text" placeholder="Enter your name" />
            <label htmlFor="">Email*</label>
            <input type="text" placeholder="Enter your email" />
            <label htmlFor="">Password*</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <div className="auth-btn">
            <div className="auth-create type1">
              <p>Sign up</p>{" "}
            </div>

            <div className="auth-direct">
              <p>
                Already have an account?<span>Log in</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* login */}
    </>
  );
};

export default Auth;
