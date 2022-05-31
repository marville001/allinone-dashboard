import React from "react";

const Footer = () => (
    <div className="mt-24">
        <p className="dark:text-gray-200 text-gray-700 text-center m-20">
            © {new Date().getFullYear()} All rights reserved. By {" "}
            <a
                href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                Martin Mwangi
            </a>
        </p>
    </div>
);

export default Footer;
