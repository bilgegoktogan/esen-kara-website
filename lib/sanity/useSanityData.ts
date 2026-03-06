"use client";

import { useState, useEffect } from "react";
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
  siteConfig as defaultSiteConfig,
  education as defaultEducation,
  researchAreas as defaultResearchAreas,
  publications as defaultPublications,
  courses as defaultCourses,
  blogPosts as defaultBlogPosts,
} from "../data";
import type { Publication, ResearchArea, BlogPost } from "../data";

export function useSiteSettings() {
  const [data, setData] = useState(defaultSiteConfig);
  useEffect(() => {
    client.fetch(siteSettingsQuery).then((result) => {
      if (result) setData({ ...defaultSiteConfig, ...result });
    }).catch(() => {});
  }, []);
  return data;
}

export function useEducation() {
  const [data, setData] = useState(defaultEducation);
  useEffect(() => {
    client.fetch(educationQuery).then((result) => {
      if (result && result.length > 0) {
        setData(result.map((doc: any) => ({
          degree: doc.degree || { en: "", tr: "" },
          field: doc.field || { en: "", tr: "" },
          university: doc.university || { en: "", tr: "" },
          thesis: doc.thesis,
        })));
      }
    }).catch(() => {});
  }, []);
  return data;
}

export function useResearchAreas() {
  const [data, setData] = useState<ResearchArea[]>(defaultResearchAreas);
  useEffect(() => {
    client.fetch(researchAreasQuery).then((result) => {
      if (result && result.length > 0) {
        setData(result.map((doc: any) => ({
          id: doc._id,
          title: doc.title?.en || "",
          titleTr: doc.title?.tr || "",
          description: doc.description?.en || "",
          descriptionTr: doc.description?.tr || "",
          icon: doc.icon || "",
          publications: (doc.publications || []).map((p: any) => p._id),
        })));
      }
    }).catch(() => {});
  }, []);
  return data;
}

export function usePublications() {
  const [data, setData] = useState<Publication[]>(defaultPublications);
  useEffect(() => {
    client.fetch(publicationsQuery).then((result) => {
      if (result && result.length > 0) {
        setData(result.map((doc: any) => ({
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
        })));
      }
    }).catch(() => {});
  }, []);
  return data;
}

export function useCourses() {
  const [data, setData] = useState(defaultCourses);
  useEffect(() => {
    client.fetch(coursesQuery).then((result) => {
      if (result && result.length > 0) {
        setData(result.map((doc: any) => ({
          name: doc.name?.en || "",
          level: doc.level,
          description: doc.description?.en || "",
        })));
      }
    }).catch(() => {});
  }, []);
  return data;
}

export function useBlogPosts() {
  const [data, setData] = useState<BlogPost[]>(defaultBlogPosts);
  useEffect(() => {
    client.fetch(blogPostsQuery).then((result) => {
      if (result && result.length > 0) {
        setData(result.map((doc: any) => ({
          slug: doc.slug,
          title: doc.title?.en || "",
          excerpt: doc.excerpt?.en || "",
          date: doc.date,
          category: doc.category,
          coverImage: doc.coverImageUrl || "/images/blog-placeholder.jpg",
          location: doc.location,
          content: "",
        })));
      }
    }).catch(() => {});
  }, []);
  return data;
}

export function useBlogPost(slug: string) {
  const fallback = defaultBlogPosts.find((p) => p.slug === slug) || null;
  const [data, setData] = useState<BlogPost | null>(fallback);
  useEffect(() => {
    client.fetch(blogPostBySlugQuery, { slug }).then((doc) => {
      if (doc) {
        setData({
          slug: doc.slug,
          title: doc.title?.en || "",
          excerpt: doc.excerpt?.en || "",
          date: doc.date,
          category: doc.category,
          coverImage: doc.coverImageUrl || "/images/blog-placeholder.jpg",
          location: doc.location,
          content: doc.content?.en ? "__PORTABLE_TEXT__" : "",
          // Store portable text content for rendering
          ...(doc.content ? { contentPortableText: doc.content } : {}),
        } as any);
      }
    }).catch(() => {});
  }, [slug]);
  return data;
}
