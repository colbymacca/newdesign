
// 1) Inject CSS for the CTA (hover + active colours included)
(function addPricingCtaStyles(){
  const css = `
    .pricing-cta{
      background-color:#1868db;
      color:#fff;
      padding:12px 24px;
      border-radius:999px;
      font-weight:700;
      font-size:14px;
      text-decoration:none;
      display:inline-block;
      box-shadow:0 4px 10px rgba(0,0,0,.5);
      transition: background-color .2s ease, box-shadow .2s ease, transform .2s ease;
    }
    .pricing-cta:hover{
      background-color:#001f3f !important; /* hover */
      box-shadow:0 6px 14px rgba(0,0,0,.4);
      transform: translateY(-2px);
    }
    .pricing-cta:active{
      background-color:#0b4393 !important; /* active */
      transform: translateY(0) scale(.99);
      box-shadow:0 4px 10px rgba(0,0,0,.5);
    }
    .pricing-cta:focus-visible{
      outline:3px solid #99b8f3;
      outline-offset:2px;
    }
  `;
  const style = document.createElement('style');
  style.id = 'pricing-cta-styles';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();

// 2) Add a "Pricing" button to each .pricing-box
document.addEventListener('DOMContentLoaded', () => {
  const links = {
    'Website Design': 'pricing.html#website-design',
    'Logo Design':    'pricing.html#logo-design',
    'Google Ads':     'pricing.html#google-ads',
    'SEO':            'pricing.html#seo'
  };

  document.querySelectorAll('.pricing-box').forEach(box => {
    const titleEl = box.querySelector('h3');
    const title   = titleEl ? titleEl.textContent.trim() : '';
    const btn     = document.createElement('a');

    btn.textContent = 'Pricing';
    btn.href = links[title] || 'pricing.html';
    btn.className = 'pricing-cta';

    // spacing in the card
    btn.style.marginTop = '12px';

    box.appendChild(btn);
  });
});



