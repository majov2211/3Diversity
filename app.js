/**
 * DIMENSION LAB - TIENDA ONLINE DE IMPRESIÓN 3D
 * Lógica e Interactividad Integral
 * Cumplimiento con Estilo.md y MD doc.md
 */

// ==========================================================================
// 1. CATÁLOGO DE PRODUCTOS (6 CATEGORÍAS SEGÚN MD DOC.MD)
// ==========================================================================
const PRODUCTS_DATA = [
  // ==========================================================================
  // COLECCIÓN: ARTE (Media/Portafolio/Art)
  // ==========================================================================
  {
    id: 1,
    name: "Diorama Escultórico \"This is Sparta\"",
    category: "arte",
    categoryName: "Arte",
    secondaryCategory: ["juegos"],
    material: "Resina",
    materialLabel: "Resina Fotopolimérica 8K",
    price: 115000,
    priceUsd: "~$28 USD",
    rating: 5,
    reviews: 42,
    tag: "PIEZA DE AUTOR",
    desc: "Escena escultórica hiperdetallada de Leónidas en el pozo de las Termópilas. Impresión micrónica en Resina 8K con acabado artesanal.",
    image: "Media/Portafolio/Art/Spartan 0001.webp",
    hoverImage: "Media/Portafolio/Art/Spartan 0002.webp"
  },
  {
    id: 2,
    name: "Lámpara Esférica Floral con Pedestal",
    category: "arte",
    categoryName: "Arte",
    secondaryCategory: ["casa"],
    material: "PLA",
    materialLabel: "PLA Translúcido Difusor",
    price: 98000,
    priceUsd: "~$24 USD",
    rating: 4.9,
    reviews: 35,
    tag: "ARTE & HOGAR",
    desc: "Lámpara de ambiente con globo difusor esférico impreso en 3D sobre pedestal octagonal decorativo con motivos botánicos orientales.",
    image: "Media/Portafolio/Art/Lamp 0001.webp",
    hoverImage: "Media/Portafolio/Art/Lamp 0002.webp"
  },
  {
    id: 3,
    name: "Diorama Táctico Operadores \"Special Ops\"",
    category: "arte",
    categoryName: "Arte",
    secondaryCategory: ["juegos"],
    material: "Resina",
    materialLabel: "Resina Gris Alta Definición",
    price: 89000,
    priceUsd: "~$22 USD",
    rating: 5,
    reviews: 29,
    tag: "COLECCIÓN TÁCTICA",
    desc: "Escena de asalto táctico con tres soldados de élite equipados con fusiles silenciados, cascos con visión nocturna y escalera de borde para estanterías.",
    image: "Media/Portafolio/Art/Sol 0001.webp",
    hoverImage: "Media/Portafolio/Art/Sol 0002.webp"
  },
  {
    id: 4,
    name: "Miniaturas Erizos Decorativos para Vaso",
    category: "arte",
    categoryName: "Arte",
    secondaryCategory: ["variados"],
    material: "Resina",
    materialLabel: "Resina Micro-detalle",
    price: 28000,
    priceUsd: "~$7 USD",
    rating: 4.8,
    reviews: 58,
    tag: "MINI ESCULTURA",
    desc: "Set de adorables erizos miniatura pintados a mano diseñados para reposar en el orificio de tapas de café, bordes de vasos o monitores de escritorio.",
    image: "Media/Portafolio/Art/Eriz 0001.webp",
    hoverImage: "Media/Portafolio/Art/Eriz 0002.webp"
  },

  // ==========================================================================
  // COLECCIÓN: MODA & ACCESORIOS (Media/Portafolio/Moda)
  // ==========================================================================
  {
    id: 5,
    name: "Bolso Corazón Anatómico Escultural",
    category: "moda",
    categoryName: "Moda",
    secondaryCategory: ["variados"],
    material: "PETG",
    materialLabel: "PETG Negro Mate & Cadena",
    price: 145000,
    priceUsd: "~$36 USD",
    rating: 5,
    reviews: 52,
    tag: "DISEÑO EXCLUSIVO",
    desc: "Bolso rígido de alta costura con forma de corazón biológico en acabado satinado mate y correa eslabonada metálica. Una declaración de estilo.",
    image: "Media/Portafolio/Moda/Bolso 0001.webp",
    hoverImage: "Media/Portafolio/Moda/Bolso 0002.webp"
  },
  {
    id: 6,
    name: "Mini Tote Bag Perforado Bogg Style",
    category: "moda",
    categoryName: "Moda",
    secondaryCategory: ["variados"],
    material: "PLA",
    materialLabel: "PLA+ Flexible / TPU",
    price: 65000,
    priceUsd: "~$16 USD",
    rating: 4.9,
    reviews: 38,
    tag: "TENDENCIA MODA",
    desc: "Mini bolso tote playero y urbano con patrón perforado en colores vibrantes, asas ergonómicas móviles y remaches personalizados.",
    image: "Media/Portafolio/Moda/tote bag 0001.webp",
    hoverImage: "Media/Portafolio/Moda/tote bag 0002.webp"
  },
  {
    id: 7,
    name: "Ear Cuff Dragón Alado Escultural",
    category: "moda",
    categoryName: "Moda",
    secondaryCategory: ["joyas"],
    material: "Resina",
    materialLabel: "Resina Tough Flexible",
    price: 38000,
    priceUsd: "~$9.5 USD",
    rating: 5,
    reviews: 74,
    tag: "TOP VENTAS",
    desc: "Pendiente ergonómico que envuelve y abraza la oreja sin necesidad de perforación. Diseño de dragón con alas desplegadas y escamas definidas.",
    image: "Media/Portafolio/Moda/Pendiente oreja dragon 0001.webp",
    hoverImage: "Media/Portafolio/Moda/Pendiente oreja dragon 0002.webp"
  },
  {
    id: 8,
    name: "Dije Colgante Hoja Etérea Calada",
    category: "moda",
    categoryName: "Moda",
    secondaryCategory: ["joyas"],
    material: "PLA",
    materialLabel: "PLA Carbón Mate",
    price: 32000,
    priceUsd: "~$8 USD",
    rating: 4.9,
    reviews: 45,
    tag: "MODA & JOYERÍA",
    desc: "Colgante botánico con nervaduras orgánicas caladas, acabado negro mate texturizado y peso pluma de 6 gramos con cadena.",
    image: "Media/Portafolio/Moda/Pendiente hoja eterea 0001.webp",
    hoverImage: "Media/Portafolio/Moda/Pendiente hoja eterea 0002.webp"
  },
  {
    id: 9,
    name: "Aretes Florales Margarita Tejida",
    category: "moda",
    categoryName: "Moda",
    secondaryCategory: ["joyas"],
    material: "PLA",
    materialLabel: "PLA Bicolor Amarillo & Blanco",
    price: 28000,
    priceUsd: "~$7 USD",
    rating: 4.8,
    reviews: 39,
    tag: "DISEÑO ARTESANAL",
    desc: "Aretes colgantes con corazón superior amarillo y pétalos con textura entrelazada tipo crochet impresos en 3D.",
    image: "Media/Portafolio/Moda/Aretes Margarita Tejidos 0001.webp",
    hoverImage: "Media/Portafolio/Moda/Aretes Margarita Tejidos 0002.webp"
  },
  {
    id: 10,
    name: "Aretes Filigrana Mandala Tridimensional",
    category: "moda",
    categoryName: "Moda",
    secondaryCategory: ["joyas"],
    material: "PLA",
    materialLabel: "PLA Multicapa Azul Índigo",
    price: 34000,
    priceUsd: "~$8.5 USD",
    rating: 5,
    reviews: 61,
    tag: "GEOMETRÍA SAGRADA",
    desc: "Aretes de mandala concéntrico con micro-relieves de alta definición inspirados en la filigrana oriental sobre tarjeta exhibidora.",
    image: "Media/Portafolio/Moda/Pendiente de Mandala 0001.webp",
    hoverImage: "Media/Portafolio/Moda/Pendiente de Mandala 0002.webp"
  },
  {
    id: 11,
    name: "Aretes Florales Plisados de Autor",
    category: "moda",
    categoryName: "Moda",
    secondaryCategory: ["joyas"],
    material: "PLA",
    materialLabel: "PLA Silk Crema & Dorado",
    price: 30000,
    priceUsd: "~$7.5 USD",
    rating: 4.9,
    reviews: 33,
    tag: "ELEGANCIA BOTÁNICA",
    desc: "Aretes de silueta floral con pétalos estriados radiales y herrajes dorados hipoalergénicos para ocasiones especiales.",
    image: "Media/Portafolio/Moda/Pendiente flor 0001.webp",
    hoverImage: "Media/Portafolio/Moda/Pendiente flor 0002.webp"
  },
  {
    id: 12,
    name: "Set Aretes Árbol de la Vida (Variados)",
    category: "moda",
    categoryName: "Moda",
    secondaryCategory: ["joyas"],
    material: "PLA",
    materialLabel: "PLA Glitter Negro Ébano",
    price: 26000,
    priceUsd: "~$6.5 USD",
    rating: 4.8,
    reviews: 47,
    tag: "SET MÍSTICO",
    desc: "Aretes con silueta de árbol de la vida en corte calado de alta precisión con acabado brillante y ganchos de acero quirúrgico.",
    image: "Media/Portafolio/Moda/Aretes de arboles, variado 0001.webp",
    hoverImage: "Media/Portafolio/Moda/Aretes de arboles, variado 0001.webp"
  },
  {
    id: 13,
    name: "Botones de Camisa Personalizados (Set x6)",
    category: "moda",
    categoryName: "Moda",
    secondaryCategory: ["variados"],
    material: "PETG",
    materialLabel: "PETG Mate & Colores",
    price: 16000,
    priceUsd: "~$4 USD",
    rating: 4.7,
    reviews: 28,
    tag: "SASTRERÍA 3D",
    desc: "Pack de 6 botones de alta resistencia mecánica para prendas de vestir, personalizables en diámetro, grabado y color.",
    image: "Media/Portafolio/Moda/Boton de camisa personalizable 0001.webp",
    hoverImage: "Media/Portafolio/Moda/Boton de camisa personalizable 0002.webp"
  }
];

// ==========================================================================
// 2. ESTADO DE LA APLICACIÓN (CARRITO, FILTROS)
// ==========================================================================
let cart = [];
let currentCategoryFilter = "all";
let currentMaterialFilter = "all";

// ==========================================================================
// 3. INICIALIZACIÓN
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  renderProducts();
  setupEventListeners();
  updateEstimatorCalculation();
});

// ==========================================================================
// 4. RENDERIZADO DEL CATÁLOGO DE PRODUCTOS
// ==========================================================================
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter(prod => {
    const matchesCat = currentCategoryFilter === "all" || 
                       prod.category === currentCategoryFilter || 
                       (prod.secondaryCategory && prod.secondaryCategory.includes(currentCategoryFilter));
    const matchesMat = currentMaterialFilter === "all" || prod.material === currentMaterialFilter;
    return matchesCat && matchesMat;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.3rem; color: #064e3b;">No hay productos con este filtro</h4>
        <p style="color: #6c757d; font-size: 0.9rem;">Prueba seleccionando otra categoría o material.</p>
        <button class="btn btn-action" onclick="resetFilters()" style="margin-top: 1rem;">Restablecer Filtros</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => `
    <article class="product-card" data-id="${prod.id}" ${prod.hoverImage && prod.hoverImage !== prod.image ? `onmouseenter="const img=this.querySelector('.product-img'); if(img){ if(!img.dataset.orig) img.dataset.orig=img.src; img.src='${prod.hoverImage}'; }" onmouseleave="const img=this.querySelector('.product-img'); if(img && img.dataset.orig){ img.src=img.dataset.orig; }"` : ''}>
      <div class="product-media">
        <span class="product-badge-tag">${prod.tag}</span>
        <span class="product-material-pill">${prod.material}</span>
        <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="lazy">
      </div>
      <div class="product-body">
        <div class="product-category-row">
          <span class="product-cat">${prod.categoryName.toUpperCase()}</span>
          <div class="product-stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(prod.rating))}
            <span style="color:#64748b; font-size:0.75rem;">(${prod.reviews})</span>
          </div>
        </div>
        <h3 class="product-name" title="${prod.name}">${prod.name}</h3>
        <p class="product-desc">${prod.desc}</p>
        
        <div class="product-foot">
          <div class="product-price-box">
            <span class="product-price">$${formatNumber(prod.price)}</span>
            <span class="product-usd">${prod.priceUsd}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart(${prod.id})" aria-label="Añadir al carrito">
            <i class="fa-solid fa-cart-plus"></i> Añadir
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function resetFilters() {
  currentCategoryFilter = "all";
  currentMaterialFilter = "all";
  
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.category === "all");
  });
  
  const matSelect = document.getElementById("material-select");
  if (matSelect) matSelect.value = "all";

  renderProducts();
}

// ==========================================================================
// 5. GESTIÓN DEL CARRITO DE COMPRAS
// ==========================================================================
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      material: product.material,
      categoryName: product.categoryName,
      qty: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`"${product.name}" añadido al carrito`, "success");
}

function updateItemQty(productId, change) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  showToast("Producto eliminado del carrito");
}

function updateCartUI() {
  const counterEl = document.getElementById("cart-counter");
  const drawerCountEl = document.getElementById("cart-drawer-count");
  const headerTotalEl = document.getElementById("cart-header-total");
  const itemsContainer = document.getElementById("cart-items-list");
  const emptyMsg = document.getElementById("empty-cart-message");
  const drawerFooter = document.getElementById("cart-drawer-footer");
  const subtotalEl = document.getElementById("cart-subtotal");
  const grandTotalEl = document.getElementById("cart-grand-total");

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  if (counterEl) counterEl.textContent = totalQty;
  if (drawerCountEl) drawerCountEl.textContent = totalQty;
  if (headerTotalEl) headerTotalEl.textContent = `$${formatNumber(subtotal)}`;

  if (!itemsContainer) return;

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    itemsContainer.innerHTML = "";
    if (drawerFooter) drawerFooter.style.display = "none";
  } else {
    emptyMsg.style.display = "none";
    if (drawerFooter) drawerFooter.style.display = "block";

    itemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h5 class="cart-item-title">${item.name}</h5>
          <span class="cart-item-price">$${formatNumber(item.price)} COP</span>
          <div class="cart-item-qty-controls">
            <button class="qty-btn" onclick="updateItemQty(${item.id}, -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateItemQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Eliminar">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join("");

    if (subtotalEl) subtotalEl.textContent = `$${formatNumber(subtotal)} COP`;
    if (grandTotalEl) grandTotalEl.textContent = `$${formatNumber(subtotal)} COP`;
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("dimensionlab_cart", JSON.stringify(cart));
  } catch (e) {
    console.error(e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("dimensionlab_cart") || localStorage.getItem("moldear_cart");
    if (saved) {
      cart = JSON.parse(saved);
      updateCartUI();
    }
  } catch (e) {
    cart = [];
  }
}

// ==========================================================================
// 6. CHECKOUT MODAL & RESUMEN DEL PEDIDO
// ==========================================================================
function openCheckout() {
  if (cart.length === 0) {
    showToast("Tu carrito está vacío. Añade productos para comprar.");
    return;
  }

  closeCart();
  const modal = document.getElementById("checkout-modal-overlay");
  if (!modal) return;

  // Actualizar Resumen en el Checkout
  const itemsContainer = document.getElementById("checkout-summary-items");
  const subtotalEl = document.getElementById("checkout-summary-subtotal");
  const totalEl = document.getElementById("checkout-summary-total");
  const btnTotalEl = document.getElementById("checkout-button-total");

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 12000; // COP
  const total = subtotal + shipping;

  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => `
      <div class="checkout-summary-item">
        <div class="item-left">
          <span class="item-badge-qty">${item.qty}x</span>
          <span>${item.name}</span>
        </div>
        <strong>$${formatNumber(item.price * item.qty)}</strong>
      </div>
    `).join("");
  }

  if (subtotalEl) subtotalEl.textContent = `$${formatNumber(subtotal)} COP`;
  if (totalEl) totalEl.textContent = `$${formatNumber(total)} COP`;
  if (btnTotalEl) btnTotalEl.textContent = `$${formatNumber(total)} COP`;

  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function processCheckoutPayment() {
  const termsCheckbox = document.getElementById("terms-acceptance-checkbox");
  if (!termsCheckbox || !termsCheckbox.checked) {
    alert("⚠️ Para continuar con la pasarela segura, debes aceptar los Términos y Condiciones y la Política de Tratamiento de Datos Personales.");
    termsCheckbox.focus();
    return;
  }

  const name = document.getElementById("checkout-name").value;
  const email = document.getElementById("checkout-email").value;
  const city = document.getElementById("checkout-city").value;
  const address = document.getElementById("checkout-address").value;

  const orderNum = `MLD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  localStorage.setItem("dimensionlab_last_order", orderNum);

  // Simulación de procesamiento de pasarela segura
  const submitBtn = document.getElementById("submit-order-btn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> PROCESANDO CON PASARELA SEGURA...`;
  }

  setTimeout(() => {
    alert(`🎉 ¡PEDIDO CONFIRMADO CON ÉXITO!\n\nNúmero de Orden: ${orderNum}\nDestinatario: ${name}\nCiudad: ${city}\nDirección: ${address}\n\nHemos enviado la confirmación y el comprobante cifrado a: ${email}.\nTus piezas entrarán a impresión en las próximas 24 horas.`);
    
    // Limpiar carrito y cerrar modal
    cart = [];
    saveCartToStorage();
    updateCartUI();
    closeModals();

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-lock"></i> CONFIRMAR PEDIDO Y PAGAR`;
    }
  }, 1400);
}

// ==========================================================================
// 7. COTIZADOR INTERACTIVO 3D
// ==========================================================================
function updateEstimatorCalculation() {
  const material = document.getElementById("quote-material")?.value || "PLA";
  const size = document.getElementById("quote-size")?.value || "medium";
  const infill = parseInt(document.getElementById("quote-infill")?.value || "40", 10);

  let basePrice = 25000;
  let baseHours = 4;

  // Ajustes de material
  if (material === "Resina") {
    basePrice *= 1.6;
    baseHours *= 1.4;
  } else if (material === "PETG") {
    basePrice *= 1.25;
    baseHours *= 1.1;
  }

  // Ajustes de tamaño
  if (size === "small") {
    basePrice *= 0.65;
    baseHours *= 0.6;
  } else if (size === "large") {
    basePrice *= 1.85;
    baseHours *= 2.0;
  } else if (size === "extra") {
    basePrice *= 2.8;
    baseHours *= 3.5;
  }

  // Ajustes de relleno
  basePrice += (infill * 120);

  const finalPrice = Math.round(basePrice / 500) * 500;
  const finalHours = Math.round(baseHours);

  const priceEl = document.getElementById("calc-estimated-price");
  const timeEl = document.getElementById("calc-estimated-time");

  if (priceEl) priceEl.textContent = `$${formatNumber(finalPrice)} COP (~$${Math.round(finalPrice / 4000)} USD)`;
  if (timeEl) timeEl.textContent = `~${finalHours} a ${finalHours + 3} horas`;
}

function submitCustomQuote() {
  const material = document.getElementById("quote-material")?.value || "PLA";
  const size = document.getElementById("quote-size")?.value || "medium";
  const infill = document.getElementById("quote-infill")?.value || "40";
  const notes = document.getElementById("quote-notes")?.value || "Sin notas adicionales";

  const message = `Hola Dimension Lab! Deseo cotizar una impresión 3D:%0A- Material: ${material}%0A- Tamaño: ${size}%0A- Relleno: ${infill}%%0A- Detalles: ${encodeURIComponent(notes)}`;
  window.open(`https://wa.me/573000000000?text=${message}`, "_blank");
}

// ==========================================================================
// 8. BUSCADOR EN VIVO DE PRODUCTOS
// ==========================================================================
function setupLiveSearch() {
  const input = document.getElementById("live-search-input");
  const resultsContainer = document.getElementById("search-results-list");
  if (!input || !resultsContainer) return;

  input.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    if (!term) {
      resultsContainer.innerHTML = "";
      return;
    }

    const matches = PRODUCTS_DATA.filter(p => 
      p.name.toLowerCase().includes(term) ||
      p.categoryName.toLowerCase().includes(term) ||
      p.material.toLowerCase().includes(term) ||
      p.desc.toLowerCase().includes(term)
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<p style="text-align: center; color: #64748b; padding: 1rem;">No se encontraron piezas 3D que coincidan con "${term}".</p>`;
    } else {
      resultsContainer.innerHTML = matches.map(p => `
        <div class="search-result-item" onclick="selectSearchResult(${p.id})">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${p.image}" alt="${p.name}" style="width: 45px; height: 45px; border-radius: 4px; object-fit: cover;">
            <div>
              <strong style="display: block; font-size: 0.9rem; color: #064e3b;">${p.name}</strong>
              <span style="font-size: 0.75rem; color: #059669; font-weight: 600;">${p.categoryName} • ${p.material}</span>
            </div>
          </div>
          <strong style="color: #064e3b;">$${formatNumber(p.price)}</strong>
        </div>
      `).join("");
    }
  });
}

function setQuickSearch(tag) {
  const input = document.getElementById("live-search-input");
  if (input) {
    input.value = tag;
    input.dispatchEvent(new Event("input"));
  }
}

function selectSearchResult(productId) {
  closeModals();
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  // Filtrar categoría y hacer scroll al catálogo
  currentCategoryFilter = prod.category;
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.category === prod.category);
  });
  renderProducts();

  const catalog = document.getElementById("catalogo");
  if (catalog) {
    catalog.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================================================
// 9. EVENT LISTENERS GENERALES
// ==========================================================================
function setupEventListeners() {
  // Megamenu Links a Categorías
  document.querySelectorAll(".megamenu-card").forEach(card => {
    card.addEventListener("click", (e) => {
      const cat = card.dataset.category;
      if (cat) {
        currentCategoryFilter = cat;
        document.querySelectorAll(".filter-chip").forEach(chip => {
          chip.classList.toggle("active", chip.dataset.category === cat);
        });
        renderProducts();
      }
    });
  });

  // Footer Category Links
  document.querySelectorAll(".footer-menu a[data-cat]").forEach(link => {
    link.addEventListener("click", () => {
      const cat = link.dataset.cat;
      if (cat) {
        currentCategoryFilter = cat;
        document.querySelectorAll(".filter-chip").forEach(chip => {
          chip.classList.toggle("active", chip.dataset.category === cat);
        });
        renderProducts();
      }
    });
  });

  // Category Filter Chips
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategoryFilter = chip.dataset.category;
      renderProducts();
    });
  });

  // Material Filter Select
  const matSelect = document.getElementById("material-select");
  if (matSelect) {
    matSelect.addEventListener("change", (e) => {
      currentMaterialFilter = e.target.value;
      renderProducts();
    });
  }

  // Estimador interactivo
  ["quote-material", "quote-size", "quote-infill"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", updateEstimatorCalculation);
  });

  // Abrir / Cerrar Carrito
  document.getElementById("open-cart-btn")?.addEventListener("click", openCart);
  document.getElementById("close-cart-btn")?.addEventListener("click", closeCart);
  document.getElementById("cart-drawer-overlay")?.addEventListener("click", closeCart);

  // Botón de Checkout dentro del Carrito
  document.getElementById("proceed-to-checkout-btn")?.addEventListener("click", openCheckout);
  document.getElementById("close-checkout-modal")?.addEventListener("click", closeModals);

  // Buscador Modal
  document.getElementById("open-search-btn")?.addEventListener("click", () => openModal("search-modal-overlay"));
  document.getElementById("close-search-modal")?.addEventListener("click", closeModals);
  setupLiveSearch();

  // Rastrear Pedido Modal
  document.getElementById("open-account-btn")?.addEventListener("click", () => openModal("account-modal-overlay"));
  document.getElementById("mobile-account-btn")?.addEventListener("click", () => {
    closeMobileDrawer();
    openModal("account-modal-overlay");
  });
  document.getElementById("close-account-modal")?.addEventListener("click", closeModals);

  // Modales Legales del Footer
  document.getElementById("open-privacy-modal-btn")?.addEventListener("click", () => openModal("privacy-modal-overlay"));
  document.getElementById("open-terms-modal-btn")?.addEventListener("click", () => openModal("terms-modal-overlay"));
  document.getElementById("open-shipping-modal-btn")?.addEventListener("click", () => openModal("shipping-modal-overlay"));
  document.getElementById("open-faq-modal-btn")?.addEventListener("click", () => {
    alert("Preguntas Frecuentes:\n\n1. ¿Cuánto tarda una impresión? De 24 a 72 horas hábiles según el volumen.\n2. ¿Qué archivos aceptan? .STL, .OBJ, .STEP, .3MF.\n3. ¿Tienen envíos nacionales? Sí, a toda Colombia asegurado.");
  });

  // Mobile Drawer
  document.getElementById("mobile-menu-btn")?.addEventListener("click", openMobileDrawer);
  document.getElementById("close-mobile-drawer")?.addEventListener("click", closeMobileDrawer);
  document.getElementById("mobile-overlay")?.addEventListener("click", closeMobileDrawer);

  // Mobile Categories Accordion
  document.getElementById("mobile-categories-toggle")?.addEventListener("click", () => {
    document.getElementById("mobile-categories-content")?.classList.toggle("is-open");
  });

  // Mobile sublinks
  document.querySelectorAll(".mobile-sublink").forEach(link => {
    link.addEventListener("click", () => {
      const cat = link.dataset.cat;
      if (cat) {
        currentCategoryFilter = cat;
        document.querySelectorAll(".filter-chip").forEach(chip => {
          chip.classList.toggle("active", chip.dataset.category === cat);
        });
        renderProducts();
      }
      closeMobileDrawer();
    });
  });

  // Hero Quick Add
  document.querySelector(".add-to-cart-quick")?.addEventListener("click", () => {
    addToCart(1);
  });

  // Selector de método de pago en Checkout
  document.querySelectorAll(".payment-method-option").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".payment-method-option").forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
    });
  });

  // Cerrar modales con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModals();
      closeCart();
      closeMobileDrawer();
    }
  });
}

// ==========================================================================
// 10. FUNCIONES DE MODALES Y DRAWERS
// ==========================================================================
function openCart() {
  document.getElementById("cart-drawer")?.classList.add("is-active");
  document.getElementById("cart-drawer-overlay")?.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-drawer")?.classList.remove("is-active");
  document.getElementById("cart-drawer-overlay")?.classList.remove("is-active");
  document.body.style.overflow = "";
}

function openModal(modalId) {
  closeModals();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("is-active");
    document.body.style.overflow = "hidden";
    
    // Auto-foco y sugerencia del último pedido en el modal de rastreo
    if (modalId === "account-modal-overlay") {
      setTimeout(() => {
        const input = document.getElementById("track-order-id");
        if (input) {
          if (!input.value) {
            const lastOrder = localStorage.getItem("dimensionlab_last_order");
            if (lastOrder) input.value = lastOrder;
          }
          input.focus();
        }
      }, 100);
    }
  }
}

function closeModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("is-active"));
  document.body.style.overflow = "";
}

function openMobileDrawer() {
  document.getElementById("mobile-drawer")?.classList.add("is-active");
  document.getElementById("mobile-overlay")?.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function closeMobileDrawer() {
  document.getElementById("mobile-drawer")?.classList.remove("is-active");
  document.getElementById("mobile-overlay")?.classList.remove("is-active");
  document.body.style.overflow = "";
}

// ==========================================================================
// 11. OTRAS UTILIDADES (TRACKING, NOTICIAS, TOASTS)
// ==========================================================================
function trackOrderSimulated() {
  const inputEl = document.getElementById("track-order-id");
  const code = inputEl?.value.trim().toUpperCase() || "MLD-2026-4821";
  const resultBox = document.getElementById("tracking-result-box");
  const submitBtn = document.getElementById("btn-track-submit");
  if (!resultBox) return;

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Rastreando Pedido...`;
  }

  setTimeout(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> Rastrear Pedido`;
    }

    // Determinación de etapa de la barra de progreso:
    // 1: Recibido | 2: En Impresión 3D | 3: Enviado | 4: Entregado
    let stage = 2; // Estado activo por defecto (fabricación en curso)
    if (code.includes("REC") || code.endsWith("1")) {
      stage = 1;
    } else if (code.includes("ENV") || code.includes("RUTA") || code.includes("DESP") || code.endsWith("3")) {
      stage = 3;
    } else if (code.includes("ENTREG") || code.includes("FIN") || code.endsWith("4")) {
      stage = 4;
    }

    let progressPercent = 33;
    let statusLabel = "En Impresión 3D (68%)";
    let statusClass = "status-in-print";
    let processDetail = "Fabricación aditiva activa en Resina Fotopolimérica 8K (Capa 540 / 800 - 0.05 mm)";
    let etaDetail = "Finalización estimada: Hoy a las 18:30 hrs";

    let s1 = { cls: "pending", icon: "fa-solid fa-file-circle-check", sub: "Validación 3D" };
    let s2 = { cls: "pending", icon: "fa-solid fa-cube", sub: "Fabricación" };
    let s3 = { cls: "pending", icon: "fa-solid fa-truck-fast", sub: "Transportadora" };
    let s4 = { cls: "pending", icon: "fa-solid fa-house-chimney-check", sub: "Entregado" };

    if (stage === 1) {
      progressPercent = 0;
      statusLabel = "Pedido Recibido";
      statusClass = "status-received";
      processDetail = "Archivo 3D aprobado y parametrizado. En cola para calibración de cama de impresión.";
      etaDetail = "Inicio de impresión estimado: Hoy en 2 horas";
      s1 = { cls: "current", icon: "fa-solid fa-file-circle-check", sub: "Aprobado" };
    } else if (stage === 2) {
      progressPercent = 33;
      statusLabel = "En Impresión 3D (68%)";
      statusClass = "status-in-print";
      processDetail = "Fabricación aditiva activa en Resina Fotopolimérica 8K (Capa 540 / 800 - 0.05 mm)";
      etaDetail = "Finalización estimada: Hoy a las 18:30 hrs";
      s1 = { cls: "completed", icon: "fa-solid fa-check", sub: "Completado" };
      s2 = { cls: "current", icon: "fa-solid fa-cube", sub: "En Impresora 3D" };
    } else if (stage === 3) {
      progressPercent = 66;
      statusLabel = "Enviado / En Ruta";
      statusClass = "status-shipped";
      processDetail = "Pieza lavada, curada UV y embalada con protección antigolpes. En tránsito nacional.";
      etaDetail = "Entrega estimada: Mañana antes de las 14:00 hrs";
      s1 = { cls: "completed", icon: "fa-solid fa-check", sub: "Completado" };
      s2 = { cls: "completed", icon: "fa-solid fa-check", sub: "Completado" };
      s3 = { cls: "current", icon: "fa-solid fa-truck-fast", sub: "En Tránsito" };
    } else if (stage === 4) {
      progressPercent = 100;
      statusLabel = "Entregado a Satisfacción";
      statusClass = "status-delivered";
      processDetail = "Entregado en destino al destinatario. Garantía técnica de 30 días activa.";
      etaDetail = "Entregado con éxito";
      s1 = { cls: "completed", icon: "fa-solid fa-check", sub: "Completado" };
      s2 = { cls: "completed", icon: "fa-solid fa-check", sub: "Completado" };
      s3 = { cls: "completed", icon: "fa-solid fa-check", sub: "Completado" };
      s4 = { cls: "completed", icon: "fa-solid fa-house-chimney-check", sub: "En Destino" };
    }

    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div class="tracking-card">
        <div class="tracking-card-header">
          <div class="tracking-order-meta">
            <span class="tracking-order-badge"><i class="fa-solid fa-circle-check"></i> GUÍA / PEDIDO ENCONTRADO</span>
            <h4 class="tracking-order-code">${code}</h4>
          </div>
          <div class="tracking-status-pill ${statusClass}">
            <span class="status-pulse-dot"></span>
            <span>${statusLabel}</span>
          </div>
        </div>

        <!-- Barra de Progreso Sencilla (Recibido -> En Impresión 3D -> Enviado -> Entregado) -->
        <div class="tracking-stepper-container">
          <div class="tracking-stepper">
            <div class="stepper-line-track"></div>
            <div class="stepper-line-progress" style="width: ${progressPercent}%;"></div>

            <!-- Paso 1: Recibido -->
            <div class="stepper-step ${s1.cls}">
              <div class="step-node" title="Recibido">
                <i class="${s1.icon}"></i>
              </div>
              <div class="step-text">
                <span class="step-name">Recibido</span>
                <span class="step-sub">${s1.sub}</span>
              </div>
            </div>

            <!-- Paso 2: En Impresión 3D -->
            <div class="stepper-step ${s2.cls}">
              <div class="step-node" title="En Impresión 3D">
                <i class="${s2.icon}"></i>
              </div>
              <div class="step-text">
                <span class="step-name">En Impresión 3D</span>
                <span class="step-sub">${s2.sub}</span>
              </div>
            </div>

            <!-- Paso 3: Enviado -->
            <div class="stepper-step ${s3.cls}">
              <div class="step-node" title="Enviado">
                <i class="${s3.icon}"></i>
              </div>
              <div class="step-text">
                <span class="step-name">Enviado</span>
                <span class="step-sub">${s3.sub}</span>
              </div>
            </div>

            <!-- Paso 4: Entregado -->
            <div class="stepper-step ${s4.cls}">
              <div class="step-node" title="Entregado">
                <i class="${s4.icon}"></i>
              </div>
              <div class="step-text">
                <span class="step-name">Entregado</span>
                <span class="step-sub">${s4.sub}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Información y Detalles del Estado Actual -->
        <div class="tracking-details-grid">
          <div class="tracking-detail-card">
            <div class="detail-icon-wrap"><i class="fa-solid fa-cube text-primary"></i></div>
            <div class="detail-info">
              <span class="detail-heading">Tecnología & Proceso</span>
              <span class="detail-data">${processDetail}</span>
            </div>
          </div>
          <div class="tracking-detail-card">
            <div class="detail-icon-wrap"><i class="fa-solid fa-truck-fast text-primary"></i></div>
            <div class="detail-info">
              <span class="detail-heading">Transportadora Aliada</span>
              <span class="detail-data">Coordinadora / Envío Nacional Asegurado</span>
            </div>
          </div>
          <div class="tracking-detail-card">
            <div class="detail-icon-wrap"><i class="fa-regular fa-clock text-primary"></i></div>
            <div class="detail-info">
              <span class="detail-heading">Estimado de Entrega</span>
              <span class="detail-data">${etaDetail}</span>
            </div>
          </div>
        </div>

        <!-- Acciones Rápidas -->
        <div class="tracking-actions-row">
          <button type="button" class="btn-outline-sm" onclick="resetTrackingSearch()">
            <i class="fa-solid fa-rotate-left"></i> Consultar Otra Guía
          </button>
          <a href="https://wa.me/573001234567?text=Hola%20Dimension%20Lab,%20quisiera%20consultar%20el%20estado%20de%20mi%20pedido%20${encodeURIComponent(code)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-sm">
            <i class="fa-brands fa-whatsapp"></i> Soporte WhatsApp
          </a>
        </div>
      </div>
    `;

    resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 280);
}

function resetTrackingSearch() {
  const resultBox = document.getElementById("tracking-result-box");
  if (resultBox) {
    resultBox.style.display = "none";
    resultBox.innerHTML = "";
  }
  const input = document.getElementById("track-order-id");
  if (input) {
    input.value = "";
    input.focus();
  }
}

function submitGeneralContact() {
  showToast("Mensaje enviado con éxito. Te responderemos en breve.");
  document.getElementById("general-contact-form")?.reset();
}

function submitNewsletter() {
  showToast("¡Te has suscrito con éxito a las novedades 3D!");
  const input = document.getElementById("newsletter-email");
  if (input) input.value = "";
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : ""}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === "success" ? "fa-circle-check" : "fa-bell"}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
