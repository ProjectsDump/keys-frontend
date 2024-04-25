import AuthLogin from "@/components/AuthLogin";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-auth">
        <AuthLogin />
      </div>
      <div className="login-image">
        <Image
          alt="hero"
          className="login-jpg"
          src="/assets/images/auth2.jpg"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default Login;
