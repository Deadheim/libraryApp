# React + TypeScript + Vite + TanStack/react-query
![React svg](https://github.com/Deadheim/libraryApp/assets/84247019/dbc7d084-fd5f-45bc-b516-d9d42a0383d9)
![typescript-def](https://github.com/Deadheim/libraryApp/assets/84247019/5f0f1283-2bcb-4ce5-a179-fa1fca553e70)
![react-query-logo-1340EA4CE9-seeklogo com](https://github.com/Deadheim/libraryApp/assets/84247019/fcce2277-0b35-4bb0-bca1-16b080fefb30)

It's simple library app with open library api - https://openlibrary.org/dev/docs/api/search

You can clone it and modify it as you like
For correct operation the following packages must be installed::
npm install / yarn add
1) npm create vite@latest + ts / yarn create vite + ts
2) react-router-dom
3) TanStack/react-query
4) axios
5) react-icons

After installing use npm run dev

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
