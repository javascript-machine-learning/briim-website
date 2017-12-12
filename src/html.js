import React from "react"

// import faviconApple from './assets/favicons/apple-touch-icon.png';
// import favicon32 from './assets/favicons/favicon-32x32.png';
// import favicon16 from './assets/favicons/favicon-16x16.png';
// import faviconICO from './assets/favicons/favicon.ico';

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes} style={{ height: '100%' }}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta title="gatsby-movement" />
          <meta description="gatsby-movement" />

          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes} style={{ height: '100%' }}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            style={{ height: '100%' }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
