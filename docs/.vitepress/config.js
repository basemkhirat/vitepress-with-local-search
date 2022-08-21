module.exports = {
  title: 'Documentation',
  description: 'Just playing around.',
  themeConfig: {
    siteTitle: 'Documentation',
    algolia: true,
    sidebar: [
      {
        text: 'Getting started',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/' },
        ]
      }
    ]
  }
}