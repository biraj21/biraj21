const fs = require("fs/promises")
const path = require("path");
const Eta = require("eta");

Eta.configure({
    views: path.join(__dirname, "views"),
    rmWhitespace: true
});

(async function () {
    try {
        let data = await fs.readFile("./views/index.html", "utf-8");
        await fs.writeFile("./index.html", Eta.render(data));
    } catch (err) {
        console.log(err);
    }
})();