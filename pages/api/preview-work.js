import { getWorkBySlug } from "lib/api";

export default async function enabledPreview(req, res) {
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: "無効なtokenです。" });
  }

  const work = await getWorkBySlug(req.query.slug, true);

  if (!work) {
    return res.status(401).json({ message: "無効なslugです。" });
  }

  // setPreviewData will set cookies into your browsert
  // __prerender_bypass __next_preview_data
  res.setPreviewData({});
  res.writeHead(307, { Location: `/works/${work.slug}` });
  res.end();
}
