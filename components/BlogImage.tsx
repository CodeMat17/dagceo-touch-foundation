"use client";

import { CldImage } from "next-cloudinary";

const BlogImage = ({ image }: any) => {
  return (
    <CldImage
      width='600'
      height='200'
      src={image}
      crop='fill'
      sizes='50vw'
      loading='lazy'
      alt='blog image'
    />
  );
};

export default BlogImage;
