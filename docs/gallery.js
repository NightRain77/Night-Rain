// Gallery data
const galleryData = [
  {
    id: 1,
    title: "$4 - Prep bowl",
    category: "glassware",
    image:
      "images/04_yellow_prep_bowl.jpg",
    description: "Yellow blanket flower petals - 2 available"
  },
  {
    id: 2,
    title: "$6 - Small jar",
    category: "glassware",
    image:
      "images/06_hydrangea-green.jpg",
    description: "Green jar with hydrangea petals"
  },
  {
    id: 3,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_blackglass.jpg",
    description: "Black tinted glass with pansies, purple and white verbena, clovers, and little white petals"
  },
  {
    id: 4,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_blanket_large.jpg",
    description: "Yellow blanket flower petals"
  },
  {
    id: 5,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_blanket_medium.jpg",
    description: "Yellow blanket flower petals"
  },
  {
    id: 6,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_blanket_small.jpg",
    description: "Yellow blanket flower petals - 2 available"
  },
  {
    id: 7,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_columbine.jpg",
    description: "Pink and purple columbine petals and purple stars"
  },
  {
    id: 8,
    title: "$10 - Suagr cup",
    category: "glassware",
    image:
      "images/10_columbinesugar.jpg",
    description: "Pink and purple columbine petals"
  },
  {
    id: 9,
    title: "$10 - Creamer cup",
    category: "glassware",
    image:
      "images/10_dianthus.jpg",
    description: "Pink and red dianthus petals"
  },
  {
    id: 10,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_hyacinth1.jpg",
    description: "Pink hyacinth petals"
  },
  {
    id: 11,
    title: "$10 - Small jar",
    category: "glassware",
    image:
      "images/10_mums.jpg",
    description: "Red and white mum petals"
  },
  {
    id: 12,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_pansyglasses.jpg",
    description: "Yellow and purple violas - 2 available"
  },
  {
    id: 13,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_ppansy.jpg",
    description: "Yellow and purple violas"
  },
  {
    id: 14,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_purples.jpg",
    description: "Pale purple petunias - 3 available, only one has the dark purple"
  },
  {
    id: 15,
    title: "$10 - Small glass",
    category: "glassware",
    image:
      "images/10_purplewhite.jpg",
    description: "Purple pansy, white and purple verbena, baby's breath, ferns"
  },
  {
    id: 16,
    title: "$12 - Small jar with lid",
    category: "glassware",
    image:
      "images/12_asiatic_lily.jpg",
    description: "Yellow blanket flower petals and asiatic lily petals"
  },
  {
    id: 17,
    title: "$12 - Small glass",
    category: "glassware",
    image:
      "images/12_bee_glass.jpg",
    description: "Coneflower petals and yellow violas"
  },
  {
    id: 18,
    title: "$12 - Small jar",
    category: "glassware",
    image:
      "images/12_blue_hydrangea.jpg",
    description: "Hydrangea petals and blue stars"
  },
  {
    id: 19,
    title: "$12 - Small jar with lid",
    category: "glassware",
    image:
      "images/12_blueyellow.jpg",
    description: "Blue tinted glass with yellow violas"
  },
  {
    id: 20,
    title: "$12 - Small container with lid",
    category: "glassware",
    image:
      "images/12_daisy_sugar.jpg",
    description: "Daisy petals"
  },
  {
    id: 21,
    title: "$12 - Small jar",
    category: "glassware",
    image:
      "images/12_daisy.jpg",
    description: "Daisy, clover, musk mallow"
  },
  {
    id: 22,
    title: "$12 - Small jar",
    category: "glassware",
    image:
      "images/12_hyacinth.jpg",
    description: "Hyacinth, daisy, and baby's breath"
  },
  {
    id: 23,
    title: "$12 - Bowl",
    category: "glassware",
    image:
      "images/12_marigold_bowl1.jpg",
    description: "Orange marigold petals and a black-eyed susan in the center"
  },
  {
    id: 24,
    title: "$12 - Bowl",
    category: "glassware",
    image:
      "images/12_marigold_bowl2.jpg",
    description: "Orange marigold petals and a black-eyed susan in the center"
  },
  {
    id: 25,
    title: "$12 - Small jar with lid",
    category: "glassware",
    image:
      "images/12_marigold_jar.jpg",
    description: "Orange marigold petals"
  },
  {
    id: 26,
    title: "$12 - Small bowl",
    category: "glassware",
    image:
      "images/12_pansyclover.jpg",
    description: "Pansies and clovers"
  },
  {
    id: 27,
    title: "$12 - Medium glass",
    category: "glassware",
    image:
      "images/12_pansyglass.jpg",
    description: "Yellow and purple pansies"
  },
  {
    id: 28,
    title: "$12 - Tumbler with lid and straw",
    category: "glassware",
    image:
      "images/12_pansytumbler1.jpg",
    description: "Pansies"
  },
  {
    id: 29,
    title: "$12 - Tumbler with lid and straw",
    category: "glassware",
    image:
      "images/12_pansytumbler2.jpg",
    description: "Pansies"
  },
  {
    id: 30,
    title: "$12 - Small jar with lid",
    category: "glassware",
    image:
      "images/12_petuniabowl.jpg",
    description: "Petunias and ferns"
  },
  {
    id: 31,
    title: "$12 - Small jar with lid",
    category: "glassware",
    image:
      "images/12_rosebowl.jpg",
    description: "Rose petals and wildflowers"
  },
  {
    id: 32,
    title: "$12 - Small jar with lid",
    category: "glassware",
    image:
      "images/12_violabowl.jpg",
    description: "Pansies and violas"
  },
  {
    id: 33,
    title: "$12 - Small jar with lid",
    category: "glassware",
    image:
      "images/12_wavybowl.jpg",
    description: "Petunias, dianthus, ferns"
  },
  {
    id: 34,
    title: "$14 - Regular glass",
    category: "glassware",
    image:
      "images/14_blackbee.jpg",
    description: "Black stem, black pansies, yellow rose petals"
  },
  {
    id: 35,
    title: "$14 - Regular glass",
    category: "glassware",
    image:
      "images/14_blackglass.jpg",
    description: "Black tinted glass with purple pansies"
  },
  {
    id: 36,
    title: "$14 - Regular glass",
    category: "glassware",
    image:
      "images/14_blackglass2.jpg",
    description: "Black tinted glass with purple pansies"
  },
  {
    id: 37,
    title: "$14 - Regular glass",
    category: "glassware",
    image:
      "images/14_blackpansy.jpg",
    description: "Black pansies and yellow rose petals"
  },
  {
    id: 38,
    title: "$14 - Regular glass",
    category: "glassware",
    image:
      "images/14_blackviola.jpg",
    description: "Black stem, purple and white violas"
  },
  {
    id: 39,
    title: "$14 - Regular glass",
    category: "glassware",
    image:
      "images/14_bluejay.jpg",
    description: "Yellow pansies"
  },
  {
    id: 40,
    title: "$14 - Regular glass",
    category: "glassware",
    image:
      "images/14_clearbee.jpg",
    description: "Black pansies and yellow rose petals"
  },
  {
    id: 41,
    title: "$14 - Medium jar",
    category: "glassware",
    image:
      "images/14_clematis_jar.jpg",
    description: "Red dianthus, pink clematis, and purple stars"
  },
  {
    id: 42,
    title: "$14 - Short round container",
    category: "glassware",
    image:
      "images/14_columbine.jpg",
    description: "Purple hysacinth, daisy petals, rose petals"
  },
  {
    id: 43,
    title: "$14 - Storage container with lid",
    category: "glassware",
    image:
      "images/14_container.jpg",
    description: "Pansies and violas"
  },
  {
    id: 44,
    title: "$14 - Short round container",
    category: "glassware",
    image:
      "images/14_daffodil_candel.jpg",
    description: "Daffodils, pansies, ferns, clovers, and daisies"
  },
  {
    id: 45,
    title: "$14 - Medium jar",
    category: "glassware",
    image:
      "images/14_daisyandconefloewr.jpg",
    description: "Daisy and coneflower petals"
  },
  {
    id: 46,
    title: "$14 - Short round glass",
    category: "glassware",
    image:
      "images/14_dianthus.jpg",
    description: "Red dianthus petals"
  },
  {
    id: 47,
    title: "$14 - Medium glass",
    category: "glassware",
    image:
      "images/14_greenglass.jpg",
    description: "Green tinted glass, clover, fern, baby's breath, snowball petals"
  },
  {
    id: 48,
    title: "$14 - Round mug",
    category: "glassware",
    image:
      "images/14_mug.jpg",
    description: "Rose petal and fern"
  },
  {
    id: 49,
    title: "$14 - Medium jar",
    category: "glassware",
    image:
      "images/14_muskmallow.jpg",
    description: "Muskmallow, clover, and fern"
  },
  {
    id: 50,
    title: "$14 - Regular glass",
    category: "glassware",
    image:
      "images/14_pale_pansy_glass.jpg",
    description: "Pansies"
  },
  {
    id: 45,
    title: "$14 - Geometric vase",
    category: "glassware",
    image:
      "images/14_starry_coneflower_geometric.jpg",
    description: "Coneflower petals and yellow stars"
  },
  {
    id: 46,
    title: "$15 - Tall glass",
    category: "glassware",
    image:
      "images/15_black_eye_susan_wine.jpg",
    description: "Orange black-eyed susans"
  },
  {
    id: 47,
    title: "$15 - Big round glass",
    category: "glassware",
    image:
      "images/15_blanket_wine.jpg",
    description: "Yellow blanket flower petals"
  },
  {
    id: 48,
    title: "$15 - Big round glass",
    category: "glassware",
    image:
      "images/15_clematis_wine.jpg",
    description: "Pink clematis petals"
  },
  {
    id: 49,
    title: "$15 - Big round glass",
    category: "glassware",
    image:
      "images/15_coneflower_wine.jpg",
    description: "Purple and yellow coneflower petals"
  },
  {
    id: 50,
    title: "$15 - Tall glass",
    category: "glassware",
    image:
      "images/15_daffodil_glass.jpg",
    description: "Daffodil, yellow pansy, clover, fern, and daisy petals"
  },
  {
    id: 51,
    title: "$15 - Big round glass",
    category: "glassware",
    image:
      "images/15_marigold_wine.jpg",
    description: "Orange marigold petals and orange black-eyed susans"
  },
  {
    id: 52,
    title: "$15 - Tall glass",
    category: "glassware",
    image:
      "images/15_pansyglass.jpg",
    description: "Purple and yellow pansies, clovers"
  },
  {
    id: 53,
    title: "$15 - Tall glass",
    category: "glassware",
    image:
      "images/15_pansypurple.jpg",
    description: "Black tinted glass with purple pansies"
  },
  {
    id: 54,
    title: "$15 - Tall glass",
    category: "glassware",
    image:
      "images/15_petunia.jpg",
    description: "Black tinted glass with purple petunias"
  },
  {
    id: 55,
    title: "$15 - Tall glass",
    category: "glassware",
    image:
      "images/15_rhodo.jpg",
    description: "Rhododendron, fern, mums"
  },
  {
    id: 56,
    title: "$15 - Tall glass",
    category: "glassware",
    image:
      "images/15_yellowandorange_glass.jpg",
    description: "Pansies, ferns, variety of other yellow and orange flowers"
  },
  {
    id: 57,
    title: "$15 - Tall glass",
    category: "glassware",
    image:
      "images/15_yellowpansy.jpg",
    description: "Pansies, violas, and clovers"
  },
  {
    id: 58,
    title: "$16 - Tall and wide glass",
    category: "glassware",
    image:
      "images/16_blue_yellow_pansy_glass.jpg",
    description: "Blue and yellow pansies"
  },
  {
    id: 59,
    title: "$16 - Tall glass",
    category: "glassware",
    image:
      "images/16_orangeglass.jpg",
    description: "Orange tinted glass, baby's breath, clover, wildflowers"
  },
  {
    id: 60,
    title: "$16 - Medium vase",
    category: "glassware",
    image:
      "images/16_pansyvase.jpg",
    description: "Yellow and purple violas"
  },
  {
    id: 61,
    title: "$18 - Large storage container with lid",
    category: "glassware",
    image:
      "images/18_bluecontainer.jpg",
    description: "Blue and yellow pansies"
  },
  {
    id: 62,
    title: "$18 - Medium vase",
    category: "glassware",
    image:
      "images/18_clematis_vase.jpg",
    description: "Pink clematis petals, pink and red dianthis, purple stars"
  },
  {
    id: 63,
    title: "$18 - Medium vase",
    category: "glassware",
    image:
      "images/18_daisyvase.jpg",
    description: "Diasy petals"
  },
  {
    id: 64,
    title: "$18 - Medium vase",
    category: "glassware",
    image:
      "images/18_pansyvase.jpg",
    description: "Yellow and purple pansies"
  },
  {
    id: 65,
    title: "$18 - Round vase",
    category: "glassware",
    image:
      "images/18_purple_vase.jpg",
    description: "Purple tinted vase with yellow violas"
  },
  {
    id: 66,
    title: "$18 - Medium vase",
    category: "glassware",
    image:
      "images/18_vase.jpg",
    description: "Yellow and purple pansies"
  },
  {
    id: 67,
    title: "$18 - Large storage container with lid",
    category: "glassware",
    image:
      "images/18_yellowcontainer.jpg",
    description: "Yellow pansies"
  },
  {
    id: 68,
    title: "$20 - Star-shaped dish",
    category: "glassware",
    image:
      "images/20_star.jpg",
    description: "Yellow pansies, yellow blanket flower petals, orange marigold petals"
  },
  {
    id: 69,
    title: "$20 - Large jar",
    category: "glassware",
    image:
      "images/20_starry_mason_jar.jpg",
    description: "Yellow and purple violas, yellow stars"
  },
  {
    id: 70,
    title: "$20 - Wine bottle light - 2 available",
    category: "glassware",
    image:
      "images/20_wine.jpg",
    description: "Green glass with rose petals and ferns"
  },
  {
    id: 71,
    title: "$30 - Round hourglass-shaped container",
    category: "glassware",
    image:
      "images/30_art.jpg",
    description: "Various pansies and violas. Not sure what the original use of this glassware was, but it could be a candle-holder, a container, or an aesthetic piece."
  },
  {
    id: 72,
    title: "$35 - Large pitcher",
    category: "glassware",
    image:
      "images/35_pitcher.jpg",
    description: "Dahlia, coneflower, and blanket flower petals"
  },
  {
    id: 73,
    title: "$20 - iPhone 16 phone case",
    category: "other",
    image:
      "images/phonecase3.jpg",
    description: "Pink and white peony petals and ferns"
  },
  {
    id: 74,
    title: "$20 - iPhone 16 phone case",
    category: "other",
    image:
      "images/phonecase1.jpg",
    description: "Pansies, clovers, and ferns"
  },
];

// DOM elements
const tabs = document.querySelectorAll(".tab");
const galleryContainer = document.getElementById("gallery");

// Function to generate gallery items
function generateGalleryItems(items) {
  galleryContainer.innerHTML = "";

  if (items.length === 0) {
    galleryContainer.innerHTML =
      '<div class="no-results">No images found in this category.</div>';
    return;
  }

  items.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("data-category", item.category);
    galleryItem.style.animationDelay = `${index * 0.1}s`;

    galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="item-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;

    galleryContainer.appendChild(galleryItem);
  });
}

// Function to filter gallery by category
function filterGallery(category) {
  if (category === "all") {
    generateGalleryItems(galleryData);
  } else {
    const filteredItems = galleryData.filter(
      (item) => item.category === category
    );
    generateGalleryItems(filteredItems);
  }
}

// Event listeners for tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    this.classList.add("active");

    // Filter gallery
    const category = this.getAttribute("data-category");
    filterGallery(category);
  });
});

// Initialize gallery with all items
generateGalleryItems(galleryData);

// Back to Top button behavior
const backToTop = document.getElementById('backToTop');
function handleScroll() {
  if (!backToTop) return;
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}
window.addEventListener('scroll', handleScroll);
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
