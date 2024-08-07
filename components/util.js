"use client";

// Lazy loading

export function initLazyLoading() {
  const changeUrls = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const url = target.getAttribute("data-url");
        target.src = url;

        observer.unobserve(target);
      }
    });
  };

  const intersectionObserver = new IntersectionObserver(changeUrls, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  document.querySelectorAll("[data-url]").forEach((img) => {
    intersectionObserver.observe(img);
  });
}
