import React from 'react';
import { Link } from 'react-router-dom';

const PostStyle4 = ({
  thumbnailSrc,
  category,
  title,
  subTitle,
  imageId, // Receive imageId as a prop
}) => {
  return (
    <div className="cs_post cs_style_4">
      <div className="cs_post_thumb_wrap position-relative">
        <Link to={`/blog/${imageId}`} className="cs_post_thumb cs_radius_15">
          <img src={thumbnailSrc} alt="Thumb" />
        </Link>
        <div className="cs_categories">
          <Link to="/blog" className="cs_category">
            {category}
          </Link>
        </div>
      </div>
      <h2 className="cs_post_title cs_fs_50">
        <Link to={`/blog/${imageId}`}>{title}</Link>
      </h2>
      <p className="cs_post_subtitle">{subTitle}</p>
      <Link to={`/blog/${imageId}`} className="cs_post_btn">
        <span>Read More</span>
        <svg
          width={51}
          height={16}
          viewBox="0 0 51 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  );
};

export default PostStyle4;
