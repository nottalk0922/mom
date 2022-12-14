import Header from "./main_header";
import Footer from "./main_footer";

function Usemoney() {
  return (
    <div>
      <Header />
      <div>
        <h2>산후관리 서비스 이용 및 요금 안내</h2>
      </div>
      <div className="category">
        <h2>이용 및 요금 안내</h2>
        <ul>
          <li>
            <a href="useProcess.jsx">이용절차</a>
          </li>
          <li>
            <a href="sanhuUsemoney.jsx">산후관리 이용요금</a>
          </li>
          <li>
            <a href="bauchurUsemoney.jsx">바우처 이용요금</a>
          </li>
          <li>
            <a href="sanmoUsemoney.jsx">산모 밀키트 이용요금</a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Usemoney;
