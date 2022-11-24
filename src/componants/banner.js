import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/banner.css'
function Banner() {
    const settings = {
        speed: 1,
        slidesToShow: 1,
        autoplay: true,            // 자동 스크롤 사용 여부
        autoplaySpeed: 6000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        arrows: false
    };
    return (
        <div className="slider">
            <Slider {...settings}>
                <div class="img">
                    <img src="./img/Downloads/header-img_1.jpg" class="img"></img>
                </div>
                <div class="img">
                    <img src="./img/Downloads/header-img_2.jpg" class="img"></img>
                </div>
                <div class="img">
                    <img src="./img/Downloads/header-img_3.jpg" class="img"></img>
                </div>
                <div class="img">
                    <img src="./img/Downloads/header-img_4.jpg" class="img"></img>
                </div>
                <div class="img">
                    <img src="./img/Downloads/header-img_5.jpg" class="img"></img>
                </div>
                <div class="img">
                    <img src="./img/Downloads/header-img_6.jpg" class="img"></img>
                </div>
            </Slider>
        </div>
    );
}

export default Banner;