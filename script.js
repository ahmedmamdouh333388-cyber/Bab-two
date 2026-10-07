document.addEventListener("DOMContentLoaded", function () {
    var currentParentScreen = "scr-main-menu";

    // قاعدة بيانات الدروس والرواسب والألوان
    var dataDB = {
        co3: {
            title: "أنيون الكربونات (CO₃²⁻)",
            parent: "scr-l1-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + حمض HCl المخفف ← يحدث فوران ويتصاعد غاز ثاني أكسيد الكربون (CO₂) الذي يعكر ماء الجير الرائق لفترة قصيرة (ST).</p><div class="formula-box">Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)↑</div><div class="formula-box">Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s)↓ (راسب أبيض) + H₂O(l)</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + محلول كبريتات المغنسيوم (MgSO₄) ← يتكون <span class="color-badge bg-white-prec">راسب أبيض على البارد</span> يذوب في حمض HCl.</p><div class="formula-box">Na₂CO₃(aq) + MgSO₄(aq) → Na₂SO₄(aq) + MgCO₃(s)↓</div></div>'
        },
        hco3: {
            title: "أنيون البيكربونات (HCO₃⁻)",
            parent: "scr-l1-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + حمض HCl المخفف ← يحدث فوران ويتصاعد غاز CO₂ الذي يعكر ماء الجير الرائق عند إمراره لفترة قصيرة.</p><div class="formula-box">NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)↑</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + محلول MgSO₄ ← يتكون <span class="color-badge bg-white-prec">راسب أبيض بعد التسخين</span>.</p><div class="formula-box">2NaHCO₃(aq) + MgSO₄(aq) → Na₂SO₄(aq) + Mg(HCO₃)₂(aq)</div><div class="formula-box">Mg(HCO₃)₂(aq) —Δ→ MgCO₃(s)↓ (راسب أبيض) + H₂O(l) + CO₂(g)↑</div></div>'
        },
        s2: {
            title: "أنيون الكبريتيد (S²⁻)",
            parent: "scr-l1-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + حمض HCl المخفف ← يتصاعد غاز H₂S ذو الرائحة الكريهة والذي يسوّد ورقة مبللة بأسيتات الرصاص II.</p><div class="formula-box">Na₂S(s) + 2HCl(aq) → 2NaCl(aq) + H₂S(g)↑</div><div class="formula-box">(CH₃COO)₂Pb(aq) + H₂S(g) → 2CH₃COOH(aq) + PbS(s)↓ (أسود)</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + محلول نترات الفضة (AgNO₃) ← يتكون <span class="color-badge bg-black-prec">راسب أسود</span> من كبريتيد الفضة.</p><div class="formula-box">Na₂S(aq) + 2AgNO₃(aq) → 2NaNO₃(aq) + Ag₂S(s)↓ (أسود)</div></div>'
        },
        so3: {
            title: "أنيون الكبريتيت (SO₃²⁻)",
            parent: "scr-l1-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + حمض HCl المخفف ← يتصاعد غاز SO₂ ذو الرائحة النفاذة والذي يخضر ورقة مبللة بثاني كرومات البوتاسيوم المحمضة.</p><div class="formula-box">Na₂SO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + SO₂(g)↑</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + AgNO₃ ← يتكون <span class="color-badge bg-white-prec">راسب أبيض يسوّد بالتسخين</span>.</p><div class="formula-box">Na₂SO₃(aq) + 2AgNO₃(aq) → 2NaNO₃(aq) + Ag₂SO₃(s)↓ (أبيض)</div><div class="formula-box">Ag₂SO₃(s) —Δ→ Ag₂S(s)↓ (أسود) + SO₃(g)</div></div>'
        },
        s2o3: {
            title: "أنيون الثيوكبريتات (S₂O₃²⁻)",
            parent: "scr-l1-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + HCl المخفف ← يتصاعد غاز SO₂ مع <span class="color-badge bg-yellow-prec">معلق أصفر</span> من الكبريت S.</p><div class="formula-box">Na₂S₂O₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + SO₂(g)↑ + S(s)↓</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + محلول اليود البني ← يزول لون اليود البني لتكون مركبات عديمة اللون.</p><div class="formula-box">2Na₂S₂O₃(aq) + I₂(aq) → Na₂S₄O₆(aq) + 2NaI(aq)</div></div>'
        },
        no2: {
            title: "أنيون النيتريت (NO₂⁻)",
            parent: "scr-l1-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + HCl المخفف ← يتصاعد غاز NO عديم اللون يتحول عند فوهة الأنبوبة إلى أبخرة <span class="color-badge bg-brown-prec">بنية حمراء</span> من NO₂.</p><div class="formula-box">NaNO₂(s) + HCl(aq) → NaCl(aq) + HNO₂(aq)</div><div class="formula-box">3HNO₂(aq) → HNO₃(aq) + H₂O(l) + 2NO(g)↑</div><div class="formula-box">2NO(g) + O₂(g) → 2NO₂(g)↑ (بني محمر)</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + برمنجنات البوتاسيوم (KMnO₄) المحمضة ← يزول اللون البنفسجي للبرمنجنات.</p><div class="formula-box">5NaNO₂ + 2KMnO₄ + 3H₂SO₄ → 5NaNO₃ + K₂SO₄ + 2MnSO₄ + 3H₂O</div></div>'
        },
        cl: {
            title: "أنيون الكلوريد (Cl⁻)",
            parent: "scr-l2-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + H₂SO₄ المركز الساخن ← يتصاعد غاز HCl عديم اللون ويكون سحبًا بيضاء مع ساق مبللة بمحلول النشادر NH₃.</p><div class="formula-box">2NaCl(s) + H₂SO₄(l) —Δ→ Na₂SO₄(aq) + 2HCl(g)↑</div><div class="formula-box">HCl(g) + NH₃(g) → NH₄Cl(s) (سحب بيضاء)</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + AgNO₃ ← يتكون <span class="color-badge bg-white-prec">راسب أبيض</span> يذوب بسرعة في محلول النشادر المركز.</p><div class="formula-box">NaCl(aq) + AgNO₃(aq) → NaNO₃(aq) + AgCl(s)↓</div></div>'
        },
        br: {
            title: "أنيون البروميد (Br⁻)",
            parent: "scr-l2-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + H₂SO₄ المركز الساخن ← تتصاعد أبخرة برتقالية حمراء من البروم Br₂ تصفّر ورقة مبللة بالنشا.</p><div class="formula-box">2NaBr + H₂SO₄ —Δ→ Na₂SO₄ + 2HBr</div><div class="formula-box">2HBr + H₂SO₄ —Δ→ 2H₂O + SO₂ + Br₂ (برتقالي احمر)</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + AgNO₃ ← يتكون <span class="color-badge bg-yellow-prec">راسب أبيض مصفر</span> يذوب ببطء في محلول النشادر المركز.</p><div class="formula-box">NaBr(aq) + AgNO₃(aq) → NaNO₃(aq) + AgBr(s)↓</div></div>'
        },
        i: {
            title: "أنيون اليوديد (I⁻)",
            parent: "scr-l2-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + H₂SO₄ المركز الساخن ← تتسامى أبخرة بنفسجية من اليود I₂ تزرق ورقة مبللة بالنشا.</p><div class="formula-box">2NaI + H₂SO₄ —Δ→ Na₂SO₄ + 2HI</div><div class="formula-box">2HI + H₂SO₄ —Δ→ 2H₂O + SO₂ + I₂ (بنفسجي)</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + AgNO₃ ← يتكون <span class="color-badge bg-yellow-prec">راسب أصفر</span> لا يذوب في محلول النشادر.</p><div class="formula-box">NaI(aq) + AgNO₃(aq) → NaNO₃(aq) + AgI(s)↓</div></div>'
        },
        no3: {
            title: "أنيون النيترات (NO₃⁻)",
            parent: "scr-l2-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>الملح الصلب + H₂SO₄ المركز الساخن ← تتصاعد أبخرة <span class="color-badge bg-brown-prec">بنية حمراء</span> من غاز NO₂ تزداد بكثافة عند إضافة خراطة النحاس Cu.</p><div class="formula-box">Cu + 4HNO₃ —Δ→ Cu(NO₃)₂ + 2H₂O + 2NO₂↑</div></div><div class="detail-card"><h3>التجربة التأكيدية (الحلقة السمراء)</h3><p>محلول الملح + FeSO₄ حديثة التحضير + قطرات H₂SO₄ مركز بحرص ← تتكون <span class="color-badge bg-brown-prec">حلقة سمراء</span> عند السطح الفاصل تزول بالرج أو التسخين.</p><div class="formula-box">FeSO₄ + NO → FeSO₄·NO (مركب الحلقة السمراء)</div></div>'
        },
        po4: {
            title: "أنيون الفوسفات (PO₄³⁻)",
            parent: "scr-l2-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>محلول الملح + محلول كلوريد الباريوم BaCl₂ ← يتكون <span class="color-badge bg-white-prec">راسب أبيض</span> يذوب في حمض HCl المخفف.</p><div class="formula-box">2Na₃PO₄ + 3BaCl₂ → 6NaCl + Ba₃(PO₄)₂(s)↓</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + AgNO₃ ← يتكون <span class="color-badge bg-yellow-prec">راسب أصفر</span> يذوب في كل من محلول النشادر وحمض النيتريك.</p><div class="formula-box">Na₃PO₄ + 3AgNO₃ → 3NaNO₃ + Ag₃PO₄(s)↓</div></div>'
        },
        so4: {
            title: "أنيون الكبريتات (SO₄²⁻)",
            parent: "scr-l2-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>محلول الملح + محلول BaCl₂ ← يتكون <span class="color-badge bg-white-prec">راسب أبيض لا يذوب</span> في حمض HCl المخفف.</p><div class="formula-box">Na₂SO₄ + BaCl₂ → 2NaCl + BaSO₄(s)↓</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + أسيتات الرصاص II ← يتكون <span class="color-badge bg-white-prec">راسب أبيض</span> من كبريتات الرصاص.</p><div class="formula-box">Na₂SO₄ + (CH₃COO)₂Pb → 2CH₃COONa + PbSO₄(s)↓</div></div>'
        },
        cat1: {
            title: "المجموعة التحليلية الأولى",
            parent: "scr-l3-menu",
            content: '<div class="detail-card"><h3>الكاشف وأيونات المجموعة</h3><p><strong>الكاشف:</strong> حمض HCl المخفف.</p><p><strong>الأيونات:</strong> الفضة الأحادي (Ag⁺)، الزئبق الأحادي (Hg⁺)، الرصاص II (Pb²⁺).</p><p><strong>سبب الترسيب:</strong> ترسب على هيئة <span class="color-badge bg-white-prec">كلوريدات شحيحة الذوبان في الماء</span>.</p></div>'
        },
        cu2: {
            title: "المجموعة الثانية - النحاس II (Cu²⁺)",
            parent: "scr-l3-menu",
            content: '<div class="detail-card"><h3>الكشف عن كاتيون النحاس II</h3><p><strong>الكاشف:</strong> غاز H₂S في وسط حمضي (HCl).</p><p><strong>الملاحظة:</strong> يتكون <span class="color-badge bg-black-prec">راسب أسود</span> من CuS يذوب في حمض النيتريك الساخن.</p><div class="formula-box">CuSO₄(aq) + H₂S(g) —HCl→ H₂SO₄(aq) + CuS(s)↓ (أسود)</div></div>'
        },
        al3: {
            title: "المجموعة الثالثة - الألومنيوم (Al³⁺)",
            parent: "scr-l3-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>محلول الملح + NH₄OH ← يتكون <span class="color-badge bg-white-prec">راسب أبيض جيلاتيني</span> يذوب في الأحماض والصودا الكاوية.</p><div class="formula-box">AlCl₃ + 3NH₄OH → 3NH₄Cl + Al(OH)₃(s)↓</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + NaOH ← يتكون راسب أبيض جيلاتيني يذوب في الزيادة من NaOH لتكون ميتا ألومينات الصوديوم.</p><div class="formula-box">Al(OH)₃ + NaOH → NaAlO₂(aq) + 2H₂O</div></div>'
        },
        fe2: {
            title: "المجموعة الثالثة - الحديد II (Fe²⁺)",
            parent: "scr-l3-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>محلول الملح + NH₄OH ← يتكون <span class="color-badge bg-green-prec">راسب أبيض يتحول لأبيض مخضر</span> بالهواء.</p><div class="formula-box">FeSO₄ + 2NH₄OH → (NH₄)₂SO₄ + Fe(OH)₂(s)↓</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + NaOH ← يتكون <span class="color-badge bg-green-prec">راسب أبيض مخضر</span> من Fe(OH)₂.</p><div class="formula-box">FeSO₄ + 2NaOH → Na₂SO₄ + Fe(OH)₂(s)↓</div></div>'
        },
        fe3: {
            title: "المجموعة الثالثة - الحديد III (Fe³⁺)",
            parent: "scr-l3-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>محلول الملح + NH₄OH ← يتكون <span class="color-badge bg-brown-prec">راسب بني محمر جيلاتيني</span>.</p><div class="formula-box">FeCl₃ + 3NH₄OH → 3NH₄Cl + Fe(OH)₃(s)↓</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + NaOH ← يتكون <span class="color-badge bg-brown-prec">راسب بني محمر جيلاتيني</span> من Fe(OH)₃.</p><div class="formula-box">FeCl₃ + 3NaOH → 3NaCl + Fe(OH)₃(s)↓</div></div>'
        },
        ca2: {
            title: "المجموعة الخامسة - الكالسيوم (Ca²⁺)",
            parent: "scr-l3-menu",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>محلول الملح + (NH₄)₂CO₃ ← يتكون <span class="color-badge bg-white-prec">راسب أبيض</span> من كربونات الكالسيوم CaCO₃ يذوب في حمض HCl المخفف والماء المحتوي على CO₂.</p><div class="formula-box">CaCl₂ + (NH₄)₂CO₃ → 2NH₄Cl + CaCO₃(s)↓</div></div><div class="detail-card"><h3>التجربة التأكيدية والتأكيدية الجافة</h3><p>1. مع حمض H₂SO₄ المخفف ← يتكون <span class="color-badge bg-white-prec">راسب أبيض</span> من CaSO₄.</p><p>2. كشف لهب بنزن (الكشف الجاف) ← يكسب المنطقة غير المضيئة لونًا <span class="color-badge bg-red-prec">أحمر طوبيًا</span>.</p></div>'
        }
    };

    // التنقل بين الشاشات
    function showScreen(screenId) {
        var screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen) {
            screen.classList.remove('active');
        });
        var targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
        window.scrollTo(0, 0);
    }

    // زر قائمة الألوان
    var paletteBtn = document.getElementById('paletteBtn');
    var themeMenu = document.getElementById('themeMenu');
    if (paletteBtn && themeMenu) {
        paletteBtn.addEventListener('click', function () {
            themeMenu.classList.toggle('active');
        });
    }

    // السيمات الألوان
    var themeOpts = document.querySelectorAll('.theme-opt');
    themeOpts.forEach(function (opt) {
        opt.addEventListener('click', function () {
            var themeName = opt.getAttribute('data-theme');
            document.body.className = themeName;
            themeMenu.classList.remove('active');
            if(lampBtn) lampBtn.classList.remove('active');
        });
    });

    // زر اللمبة (السهارية)
    var lampBtn = document.getElementById('lampBtn');
    if (lampBtn) {
        lampBtn.addEventListener('click', function () {
            lampBtn.classList.toggle('active');
            document.body.classList.toggle('theme-night-lamp');
        });
    }

    // تسجيل الدخول والترحيب بالاسم
    var startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function (e) {
            e.preventDefault();
            var studentName = document.getElementById('studentName').value.trim();
            
            if (studentName !== "") {
                var welcomeTitle = document.getElementById('userWelcomeTitle');
                if (!welcomeTitle) {
                    var h2 = document.createElement('h2');
                    h2.id = 'userWelcomeTitle';
                    h2.style.cssText = "color: var(--primary-accent); font-size: 1.1rem; margin-bottom: 15px; text-align: center;";
                    h2.innerText = "أهلاً بك يا " + studentName + " 👋";
                    document.getElementById('scr-main-menu').prepend(h2);
                } else {
                    welcomeTitle.innerText = "أهلاً بك يا " + studentName + " 👋";
                }
            }
            showScreen('scr-main-menu');
        });
    }

    // أزرار التنقل الرئيسية
    var navBtns = document.querySelectorAll('.nav-screen-btn');
    navBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var target = btn.getAttribute('data-target');
            showScreen(target);
        });
    });

    // أزرار فتح الشرح
    var detailBtns = document.querySelectorAll('.detail-btn');
    detailBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var key = btn.getAttribute('data-key');
            var item = dataDB[key];
            if (item) {
                currentParentScreen = item.parent;
                document.getElementById('detail-title').innerText = item.title;
                document.getElementById('detail-body').innerHTML = item.content;
                showScreen('scr-detail');
            }
        });
    });

    // أزرار قسم الألوان
    var colorDetailBtns = document.querySelectorAll('.color-detail-btn');
    colorDetailBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var key = btn.getAttribute('data-key');
            var item = dataDB[key];
            if (item) {
                currentParentScreen = 'scr-colors-menu';
                document.getElementById('detail-title').innerText = "رواسب ولون: " + item.title;
                document.getElementById('detail-body').innerHTML = item.content;
                showScreen('scr-detail');
            }
        });
    });

    // زر الرجوع
    var goBackDetailBtn = document.getElementById('goBackDetailBtn');
    if (goBackDetailBtn) {
        goBackDetailBtn.addEventListener('click', function () {
            showScreen(currentParentScreen);
        });
    }

    // برمجة زر الواتساب العائم والسحب
    var waBtn = document.getElementById('whatsappFloatBtn');
    if (waBtn) {
        var isDragging = false;
        var hasDragged = false;
        var startX, startY, initialLeft, initialTop;
        var phoneNum = "201225428692";

        function onStart(e) {
            isDragging = true;
            hasDragged = false;
            var clientX = e.touches ? e.touches[0].clientX : e.clientX;
            var clientY = e.touches ? e.touches[0].clientY : e.clientY;

            startX = clientX;
            startY = clientY;

            var rect = waBtn.getBoundingClientRect();
            initialLeft = rect.left;
            initialTop = rect.top;
        }

        function onMove(e) {
            if (!isDragging) return;
            var clientX = e.touches ? e.touches[0].clientX : e.clientX;
            var clientY = e.touches ? e.touches[0].clientY : e.clientY;

            var dx = clientX - startX;
            var dy = clientY - startY;

            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                hasDragged = true;
            }

            var newLeft = initialLeft + dx;
            var newTop = initialTop + dy;

            var maxLeft = window.innerWidth - waBtn.offsetWidth;
            var maxTop = window.innerHeight - waBtn.offsetHeight;

            newLeft = Math.max(10, Math.min(newLeft, maxLeft - 10));
            newTop = Math.max(10, Math.min(newTop, maxTop - 10));

            waBtn.style.left = newLeft + 'px';
            waBtn.style.top = newTop + 'px';
            waBtn.style.bottom = 'auto';
        }

        function onEnd() {
            if (!hasDragged && isDragging) {
                window.open("https://wa.me/" + phoneNum, "_blank");
            }
            isDragging = false;
        }

        waBtn.addEventListener('mousedown', onStart);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onEnd);

        waBtn.addEventListener('touchstart', onStart, { passive: true });
        window.addEventListener('touchmove', onMove, { passive: true });
        window.addEventListener('touchend', onEnd);
    }
});
            
