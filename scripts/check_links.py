"""Check local href/src references in built pages. Run after `npm run build`."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

root = Path(__file__).resolve().parents[1] / "dist"
missing = []

class References(HTMLParser):
    def __init__(self, page):
        super().__init__()
        self.page = page

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        for attr in ("href", "src", "poster", "data"):
            value = values.get(attr)
            if not value or value.startswith(("#", "mailto:", "data:")):
                continue
            parsed = urlsplit(value)
            if parsed.scheme or parsed.netloc:
                continue
            path = unquote(parsed.path)
            if not path:
                continue
            target = root / path.lstrip("/") if path.startswith("/") else self.page.parent / path
            if target.is_dir():
                target /= "index.html"
            elif not target.suffix:
                target /= "index.html"
            if not target.exists():
                missing.append((self.page.relative_to(root), value))

for page in root.rglob("*.html"):
    References(page).feed(page.read_text(encoding="utf-8"))

if missing:
    for page, value in missing:
        print(f"MISSING: {page}: {value}")
    raise SystemExit(1)
print(f"Checked local links and assets in {len(list(root.rglob('*.html')))} generated pages.")
