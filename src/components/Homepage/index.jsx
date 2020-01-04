import React from "react";
import "./style-homepage.css";
import "./style-header.css";
import "./style-mission.css";
import "./style-mission2.css";
import "./style-mission2.css";
import bar1 from "../Homepage/IMG/bar.jpg";
import bar2 from "../Homepage/IMG/bar2.jpg";
import bar3 from "../Homepage/IMG/bar3.jpg";
import bar from "../Homepage/IMG/bar.jpg";

import mission1 from "../Homepage/IMG/mission1.png";
import mission2 from "../Homepage/IMG/mission2.png";
import mission3 from "../Homepage/IMG/mission3.png";

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
      <div className="paragraph-heading">
        <p className="p-1">~ ~ Check out our Featured Pubs! ~ ~</p>
      </div>
      <div className="wrapper3">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            {/* <img class="activator" src="images/office.jpg"></img> */}
            <img class="activator" width={200} height={200} src={bar}></img>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {/* Card Title<i class="material-icons right">more_vert</i> */}
            </span>
            <p>
              <a className="a1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                deserunt impedit eius aspernatur inventore, recusandae ducimus
                quas nobis perspiciatis praesentium officiis sed minima
                repellat, suscipit similique nihil ipsum. Odit, ad.
              </a>
              <br />
              <hr />
              <a href="#" className="linktag">
                This is a link
              </a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Card Title<i class="exit right">X</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"></span>
            <p>
              <a href="#" className="linktag">
                This is a link
              </a>
            </p>
          </div>
          <hr />
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {/* Card Title<i class="material-icons right">more_vert</i> */}
            </span>
            <p>
              <a href="#" className="a1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam a
                minima neque odit dolorem, distinctio eligendi cum, nulla animi
              </a>
            </p>
          </div>
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" width={200} height={200} src={bar3}></img>
          </div>
          {/* <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              Card Title<i class="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">This is a link</a>
            </p>
          </div> */}
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Card Title<i class="exit right">Close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            {/* <img class="activator" src="images/office.jpg"></img> */}
            <img class="activator" width={200} height={200} src={bar2}></img>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {/* Card Title<i class="material-icons right">more_vert</i> */}
            </span>
            <p>
              {/* <a href="#">This is a link</a> */}
              <a className="a1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                deserunt impedit eius aspernatur inventore, recusandae ducimus
                quas nobis perspiciatis praesentium officiis sed minima
                repellat, suscipit similique nihil ipsum. Odit, ad.
              </a>
              <br />
              <hr />
              {/* <Link to="http://google.com"> Contact us </Link>
              <a href={"http://google.com"}>Google</a> */}
              <a href="https://www.google.com" className="linktag">
                This is a link
              </a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Card Title<i class="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
