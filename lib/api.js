import client, { previewClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const Fields = `
  title,
  summary,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`;

const builder = imageUrlBuilder(client);
const getClient = (preview) => (preview ? previewClient : client);

export function urlFor(source) {
  return builder.image(source);
}

// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"] | order(date desc) {${Fields}}`);
  return results;
}

export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
      ${Fields}
      content[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));

  return result;
}

export async function getPaginatedBlogs({ offset = 0, date = "desc" } = { offset: 0, date: "desc" }) {
  const results = await client.fetch(`*[_type == "blog"] | order(date ${date}) {${Fields}}[${offset}...${offset + 6}]`);
  return results;
}

export async function getAllWorks() {
  const results = await client.fetch(`*[_type == "work"] | order(date desc) {${Fields}}`);
  return results;
}

export async function getWorkBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(
      `*[_type == "work" && slug.current == $slug] {
      ${Fields}
      content[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));

  return result;
}

export async function getPaginatedWorks({ offset = 0, date = "desc" } = { offset: 0, date: "desc" }) {
  const results = await client.fetch(`*[_type == "work"] | order(date ${date}) {${Fields}}[${offset}...${offset + 6}]`);
  return results;
}
