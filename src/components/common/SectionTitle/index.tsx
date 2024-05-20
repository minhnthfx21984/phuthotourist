import React from "react";
import "./SectionTitle.css";

type SectionTitleProps = {
  dark: boolean;
  category: string;
  title: string;
  explain: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  dark,
  category,
  title,
  explain,
}) => {
  return (
    <>
      <div className="home-section-title">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <div className="divider"></div>
        <p>{explain}</p>
      </div>
    </>
  );
};

export default SectionTitle;
