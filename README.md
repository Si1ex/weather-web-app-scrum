# Weather app

<!-- [![NextJs](https://img.shields.io/badge/Vue-v3-blue)](https://vuejs.org/)
[![Nuxt](https://img.shields.io/badge/Nuxt-v3.1-blue)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v4.9-blue)](https://www.typescriptlang.org/)
[![Node v19](https://img.shields.io/badge/NodeJS-v19-blue)](https://nodejs.org/en/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) -->

This is Full-Stack Weather Forecast Website. **API-KEY OUTDATED**

Weather icons: https://bas.dev/

Frontend with [NextJs].
Backend with [NodeJs].

![oht2 käyttöliittymä](https://github.com/Si1ex/Si1ex/assets/35920803/5af92ea5-43e7-4dda-b9dc-27dc9c9df23c)

### Table of Contents

- [Documentation](#Documentation)
  - [Tailwind](#tailwind-css)
- [Development](#development)
- [Tech stack](#tech)

---

## Documentation

### Tailwind CSS

How to use tailwind?

See official [documentation](https://tailwindcss.com/).

---

## Development

### How to contribute (ideally)

Please, commit only small pieces of new code at each time. Commit message should tell
what changes were made. Before pushing changes please make sure that your code follows
[prettify] syntax and has not warning or errors.

Work on your own branch and once ready with one set of changes, make pull request to
development branch. It would be good practice that at least one other developer looks
through your commits before merging changes.

---

### Development

```bash

#Change directory

cd weather-app/

# Install required packages

nmp install

# Run frontend, backend, prettier and eslint

npm run dev

```

### Production

```bash

# Build project

npm run build

# Start build

npm run start

```

## Testing

place unit test in ./test folder

To test next js project with Jest

# npm install --save-dev jest @testing-library/react @testing-library/jest-dom

We also need

# npm install --save-dev react-test-renderer

Some components are dependent on Next.js useRouter which cannot be use outside of Next.js application.
Fix this by installng next-router-mock

# npm i next-router-mock

Run all tests with

# npm run test

## Tech

| Service  | Tech         | Version | Explanation                                   |
| -------- | ------------ | ------- | --------------------------------------------- |
| Frontend | React        |         | React is used to build frontend :)            |
| Frontend | Next         |         | Next provides SSR and SEO for web application |
| Frontend | React router |         | client-side navigation                        |
| Frontend | Tailwindcss  |         | CSS framework with pre-defined CSS classes    |
| Frontend | Javascript   |         | JavaScript like language with types           |
| Backend  | NodeJs       |         | Used as base for API and backend services     |
