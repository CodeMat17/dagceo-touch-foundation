"use client";

import { CldImage } from "next-cloudinary";

const BlogImage = ({ image, width, height }: any) => {
  return (
    <CldImage
      width={width}
      height={height}
      src={image}
      crop='fill'
      sizes='50vw'
      loading='lazy'
      alt='blog image'
    />
  );
};

export default BlogImage;
