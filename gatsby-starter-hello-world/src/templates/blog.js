import React from "react";
import styled from "styled-components";
import ThreePartGrid from "../components/layouts/3partGrid";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// target post with its slug value. we don't want to use static queries here

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

/*
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
*/

const BlogPost = styled.div`
  margin: 1rem 2rem;
  img {
    width: 800px;
  }
`;

class Blog extends React.Component {
  // override how nodes are rendered
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
    console.log("blog data: ", this.props.data);
    return (
      <ThreePartGrid>
        <BlogPost>
          <h1>{this.props.data.contentfulBlogPost.title}</h1>
          <h3>{this.props.data.contentfulBlogPost.date}</h3>
          {/* <span
            dangerouslySetInnerHTML={{
              __html: this.props.data.markdownRemark.html,
            }}
          ></span> */}
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
