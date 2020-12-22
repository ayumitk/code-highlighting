// ↓ useEffectを追加
import React, { useEffect } from "react"
import { Link } from "gatsby"

// ↓ PrismJSを追加
import Prism from "prismjs"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// ↓ このコードが表示されます
const code = `class HelloMessage extends React.Component {
  render() {
    return(
      <div>Hello!</div>
    )
  }
}
`

const IndexPage = () => {

  {/* ↓ highlightAll()ファンクションをコール */}
  useEffect(() => {
    Prism.highlightAll()
  })

  return(
  <Layout>
    <SEO title="Home" />
    <h3>
      Gatsbyで作ったWebサイト内のコードブロックを、<code>PrismJS</code>を使って、シンタックスをハイライト表示する
    </h3>
    {/* ↓ コードブロックを追加 */}
    <pre>
      <code>{code}</code>
    </pre>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)
  }

export default IndexPage
