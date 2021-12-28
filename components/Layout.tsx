import { Box } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: React.FC = ({ children }) => (
  <Box px={8} pt="36px" pb="60px" minHeight="100vh">
    <Header />
    <Box maxW="4xl" marginX="auto" mt="20" as="main">
      {children}
    </Box>
    <Footer />
  </Box>
)
