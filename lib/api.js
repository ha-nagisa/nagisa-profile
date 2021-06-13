import client from "./sanity";
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

export function urlFor(source) {
  return builder.image(source);
}

// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"] | order(date desc) {${Fields}}`);
  return results;
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
      ${Fields}
      content[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}

export async function getAllWorks() {
  const results = await client.fetch(`*[_type == "work"] | order(date desc) {${Fields}}`);
  return results;
}

export async function getWorkBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "work" && slug.current == $slug] {
      ${Fields}
      content[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}
