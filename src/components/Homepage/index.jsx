import React from "react";
import "./style-homepage.css";
import bar from "./bar.jpg";

import mission1 from "../Homepage/mission1.png";
import mission2 from "../Homepage/mission2.png";
import mission3 from "../Homepage/mission3.png";

function Homepage() {
  return (
    <div
      className="jumboWrap"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="jumbotron landingJumbo">
        <h1 className="display-4 landingHead">Perfect Pub</h1>
        <p className="lead">A simple way to find the perfect pub.</p>
        <p className="lead">Search Here!</p>
        <form class="form-inline">
          <div class="form-group mb-2">
            <label for="staticEmail2" class="sr-only">
              Email
            </label>
            {/* <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail2"
              value="email@example.com"
            ></input> */}
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">
              Search by Zip Code:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder=" Search by Zip Code:"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary mb-2" id="button-header">
            Enter!
          </button>
        </form>
      </div>

      <h2
        className="mission-header"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        <p className="paragraph">~ What is Perfect Pub? ~</p>
      </h2>
      <div className="container">
        <div
          className="card-one"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={mission1}
              className="img-mission"
            ></img>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              deserunt, rerum, esse architecto necessitatibus vero laboriosam
              vitae ullam corporis nemo officia, rem distinctio ad. Libero
              consectetur facere quam possimus illo!
            </p>
          </div>
        </div>
        <div className="card-one" data-aos="fade-up" data-aos-duration="1000">
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={mission2}
              className="img-mission"
            ></img>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              assumenda dignissimos aperiam doloremque! Odit, rem enim ipsam
              distinctio odio recusandae nesciunt rerum, cumque molestiae
              quidem, dolor voluptatibus officia natus esse.
            </p>
          </div>
        </div>
        <div className="card-one" data-aos="fade-left" data-aos-duration="1000">
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={mission3}
              className="img-mission"
            ></img>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              accusamus fugiat accusantium dolorem. Cupiditate tempora ducimus
              in non, odit voluptatibus, possimus illum veniam laudantium eum et
              voluptates architecto quia pariatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
