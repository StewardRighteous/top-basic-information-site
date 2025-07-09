import { createServer } from "node:http";
import { open } from "node:fs/promises";

const server = createServer();

async function showPage(fileName) {
  const page = await open(fileName);
  const data = await page.readFile();
  page.close();
  return data;
}

const htmlContentType = "text/html, charset=utf-8";

server.on("request", async (req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": htmlContentType });
    res.end(await showPage("./index.html"));
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": htmlContentType });
    res.end(await showPage("./about.html"));
  } else if (req.url == "/contact-me") {
    res.writeHead(200, { "content-type": htmlContentType });
    res.end(await showPage("./contact.html"));
  } else {
    res.writeHead(404, { "content-type": htmlContentType });
    res.end(await showPage("./404.html"));
  }
});

server.listen(8080);
