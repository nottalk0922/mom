// import "../style/event.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./main_header";
import Footer from "./main_footer";
import axios from "axios";

function Eventpage() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("http://10.150.149.50/events").then(({ data }) => {
      setEvents(data);
    });
  }, []);

  const good = events.map((event, idx) => {
    return (
      <tr className="event_table">
        <td>
          <div
            className="event"
            onClick={() => {
              window.location = event.url;
            }}
          >
            <strong>{event.title}</strong>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <Header />
      <div className="title">
        <h2>이벤트</h2>
        <img src="./img/gift-box.png"></img>
      </div>

      <div className="notice">
        <div className="notice_header">
          <h5>Notice</h5>
        </div>
        <div className="notice_section">
          <table>{good}</table>
        </div>
      </div>

      <div className="list-webzine">
        <div className="list-media">
          <div class>
            <img src=""></img>
          </div>
          <div className=""></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Eventpage;
