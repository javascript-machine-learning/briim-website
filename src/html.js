import React from 'react';
import config from './config';

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


          {/* General tags */}
          <title>{config.title}</title>
          <meta name="description" content={config.description} />
          <meta name="image" content={config.url + config.image} />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          {/* OpenGraph tags */}
          <meta property="og:url" content={config.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={config.title} />
          <meta property="og:description" content={config.description} />
          <meta property="og:image" content={config.url + config.image} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:creator"
            content={config.userTwitter ? config.userTwitter : ""}
          />
          <meta name="twitter:title" content={config.title} />
          <meta name="twitter:description" content={config.description} />
          <meta name="twitter:image:src" content={config.url + config.image} />
          <meta name="twitter:image:alt" content={config.title} />


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
