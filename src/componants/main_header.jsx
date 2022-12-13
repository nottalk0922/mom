import "../style/Main_header.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faIcons } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { userState } from "../recoilState/user.state";

function Main_Header() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    console.log(user);
  }, []);

  const handler = () => {
    const toogleBtn = document.querySelector(".navbar__toogleBtn");
    const menu = document.querySelector(".navbar__menu");
    menu.classList.toggle("active");
  };

  function openNav() {
    document.getElementById("myNavbar").style.height = "250px";
  }

  function closeNav() {
    document.getElementById("myNavbar").style.height = "0";
  }

  function login() {
    window.location = "http://10.150.149.50/auth/naver";
  }
  function logout() {
    window.location = "http://10.150.149.50/auth/logout";
  }

  return (
    <nav id="myNavbar" className="navbar">
      <div className="navbar__logo">
        <a href="">
          <img src="./img/logo.png" className="logo"></img>
        </a>
      </div>
      <div className="navbar__menu">
        <li>
          <a href="/Usemoney">산후관리 서비스 이용 요금</a>
        </li>
        <li>
          <a href="/">출산ㆍ육아 정보</a>
        </li>
        <li>
          <a href="">서비스 사용 후기</a>
        </li>
        <li>
          <a href="/eventPage">이벤트 일정</a>
        </li>
        <li>
          <a href="">찾아 오시는 길</a>
        </li>
        {!user.isLogin ? (
          <li>
            <button onClick={login} className="loginbtn">
              <b>로그인</b>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={logout} className="loginbtn">
              로그아웃
            </button>
          </li>
        )}
      </div>
      <button className="navbar__toogleBtn">
        <FontAwesomeIcon icon={faBars} onClick={handler} />
      </button>
    </nav>
  );
}

export default Main_Header;
