
document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  let currentParentScreen = "scr-main-menu";
  let currentColorGroup = "white";

  const dataDB = {
    co3: {
      title: "أيون الكربونات CO₃²⁻",
      parent: "scr-l1-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>أيون الكربونات</h3>
          <div class="formula-box">CO₃²⁻</div>
          <p><strong>الكاشف:</strong> حمض الهيدروكلوريك المخفف.</p>
          <p><strong>الملاحظة:</strong> يحدث فوران وينطلق غاز ثاني أكسيد الكربون.</p>
          <p><strong>اختبار الغاز:</strong> يعكّر ماء الجير الرائق.</p>
          <div class="formula-box">CO₃²⁻ + 2H⁺ → CO₂↑ + H₂O</div>
        </div>`
    },

    hco3: {
      title: "أيون البيكربونات HCO₃⁻",
      parent: "scr-l1-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>أيون البيكربونات</h3>
          <div class="formula-box">HCO₃⁻</div>
          <p><strong>الكاشف:</strong> حمض الهيدروكلوريك المخفف.</p>
          <p><strong>الملاحظة:</strong> يتصاعد غاز ثاني أكسيد الكربون مع حدوث فوران.</p>
          <div class="formula-box">HCO₃⁻ + H⁺ → CO₂↑ + H₂O</div>
        </div>`
    },

    s2: {
      title: "أيون الكبريتيد S²⁻",
      parent: "scr-l1-menu",
      colorGroup: "black",
      content: `
        <div class="detail-card">
          <h3>أيون الكبريتيد</h3>
          <div class="formula-box">S²⁻</div>
          <p><strong>الملاحظة:</strong> قد يتصاعد غاز كبريتيد الهيدروجين، وهو غاز سام.</p>
          <div class="formula-box">S²⁻ + 2H⁺ → H₂S↑</div>
          <p>لا تُجرِ الاختبار إلا في معمل مجهز وتحت إشراف مختص.</p>
        </div>`
    },

    so3: {
      title: "أيون الكبريتيت SO₃²⁻",
      parent: "scr-l1-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>أيون الكبريتيت</h3>
          <div class="formula-box">SO₃²⁻</div>
          <p><strong>الملاحظة:</strong> يتصاعد غاز ثاني أكسيد الكبريت عند إضافة حمض مناسب.</p>
          <div class="formula-box">SO₃²⁻ + 2H⁺ → SO₂↑ + H₂O</div>
        </div>`
    },

    s2o3: {
      title: "أيون الثيوكبريتات S₂O₃²⁻",
      parent: "scr-l1-menu",
      colorGroup: "yellow",
      content: `
        <div class="detail-card">
          <h3>أيون الثيوكبريتات</h3>
          <div class="formula-box">S₂O₃²⁻</div>
          <p><strong>الملاحظة:</strong> قد يتكون كبريت أصفر مع انطلاق ثاني أكسيد الكبريت عند التفاعل مع حمض مناسب.</p>
          <div class="formula-box">S₂O₃²⁻ + 2H⁺ → S↓ + SO₂↑ + H₂O</div>
        </div>`
    },

    no2: {
      title: "أيون النيتريت NO₂⁻",
      parent: "scr-l1-menu",
      colorGroup: "brown",
      content: `
        <div class="detail-card">
          <h3>أيون النيتريت</h3>
          <div class="formula-box">NO₂⁻</div>
          <p>قد تتكون نواتج غازية من أكاسيد النيتروجين في بعض الاختبارات، وهي ضارة ويجب عدم استنشاقها.</p>
        </div>`
    },

    cl: {
      title: "أيون الكلوريد Cl⁻",
      parent: "scr-l2-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>أيون الكلوريد</h3>
          <div class="formula-box">Cl⁻</div>
          <p><strong>الكاشف:</strong> نترات الفضة بعد تحميض العينة بحمض النيتريك المخفف.</p>
          <p><strong>الملاحظة:</strong> يتكون راسب أبيض من كلوريد الفضة.</p>
          <div class="formula-box">Ag⁺ + Cl⁻ → AgCl↓</div>
        </div>`
    },

    br: {
      title: "أيون البروميد Br⁻",
      parent: "scr-l2-menu",
      colorGroup: "yellow",
      content: `
        <div class="detail-card">
          <h3>أيون البروميد</h3>
          <div class="formula-box">Br⁻</div>
          <p><strong>الكاشف:</strong> نترات الفضة في ظروف الاختبار المناسبة.</p>
          <p><strong>الملاحظة:</strong> يتكون راسب كريمي من بروميد الفضة.</p>
          <div class="formula-box">Ag⁺ + Br⁻ → AgBr↓</div>
        </div>`
    },

    i: {
      title: "أيون اليوديد I⁻",
      parent: "scr-l2-menu",
      colorGroup: "yellow",
      content: `
        <div class="detail-card">
          <h3>أيون اليوديد</h3>
          <div class="formula-box">I⁻</div>
          <p><strong>الكاشف:</strong> نترات الفضة في ظروف الاختبار المناسبة.</p>
          <p><strong>الملاحظة:</strong> يتكون راسب أصفر من يوديد الفضة.</p>
          <div class="formula-box">Ag⁺ + I⁻ → AgI↓</div>
        </div>`
    },

    no3: {
      title: "أيون النترات NO₃⁻",
      parent: "scr-l2-menu",
      colorGroup: "brown",
      content: `
        <div class="detail-card">
          <h3>أيون النترات</h3>
          <div class="formula-box">NO₃⁻</div>
          <p>يُكشف عن النترات باختبارات نوعية معروفة، ويُحدَّد الكاشف والملاحظة وفقًا للمنهج المقرر.</p>
        </div>`
    },

    po4: {
      title: "أيون الفوسفات PO₄³⁻",
      parent: "scr-l2-menu",
      colorGroup: "yellow",
      content: `
        <div class="detail-card">
          <h3>أيون الفوسفات</h3>
          <div class="formula-box">PO₄³⁻</div>
          <p>يُستخدم كاشف مناسب للفوسفات، وتعتمد الملاحظة على الكاشف وظروف الاختبار.</p>
        </div>`
    },

    so4: {
      title: "أيون الكبريتات SO₄²⁻",
      parent: "scr-l2-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>أيون الكبريتات</h3>
          <div class="formula-box">SO₄²⁻</div>
          <p><strong>الملاحظة:</strong> يتكون راسب أبيض من كبريتات الباريوم عند استخدام كاشف مناسب.</p>
          <div class="formula-box">Ba²⁺ + SO₄²⁻ → BaSO₄↓</div>
        </div>`
    },
        
    cat1: {
      title: "المجموعة الأولى من الكاتيونات",
      parent: "scr-l3-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>الكاتيونات</h3>
          <p>الكاتيونات هي أيونات موجبة الشحنة، وتُصنَّف إلى مجموعات تحليلية حسب تفاعلاتها مع الكواشف.</p>
        </div>`
    },

    cu2: {
      title: "أيون النحاس الثنائي Cu²⁺",
      parent: "scr-l3-menu",
      colorGroup: "blue",
      content: `
        <div class="detail-card">
          <h3>أيون النحاس الثنائي</h3>
          <div class="formula-box">Cu²⁺</div>
          <p>تتميز كثير من محاليل أملاح النحاس الثنائي باللون الأزرق.</p>
        </div>`
    },

    al3: {
      title: "أيون الألومنيوم Al³⁺",
      parent: "scr-l3-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>أيون الألومنيوم</h3>
          <div class="formula-box">Al³⁺</div>
          <p>يتكون راسب أبيض هلامي من هيدروكسيد الألومنيوم عند إضافة هيدروكسيد مناسب.</p>
          <div class="formula-box">Al³⁺ + 3OH⁻ → Al(OH)₃↓</div>
        </div>`
    },

    fe2: {
      title: "أيون الحديد الثنائي Fe²⁺",
      parent: "scr-l3-menu",
      colorGroup: "green",
      content: `
        <div class="detail-card">
          <h3>أيون الحديد الثنائي</h3>
          <div class="formula-box">Fe²⁺</div>
          <p>قد يتكون راسب أخضر من هيدروكسيد الحديد الثنائي باستخدام كاشف مناسب.</p>
          <div class="formula-box">Fe²⁺ + 2OH⁻ → Fe(OH)₂↓</div>
        </div>`
    },

    fe3: {
      title: "أيون الحديد الثلاثي Fe³⁺",
      parent: "scr-l3-menu",
      colorGroup: "brown",
      content: `
        <div class="detail-card">
          <h3>أيون الحديد الثلاثي</h3>
          <div class="formula-box">Fe³⁺</div>
          <p>قد يتكون راسب بني محمر من هيدروكسيد الحديد الثلاثي باستخدام كاشف مناسب.</p>
          <div class="formula-box">Fe³⁺ + 3OH⁻ → Fe(OH)₃↓</div>
        </div>`
    },

    ca2: {
      title: "أيون الكالسيوم Ca²⁺",
      parent: "scr-l3-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>أيون الكالسيوم</h3>
          <div class="formula-box">Ca²⁺</div>
          <p>يمكن الكشف عن الكالسيوم باستخدام كواشف مناسبة وفقًا للاختبار المقرر.</p>
        </div>`
    },

    ox_gases: {
      title: "الغازات الناتجة",
      parent: "scr-ox-menu",
      colorGroup: "brown",
      content: `
        <div class="detail-card">
          <h3>مرجع الغازات</h3>
          <p><strong>CO₂:</strong> ثاني أكسيد الكربون، يعكر ماء الجير الرائق.</p>
          <p><strong>SO₂:</strong> ثاني أكسيد الكبريت، غاز ضار.</p>
          <p><strong>H₂S:</strong> كبريتيد الهيدروجين، غاز سام.</p>
          <p>لا تستنشق الغازات الناتجة عن التفاعلات الكيميائية.</p>
        </div>`
    },

    ox_anions: {
      title: "مرجع الأنيونات",
      parent: "scr-ox-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>الأنيونات</h3>
          <p>الأنيونات أيونات سالبة الشحنة، ومنها الكلوريد والكربونات والكبريتات والنترات.</p>
          <p>يُميَّز كل أيون باختبارات نوعية مناسبة.</p>
        </div>`
    },

    ox_agents: {
      title: "الكواشف المستخدمة",
      parent: "scr-ox-menu",
      colorGroup: "white",
      content: `
        <div class="detail-card">
          <h3>الكواشف الكيميائية</h3>
          <p>الكاشف مادة تُستخدم للتعرف على أيون أو مركب من خلال ملاحظة ناتجة عن التفاعل.</p>
        </div>`
    }
  };

  // إتاحة البيانات لباقي أجزاء الموقع
  window.dataDB = dataDB;
  window.currentParentScreen = currentParentScreen;
  window.currentColorGroup = currentColorGroup;

  // التنقل بين الصفحات
  function showScreen(screenId) {
    const target = document.getElementById(screenId);
    if (!target) return;

    $$(".app-screen").forEach((screen) => {
      screen.classList.remove("active");
    });

    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.showScreen = showScreen;

  // عرض تفاصيل مادة
  function openDetail(key) {
    const item = dataDB[key];

    if (!item) {
      alert("المعلومات المطلوبة غير متاحة.");
      return;
    }

    const title = $("#detail-title");
    const body = $("#detail-body");

    if (title) title.textContent = item.title;
    if (body) body.innerHTML = item.content;

    currentParentScreen = item.parent || "scr-main-menu";
    window.currentParentScreen = currentParentScreen;

    showScreen("scr-detail");
  }

  // عرض المواد حسب اللون
  function openColorGroup(group) {
    currentColorGroup = group;
    window.currentColorGroup = group;

    const colorNames = {
      white: "اللون الأبيض",
      black: "اللون الأسود",
      yellow: "اللون الأصفر",
      brown: "اللون البني",
      green: "اللون الأخضر",
      blue: "اللون الأزرق"
    };

    const title = $("#group-title");
    const body = $("#group-content-body");

    if (title) {
      title.textContent = colorNames[group] || "تفاصيل اللون";
    }

    if (!body) return;

    body.replaceChildren();

    const matches = Object.entries(dataDB).filter(
      ([, item]) => item.colorGroup === group
    );

    if (matches.length === 0) {
      const message = document.createElement("div");
      message.className = "detail-card";
      message.textContent = "لا توجد مواد مسجلة لهذا اللون حاليًا.";
      body.appendChild(message);
    } else {
      matches.forEach(([key, item]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "item-link-btn detail-btn";
        button.dataset.key = key;

        const label = document.createElement("span");
        label.textContent = item.title;

        const arrow = document.createElement("span");
        arrow.textContent = "←";

        button.append(label, arrow);
        body.appendChild(button);
      });
    }

    showScreen("scr-color-group");
  }

  // تسجيل اسم الطالب
  const loginForm = $("#loginForm");
  const studentName = $("#studentName");
  const nameError = $("#nameError");
  const welcomeUserContainer = $("#welcomeUserContainer");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = studentName ? studentName.value.trim() : "";

      if (name.length < 2) {
        if (nameError) nameError.style.display = "block";
        if (studentName) studentName.focus();
        return;
      }

      if (nameError) nameError.style.display = "none";

      if (welcomeUserContainer) {
        welcomeUserContainer.textContent = `أهلًا يا ${name}، جاهز تبدأ؟`;
        welcomeUserContainer.classList.add("welcome-user-message");
      }

      showScreen("scr-main-menu");
    });
  }

  if (studentName && nameError) {
    studentName.addEventListener("input", () => {
      if (studentName.value.trim().length >= 2) {
        nameError.style.display = "none";
      }
    });
  }

  // التعامل مع أزرار التنقل والتفاصيل والألوان
  document.addEventListener("click", (event) => {
    const detailButton = event.target.closest(".detail-btn");

    if (detailButton) {
      openDetail(detailButton.dataset.key);
      return;
    }

    const colorButton = event.target.closest(".color-folder-btn");

    if (colorButton) {
      openColorGroup(colorButton.dataset.colorGroup);
      return;
    }

    const navButton = event.target.closest(".nav-screen-btn");

    if (navButton) {
      const target = navButton.dataset.target;
      if (target) showScreen(target);
      return;
    }

    const menuButton = event.target.closest(
      ".menu-card-btn, [data-target]"
    );

    if (menuButton && menuButton.dataset.target) {
      showScreen(menuButton.dataset.target);
    }
  });

  // الرجوع من معمل الألوان
  const backToColorsBtn = $("#backToColorsBtn");

  if (backToColorsBtn) {
    backToColorsBtn.addEventListener("click", () => {
      showScreen("scr-colors-menu");
    });
  }

  // الرجوع من صفحة التفاصيل
  const goBackDetailBtn = $("#goBackDetailBtn");

  if (goBackDetailBtn) {
    goBackDetailBtn.addEventListener("click", () => {
      showScreen(currentParentScreen);
    });
  }

  // زر الرئيسية والشعار
  ["brandHomeBtn", "homeHeaderBtn"].forEach((id) => {
    const button = document.getElementById(id);

    if (button) {
      button.addEventListener("click", () => {
        const welcome = $("#scr-welcome");
        const isWelcomeVisible =
          welcome && welcome.classList.contains("active");

        showScreen(
          isWelcomeVisible ? "scr-welcome" : "scr-main-menu"
        );
      });
    }
  });

  // إخفاء شاشة البداية
  const splashScreen = $("#splashScreen");

  if (splashScreen) {
    setTimeout(() => {
      splashScreen.classList.add("splash-hidden");

      setTimeout(() => {
        splashScreen.style.display = "none";
      }, 500);
    }, 1000);
  }
});
        
