import React, { useEffect, useState } from "react";
// import "../style/letter.css";/
// import { Viewer } from "@toast-ui/react-editor";///ㄱ
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
import axios from "axios";

function Letter() {
  const [letter, setLetter] = useState({});
  const params = useParams();
  useEffect(() => {
    console.log(params.code);
    axios.get(`/api/board/detail/${params.code}`).then(({ data }) => {
      setLetter(data);
      console.log(data);
    });
  }, []);

  return (
    <div class="container">
      <div class="title">
        <input
          type="text"
          value={letter?.title}
          class="title-input"
          readOnly
        ></input>
      </div>
      <div class="paragraph">
        {letter ? <ReactMarkdown>{letter?.content}</ReactMarkdown> : null}
      </div>
    </div>
  );
}

export default Letter;
