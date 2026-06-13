import { absoluteUrl, site } from "./seo";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type FAQ = {
  question: string;
  answer: string;
};

export function makeBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href ?? "/")
    }))
  };
}

export function makeWebPageSchema({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    }
  };
}

export function makeArticleSchema({
  title,
  description,
  path,
  updatedAt,
  category
}: {
  title: string;
  description: string;
  path: string;
  updatedAt: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    articleSection: category,
    dateModified: updatedAt,
    datePublished: updatedAt,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/favicon.svg")
      }
    }
  };
}

export function makeFAQPageSchema(faqs: FAQ[] = []) {
  if (!faqs.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
