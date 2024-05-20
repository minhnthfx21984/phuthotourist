import React from "react";
import "./footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-column">
          <div className="footer-left-brand">
            <div>
              <img src="/assets/logo.svg" />
            </div>
            <div>
              <div className="brand1">
                CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
              </div>
              <div className="brand2">PHUTHOTOURIST</div>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h4>LIÊN HỆ</h4>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaLocationDot />
              </div>
              <div>
                15 Đường số 2, Cư xá Lữ Gia,
                <br /> Phường 15, Quận 11, TP. HCM
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <MdPhone />
              </div>
              <div>02838650921</div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <IoMdMail />
              </div>
              <div>vanphong@damsenpark.vn</div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaFacebookSquare />
              </div>
              <div>Phuthotourist</div>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h4>CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST</h4>
          <ul>
            <li>Công viên Văn hóa Đầm Sen</li>
            <li>Khu du lịch sinh thái Vàm Sát</li>
            <li>Khách sạn Ngọc Lan (Quận 1)</li>
            <li>Khách sạn Phú Thọ (Quận 11)</li>
            <li>Trung tâm Du lịch Đầm Sen</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
      </div>
    </footer>
  );
};

export default Footer;
