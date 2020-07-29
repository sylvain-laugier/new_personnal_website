import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import FranceMapRR from "../components/blog/meteo-article/FranceMapRR"
import FranceMapNBJJRR from "../components/blog/meteo-article/FranceMapNBJJRR"
import FranceMapRRJOUR from "../components/blog/meteo-article/FRanceMapRRJOUR"
import BretagneNormandieCitiesRainChart from "../components/blog/meteo-article/BretagneNormandieCitiesRainChart"
import AtlantiqueCitiesRainChart from "../components/blog/meteo-article/AtlantiqueCitiesRainChart"
import SudCitiesRainChart from "../components/blog/meteo-article/SudCitiesRainChart"
import ParisLyonCitiesRainChart from "../components/blog/meteo-article/ParisLyonCitiesRainChart"
import Divider from "../components/blog/meteo-article/Divider"
import meteoStyles from "./meteo.module.css"
import { PostNode } from "../types/blog"
import loadable from "@loadable/component"

const MeteoChapter = loadable(() =>
  import("../components/blog/meteo-article/MeteoChapter")
)
const shortcodes = {
  FranceMapRR,
  FranceMapNBJJRR,
  FranceMapRRJOUR,
  BretagneNormandieCitiesRainChart,
  AtlantiqueCitiesRainChart,
  SudCitiesRainChart,
  ParisLyonCitiesRainChart,
  Divider,
}
interface MeteoTemplateProps {
  posts: PostNode[]
}

const MeteoTemplate = ({ posts }: MeteoTemplateProps) => {
  const firstChapter = getChapterIndexPost(posts, 1)
  return (
    <MDXProvider components={shortcodes}>
      <div className={meteoStyles.postBody}>
        <MDXRenderer>{posts[0].body}</MDXRenderer>
      </div>
      {firstChapter ? (
        <MeteoChapter>
          <div className={meteoStyles.postBody}>
            <MDXRenderer>{firstChapter.body}</MDXRenderer>
          </div>
        </MeteoChapter>
      ) : (
        <></>
      )}
      <div className={meteoStyles.postBody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam urna,
        pulvinar vel feugiat at, accumsan commodo dolor. Praesent et dignissim
        velit. Curabitur in gravida nibh. Proin pretium, est nec euismod
        eleifend, odio diam dignissim magna, a finibus diam metus vel ipsum.
        Curabitur nisl ante, elementum placerat ultricies a, ultrices id eros.
        Sed ac tortor ut nisl facilisis molestie tempor sit amet lorem.
        Suspendisse viverra bibendum neque. Proin ante mauris, tincidunt in
        rutrum sed, gravida condimentum diam. Maecenas porta urna ligula, quis
        scelerisque arcu egestas et. Aenean iaculis erat vitae risus laoreet
        aliquet. Sed egestas, ipsum nec semper aliquam, ante metus pretium
        massa, quis convallis urna sem a ante. Fusce pellentesque mauris sed
        neque placerat, eu volutpat ante bibendum. Nunc sollicitudin sagittis
        mauris id blandit. Integer vitae dui tempus, euismod diam ac, vulputate
        lacus. Aenean in pellentesque ante. Sed porta vel enim at bibendum.
        Phasellus ac arcu mi. Nunc vel pulvinar tortor. Proin in elementum est,
        ac gravida orci. In a viverra erat. Nullam bibendum vitae sapien id
        elementum. Sed vitae sapien at ligula varius aliquam. Pellentesque enim
        ex, varius nec egestas vel, tincidunt nec arcu. Mauris maximus
        pellentesque mattis. In sit amet porttitor orci, sed efficitur enim.
        Vestibulum nec tincidunt lacus, et bibendum odio. Donec nec diam sit
        amet nibh aliquam congue. Suspendisse aliquet a risus imperdiet
        ultrices. Sed turpis sem, facilisis et urna non, malesuada sagittis
        nisl. In hac habitasse platea dictumst. Integer aliquet sapien
        porttitor, mattis elit at, fermentum dolor. Sed vulputate ante eget
        placerat elementum. Morbi sed lorem in diam interdum blandit sit amet
        nec felis. Suspendisse condimentum, neque id egestas facilisis, ex risus
        gravida elit, id euismod eros nisl et nibh. Fusce nunc ipsum, vulputate
        sed lectus in, hendrerit porta felis. Cras et porta metus. Maecenas
        venenatis velit sit amet augue pretium varius. Duis nec quam arcu. Etiam
        vel turpis faucibus, hendrerit magna sed, placerat eros. Quisque sem
        diam, dictum id porttitor aliquam, commodo non eros. Phasellus ac nibh
        enim. Nulla venenatis malesuada leo, ut porta felis faucibus viverra.
        Praesent eu aliquam odio, ac tincidunt nisl. Nullam in aliquam leo, nec
        hendrerit mauris. Donec ullamcorper facilisis ex, vitae dapibus mauris
        molestie ut. Praesent laoreet eros odio. Pellentesque mattis nisl ut
        lacus euismod ultricies. Cras varius efficitur nisl. Vestibulum egestas
        egestas ligula, non sagittis nunc consectetur non. Sed elementum ipsum
        iaculis placerat consequat. Integer quam lectus, sodales non dictum
        eget, suscipit sed elit. Aliquam euismod massa eget blandit convallis.
        Ut molestie odio et augue pharetra ultricies. Pellentesque ac
        scelerisque diam, fringilla rutrum nibh. Etiam ipsum elit, vehicula sed
        lorem eget, vehicula vehicula sem. Maecenas semper felis vel aliquet
        fringilla. Suspendisse sed bibendum metus, eu tincidunt enim. Donec
        vitae purus velit. Quisque auctor venenatis massa id varius. Nullam ut
        quam lorem. Phasellus imperdiet, nisl vel consequat porta, odio nunc
        porttitor est, nec molestie mauris est ultrices lacus. Aenean commodo,
        arcu a fermentum condimentum, nulla mauris vestibulum massa, vel maximus
        urna quam et odio. Nam venenatis dolor ac pellentesque suscipit. Sed
        eget nunc at est faucibus finibus.
      </div>
    </MDXProvider>
  )
}

function getChapterIndexPost(
  posts: PostNode[],
  index: number
): PostNode | undefined {
  return posts.find(post => post.frontmatter.chapterIndex === index)
}
export default MeteoTemplate
