import React from "react";

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              BABAJIDE BASHIRU
            </span>
            , Using <i className="fab fa-react" /> React JS
            <div>
              <a
                href="https://facebook.com/berbahjidey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a
                href="https://twitter.com/dat_nawty_boi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a
                href="mailto:jideybash@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/babajide-bashiru-949a0310a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a
                href="https://instagram.com/dat_nawty_boi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a
                href="https://github.com/jideybash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
