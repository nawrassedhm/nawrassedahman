import { WritingLayout } from 'layout'
import getFrontMatter, {
  WritingFrontmatter,
  WritingPosts,
} from 'utils/getFrontMatter'

function sortByLastUpdated(
  postA: WritingFrontmatter,
  postB: WritingFrontmatter
) {
  return new Date(postA.data.lastUpdated) < new Date(postB.data.lastUpdated)
    ? 1
    : -1
}

const WritingOverview = ({ posts }: WritingPosts) => {
  return <WritingLayout posts={posts.sort(sortByLastUpdated)} />
}

export const getStaticProps = async () => {
  return getFrontMatter('/posts/writing')
}

export default WritingOverview
