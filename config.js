const { join } = require("path");
const { readFileSync } = require("fs");

/**
 * @param {string} path
 * @returns {{name: string,description: string,launch?: Array<string>,customHTML?: string}}
 */

module.exports = (path) => ({
    name: "lightframe-template-tailwindcss",
    description: "<description here>",
    customHTML: readFileSync(join(path, "index.html")).toString(),
    e404page: readFileSync(join(path, "404.html")).toString()
});