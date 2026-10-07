/* =========================================================================
   projects.js — Single Source of Truth
   -------------------------------------------------------------------------
   لتعديل أي مشروع أو إضافة مشروع جديد، عدّل في المصفوفة التالية فقط.
   لا تلمس ملفات HTML/CSS.

   الحقول:
   - id        : معرّف داخلي فريد (يستخدم لتسمية الصورة المصغّرة المحلية إن وُجدت
                 مثال: assets/thumbnails/falcon-car.jpg)
   - title     : عنوان المشروع كما يظهر
   - subtitle  : سطر فرعي قصير أسفل العنوان (اختياري)
   - category  : واحد من: Automotive | Product | Campaign | Commercial | Brand Film
   - driveId   : Google Drive FILE_ID الرئيسي للفيديو
   - altDriveId: (اختياري) FILE_ID لنسخة ثانية من نفس المشروع، يظهر زر تبديل
                 في المودال بين الاثنين (مثلاً EN / AR)
   - altLabel  : (اختياري) اسم النسخة البديلة الظاهر على الزر
   - primaryLabel : (اختياري) اسم النسخة الأساسية الظاهر على الزر
   - desc      : وصف قصير للمشروع
   - role      : دور عبدو في المشروع
   - featured  : true إذا أردت إظهاره ضمن Selected Work بالأعلى
   ========================================================================= */

window.PROJECTS = [
  {
    id: "falcon-car",
    title: "A Falcon & a Car",
    subtitle: "Cinematic Automotive Short",
    category: "Automotive",
    driveId: "1gu6Z3XtDd8AOV1cvUq8wNFDG_Po4YX7V",
    desc: "A cinematic AI-crafted short pairing a falcon's precision with the poise of a car. Built entirely with AI-generated imagery, motion, and sound design.",
    role: "Concept, Creative Direction, AI Production, Editing",
    featured: true
  },
  {
    id: "maxxol-engine-oil",
    title: "MAXXOL Engine Oil",
    subtitle: "Product Hero Film",
    category: "Product",
    driveId: "155TXsnEefRWT1aKgNU2lSmqIFftHbuVe",
    desc: "The flagship product film for MAXXOL Engine Oil. Positioning the brand as a premium performance lubricant through a fully AI-generated commercial.",
    role: "Creative Direction, AI Production, Post",
    featured: true
  },
  {
    id: "egypt-cairo-alex",
    title: "From Cairo to Alexandria",
    subtitle: "MAXXOL — Egypt",
    category: "Campaign",
    driveId: "1UhbL-XlgGCflNhdGNh0vF-ObZu2NyA9G",
    desc: "Regional campaign film for MAXXOL in Egypt. A cross-country journey narrative connecting the brand to Egyptian roads and drivers.",
    role: "Creative Direction, AI Production, Editing",
    featured: true
  },
  {
    id: "spare-parts",
    title: "Automotive Spare Parts",
    subtitle: "Brand Commercial",
    category: "Automotive",
    driveId: "1jl-4q5CGE9CKAfXoVef314qEEUVrVisr",
    desc: "AI-produced commercial for an automotive spare parts brand, emphasizing precision engineering and reliability.",
    role: "Creative Direction, AI Production"
  },
  {
    id: "maxxol-trucks",
    title: "MAXXOL For Trucks",
    subtitle: "Heavy-Duty Product Film",
    category: "Product",
    driveId: "1HzkVdqTlj_9o9y9wh01H9Mtj9agcEA26",
    desc: "Product film for the MAXXOL heavy-duty line — built for trucks. Focus on durability, load-bearing performance, and long-haul reliability.",
    role: "Creative Direction, AI Production, Editing"
  },
  {
    id: "maxxol-5w30",
    title: "MAXXOL 5W-30",
    subtitle: "Product Launch",
    category: "Product",
    driveId: "12RszyH8YrCVBZYFLp02w8zN3Xy8B7MI3",
    desc: "Launch film for MAXXOL 5W-30 — introducing the viscosity grade through AI-generated cinematic product visuals.",
    role: "Creative Direction, AI Production"
  },
  {
    id: "maxxol-5w30-farm",
    title: "MAXXOL 5W-30 — The Farm",
    subtitle: "Story Commercial",
    category: "Commercial",
    driveId: "1lOLzYnxhHrzF2IB-K2_5m6vQaYNTiSm5",
    desc: "A narrative commercial set in a rural farm environment, positioning MAXXOL 5W-30 as the choice for machinery that works the land.",
    role: "Concept, Creative Direction, AI Production, Editing"
  },
  {
    id: "maxxol-5w40-truck",
    title: "MAXXOL 5W-40 — The Truck",
    subtitle: "Story Commercial",
    category: "Commercial",
    driveId: "1GU_eDpWFRckID5jEEympG5W2fIh6yC69",
    desc: "A cinematic truck-driven commercial for MAXXOL 5W-40. Highway, weight, engine — grounded in a driver's story.",
    role: "Concept, Creative Direction, AI Production, Editing"
  },
  {
    id: "maxxol-saudi",
    title: "Saudi Arabia",
    subtitle: "MAXXOL — Regional Campaign",
    category: "Campaign",
    driveId: "1Lrpf9ADSKcYLtvAMzvts76801u5wK9sU",
    desc: "MAXXOL regional adaptation for the Saudi market — leveraging local landscape and cultural texture.",
    role: "Creative Direction, AI Production"
  },
  {
    id: "maxxol-iraq",
    title: "Iraq",
    subtitle: "MAXXOL — Regional Campaign",
    category: "Campaign",
    driveId: "1_TXROqzrJ5PQJiFC0UdRV5eZlxXIgMhe",
    desc: "MAXXOL regional adaptation for the Iraqi market.",
    role: "Creative Direction, AI Production"
  },
  {
    id: "maxxol-lebanon",
    title: "Lebanon",
    subtitle: "MAXXOL — Regional Campaign",
    category: "Campaign",
    driveId: "1tUAS7B70QnBADEgJ2K01nzO7dBsfxGlb",
    desc: "MAXXOL regional adaptation for the Lebanese market.",
    role: "Creative Direction, AI Production"
  },
  {
    id: "maxxol-sudan",
    title: "Sudan",
    subtitle: "MAXXOL — Regional Campaign",
    category: "Campaign",
    driveId: "10ZRjpjRse8ylK120u_0KUbr3BgnAdNvp",
    desc: "MAXXOL regional adaptation for the Sudanese market.",
    role: "Creative Direction, AI Production"
  },
  {
    id: "yemeni-coffee",
    title: "Yemeni Coffee",
    subtitle: "Product Film",
    category: "Product",
    driveId: "1f4QetUjVPWPvi6CBSbFPvYEm88Y19P0G",
    desc: "A product film celebrating Yemeni coffee — heritage, aroma, and origin, told through AI-generated cinematography.",
    role: "Creative Direction, AI Production, Editing"
  },
  {
    id: "al-yaseen",
    title: "Al-Yaseen",
    subtitle: "Brand Film",
    category: "Brand Film",
    driveId: "1xlwQUFRpqpvtk7AsGbYjOm90nWgz46lL",
    desc: "Brand film for Al-Yaseen — an AI-produced piece exploring brand identity through mood, pace, and visual language.",
    role: "Creative Direction, AI Production, Editing"
  }
];
