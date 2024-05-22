import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Listing from "./components/Listing";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <h1>Willkommen auf meiner Ugly-Cat Webseite</h1>

    <div style={{ border: "50px solid #ADFF2F" }} />
    <div style={{ border: "30px solid #9932CC" }} />

    <Listing name="Susi" alter="1" imageName="katze1.jpg" />
    <button type="button" class="btn btn-primary btn-lg">
      Kauf Mich
    </button>
    <div style={{ border: "30px solid #ADFF2F" }} />
    <div style={{ border: "50px solid #9932CC" }} />
    <Listing name="Cindy" alter="33" imageName="katze2.jpg" />
    <button type="button" class="btn btn-primary btn-lg">
      Kauf Mich
    </button>
    <div style={{ border: "50px solid #ADFF2F" }} />
    <div style={{ border: "30px solid #9932CC" }} />
    <Listing name="Felix" alter="93" imageName="katze3.jpg" />
    <button type="button" class="btn btn-primary btn-lg">
      Kauf Mich
    </button>
    <div style={{ border: "30px solid #ADFF2F" }} />
    <div style={{ border: "50px solid #9932CC" }} />
    <Listing name="Rainer" alter="4" imageName="katze4.jpg" />
    <button type="button" class="btn btn-primary btn-lg">
      Kauf Mich
    </button>

    <div style={{ border: "50px solid #ADFF2F" }} />
    <div style={{ border: "30px solid #9932CC" }} />
    <Listing name="Manfred" alter="16" imageName="katze5.jpg" />
    <button type="button" class="btn btn-primary btn-lg">
      Kauf Mich
    </button>

    <div style={{ border: "30px solid #ADFF2F" }} />
    <div style={{ border: "50px solid #9932CC" }} />
    <Listing name="Angelika" alter="18" imageName="katze6.jpg" />
    <button type="button" class="btn btn-primary btn-lg">
      Kauf Mich
    </button>

    <div style={{ border: "50px solid #ADFF2F" }} />
    <div style={{ border: "30px solid #9932CC" }} />
  </>
);
