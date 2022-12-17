// import "../style/event.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./main_header";
import Footer from "./main_footer";
import axios from "axios";
import "../style/eventpage.css";

function Eventpage() {
  // const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState([]);
  useEffect(() => {
    axios.get("http://10.150.149.50/api/events").then(({ data }) => {
      // setEvents(data.titleList);
      setEventDetails(data.eventDetailList);
      console.log(data);
    });
  }, []);

  // const good = events.map((event, idx) => {
  //   return (
  //     <div
  //       key={idx}
  //       className="event"
  //       onClick={() => {
  //         window.location = event.url;
  //       }}
  //     >
  //       <strong>{event.title}</strong>
  //     </div>
  //   );
  // });
  const good2Section = eventDetails?.map((eventPage, idx) => {
    console.log(eventPage);
    return (
      <div key={idx} className="eventsection">
        <img src={eventPage?.url} />
        <div>
          <a>{eventPage?.bodyText}</a>
          <br></br>
          <a>기간 {eventPage?.date}</a>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Header />
      <div className="Title">
        <h2>이벤트</h2>
        <img src="./img/gift-box.png"></img>
      </div>
      <hr className="line0" />
      <div className="notice">
        <div className="notice_header">
          <p>공지사항</p>
        </div>
        <div>{good2Section}</div>
      </div>
      <hr className="line0" />
      <div className="list-webzine">
        <div className="list-media">
          <div className="">
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
