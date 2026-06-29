import { useEffect } from "react"
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  DEFAULT_KEYWORDS,
} from "../config/site"

/**
 * Updates document head tags for SEO and social sharing.
 *
 * @param {Object} props
 * @param {string} [props.title] - Page title without site name suffix.
 * @param {string} props.description - Meta description for the page.
 * @param {string} [props.path='/'] - Canonical path (e.g. `/services`).
 * @param {string} [props.keywords] - Comma-separated keywords.
 * @param {Object} [props.jsonLd] - Structured data object for JSON-LD.
 */
function Seo({
  title,
  description,
  path = "/",
  keywords = DEFAULT_KEYWORDS,
  jsonLd,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | ${SITE_TAGLINE}`
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (attr, key, content) => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    const setLink = (rel, href) => {
      if (!href) return
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement("link")
        el.setAttribute("rel", rel)
        document.head.appendChild(el)
      }
      el.setAttribute("href", href)
    }

    setMeta("name", "description", description)
    setMeta("name", "keywords", keywords)
    setMeta("name", "robots", "index, follow")
    setMeta("property", "og:type", "website")
    setMeta("property", "og:site_name", SITE_NAME)
    setMeta("property", "og:title", fullTitle)
    setMeta("property", "og:description", description)
    setMeta("property", "og:url", canonicalUrl)
    setMeta("property", "og:locale", "en_KE")
    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", fullTitle)
    setMeta("name", "twitter:description", description)
    setLink("canonical", canonicalUrl)

    const scriptId = "seo-json-ld"
    let script = document.getElementById(scriptId)
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script")
        script.id = scriptId
        script.type = "application/ld+json"
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }
  }, [fullTitle, description, keywords, canonicalUrl, jsonLd])

  return null
}

export default Seo
