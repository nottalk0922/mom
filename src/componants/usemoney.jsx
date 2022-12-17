import Header from "./main_header";
import Footer from "./main_footer";
import { useEffect, useState } from "react";
import "../style/usemoney.css";

function Usemoney() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="body">
      <Header />
      <div className="TopTitle">
        <h2>산후관리 서비스 이용 및 요금 안내</h2>
      </div>
      <div className="내용">
        <div className="category">
          <h2>이용 및 요금 안내</h2>
          <ul>
            <li>
              <a onClick={() => setPage(1)} className="catebtn">
                이용절차
              </a>
            </li>
            <li>
              <a onClick={() => setPage(2)} className="catebtn">
                산후관리 이용요금
              </a>
            </li>
            <li>
              <a onClick={() => setPage(3)} className="catebtn">
                바우처 이용요금
              </a>
            </li>
            <li>
              <a onClick={() => setPage(4)} className="catebtn">
                산모 밀키트 이용요금
              </a>
            </li>
          </ul>
        </div>
        {page == 1 ? (
          <div className="아주큰내용">
            <h3 className="이용절차">이용절차</h3>
            <h5 className="조은맘서비스이용절차안내">
              조은맘 서비스 이용절차 안내
            </h5>
            <div className="절차">
              <img src="./img/proc1.png" />
            </div>
            <div className="절차">
              <img src="./img/proc2.png" />
            </div>
            <div className="절차">
              <img src="./img/proc3.png" />
            </div>
            <div className="절차">
              <img src="./img/proc4.png" />
            </div>
            <div className="절차">
              <img src="./img/proc5.png" />
            </div>
            <div className="절차">
              <img src="./img/proc6.png" />
            </div>
            <div className="절차">
              <img src="./img/proc7.png" />
            </div>
          </div>
        ) : page == 2 ? (
          <div>
            <h3>산후관리 이용요금</h3>
            <hr></hr>
            <div className="목차">
              <ul>
                <li>
                  <a>출퇴근형</a>
                </li>
                <li>
                  <a>입주형</a>
                </li>
                <li>
                  <a>알뜰형</a>
                </li>
                <li>
                  <a>글로벌 서비스</a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        ) : page == 3 ? (
          <div></div>
        ) : (
          <div> </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Usemoney;
