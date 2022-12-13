import "../style/Main_section.css";
import React, { useState } from "react";
import axios from "axios";
import cheerio from "cheerio";
import { useEffect } from "react";
import { getHTML } from "./notice.js";

function Main_section() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("api/events").then(({ data }) => {
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
    <section className="section">
      <div className="top__img">
        <img src="./img/main_section_1.png"></img>
        <img src="./img/main_section_2.png"></img>
      </div>
      <div className="color__Box">
        <div id="color_box_1"></div>
        <div id="color_box_2"></div>
        <div id="color_box_3"></div>
      </div>
      <div className="notice_header">
        <h2>Notice</h2>
      </div>
      <div className="notice_section">
        <table>{good}</table>
      </div>
      <div className="section_bottom">
        <a href="">
          <img src="./img/section_bottom_img_1.png"></img>
        </a>
        <a href="">
          <img src="./img/section_bottom_img_2.png"></img>
        </a>
        <a href="">
          <img src="./img/section_bottom_img_3.png"></img>
        </a>
        <a href="">
          <img src="./img/section_bottom_img_4.png"></img>
        </a>
      </div>
    </section>
  );
}

export default Main_section;
