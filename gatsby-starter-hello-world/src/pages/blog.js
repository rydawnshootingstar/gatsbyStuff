import React from "react";
import ThreePartGrid from "../components/layouts/3partGrid";
import styled from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";
import colors from "../styles/colorPalette";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              summary
            }

            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const DataNode = styled.div`
    margin: 0px auto;
    margin-top: 50px;
    padding: 10px;
    max-width: 1050px;
    background-color: rgba(197, 194, 212, 0.1);

    a {
      text-decoration: none;
      color: inherit;
    }

    h1 {
      font-weight: 800;
      margin: 2px;
      font-size: 40px;
      text-align: center;
      cursor: pointer;
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
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <DataNode key={index}>
            <span>
              <h3>{node.frontmatter.date}</h3>
              <h1>
                <Link to={`/blog/${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h1>
            </span>

            {/* <p>{node.excerpt}</p> */}
            <p>{node.frontmatter.summary}</p>

            <Link to={`/blog/${node.fields.slug}`}>
              <span className={"ReadMore"}>Read More...</span>
            </Link>
          </DataNode>
        ))}
      </div>
    </ThreePartGrid>
  );
};

export default BlogPage;
