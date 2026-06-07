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
      <div style="max-width:600px;margin:40px auto;font-family:sans-serif;border:1px solid #eee;padding:15px;border-radius:10px;">
        
        <h2 style="margin-bottom:20px;">🔥 Hydration Picks</h2>

        ${drinks.map(d => `
          <div style="display:flex;gap:15px;margin-bottom:15px;align-items:center;">
            <img src="${d.image}" width="80" style="border-radius:8px;"/>
            
            <div>
              <p style="margin:0;font-weight:600;">${d.name}</p>
              <strong>${d.price}</strong><br/>

              <a href="${d.link}" target="_blank" style="text-decoration:none;">
                <button style="margin-top:5px;padding:6px 10px;cursor:pointer;">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        `).join("")}

      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", renderWidget);
})();
