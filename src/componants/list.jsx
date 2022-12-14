import React from "react";
import "../style/list.css";

function list() {
  return (
    <div class="container">
      <div class="img-position">
        <img src="./img/write-img.png" class="write-img"></img>
      </div>
      <div class="review-bar name">후기글</div>
      <div class="review-bar btn">
        <input type="button" value="글쓰기" class="write-btn" />
      </div>
      <hr class="top-line" />
      <div></div>
    </div>
  );
}

export default list;
