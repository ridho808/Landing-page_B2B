export const SEO_CONFIG = {
  titleTemplate: '%s | CreativeFlow Agency',
  defaultTitle: 'CreativeFlow Agency - B2B Creative Agency',
  description: 'Transform your business with our creative solutions. We help B2B companies grow through strategic design, automation, and digital innovation.',
  canonical: 'https://creativeflow.agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://creativeflow.agency',
    siteName: 'CreativeFlow Agency',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'CreativeFlow Agency - B2B Creative Agency',
      },
    ],
  },
  twitter: {
    handle: '@creativeflow',
    site: '@creativeflow',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'B2B agency, creative agency, digital transformation, automation, design, consulting',
    },
    {
      name: 'author',
      content: 'CreativeFlow Agency',
    },
  ],
}