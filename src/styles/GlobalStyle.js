import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  :root {
    --bg-primary: #0d0d0d;
    --bg-secondary: #141414;
    --bg-card: #191919;
    --accent: #b89564;
    --accent-hover: #d0ad7b;
    --text-primary: #f5f5f5;
    --text-secondary: #a1a1aa;
    --border-color: rgba(255, 255, 255, 0.09);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
  }

  body {
    min-width: 320px;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'DM Sans', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-family: 'DM Sans', sans-serif;
  }

  button, a {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    color: inherit;
  }

  button:focus-visible,
  a:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  ::selection {
    background: var(--accent);
    color: #0d0d0d;
  }

  img {
    display: block;
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyle;
