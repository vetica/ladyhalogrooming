# Lady Halo’s Grooming

The website for **Lady Halo’s Grooming**, a dog grooming business in Fremont, CA.

It is a one-page static site: plain HTML, CSS and a few lines of JavaScript. There is no build step, framework or package manager.

## Project layout

```
index.html    All page content and the inline SVG icon set
styles.css    All styles; colors, fonts and spacing are CSS variables in :root
script.js     Sticky header shadow, mobile menu toggle, footer year
images/       Logo, crest, favicons and photos
```

### Images

| File | Used for |
| --- | --- |
| `crest.png` | Small crest in the header |
| `logo.png` | Full logo in the footer and the social share image (`og:image`) |
| `hero-dog.jpg` | Hero photo at the top of the page |
| `groomer.jpg` | Photo of Janelle in the About section |
| `favicon.png` | Browser tab icon |
| `apple-touch-icon.png` | Icon for iOS home screen bookmarks |

The logo and crest have white backgrounds rather than transparent ones. The CSS uses `mix-blend-mode: multiply` to hide the white on light backgrounds, so keep them on light colors or export transparent versions.

## Running locally

Open `index.html` in a browser. To serve it over HTTP instead (closer to how it behaves in production), run a static server from the project folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Page sections

The page is one long scroll, linked from the header nav by anchor:

1. **Hero:** tagline, text-to-book button and quick highlights
2. **About** (`#about`): introduces Janelle, the groomer
3. **Services** (`#services`): a card for each service
4. **Pricing** (`#pricing`): starting prices by weight and coat type
5. **First visit** (`#first-visit`): how the free meet and greet works
6. **Contact** (`#contact`): text, call, service area and hours

On small screens a fixed bar at the bottom of the page shows Call and Text buttons.

## Editing content

All copy lives in `index.html`.

### Icons

Icons are SVG `<symbol>`s defined once at the top of `<body>` and used with `<svg><use href="#i-name"/></svg>`. To add one, add a new `<symbol id="i-…">` to that block.

### Styling

Brand colors (sampled from the logo), fonts and other shared values are CSS variables at the top of `styles.css`. Fonts are Roboto Slab (headings) and Source Sans 3 (body), loaded from Google Fonts.

Layout breakpoints are at 860px, 640px and 480px. Animations are turned off for visitors who have reduced motion enabled.

