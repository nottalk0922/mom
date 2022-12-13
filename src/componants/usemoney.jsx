import Header from "./main_header";
import Footer from "./main_footer";

function Main_Header() {
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
            <a href="">이용절차</a>
          </li>
          <li>
            <a href="">산후관리 이용요금</a>
          </li>
          <li>
            <a href="">바우처 이용요금</a>
          </li>
          <li>
            <a href="">산모 밀키트 이용요금</a>
          </li>
          <li>
            <a href="">이용요금 계산기</a>
          </li>
          <li>
            <a href="">이용절차</a>
          </li>
          <li>
            <a href="">이용절차</a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Main_Header;
