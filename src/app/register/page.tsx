import Auth from "@/components/Auth";
import Image from "next/image";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register">
        <div className="register-image">
          <Image
            alt="hero"
            className="register-jpg"
            src="/assets/images/auth3.jpg"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="register-details">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default Register;
