import "../style/Main_nav.css";
import React from "react";

function Main_nav() {
  return (
    <div className="categorybar">
      <div className="categorybar__menu">
        <li>
          <a href="http://www.xn--xz2b58vb0a.com/bbs/page.php?hid=m03_01">
            <img className="반응형" src="./img/category_1.png" />
          </a>
        </li>
        <li>
          <a href="https://blog.naver.com/joeun-mom/222946899996">
            <img className="반응형" src="./img/category_2.png" />
          </a>
        </li>
        <li>
          <a href="/list">
            <img className="반응형" src="./img/category_3.png" />
          </a>
        </li>
        <li>
          <a href="/event">
            <img className="반응형" src="./img/category_4.png" />
          </a>
        </li>
        <li>
          <a href="/찾아오시는길">
            <img className="반응형" src="./img/category_5.png" />
          </a>
        </li>
      </div>
    </div>
  );
}

export default Main_nav;
