
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    window.currentParentScreen = "scr-main-menu";
    window.currentColorGroup = "white";

    window.dataDB = {
        ox_gases: {
            title: "تصنيف الغازات (أكسدة واختزال)",
            parent: "scr-ox-menu",
            content: `<div class="detail-card">
                <h3>الغازات القابلة وغير القابلة للأكسدة</h3>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-top:10px">
                    <div style="padding:12px;border-radius:12px;background:rgba(0,0,0,.2)">
                        <h4 style="color:#6ee7b7;margin-bottom:8px">غازات قابلة للأكسدة</h4>
                        <ul style="line-height:1.9"><li>CO</li><li>SO₂</li><li>NO</li><li>HBr(g)</li><li>HI(g)</li></ul>
                    </div>
                    <div style="padding:12px;border-radius:12px;background:rgba(0,0,0,.2)">
                        <h4 style="color:#fda4af;margin-bottom:8px">غازات غير قابلة للأكسدة</h4>
                        <ul style="line-height:1.9"><li>CO₂</li><li>SO₃</li><li>NO₂</li><li>Br₂</li><li>I₂</li><li>Cl₂</li><li>HCl</li></ul>
                    </div>
                </div>
            </div>`
        },

        ox_anions: {
            title: "تصنيف الأنيونات (أكسدة واختزال)",
            parent: "scr-ox-menu",
            content: `<div class="detail-card">
                <h3>الأنيونات القابلة وغير القابلة للأكسدة</h3>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-top:10px">
                    <div style="padding:12px;border-radius:12px;background:rgba(0,0,0,.2)">
                        <h4 style="color:#6ee7b7;margin-bottom:8px">أنيونات قابلة للأكسدة</h4>
                        <ul style="line-height:1.9"><li>S²⁻</li><li>SO₃²⁻</li><li>S₂O₃²⁻</li><li>NO₂⁻</li><li>Br⁻</li><li>I⁻</li></ul>
                    </div>
                    <div style="padding:12px;border-radius:12px;background:rgba(0,0,0,.2)">
                        <h4 style="color:#fda4af;margin-bottom:8px">أنيونات غير قابلة للأكسدة</h4>
                        <ul style="line-height:1.9"><li>HCO₃⁻</li><li>CO₃²⁻</li><li>SO₄²⁻</li><li>PO₄³⁻</li><li>Cl⁻</li></ul>
                    </div>
                </div>
            </div>`
        },

        ox_agents: {
            title: "العوامل المؤكسدة وتفاعل النيتريت",
            parent: "scr-ox-menu",
            content: `<div class="detail-card">
                <h3>العوامل المؤكسدة وتغير الألوان</h3>
                <p><strong>1. برمنجنات البوتاسيوم (KMnO₄):</strong> عامل مؤكسد؛ لونها بنفسجي ويزول عند اختزالها في الوسط الحمضي المناسب.</p>
                <p><strong>2. ثاني كرومات البوتاسيوم (K₂Cr₂O₇):</strong> لونها برتقالي ويتحول إلى أخضر عند اختزالها.</p>
            </div>
            <div class="detail-card">
                <h3>معادلة تفاعل النيتريت مع البرمنجنات في الوسط الحمضي</h3>
                <div class="formula-box">5NaNO₂ + 2KMnO₄ + 3H₂SO₄ → 5NaNO₃ + K₂SO₄ + 2MnSO₄ + 3H₂O</div>
            </div>`
        },

        co3: {
            title: "أنيون الكربونات (CO₃²⁻)",
            parent: "scr-l1-menu",
            colorGroup: "white",
            content: `<div class="detail-card">
                <h3>التجربة الأساسية والتفاعلات</h3>
                <p>يتفاعل الملح مع حمض HCl المخفف مع تصاعد غاز ثاني أكسيد الكربون، الذي يعكر ماء الجير الرائق.</p>
                <div class="formula-box">Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑</div>
                <div class="formula-box">Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O</div>
                <p>الملاحظة: يتكون راسب أبيض من كربونات الكالسيوم.</p>
            </div>
            <div class="detail-card">
                <h3>التجربة التأكيدية</h3>
                <p>مع كبريتات المغنيسيوم يتكون راسب أبيض من كربونات المغنيسيوم على البارد.</p>
                <div class="formula-box">Na₂CO₃ + MgSO₄ → Na₂SO₄ + MgCO₃↓</div>
            </div>`
        },

        hco3: {
            title: "أنيون البيكربونات (HCO₃⁻)",
            parent: "scr-l1-menu",
            colorGroup: "white",
            content: `<div class="detail-card">
                <h3>التجربة الأساسية والتأكيدية</h3>
                <p>يتصاعد غاز CO₂ الذي يعكر ماء الجير. ومع MgSO₄ يتكون راسب أبيض بعد التسخين.</p>
                <div class="formula-box">Mg(HCO₃)₂ → MgCO₃↓ + H₂O + CO₂↑</div>
            </div>`
        },

        s2: {
            title: "أنيون الكبريتيد (S²⁻)",
            parent: "scr-l1-menu",
            colorGroup: "black",
            content: `<div class="detail-card">
                <h3>التجربة الأساسية والتأكيدية</h3>
                <p>قد يتصاعد غاز H₂S، ومع نترات الفضة يتكون راسب أسود من كبريتيد الفضة.</p>
                <div class="formula-box">Na₂S + 2AgNO₃ → 2NaNO₃ + Ag₂S↓</div>
            </div>`
        },

        so3: {
            title: "أنيون الكبريتيت (SO₃²⁻)",
            parent: "scr-l1-menu",
            colorGroup: "white",
            content: `<div class="detail-card">
                <h3>التجربة الأساسية والتأكيدية</h3>
                <p>يتصاعد غاز SO₂، ومع نترات الفضة يتكون راسب أبيض من كبريتيت الفضة قد يسود بالتسخين.</p>
                <div class="formula-box">Na₂SO₃ + 2AgNO₃ → 2NaNO₃ + Ag₂SO₃↓</div>
                <div class="formula-box">Ag₂SO₃ → Ag₂S↓ + SO₃</div>
            </div>`
        },

        s2o3: {
            title: "أنيون الثيوكبريتات (S₂O₃²⁻)",
            parent: "scr-l1-menu",
            colorGroup: "yellow",
            content: `<div class="detail-card">
                <h3>التجربة الأساسية</h3>
                <p>عند إضافة حمض HCl تتكون مادة كبريتية صفراء مع تصاعد غاز SO₂.</p>
                <div class="formula-box">Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂↑ + S↓</div>
            </div>`
        },

        no2: {
            title: "أنيون النيتريت (NO₂⁻)",
            parent: "scr-l1-menu",
            colorGroup: "brown",
            content: `<div class="detail-card">
                <h3>تفاعل النيتريت وأبخرة NO₂</h3>
                <p>يمكن أن يتكون غاز NO الذي يتأكسد بأكسجين الهواء إلى غاز NO₂ ذي اللون البني المحمر.</p>
                <div class="formula-box">2NO + O₂ → 2NO₂↑</div>
            </div>`
        },

        cl: {
            title: "أنيون الكلوريد (Cl⁻)",
            parent: "scr-l2-menu",
            colorGroup: "white",
            content: `<div class="detail-card">
                <h3>التجربة الأساسية والتأكيدية</h3>
                <p>مع نترات الفضة يتكون راسب أبيض من كلوريد الفضة، ويذوب في محلول النشادر المناسب.</p>
                <div class="formula-box">NaCl + AgNO₃ → NaNO₃ + AgCl↓</div>
            </div>`
        },

        br: {
            title: "أنيون البروميد (Br⁻)",
            parent: "scr-l2-menu",
            colorGroup: "yellow",
            content: `<div class="detail-card">
                <h3>التجربة الأساسية والتأكيدية</h3>
                <p>مع نترات الفضة يتكون راسب كريمي أو أبيض مصفر من بروميد الفضة.</p>
                <div class="formula-box">NaBr + AgNO₃ → NaNO₃ + AgBr↓</div>
            </div>`
        },

        i: {
            title: "أنيون اليوديد (I⁻)",
            parent: "scr-l2-menu",
            colorGroup: "yellow",
            content: `<div class="detail-card">
                <h3>التجربة الأساسية والتأكيدية</h3>
                <p>مع نترات الفضة يتكون راسب أصفر من يوديد الفضة لا يذوب في النشادر.</p>
                <div class="formula-box">NaI + AgNO₃ → NaNO₃ + AgI↓</div>
            </div>`
        },

        no3: {
            title: "أنيون النيترات (NO₃⁻)",
            parent: "scr-l2-menu",
            colorGroup: "brown",
            content: `<div class="detail-card">
                <h3>تجربة الحلقة السمراء</h3>
                <p>تتكون حلقة سمراء عند السطح الفاصل بين الطبقتين في الاختبار المعروف باستخدام FeSO₄ وحمض الكبريتيك المركز.</p>
                <div class="formula-box">[Fe(H₂O)₆]²⁺ + NO → معقد نيتروسيل الحديدوز</div>
            </div>`
        },

        po4: {
            title: "أنيون الفوسفات (PO₄³⁻)",
            parent: "scr-l2-menu",
            colorGroup: "yellow",
            content: `<div class="detail-card">
                <h3>التجربة التأكيدية</h3>
                <p>مع نترات الفضة يتكون راسب أصفر من فوسفات الفضة.</p>
                <div class="formula-box">Na₃PO₄ + 3AgNO₃ → 3NaNO₃ + Ag₃PO₄↓</div>
            </div>`
        },

        so4: {
            title: "أنيون الكبريتات (SO₄²⁻)",
            parent: "scr-l2-menu",
            colorGroup: "white",
            content: `<div class="detail-card">
                <h3>التجربة الأساسية والتأكيدية</h3>
                <p>مع كلوريد الباريوم يتكون راسب أبيض من كبريتات الباريوم لا يذوب في حمض HCl المخفف.</p>
                <div class="formula-box">Na₂SO₄ + BaCl₂ → 2NaCl + BaSO₄↓</div>
            </div>`
        },

        cat1: {
            title: "المجموعة التحليلية الأولى",
            parent: "scr-l3-menu",
            colorGroup: "white",
            content: `<div class="detail-card">
                <h3>الترسيب في المجموعة الأولى</h3>
                <p>تترسب كاتيونات المجموعة الأولى باستخدام حمض الهيدروكلوريك المخفف على هيئة كلوريدات شحيحة الذوبان.</p>
                <p>تختلف تفاصيل الاختبار حسب الكاتيون الموجود وظروف التجربة.</p>
            </div>`
        },

        cu2: {
            title: "المجموعة الثانية - النحاس II (Cu²⁺)",
            parent: "scr-l3-menu",
            colorGroup: "black",
            content: `<div class="detail-card">
                <h3>الكشف عن النحاس</h3>
                <p>مع غاز H₂S في وسط حمضي يتكون راسب أسود من كبريتيد النحاس الثنائي.</p>
                <div class="formula-box">Cu²⁺ + H₂S → CuS↓ + 2H⁺</div>
            </div>`
        },

        al3: {
            title: "المجموعة الثالثة - الألومنيوم (Al³⁺)",
            parent: "scr-l3-menu",
            colorGroup: "white",
            content: `<div class="detail-card">
                <h3>الكشف عن الألومنيوم</h3>
                <p>مع هيدروكسيد الصوديوم يتكون راسب أبيض جيلاتيني من هيدروكسيد الألومنيوم، ويذوب في زيادة القلوي.</p>
                <div class="formula-box">Al³⁺ + 3OH⁻ → Al(OH)₃↓</div>
            </div>`
        },

        fe2: {
            title: "المجموعة الثالثة - الحديد II (Fe²⁺)",
            parent: "scr-l3-menu",
            colorGroup: "green",
            content: `<div class="detail-card">
                <h3>الكشف عن الحديد الثنائي</h3>
                <p>مع هيدروكسيد الصوديوم يتكون راسب أبيض مخضر من هيدروكسيد الحديد الثنائي، وقد يتحول لونه عند تعرضه للهواء.</p>
                <div class="formula-box">Fe²⁺ + 2OH⁻ → Fe(OH)₂↓</div>
            </div>`
        },

        fe3: {
            title: "المجموعة الثالثة - الحديد III (Fe³⁺)",
            parent: "scr-l3-menu",
            colorGroup: "brown",
            content: `<div class="detail-card">
                <h3>الكشف عن الحديد الثلاثي</h3>
                <p>مع هيدروكسيد الصوديوم يتكون راسب بني محمر جيلاتيني من هيدروكسيد الحديد الثلاثي.</p>
                <div class="formula-box">Fe³⁺ + 3OH⁻ → Fe(OH)₃↓</div>
            </div>`
        },

        ca2: {
            title: "المجموعة الخامسة - الكالسيوم (Ca²⁺)",
            parent: "scr-l3-menu",
            colorGroup: "white",
            content: `<div class="detail-card">
                <h3>الكشف عن الكالسيوم</h3>
                <p>مع كربونات الأمونيوم يتكون راسب أبيض من كربونات الكالسيوم. ويعطي الكالسيوم لونًا أحمر طوبيًا في اختبار اللهب.</p>
                <div class="formula-box">Ca²⁺ + CO₃²⁻ → CaCO₃↓</div>
            </div>`
        }
    };

    // التنقل بين شاشات المنصة
    window.showScreen = function (screenId) {
        const target = document.getElementById(screenId);
        if (!target || !target.classList.contains("app-screen")) {
            return;
        }

        document.querySelectorAll(".app-screen").forEach(function (screen) {
            screen.classList.remove("active");
        });

        target.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
});
            
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const $ = function (selector, root) {
        return (root || document).querySelector(selector);
    };

    const $$ = function (selector, root) {
        return Array.from((root || document).querySelectorAll(selector));
    };

    const studentNameInput = $("#studentName");
    const loginForm = $("#loginForm");
    const startBtn = $("#startBtn");
    const nameError = $("#nameError");
    const splashScreen = $("#splashScreen");
    const welcomeContainer = $("#welcomeUserContainer");
    const groupContainer = $("#group-content-body");
    const groupTitle = $("#group-title");
    const detailTitle = $("#detail-title");
    const detailBody = $("#detail-body");

    let previousScreen = "scr-main-menu";
    let loginInProgress = false;

    // إظهار رسالة الخطأ أو إخفاؤها
    function setNameError(message) {
        if (nameError) {
            nameError.textContent = message || "اكتب اسمك بحرفين على الأقل.";
            nameError.style.display = message ? "block" : "none";
        }

        if (studentNameInput) {
            studentNameInput.classList.toggle("input-error", Boolean(message));

            if (message) {
                studentNameInput.setAttribute("aria-invalid", "true");
            } else {
                studentNameInput.removeAttribute("aria-invalid");
            }
        }
    }

    // فتح شاشة التفاصيل لأي عنصر في قاعدة البيانات
    function openDetail(key) {
        const item = window.dataDB && window.dataDB[key];

        if (!item || !detailTitle || !detailBody) {
            return;
        }

        // تسجيل الشاشة التي سنرجع إليها
        previousScreen = $("#scr-color-group")?.classList.contains("active")
            ? "scr-color-group"
            : item.parent;

        window.currentParentScreen = previousScreen;

        detailTitle.textContent = item.title;
        detailBody.innerHTML = item.content;

        window.showScreen("scr-detail");
    }

    // إظهار العناصر التابعة للون المختار
    function openColorGroup(groupKey, titleText) {
        if (!groupContainer || !groupTitle) {
            return;
        }

        window.currentColorGroup = groupKey;
        groupTitle.textContent = titleText;

        // حذف المحتوى السابق بأمان
        groupContainer.replaceChildren();

        const fragment = document.createDocumentFragment();
        let count = 0;

        Object.keys(window.dataDB).forEach(function (key) {
            const item = window.dataDB[key];

            if (item.colorGroup !== groupKey) {
                return;
            }

            const button = document.createElement("button");
            button.type = "button";
            button.className = "item-link-btn detail-btn";
            button.dataset.key = key;

            const title = document.createElement("span");
            title.textContent = item.title;

            const arrow = document.createElement("span");
            arrow.textContent = "←";
            arrow.setAttribute("aria-hidden", "true");

            button.append(title, arrow);
            fragment.appendChild(button);
            count++;
        });

        if (count === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.className = "empty-message";
            emptyMessage.textContent =
                "لا توجد عناصر مضافة لهذا اللون حاليًا.";
            fragment.appendChild(emptyMessage);
        }

        groupContainer.appendChild(fragment);
        window.showScreen("scr-color-group");
    }

    // تسجيل الدخول باسم الطالب
    if (loginForm && studentNameInput) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (loginInProgress) {
                return;
            }

            const studentName = studentNameInput.value.trim();

            if (studentName.length < 2) {
                setNameError("اكتب اسمك بحرفين على الأقل.");
                studentNameInput.focus();
                return;
            }

            if (!welcomeContainer || !startBtn) {
                return;
            }

            setNameError("");
            loginInProgress = true;
            startBtn.disabled = true;

            // textContent يمنع تفسير الاسم الذي يكتبه الطالب كـ HTML
            welcomeContainer.replaceChildren();

            const welcomeBanner = document.createElement("div");
            welcomeBanner.className = "user-welcome-banner";
            welcomeBanner.textContent = "أهلًا بيك يا " + studentName + " 👋";
            welcomeContainer.appendChild(welcomeBanner);

            if (splashScreen) {
                splashScreen.classList.add("active");
            }

            // الانتقال إلى القائمة الرئيسية
            window.setTimeout(function () {
                if (splashScreen) {
                    splashScreen.classList.remove("active");
                }

                window.showScreen("scr-main-menu");
                loginInProgress = false;
                startBtn.disabled = false;
            }, 850);
        });

        studentNameInput.addEventListener("input", function () {
            if (studentNameInput.value.trim().length >= 2) {
                setNameError("");
            }
        });
    }

    // الانتقال من البطاقات وأزرار الرجوع
    document.addEventListener("click", function (event) {
        const target = event.target;

        if (!(target instanceof Element)) {
            return;
        }

        // زر الرئيسية في الشريط العلوي
        if (target.closest("#homeHeaderBtn, #brandHomeBtn")) {
            window.showScreen("scr-main-menu");
            return;
        }

        // بطاقات الأقسام وأزرار التنقل
        const navigationButton = target.closest(
            ".menu-card-btn, .nav-screen-btn"
        );

        if (navigationButton) {
            const screenId = navigationButton.dataset.target;

            if (screenId) {
                window.showScreen(screenId);
            }

            return;
        }

        // اختيار لون الراسب
        const colorButton = target.closest(".color-folder-btn");

        if (colorButton) {
            const groupKey = colorButton.dataset.colorGroup;

            if (groupKey) {
                const titleElement = $(".color-name", colorButton);
                const titleText = titleElement
                    ? titleElement.textContent.trim()
                    : "مجموعة اللون";

                openColorGroup(groupKey, titleText);
            }

            return;
        }

        // فتح تفاصيل أنيون أو تجربة
        const detailButton = target.closest(".detail-btn");

        if (detailButton) {
            const key = detailButton.dataset.key;

            if (key) {
                openDetail(key);
            }

            return;
        }

        // الرجوع إلى قائمة الألوان
        if (target.closest("#backToColorsBtn")) {
            window.showScreen("scr-colors-menu");
            return;
        }

        // الرجوع إلى الشاشة السابقة
        if (target.closest("#goBackDetailBtn")) {
            window.showScreen(previousScreen);
        }
    });

    // بدء المنصة على شاشة تسجيل الدخول
    window.showScreen("scr-welcome");
});
    
