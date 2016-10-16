declare var System: any;
System.config({
    paths: {
        "*": "dist/*",
        "npm:*": "node_modules/*"
    },
    map: {
        "react": "npm:react/dist/react.js",
        "react-dom": "npm:react-dom/dist/react-dom.js",
    },
    transpiler: false
});