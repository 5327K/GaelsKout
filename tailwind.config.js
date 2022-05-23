module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: theme => ({
        "6": theme("spacing[6]"),
        "24": theme("spacing[24]")
      })
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
