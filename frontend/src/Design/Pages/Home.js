import React from "react";
import mainText from "../Assets/mainText.png";
import a1 from "../Assets/a1.png";
import aa1 from "../Assets/aa1.png";
import a2 from "../Assets/a2.png";
import a3 from "../Assets/a3.png";
import a4 from "../Assets/a4.png";
import a5 from "../Assets/a5.png";
export default function Home() {
  return (
    <div className="mainBackground">
      <div className="topBanner text-center">
        <img src={mainText} className="w-50 text-center mt-5 pt-5" />
      </div>
      <div className="container pb-5">
        <div className="row py-3 px-5">
          <div className="col-md-6 mainBanner text-left">
            <div>
              <a href="/nekath">
                <img src={a1} className="w-75 text-center mt-5 pt-3" />
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <a href="/nekath">
              <img src={aa1} className="w-75 text-center" />
            </a>
          </div>
        </div>
        <div className="row py-3 px-5">
          <div className="col-md-6 text-center"></div>
          <div className="col-md-6 mainBanner text-right">
            <div>
              <a href="/food">
                <img src={a2} className="w-75 text-center mt-5 pt-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="row py-3 px-5">
          <div className="col-md-6 mainBanner text-left">
            <div>
              <a href="/raban">
                <img src={a3} className="w-75 text-center mt-5 pt-5" />
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              class="img-fluid"
            />
          </div>
        </div>
        <div className="row py-3 px-5">
          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              class="img-fluid"
            />
          </div>
          <div className="col-md-6 mainBanner text-right">
            <div>
              <a href="/wish">
                <img src={a4} className="w-75 text-center mt-5 pt-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="row py-3 px-5">
          <div className="col-md-6 mainBanner text-left">
            <div>
              <a href="/games">
                <img src={a5} className="w-75 text-center mt-5 pt-5" />
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
