# CalFlow
A multi-page, static productivity web app that brings together a calendar, clock, calculator, and contact hub in one lightweight, themeable interface — built with plain HTML, CSS, and JavaScript, no frameworks or build tools required.

## Overview
CalFlow is designed as a personal productivity dashboard. It's fully static (no backend, no database) and deployable directly on GitHub Pages or any static host. The entire experience — including a persistent, site-wide theme switcher — is powered by vanilla JavaScript and `localStorage`.

---

## Features
- 🗓️ **Calendar** — A full 12-month calendar for the current year, auto-generated on load with today's date highlighted.
- 🕰️ **Clock** — A live digital clock (hour / minute / second / AM-PM) plus a toggleable analog wall clock with smooth hand animation.
- 🧮 **Calculator** — A functional on-screen and keyboard-operable calculator supporting basic arithmetic and bracketed expressions.
- 🎨 **5 Switchable Themes** — Each theme has its own color palette, design tokens, and background artwork. Your selection is saved to `localStorage` and applied instantly across every page, with no flash of the wrong theme on load.
- 🙋 **About Page** — Project background and creator bio.
- 🌐 **Contact Page** — Contact details, social links, and a "Support" section with a UPI QR code.

---

## Project Structure
CalFlow/
├── index.html          # Home page — the calendar
├── about.html           # About the project & creator
├── calculator.html      # Calculator page
├── clock.html            # Digital + analog clock page
├── contact.html          # Contact info, social links, support QR
│
├── CSS/
│   ├── theme_style_1.css     # Theme 1 design tokens & styles
│   ├── theme_style_2.css     # Theme 2 design tokens & styles
│   ├── theme_style_3.css     # Theme 3 design tokens & styles
│   ├── theme_style_4.css     # Theme 4 design tokens & styles
│   ├── theme_style_5.css     # Theme 5 design tokens & styles
│   ├── bg_img_1.png … bg_img_5.png   # Background artwork, one per theme
│   └── qr-code.jpeg           # UPI payment QR code (Contact page)
│
└── JS/
    ├── date.js            # Calendar generation logic (used by index.html)
    ├── function.js        # Calculator logic (used by calculator.html)
    ├── time.js             # Digital + analog clock logic (used by clock.html)
    └── theme-manager.js    # Shared theme apply/save/load utility

```

## How Theming Works
Each page loads a single stylesheet via a swappable `<link id="calflow-theme">` tag:

```
js
var saved = localStorage.getItem('calflow_theme') || 'theme_style_1';
document.getElementById('calflow-theme').href = 'CSS/' + saved + '.css';
```

This script runs immediately in `<head>`, before the page renders, so the correct theme is applied without any visible flash. Selecting a theme from the sidebar panel updates `localStorage` and re-applies the stylesheet on every page, keeping the choice consistent site-wide.

---

## Tech Stack
| Layer      | Technology                          |
|------------|--------------------------------------|
| Structure  | HTML5                                |
| Styling    | CSS3 (custom properties / design tokens) |
| Behavior   | Vanilla JavaScript (ES6+)            |
| Persistence| Browser `localStorage`               |
| Hosting    | Static hosting (e.g. GitHub Pages)   |

## Getting Started
1. Clone or download the repository.
2. Keep the folder structure intact — `index.html`, `about.html`, `calculator.html`, `clock.html`, and `contact.html` all reference assets via relative `CSS/` and `JS/` paths.
3. Open `index.html` in a browser, or serve the folder with any static file server.
No installation, build step, or dependencies are required.

---

## Pages

| Page             | File              | Description                                   |
|-------------------|-------------------|------------------------------------------------|
| Home / Calendar   | `index.html`      | Full-year calendar with today highlighted      |
| Clock             | `clock.html`      | Digital clock + analog wall clock modal        |
| Calculator        | `calculator.html` | Basic arithmetic calculator                    |
| About             | `about.html`      | Project and creator background                 |
| Contact           | `contact.html`    | Contact details, socials, and support QR code  |

---

## Author
**Lakshya Singh** (GitHub: [crazyachat](https://github.com/crazyachat))
Bachelor of Computer Application (BCA) student, Dr. C.V. Raman University — passionate about full stack web development and building practical, everyday tools.

---

# 📫 Contact
**Lakshya Singh**
📧 Email  :  crazyachat2468@gmail.com
LinkedIn  :  https://linkedin.openinapp.co/cjz02
GitHub  :  https://openinapp.link/1m7vy
📍 Prayagraj, Uttar Pradesh, India

---

# 📜 License
This project is licensed under the MIT License.