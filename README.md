This package removes boilerplate from new React + TS ViteJs projects

run `npx vite-no-bs`from a new Vite React TypeScript project

It deletes files:

-   ./public/vite.svg
-   ./src/assets/react.svg
-   ./src/App.css (if you check Yes when prompted about css files)

It turns ./src/App.tsx into:

```TS
function App() {
    return <></>;
}

export default App;
```

If you check Yes when prompted about css files, it empties ./src/index.css
