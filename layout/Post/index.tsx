import React from 'react'
import components from 'components/Mdx'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { WritingFrontmatter } from 'utils/getFrontMatter'
import { PageHeader, Seo } from 'components'

export type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: WritingFrontmatter['data']
}

export const PostLayout = ({ frontMatter, source }: PostPageProps) => (
  <React.Fragment>
    <Seo
      title={frontMatter.title}
      desc={frontMatter.description}
      image={frontMatter.ogImage}
      path={frontMatter.path}
      date={frontMatter.date}
      // updated={updated}
    />
    <PageHeader
      title={frontMatter.title}
      description={frontMatter.description}
    />
    <MDXRemote {...source} components={components} scope={frontMatter} />
  </React.Fragment>
)
