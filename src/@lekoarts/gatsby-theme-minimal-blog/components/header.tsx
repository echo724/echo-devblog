/** @jsx jsx */
import { jsx, useColorMode, Flex } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle"
import Navigation from "@lekoarts/gatsby-theme-minimal-blog/src/components/navigation"
import HeaderTitle from "./header-title"
import HeaderExternalLinks from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [ 4,5 ] }}>
        <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, variant: `dividers.bottom`,}}>
            <HeaderTitle />
            <div 
                sx={{
                        boxSizing: `border-box`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `space-around`,
                        flexFlow: `wrap`,
                    }}>
                <div 
                    sx={{
                        boxSizing: `border-box`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `space-between`,
                        color: `secondary`,
                        a: { color: `secondary`, ":hover": { color: `heading` } },
                        flexFlow: `wrap`,
                        mr: 1,
                        mb: -1,
                    }}>
                    <HeaderExternalLinks />
                </div>
                <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
            </div>
        </Flex>
    </header>
  )
}

export default Header
