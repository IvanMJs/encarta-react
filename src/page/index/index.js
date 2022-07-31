import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PhotoIndex from "../../components/photoIndex";
import "../index/index.css";

export default function Index() {
  return (
    <>
      <Header />
      <div className="inline">
        <div className="verticalPhoto">
          <PhotoIndex />
        </div>
        <div className="list">
          <li>
            <h1>
              <Link to="/science">Ciencia </Link>
            </h1>
            <p>kajsdlkqjdlkjqwldkjqlwd</p>
          </li>
          <li>
            <h1>
              <Link to="/animals">Animales</Link>
            </h1>
            <p>kajsdlkqjdlkjqwldkjqlwd</p>
          </li>
          <li>
            <h1>
              <Link to="/technology">Tecnología </Link>
            </h1>
            <p>kajsdlkqjdlkjqwldkjqlwd</p>
          </li>
          <li>
            <h1>
              <Link to="/history">Historia</Link>
            </h1>
            <p>kajsdlkqjdlkjqwldkjqlwd</p>
          </li>
          <li>
            <h1>
              <Link to="/countries">Paises</Link>
            </h1>
            <p>kajsdlkqjdlkjqwldkjqlwd</p>
          </li>
          <div className="title">
            <h4>Enciclopedia</h4>
            <h1>Encarta 98</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
