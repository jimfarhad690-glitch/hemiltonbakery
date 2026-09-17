/**
 * HEMILTON BAKERY - JAVASCRIPT ENGINE
 * Domain: hemiltonbakery-277e02aa86fd.herokuapp.com
 */

// --- 1. Product Catalog Data ---
const PRODUCTS = [
  {
    id: 'bread-1',
    name: 'Artisan Country Sourdough',
    category: 'breads',
    price: 8.50,
    tags: ['Vegan', 'Organic', "Baker's Pick"],
    dietary: ['vegan', 'organic'],
    desc: '48-hour cold fermented wild sourdough with blistered golden crust and open, custardy crumb.',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80',
    calories: '180 kcal/slice',
    prepTime: 'Freshly Baked at 5:00 AM'
  },
  {
    id: 'bread-2',
    name: 'Dark Rye Seeded Batard',
    category: 'breads',
    price: 9.00,
    tags: ['Organic', 'High Fiber'],
    dietary: ['organic', 'vegan'],
    desc: 'Stone-ground rye with toasted sunflower, pumpkin, flax, and sesame seeds.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    calories: '210 kcal/slice',
    prepTime: 'Stone Oven Baked'
  },
  {
    id: 'bread-3',
    name: 'French Butter Brioche Loaf',
    category: 'breads',
    price: 10.50,
    tags: ['Normandy Butter', 'Best Seller'],
    dietary: ['vegetarian'],
    desc: 'Feather-light golden crumb enriched with 84% Normandy butter and free-range egg yolks.',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80',
    calories: '240 kcal/slice',
    prepTime: 'Limited Daily'
  },
  {
    id: 'pastry-1',
    name: 'Classic Parisian Butter Croissant',
    category: 'pastries',
    price: 4.75,
    tags: ['27 Layers', 'Chef Signature'],
    dietary: ['vegetarian'],
    desc: 'Pure Normandy butter laminated to 27 delicate layers with honeycomb interior and golden shatter.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    calories: '290 kcal',
    prepTime: 'Baked Hourly'
  },
  {
    id: 'pastry-2',
    name: 'Valrhona Chocolate Pain au Chocolat',
    category: 'pastries',
    price: 5.50,
    tags: ['Valrhona 66%', 'Best Seller'],
    dietary: ['vegetarian'],
    desc: 'Double batons of Valrhona French dark chocolate folded inside crisp buttery pastry layers.',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80',
    calories: '340 kcal',
    prepTime: 'Warm Daily'
  },
  {
    id: 'pastry-3',
    name: 'Pistachio Raspberry Cruffin',
    category: 'pastries',
    price: 6.25,
    tags: ['New Creation', 'Popular'],
    dietary: ['vegetarian'],
    desc: 'Croissant-muffin hybrid filled with Sicilian pistachio creme patissiere & raspberry coulis.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80',
    calories: '380 kcal',
    prepTime: 'Chef Special'
  },
  {
    id: 'cake-1',
    name: 'Wild Berry Mascarpone Chiffon',
    category: 'cakes',
    price: 42.00,
    tags: ['Signature Cake', 'Light & Fluffy'],
    dietary: ['vegetarian'],
    desc: 'Cloud-soft vanilla chiffon layered with organic blackberry curd and light mascarpone frosting.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80',
    calories: 'Serves 6-8',
    prepTime: 'Pre-Order / Fresh'
  },
  {
    id: 'cake-2',
    name: 'Belgian Dark Truffle Ganache Cake',
    category: 'cakes',
    price: 46.00,
    tags: ['70% Cocoa', 'Gluten-Friendly'],
    dietary: ['gluten-free', 'vegetarian'],
    desc: 'Flourless chocolate decadence paired with salted caramel drip and toasted cocoa nibs.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    calories: 'Serves 8-10',
    prepTime: 'Master Baker'
  },
  {
    id: 'cake-3',
    name: 'Burnt Basque Caramel Cheesecake',
    category: 'cakes',
    price: 39.00,
    tags: ['Gluten-Friendly', 'Award Winner'],
    dietary: ['gluten-free', 'vegetarian'],
    desc: 'Caramelized mahogany top with silky, molten cream cheese center infused with Madagascar vanilla.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
    calories: 'Serves 6-8',
    prepTime: 'Daily Limited'
  },
  {
    id: 'savory-1',
    name: 'Caramelized Onion & Gruyere Quiche',
    category: 'savory',
    price: 7.50,
    tags: ['Warm Savory', 'Breakfast'],
    dietary: ['vegetarian'],
    desc: 'Buttery shortcrust pastry filled with slow-braised sweet onions, cave-aged Swiss Gruyere & thyme.',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=80',
    calories: '320 kcal',
    prepTime: 'Served Warm'
  },
  {
    id: 'savory-2',
    name: 'Prosciutto & Truffle Burrata Croissant',
    category: 'savory',
    price: 11.50,
    tags: ['Gourmet', 'Chef Special'],
    dietary: [],
    desc: 'Freshly split croissant with Parma prosciutto, creamy burrata, wild baby arugula & truffle honey.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    calories: '460 kcal',
    prepTime: 'Made to Order'
  },
  {
    id: 'beverage-1',
    name: 'Single Origin Honey Roast Flat White',
    category: 'beverages',
    price: 4.80,
    tags: ['Specialty Coffee', 'Oat Milk Option'],
    dietary: ['vegan-option'],
    desc: 'Ethiopian Yirgacheffe double espresso with silky micro-foam and subtle notes of bergamot & honey.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    calories: '120 kcal',
    prepTime: 'Barista Handcrafted'
  },
  {
    id: 'beverage-2',
    name: 'Ceremonial Uji Matcha Latte',
    category: 'beverages',
    price: 5.50,
    tags: ['Kyoto First Harvest', 'Antioxidant'],
    dietary: ['organic', 'vegan-option'],
    desc: 'Stone-milled Japanese ceremonial grade matcha whisked with steamed almond milk and raw clover honey.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    calories: '95 kcal',
    prepTime: 'Whisked Fresh'
  }
];

// --- 2. State Management ---
let currentCategory = 'all';
let currentSearch = '';
let selectedDietary = 'all';
let cart = [];
let promoDiscount = 0; // percentage
let activePromoCode = '';

// Custom Cake Builder State
const cakeBuilderState = {
  tier: 'single', // single, two-tier, grand
  sponge: 'belgian-chocolate',
  frosting: 'swiss-meringue',
  topper: 'berries',
  customMessage: 'Happy Celebration!'
};

const CAKE_PRICING = {
  tier: {
    'single': { label: '1.0 kg (Serves 6-8)', price: 45.00 },
    'two-tier': { label: '2.0 kg (Serves 14-16)', price: 85.00 },
    'grand': { label: '3.5 kg 3-Tier (Serves 28+)', price: 145.00 }
  },
  sponge: {
    'belgian-chocolate': { label: 'Belgian Chocolate & Ganache', extra: 0 },
    'bourbon-vanilla': { label: 'Madagascar Bourbon Vanilla', extra: 0 },
    'pistachio-raspberry': { label: 'Sicilian Pistachio & Berry', extra: 6.00 },
    'red-velvet': { label: 'Classic Red Velvet & Cream Cheese', extra: 3.00 },
    'basque-burnt': { label: 'Burnt Basque Caramel Core', extra: 5.00 }
  },
  frosting: {
    'swiss-meringue': { label: 'Velvety Swiss Meringue', extra: 0 },
    'salted-caramel': { label: 'Salted Caramel Crunch Buttercream', extra: 3.50 },
    'mascarpone-cream': { label: 'Light Italian Mascarpone', extra: 4.00 }
  },
  topper: {
    'berries': { label: 'Fresh Organic Berries', icon: '🍓', extra: 4.00 },
    'macarons': { label: 'Handcrafted French Macarons', icon: '🧁', extra: 6.00 },
    'gold-leaf': { label: '24K Edible Gold Leaf & Flora', icon: '✨', extra: 8.00 },
    'none': { label: 'Minimalist Smooth Finish', icon: '🎂', extra: 0 }
  }
};

// --- 3. DOM Content Loaded Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setupCategoryTabs();
  setupDietaryFilters();
  setupSearchInput();
  setupCakeBuilder();
  setupCartDrawer();
  setupOvenCountdown();
  setupFormsAndModals();
  setupNavbarScroll();
  loadCartFromStorage();
});

// --- 4. Menu Rendering & Filtering ---
function renderMenu() {
  const menuContainer = document.getElementById('menuGrid');
  if (!menuContainer) return;

  const filtered = PRODUCTS.filter(item => {
    // Category match
    const matchesCat = currentCategory === 'all' || item.category === currentCategory;
    
    // Search query match
    const q = currentSearch.toLowerCase().trim();
    const matchesSearch = !q || 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) || 
      item.tags.some(t => t.toLowerCase().includes(q));

    // Dietary filter
    let matchesDiet = true;
    if (selectedDietary !== 'all') {
      matchesDiet = item.dietary.includes(selectedDietary);
    }

    return matchesCat && matchesSearch && matchesDiet;
  });

  if (filtered.length === 0) {
    menuContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🥐🔍</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-text-main);">No baked items matched your search</h3>
        <p style="color: var(--color-text-muted); margin-top: 8px;">Try searching for "sourdough", "croissant", "cake", or clear your dietary filters.</p>
        <button class="btn btn-outline btn-sm" style="margin-top: 18px;" onclick="resetMenuFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  menuContainer.innerHTML = filtered.map(item => `
    <div class="menu-card" data-category="${item.category}">
      <div class="menu-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80';">
        ${item.tags[0] ? `<span class="badge badge-gold menu-badge-corner">${item.tags[0]}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-tags-row">
          ${item.tags.map(t => `<span class="tag-mini">${t}</span>`).join('')}
        </div>
        <h3 class="menu-item-title">${item.name}</h3>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-item-footer">
          <div class="menu-price">$${item.price.toFixed(2)}</div>
          <button class="btn-add-cart" onclick="addToCart('${item.id}')">
            <span>+ Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category || 'all';
      renderMenu();
    });
  });
}

function setupDietaryFilters() {
  const chips = document.querySelectorAll('.dietary-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        selectedDietary = 'all';
      } else {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedDietary = chip.dataset.diet || 'all';
      }
      renderMenu();
    });
  });
}

function setupSearchInput() {
  const searchInput = document.getElementById('menuSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderMenu();
    });
  }
}

window.resetMenuFilters = function() {
  currentCategory = 'all';
  currentSearch = '';
  selectedDietary = 'all';
  const searchInput = document.getElementById('menuSearch');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.category-tab-btn').forEach((t, i) => {
    t.classList.toggle('active', i === 0);
  });
  document.querySelectorAll('.dietary-chip').forEach(c => c.classList.remove('active'));
  renderMenu();
};

// --- 5. Interactive Cake Customizer Engine ---
function setupCakeBuilder() {
  const tierBtns = document.querySelectorAll('[data-cake-tier]');
  const spongeBtns = document.querySelectorAll('[data-cake-sponge]');
  const frostingBtns = document.querySelectorAll('[data-cake-frosting]');
  const topperBtns = document.querySelectorAll('[data-cake-topper]');
  const messageInput = document.getElementById('cakeMessageInput');

  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      cakeBuilderState.tier = btn.dataset.cakeTier;
      updateCakePreview();
    });
  });

  spongeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      spongeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      cakeBuilderState.sponge = btn.dataset.cakeSponge;
      updateCakePreview();
    });
  });

  frostingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      frostingBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      cakeBuilderState.frosting = btn.dataset.cakeFrosting;
      updateCakePreview();
    });
  });

  topperBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      topperBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      cakeBuilderState.topper = btn.dataset.cakeTopper;
      updateCakePreview();
    });
  });

  if (messageInput) {
    messageInput.addEventListener('input', (e) => {
      cakeBuilderState.customMessage = e.target.value.trim() || 'Your Name / Message';
      updateCakePreview();
    });
  }

  updateCakePreview();
}

function updateCakePreview() {
  const topTierEl = document.getElementById('cakePreviewTopTier');
  const baseTierEl = document.getElementById('cakePreviewBaseTier');
  const topperEl = document.getElementById('cakePreviewTopper');
  const messageEl = document.getElementById('cakePreviewMessage');
  const priceEl = document.getElementById('cakeCalculatedPrice');
  const summaryEl = document.getElementById('cakeSummaryText');

  // Calculate Price
  const tierData = CAKE_PRICING.tier[cakeBuilderState.tier];
  const spongeData = CAKE_PRICING.sponge[cakeBuilderState.sponge];
  const frostingData = CAKE_PRICING.frosting[cakeBuilderState.frosting];
  const topperData = CAKE_PRICING.topper[cakeBuilderState.topper];

  const totalPrice = tierData.price + spongeData.extra + frostingData.extra + topperData.extra;

  // Visual Colors based on Sponge & Frosting
  let cakeColor = '#F4D086'; // vanilla
  let cakeBorder = '#E5BA65';
  if (cakeBuilderState.sponge === 'belgian-chocolate') {
    cakeColor = '#5A3825';
    cakeBorder = '#3D2416';
  } else if (cakeBuilderState.sponge === 'pistachio-raspberry') {
    cakeColor = '#A3C49B';
    cakeBorder = '#85AC7C';
  } else if (cakeBuilderState.sponge === 'red-velvet') {
    cakeColor = '#9E2A2B';
    cakeBorder = '#781D1E';
  } else if (cakeBuilderState.sponge === 'basque-burnt') {
    cakeColor = '#C68B59';
    cakeBorder = '#9A6335';
  }

  if (topTierEl && baseTierEl) {
    topTierEl.style.backgroundColor = cakeColor;
    topTierEl.style.borderColor = cakeBorder;
    baseTierEl.style.backgroundColor = cakeColor;
    baseTierEl.style.borderColor = cakeBorder;

    if (cakeBuilderState.tier === 'single') {
      topTierEl.style.display = 'none';
      baseTierEl.style.width = '200px';
      baseTierEl.style.height = '100px';
    } else {
      topTierEl.style.display = 'flex';
      baseTierEl.style.width = '230px';
      baseTierEl.style.height = '90px';
    }
  }

  if (topperEl) {
    topperEl.textContent = topperData.icon;
  }

  if (messageEl) {
    messageEl.textContent = `"${cakeBuilderState.customMessage}"`;
    // Text contrast on dark cake
    if (cakeBuilderState.sponge === 'belgian-chocolate' || cakeBuilderState.sponge === 'red-velvet') {
      messageEl.style.color = '#FFFFFF';
    } else {
      messageEl.style.color = '#3C2415';
    }
  }

  if (priceEl) {
    priceEl.textContent = `$${totalPrice.toFixed(2)}`;
  }

  if (summaryEl) {
    summaryEl.innerHTML = `<strong>${tierData.label}</strong> • ${spongeData.label} with ${frostingData.label} & ${topperData.label}`;
  }
}

window.addCustomCakeToCart = function() {
  const tierData = CAKE_PRICING.tier[cakeBuilderState.tier];
  const spongeData = CAKE_PRICING.sponge[cakeBuilderState.sponge];
  const frostingData = CAKE_PRICING.frosting[cakeBuilderState.frosting];
  const topperData = CAKE_PRICING.topper[cakeBuilderState.topper];
  const totalPrice = tierData.price + spongeData.extra + frostingData.extra + topperData.extra;

  const customCakeItem = {
    id: `custom-cake-${Date.now()}`,
    name: `Custom Bespoke Cake (${tierData.label.split(' ')[0]})`,
    price: totalPrice,
    desc: `${spongeData.label} • ${frostingData.label} • Message: "${cakeBuilderState.customMessage}"`,
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80',
    quantity: 1,
    isCustom: true
  };

  cart.push(customCakeItem);
  saveCartToStorage();
  updateCartUI();
  openCartDrawer();
  showToast(`✨ Added Custom Bespoke Cake to your Order Bag!`);
};

// --- 6. Shopping Cart & Checkout Engine ---
window.addToCart = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      desc: prod.desc,
      image: prod.image,
      quantity: 1,
      isCustom: false
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`🥖 "${prod.name}" added to bag!`);
};

window.updateCartQty = function(id, delta) {
  const idx = cart.findIndex(item => item.id === id);
  if (idx > -1) {
    cart[idx].quantity += delta;
    if (cart[idx].quantity <= 0) {
      cart.splice(idx, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
};

function updateCartUI() {
  const cartBody = document.getElementById('cartBody');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDiscountEl = document.getElementById('cartDiscount');
  const cartTotalEl = document.getElementById('cartTotal');
  const badgeCountEl = document.getElementById('cartBadgeCount');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badgeCountEl) {
    badgeCountEl.textContent = totalItems;
    badgeCountEl.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🧺</div>
        <h4 style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 8px;">Your bag is currently empty</h4>
        <p style="font-size: 0.9rem; color: var(--color-text-muted);">Explore our sourdoughs, golden croissants and handcrafted bespoke cakes to fill it up.</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 20px;" onclick="closeCartDrawer(); document.getElementById('menu').scrollIntoView({behavior:'smooth'})">Explore Fresh Menu</button>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = '$0.00';
    if (cartDiscountEl) cartDiscountEl.textContent = '-$0.00';
    if (cartTotalEl) cartTotalEl.textContent = '$0.00';
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * promoDiscount) / 100;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80';">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.isCustom ? item.desc : `$${item.price.toFixed(2)} each`}</div>
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
        <span style="font-weight: 700; font-size: 0.9rem; min-width: 18px; text-align: center;">${item.quantity}</span>
        <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join('');

  if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (cartDiscountEl) cartDiscountEl.textContent = `-$${discountAmount.toFixed(2)} ${promoDiscount > 0 ? `(${promoDiscount}% OFF)` : ''}`;
  if (cartTotalEl) cartTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

window.applyPromoCode = function() {
  const promoInput = document.getElementById('promoInput');
  if (!promoInput) return;
  const code = promoInput.value.trim().toUpperCase();

  if (code === 'FRESH10' || code === 'WELCOME10') {
    promoDiscount = 10;
    activePromoCode = code;
    updateCartUI();
    showToast(`🎉 Promo code "${code}" applied! 10% Discount active.`);
  } else if (code === 'CHEF20') {
    promoDiscount = 20;
    activePromoCode = code;
    updateCartUI();
    showToast(`👨‍🍳 Chef Promo "${code}" applied! 20% Discount active.`);
  } else {
    showToast(`⚠️ Invalid promo code. Try "FRESH10"`);
  }
};

function setupCartDrawer() {
  const openBtn = document.getElementById('cartOpenBtn');
  const closeBtn = document.getElementById('cartCloseBtn');
  const backdrop = document.getElementById('cartBackdrop');

  if (openBtn) openBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);
}

window.openCartDrawer = function() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeCartDrawer = function() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
};

// Checkout Modal & Receipt
window.proceedToCheckout = function() {
  if (cart.length === 0) {
    showToast(`Your bag is empty! Add some treats first.`);
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.add('open');
    populateCheckoutReceipt();
  }
};

function populateCheckoutReceipt() {
  const orderId = 'HML-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * promoDiscount) / 100;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  const receiptOrderNo = document.getElementById('receiptOrderNo');
  const receiptDate = document.getElementById('receiptDate');
  const receiptItems = document.getElementById('receiptItemsList');
  const receiptTotal = document.getElementById('receiptTotalAmount');

  if (receiptOrderNo) receiptOrderNo.textContent = orderId;
  if (receiptDate) receiptDate.textContent = dateStr;
  if (receiptTotal) receiptTotal.textContent = `$${grandTotal.toFixed(2)}`;

  if (receiptItems) {
    receiptItems.innerHTML = cart.map(item => `
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px dotted #EADBCE; font-size: 0.88rem;">
        <span>${item.quantity}x ${item.name}</span>
        <span style="font-weight: 700;">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
  }

  // Pre-fill WhatsApp checkout button
  const waBtn = document.getElementById('btnWhatsAppCheckout');
  if (waBtn) {
    const itemListText = cart.map(i => `• ${i.quantity}x ${i.name} ($${(i.price * i.quantity).toFixed(2)})`).join('%0A');
    const msg = `Hello Hemilton Bakery! 🥖%0A%0AI would like to place an order:%0A${itemListText}%0A%0A*Total: $${grandTotal.toFixed(2)}*%0AOrder Ref: ${orderId}%0ADomain: hemiltonbakery-277e02aa86fd.herokuapp.com`;
    waBtn.href = `https://api.whatsapp.com/send?phone=18005552253&text=${msg}`;
  }
}

window.closeCheckoutModal = function() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('open');
};

window.completeOrderConfirmation = function() {
  showToast(`🎉 Order Placed! A confirmation receipt has been generated.`);
  cart = [];
  promoDiscount = 0;
  saveCartToStorage();
  updateCartUI();
  closeCheckoutModal();
};

// Storage Helpers
function saveCartToStorage() {
  try {
    localStorage.setItem('hemilton_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Storage error', e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('hemilton_cart');
    if (saved) {
      cart = JSON.parse(saved);
      updateCartUI();
    }
  } catch (e) {
    cart = [];
  }
}

// --- 7. Live Batch Oven Timer ---
function setupOvenCountdown() {
  const minEl = document.getElementById('timerMinutes');
  const secEl = document.getElementById('timerSeconds');
  if (!minEl || !secEl) return;

  let totalSeconds = 24 * 60 + 38; // 24m 38s initial

  setInterval(() => {
    if (totalSeconds <= 0) {
      totalSeconds = 30 * 60; // reset loop for simulation
    } else {
      totalSeconds--;
    }

    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;

    minEl.textContent = m < 10 ? '0' + m : m;
    secEl.textContent = s < 10 ? '0' + s : s;
  }, 1000);
}

// --- 8. Table Reservation, Contact & Newsletter Forms ---
function setupFormsAndModals() {
  // Table Reservation
  const reservationForm = document.getElementById('tableReservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('resName').value;
      const guests = document.getElementById('resGuests').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;

      showToast(`🥂 Table for ${guests} reserved for ${name} on ${date} at ${time}! We look forward to welcoming you.`);
      reservationForm.reset();
    });
  }

  // Direct Contact Form (Google Ads Compliance & Support)
  const contactForm = document.getElementById('contactFormDirect');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const subject = document.getElementById('contactSubject').value;
      showToast(`✉️ Thank you, ${name}! Your inquiry regarding "${subject}" has been received. Our team will reply within 12-24 hours.`);
      contactForm.reset();
    });
  }

  // Newsletter Signup
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const email = emailInput ? emailInput.value : 'Foodie';
      showToast(`🥐 Welcome to the Baker's Club! Use coupon "FRESH10" for 10% off.`);
      if (newsletterForm) newsletterForm.reset();
    });
  }

  // Cookie Consent Initialization
  initCookieConsent();
}

// --- 9. Universal Policy Modal Controllers ---
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// Close modal on click outside
window.addEventListener('click', (e) => {
  if (e.target.classList && e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// --- 10. Cookie Consent Management & Google Consent Mode v2 ---
function initCookieConsent() {
  const banner = document.getElementById('cookieBanner');
  const analyticsToggle = document.getElementById('cookieAnalyticsToggle');
  const adsToggle = document.getElementById('cookieAdsToggle');

  try {
    const savedConsent = localStorage.getItem('hemilton_cookie_consent');
    if (!savedConsent) {
      setTimeout(() => {
        if (banner) banner.classList.add('show');
      }, 700);
    } else {
      const preferences = JSON.parse(savedConsent);
      if (analyticsToggle) analyticsToggle.checked = !!preferences.analytics;
      if (adsToggle) adsToggle.checked = !!preferences.ads;

      updateGoogleConsentSignals(preferences.analytics, preferences.ads);
    }
  } catch (e) {
    console.error('Cookie consent parse error:', e);
  }
}

function updateGoogleConsentSignals(analyticsAllowed, adsAllowed) {
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      'analytics_storage': analyticsAllowed ? 'granted' : 'denied',
      'ad_storage': adsAllowed ? 'granted' : 'denied',
      'ad_user_data': adsAllowed ? 'granted' : 'denied',
      'ad_personalization': adsAllowed ? 'granted' : 'denied'
    });
  }
}

window.acceptAllCookies = function() {
  const preferences = { analytics: true, ads: true };
  localStorage.setItem('hemilton_cookie_consent', JSON.stringify(preferences));
  updateGoogleConsentSignals(true, true);

  const banner = document.getElementById('cookieBanner');
  if (banner) banner.classList.remove('show');
  closeModal('cookieModal');

  const analyticsToggle = document.getElementById('cookieAnalyticsToggle');
  const adsToggle = document.getElementById('cookieAdsToggle');
  if (analyticsToggle) analyticsToggle.checked = true;
  if (adsToggle) adsToggle.checked = true;

  showToast(`✨ All cookie preferences accepted! Thank you.`);
};

window.rejectNonEssentialCookies = function() {
  const preferences = { analytics: false, ads: false };
  localStorage.setItem('hemilton_cookie_consent', JSON.stringify(preferences));
  updateGoogleConsentSignals(false, false);

  const banner = document.getElementById('cookieBanner');
  if (banner) banner.classList.remove('show');
  closeModal('cookieModal');

  const analyticsToggle = document.getElementById('cookieAnalyticsToggle');
  const adsToggle = document.getElementById('cookieAdsToggle');
  if (analyticsToggle) analyticsToggle.checked = false;
  if (adsToggle) adsToggle.checked = false;

  showToast(`🛡️ Non-essential cookies declined. Essential functionality active.`);
};

window.saveCustomCookiePreferences = function() {
  const analyticsToggle = document.getElementById('cookieAnalyticsToggle');
  const adsToggle = document.getElementById('cookieAdsToggle');

  const preferences = {
    analytics: analyticsToggle ? analyticsToggle.checked : false,
    ads: adsToggle ? adsToggle.checked : false
  };

  localStorage.setItem('hemilton_cookie_consent', JSON.stringify(preferences));
  updateGoogleConsentSignals(preferences.analytics, preferences.ads);

  const banner = document.getElementById('cookieBanner');
  if (banner) banner.classList.remove('show');
  closeModal('cookieModal');

  showToast(`⚙️ Custom privacy preferences saved successfully.`);
};

// --- 11. Toast Notification System ---
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --- 12. Sticky Navbar Scroll & Mobile Menu ---
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }
}

