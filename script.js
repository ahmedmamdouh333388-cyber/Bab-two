document.addEventListener("DOMContentLoaded", function () {
    var currentParentScreen = "scr-main-menu";

    var dataDB = {
        co3: {
            title: "أنيون الكربونات (CO₃²⁻)",
            parent: "scr-l1-menu",
            colorGroup: "white",
            content: '<div class="detail-card"><h3>التجربة الأساسية والتفاعلات</h3><p>الملح الصلب + حمض HCl المخفف ← يحدث فوران ويتصاعد غاز ثاني أكسيد الكربون (CO₂) الذي يعكر ماء الجير الرائق.</p><div class="formula-box">Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)↑</div><div class="formula-box">Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s)↓ (راسب أبيض) + H₂O(l)</div></div><div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + كبريتات المغنسيوم (MgSO₄) ← يتكون <span style="color:#38bdf8; font-weight:bold;">راسب أبيض على البارد</span>.</p><div class="formula-box">Na₂CO₃(aq) + MgSO₄(aq) → Na₂SO₄(aq) + MgCO₃(s)↓</div></div>'
        },
        hco3: {
            title: "أنيون البيكربونات (HCO₃⁻)",
            parent: "scr-l1-menu",
            colorGroup: "white",
            content: '<div class="detail-card"><h3>التجربة الأساسية والتأكيدية</h3><p>يتصاعد غاز CO₂ يعكر ماء الجير، ومع MgSO₄ يتكون <span style="color:#38bdf8; font-weight:bold;">راسب أبيض بعد التسخين</span>.</p><div class="formula-box">Mg(HCO₃)₂(aq) —Δ→ MgCO₃(s)↓ (راسب أبيض) + H₂O(l) + CO₂(g)↑</div></div>'
        },
        s2: {
            title: "أنيون الكبريتيد (S²⁻)",
            parent: "scr-l1-menu",
            colorGroup: "black",
            content: '<div class="detail-card"><h3>التجربة الأساسية والتأكيدية</h3><p>يتصاعد غاز H₂S الذي يسوّد ورقة أسيتات الرصاص، ومع نترات الفضة يتكون <span style="color:#38bdf8; font-weight:bold;">راسب أسود</span>.</p><div class="formula-box">Na₂S(aq) + 2AgNO₃(aq) → 2NaNO₃(aq) + Ag₂S(s)↓ (أسود)</div></div>'
        },
        so3: {
            title: "أنيون الكبريتيت (SO₃²⁻)",
            parent: "scr-l1-menu",
            colorGroup: "white",
            content: '<div class="detail-card"><h3>التجربة الأساسية والتأكيدية</h3><p>يتصاعد غاز SO₂ يخضر ورقة ثاني كرومات البوتاسيوم، ومع AgNO₃ يتكون <span style="color:#38bdf8; font-weight:bold;">راسب أبيض يسوّد بالتسخين</span>.</p><div class="formula-box">Ag₂SO₃(s) —Δ→ Ag₂S(s)↓ (أسود) + SO₃(g)</div></div>'
        },
        s2o3: {
            title: "أنيون الثيوكبريتات (S₂O₃²⁻)",
            parent: "scr-l1-menu",
            colorGroup: "yellow",
            content: '<div class="detail-card"><h3>التجربة الأساسية</h3><p>يتصاعد غاز SO₂ مع <span style="color:#eab308; font-weight:bold;">معلق أصفر</span> من الكبريت S.</p><div class="formula-box">Na₂S₂O₃(s) + 2HCl(aq) → 2NaCl + H₂O + SO₂ + S(s)↓</div></div>'
        },
        no2: {
            title: "أنيون النيتريت (NO₂⁻)",
            parent: "scr-l1-menu",
            colorGroup: "brown",
            content: '<div class="detail-card"><h3>أبخرة NO₂ البنية الحمراء وتفاعل النيتريت</h3><p>يتصاعد غاز NO يتحول عند فوهة الأنبوبة إلى أبخرة <span style="color:#b45309; font-weight:bold;">بنية حمراء</span> من غاز NO₂.</p><div class="formula-box">2NO(g) + O₂(g) → 2NO₂(g)↑ (بني محمر)</div></div>'
        },
        cl: {
            title: "أنيون الكلوريد (Cl⁻)",
            parent: "scr-l2-menu",
            colorGroup: "white",
            content: '<div class="detail-card"><h3>التجربة الأساسية والتأكيدية</h3><p>تصاعد غاز HCl المكون لسحب بيضاء، ومع AgNO₃ يتكون <span style="color:#38bdf8; font-weight:bold;">راسب أبيض</span> يذوب بسرعة في النشادر.</p><div class="formula-box">NaCl(aq) + AgNO₃(aq) → NaNO₃(aq) + AgCl(s)↓</div></div>'
        },
        br: {
            title: "أنيون البروميد (Br⁻)",
            parent: "scr-l2-menu",
            colorGroup: "yellow",
            content: '<div class="detail-card"><h3>التجربة الأساسية والتأكيدية</h3><p>تتصاعد أبخرة برتقالية حمراء، ومع AgNO₃ يتكون <span style="color:#eab308; font-weight:bold;">راسب أبيض مصفر</span> يذوب ببطء في النشادر.</p><div class="formula-box">NaBr(aq) + AgNO₃(aq) → NaNO₃(aq) + AgBr(s)↓</div></div>'
        },
        i: {
            title: "أنيون اليوديد (I⁻)",
            parent: "scr-l2-menu",
            colorGroup: "yellow",
            content: '<div class="detail-card"><h3>التجربة الأساسية والتأكيدية</h3><p>تسامى أبخرة بنفسجية، ومع AgNO₃ يتكون <span style="color:#eab308; font-weight:bold;">راسب أصفر</span> لا يذوب في النشادر.</p><div class="formula-box">NaI(aq) + AgNO₃(aq) → NaNO₃(aq) + AgI(s)↓</div></div>'
        },
        no3: {
            title: "أنيون النيترات (NO₃⁻)",
            parent: "scr-l2-menu",
            colorGroup: "brown",
            content: '<div class="detail-card"><h3>تجربة الحلقة السمراء (FeSO₄)</h3><p>تتكون <span style="color:#b45309; font-weight:bold;">حلقة سمراء</span> عند السطح الفاصل نتيجة تفاعل مركب FeSO₄ مع غاز NO.</p><div class="formula-box">FeSO₄ + NO → FeSO₄·NO (مركب الحلقة السمراء)</div></div>'
        },
        po4: {
            title: "أنيون الفوسفات (PO₄³⁻)",
            parent: "scr-l2-menu",
            colorGroup: "yellow",
            content: '<div class="detail-card"><h3>التجربة التأكيدية</h3><p>محلول الملح + AgNO₃ يتكون <span style="color:#eab308; font-weight:bold;">راسب أصفر</span> يذوب في النشادر وحمض النيتريك.</p><div class="formula-box">Na₃PO₄ + 3AgNO₃ → 3NaNO₃ + Ag₃PO₄(s)↓</div></div>'
        },
        so4: {
            title: "أنيون الكبريتات (SO₄²⁻)",
            parent: "scr-l2-menu",
            colorGroup: "white",
            content: '<div class="detail-card"><h3>التجربة الأساسية والتأكيدية</h3><p>محلول الملح + BaCl₂ يتكون <span style="color:#38bdf8; font-weight:bold;">راسب أبيض</span> لا يذوب في HCl.</p><div class="formula-box">Na₂SO₄ + BaCl₂ → 2NaCl + BaSO₄(s)↓</div></div>'
        },
        cat1: {
            title: "المجموعة التحليلية الأولى",
            parent: "scr-l3-menu",
            colorGroup: "white",
            content: '<div class="detail-card"><h3>الشقوق والترسيب</h3><p>تترسب على هيئة <span style="color:#38bdf8; font-weight:bold;">كلوريدات شحيحة الذوبان</span> في الماء.</p></div>'
        },
        cu2: {
            title: "المجموعة الثانية - النحاس II (Cu²⁺)",
            parent: "scr-l3-menu",
            colorGroup: "black",
            content: '<div class="detail-card"><h3>الكشف عن النحاس</h3><p>مع غاز H₂S في وسط حمضي يتكون <span style="color:#38bdf8; font-weight:bold;">راسب أسود</span> من CuS.</p><div class="formula-box">CuSO₄(aq) + H₂S(g) → CuS(s)↓ (أسود)</div></div>'
        },
        al3: {
            title: "المجموعة الثالثة - الألومنيوم (Al³⁺)",
            parent: "scr-l3-menu",
            colorGroup: "white",
            content: '<div class="detail-card"><h3>الكشف عن الألومنيوم</h3><p>يتكون <span style="color:#38bdf8; font-weight:bold;">راسب أبيض جيلاتيني</span> يذوب في الزيادة من الصودا الكاوية.</p></div>'
        },
        fe2: {
            title: "المجموعة الثالثة - الحديد II (Fe²⁺)",
            parent: "scr-l3-menu",
            colorGroup: "green",
            content: '<div class="detail-card"><h3>الكشف عن الحديد II وتفاعل FeSO₄</h3><p>مع محلول هيدروكسيد الصوديوم يتكون <span style="color:#22c55e; font-weight:bold;">راسب أبيض مخضر</span>.</p><div class="formula-box">FeSO₄ + 2NaOH → Na₂SO₄ + Fe(OH)₂(s)↓ (أبيض مخضر)</div></div>'
        },
        fe3: {
            title: "المجموعة الثالثة - الحديد III (Fe³⁺)",
            parent: "scr-l3-menu",
            colorGroup: "brown",
            content: '<div class="detail-card"><h3>الكشف عن الحديد III</h3><p>يتكون <span style="color:#b45309; font-weight:bold;">راسب بني محمر جيلاتيني</span> من Fe(OH)₃.</p><div class="formula-box">FeCl₃ + 3NaOH → 3NaCl + Fe(OH)₃(s)↓ (بني محمر)</div></div>'
        },
        ca2: {
            title: "المجموعة الخامسة - الكالسيوم (Ca²⁺)",
            parent: "scr-l3-menu",
            colorGroup: "white",
            content: '<div class="detail-card"><h3>الكشف عن الكالسيوم</h3><p>مع كربونات الأمونيوم يتكون <span style="color:#38bdf8; font-weight:bold;">راسب أبيض</span>، ويكسب لهب بنزن لوناً أحمر طوبياً.</p></div>'
        }
    };

    function showScreen(screenId) {
        document.querySelectorAll('.app-screen').forEach(function (screen) {
            screen.classList.remove('active');
        });
        var targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
        window.scrollTo(0, 0);
    }

    var homeHeaderBtn = document.getElementById('homeHeaderBtn');
    if (homeHeaderBtn) {
        homeHeaderBtn.onclick = function () {
            showScreen('scr-main-menu');
        };
    }

    var startBtn = document.getElementById('startBtn');
    var studentNameInput = document.getElementById('studentName');
    var nameError = document.getElementById('nameError');
    var splashScreen = document.getElementById('splashScreen');

    if (startBtn && studentNameInput) {
        startBtn.onclick = function (e) {
            e.preventDefault();
            var studentName = studentNameInput.value.trim();

            if (studentName.length < 2) {
                studentNameInput.classList.add('input-error');
                if (nameError) nameError.style.display = 'block';
                return;
            }

            studentNameInput.classList.remove('input-error');
            if (nameError) nameError.style.display = 'none';

            var welcomeContainer = document.getElementById('welcomeUserContainer');
            if (welcomeContainer) {
                welcomeContainer.innerHTML = '<div class="user-welcome-banner">أهلاً بك يا ' + studentName + ' 👋</div>';
            }

            if (splashScreen) {
                splashScreen.classList.add('active');
                setTimeout(function () {
                    splashScreen.classList.remove('active');
                    showScreen('scr-main-menu');
                }, 1200);
            } else {
                showScreen('scr-main-menu');
            }
        };
    }

    document.querySelectorAll('.nav-screen-btn').forEach(function (btn) {
        btn.onclick = function () {
            var target = btn.getAttribute('data-target');
            showScreen(target);
        };
    });

    // تنظيم عرض الرواسب حسب اللون المختار
    document.querySelectorAll('.color-folder-btn').forEach(function (btn) {
        btn.onclick = function () {
            var groupKey = btn.getAttribute('data-color-group');
            var groupTitleText = btn.querySelector('span:nth-child(2)').innerText;
            
            var container = document.getElementById('group-content-body');
            document.getElementById('group-title').innerText = groupTitleText;
            
            var htmlContent = '';
            for (var key in dataDB) {
                if (dataDB[key].colorGroup === groupKey) {
                    htmlContent += '<button class="item-link-btn detail-btn" data-key="' + key + '">' + dataDB[key].title + ' <span>←</span></button>';
                }
            }
            
            if (htmlContent === '') {
                htmlContent = '<p style="text-align:center; color:#9ca3af; padding:20px;">لا توجد عناصر مضافة لهذه المجموعة حالياً.</p>';
            }
            
            container.innerHTML = htmlContent;
            
            container.querySelectorAll('.detail-btn').forEach(function (detBtn) {
                detBtn.onclick = function () {
                    var k = detBtn.getAttribute('data-key');
                    var item = dataDB[k];
                    if (item) {
                        currentParentScreen = 'scr-color-group';
                        document.getElementById('detail-title').innerText = item.title;
                        document.getElementById('detail-body').innerHTML = item.content;
                        showScreen('scr-detail');
                    }
                };
            });

            showScreen('scr-color-group');
        };
    });

    var backToColorsBtn = document.getElementById('backToColorsBtn');
    if (backToColorsBtn) {
        backToColorsBtn.onclick = function () {
            showScreen('scr-colors-menu');
        };
    }

    document.querySelectorAll('.detail-btn').forEach(function (btn) {
        btn.onclick = function () {
            var key = btn.getAttribute('data-key');
            var item = dataDB[key];
            if (item) {
                currentParentScreen = item.parent;
                document.getElementById('detail-title').innerText = item.title;
                document.getElementById('detail-body').innerHTML = item.content;
                showScreen('scr-detail');
            }
        };
    });

    var goBackDetailBtn = document.getElementById('goBackDetailBtn');
    if (goBackDetailBtn) {
        goBackDetailBtn.onclick = function () {
            showScreen(currentParentScreen);
        };
    }
});
            
