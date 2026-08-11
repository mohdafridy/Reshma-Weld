import { useEffect } from "react";
import { siteConfig } from "../config/site";

interface SeoProps {
  title: string;
  description: string;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(siteConfig.companyName)
      ? title
      : `${title} | ${siteConfig.companyName}`;
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
  }, [title, description]);

  return null;
}
