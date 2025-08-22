const container = document.getElementById("card-container");

async function loadProducts() {
  try {
    const response = await fetch("http://localhost:1337/api/products?populate=*");
    const result = await response.json();

    const products = result.data || [];
    container.innerHTML = "";

    products.forEach((item) => {
      const p = item || {}; // Use item directly

      // Extract description safely
      let description = "";
      if (Array.isArray(p.description) && p.description.length > 0) {
        description = p.description[0]?.children?.[0]?.text || "";
      }

      // Handle image
      let imageUrl = "https://via.placeholder.com/200"; // fallback
      if (p.image?.formats?.medium?.url) {
        imageUrl = "http://localhost:1337" + p.image.formats.medium.url;
      } else if (p.image?.url) {
        imageUrl = "http://localhost:1337" + p.image.url;
      }

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${imageUrl}" alt="${p.name || 'Product'}" />
        <h4>${p.name || 'No Name'}</h4>
        <p class="description">${description}</p>
        <p><strong>Price:</strong> ₹${p.price || '0'}</p>
        <a href="https://wa.me/${p.ownerwhatsappnumber || ''}?text=I want to buy ${encodeURIComponent(p.name || '')}" 
           target="_blank" 
           class="whatsapp-btn">💬 Contact on WhatsApp</a>
      `;

      card.onclick = () => {
        document.querySelectorAll(".card").forEach((c) => {
          if (c !== card) c.classList.remove("expanded");
        });
        card.classList.toggle("expanded");
      };

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    container.innerHTML = "<p>Failed to load products. Please try again later.</p>";
  }
}

loadProducts();
