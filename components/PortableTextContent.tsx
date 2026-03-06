"use client";

import { PortableText } from "@portabletext/react";

const components = {
  types: {
    image: ({ value }: any) => (
      <figure className="my-8">
        <img
          src={value.asset?.url || ""}
          alt={value.alt || ""}
          className="rounded-xl w-full"
        />
        {value.caption && (
          <figcaption className="mt-2 text-center text-sm italic" style={{ color: "var(--foreground)", opacity: 0.6 }}>
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-copper pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-copper hover:text-copper-light underline"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableTextContent({ content }: { content: any[] }) {
  if (!content) return null;
  return <PortableText value={content} components={components} />;
}
