import React, { useEffect, useState } from "react";
import "../style/letter.css";
import { Viewer } from "@toast-ui/react-editor";///ㄱ
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
import axios from "axios";
import Main_Header from "./main_header";
import Main_footer from "./main_footer";

function Letter() {
  const [letter, setLetter] = useState({});
  const [letterWords, setLetterWords] = useState("");
  const params = useParams();
  useEffect(() => {
    console.log(params.code);
    axios.get(`/api/board/detail/${params.code}`).then(({ data }) => {
      setLetter(data);
      setLetterWords(data.content);
      console.log(data);
    });
  }, []);

  return (
    
    <div class="container">
    <Main_Header/>
      <div class="title">
          <h1>{letter?.title}</h1>
          <h3>이용서비스 : {letter?.serviceType}</h3>
          <span class = "writer_l">작성자 : {letter?.writer?.name}</span><br/>
          <span>작성일 : {letter?.createdAt}</span>
      </div>
      <div className="board" dangerouslySetInnerHTML={{__html : letter?.content}}></div>
      {/* <ReactMarkdown>{letter?.markdownContent}</ReactMarkdown> */}
      <Main_footer/>
    </div>
  
  );
}

export default Letter;
