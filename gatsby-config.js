module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/md`,
        name: 'md',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Alessio Dionisi ~ Software Engineer',
        short_name: 'Alessio Dionisi',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
}
