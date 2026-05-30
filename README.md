# World Cup Sweepstakes — Shipped Final

Open `index.html` locally or deploy the folder to GitHub Pages, Netlify, Vercel, or any static host.

## Modes

### Version 1
48 players, 1 team each.

### Version 2
24 players, 2 teams each, FIFA-ranked seeded pots:
- Pot A = top 24 teams
- Pot B = bottom 24 teams

### Version 3
16 players, 3 teams each, FIFA-ranked seeded pots:
- Pot A = top 16 teams
- Pot B = middle 16 teams
- Pot C = bottom 16 teams

## Payouts

Default enabled:
- Winner
- Runner-Up
- Third Place
- Worst Team

Default disabled bonus categories:
- Golden Boot
- Golden Glove
- Most Goals Scored
- Most Red Cards

## Features

- FIFA-ranked seeded draw modes
- Random player draw
- Future player order hidden
- One Draw Player click per person
- Back-to-back team reveals for Version 2/3
- Custom payout checkboxes
- Auto Complete button
- Showcase mode
- PNG export
- Watermark: Created by Micheál Loughran
- Generic placeholder names
- Remaining teams panel
- Reveal-only country fun facts

## Important

Use Reset before starting a real draw if you tested the app first.

If running locally by double-clicking `index.html`, PNG export may be blocked by browser file-security rules. It works when deployed online through a static host.


## PNG export spacing fix

48-player / 1-team exports now use a taller canvas and adjusted card text positions so player names and country names do not overlap.


## Real mobile fix

This version removes ad slots completely and uses a true mobile layout:
- Draw stage first
- Assignments second
- Remaining teams third
- No fixed footer overlay
- No ad placeholders
- SEO content hidden on mobile so it does not interrupt app use
- Normal page scrolling restored


## Mobile polish

- Setup screen is fully removed from layout after starting the draw.
- Page scrolls back to the top of the draw board after Start Draw.
- Mobile control buttons are centered.
