export default async function handler(req, res) {
  const response = await fetch(
    "https://123fmhwq-dev.preview.zesty.io/footer/"
  );
  const footer = await response.text();
  res.end(footer);
}
