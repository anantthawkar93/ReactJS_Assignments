import React from "react";

function Footer() {
  return (
    <div className="footer">
      <section>
        <h3>Footer</h3>
        <nav>
          <p>
            ABOUT US:&nbsp;&nbsp;
            <a className="footerlink" href="#">
              Disclaimer
            </a>
            <a className="footerlink" href="#">
              Privacy Policy
            </a>
            <a className="footerlink" href="#">
              Cookies Policy
            </a>
            <a className="footerlink" href="#">
              Sitemap
            </a>
            <a className="footerlink" href="#">
              Feedback
            </a>
          </p>
          © Copyright Tata Steel 2019. All rights reserved.
        </nav>
      </section>
    </div>
  );
}
export default Footer;
