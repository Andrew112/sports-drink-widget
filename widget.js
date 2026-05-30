(function () {
  const drinks = [
    {
      name: "Electro Boost",
      price: "$2.99",
      link: "https://your-affiliate-link.com/product1",
      image: "https://via.placeholder.com/120"
    },
    {
      name: "Pro Hydration Max",
      price: "$3.49",
      link: "https://your-affiliate-link.com/product2",
      image: "https://via.placeholder.com/120"
    }
  ];

  function renderWidget() {
    const container = document.getElementById("sports-drink-widget");
    if (!container) return;

    container.innerHTML = `
      <div style="font-family:sans-serif;border:1px solid #eee;padding:10px;">
        <h3>🔥 Hydration Picks</h3>
        ${drinks.map(d => `
          <div style="margin-bottom:10px;">
            <img src="${d.image}" width="80"/>
            <p>${d.name}</p>
            <strong>${d.price}</strong><br/>
            <a href="${d.link}" target="_blank">
              <button>Buy Now</button>
            </a>
          </div>
        `).join("")}
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", renderWidget);
})();
