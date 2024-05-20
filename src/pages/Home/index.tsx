import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";
import HomeAboutUs from "../../components/common/HomeAboutUs";
import TouristBrand from "../../components/common/TouristBrand";
import "./Home.css";
import SectionTitle from "../../components/common/SectionTitle";

export default function Home() {
  let navigate = useNavigate();

  // chuyển hướng trang
  const handleClick = () => {
    navigate("/new-page");
  };

  return (
    <>
      <TouristBrand />

      <div className="home-about-us">
        <div>
          <HomeAboutUs />
        </div>
        <div>
          <img src="./assets/about-us.png" alt="các khu du lịch" />
        </div>
        <div>
          <Button text="Xem chi tiết" onClick={handleClick} />
        </div>
      </div>

      <div className="home-new-posts">
        <SectionTitle
          dark={false}
          category="CHIA SẼ THÔNG TIN"
          title="Bài viết mới"
          explain="Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch"
        />
      </div>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
    </>
  );
}
