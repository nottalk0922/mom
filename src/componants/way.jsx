import Kakaomap from "./KakaoMap";
import Main_header from "./main_header";
import Main_footer from "./main_footer";
import "../style/way.css";

function Way() {
  return (
    <div>
      <Main_header />
      <div className="Top_title">
        <h2>조은맘 산후조리원 부산 지점</h2>
        <p>
          조은맘 산후도우미 부산지점은 세상에 태어나 가장고귀한 일을 하신
          산모님을 위한 서비스 기업입니다. 저희 조은맘은 아가에게 가장 중요한
          신생아 시기와 여성에게 가장 중요한 출산기를 엄마와 아기가 건강하고
          행복하게 보낼 수 있도록 체계화된 시스템으로 전문적인 산후 관리를
          보장합니다. 일생에 가장 중요하고 소중한 추억이 되는 시간을 조은맘
          산후도우미와 함께 하시는 것에 대해 감사함과 행복감을 느끼며 정성과
          사랑으로 보답드릴 것을 약속드립니다.
        </p>
      </div>
      <div className="title">
        <h3>오시는 길</h3>
      </div>
      <hr className="hr0" />
      <div className="Kakaomap">
        <Kakaomap />
      </div>
      <div className="ul_list">
        <h5>조은맘 산후도우미 부산지점</h5>
        <li>
          <h5>부산광역시 부산진구 동천로 109 삼한골든게이트 931호</h5>
        </li>
      </div>
      <div className="ul_list">
        <hr className="hr1"></hr>
        <li>
          <h5>오시는길 서면 NC백화점 인근입니다. 지하주차장 주차가능합니다.</h5>
        </li>
      </div>
      <hr className="hr1"></hr>
      <div className="ul_list">
        <li>
          <h5>전화번호 051-808-3554</h5>
        </li>
      </div>
      <hr className="hr1"></hr>
      <div className="ul_list">
        <li>
          <h5>이용시간영업중 09:00 - 21:00</h5>
        </li>
      </div>
      <hr className="hr1"></hr>
      <div className="ul_list">
        <li>
          <h5>사업자 번호 551-93-01377</h5>
        </li>
        <hr className="hr1"></hr>
      </div>
      <Main_footer />
    </div>
  );
}

export default Way;
