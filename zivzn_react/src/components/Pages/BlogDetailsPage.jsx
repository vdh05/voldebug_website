import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import { pageTitle } from "../../helpers/PageTitle";

const BlogDetailsPage = () => {
  const { imageId } = useParams(); // Fetch imageId from URL params
  const [blog, setBlog] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pageTitle("Blog Details");

    const fetchBlogDetails = async () => {
      try {
        // Fetch blog details by imageId
        const response = await axios.get(`http://localhost:3001/api/uploadBlogTitle/getByImageId/${imageId}`);
        setBlog(response.data); 

        // Fetch original image name by imageId
        const imageres = await axios.get(`http://localhost:3001/api/uploadimage/images/${imageId}`);
        const originalName = imageres.data[0].originalname;

        const imageUrl = process.env.PUBLIC_URL + '/images/blog/' + originalName;

        setImageSrc(imageUrl);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [imageId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title={"Stay up to date with our <br> latest blog post"}
        variant="text-center"
        shape="shape_5"
        category={blog.category || "Security"}
        date={blog.date || "17 Nov 2021"}
        avatar={blog.avatar || "Tech"}
        avatarLink="/"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <img
          src={imageSrc}
          alt={blog.title || ""}
          className="cs_radius_15"
        />
        <div className="cs_height_60 cs_height_lg_40" />
        <div className="cs_post_details">
          <h3>{blog.longDescription}</h3>
        </div>
        <div className="cs_height_10 cs_height_lg_5" />
        <div className="row">
        
        </div>
        <h2 className="text-center cs_fs_50 mb-0">Leave A Reply</h2>
        <form action="#" className="row">
          <div className="col-lg-6">
            <input
              type="text"
              className="cs_form_field_2"
              placeholder="What’s Your Name?"
            />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="cs_form_field_2"
              placeholder="What’s Your Email?"
            />
          </div>
          <div className="col-lg-12">
            <textarea
              cols={30}
              rows={7}
              className="cs_form_field_2"
              placeholder="Feel Free To Write Your Comment"
            />
          </div>
          <div className="col-lg-12 text-center">
            <button className="cs_btn cs_style_1">
              Post Comment{" "}
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogDetailsPage;
