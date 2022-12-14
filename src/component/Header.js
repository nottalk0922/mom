import React from "react";
import App from "../App";
import "../style/Header.css";

export default function header() {
    return (
        <header>
            <div className='headerbar'>
                <div className='headerbar__logo'>
                    <a href=''><img src='./images/logo.png' className='logo' width="120px" height="50px"></img></a>
                </div>
                <div className='headerbar__menu'>
                    <li><a href="">산후관리 서비스 이용 요금</a></li>
                    <li><a href="">출산ㆍ육아 정보</a></li>
                    <li><a href="">서비스 사용 후기</a></li>
                    <li><a href="">이벤트 일정</a></li>
                    <li><a href="">찾아 오시는 길</a></li>
                    <li><a href=""><b>로그인</b></a></li>
                </div>
            </div>
        </header>
    );
}