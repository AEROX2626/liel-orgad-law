// ============================================================================
// Liel Orgad Law Office — Interactive Homepage Experience
// ============================================================================

const XRAY_SCENARIOS = [
  {
    id: 'zichron',
    code: '§ 01',
    title: 'זיכרון דברים לפני בדיקה',
    riskLabel: 'הסיכון ללא ליווי מוקדם',
    riskText: '״נחתום רק על עמוד אחד כדי לשריין את הדירה, ואחר כך עורכי הדין ינסחו חוזה...״ — בפועל, זיכרון דברים עלול ליצור התחייבות משפטית וחשיפה לקנסות ומס רכישה עוד לפני שנבדקו הזכויות בנכס.',
    solutionLabel: 'איך ליאל עושה לכם סדר',
    solutionText: 'עוצרים לפני שחותמים על כל מסמך מחייב. מבצעים בדיקה משפטית ראשונית של נסח הטאבו, זהות הבעלים והתנאים המסחריים, ומתקדמים להסכם מכר מוגן ומסודר.',
    chips: ['בדיקה לפני התחייבות', 'מניעת מלכודות משפטיות', 'הגנה על כספי המקדמה']
  },
  {
    id: 'rights',
    code: '§ 02',
    title: 'בדיקת זכויות, שעבודים ורישום',
    riskLabel: 'מה עלול להסתתר מתחת לפני השטח',
    riskText: 'דירה שנראית מושלמת בביקור עשויה לכלול הערות אזהרה, עיקולים, שעבודים, חריגות בנייה או רישום מורכב בחברה משכנת / רמ״י שמעכב קבלת משכנתא.',
    solutionLabel: 'איך ליאל עושה לכם סדר',
    solutionText: 'בדיקה יסודית של מצב הזכויות והמסמכים הרלוונטיים לעסקה, ואיתור מוקדם של נקודות שדורשות פתרון משפטי או בדיקה של שמאי ומהנדס — בשפה ברורה ובגובה העיניים.',
    chips: ['נסח טאבו ורמ״י', 'בדיקת שעבודים ועיקולים', 'הכוונה לשמאי / מהנדס בעת הצורך']
  },
  {
    id: 'sync',
    code: '§ 03',
    title: 'מוכרים דירה וקונים אחרת במקביל',
    riskLabel: 'האתגר בעסקה כפולה (משפרי דיור)',
    riskText: 'פער בין מועדי התשלום מהקונה שלכם לבין התשלומים שאתם חייבים למוכר החדש, או אי-התאמה במועדי מסירת המפתח וגרירת המשכנתא.',
    solutionLabel: 'איך ליאל עושה לכם סדר',
    solutionText: 'תכנון מדויק של הקשר בין שתי העסקאות: סנכרון לוחות תשלומים, תאריכי פינוי ומסירה, היבטי מיסוי ומימון, ומנגנוני גמישות למקרה של עיכוב.',
    chips: ['סנכרון לוחות תשלומים', 'תיאום מועדי מסירה', 'תכנון מיסוי ומימון']
  },
  {
    id: 'family',
    code: '§ 04',
    title: 'הסכמי ממון, צוואות וייפוי כוח מתמשך',
    riskLabel: 'החשש משיחות על כסף ועתיד המשפחה',
    riskText: 'שיחה על הפרדת רכוש לפני חתונה או תכנון עתידי של המשפחה עלולה להרגיש מתוחה או לא נוחה, ולעיתים נדחית עד שנוצרת אי-בהירות.',
    solutionLabel: 'איך ליאל עושה לכם סדר',
    solutionText: 'ניהול שיחה פתוחה, רגישה ומכבדת שמאפשרת להגיע להסכמות ברורות. עריכת הסכם ממון, צוואה או ייפוי כוח מתמשך בהתאמה אישית מלאה ובאווירה רגועה.',
    chips: ['שיחה פתוחה ומכבדת', 'הגנה על רכוש קיים ועתידי', 'שקט נפשי למשפחה']
  }
];

const GOOGLE_REVIEWS = [
  { name: 'שמחה גודסי', cat: 'real-estate', text: 'ליאל טיפלה לי במכירת הדירה, היא דאגה לתקתק את כל הפרוצדרות המינהלתיות באופן זריז ומקצועי שחסך ממני תשלום מיותר ודאגה לאינטרסים שלי. בנוסף היתה אוזן קשבת ומקדמת כשעלו אתגרים בתהליך המכירה. ממליצה בחום. תודה ליאל' },
  { name: 'אדיר איתן', cat: 'real-estate', text: 'ליאל עורך דין מקצועית, יודעת לנהל את המו"מ מול הצד השני בשקט ובחכמה, היא שמה לב לפרטים החשובים באמת ויודעת להתעקש עליהם.' },
  { name: 'נעה קרונפלד', cat: 'personal', text: 'ליאל הייתה פשוט מדהימה! מהרגע הראשון הסבירה ודייקה אותנו. היא הייתה סבלנית ואכפתית, וליוותה אותנו במסירות עד הרגע האחרון. אנחנו ממליצים עליה בחום, ונשמח מאוד לחזור לעבוד איתה שוב' },
  { name: 'Eden Shmuel', cat: 'prenup', text: 'ממליצה בחום על ליאל עו״ד המדהימה. עזרה לנו עם הסכם ממון וטופלנו ברגישות, מקצועיות וזריזות. מעריכים ומודים לך' },
  { name: 'Sara Gross', cat: 'real-estate', text: 'ליאל היא עורכת דין מקצוענית מהשורה הראשונה! סופר יסודית, מעמיקה ומסורה, יש לה ראייה כוללת שמחברת את כל הקצוות, יחד עם ירידה לפרטים הקטנים ביותר. מי שמחפש לסגור חוזה בראש שקט – ממליצה עליה בחום רב!' },
  { name: 'ohad bashari', cat: 'real-estate', text: 'אדיבה ומקצועית. כזוג צעיר חיפשנו עו״ד שיבין את הצרכים שלנו בעסקת מכר, יפיג חששות ויעביר אותנו בבטחה וכך היה, עבודה נעימה וזורמת שווה כל שקל!' },
  { name: 'Yuval Keshtcher', cat: 'prenup', text: 'שירות מדהים. ממליץ על ליאל לכל מי שמחפש אשת מקצוע הכי טובה שיש כל הנוגע לעריכת דין. עסקאות נדלן ואפילו הסכם ממון. ליאל היא קודם כל בנאדם ומדברת איתך בגובה העיניים.' },
  { name: 'יאיר פולצ\'ק', cat: 'personal', text: 'ליאל ליוותה אותנו מהרגע הראשון עד הרגע האחרון במסירות מופלאה, כל שלב בתהליך היא ישבה הסבירה תמכה ודאגה לאינטרסים שלנו יצאנו ממש מרוצים ממליצים מאד.' },
  { name: 'אביב דאלי', cat: 'personal', text: 'הגעתי לליאל אחרי המלצות רבות שקיבלתי עליה!! ליאל סייעה לי במספר נושאים משפטיים ומגוונים תוך מתן יחס אישי ואדיב והעניקה רמת שירות אמינה ומקצועית ביותר ונתנה תחושה בטוחה שיש על מי לסמוך!!' },
  { name: 'אורית קייזר', cat: 'personal', text: 'פניתי לעו"ד ליאל אורגד ונעניתי בטיפול מקצועי ואמין. קיבלתי מענה מקצועי מלא לכל סוגיה שהעלתי ולשביעות רצוני. עו"ד אורגד יסודית, מציגה אפשרויות משפטיות בהתאמה ומסייעת לקבל החלטות בתבונה. ממליצה בחום!' },
  { name: 'מיה קאירי', cat: 'personal', text: 'אני ממליצה בחום על ליאל. עורכת דין מקצועית, יסודית ואמינה. לאורך כל הדרך הפגינה זמינות, סבלנות, יחס אישי ואכפתיות אמיתית. ממליצה עליה מכל הלב לכל מי שמחפש ליווי משפטי מקצועי, אישי ואמין!' },
  { name: 'יואב עמרם', cat: 'personal', text: 'נדרשתי לשרותי עו"ד והגעתי אל עו"ד ליאל דרך המלצות חברים אני רוצה לציין שזכיתי בטיפול מסור ומקצועי ובכל רגע בתהליך יכולתי להרים טלפון ולקבל מענה אדיב ומסור. ממליץ בכל לב' },
  { name: 'אבי אל', cat: 'real-estate', text: 'עזרה לנו מאוד בתהליך רכישת הדירה. קבלנו שירות מקצועי וליאל היית זמינה בסבלנות לכל שאלה. ממליץ בחום!' },
  { name: 'לידור סופר', cat: 'personal', text: 'הנסיון שווה הכל! תודה על ההסבר המפורט בפגישה, אין לי ספק שאת הבחירה הכי טובה עבורנו 🙏' },
  { name: 'Noy Ahituv', cat: 'personal', text: 'ליאל היא מעורכות הדין החריפות והחכמות שיצא לי להכיר, ממליצה בחום!!' },
  { name: 'בני חוזה', cat: 'real-estate', text: 'מאד נהניתי לעבוד עם עו״ד אורגד. מקצועית ויעילה ותמיד תהיה בטוח שתקבל את המידע הנדרש, הליווי וההכוונה הנכונים' },
  { name: 'Ori Eldar', cat: 'real-estate', text: 'עו"ד מקצוענית, מסורה ויסודית, אין לי ספק שאקח אותה גם בעסקה הבאה.' },
  { name: 'adi gilad', cat: 'personal', text: 'ליאל נעימה ושירותית, מסבירה לעומק כל מה שצריך להבין. ממליצה בחום!' },
  { name: 'Shani Horev', cat: 'real-estate', text: 'תודה על העזרה והמקצועיות בעזרת השם בדירה הבאה שוב 😊' },
  { name: 'Inbal Olanovsky', cat: 'personal', text: 'ליאל כל כך מקצועית ורגישה. ממש מרוצה על העבודה מולה אפשר לסמוך עליה!' },
  { name: 'Yaniv Vachtel', cat: 'real-estate', text: 'אני ממליץ בחום על ליאל. עורכת דין מקצועית, יסודית ואמינה!' },
  { name: 'אביה כהן', cat: 'personal', text: 'אמינה, מחוייבת לתהליך המשפטי במקצועיות ובמסירות. ממליצה מאוד.' },
  { name: 'Sharon', cat: 'real-estate', text: 'טיפול בהעברת הנכס היה מצויין. מומלצת' },
  { name: 'Eilon Bashari', cat: 'real-estate', text: 'מקצועית, דואגת לפרטים הקטנים ואין ספק שנעזר בה בעתיד' }
];

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeaderScroll();
  initScrollProgressFallback();
  initViewTimelineFallback();
  initBlueprintCanvas();
  initHero3DTilt();
  initBentoSpotlights();
  initXrayInspector();
  initReviewsMarquee();
  initAccordionControls();
  initDialogControls();
  initContactForms();
});

// 1. Theme Toggle (Light Editorial / Dark Midnight Sapphire)
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('liel-theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    if (nextTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('liel-theme', nextTheme);
  });
}

// 2. Sticky Header Elevation on Scroll
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 3. Scroll Progress Indicator Fallback (per modern-web-guidance `scroll-progress-indicator`)
function initScrollProgressFallback() {
  if (!CSS.supports('animation-timeline', 'scroll()')) {
    const progress = document.querySelector('#scroll-progress');
    if (!progress) return;

    window.addEventListener('scroll', () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = window.scrollY;
      const progressPercentage = Math.min(1, Math.max(0, scrolled / scrollable));
      progress.style.transform = `scaleX(${progressPercentage})`;
    }, { passive: true });
  }
}

// 4. Scroll Entry/Exit ViewTimeline Fallback (per modern-web-guidance `scroll-entry-exit-effects`)
function initViewTimelineFallback() {
  if (
    !CSS.supports('(animation-timeline: view()) and (animation-range: entry)') &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  ) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const ratio = entry.intersectionRatio;
          entry.target.style.opacity = String(0.25 + ratio * 0.75);
          entry.target.style.scale = String(0.94 + ratio * 0.06);
        }
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20)
      }
    );

    document.querySelectorAll('.scroll-reveal-item').forEach((el) => {
      observer.observe(el);
    });
  }
}

// 5. Interactive Architectural Blueprint Canvas in Hero
function initBlueprintCanvas() {
  const canvas = document.getElementById('blueprint-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let mouse = { x: -1000, y: -1000 };

  const nodes = [];
  const NODE_COUNT = 28;

  const resize = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });

  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2.2 + 1.2,
      gold: i % 4 === 0
    });
  }

  window.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, { passive: true });

  const render = () => {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // Subtle architectural grid lines
    ctx.strokeStyle = isDark ? 'rgba(102, 149, 255, 0.05)' : 'rgba(10, 33, 96, 0.035)';
    ctx.lineWidth = 1;
    const step = 90;
    for (let x = 0; x < width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Nodes & Connections
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (!prefersReducedMotion) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // Connect nearby nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 170) {
          const alpha = (1 - dist / 170) * (isDark ? 0.22 : 0.14);
          ctx.strokeStyle = n.gold
            ? `rgba(201, 163, 94, ${alpha})`
            : `rgba(44, 91, 199, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }
      }

      // Draw node
      ctx.fillStyle = n.gold
        ? 'rgba(201, 163, 94, 0.65)'
        : isDark ? 'rgba(102, 149, 255, 0.55)' : 'rgba(44, 91, 199, 0.45)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!prefersReducedMotion) {
      requestAnimationFrame(render);
    }
  };

  render();
}

// 6. 3D Tilt on Hero Portrait Stage
function initHero3DTilt() {
  const card = document.querySelector('.portrait-card-3d');
  if (!card || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}

// 7. Radial Cursor Spotlight on Practice Area Bento Cards
function initBentoSpotlights() {
  document.querySelectorAll('.bento-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

// 8. Interactive Contract X-Ray Inspector ("רנטגן להסכם מכר")
function initXrayInspector() {
  const tabsContainer = document.getElementById('xray-tabs');
  const riskLabelEl = document.getElementById('xray-risk-label');
  const riskTextEl = document.getElementById('xray-risk-text');
  const solLabelEl = document.getElementById('xray-sol-label');
  const solTextEl = document.getElementById('xray-sol-text');
  const chipsEl = document.getElementById('xray-chips');

  if (!tabsContainer || !riskTextEl) return;

  const selectScenario = (index) => {
    const item = XRAY_SCENARIOS[index];
    if (!item) return;

    tabsContainer.querySelectorAll('.xray-tab').forEach((btn, idx) => {
      btn.setAttribute('aria-selected', String(idx === index));
    });

    riskLabelEl.textContent = item.riskLabel;
    riskTextEl.textContent = item.riskText;
    solLabelEl.textContent = item.solutionLabel;
    solTextEl.textContent = item.solutionText;

    chipsEl.innerHTML = item.chips
      .map((chip) => `<span class="chip">✓ ${chip}</span>`)
      .join('');
  };

  tabsContainer.querySelectorAll('.xray-tab').forEach((btn, idx) => {
    btn.addEventListener('click', () => selectScenario(idx));
  });

  selectScenario(0);
}

// 9. Google Reviews Marquee & Category Filter + Accessible Pause Button
function initReviewsMarquee() {
  const track1 = document.getElementById('marquee-track-1');
  const track2 = document.getElementById('marquee-track-2');
  const viewport = document.getElementById('marquee-viewport');
  const pauseBtn = document.getElementById('marquee-toggle-btn');

  if (!track1 || !track2 || !viewport) return;

  const createCardHTML = (review) => {
    const initial = review.name.trim().charAt(0).toUpperCase();
    return `
      <article class="review-card">
        <div>
          <div class="review-top">
            <div class="reviewer-info">
              <div class="reviewer-avatar" aria-hidden="true">${initial}</div>
              <div>
                <div class="reviewer-name">${review.name}</div>
                <div class="review-stars" aria-label="5 מתוך 5 כוכבים">★★★★★</div>
              </div>
            </div>
            <span class="chip" style="font-size: 0.72rem; padding: 0.2rem 0.55rem;">Google</span>
          </div>
          <p class="review-body" style="margin-block-start: 0.85rem;">"${review.text}"</p>
        </div>
      </article>
    `;
  };

  const renderReviews = (category = 'all') => {
    const filtered = category === 'all'
      ? GOOGLE_REVIEWS
      : GOOGLE_REVIEWS.filter((r) => r.cat === category);

    const mid = Math.ceil(filtered.length / 2);
    const row1 = filtered.slice(0, mid);
    const row2 = filtered.slice(mid).length ? filtered.slice(mid) : row1;

    // Duplicate items for seamless infinite marquee loop
    track1.innerHTML = [...row1, ...row1].map(createCardHTML).join('');
    track2.innerHTML = [...row2, ...row2].map(createCardHTML).join('');
  };

  renderReviews('all');

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderReviews(btn.dataset.filter || 'all');
    });
  });

  // Accessible Pause/Play control (WCAG 2.2.2 per modern-web-guidance `motion`:
  // label changes between Pause and Play without setting aria-pressed)
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      const isPaused = viewport.classList.toggle('is-paused');
      pauseBtn.textContent = isPaused ? '▶ המשך גלילת ביקורות' : '⏸ עצור גלילת ביקורות';
    });
  }
}

// 10. Native Accordion Expand/Collapse All + Fallback (per modern-web-guidance `accordion`)
function initAccordionControls() {
  const toggleAllHandler = (accordion, button) => {
    const expand = button.getAttribute('aria-expanded') !== 'true';
    for (const details of accordion.querySelectorAll('details')) {
      details.open = expand;
    }
  };

  document.addEventListener('command', (event) => {
    if (event.command !== '--toggle-all') return;
    toggleAllHandler(event.target, event.source);
  }, { capture: true });

  // Fallback for browsers where Invoker Commands are not yet supported
  if (!Object.hasOwn(HTMLButtonElement.prototype, 'commandForElement')) {
    document.querySelectorAll('[command="--toggle-all"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('commandfor');
        const accordion = targetId ? document.getElementById(targetId) : null;
        if (accordion) toggleAllHandler(accordion, btn);
      });
    });
  }

  // Keep button aria-expanded in sync when individual details open or close
  document.addEventListener('toggle', (event) => {
    if (!(event.target instanceof HTMLElement) || !event.target.matches('.accordion details')) return;
    const accordion = event.target.closest('.accordion');
    if (!accordion) return;
    const button = accordion.querySelector('[command="--toggle-all"]');
    if (!button) return;

    const items = accordion.querySelectorAll('details');
    const allOpen = Array.prototype.every.call(items, (details) => details.open);
    button.setAttribute('aria-expanded', String(allOpen));
  }, { capture: true });
}

// 11. Native Dialog Controls & Fallbacks (per modern-web-guidance `dialog`)
function initDialogControls() {
  const dialog = document.getElementById('consult-dialog');
  if (!dialog) return;

  // Fallback if Invoker Commands (`command="show-modal"`) are unsupported
  if (!('commandForElement' in HTMLButtonElement.prototype)) {
    document.querySelectorAll('[command="show-modal"][commandfor="consult-dialog"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        dialog.showModal();
      });
    });
    document.querySelectorAll('[command="close"][commandfor="consult-dialog"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        dialog.close();
      });
    });
  }

  // Fallback for `closedby="any"` light dismiss where unsupported
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e, dlg) => {
      const r = dlg.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    for (const dlg of document.querySelectorAll('dialog[closedby="any"]')) {
      let pressedOutside = false;
      dlg.addEventListener('pointerdown', (e) => {
        pressedOutside = outside(e, dlg);
      });
      dlg.addEventListener('pointerup', (e) => {
        if (pressedOutside && outside(e, dlg)) dlg.close();
      });
    }
  }

  // Reset returnValue on close to avoid stale values leaking
  dialog.addEventListener('close', () => {
    dialog.returnValue = '';
  });
}

// 12. Interactive Contact & WhatsApp Direct Builder
function initContactForms() {
  const handleFormSubmit = (form, statusEl) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('fullName') || '';
      const topic = formData.get('topic') || 'ייעוץ משפטי';
      const notes = formData.get('notes') || '';

      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = `תודה ${name}! פנייתך בנושא "${topic}" נקלטה. מיד תועבר/י גם לשיחת וואטסאפ ישירה עם עו"ד ליאל אורגד.`;
      }

      const waMessage = encodeURIComponent(
        `שלום עו"ד ליאל אורגד, שמי ${name}. אשמח להתייעץ בנושא: ${topic}. ${notes}`
      );
      setTimeout(() => {
        window.open(`https://wa.me/972508899844?text=${waMessage}`, '_blank', 'noopener,noreferrer');
      }, 900);
    });
  };

  const inlineForm = document.getElementById('inline-contact-form');
  const inlineStatus = document.getElementById('inline-form-status');
  if (inlineForm) handleFormSubmit(inlineForm, inlineStatus);

  const modalForm = document.getElementById('modal-contact-form');
  const modalStatus = document.getElementById('modal-form-status');
  if (modalForm) handleFormSubmit(modalForm, modalStatus);
}
