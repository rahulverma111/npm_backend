const handlebars = require("handlebars");
const fs = require("fs");
exports.handlebarsTemplet = async (req, res) => {
  const data = {
    name: "rahul",
    HeaderImg:
      "https://radical-production.imgix.net/website/Finezzy_Logo_With_Tagline.svg",
  };

  const filePath = "./views/templet1.handlebars";
  handlebars.registerPartial(
    "Footer",
    fs.readFileSync("./views/partials/Footer.handlebars", "utf8")
  );
  handlebars.registerPartial(
    "Header",
    fs.readFileSync("./views/partials/Header.handlebars", "utf8")
  );
  const template = handlebars.compile(fs.readFileSync(filePath, "utf8"));

  const html = template(data);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
};
