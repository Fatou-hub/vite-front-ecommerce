# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# React + Vite 💻
To launch the app run this Git command : npm run dev !


# Technical test - E-commerce web app - COMPANY NAME - specifications asked by the company

## The end goal 🛣️
You will create an e-commerce web app.

## Features 🤖
Your web app should include the following features:
👉🏾 list products, on homepage (name, picture and price of each
product)
👉🏾 search products, on homepage
👉🏾 display product, on their own page (name, picture, price and
description)
👉🏾 display cart count, in header
👉🏾list cart products, on cart page (name, picture and price of each
cart product)
👉🏾 add product to cart, on product page
👉🏾 remove product from cart, on cart page

## Bonus ➕➕➕
If you have time, you may want to add this in your code:

Réussir ses tests techniques en développement web • Abeba NGWE 18
- tests
- checkout page
- order page
- suggested products, on the product page
- any feature you find relevant

## Stack 💻
- The React model that we sent you for this test

## Deadline 🕰️
- you've got a week to complete this assignment
