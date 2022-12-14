import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { userState } from "../recoilState/user.state";
// import "../style/list.css";

function LetterList() {
  const [list, setList] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  const [option, setOption] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/board/${option.length ? option + "/" : ""}${page}`)
      .then(({ data }) => {
        setList(data.letterList);
        setMaxPage(data.boardSize);
        console.log(data);
      });
  }, [option, page]);

  return (
    <div class="container">
      <div class="img-position">
        <img src="./img/write-img.png" class="write-img"></img>
      </div>
      <div class="review-bar name">후기글</div>
      <div class="review-bar btn">
        <input type="button" value="글쓰기" class="write-btn" />
        <input
          onClick={() => {
            setOption("");
          }}
          type="button"
          value="내가 쓴 글 보기"
          class="write-btn"
        />
        <input
          onClick={() => {
            setOption("myLetterList");
          }}
          type="button"
          value="모든 글 보기"
          class="write-btn"
        />
      </div>
      <div>
        {list.map((letter, idx) => {
          return (
            <div
              style={{ backgroundColor: "gainsboro" }}
              key={idx}
              onClick={() => navigate(`/letter/${letter.boardCode}`)}
            >
              <span>{letter?.title}</span>
              <span>{letter?.serviceType}</span>
              <span>{letter?.createdAt}</span>
            </div>
          );
        })}
      </div>
      {page > 1 ? <p onClick={() => setPage(page - 1)}>{page - 1}</p> : null}
      <p>{page}</p>
      {page < maxPage - 1 ? (
        <p onClick={() => setPage(page + 1)}>{page + 1}</p>
      ) : null}
      <hr class="top-line" />
      <div></div>
    </div>
  );
}

export default LetterList;
