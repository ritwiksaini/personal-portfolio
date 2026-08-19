// Regenerates public/og.jpg, the social share card used by og:image and
// twitter:image on every page. Not part of the build; run it by hand when the
// headshot or the positioning copy changes.
//
//   npx --yes -p sharp node scripts/build-og.mjs
//
// sharp is deliberately not a dependency of this project. Nothing at build or
// runtime needs it.

import sharp from 'sharp'

const W = 1200, H = 630
const SHOT_W = 340, SHOT_H = 430
const SHOT_X = W - 80 - SHOT_W          // right margin 80
const SHOT_Y = Math.round((H - SHOT_H) / 2)

const shot = await sharp(process.env.HOME + '/Desktop/personal_website/personal_portfolio/public/headshot.jpg')
  .resize(SHOT_W, SHOT_H, { fit: 'cover', position: 'top' })
  .grayscale()
  .toBuffer()

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <g font-family="Helvetica Neue, Helvetica, Arial" >
    <text x="80" y="130" fill="#c9a84c" font-size="15" font-weight="500" letter-spacing="5.2">${esc("BOSTON UNIVERSITY '26  ·  CFA LEVEL I")}</text>
  </g>
  <g font-family="Didot, Playfair Display, Georgia, serif">
    <text x="80" y="255" fill="#ffffff" font-size="96" font-weight="600">Ritwik</text>
    <text x="80" y="345" fill="#b0afa9" font-size="96" font-weight="400">Saini</text>
  </g>
  <g font-family="Helvetica Neue, Helvetica, Arial" fill="#b0afa9" font-size="25" font-weight="300">
    <text x="80" y="415">Private capital markets. Deal sourcing,</text>
    <text x="80" y="450">investment theses, and automation around</text>
    <text x="80" y="485">financial workflows.</text>
  </g>
  <rect x="80" y="520" width="64" height="1" fill="#c9a84c"/>
  <text x="80" y="562" font-family="Helvetica Neue, Helvetica, Arial" fill="#6e6d63" font-size="16" font-weight="500" letter-spacing="3.4">RITWIKSAINI.COM</text>
</svg>`

// Drawn BEFORE the photo so only the bottom-right edges show, matching the
// offset border on the site rather than framing the image.
const border = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect x="${SHOT_X + 16.5}" y="${SHOT_Y + 16.5}" width="${SHOT_W}" height="${SHOT_H}" fill="none" stroke="#c9a84c" stroke-opacity="0.35" stroke-width="1"/>
</svg>`

await sharp({ create: { width: W, height: H, channels: 3, background: '#0d0d0d' } })
  .composite([
    { input: Buffer.from(border), left: 0, top: 0 },
    { input: shot, left: SHOT_X, top: SHOT_Y },
    { input: Buffer.from(svg), left: 0, top: 0 },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(process.env.HOME + '/Desktop/personal_website/personal_portfolio/public/og.jpg')

console.log('og.jpg written')
