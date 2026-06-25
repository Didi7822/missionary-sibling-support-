// ============================================================
//  ALMU & DIDI — SITE CONFIGURATION
//  Edit this file to update content across all pages.
//  Save the file, then refresh your browser to see changes.
// ============================================================

const SITE_CONFIG = {

  // ── GOAL & PROGRESS ─────────────────────────────────────
  goal:            20000,   // Total fundraising goal in dollars
  raised:          1050,       // Starting amount — donations are tracked live via the Log panel
  coMissionaries:  5,       // Starting donor count — updates live as donations are logged
  launchDate:      "2026-07-10",  // Launch date — countdown computed automatically
  get daysToLaunch() {
    const launch = new Date("2026-07-10");
    const today  = new Date();
    today.setHours(0, 0, 0, 0);
    launch.setHours(0, 0, 0, 0);
    return Math.max(0, Math.ceil((launch - today) / (1000 * 60 * 60 * 24)));
  },

  // ── CONTACT INFO ─────────────────────────────────────────
  contact: {
    email:      "didierferdinandfaure@gmail.com",  // Primary contact email (shown on site)
    phone:      "956-566-4313",                    // Primary contact phone
    venmoAlmu:  "",                                // e.g. "@AlmuLastName"
    venmoDidi:  "",                                // e.g. "@DidiLastName"
    zelleAlmu:  "",                                // phone or email registered with Zelle
    zelleDidi:  "",                                // phone or email registered with Zelle
  },

  // ── DONATION PLATFORM LINKS ──────────────────────────────
  // Replace these with your real campaign URLs once your pages are live
  donateUrl:      "https://www.givesendgo.com/didi-and-almus-missionary-year?utm_source=share",
  donateFallback: "https://www.gofundme.com",      // TODO: replace with your GoFundMe campaign URL

  // ── EVENTS ───────────────────────────────────────────────
  eventUrl:       "",   // URL for your charity walk / 5K sign-up page (leave blank to hide)

  // ── CHECK PAYABLE TO ─────────────────────────────────────
  checkPayableTo: "Almu & Didi Missionary Year",  // Name on checks — update to your real name/org

  // ── SITE URL (for sharing) ────────────────────────────────
  // Set this once your site is hosted online so share links work
  siteUrl: "",          // e.g. "https://yourname.github.io/mission" — leave blank for local

  // ── ALMU ────────────────────────────────────────────────
  almu: {
    role:        "Regnum Christi Missionary",
    description: "For over a year, I've been praying and preparing for the opportunity to serve as a missionary for a year. After spending a summer doing mission work, I felt God placing a strong desire on my heart to dedicate a full year to serving others and sharing my faith. I'm excited for the ways this experience will help me grow spiritually, build meaningful relationships, and make a difference in the lives of the people I meet. This calling has been on my heart for a long time, and any support toward this journey would truly mean a lot to me and help make this mission possible.",
    // donate page mini-bio:
    bio:         "Called to bring the love of Christ to those around her through a full year of apostolic service.",
    // home page "Why I'm Going" personal statement (edit freely):
    why:         "I want to give everything I have for one year — not for myself, but for Christ and for the souls He loves. I've seen how a single encounter with God can change a life forever. I want to be the person who makes that encounter possible for someone else. This year isn't about what I'll achieve; it's about who I'll become in His hands.",
    // Contact info (individual — add when ready):
    email:       "",
    phone:       "",
    // Path to your photo — put the image file in the src/ folder and set the filename here:
    photo:       "almu.jpeg",
  },

  // ── DIDI ────────────────────────────────────────────────
  didi: {
    role:        "Regnum Christi Missionary",
    description: "Hello everyone, my name is Didi, and during high school I felt pretty lost and nervous about what I wanted to do in my future. This turned my world upside down trying to figure out what the plans for my future would be. After so much thought and stress, I finally went back to the place that comforted me when no place could... the chapel. After a lot of thought and prayer, it dawned on me that being a missionary would be something that seemed pretty cool. Not only had I been trying to better my relationship with God, but I saw the work that the missionaries had done this year, which inspired me to consider it as an option. This little mustard seed in my head turned into long talks with Father Thomas, trying to figure out why I wanted this. After a bit of convincing, I finally talked with my parents about the year. Their words of encouragement and loving, endless support only reinforced my idea of going on this year. Finally, I sit here now in the final step of going off to hopefully teach the younger generation and maybe learn a few things myself. Any donation, no matter how small, helps out. I really appreciate every single one of you, and I'm praying for every single one of you. Thank you so much, and God Bless.",
    // donate page mini-bio:
    bio:         "Answering Christ's call to go out to the whole world — to form, serve, and share the faith.",
    // home page "Why I'm Going" personal statement (edit freely):
    why:         "There's a restlessness in my heart that only mission can satisfy. I've been given so much — faith, community, formation — and I believe God is asking me to pour all of it out in service. I want to go where the need is greatest, love without reserve, and trust that He will provide everything else. That's why I'm going.",
    // Contact info (individual):
    email:       "didierferdinandfaure@gmail.com",
    phone:       "956-566-4313",
    // Path to your photo — file is in the src/ folder:
    photo:       "didi.jpeg",
  },

  // ── HERO TEXT ───────────────────────────────────────────
  heroSubtitle: "We are Almu and Didi — two missionaries with Regnum Christi. We need to raise $20,000 to fund our year of apostolic service. Every strategy, step, and idea is here. Join our mission.",

  // ── MISSIONARY QUOTE (donate page) ──────────────────────
  quote: "This isn't just a fundraiser — it's an invitation. When you give, you're not paying our bills; you're stepping into the mission with us. Every dollar, every prayer, every shared post makes you part of what God is doing through this year. We will carry you with us every single day."

};

// ── DO NOT EDIT BELOW THIS LINE ──────────────────────────
SITE_CONFIG.stillNeeded  = Math.max(0, SITE_CONFIG.goal - SITE_CONFIG.raised);
SITE_CONFIG.pct          = Math.min(100, Math.round((SITE_CONFIG.raised / SITE_CONFIG.goal) * 100));
SITE_CONFIG.raisedFmt    = '$' + SITE_CONFIG.raised.toLocaleString();
SITE_CONFIG.goalFmt      = '$' + SITE_CONFIG.goal.toLocaleString();
SITE_CONFIG.neededFmt    = '$' + SITE_CONFIG.stillNeeded.toLocaleString();
