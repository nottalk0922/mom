import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { userState } from "../recoilState/user.state";
import "../style/list.css";
import Main_footer from "./main_footer";
import Main_Header from "./main_header";

function LetterList() {
  const [list, setList] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  const [option, setOption] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `/api/board/${option.length !== 0 ? option + "/" : ""}${page}`;
    axios.get(url).then(({ data }) => {
      setList(data.letterList);
      setMaxPage(data.boardSize);
      console.log(data);
    });
  }, [option, page]);

  function displayedAt(createdAt) {
    const milliSeconds = new Date() - new Date(createdAt);
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  }

  return (
    <div class="container">
      <Main_Header />
      <div class="img-position">
        <img src="./img/list-img.png" class="write-img"></img>
      </div>

      {user.isLogin ? (
        <div class="review-bar btn">
          <div class="review-bar name">후기글</div>
          <input
            onClick={() => {
              navigate("/Typing");
            }}
            type="button"
            value="내가 글쓰기"
            class="write-btn btn1"
          />
          <input
            onClick={() => {
              setPage(1);
              setOption("myLetterList");
            }}
            type="button"
            value="내가 쓴 글 보기"
            class="write-btn btn2"
          />
          <input
            onClick={() => {
              setPage(1);
              setOption("");
            }}
            type="button"
            value="모든 글 보기"
            class="write-btn btn3"
          />
        </div>
      ) : null}
      <hr class="hr" />
      <div class="each-review">
        {list.map((letter, idx) => {
          return (
            <div
              style={{ backgroundColor: "#fffaf1" }}
              key={idx}
              onClick={() => navigate(`/letter/${letter.boardCode}`)}
              class="reviews"
            >
              <span class="review-title">{letter?.title}</span>
              <span class="review-service">{letter?.serviceType}</span>
              <span class="review-createdAt">
                {displayedAt(letter?.createdAt)}
              </span>
              <hr class="hr" />
            </div>
          );
        })}
      </div>
      <div class="page">
        {page > 1 ? (
          <span class="page-num">
            <button
              onClick={() => {
                setPage(page - 1);
              }}
              class="page-btn"
            >
              {page - 1}
            </button>
          </span>
        ) : null}
        <span>현재페이지 : {page}</span>
        {page < maxPage ? (
          <span class="page-num">
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              class="page-btn"
            >
              {page + 1}
            </button>
          </span>
        ) : null}
      </div>
      <Main_footer />
    </div>
  );
}

export default LetterList;
