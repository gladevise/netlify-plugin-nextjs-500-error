import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

const Posts = [
  { post: 'hello-nextjs' },
  { post: 'learn-nextjs' },
  { post: 'deploy-nextjs' },
];

interface PostProps {
  post: string;
}

const Post = ({ post }: PostProps) => {
  return <div>Post: {post}</div>;
};

export default Post;

// type Params = {
//   params: {
//     post: string;
//   };
// };

interface Params extends ParsedUrlQuery {
  post: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { post } = context.params as Params;
  return {
    props: {
      post: post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Posts.map(({ post }) => ({
    params: { post: post },
  }));

  return {
    paths,
    fallback: false,
  };
};
