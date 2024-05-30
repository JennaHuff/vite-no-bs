#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";

function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file: ${err}`);
        } else {
            console.log(`File ${filePath} deleted successfully.`);
        }
    });
}

function modifyAppTsx() {
    const filePath = "./src/App.tsx";
    fs.readFile(filePath, "utf8", (err) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
        } else {
            const newContent = `function App() {
    return <></>;
}

export default App;`;
            fs.writeFile(filePath, newContent, (err) => {
                if (err) {
                    console.error(`Error writing file: ${err}`);
                } else {
                    console.log(`File ${filePath} modified successfully.`);
                }
            });
        }
    });
}
function modifyIndexCss() {
    const filePath = "./src/index.css";
    fs.readFile(filePath, "utf8", (err) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
        } else {
            const newContent = ``;
            fs.writeFile(filePath, newContent, (err) => {
                if (err) {
                    console.error(`Error emptying index.css file: ${err}`);
                } else {
                    console.log(`File ${filePath} emptied successfully.`);
                }
            });
        }
    });
}

await inquirer
    .prompt([
        {
            name: "removeCss",
            type: "confirm",
            message: "Remove App.css and empty index.css?",
        },
    ])
    .then((answers) => {
        if (answers.removeCss) {
            deleteFile("./src/App.css");
            modifyIndexCss();
        }
    });

modifyAppTsx();
deleteFile("./public/vite.svg");
deleteFile("./src/assets/react.svg");
