# oil-road

A React 18 and TypeScript web application built with Vite, React Router, and SWR. Application source is in `src/` and static files are in `public/`.

## Local setup

Use Node.js and pnpm with the checked-in `pnpm-lock.yaml`.

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite.

- `pnpm build`: TypeScript check followed by Vite build
- `pnpm preview`: preview the generated build
- `pnpm lint`: ESLint with zero warnings allowed

## Configuration

The repository contains a `.env` setting named `VITE_NGC`. Confirm the intended development value and provider restrictions before use. Vite client configuration is browser-visible when referenced by the application; do not store server secrets there. No credential values belong in this README.

`tsconfig.for.windows.json` is also present, while the current build script invokes the normal `tsc` configuration.

## Original Vite reference

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
