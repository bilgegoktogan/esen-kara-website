import { client } from "./client";
import {
  siteSettingsQuery,
  educationQuery,
  researchAreasQuery,
  publicationsQuery,
  coursesQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
} from "./queries";
import {
  siteConfig as fallbackSiteConfig,
  education as fallbackEducation,
  researchAreas as fallbackResearchAreas,
  publications as fallbackPublications,
  courses as fallbackCourses,
  blogPosts as fallbackBlogPosts,
} from "../data";
import type { Publication, ResearchArea, Course } from "../data";

function isSanityConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your_project_id"
  );
}

export async function getSiteSettings() {
  if (!isSanityConfigured()) return fallbackSiteConfig;
  try {
    const data = await client.fetch(siteSettingsQuery);
    return data || fallbackSiteConfig;
  } catch {
    return fallbackSiteConfig;
  }
}

export async function getEducation() {
  if (!isSanityConfigured()) return fallbackEducation;
  try {
    const data = await client.fetch(educationQuery);
    if (!data || data.length === 0) return fallbackEducation;
    return data.map((doc: any) => ({
      degree: doc.degree || { en: "", tr: "" },
      field: doc.field || { en: "", tr: "" },
      university: doc.university || { en: "", tr: "" },
      thesis: doc.thesis,
    }));
  } catch {
    return fallbackEducation;
  }
}

export async function getResearchAreas(): Promise<ResearchArea[]> {
  if (!isSanityConfigured()) return fallbackResearchAreas;
  try {
    const data = await client.fetch(researchAreasQuery);
    if (!data || data.length === 0) return fallbackResearchAreas;
    return data.map((doc: any) => ({
      id: doc._id,
      title: doc.title?.en || "",
      titleTr: doc.title?.tr || "",
      description: doc.description?.en || "",
      descriptionTr: doc.description?.tr || "",
      icon: doc.icon || "",
      publications: (doc.publications || []).map((p: any) => p._id),
    }));
  } catch {
    return fallbackResearchAreas;
  }
}

export async function getPublications(): Promise<Publication[]> {
  if (!isSanityConfigured()) return fallbackPublications;
  try {
    const data = await client.fetch(publicationsQuery);
    if (!data || data.length === 0) return fallbackPublications;
    return data.map((doc: any) => ({
      id: doc._id,
      title: doc.title,
      journal: doc.journal || "",
      year: doc.year,
      type: doc.type,
      doi: doc.doi,
      coAuthors: doc.coAuthors,
      abstract: doc.abstract,
      field: doc.field || [],
      pdfUrl: doc.pdfUrl,
      coverImage: doc.coverImageUrl,
    }));
  } catch {
    return fallbackPublications;
  }
}

export async function getCourses(): Promise<Course[]> {
  if (!isSanityConfigured()) return fallbackCourses;
  try {
    const data = await client.fetch(coursesQuery);
    if (!data || data.length === 0) return fallbackCourses;
    return data.map((doc: any) => ({
      name: doc.name?.en || "",
      level: doc.level,
      description: doc.description?.en || "",
      nameTr: doc.name?.tr,
      descriptionTr: doc.description?.tr,
    }));
  } catch {
    return fallbackCourses;
  }
}

export async function getBlogPosts() {
  if (!isSanityConfigured()) return fallbackBlogPosts;
  try {
    const data = await client.fetch(blogPostsQuery);
    if (!data || data.length === 0) return fallbackBlogPosts;
    return data.map((doc: any) => ({
      slug: doc.slug,
      title: doc.title?.en || "",
      excerpt: doc.excerpt?.en || "",
      date: doc.date,
      category: doc.category,
      coverImage: doc.coverImageUrl || "/images/blog-placeholder.jpg",
      location: doc.location,
      content: "",
      titleLocalized: doc.title,
      excerptLocalized: doc.excerpt,
    }));
  } catch {
    return fallbackBlogPosts;
  }
}

export async function getBlogPostBySlug(slug: string) {
  if (!isSanityConfigured()) {
    return fallbackBlogPosts.find((p) => p.slug === slug) || null;
  }
  try {
    const doc = await client.fetch(blogPostBySlugQuery, { slug });
    if (!doc) return fallbackBlogPosts.find((p) => p.slug === slug) || null;
    return {
      slug: doc.slug,
      title: doc.title?.en || "",
      excerpt: doc.excerpt?.en || "",
      date: doc.date,
      category: doc.category,
      coverImage: doc.coverImageUrl || "/images/blog-placeholder.jpg",
      location: doc.location,
      content: "",
      titleLocalized: doc.title,
      excerptLocalized: doc.excerpt,
      contentPortableText: doc.content,
    };
  } catch {
    return fallbackBlogPosts.find((p) => p.slug === slug) || null;
  }
}
