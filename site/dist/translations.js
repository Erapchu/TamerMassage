// Each row preserves the Russian source alongside its English and Arabic translations.
const translationRows = [
  ['Т', 'T', 'ت'],
  ['К содержанию', 'Skip to content', 'انتقل إلى المحتوى'],
  ['Тамер', 'Tamer', 'تامر'],
  ['массаж & восстановление', 'massage & recovery', 'التدليك والتعافي'],
  ['О мастере', 'About Tamer', 'عن تامر'],
  ['Услуги', 'Services', 'الخدمات'],
  ['Как проходит сеанс', 'Your session', 'كيف تجري الجلسة'],
  ['Записаться', 'Book a session', 'احجز جلسة'],
  ['Сертифицированный мастер массажа', 'Certified massage therapist', 'أخصائي تدليك معتمد'],
  ['Тело умеет', 'Your body knows', 'جسمك يعرف كيف'],
  ['восстанавливаться.', 'how to recover.', 'يستعيد عافيته.'],
  ['Помогаю снять напряжение, вернуть лёгкость движения и почувствовать себя лучше — внимательно и без шаблонных решений.', 'I help ease tension, restore freedom of movement and help you feel better, with attentive care tailored to you.', 'أساعدك على تخفيف التوتر واستعادة سهولة الحركة والشعور بتحسن، بعناية واهتمام يناسبان احتياجاتك.'],
  ['Обсудить сеанс', 'Discuss a session', 'تحدث عن جلستك'],
  ['Посмотреть услуги', 'Explore services', 'استعرض الخدمات'],
  ['лет практики', 'years of practice', 'عاماً من الخبرة'],
  ['индивидуальный подход', 'personal approach', 'عناية فردية'],
  ['минут на полный сеанс', 'minutes per full session', 'دقيقة للجلسة الكاملة'],
  ['Спокойная работа', 'Calm, attentive care', 'عناية هادئة'],
  ['с вниманием к телу', 'for your body', 'واهتمام بجسمك'],
  ['массаж · восстановление · движение', 'massage · recovery · movement', 'تدليك · تعافٍ · حركة'],
  ['Здравствуйте, меня зовут Тамер', 'Hello, my name is Tamer', 'مرحباً، اسمي تامر'],
  ['Не просто массаж —', 'More than a massage —', 'أكثر من مجرد تدليك،'],
  ['вдумчивая работа с вашим запросом.', 'thoughtful care for your needs.', 'عناية مدروسة باحتياجاتك.'],
  ['Более 12 лет я помогаю людям справляться с болью и мышечным напряжением. Основам профессии я учился у немецкого профессора в Хургаде, а квалификацию подтвердил сертификатом Американского университета в Каире.', 'For over 12 years, I have helped people manage pain and muscle tension. I learned the foundations of my practice from a German professor in Hurghada and earned a certificate from the American University in Cairo.', 'منذ أكثر من 12 عاماً أساعد الناس على التعامل مع الألم والتوتر العضلي. تعلمت أساسيات المهنة على يد أستاذ ألماني في الغردقة، وحصلت على شهادة من الجامعة الأمريكية بالقاهرة.'],
  ['В работе использую массажные и мануальные техники. После сеанса даю понятные рекомендации: какие упражнения добавить в повседневную жизнь и как поддержать результат.', 'I use massage and manual techniques. After your session, I offer clear advice on exercises to include in everyday life and ways to maintain the results.', 'أستخدم تقنيات التدليك والعلاج اليدوي. وبعد الجلسة أقدم إرشادات واضحة حول التمارين التي يمكنك إضافتها إلى حياتك اليومية وكيفية الحفاظ على النتيجة.'],
  ['«Эффект массажа — естественная восстанавливающая сила организма, сила жизни»', '“The effect of massage is the body’s natural restorative power, the force of life.”', '«أثر التدليك هو قوة الجسم الطبيعية على التعافي، قوة الحياة»'],
  ['Гиппократ', 'Hippocrates', 'أبقراط'],
  ['Подходящий формат', 'The right approach', 'العناية المناسبة'],
  ['для вашего тела', 'for your body', 'لجسمك'],
  ['Начинаем не с готовой схемы, а с разговора: что беспокоит, где чувствуется напряжение и какого результата вы ждёте.', 'We begin with a conversation about what is bothering you, where you feel tension and what you hope to achieve.', 'نبدأ بحوار حول ما يزعجك، وأماكن التوتر، والنتيجة التي تتطلع إليها.'],
  ['Массаж', 'Massage', 'التدليك'],
  ['Аппаратные процедуры', 'Device treatments', 'جلسات بالأجهزة'],
  ['Комплексы', 'Combined sessions', 'جلسات متكاملة'],
  ['Лечебный массаж', 'Therapeutic massage', 'تدليك علاجي'],
  ['Полный сеанс с проработкой зон напряжения и вниманием к вашему самочувствию.', 'A full session focused on areas of tension and your wellbeing.', 'جلسة كاملة تركز على مناطق التوتر مع الاهتمام براحتك.'],
  ['Лечебный плюс', 'Therapeutic Plus', 'تدليك علاجي بلس'],
  ['Расширенный формат для более глубокой и продолжительной работы с телом.', 'An extended approach for deeper, sustained bodywork.', 'جلسة موسعة للعمل على الجسم بعمق أكبر وعناية مستمرة.'],
  ['Детский массаж', 'Children’s massage', 'تدليك للأطفال'],
  ['Бережный формат для детей до 10 лет.', 'A gentle approach for children under 10.', 'عناية لطيفة للأطفال دون سن العاشرة.'],
  ['90 минут', '90 minutes', '90 دقيقة'],
  ['60 минут', '60 minutes', '60 دقيقة'],
  ['30 минут', '30 minutes', '30 دقيقة'],
  ['45 минут', '45 minutes', '45 دقيقة'],
  ['Эндосфера — лицо', 'Endospheres — face', 'إندوسفير — الوجه'],
  ['Виброкомпрессионная процедура для тонуса, микроциркуляции и ухода за кожей.', 'A compressive microvibration treatment for skin tone, microcirculation and skincare.', 'جلسة بالاهتزاز والضغط للعناية بالبشرة ودعم مرونتها والدورة الدموية الدقيقة.'],
  ['Эндосфера — тело', 'Endospheres — body', 'إندوسفير — الجسم'],
  ['Работа с мышечной усталостью, тонусом и контурами тела.', 'Focused care for muscle fatigue, tone and body contours.', 'عناية بإجهاد العضلات وتماسكها وشكل الجسم.'],
  ['HI-FEM — живот', 'HI-FEM — abdomen', 'HI-FEM — البطن'],
  ['Высокоинтенсивная электромагнитная стимуляция для тонуса мышц.', 'High-intensity electromagnetic stimulation for muscle tone.', 'تحفيز كهرومغناطيسي عالي الكثافة لدعم تماسك العضلات.'],
  ['HI-FEM — ягодицы / руки', 'HI-FEM — glutes / arms', 'HI-FEM — الأرداف / الذراعان'],
  ['Локальная стимуляция выбранной зоны.', 'Targeted stimulation of your chosen area.', 'تحفيز موضعي للمنطقة المختارة.'],
  ['от 1 800 ₽', 'from 1 800 ₽', 'ابتداءً من 1 800 ₽'],
  ['от 3 500 ₽', 'from 3 500 ₽', 'ابتداءً من 3 500 ₽'],
  ['Лечебный + EMS + HI-FEM + RF', 'Therapeutic + EMS + HI-FEM + RF', 'تدليك علاجي + EMS + HI-FEM + RF'],
  ['Массаж и аппаратная работа с одной выбранной зоной.', 'Massage and device treatment for one chosen area.', 'تدليك وجلسة بالأجهزة لمنطقة واحدة مختارة.'],
  ['Лечебный + эндосфера', 'Therapeutic + Endospheres', 'تدليك علاجي + إندوسفير'],
  ['Ручная и аппаратная работа в одном полноценном сеансе.', 'Hands-on and device treatments in one full session.', 'عناية يدوية وبالأجهزة في جلسة واحدة متكاملة.'],
  ['Живот + эндосфера лица', 'Abdomen + facial Endospheres', 'البطن + إندوسفير للوجه'],
  ['EMS, HI-FEM и RF для тела плюс аппаратный уход для лица.', 'EMS, HI-FEM and RF for the body, plus a facial device treatment.', 'EMS وHI-FEM وRF للجسم، بالإضافة إلى عناية للوجه بالأجهزة.'],
  ['Комплекс на тело и лицо', 'Body and face combination', 'جلسة متكاملة للجسم والوجه'],
  ['Выбранная зона тела и расширенная процедура эндосферы.', 'Your chosen body area and an extended Endospheres treatment.', 'عناية بمنطقة مختارة من الجسم وجلسة إندوسفير موسعة.'],
  ['Точный формат процедуры Тамер подбирает после короткой консультации.', 'Tamer recommends the right treatment after a short consultation.', 'يختار تامر الجلسة المناسبة بعد استشارة قصيرة.'],
  ['Ваш сеанс', 'Your session', 'جلستك'],
  ['Спокойный кабинет · музыка · удобный стол', 'A calm room · music · a comfortable table', 'غرفة هادئة · موسيقى · سرير مريح'],
  ['Всё начинается с разговора', 'It starts with a conversation', 'كل شيء يبدأ بحوار'],
  ['Понятно.', 'Clear.', 'بوضوح.'],
  ['Бережно.', 'Gentle.', 'بلطف.'],
  ['Постепенно.', 'Gradual.', 'بالتدريج.'],
  ['Определяем запрос', 'Understand your needs', 'نحدد احتياجاتك'],
  ['Обсуждаем, что беспокоит, где ощущается боль или скованность и как давно.', 'We discuss your concerns, where you feel pain or stiffness and how long it has been present.', 'نتحدث عما يزعجك، وأماكن الألم أو التيبس، والمدة التي تشعر فيها بذلك.'],
  ['Снимаем напряжение', 'Ease the tension', 'نخفف التوتر'],
  ['Начинаем с широких плавных движений, чтобы успокоить нервную систему.', 'We start with broad, flowing movements to help calm the nervous system.', 'نبدأ بحركات واسعة وانسيابية للمساعدة على تهدئة الجهاز العصبي.'],
  ['Работаем глубже', 'Work deeper', 'نعمل بعمق أكبر'],
  ['Давление увеличивается постепенно — ровно настолько, насколько это комфортно.', 'Pressure increases gradually, always within your comfort level.', 'نزيد الضغط تدريجياً مع مراعاة مستوى راحتك دائماً.'],
  ['Закрепляем результат', 'Maintain the results', 'نحافظ على النتيجة'],
  ['После сеанса вы получаете рекомендации по воде, движению и упражнениям.', 'After the session, you receive advice on hydration, movement and exercises.', 'بعد الجلسة تحصل على إرشادات حول شرب الماء والحركة والتمارين.'],
  ['Технологии', 'Technology', 'التقنيات'],
  ['Когда ручной работы недостаточно', 'When hands-on care needs support', 'عندما تحتاج العناية اليدوية إلى دعم'],
  ['дополняют массаж.', 'complement massage.', 'تكمّل التدليك.'],
  ['EMS, HI-FEM, RF и эндосфера помогают сфокусироваться на выбранной зоне, поддержать тонус мышц и дополнить программу работы с телом.', 'EMS, HI-FEM, RF and Endospheres help focus on a chosen area, support muscle tone and complement your bodywork programme.', 'تساعد تقنيات EMS وHI-FEM وRF وإندوسفير على التركيز على منطقة مختارة ودعم تماسك العضلات واستكمال برنامج العناية بالجسم.'],
  ['Для тех, кто дочитал до конца', 'For those who stayed to the end', 'لمن تابع القراءة حتى النهاية'],
  ['Знакомьтесь,', 'Meet', 'تعرّفوا على'],
  ['это Рой.', 'Roy.', 'روي.'],
  ['Рой — мой верный друг и спутник на прогулках. Он помогает мне отдохнуть и восстановить силы после рабочего дня. Обычно во время сеанса Рой находится рядом. Если вам будет комфортнее без него, на время массажа он побудет в другом месте.', 'Roy is my loyal friend and walking companion. He helps me unwind and recharge after a day’s work. Roy is usually nearby during sessions. If you would feel more comfortable without him, he will stay elsewhere during your massage.', 'روي صديقي الوفي ورفيقي في المشي. يساعدني على الاسترخاء واستعادة نشاطي بعد يوم العمل. عادةً ما يكون روي قريباً أثناء الجلسة. إذا كنت تشعر براحة أكبر من دونه، فسيبقى في مكان آخر أثناء التدليك.'],
  ['Запись и консультация', 'Booking & consultation', 'الحجز والاستشارة'],
  ['Давайте начнём', 'Let’s start', 'لنبدأ'],
  ['с вашего запроса.', 'with your needs.', 'باحتياجاتك.'],
  ['Позвоните Тамеру: расскажите, что беспокоит, и он поможет выбрать подходящий формат и время.', 'Call Tamer: tell him what is bothering you and he will help you choose the right format and time.', 'اتصل بتامر: أخبره بما يزعجك وسيساعدك في اختيار الصيغة والوقت المناسبين.'],
  ['Как записаться', 'How to book', 'كيفية الحجز'],
  ['Позвоните, чтобы записаться.', 'Call to book your session.', 'اتصل للحجز.'],
  ['лет заботы', 'years of care', 'عاماً من العناية'],
  ['о движении', 'for movement', 'بالحركة'],
  ['Индивидуальная работа с телом', 'Bodywork tailored to you', 'عناية بالجسم تناسبك'],
  ['Тамер — на главную', 'Tamer — home', 'تامر — الصفحة الرئيسية'],
  ['Открыть меню', 'Open menu', 'افتح القائمة'],
  ['Закрыть меню', 'Close menu', 'أغلق القائمة'],
  ['Основная навигация', 'Main navigation', 'التنقل الرئيسي'],
  ['Коротко о мастере', 'Tamer at a glance', 'نبذة عن تامر'],
  ['Категории услуг', 'Service categories', 'فئات الخدمات'],
  ['Язык сайта', 'Site language', 'لغة الموقع'],
  ['Тема сайта', 'Site theme', 'مظهر الموقع'],
  ['Светлая', 'Light', 'فاتح'],
  ['Тёмная', 'Dark', 'داكن'],
  ['Массажист Тамер', 'Tamer, massage therapist', 'تامر، أخصائي التدليك'],
  ['Тамер проводит сеанс массажа в светлом кабинете', 'Tamer giving a massage in a bright treatment room', 'تامر يقدم جلسة تدليك في غرفة مضيئة'],
  ['Аппаратная процедура для мышц живота', 'Device treatment for abdominal muscles', 'جلسة بالأجهزة لعضلات البطن'],
  ['Аппарат EMSculpt во время процедуры', 'EMSculpt device during a treatment', 'جهاز EMSculpt أثناء الجلسة'],
  ['Аппаратная процедура для ягодичных мышц', 'Device treatment for gluteal muscles', 'جلسة بالأجهزة لعضلات الأرداف'],
  ['Овчарка Рой в лесу', 'Roy the shepherd dog in the woods', 'روي، كلب الراعي، في الغابة'],
  ['Тамер и его собака Рой', 'Tamer and his dog Roy', 'تامر وكلبه روي'],
  ['Тамер — массаж и работа с телом', 'Tamer — massage & bodywork', 'تامر — التدليك والعناية بالجسم'],
  ['Массаж у Тамера — сертифицированного мастера с опытом более 12 лет. Индивидуальная работа с телом и аппаратные процедуры.', 'Massage with Tamer, a certified therapist with over 12 years of experience. Personalised bodywork and device treatments.', 'تدليك مع تامر، أخصائي معتمد بخبرة تزيد عن 12 عاماً. عناية فردية بالجسم وجلسات بالأجهزة.'],
];

const translations = new Map(translationRows.map((row) => [row[0], row]));
let currentLanguage = 'ru';
function translate(source) {
  return translations.get(source)?.[{ ru: 0, en: 1, ar: 2 }[currentLanguage]] ?? source;
}

// Keep the original text nodes so switching languages never replaces links or markup.
const translatedNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script, style, #language-select option')) continue;
  if (translations.has(node.textContent.trim())) {
    translatedNodes.push({ node, source: node.textContent.trim(), original: node.textContent });
  }
}
const translatedAttributes = [];
document.querySelectorAll('[aria-label], img[alt], meta[name="description"]').forEach((element) => {
  ['aria-label', 'alt', 'content'].forEach((attribute) => {
    if (element.hasAttribute(attribute)) translatedAttributes.push({ element, attribute, source: element.getAttribute(attribute) });
  });
});
const originalTitle = document.title;
const languageSelect = document.querySelector('#language-select');
const languagePicker = document.querySelector('.language-picker');
const languageOptions = document.querySelector('#language-options');
const languageButtons = [...languageOptions.querySelectorAll('[data-language]')];

function closeLanguagePicker() {
  languageOptions.hidden = true;
  languageSelect.setAttribute('aria-expanded', 'false');
}

function updateMenuLabel() {
  const button = document.querySelector('.menu-toggle');
  button.setAttribute('aria-label', translate(button.getAttribute('aria-expanded') === 'true' ? 'Закрыть меню' : 'Открыть меню'));
}

function setLanguage(language) {
  currentLanguage = ['ru', 'en', 'ar'].includes(language) ? language : 'ru';
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  translatedNodes.forEach(({ node, source, original }) => {
    node.textContent = original.replace(source, () => translate(source));
  });
  translatedAttributes.forEach(({ element, attribute, source }) => element.setAttribute(attribute, translate(source)));
  document.title = translate(originalTitle);
  const selectedLanguage = languageButtons.find((button) => button.dataset.language === currentLanguage);
  languageSelect.querySelector('.language-flag').src = selectedLanguage.querySelector('img').getAttribute('src');
  const languageName = languageSelect.querySelector('.language-name');
  languageName.textContent = selectedLanguage.querySelector('span').textContent;
  languageName.lang = currentLanguage;
  languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button === selectedLanguage)));
  updateMenuLabel();
  try { localStorage.setItem('tamer-language', currentLanguage); } catch { /* Storage may be disabled. */ }
}

languageSelect.addEventListener('click', () => {
  const open = languageOptions.hidden;
  languageOptions.hidden = !open;
  languageSelect.setAttribute('aria-expanded', String(open));
});
languageButtons.forEach((button) => button.addEventListener('click', () => {
  setLanguage(button.dataset.language);
  closeLanguagePicker();
  languageSelect.focus();
}));
languagePicker.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLanguagePicker();
    languageSelect.focus();
  }
  if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
    event.preventDefault();
    languageOptions.hidden = false;
    languageSelect.setAttribute('aria-expanded', 'true');
    const index = languageButtons.indexOf(document.activeElement);
    const next = index < 0 ? languageButtons.findIndex((button) => button.dataset.language === currentLanguage) : (index + (event.key === 'ArrowDown' ? 1 : -1) + languageButtons.length) % languageButtons.length;
    languageButtons[next].focus();
  }
});
document.addEventListener('click', (event) => {
  if (!languagePicker.contains(event.target)) closeLanguagePicker();
});
languagePicker.addEventListener('focusout', (event) => {
  if (!languagePicker.contains(event.relatedTarget)) closeLanguagePicker();
});
let savedLanguage = 'ru';
try { savedLanguage = localStorage.getItem('tamer-language') || 'ru'; } catch { /* Russian remains the default. */ }
setLanguage(savedLanguage);
