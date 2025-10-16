import http from "http";
import { createReadStream } from "fs";
import { stat } from "fs/promises";
import { extname, join, normalize, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = __dirname;
const DEFAULT_FILE = "index.html";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
};

function resolvePath(pathname) {
  const normalized = normalize(pathname).replace(/^\/+/, "");
  const filePath = join(ROOT, normalized);

  if (!filePath.startsWith(ROOT)) {
    return null;
  }

  return filePath;
}

async function getExistingPath(filePath) {
  try {
    const fileStats = await stat(filePath);

    if (fileStats.isDirectory()) {
      return getExistingPath(join(filePath, DEFAULT_FILE));
    }

    return filePath;
  } catch (error) {
    if (error.code === "ENOENT" && !extname(filePath)) {
      return getExistingPath(`${filePath}.html`);
    }

    throw error;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname === "/" ? `/${DEFAULT_FILE}` : url.pathname;

    const potentialPath = resolvePath(pathname);
    if (!potentialPath) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    const filePath = await getExistingPath(potentialPath);
    const extension = extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extension] ?? "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    createReadStream(filePath).pipe(res);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    console.error("Static server error:", error);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal server error");
  }
});

const PORT = Number.parseInt(process.env.PORT ?? "8000", 10);

server.listen(PORT, () => {
  console.log(`Psychology AI Quiz available at http://localhost:${PORT}`);
});
