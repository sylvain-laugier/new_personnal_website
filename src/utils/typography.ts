import Typography from "typography"

export const sansSerifTypo = [
  "Montserrat",
  "Helvetica Neue",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
]
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Montserrat",
      styles: [],
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: sansSerifTypo,
  bodyFontFamily: sansSerifTypo,
  overrideStyles: ({ adjustFontSizeTo }) => ({
    a: {
      ...adjustFontSizeTo("16px"),
      color: "#9E9E9E",
      textDecoration: "none",
      fontFamily: sansSerifTypo.join(","),
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
