import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    name,
    title,
    greeting,
    bio,
    email,
    social,
    university,
    "profileImageUrl": profileImage.asset->url
  }
`);

export const educationQuery = defineQuery(`
  *[_type == "education"] | order(order asc){
    _id,
    degree,
    field,
    university,
    thesis
  }
`);

export const researchAreasQuery = defineQuery(`
  *[_type == "researchArea"] | order(order asc){
    _id,
    title,
    description,
    icon,
    publications[]->{
      _id,
      title,
      year
    }
  }
`);

export const publicationsQuery = defineQuery(`
  *[_type == "publication"] | order(year desc){
    _id,
    title,
    journal,
    year,
    type,
    doi,
    coAuthors,
    abstract,
    field,
    "pdfUrl": pdfFile.asset->url,
    "coverImageUrl": coverImage.asset->url
  }
`);

export const coursesQuery = defineQuery(`
  *[_type == "course"] | order(order asc){
    _id,
    name,
    level,
    description
  }
`);

export const blogPostsQuery = defineQuery(`
  *[_type == "blogPost"] | order(date desc){
    _id,
    title,
    "slug": slug.current,
    excerpt,
    date,
    category,
    location,
    "coverImageUrl": coverImage.asset->url
  }
`);

export const blogPostBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    date,
    category,
    location,
    content,
    "coverImageUrl": coverImage.asset->url
  }
`);
