# Tina Web Design

## Goal

Build a classy cinematic portfolio website for Tina, an adult/BDSM model, ready for Vercel deployment.

## Framework

Use Next.js with the App Router. The project should follow React conventions with reusable components, route-level pages, shared data files, and global styling.

## Pages

- `/` shows an 18+ age gate before revealing the homepage.
- `/gallery` shows a premium placeholder gallery that is easy to replace with real photos later.
- `/links` shows official link cards for OnlyFans and Fansly. Links start blank and can be filled later.

## Visual Direction

The design is classy BDSM-inspired cinematic editorial. It should use a dark studio mood, black leather-like texture, deep red accents, soft metallic highlights, confident type, and tasteful non-explicit placeholders.

The tone should be premium and classy, not flashy or crude.

## Navigation

Use a stylish animated hamburger menu based on the approved Spotlight Drawer direction:

- compact hamburger button in the header
- animated transition into a close state
- slide-in panel over the page
- page links for Home, Gallery, and Links
- restrained premium motion
- accessible labels and keyboard-friendly close behavior

## Content

Use placeholder content only. Real images and social URLs will be added later.

Gallery placeholders should be data-driven so Tina can replace image paths, titles, and captions from a single file.

Social links should be data-driven and include OnlyFans and Fansly with empty URLs.

## Age Gate

The homepage should display an 18+ mature-content warning before showing portfolio content. The gate can store local confirmation in `localStorage` so returning visitors do not see it every time.

## Testing And Verification

Use focused tests for the data helpers that control replaceable links and age-gate state. Run the Next.js build before completion.

