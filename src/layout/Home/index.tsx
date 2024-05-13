import { Heading, SlideFade } from '@chakra-ui/react'
import { DashDivider } from 'components/DashDivider'
import { Layout } from 'layout'
import { Favorites } from './favorites/FavoritesSection'
import { History } from './History'
import { LinkTooltip } from './LinkTooltip'
import { Projects } from './Projects'


export const HomeLayout = () => (
  <Layout>
    <SlideFade in={true} offsetY="20px">
      <Heading
        as="h3"
        pt="8"
        fontSize={['32px', '48px', '64px']}
        lineHeight={1.2}
      >
      <LinkTooltip name="intro">Nawrasse Dahman.</LinkTooltip> A Full-Stack Web Developer And A Published Author.
      </Heading>
      <DashDivider my="60px" />
      <History />
      <DashDivider my="60px" />
      <Projects />
      <DashDivider my="60px" />
      <Favorites />
    </SlideFade>
  </Layout>
)
