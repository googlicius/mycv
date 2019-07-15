const fs = require("fs")
const pdf = require("html-pdf")
const html = fs.readFileSync("./index.html", "utf8")
const options = {
    format: "A4",
    border: {
        top: "1.27cm", // default is 0, units: mm, cm, in, px
        right: "1.27cm",
        bottom: "1.27cm",
        left: "1.27cm",
    },
    footer: {
        height: '1mm',
        contents: {
            default: `
                <div style="text-align: center">
                    <span style="color: #444;">Page {{page}}</span>/<span>{{pages}}</span>
                </div>
            `,
        }
    },
    base: "http://localhost:3000"
}

pdf.create(html, options).toFile("./cv_en.pdf", function(err, res) {
    if (err) return console.log(err)
    console.log(res) // { filename: '/app/businesscard.pdf' }
})
