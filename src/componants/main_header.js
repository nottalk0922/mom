import '../style/Main_header.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faIcons } from "@fortawesome/free-solid-svg-icons";


function Main_Header() {
    function handler() {
        const toogleBtn = document.querySelector('.navbar__toogleBtn')
        const menu = document.querySelector('.navbar__menu')
        menu.classList.toggle('active');
        faIcons.classList.toggle('active');
    }

    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <a href=''><img src='./img/logo.png' className='logo'></img></a>
            </div>
            <div className='navbar__menu'>
                <li><a href="">산후관리 서비스 이용 요금</a></li>
                <li><a href="">출산ㆍ육아 정보</a></li>
                <li><a href="">서비스 사용 후기</a></li>
                <li><a href="">이벤트 일정</a></li>
                <li><a href="">찾아 오시는 길</a></li>
                <li><a href="http://10.150.149.50/auth/naver"><b>로그인</b></a></li>
                <li><a href="http://10.150.149.50/auth/logout">로그아웃</a></li>
            </div>
            <button className='navbar__toogleBtn'>
                <FontAwesomeIcon icon={faBars} onClick={handler} />
            </button>
        </nav>

    );
}

export default Main_Header;