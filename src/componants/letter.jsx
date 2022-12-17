import React, { useEffect, useState } from "react";
import "../style/letter.css";
import { Viewer } from "@toast-ui/react-editor"; ///ㄱ
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Main_Header from "./main_header";
import Main_footer from "./main_footer";
import { useRecoilState } from "recoil";
import { userState } from "../recoilState/user.state";
import { autocompleteClasses } from "@mui/material";

function Letter() {
  const [letter, setLetter] = useState({});
  const [letterWords, setLetterWords] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(params.code);
    axios.get(`/api/board/detail/${params.code}`).then(({ data }) => {
      setLetter(data);
      setLetterWords(data.content);
      console.log(data);
    });
  }, []);

  const deleteLetter = () => {
    alert("글을 삭제합니까?");
    axios
      .post("/api/board/deleteMyLetter", {
        boardCode: letter.boardCode,
      })
      .then(() => {
        navigate("/list");
      });
  };

  return (
    <div class="container">
      <Main_Header />
      <div class="title">
        <h1>{letter?.title}</h1>
        <h3
          style={{
            marginLeft: "0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          이용서비스 : {letter?.serviceType}
        </h3>
        <span class="writer_l">작성자 : {letter?.writer?.name}</span>
        <br />
        <span>작성일 : {letter?.createdAt}</span>
        <br />
        {letter?.writer?.userId === user.userId ? (
          <button class="modify-btn">수정하기</button>
        ) : null}
        {letter?.writer?.userId === user.userId ? (
          <button class="delete-btn" onClick={deleteLetter}>
            삭제하기
          </button>
        ) : null}
      </div>
      <div
        className="board"
        dangerouslySetInnerHTML={{ __html: letter?.content }}
      ></div>
      <Main_footer />
    </div>
  );
}

export default Letter;
