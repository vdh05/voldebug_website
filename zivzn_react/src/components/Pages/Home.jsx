import React from 'react';
import Hero from '../Hero';
import Spacing from '../Spacing';
import FunFact from '../FunFact';
import About from '../About';
import WhyChose from '../WhyChose';
import Service from '../Service';
import Portfolio from '../Portfolio';
import Button from '../Button';
import SectionHeading from '../SectionHeading';
import Award from '../Award';
import Accordion from '../Accordion';
import Cta from '../Cta';
import TestimonialSlider from '../Slider/TestimonialSlider';
import PostCarousel from '../Slider/PostCarousel';
import { pageTitle } from '../../helpers/PageTitle';
const funfactData = [
  { title: 'Happy Customers', number: '22k' },
  { title: 'Work’s Completed', number: '15k' },
  { title: 'Skilled Team Members', number: '121' },
  { title: 'Most Valuable Awards', number: '15' },
];
const whyChoseFeatureData = [
  {
    title: 'Talented, professional & expert team',
    content:
      'Our team, specializing in strategic digital marketing, are not partners with the world is leading brands. Breaking from the norm, we push boundaries and merge.',
  },
  {
    title: 'Highly accuracy AI based system',
    content:
      'Our team, specializing in strategic digital marketing, are not partners with the world is leading brands. Breaking from the norm, we push boundaries and merge.',
  },
  {
    title: 'Secret successful brand strategy formula',
    content:
      'Our team, specializing in strategic digital marketing, are not partners with the world is leading brands. Breaking from the norm, we push boundaries and merge.',
  },
];
const serviceListData = [
  {
    title: 'WP Development',
    subtitle:
      'Empower your online presence with our expert WordPress development services. From custom themes to plugin development, we tailor solutions to suit your unique needs. Our team of skilled developers ensures seamless integration and functionality.',
    imgUrl: '/images/creative-agency/wp.png',
    href: '/service/service-details',
  },
  {
    title: 'Web Development',
    subtitle:
      'We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.',
    imgUrl: '/images/creative-agency/graphic.png',
    href: '/service/service-details',
  },
  {
    title: 'App Development',
    subtitle:
      'We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.',
    imgUrl: '/images/creative-agency/marketing.png',
    href: '/service/service-details',
  },
  {
    title: 'Software Development',
    subtitle:
      'We are providing software development service to help businesses meet their unique needs.Our tean of developers is dedicating to creating customized solutions that are tailored to your specific requirements.',
    imgUrl: '/images/creative-agency/product.png',
    href: '/service/service-details',
  },
];
const portfolioData = [
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/rcd.jpg',
    title: 'Radio Controlled Drone',
    btnText: 'See Project',
  },
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/PaperSwap.jpg',
    title: 'PaperSwap- A Book Exchange App',
    btnText: 'See Project',
  },
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/ism.jpg',
    title: 'Iot Based Smart Home',
    btnText: 'See Project',
  },
  {
    href: '/portfolio/portfolio-details',
    imgUrl: '/images/creative-agency/Bookinxs.png',
    title: 'Bookinxs',
    btnText: 'See Project',
  },
];
const awardData = [
  {
    brand: 'Behance',
    title: 'UI/UX design of the month',
    subTitle:
      'Accusamus et iusto odio dignissimos ducimus qui blanditiis fedarals praesentium voluptatum deleniti atque corrupti quos dolores',
    date: 'December 12, 2023',
    awardImgUrl: '/images/creative-agency/award_img_1.svg',
  },
  {
    brand: 'Awwwards',
    title: 'CSS awards design',
    subTitle:
      'Accusamus et iusto odio dignissimos ducimus qui blanditiis fedarals praesentium voluptatum deleniti atque corrupti quos dolores',
    date: 'January 05, 2022',
    awardImgUrl: '/images/creative-agency/award_img_2.svg',
  },
  {
    brand: 'Google',
    title: 'Website of the day',
    subTitle:
      'Accusamus et iusto odio dignissimos ducimus qui blanditiis fedarals praesentium voluptatum deleniti atque corrupti quos dolores',
    date: 'March 20, 2021',
    awardImgUrl: '/images/creative-agency/award_img_3.svg',
  },
];
const testimonialData = [
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ansari Patron',
    avatarDesignation: 'CEO at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Jhon Doe',
    avatarDesignation: 'Manager at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ramatam Coo',
    avatarDesignation: 'MD at Delta',
  },
];
const faqData = [
  {
    title: '01. I need your services and how can i contact you throw email?',
    content:
      'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
  },
  {
    title: '02. What are the different types of service we provide?',
    content:
      'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
  },
  {
    title: '03. What are the different stages of the working process?',
    content:
      'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
  },
  {
    title: '04. What is the difference between direct and digital marketing?',
    content:
      'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
  },
  {
    title: '05. How can i payment proceed after complete project?',
    content:
      'Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
  },
];

const postData = [
  {
    thumbnailSrc: '/images/blog/post_1.png',
    title: 'HOW TO SECURE OUR SOCIAL MEDIA ACCOUNTS AND STAY SAFE ONLINE?????',
    date: '07 Mar 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/blog/post_2.png',
    title: 'INFORMATION GATHERING/SCANNING - LEARN MORE ABOUT YOUR TARGET',
    date: '22 Apr 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/blog/post_3.png',
    title: 'NETWORK PENETRATION TESTING',
    date: '13 May 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/blog/post_4.png',
    title: "HOW TO HACK SOMEONE'S PC WITH JUST A USB ! HQ METHOD NOT DETECTED BY ANTIVIRUS",
    date: '15 Mar 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/blog/post_5.png',
    title: 'SKILLS REQUIRED TO BECOME A ETHICAL HACKER',
    date: '07 Mar 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/blog/post_6.png',
    title: 'Strategies for building a strong brand identity',
    date: '22 Apr 2023',
    url: '/portfolio/portfolio-details',
  }
  // {
  //   thumbnailSrc: '/images/creative-agency/post_3.jpeg',
  //   title: 'AI will take over all job for human within few years',
  //   date: '13 May 2023',
  //   url: '/portfolio/portfolio-details',
  // },
  // {
  //   thumbnailSrc: '/images/creative-agency/post_4.jpeg',
  //   title: 'Your agency need to replace some artistic mind people',
  //   date: '15 Mar 2023',
  //   url: '/portfolio/portfolio-details',
  // },
];

export default function Home() {
  pageTitle('Zivan');
  return (
    <>
      <Hero
        title={[
          'London Based Creative Agency',
          '25+ Years of Experience',
          '30+ Worldwide Partnership',
          'Take World-class Service',
        ]}
        subtitle="Tech That Makes You Smarter"
        videoSrc="https://www.youtube.com/embed/VcaAVWtP48A"
        bgUrl="/images/creative-agency/Voldebughome.png"
      />
      <Spacing lg="125" md="70" />
      <div className="container">
        <FunFact data={funfactData} />
      </div>
      <Spacing lg="125" md="70" />
      <About
        thumbnail="/images/creative-agency/dma.png"
        uperTitle="Who We Are"
        title="Modern World Solution agency"
        subTitle="Voldebug Innovations Pvt. Ltd is a company that specializes in providing high-quality web development and mobile app development solutions for businesses of all sizes. Our mission is to help our clients achieve their online goals by delivering innovative and user-friendly websites and applications that are tailored to their unique needs and preferences."
        featureList={[
          'Designing content with AI power',
          'Trending marketing tools involve',
          'Powerful market strategy use',
        ]}
        btnText="Learn More"
        btnUrl="/about"
      />
      <Spacing lg="185" md="75" />
      <WhyChose
        sectionTitle="We have depth of market knowledge"
        sectionSubTitle="Why Choose Us"
        whyChoseFeatureData={whyChoseFeatureData}
        thumbnailSrc="/images/creative-agency/why_choose_us_img_3.jpeg"
      />
      <Spacing lg="150" md="80" />
      <section className="cs_primary_bg">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Our core services"
            subTitle="Services"
            variantColor="cs_white_color"
          />
          <Spacing lg="45" md="30" />
        </div>
        <div className="container">
          <Service
            sectionTitle="Our core services"
            sectionSubTitle="Services"
            data={serviceListData}
          />
          <Spacing lg="135" md="65" />
        </div>
      </section>
      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some featured work" subTitle="Portfolio" />
          <Spacing lg="85" md="45" />
          <Portfolio data={portfolioData} />
          <Spacing lg="26" md="30" />
          <div className="text-center">
            <Button btnText="See All Project" btnUrl="/portfolio" />
          </div>
        </div>
        <Spacing lg="150" md="80" />
      </section>
      <section className="cs_primary_bg cs_shape_animation_2">
        <Spacing lg="143" md="75" />
        <div className="cs_shape_1 position-absolute">
          <svg
            width={65}
            height={64}
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M62.4554 25.9314C55.6838 19.6081 40.1618 12.4752 32.1637 20.1537C41.7609 21.9206 53.2379 29.2392 48.3751 39.1677C45.1712 45.7019 38.7353 45.7177 33.3337 41.995C27.338 37.8739 25.7108 31.2667 27.4596 24.5962C26.5312 24.5866 25.6039 24.6605 24.6889 24.8172C9.80991 27.7447 14.0713 47.6353 20.9187 55.948C22.4528 57.8045 19.7488 60.3159 18.1393 58.4837C7.86403 46.8126 6.49349 23.0691 25.5532 19.9295C26.8892 19.7254 28.2446 19.6801 29.5912 19.7945C36.9845 9.42053 56.5698 17.4866 64.055 24.4366C65.1096 25.4175 63.4831 26.8926 62.4554 25.9314ZM33.9938 39.0327C38.3927 42.4636 44.2429 40.8527 44.3919 34.8698C44.6036 28.2263 35.7464 25.0921 29.1457 24.655C27.1454 29.9313 29.4427 35.4836 33.9938 39.0327Z"
                fill="#4F4747"
              />
            </g>
          </svg>
        </div>
        <div className="container">
          <SectionHeading
            title="Our prize achievement"
            subTitle="Awards"
            variantColor="cs_white_color"
          />
          <Spacing lg="85" md="45" />
          <Award data={awardData} />
        </div>
        <Spacing lg="150" md="80" />
      </section>
      <TestimonialSlider
        layeredImages={[
          '/images/creative-agency/layer_img_1.jpeg',
          '/images/creative-agency/layer_img_2.jpeg',
          '/images/creative-agency/layer_img_3.jpeg',
          '/images/creative-agency/layer_img_4.jpeg',
          '/images/creative-agency/layer_img_5.jpeg',
        ]}
        data={testimonialData}
      />
      <section>
        <div className="container">
          <Cta
            title="Is there a specific project or goal that you have in mind?"
            btnText="Contact Us"
            btnUrl="/contact"
            bgUrl="/images/creative-agency/cta_bg.jpeg"
          />
        </div>
      </section>
      <section className="cs_p76_full_width">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some recent news" subTitle="Our Blog" />
          <Spacing lg="85" md="45" />
        </div>
        <PostCarousel data={postData} />
      </section>
      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Frequently asked question" subTitle="FAQs" />
          <Spacing lg="55" md="30" />
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <Accordion variant="cs_type_1" data={faqData} />
            </div>
          </div>
        </div>
        <Spacing lg="120" md="50" />
      </section>
    </>
  );
}
