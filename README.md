# 🐾 SmellyCat Contact Page (Angular)

This is a pixel-perfect, responsive **Contact Us** page for the fictional company **SmellyCat**, built with **Angular** and **SCSS**. The design implementation is based on a [MarvelApp prototype](https://marvelapp.com/prototype/dd65afd/screen/86305206), with full support for desktop, tablet, and mobile layouts.

## ✨ Features

- Responsive layout for all devices (mobile/tablet/desktop)
- Styled with SCSS using custom design tokens
- Contact form with fields: Name, Email, City, Postal Code, Address, Message
- Dynamic "Optional" field logic
- Live form submission via [EmailJS](https://dashboard.emailjs.com/)
- Fully aligned with design specs and color palette
- Semantic, accessible HTML structure

## 📦 Tech Stack

- Angular 16+
- SCSS (no external UI frameworks)
- EmailJS for form submission
- Bootstrap Icons for social links

## 🚀 Setup

```bash
npm install
ng serve
```

## 🔧 Configuration

To enable EmailJS:

1. Create an account at [emailjs.com](https://dashboard.emailjs.com/)
2. Create an email service and template
3. Replace the following in `contact.component.ts`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

