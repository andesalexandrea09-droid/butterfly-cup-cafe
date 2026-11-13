// Data menu kafe
const menus = [
    {
        name: "Pijat badan",
        category: Treatment",
        price: 50000,
        description: "Pijat badan lengkap.",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
    },
    {
        name: "Hair treatment",
        category: "Treatment",
        price: 350000,
        description: "kramas rambut lengkap dengan perawatan",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600"
    },
    {
        name: "Lulur badan",
        category: "Treatment",
        price: 135000,
        description: "Lulur badan yang dapat menutrisi kulit.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600"
    },
    {
        name: "Treatment full servis",
        category: "Treatment",
        price: 600000,
        description: "Perawatan badan full lengkap berserta hair treatment.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
    },
    {
        name: "spa",
        category: "Relaksi",
        price: 430000,
        description: "Pijit badan diiringi aroma wewangian dan minyak zaitun.",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600"
    },
    {
        name: "Premium treatment and spa",
        category: "Relaksi",
        price: 13000,
        description: "Pijit badan lengkap dengan treatment+full servis.",
        image: "https://images.unsplash.com/photo-1542990253-0b8be8c9a1c5?w=600"
    }
];

// Mengambil elemen HTML
const menuList = document.getElementById("menuList");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const emptyMessage = document.getElementById("emptyMessage");

// Kategori yang sedang dipilih
let selectedCategory = "Semua";

// Menampilkan menu
function displayMenus() {
    const keyword = searchInput.value.toLowerCase();

    const filteredMenus = menus.filter(menu => {
        const matchName = menu.name.toLowerCase().includes(keyword);

        const matchCategory =
            selectedCategory === "Semua" ||
            menu.category === selectedCategory;

        return matchName && matchCategory;
    });

    menuList.innerHTML = "";

    filteredMenus.forEach(menu => {
        const card = document.createElement("div");

        card.className = "menu-card";

        card.innerHTML = `
            <img src="${menu.image}" alt="${menu.name}"
                 onerror="this.style.display='none'">

            <div class="menu-info">
                <h3>${menu.name}</h3>
                <p>${menu.description}</p>
                <div class="price">
                    Rp${menu.price.toLocaleString("id-ID")}
                </div>
            </div>
        `;

        menuList.appendChild(card);
    });

    emptyMessage.style.display =
        filteredMenus.length === 0 ? "block" : "none";
}

// Fitur pencarian
searchInput.addEventListener("input", displayMenus);

// Fitur kategori
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {

        selectedCategory = button.dataset.category;

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        displayMenus();
    });
});

// Menampilkan semua menu saat website dibuka
displayMenus();
