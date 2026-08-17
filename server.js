cat > server.js <<'EOF'
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);

    if (urlPath === "/") {
        urlPath = "/index.html";
    }

    const filePath = path.join(__dirname, urlPath);

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
        res.end("Page non trouvée");
        return;
    }

    const ext = path.extname(filePath);
    const types = {
        ".html": "text/html; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".js": "application/javascript; charset=utf-8"
    };

    res.writeHead(200, {
        "Content-Type": types[ext] || "application/octet-stream"
    });

    fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Miracle GB fonctionne sur le port ${PORT}`);
});
EOF

﻿const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
    let filePath = req.url === "/"
        ? path.join(__dirname, "index.html")
        : path.join(__dirname, req.url);

    if (!fs.existsSync(filePath)) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Page non trouvée");
        return;
    }

    const ext = path.extname(filePath);
    const types = {
        ".html": "text/html; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".js": "application/javascript; charset=utf-8"
    };

    res.writeHead(200, {
        "Content-Type": types[ext] || "text/plain; charset=utf-8"
    });

    fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
    console.log(`Miracle GB fonctionne sur http://localhost:${PORT}`);
});

git commit -m "Correction du serveur"git push

