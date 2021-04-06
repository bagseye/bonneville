import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --heavyWeight: 900;
    --transMed: 0.3s;
    --transSlow: 0.5s;
    --black: #2d2828;
    --charcoal: #3e3e3e;
    --primaryColor: #939393;
    --serif: "Playfair Display", serif;
    --sansSerif: "Lato", sans-serif;
    --h1: 2rem;
    --h2: 1.8rem;
    --h3: 1.5rem;
    --h4: 1.25rem;
    --h5: 1.15rem;
    --h6: 1rem;
    --footerMenuItem: 0.85rem;
    --para: 1rem;
    --spacing: 1rem;

    @media (min-width: 768px) {
      --h1: 2.6rem;
      --h2: 2.4rem;
      --h3: 1.75rem;
      --h4: 1.5rem;
      --h5: 1.25rem;
      --h6: 1.1rem;
      --footerMenuItem: 1rem;
      --para: 1.1rem;
    }

    @media (min-width: 1200px) {
      --h1: 3rem;
      --h2: 2.8rem;
      --h3: 2rem;
      --h4: 1.75rem;
      --h5: 1.35rem;
      --para: 1.15rem;
    }
  }

  body {
    font-family: var(--sansSerif);
    color: var(--black);
    font-size: var(--para);
    margin: 0;
  }

  p {
    font-size: var(--para);
    line-height: 1.35;

    @media (min-width: 768px) {
      line-height: 1.5;
    }
  }

  a {
    color: var(--charcoal);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }

    &:hover,
    &:visited {
      color: var(--charcoal);
    }
  }

  .main-body {
    padding: calc(var(--spacing) * 4) calc(var(--spacing) * 2)
      calc(var(--spacing) * 4) calc(var(--spacing) * 2);
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      padding: calc(var(--spacing) * 6) calc(var(--spacing) * 2)
        calc(var(--spacing) * 6) calc(var(--spacing) * 2);

      max-width: 600px;
    }

    @media (min-width: 1200px) {
      max-width: 860px;
    }
  }

  .nav-link {
    font-weight: var(--heavyWeight);
    list-style: none;
    display: inline;

    a {
      display: inline-block;
      text-decoration: none;
      position: relative;
      -webkit-transition: var(--transMed);
      transition: var(--transMed);
      color: var(--black);
      line-height: 1.75rem;

      &:hover {
        color: var(--primaryColor);

        &::after {
          width: 0;
          left: 100%;
        }
      }
    }
  }

  .btn {
    color: var(--black);
    text-decoration: none;
    border: none;
    background: none;
    font-family: var(--serif);
    padding: 0;
    font-size: 1rem;
    display: inline-block;
    line-height: 30px;
    position: relative;

    &-link {
      border: none;
      background-color: transparent;
      font-size: var(--h5);
      padding: 0;
      display: flex;
      font-family: var(--serif);
      color: var(--charcoal);
      text-decoration: none;
      position: relative;

      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 0.1rem;
        width: 100%;
        background-color: var(--charcoal);
        left: 0;
        bottom: -0.25rem;
        opacity: 1;
        transition: opacity var(--transSlow);
      }

      &:hover,
      &:focus {
        cursor: pointer;

        &:after {
          opacity: 0.15;
        }
      }

      &:visited {
        text-decoration: none;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }
  .sr-only-focusable:focus,
  .sr-only-focusable:active {
    clip: auto !important;
    -webkit-clip-path: none !important;
    clip-path: none !important;
    height: auto !important;
    margin: auto !important;
    overflow: visible !important;
    width: auto !important;
    white-space: normal !important;
  }
`

export default GlobalStyles
