import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import PostStyle4 from '../Post/PostStyle4';
import { Icon } from '@iconify/react';
import Sidebar from '../Sidebar';
import { pageTitle } from '../../helpers/PageTitle';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [itemShow, setItemShow] = useState(4);

  useEffect(() => {
    pageTitle('Blog');
    const fetchBlogData = async () => {
      try {
        const imageResponse = await axios.get('http://localhost:3001/api/uploadImage/images');
        const imageDataArray = imageResponse.data;

        const blogDetails = await Promise.all(
          imageDataArray.map(async (image) => {
            try {
              const titleResponse = await axios.get(`http://localhost:3001/api/uploadBlogTitle/getByImageId/${image._id}`);
              const titleData = titleResponse.data.title;
              const category = titleResponse.data.category;
              const subtitledata = titleResponse.data.shortDescription;
              const href = titleResponse.data.href;
              const thumbnailSrc = `http://localhost:3001/uploads/${image.filename}`;

              return {
                imageId: image._id, // Pass the imageId
                thumbnailSrc: thumbnailSrc,
                title: titleData,
                subTitle: subtitledata,
                category: category,
                href: href,
              };
            } catch (err) {
              console.error(`Error fetching title for image ID ${image._id}:`, err);
              return {
                imageId: image._id, // Pass the imageId even in case of error
                thumbnailSrc: `http://localhost:3001/uploads/${image.filename}`,
                title: 'Title not available',
                subTitle: 'Subtitle not available',
                category: 'no category found',
              };
            }
          })
        );

        setBlogs(blogDetails);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Stay up to date with our <br>latest blog post"
        subTitle="Recent Blog"
        variant="text-center"
        shape="shape_5"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <div className="row cs_gap_y_60">
          <div className="col-lg-8">
            {blogs.slice(0, itemShow).map((item, index) => (
              <PostStyle4
                key={index}
                imageId={item.imageId} // Pass the imageId prop
                thumbnailSrc={item.thumbnailSrc}
                title={item.title}
                subTitle={item.subTitle}
                category={item.category}
                href={item.href}
              />
            ))}
            {blogs.length > itemShow && (
              <div className="text-center">
                <Spacing lg="95" md="50" />
                <span
                  className="cs_btn cs_style_1"
                  onClick={() => setItemShow(itemShow + 3)}
                >
                  Load More Blog
                  <span>
                    <i>
                      <Icon icon="fa6-solid:arrow-right" />
                    </i>
                    <i>
                      <Icon icon="fa6-solid:arrow-right" />
                    </i>
                  </span>
                </span>
              </div>
            )}
          </div>
          <div className="col-lg-3 offset-lg-1">
            <Sidebar />
          </div>
        </div>
        <Spacing lg="150" md="80" />
      </div>
    </>
  );
}
