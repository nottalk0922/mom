import "../style/Main_footer.css";
import React from "react";

function Main_footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="../img/logo.png" id="logo" />
      </div>
      <div className="p">
        <p>
          회사명 : 조은맘 산후도우미 부산지점<br></br>
          부산광역시 부산진구 동천로 109, 9층 914-3호<br></br>
          사업자등록번호 : 864-27-00323<br></br>
          전화 : 051-808-3554
        </p>
      </div>
    </footer>
  );
}

export default Main_footer;
