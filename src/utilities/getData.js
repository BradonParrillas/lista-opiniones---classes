const fs = require('fs')
const path = require('path')

const pathJSON = path.join(__dirname, `../data/opiniones.json`);
const data = fs.readFileSync(pathJSON, "utf-8");

export default data;