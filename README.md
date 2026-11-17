# BiteHub - Restaurant Ordering System

**CSCI426 | Advanced Web Programming | Phase 1**

**Team:** Hussein Khalaf (Student ID: 22230494) and Salah Hazimeh (صلاح هزيمة).

BiteHub is a React frontend project that demonstrates how a restaurant customer can browse dishes, search and filter a menu, manage a basket, submit a **demo** checkout, and move through an interactive **simulated** order tracker. It is designed to work on desktop, tablet, and mobile.

> **Academic demo.** No real orders, payments, emails, or deliveries occur. Contact details and restaurant information are fictional examples. Images from Unsplash require an internet connection; local SVG fallbacks appear when those images fail to load.

## Pages / routes

| Path | Purpose |
| --- | --- |
| `/` | Home, benefits, featured menu cards |
| `/menu` | Dynamic search, categories, reusable food cards |
| `/services` | Services/features and how ordering works |
| `/about` | Project restaurant story and values |
| `/contact` | Validated contact form with demo confirmation |
| `/order` | Basket, quantity controls, checkout form, totals |
| `/tracking` | Four manually advanced, *simulated* order stages |

## Functional features

- React components, props, `useState`, `useEffect`, `useMemo`, and React Router.
- Real-time dish search, category chips, and empty-results state.
- Add food, increase/decrease quantity, and delete items from the basket.
- Basket subtotal + a fixed **$2 simulated delivery fee**.
- LocalStorage persistence for basket and the **last demo order**. For privacy, the tracker stores customer name, selected dishes, totals, and simulated status - **not** phone number or delivery address.
- Checkout validation through HTML form constraints (name, phone, address), then navigate to `/tracking`.
- Manually step through **Order placed -> Preparing -> Out for delivery -> Delivered**. Clear the local demo history when done.
- Responsive navbar with an accessible hamburger menu, responsive cards/forms, and keyboard focus states.

## Technologies

React 18; Vite 6; React Router DOM 6; JavaScript; CSS3; Lucide React; Browser LocalStorage; Git/GitHub (version control); Vercel or Netlify (hosting).

## Run on your computer

Prerequisites: **Node.js 18+** and npm (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`). If your browser is offline, the external food photos and Google Fonts may fall back, but layout and demo functions still work.

### Build and test the production version

```bash
npm run build
npm run preview
```

The generated deployable files are in `dist/` (not committed).

### Quick functional test

1. On `/menu`, search `burger`, choose the Burgers category and add two burgers.
2. Click **My order**; change the quantity and check the price total.
3. Enter sample checkout details and submit; the app navigates to `/tracking`.
4. Click **Simulate next step** three times and verify the four statuses.
5. Reload: the last demo order remains in this browser. Clear the demo history.
6. Test the navigation on mobile (Chrome Device Toolbar) and desktop.

## Project structure

```text
src/
  App.jsx                  Routes; shared basket; LocalStorage; demo order state
  main.jsx                 React root and BrowserRouter
  data.js                  Menu items and categories
  components/
    Navbar.jsx             Responsive navbar with live cart counter
    FoodCard.jsx           Reusable dish card
    Footer.jsx             Shared footer
  pages/
    Home.jsx               Landing page
    Menu.jsx               Search/filter menu
    Services.jsx           Features and four-step walkthrough
    About.jsx              Restaurant story
    Contact.jsx            Demo contact form
    Order.jsx              Basket and demo checkout
    Tracking.jsx           Simulated order progress
  styles.css               Desktop/mobile styling
public/images/              Offline SVG image fallbacks
```

## Screenshots (required before final submission)

The UI screenshots are not included yet. Capture them from the running application before the final submission.

After running `npm install` and `npm run dev` on your computer, capture the following **actual browser screenshots** and save them using these exact paths:

- `docs/screenshots/home-desktop.png` - home at about 1440 px wide
- `docs/screenshots/menu-desktop.png` - menu and search/filter at desktop size
- `docs/screenshots/order-desktop.png` - basket with sample dishes
- `docs/screenshots/services-mobile.png` - Services at about 390 px wide
- `docs/screenshots/tracking-mobile.png` - tracker at about 390 px wide

After capturing the images, add them to the Screenshots section as Markdown image links.

## Git / GitHub (10 marks for deployment; commits also matter)

```bash
git status
git add .
git commit -m "Implement responsive BiteHub frontend"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bitehub-restaurant-ordering.git
git push -u origin main
```

The ZIP includes a local Git history. Review your actual changes with `git status` and `git log --oneline`. If a remote is already configured, update it rather than adding another origin.

**GitHub repository:** https://github.com/hussein112001/BiteHub-Restaurant-Ordering  
**Live deployment:** _add your real URL after deployment_

## Vercel deployment

1. Push the project to GitHub.
2. In [Vercel](https://vercel.com), select **Add New -> Project** and import the repository.
3. Set framework to **Vite**; build command to `npm run build`; output directory to `dist`.
4. Deploy. `vercel.json` includes the SPA route fallback for direct visits to `/services`, `/tracking`, etc.
5. Paste the published link here and in your final report / Google Classroom submission.

Alternatively, Netlify can deploy the same repository: build `npm run build`, publish `dist`. `netlify.toml` includes the SPA route redirect.

## System design

The menu data lives in `src/data.js`. `App.jsx` owns the basket and last demo order as shared React state. The `FoodCard` and `Menu` components trigger `addToCart`; the `Order` page reads and updates the basket, computes totals, and invokes `placeOrder`; the `Tracking` page reads the last demo order and updates its simulated status. `useEffect` saves the basket and last order to LocalStorage.

## Known limitations

- No real authentication, database, payment processing, delivery tracking, or messaging backend.
- Demo status advances **only when the user clicks**; do not imply it reflects a real driver.
- The stored basket and order are local to the current browser and can be deleted by clearing browser storage.
- Food/restaurant photos are from Unsplash URLs in the source and load online; local SVG image fallbacks are provided. Google Fonts are also loaded online.

## Attribution / academic integrity

Project layout and application code should be reviewed and understood before presentation. Photography uses direct image URLs from [Unsplash](https://unsplash.com/); credit the photographers if replacing or redistributing images under different terms. UI icons are from [Lucide](https://lucide.dev/). No pre-built website template is included.

Read `SUBMISSION_CHECKLIST.md` and fill `CONTRIBUTION_STATEMENT.md` truthfully before submission.
