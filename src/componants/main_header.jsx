import "../style/Main_header.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faIcons } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { userState } from "../recoilState/user.state";
import getUser from "../api/getUser";
import axios from "axios";
import { useNavigate } from "react-router";
import logoutUser from "../api/logoutUser";

function Main_Header() {
  const [user, setUser] = useRecoilState(userState);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!user.isLogin) {
        const fetchedUser = await getUser();
        if (!fetchedUser) {
          navigate("/");
        }
        setUser(fetchedUser);
      }
      console.log(user);
    })();
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

  function loginHandler() {
    window.location =
      "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=SuFcZZufWG8GfJyJqYUR&redirect_uri=http://10.150.149.183:3000/aftLogin";
  }
  const logoutHandler = async () => {
    await logoutUser();
    window.location.reload();
  };

  return (
    <nav id="myNavbar" className="navbar">
      <div className="navbar__logo">
        <a href="">
          <img src="./img/logo.png" className="logo"></img>
        </a>
      </div>
      <div className="navbar__menu">
        <li>
          <a href="/이용요금안내">산후관리 서비스 이용 요금</a>
        </li>
        <li>
          <a href="/">출산ㆍ육아 정보</a>
        </li>
        <li>
          <a href="">서비스 사용 후기</a>
        </li>
        <li>
          <a href="/event">이벤트 일정</a>
        </li>
        <li>
          <a href="/찾아오시는길">찾아 오시는 길</a>
        </li>
        {user.name ? (
          <li>
            <a>{user?.name}님 환영합니다.</a>
          </li>
        ) : null}

        {!user.isLogin ? (
          <li>
            <button onClick={loginHandler} className="loginbtn">
              <b>로그인</b>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={logoutHandler} className="loginbtn">
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
