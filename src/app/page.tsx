"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";
import PasswordIcon from "@mui/icons-material/Password";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { MdDoubleArrow } from "react-icons/md";

export default function Home() {
  return (
    <section className="landing-page">
      <div className="hero">
        <div className="hero-text">
          <div className="hero-text-container">
            <h1>Generate And Save Secure Passwords</h1>
            <p>
              Never forget or have to click on forgot password to remember your
              passwords
            </p>
            <p>
              Generate complex and secure passwords that can be used anywhere
            </p>
            <Link className="Link" href={"/register"}>
              <button className="btn hero-btn">
                Get Started
                <span className="arrow-icon" style={{ marginTop: "5px" }}>
                  <MdDoubleArrow size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <div className="hero-img-container">
            <Image
              alt="hero"
              className="hero-image"
              src="/assets/images/hero.png"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <div className="what-long-section">
        <h1 className="what-long-head">What Makes A Password Secure?</h1>
        <div className="what-long-body">
          <div className="what-long-item first">
            <FingerprintIcon className="what-long-icon" />
            <h3>Unique</h3>
            <p>
              A secure password should be unique to each accound to reduce
              vulnerability in event of a hack.
            </p>
          </div>
          <div className="what-long-item second">
            <PasswordIcon className="what-long-icon" />
            <h3>Long</h3>
            <p>
              A secure password should have at least 10 characters. The longer
              the password the more secure it is.
            </p>
          </div>
          <div className="what-long-item second">
            <VpnLockIcon className="what-long-icon" />
            <h3>Complex</h3>
            <p>
              A secure password should be a complex combination of different
              characters, numbers and symbols to form a random string that
              doesn&apos;t resemble a name or a normal word.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
