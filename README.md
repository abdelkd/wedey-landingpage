# Performance Optimization Case Study: Wedey's Landing Page

**Goal:** To analyze and improve Wedey's landing page and reduce loading time as well as reduce any unnecessary resources

**Live Demo of Optimized Version:** [Live Demo]()

**Original Website (For Comparison):** [Original Website](https://wedey.co)

---

## Table of Contents

*   [Project Overview](#project-overview)
*   [Motivation](#motivation)
*   [Performance Analysis of Original Site](#performance-analysis-of-original-site)
*   [Optimization Strategies Implemented](#optimization-strategies-implemented)
*   [Performance Results](#performance-results)
*   [Technologies Used](#technologies-used)
*   [Setup and Running Locally](#setup-and-running-locally)
*   [Disclaimer](#disclaimer)

---

## Project Overview

This project involves the recreation of the landing page structure and core functionality found at https://wedey.co. The original site was identified as having several performance bottlenecks impacting load times and user experience. This rebuild focuses specifically on addressing those issues through various optimization techniques detailed below.

The core aim is **not** to create a pixel-perfect clone for reuse, but to use the original site as a real-world basis for a performance improvement case study.

---

## Motivation

As a developer seeking to gain practical experience, particularly in frontend optimization, I undertook this project to:

1.  **Identify** real-world performance issues on a live website.
2.  **Apply** modern frontend techniques and best practices to address these issues.
3.  **Demonstrate** proficiency in performance analysis, optimization strategies (like image optimization, code splitting, efficient loading, etc.), and core web technologies (HTML, CSS, JavaScript, React, Next.js).
4.  **Quantify** the impact of these optimizations through measurable metrics.
5.  **Build** a tangible project for my portfolio showcasing initiative and problem-solving skills.

---

## Performance Analysis of Original Site

Using tools like [mention tools used, e.g., Google Lighthouse, WebPageTest, Browser DevTools Network Tab], the following performance issues were identified on the original landing page:

* **Excessive number of Requests:** 208 requests which is too much for a landing page
* **Large number of transferred resources:** 5.5 MB of transferred resources is too heavy
* **Unoptimized assets (images, scripts, fonts, css):** 17.8 of unoptimized resources is too heavy for this kind of pages
* **Really Hight DOMContentLoaded:** DOMContentLoaded is around 14.14

---

## Optimization Strategies Implemented

To address the identified issues, the following optimization techniques were implemented in this rebuilt version:

*   **Image Optimization:**
    *   Converted images to modern, efficient formats like [e.g., WebP/AVIF].
    *   Resized images appropriately for their display dimensions.
    *   Implemented responsive images using `<picture>` element or `srcset` attribute.
    *   Utilized [e.g., SVG] for icons and simple graphics where applicable.
*   **Code Optimization:**
    *   **CSS:** Minified CSS; [e.g., Removed unused CSS, implemented Critical CSS inline, loaded non-critical CSS asynchronously].
    *   **JavaScript:** Minified JS; [e.g., Implemented code-splitting to load only necessary JS chunks, deferred/asynced script loading, removed unused code/libraries].
*   **Loading Strategies:**
    *   Implemented lazy loading for below-the-fold images and possibly iframes.
    *   Prioritized loading of critical, above-the-fold content.
    *   [e.g., Preloaded key resources, used font-display strategies for web fonts].
*   **Reducing HTTP Requests:**
    *   [e.g., Bundled CSS and JS files (where appropriate after code-splitting), used CSS sprites or SVGs for icons].
*   **[Add any other specific techniques you used, e.g., implementing a build process with Vite/Webpack, using a performant framework like SolidJS/Svelte if applicable]**

---

## Performance Results

The following table summarizes the performance improvements achieved, measured using [mention tool(s) again, e.g., Google Lighthouse in an incognito window]:

| Metric                     | Original Site Score/Value | Optimized Version Score/Value | Improvement      |
| :------------------------- | :------------------------ | :---------------------------- | :--------------- |
| **Lighthouse Performance** | `[Original Score]`        | `[Your Score]`                | `[+/- Change]`   |
| **First Contentful Paint** | `[Original FCP]`          | `[Your FCP]`                  | `[% Reduction]` |
| **Largest Contentful Paint**| `[Original LCP]`          | `[Your LCP]`                  | `[% Reduction]` |
| **Total Blocking Time**    | `[Original TBT]`          | `[Your TBT]`                  | `[% Reduction]` |
| **Cumulative Layout Shift**| `[Original CLS]`          | `[Your CLS]`                  | `[+/- Change]`   |
| **Total Page Size**        | `[Original Size]`         | `[Your Size]`                 | `[% Reduction]` |
| **HTTP Requests**          | `[Original Count]`        | `[Your Count]`                | `[% Reduction]` |

*(Optional: You can include screenshots of your improved Lighthouse scores or WebPageTest results here)*

---

## Technologies Used

*   HTML5
*   CSS3 ([mention preprocessors like Sass/Less if used])
*   JavaScript (ES6+)
*   [Mention any frameworks/libraries like React, Vue, Svelte, etc., if used]
*   [Mention any build tools like Vite, Webpack, Parcel, if used]
*   [Mention any performance analysis tools like Lighthouse, WebPageTest]
*   [Mention image sources, e.g., Unsplash, Pexels, Placeholder sites]

---

## Setup and Running Locally

To run this project locally:

1.  Clone the repository:
    ```bash
    git clone [Your Repository URL]
    ```
2.  Navigate to the project directory:
    ```bash
    cd [Your Project Directory Name]
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    # or npm start, or yarn dev, etc. (check your package.json)
    ```
5.  Open your browser and navigate to `http://localhost:[Your Port]`

---

## Disclaimer

This project is created for educational purposes only, primarily to demonstrate frontend performance optimization techniques.

*   It is a rebuild inspired by the structure and concept of the original website linked above, but it is **not** affiliated with, endorsed by, or intended to replace the original site.
*   The visual design elements (layout structure) are based on the original site for the purpose of a direct performance comparison baseline.
*   **No original branding, logos, or proprietary copyrighted assets (text, specific images) from the original site have been used.** Publicly available images (e.g., from Unsplash, Pexels) and placeholder text ([e.g., Lorem Ipsum]) have been used where appropriate.
*   The primary focus is on the underlying code structure, asset optimization, and loading strategies implemented to achieve better performance metrics.

---

*Feel free to connect: [Link to your LinkedIn or Portfolio]*