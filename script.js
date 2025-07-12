const products = [
  {
    name: "Ghararas",
    image: "https://seemagujral.com/cdn/shop/files/3_92ebd1fa-c245-418b-979f-7096a795fc16_900x.png?v=1733393689",
    description: "Elegant handcrafted Ghararas made with premium embroidery.",
  },
  {
    name: "Lehengas",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6KjwJXrgCGa6SQhDBZFjtURgBpEvemP3S6-KlGy9_2lEzqSBG-zezhg6CNVKBr9j4aeOm0Sg66LLmEt8UedCbc1QxWXm_ZrB4dEMywyJD",
    description: "Luxurious bridal Lehengas designed for your special day.",
  },
  {
    name: "Sherwanis",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlD5XoO2vnQrgQlQjMdHzPc0WoDCE0LU-aA&s",
    description: "Classic Sherwanis showcasing royal aesthetics.",
  },
  {
    name: "Kurtas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7nfHLpA-SkjRO-Prs4MrWxbDPRGapp-f2Q&s",
    description: "Handcrafted Kurtas with rich patterns and elegance.",
  },
  {
    name: "Designer Suits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9EAMOgAyESken8VldcP6xCLJSZAa-l9pUQ&s",
    description: "Designer suits tailored with intricate hand embroidery.",
  },
  {
    name: "Calligraphy Frames",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAYk4Zh4pMtIqqaw_CR5iVPZ2fKXsk0zhaA&s",
    description: "Decorative calligraphy wall frames with intricate threads.",
  },
];

const container = document.getElementById("card-container");

products.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h4>${p.name}</h4>
    <p class="description">${p.description}</p>
  `;

  card.onclick = () => {
    document.querySelectorAll(".card").forEach(c => {
      if (c !== card) c.classList.remove("expanded");
    });

    card.classList.toggle("expanded");
  };

  container.appendChild(card);
});
