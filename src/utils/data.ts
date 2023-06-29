const title = "JSConf Chile | Conferencia de Javascript en Santiago Chile"
const description = "JSConf Chile | Revive los momentos de JSConf 2023, revisa las fotos y la página. Mantente atento a la próxima edición. Conoce más del equipo organizador."

export const seo = {
  title,
  description,
  metadata: [
    // General
    { category: "name", name: "robots", content: "index" },
    { category: "name", name: "keywords", content: "HTML, CSS, JavaScript, React, JSCONF, Chile" },
    { category: "name", name: "author", content: "JSConfCL" },

    // Facebook
    { category: 'property', name: "og:type", content: "website" },
    { category: 'property', name: "og:url", content: "https://jsconf.cl" },
    { category: 'property', name: "og:title", content: title },
    { category: 'property', name: "og:description", content: description },
    { category: 'property', name: "og:image", content: "/images/og-image.png" },

    // Twitter
    { category: "name", name: "twitter:card", content: "summary_large_image" },
    { category: "property", name: "twitter:domain", content: "jsconf.cl" },
    { category: "property", name: "twitter:url", content: "https://jsconf.cl" },
    { category: "name", name: "twitter:title", content: title },
    { category: "name", name: "twitter:description", content: description },
    { category: "name", name: "twitter:image", content: "/images/og-image.png" },
  ]
}

export const hero = `
  La primera edición Chilena, de la más prestigiosa conferencia de JavaScript fue el pasado 03 y 04 de Febrero, 2023.
  No te preocupes, ya estamos trabajando en la próxima versión. Mientras, te dejamos a continuación una serie de Links respecto a la conferencia, de nosotros como organizadores, y de lo que se está viendo en el ambiente tech en Chile.
`

export const links = [
  { id: 1, name: "Galeria", url: "https://gallery.jsconf.cl/", photo: "/images/gallery.png" },
  { id: 2, name: "JSConf 2023", url: "https://2023.jsconf.cl/", photo: "/images/2023.png" },
  { id: 3, name: "Corporacion JavaScript Chile", url: "https://jschile.org/", photo: "/images/jscl.png" },
]

export const footer = [
  { id: 1, name: "Codigo de Conducta", url: "https://github.com/jsconfcl/code_of_conduct"},
  { id: 2, name: "Contacto", url: "mailto:contacto@jsconf.cl"},
  { id: 3, name: "MIT Licencse  - JSConf Chile", url: "https://github.com/jsconfcl/jsconf-landing"},
  { id: 4, name: "Con ❤️ - El equipo JSConf Chile", url: "https://github.com/jsconfcl"},
]
