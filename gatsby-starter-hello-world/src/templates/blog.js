import React from "react";
import styled from "styled-components";
import ThreePartGrid from "../components/layouts/3partGrid";
import { graphql } from "gatsby";

// target post with its slug value. we don't want to use static queries here, but

// this will be passed to our component in props
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const BlogPost = styled.div`
  margin: 1rem 2rem;
`;

class Blog extends React.Component {
  render() {
    console.log("blog data: ", this.props.data);
    return (
      <ThreePartGrid>
        <BlogPost>
          <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
          <h3>{this.props.data.markdownRemark.frontmatter.date}</h3>
          <span
            dangerouslySetInnerHTML={{
              __html: this.props.data.markdownRemark.html,
            }}
          ></span>
        </BlogPost>
      </ThreePartGrid>
    );
  }
}

export default Blog;
