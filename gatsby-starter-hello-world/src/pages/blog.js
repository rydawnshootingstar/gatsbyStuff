import React from "react";
import ThreePartGrid from "../components/layouts/3partGrid";
import styled from "styled-components";
import { qraphql, useStaticQuery } from "gatsby";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }

            html
            excerpt
          }
        }
      }
    }
  `);

  const DataNode = styled.div`
    margin: 0px auto;
    margin-top: 50px;
    padding: 10px;
    max-width: 900px;

    h1 {
      font-weight: 800;
      margin: 2px;
      font-size: 40px;
      text-align: center;
    }
    h3 {
      font-size: 20px;
      font-style: italic;
      opacity: 60%;
      text-align: center;
    }
    p {
      opacity: 80%;
      line-height: 1.5rem;
    }
    .ReadMore {
      cursor: pointer;

      :hover {
        text-decoration: underline;
        opacity: 20%;
      }
    }
  `;

  return (
    <ThreePartGrid>
      <div>
        <h1>Blog Posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <DataNode>
            <span>
              <h3>{node.frontmatter.date}</h3>
              <h1>{node.frontmatter.title}</h1>
            </span>

            <p>{node.excerpt}</p>
            <span className={"ReadMore"}>Read More</span>
          </DataNode>
        ))}
      </div>
    </ThreePartGrid>
  );
};

export default BlogPage;
