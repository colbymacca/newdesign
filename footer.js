document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "#f9f9f9";
  footer.style.borderTopLeftRadius = "16px";
  footer.style.borderTopRightRadius = "16px";
  footer.style.boxShadow = "0 -4px 12px rgba(0,0,0,0.1)";
  footer.style.padding = "40px";
  footer.style.marginTop = "100px";
  footer.style.maxWidth = "1200px";
  footer.style.marginLeft = "auto";
  footer.style.marginRight = "auto";
  footer.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "space-between";
  container.style.gap = "40px";

  // Left: Logo and CTA
  const left = document.createElement("div");
  left.style.flex = "1 1 250px";

  const logoImg = document.createElement("img");
  logoImg.src = "logo.jpg";
  logoImg.alt = "Logo";
  logoImg.style.height = "40px";
  logoImg.style.marginBottom = "16px";

  const tagline = document.createElement("p");
  tagline.textContent = "We believe all businesses deserve a high-standard of service. Let us make you something amazing.";
  tagline.style.fontSize = "14px";
  tagline.style.color = "#333";
  tagline.style.marginBottom = "20px";

  const cta = document.createElement("a");
  cta.textContent = "Get Started";
  cta.href = "contact.html";
  cta.style.backgroundColor = "#1868db";
  cta.style.color = "white";
  cta.style.padding = "12px 22px";
  cta.style.borderRadius = "999px";
  cta.style.fontWeight = "600";
  cta.style.fontSize = "14px";
  cta.style.textDecoration = "none";
  cta.style.display = "inline-block";
  cta.style.transition = "background-color 0.3s ease";

  cta.addEventListener("mouseenter", () => {
    cta.style.backgroundColor = "#003366";
  });
  cta.addEventListener("mouseleave", () => {
    cta.style.backgroundColor = "#1868db";
  });

// Trust indicators
const trustSection = document.createElement("div");
trustSection.style.marginTop = "30px";
trustSection.style.display = "flex";
trustSection.style.flexDirection = "column";
trustSection.style.gap = "6px"; // tighter gap

// Google reviews + Ahrefs inline
const reviewGroup = document.createElement("div");
reviewGroup.style.display = "flex";
reviewGroup.style.alignItems = "center";
reviewGroup.style.flexWrap = "wrap";
reviewGroup.style.gap = "12px";

// Google reviews
const googleReview = document.createElement("div");
googleReview.style.display = "flex";
googleReview.style.alignItems = "center";
googleReview.style.gap = "6px";

const googleLogo = document.createElement("img");
googleLogo.src = "icons8-google.svg";
googleLogo.alt = "Google";
googleLogo.style.height = "20px";

const starsText = document.createElement("span");
starsText.textContent = "★★★★★";
starsText.style.color = "#FFD700";
starsText.style.fontSize = "16px";
starsText.style.letterSpacing = "1px";

const reviewText = document.createElement("span");
reviewText.textContent = "5.0 Rating on Google";
reviewText.style.fontSize = "13px";
reviewText.style.color = "#444";

googleReview.appendChild(googleLogo);
googleReview.appendChild(starsText);
googleReview.appendChild(reviewText);

// Ahrefs Certified (inline next to reviews)
const ahrefsCert = document.createElement("img");
ahrefsCert.src = "Ahrefs-Logo-Inverted-on-Black.svg";
ahrefsCert.alt = "Ahrefs Certified";
ahrefsCert.style.height = "24px";
ahrefsCert.style.objectFit = "contain";

reviewGroup.appendChild(googleReview);
reviewGroup.appendChild(ahrefsCert);
trustSection.appendChild(reviewGroup);

  left.appendChild(logoImg);
  left.appendChild(tagline);
  left.appendChild(cta);
  left.appendChild(trustSection);

  // Reusable list creator
  function createLinkList(title, items) {
    const section = document.createElement("div");

    const heading = document.createElement("h4");
    heading.textContent = title;
    heading.style.fontSize = "14px";
    heading.style.fontWeight = "700";
    heading.style.marginBottom = "10px";
    section.appendChild(heading);

    items.forEach(item => {
      const link = document.createElement("a");
      link.textContent = item.text;
      link.href = item.href;
      link.style.display = "block";
      link.style.marginBottom = "6px";
      link.style.fontSize = "14px";
      link.style.color = "#333";
      link.style.textDecoration = "none";
      section.appendChild(link);
    });

    return section;
  }

  // Columns
  const middleLeft = document.createElement("div");
  middleLeft.style.flex = "1 1 150px";

  const middleCenter = document.createElement("div");
  middleCenter.style.flex = "1 1 200px";

  const middleRight = document.createElement("div");
  middleRight.style.flex = "1 1 150px";

  const services = [
    { text: "Web Design", href: "#" },
    { text: "Logo Design", href: "#" },
    { text: "SEO", href: "#" },
    { text: "Google Ads", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Blog", href: "#" }
  ];

  const company = [
    { text: "About Us", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Terms & Conditions", href: "#" }
  ];

  const contact = [
    { text: "adam@eastcoastmarketingandseo.com", href: "mailto:adam@eastcoastmarketingandseo.com" },
    { text: "0433 260 850", href: "tel:0433260850" },
    { text: "ABN: 11 941 868 026", href: "https://abr.business.gov.au/ABN/View?id=11941868026" }
  ];

  const locations = [
    { text: "Newcastle", href: "https://newcastle.nsw.gov.au/" },
    { text: "Sydney", href: "https://www.cityofsydney.nsw.gov.au/" },
    { text: "Melbourne", href: "https://www.melbourne.vic.gov.au/" },
    { text: "Perth", href: "https://perth.wa.gov.au/" },
    { text: "Brisbane", href: "https://www.brisbane.qld.gov.au/" },
    { text: "Adelaide", href: "https://www.cityofadelaide.com.au/" },
    { text: "Sunshine Coast", href: "https://www.sunshinecoast.qld.gov.au/" },
    { text: "Penrith", href: "https://www.penrithcity.nsw.gov.au/" },
    { text: "Australia Wide", href: "#" }
  ];

  middleLeft.appendChild(createLinkList("Services", services));
  middleCenter.appendChild(createLinkList("Company", company));
  middleCenter.appendChild(document.createElement("br"));
  middleCenter.appendChild(createLinkList("Contact", contact));
  middleRight.appendChild(createLinkList("Locations", locations));

  container.appendChild(left);
  container.appendChild(middleLeft);
  container.appendChild(middleCenter);
  container.appendChild(middleRight);
  footer.appendChild(container);
  document.body.appendChild(footer);
});





