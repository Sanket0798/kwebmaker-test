import client from "@/apollo-client";
import { gql } from "@apollo/client";

export async function getHomepageData() {
  const { data } = await client.query({
    query: gql`
      {
        pages(where: { name: "Homepage" }) {
          nodes {
            homepage {
              banners {
                bannerImage {
                  node {
                    sourceUrl
                  }
                }
                bannersTitle
                bannerDescription
                bannerButton {
                  title
                  url
                  target
                }
              }
              homeAboutTitle
              homeAboutSubtitle
              homeAboutButton {
                title
                url
                target
              }
              homeAboutVideoImage {
                node {
                  sourceUrl
                }
              }
              homeAboutDescription
              categories {
                title
                image {
                  node {
                    sourceUrl
                  }
                }
              }
              homeJoinTitle
              homeJoinSubtitle
              homeJoinButton {
                title
                url
                target
              }
              homeJoinBackgroundImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
        blogs {
          nodes {
            slug
            title
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  });

  const homepageData = data.pages.nodes[0]?.homepage;
  const blogs = data.blogs.nodes;

  return { homepageData, blogs };
}