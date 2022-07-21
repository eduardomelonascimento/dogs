import { useEffect } from "react";

export default function Head({ title, description, dependencies = [] }) {
  useEffect(() => {
    document.title = `${title} | Dogs`;
    document.querySelector('meta[name="description"]').content = description || '';
  }, dependencies);
}
