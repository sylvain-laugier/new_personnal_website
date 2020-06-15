import React from "react"
import SocialNetworksStyle from "./socialNetworks.module.css"

const SocialNetworks = (): JSX.Element => {
  return (
    <div className={SocialNetworksStyle.container}>
      <div className={SocialNetworksStyle.socialLinkContainer}>
        <a target="_blank" href="https://github.com/Instant-Monkey">
          GitHub
        </a>
      </div>
      <div className={SocialNetworksStyle.socialLinkContainer}>
        <a target="_blank" href="https://twitter.com/Sylvain_Laugier">
          Twitter
        </a>
      </div>
      <div className={SocialNetworksStyle.socialLinkContainer}>
        <a target="_blank" href="https://www.linkedin.com/in/sylvainlaugier/">
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default SocialNetworks
