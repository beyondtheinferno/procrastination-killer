const globalStyles = {
  "@global": {
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "*": {
      margin: 0,
    },
    body: {
      lineHeight: 1.4,
      "-webkit-font-smoothing": "antialiased",
    },
    "img, picture, video, canvas, svg": {
      display: "block",
      maxWidth: "100%",
    },
    "input, button, textarea, select": {
      font: "inherit",
    },
    "p, h1, h2, h3, h4, h5, h6": {
      overflowWrap: "break-word",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "serif",
    },
    p: {
      fontFamily: "sans-serif",
      fontSize: "20px",
    },
  },
}

export default globalStyles
