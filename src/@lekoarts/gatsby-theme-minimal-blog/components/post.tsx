/** @jsx jsx */
import * as React from "react"
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      canonicalUrl?: string
      body: string
      excerpt: string
      timeToRead?: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const Post = ({ data: { post } }: PostProps) => (
  <Layout sx={{
    maxWidth: '768px',
    marginX: 'auto',
  }}>
    <Seo
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
      canonicalUrl={post.canonicalUrl}
    />
    <Heading sx={{ mt:6, fontSize:[5,5,6], textAlign: 'center' }} as="h1" variant="styles.h1">
      {post.title}
    </Heading>
    <p sx={{ color: `secondary`, mt: 3,mb:6, a: { color: `secondary` }, fontSize: [1, 1, 2], textAlign: 'center' }}>
    {post.tags && (
        <React.Fragment>
          <ItemTags tags={post.tags} />
          {<span> &#183; </span>}
        </React.Fragment>
      )}
      <time>{post.date}</time>
      {post.timeToRead && <span> &#183; </span>}
      {post.timeToRead && <span>{post.timeToRead} min read</span>}
    </p>
    <section
      sx={{
        maxWidth: '768px',
        mx: 'auto',
        my: 4,
        ".gatsby-resp-image-wrapper": { my: [3,3,4], borderRadius: '10px' },
        ".gatsby-resp-image-image": { borderRadius: '10px' },
        variant: `layout.content`,
      }}
    >
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Layout>
)

export default Post
