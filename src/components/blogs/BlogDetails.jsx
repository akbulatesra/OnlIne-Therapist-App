import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Subscribe from '../footer/Subscribe';
import RecommendBlog from './RecommendBlog';
import { blogs } from '../../data/blogArticles';

const BlogDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const clippedId = id[1];

  const findBlog = blogs
    .filter((blog) => {
      return blog.id === clippedId;
    })
    .map((blog) => (
      <div
        key={id}
        className="flex-col justify-center items-start space-y-[3%]"
      >
        <img
          className="rounded-xl w-3/5 mx-auto mt-4"
          src={blog.mainImage}
          alt={blog.imageDescription}
        />
        <h1 className="lg:text-5xl pt-[4%] text-2xl">
          {t(`${blog.mainTitle}`)}
        </h1>
        <p>{t(`${blog.summary}`)}</p>
        <h2 className="lg:text-3xl text-lg">{t(`${blog.subtitle}`)}</h2>
        <p>{t(`${blog.article}`)}</p>
      </div>
    ));

  return (
    <div className="font-poppins uppercase lg:text-xl text-sm leading-8 font-light space-y-[3%] lg:px-32 lg:py-16 p-8 ">
      {findBlog}
      <div className="space-y-[0.5%] ">
        <h2 className="lg:text-3xl text-lg">{t('signUpForBlog')}</h2>
        <p>{t('adFree')}</p>
        <Subscribe />
      </div>
      <div>
        <RecommendBlog
          data-testid="recommendBlog"
          id={id}
          clippedId={clippedId}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
