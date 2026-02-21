

//  document.querySelector("h1").style.color="red" 
// window.alert(20+30)
//  console.table(["habiba","ahmed","moaz"])

//  console.log("hello from %cjs %cfile","color: red; font-size: 40px","color: blue; font-size: 40px");

// var myname="habiba";
// console.log( typeof  "hello " + myname)
//   console.log( typeof[10,20,230])

// document.write("hello\ n habiba") 


/* =============================================
   لا ريفييرا — Restaurant JavaScript
   ============================================= */

// ─── MENU DATA ───────────────────────────────
const menuData = {
    starters: [
      { name: "سلطة سيزر بالروبيان", desc: "خس روماني طازج، جمبري مشوي، صلصة سيزر كلاسيكية وبارميزان.", price: "٨٥ جنيه", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=80", badge: "الأكثر طلباً" },
      { name: "حساء البصل الفرنسي", desc: "حساء بصل كلاسيكي بمرق اللحم مع كروتون ذهبي وجبن غرويير.", price: "٧٠ جنيه", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
      { name: "بروسكيتا بالطماطم", desc: "خبز توست إيطالي بطماطم طازجة وريحان وزيت زيتون بكر.", price: "٦٠ جنيه", img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80" },
      { name: "بطاطس محشية بالجبن", desc: "بطاطس مخبوزة محشوة بالجبن المذاب والبقدونس الطازج.", price: "٦٥ جنيه", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80" },
    ],
    mains: [
      { name: "ريستو بالمأكولات البحرية", desc: "أرز إيطالي كريمي مع روبيان، أخطبوط وبلح البحر في صلصة نبيذ أبيض.", price: "١٤٥ جنيه", img: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&q=80", badge: "توصية الشيف" },
      { name: "باستا الكربونارا", desc: "سباجيتي بصلصة بيض وجبن بيكورينو ولحم مدخن مقرمش.", price: "١١٠ جنيه", img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80" },
      { name: "فيليه سمك دنيس مشوي", desc: "سمك دنيس مشوي مع خضار موسمية ولمون بتر وأعشاب طازجة.", price: "١٦٠ جنيه", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80" },
      { name: "دجاج بروتشيني", desc: "صدر دجاج مع صلصة فطر بروتشيني الكريمية وأرز بسمتي.", price: "١٢٥ جنيه", img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&q=80" },
    ],
    grills: [
      { name: "ستيك ريب آي ٣٠٠ جرام", desc: "لحم بقري مرشوش بزبدة الثوم والأعشاب العطرية مع بطاطس محمرة.", price: "٢٨٠ جنيه", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80", badge: "وجبة فاخرة" },
      { name: "كباب مشكل", desc: "لحم كباب وكفتة ودجاج مشوي مع خبز عربي وسلطة.", price: "١٩٠ جنيه", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80" },
      { name: "خاروف مشوي", desc: "ضلع خروف نعمان مشوي على الفحم مع توابل مغربية وكسكس.", price: "٣٢٠ جنيه", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" },
      { name: "دجاج ليموني", desc: "دجاج كامل مشوي محضّر بماء الليمون والأعشاب مع خضار مشوية.", price: "١٥٠ جنيه", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80" },
    ],
    desserts: [
      { name: "تيراميسو كلاسيكي", desc: "طبقات من البسكويت المنقوع وكريمة المسكاربوني ومسحوق الكاكاو.", price: "٨٠ جنيه", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", badge: "الأكثر طلباً" },
      { name: "كريم برولية", desc: "كريمة مخبوزة بنكهة الفانيليا مع قشرة السكر المكرملة الذهبية.", price: "٧٥ جنيه", img: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80" },
      { name: "موس الشوكولاتة", desc: "موس شوكولاتة بلجيكي داكن خفيف كالريح مع كريمة مخفوقة.", price: "٧٠ جنيه", img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400&q=80" },
      { name: "بانا كوتا بالتوت", desc: "حلى إيطالي كريمي بصلصة التوت البري الطازج.", price: "٦٥ جنيه", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80" },
    ],
    drinks: [
      { name: "عصير مانجو طازج", desc: "مانجو مصرية طازجة معصورة يومياً بدون إضافات.", price: "٤٥ جنيه", img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80" },
      { name: "موجيتو توت أزرق", desc: "موجيتو بتوت أزرق طازج ونعناع وماء فوار.", price: "٥٥ جنيه", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80", badge: "جديد" },
      { name: "قهوة إسبريسو مزدوج", desc: "قهوة عربية مستدامة بطريقة الضغط المزدوج.", price: "٤٠ جنيه", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80" },
      { name: "شاي أخضر ياباني", desc: "ماتشا لاتيه فاخر مع حليب بادام دافئ.", price: "٥٠ جنيه", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80" },
    ],
  };
  
  // ─── RENDER MENU ──────────────────────────────
  function renderMenu(cat) {
    const grid = document.getElementById("menuGrid");
    const items = menuData[cat] || [];
    grid.innerHTML = "";
    items.forEach((item, i) => {
      const card = document.createElement("div");
      card.className = "menu-card";
      card.style.animationDelay = `${i * 0.08}s`;
      card.innerHTML = `
        <div class="menu-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
          ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ""}
        </div>
        <div class="menu-card-body">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="menu-card-footer">
            <span class="price">${item.price}</span>
            <button class="add-btn" title="أضف للطلب" onclick="addToOrder('${item.name}')">+</button>
          </div>
        </div>`;
      grid.appendChild(card);
    });
  }
  
  // ─── MENU TABS ────────────────────────────────
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderMenu(btn.dataset.cat);
    });
  });
  renderMenu("starters"); // default
  
  // ─── ADD TO ORDER TOAST ──────────────────────
  function addToOrder(name) {
    const toast = document.getElementById("cartToast");
    toast.textContent = `✅ تمت إضافة "${name}" إلى طلبك!`;
    toast.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove("show"), 2800);
  }
  
  // ─── NAVBAR SCROLL ───────────────────────────
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });
  
  // ─── HAMBURGER ───────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });
  
  // ─── REVEAL ON SCROLL ────────────────────────
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
  
  // ─── TESTIMONIALS DOTS ───────────────────────
  const testiCards = document.querySelectorAll(".testi-card");
  const dotsWrap = document.getElementById("testiDots");
  let currentTesti = 0;
  
  if (window.innerWidth <= 768) {
    testiCards.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => showTesti(i));
      dotsWrap.appendChild(dot);
    });
    function showTesti(idx) {
      testiCards.forEach((c) => (c.style.display = "none"));
      testiCards[idx].style.display = "block";
      dotsWrap.querySelectorAll("span").forEach((d) => d.classList.remove("active"));
      dotsWrap.querySelectorAll("span")[idx].classList.add("active");
      currentTesti = idx;
    }
    showTesti(0);
    setInterval(() => {
      showTesti((currentTesti + 1) % testiCards.length);
    }, 4000);
  }
  
  // ─── RESERVATION FORM ────────────────────────
  const resForm = document.getElementById("reservationForm");
  const formSuccess = document.getElementById("formSuccess");
  
  // Set min date to today
  const dateInput = resForm.querySelector('[name="date"]');
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
  
  resForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = resForm.querySelectorAll("[required]");
    let valid = true;
    fields.forEach((f) => {
      f.style.borderColor = "";
      if (!f.value.trim()) {
        f.style.borderColor = "#e53e3e";
        valid = false;
      }
    });
    if (!valid) return;
  
    // Simulate submission
    const btn = resForm.querySelector('[type="submit"]');
    btn.textContent = "جارٍ الإرسال...";
    btn.disabled = true;
    setTimeout(() => {
      formSuccess.style.display = "block";
      resForm.reset();
      btn.textContent = "تأكيد الحجز";
      btn.disabled = false;
      setTimeout(() => (formSuccess.style.display = "none"), 6000);
    }, 1200);
  });
  
  // ─── SMOOTH ACTIVE NAV LINK ──────────────────
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach((a) => {
      a.style.color = a.getAttribute("href") === `#${current}` ? "var(--gold)" : "";
    });
  });
  
  // ─── GALLERY LIGHTBOX (simple) ───────────────
  document.querySelectorAll(".gal-item img").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;`;
      const big = document.createElement("img");
      big.src = img.src.replace("w=500", "w=1200").replace("w=800", "w=1600");
      big.style.cssText = "max-width:90vw;max-height:90vh;border-radius:8px;object-fit:contain;";
      overlay.appendChild(big);
      overlay.addEventListener("click", () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
  
  console.log("🍽️ لا ريفييرا — جاهز للخدمة!");




 






















