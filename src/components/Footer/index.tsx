import { Box, Link, Flex } from '@chakra-ui/react'
import { DashDivider } from '../DashDivider'

interface ItemProperties {
  href: string
  label: React.ReactNode
}

const Item = ({ href, label }: ItemProperties) => (
  <Link href={href} _hover={{ color: 'primary' }}>
    {label}
  </Link>
)

export const Footer = () => (
  <Box maxW="5xl" marginX="auto" as="footer">
    <DashDivider mt="80px" mb="24px" />
    <Flex gap="12px" wrap="wrap" fontSize="sm">
      <Item
        aria-label="Send Email"
        href="mailto:nawrassedhm@myself.com"
        label="Email Me"
      />
      /
      <Item
        aria-label="Navigate To Amazon Profile"
        href="https://www.amazon.com/dp/B0D76GKVLN"
        label="Amazon"
      />
      /
      <Item
        aria-label="Navigate To Letterboxd Profile"
        href="https://www.letterboxd.com/nawrassedahman"
        label="Letterboxd"
      />
      /
      <Item
        aria-label="Navigate To GitHub Profile"
        href="https://www.github.com/nawrassedhm"
        label="GitHub"
      />
      /
      <Item
        aria-label="Subscribe To My Newsletter"
        href="https://nawrasseauthor.substack.com"
        label="Newsletter"
      />
    </Flex>
  </Box>
)
