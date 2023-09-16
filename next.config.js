/** @type {import('next').NextConfig} */

module.exports = {
    ...module.exports,
    images: {
      domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' to the list of allowed domains
    },
  };
