import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg/single-page'

import './index.css'
import App from './App.jsx'

// Single-page mode: the site has no router, so there is one route to render.
// This replaces createRoot(document.getElementById('root')) — the same tree is
// rendered to static HTML at build time and hydrated in the browser.
export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
)
