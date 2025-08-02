// header.js — builds the header and adds shrink-on-scroll
document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.id = "mainHeader";
  header.style.position = "fixed";
  header.style.top = "20px";
  header.style.left = "calc(50% - 600px)";
  header.style.right = "calc(50% - 600px)";
  header.style.maxWidth = "1200px";
  header.style.height = "60px";
  header.style.backgroundColor = "white";
  header.style.borderRadius = "14px";
  header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between";
  header.style.padding = "0 30px";
  header.style.zIndex = "1000";
  header.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
  header.style.transition = "transform 0.3s ease, height 0.3s ease";

  // Logo
  const logo = document.createElement("div");
  const logoImg = document.createElement("img");
  logoImg.src = "logo.jpg";
  logoImg.alt = "Logo";
  logoImg.style.height = "34px";
  logoImg.style.cursor = "pointer";
  logo.appendChild(logoImg);

  // Navigation
  const nav = document.createElement("nav");
  nav.style.display = "flex";
  nav.style.gap = "24px";

  const navItems = [
    { text: "Web Design", href: "webdesign.html" },
    { text: "Logo Design", href: "logodesign.html" },
    { text: "SEO", href: "seo.html" },
    { text: "Google Ads", href: "googleads.html" },
    { text: "Pricing", href: "pricing.html" },
    { text: "Blog", href: "blog.html" }
    
  ];

  navItems.forEach(({ text, href }) => {
    const link = document.createElement("a");
    link.textContent = text;
    link.href = href;
    link.className = "nav-link";
    link.style.color = "#000";
    link.style.textDecoration = "none";
    link.style.fontWeight = "600";
    link.style.fontSize = "18px";
    link.style.transition = "color 0.2s ease";
    link.onmouseenter = () => (link.style.color = "#1868db");
    link.onmouseleave = () => (link.style.color = "#000");
    nav.appendChild(link);
  });

  // CTA Button
  const cta = document.createElement("a");
  cta.textContent = "Get Started";
  cta.href = "contactpage.html";
  cta.style.backgroundColor = "#1868db";
  cta.style.color = "white";
  cta.style.padding = "12px 24px";
  cta.style.borderRadius = "999px";
  cta.style.fontWeight = "700";
  cta.style.fontSize = "14px";
  cta.style.textDecoration = "none";
  cta.style.transition = "all 0.3s ease";
  cta.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";
  cta.style.display = "inline-block";

  // CTA hover
  cta.onmouseenter = () => {
    cta.style.backgroundColor = "#003366";
    cta.style.boxShadow = "0 8px 20px rgba(0, 51, 102, 0.3)";
    cta.style.transform = "translateY(-2px)";
  };
  cta.onmouseleave = () => {
    cta.style.backgroundColor = "#1868db";
    cta.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";
    cta.style.transform = "translateY(0)";
  };

  header.appendChild(logo);
  header.appendChild(nav);
  header.appendChild(cta);
  document.body.prepend(header);

  // Shrink-on-scroll
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    lastScrollY = window.scrollY;
  });
});
// Adjust hero-section padding dynamically based on header height
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("mainHeader");
  const heroSection = document.querySelector(".hero-section");

  if (header && heroSection) {
    const headerHeight = header.offsetHeight + -60; // 40 = extra space (20px top + 20px buffer)
    heroSection.style.paddingTop = `${headerHeight}px`;
  }
});
















