import { gql } from "@apollo/client";

export const BLOG_POSTS_QUERY = gql`
  mutation blogPosts($page: Int!, $perPage: Int!) {
    blogPosts(page: $perPage) {
      id
      name
      breed
    }
  }
`;

export const mocks = [
  {
    request: {
      query: BLOG_POSTS_QUERY,
      variables: {
        name: "Buck",
      },
    },
    result: {
      data: {
        dog: { __typename: "Dog", id: "1", name: "Buck", breed: "bulldog" },
      },
    },
  },
];
