import React from "react";
import styled from "styled-components";
import ThreePartGrid from "../components/layouts/3partGrid";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// we target a post with its slug value. we don't want to use static queries here

// this will be passed to our component in props
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date: publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const BlogPost = styled.div`
  margin: 1rem 2rem;
  img {
    width: 800px;
  }
`;

class Blog extends React.Component {
  // override node render - create a jsx expression for our image based on these fields
  options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      },
    },
  };

  render() {
    return (
      <ThreePartGrid title={this.props.data.contentfulBlogPost.title}>
        <BlogPost>
          <h1>{this.props.data.contentfulBlogPost.title}</h1>
          <h3>{this.props.data.contentfulBlogPost.date}</h3>
          {documentToReactComponents(
            this.props.data.contentfulBlogPost.body.json,
            this.options
          )}
        </BlogPost>
      </ThreePartGrid>
    );
  }
}

export default Blog;
