# Namecraft Template

A premium, luxury-editorial HTML/CSS/JS template designed specifically for freelance brand naming and tagline strategists.

## Features

- **11 Unique HTML Pages**: Including two variations of the homepage, dedicated methodology page, and detailed case studies.
- **Dark & Light Mode**: Seamlessly integrated, defaulting to system preference with localStorage persistence.
- **RTL Language Support**: Full Right-to-Left layout support via logical CSS properties and dynamic drawer toggling.
- **No Frameworks**: Built with pure semantic HTML, vanilla CSS (variables, flexbox, grid), and ES6+ JavaScript.
- **Responsive Architecture**: Fluid typograpghy and precise breakpoints from 1440px down to 360px mobile viewports.
- **Animations**: Staggered word reveals and slide-in typography utilizing CSS keyframes for 60fps performance.

## File Structure

```text
namecraft/
├── index.html            (Home 1)
├── home2.html            (Home 2 - Split Layout)
├── work.html             (Portfolio Grid)
├── work-single.html      (Detailed Case Study)
├── services.html         (Service Cards & Pricing)
├── method.html           (Naming Methodology)
├── blog.html             (Insights Grid)
├── blog-single.html      (Long-form Article)
├── contact.html          (Inquiry Form + Calendly)
├── 404.html              (Error Page)
├── coming-soon.html      (Countdown & Newsletter)
├── assets/
│   ├── css/
│   │   ├── style.css     (Main Styles & Variables)
│   │   └── rtl.css       (RTL Specific Overrides)
│   ├── js/
│   │   ├── main.js       (Navigation, Theme, Validation)
│   │   └── work.js       (Portfolio Filtering)
```

## Setup & Customization

1. **Colors & Fonts**: All global variables are located at the top of `assets/css/style.css` in the `:root` block. Modify `--bg-color`, `--text-color`, and `--accent-color`.
2. **Icons**: This template uses Phosphor Icons via CDN. To change an icon, search for `<i class="ph ph-..."></i>` and replace the class based on Phosphor documentation.
3. **Contact Form**: Update the `action` attribute on the form in `contact.html` to point to your endpoint (e.g., Formspree, Netlify Forms).
4. **Images**: Images currently use Unsplash URLs. Replace `src` attributes with your local paths or optimized CDN links.

## Design Aesthetic

- Typography focuses on the contrast between `Cormorant Garamond` (display) and `DM Sans` (body).
- Generous whitespace and a strict 8px baseline grid establish the "luxury-editorial" feel.
- Avoid primary red or electric blue; stick to ink-dark, warm off-white, and refined accents like deep teal.

---

© 2026 Namecraft. All rights reserved.
