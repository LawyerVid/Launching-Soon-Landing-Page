require('dotenv').config()
const webpack = require('webpack')

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    workboxOptions: {
        maximumFileSizeToCacheInBytes: 7000000
    }
});


/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
    poweredByHeader: false,
    experimental: {
        typedRoutes: true
    },
    logging: false,
    webpack: (config) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(process.env)
        )
        return config
    }
})

module.exports = nextConfig
