import React from "react";
import App from "../App";
import "../style/Footer.css";

export default function footer() {
    return (
        <footer>
            <div className='footerbar'>
                <div className='footerbar__logo'>
                    <a href=''><img src='./img/logo.png' className='logo' width="120px" height="50px"></img></a>
                </div>
                <div className='footerbar'>
                    조은맘 산후도우미 부산지점<br />
                    부산광역시 부산진구 동천로 109, 9층 914-3호<br />
                    사업자등록번호 : 864-27-00323<br />
                    ☎️ : 051-888-3554<br />
                </div>
            </div>
        </footer>
    );
}