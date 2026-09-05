// app/page.tsx
"use client";

import React, { useState } from "react";
import {
  Building2,
  HardHat,
  Truck,
  Waves,
  Ruler,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Users
} from "lucide-react";

const siteContent = {
  en: {
    topLocation: "Hawassa (Head Office) & Addis Ababa (Branch), Ethiopia",
    topHours: "Mon - Sat: 8:00 AM - 6:00 PM",
    navAbout: "About Us",
    navLeadership: "Leadership",
    navProjects: "Key Projects",
    navFleet: "Heavy Fleet",
    navServices: "Services",
    navContact: "Tenders & Contact",
    heroTag: "Grade 1 General Contractor (GC-1)",
    heroTitle: "Engineering Corridors, High-Rises & Landmark Civil Works.",
    heroSlogan: "#Building_Skills · #Building_Confidence · #Building_the_Future",
    heroDesc:
      "Melaku Adane General Contractor delivers national-scale infrastructure — from the transformative Hawassa Corridor Development to premier high-rises in Addis Ababa and Africa's finest architectural fountains.",
    btnProjects: "View Our Projects",
    btnContact: "Request a Consultation",
    metrics: [
      { value: "GC - 1", label: "Registered General Contractor" },
      { value: "100%", label: "Lab-Verified Quality Control" },
      { value: "35+", label: "Heavy Machinery Fleet Units" },
      { value: "2 Hubs", label: "Hawassa & Addis Ababa" },
    ],
    // Services
    servicesTitle: "Core Contracting Capabilities",
    servicesSub: "Comprehensive construction and civil engineering services backed by heavy equipment and GC-1 certification.",
    services: [
      {
        title: "Urban Corridor & Road Networks",
        desc: "Turnkey urban corridor infrastructure, asphalt pavement, curbed walkways, and integrated modern drainage.",
        icon: Truck,
      },
      {
        title: "Multi-Story Commercial & Residential",
        desc: "Reinforced concrete structural frames, G+ mixed-use towers, and institutional complexes built to Ethiopian and international codes.",
        icon: Building2,
      },
      {
        title: "Africa-Grade Fountain Engineering",
        desc: "Advanced hydraulic, decorative, and musical fountain engineering with synchronized pump choreographies.",
        icon: Waves,
      },
      {
        title: "Heavy Earthwork & Substructure",
        desc: "Mass site excavation, subgrade stabilization, compaction, and deep foundation engineering.",
        icon: Ruler,
      },
    ],
    // Projects
    projectsTitle: "Featured Landmark Projects",
    projectsSub: "Real on-site execution across Sidama and Addis Ababa regions.",
    projects: [
      {
        title: "Hawassa Corridor Development Project",
        subtitle: "የሀዋሳ ኮሪደር ልማት ስራ",
        category: "Urban Road Corridor",
        location: "Hawassa (Logita to Gabriel, Piassa to Medhanealem)",
        status: "Active & Delivered",
        desc: "Transformation of Hawassa's primary arterial corridors with upgraded asphalt, precast concrete walkways, and green LED median monuments.",
        image: "/hawassa-night.jpg",
      },
      {
        title: "Addis Ababa Bole Bulbula Site",
        subtitle: "የአዲስ አበባ ቦሌ ቡልቡላ ሳይት",
        category: "Structural Building",
        location: "Bole Bulbula, Addis Ababa",
        status: "Under Construction",
        desc: "Multi-story reinforced concrete development utilizing high-load timber formwork and precision structural framing.",
        image: "/bole-bulbula.jpg",
      },
      {
        title: "Ghion Hotel Landmark Musical Fountain",
        subtitle: "የግዮን ሆቴል አፍሪካ-ደረጃ ፏፏቴ",
        category: "Water & Fountain Engineering",
        location: "Ghion Hotel, Addis Ababa",
        status: "Landmark Completed",
        desc: "Renowned as one of Africa's premier civic water landmarks, featuring automated hydraulic systems and night light choreography.",
        image: "/hawassa-sign.jpg",
      },
    ],
    // Heavy Fleet
    fleetTitle: "Our Heavy Machinery Fleet",
    fleetSub: "We own and deploy high-capacity machinery to ensure zero-delay project delivery.",
    fleetItems: [
      { name: "Heavy Motor Graders", desc: "Precision road leveling & subbase preparation", img: "/fleet-grader.jpg" },
      { name: "ZAXIS 350H Excavators", desc: "High-capacity urban & quarry earthwork", img: "/fleet-excavator.jpg" },
      { name: "XCMG Heavy Vibratory Rollers", desc: "Deep soil & asphalt compaction", img: "/fleet-roller.jpg" },
      { name: "Sinotruk Dump Trucks (HOWO)", desc: "Continuous aggregate & earth haulage", img: "/fleet-truck.jpg" },
    ],
    // Leadership
    leadersTitle: "Executive & Site Leadership",
    leadersSub: "Hands-on engineering, experienced management, and daily presence on active sites.",
    leaders: [
      {
        name: "Ato Melaku Adane",
        title: "Founder & General Manager",
        roleDesc: "Visionary contractor directing national GC-1 operations, corporate strategy, and tender delivery.",
        image: "/owner.jpg",
      },
      {
        name: "Ato Tarekegn Karesso",
        title: "Head of Construction Operations",
        roleDesc: "Directing on-site execution, engineering supervision, machinery logistics, and safety standards.",
        image: "/construction-leader.jpg",
      },
    ],
    // Contact
    contactTitle: "Initiate Your Tender or Project",
    contactSub: "Contact our offices in Hawassa or Addis Ababa for technical consultations and quotations.",
    formName: "Full Name",
    formPhone: "Phone Number",
    formEmail: "Email",
    formScope: "Project Type",
    formMessage: "Project Scope & Location",
    formBtn: "Submit Tender / Inquiry",
    footerText: "Melaku Adane General Contractor. All rights reserved.",
  },
  am: {
    topLocation: "ሀዋሳ (ዋና መ/ቤት) እና አዲስ አበባ (ቅርንጫፍ)፣ ኢትዮጵያ",
    topHours: "ሰኞ - ቅዳሜ፡ ከጠዋቱ 2:00 - ማታ 12:00",
    navAbout: "ስለ እኛ",
    navLeadership: "አመራር",
    navProjects: "ፕሮጀክቶች",
    navFleet: "ከባድ ማሽነሪዎች",
    navServices: "አገልግሎቶች",
    navContact: "ያግኙን",
    heroTag: "ደረጃ 1 ጠቅላላ ሥራ ተቋራጭ (GC-1)",
    heroTitle: "የኮሪደር መንገዶችን፣ ፎቆችን እና ታላላቅ የሲቪል ስራዎችን እንገነባለን።",
    heroSlogan: "#ክህሎትን_እንገነባለን · #እምነትን_እንገነባለን · #የወደፊቱን_እንገነባለን",
    heroDesc:
      "መልኩ አዳነ ጠቅላላ ሥራ ተቋራጭ (Melaku Adane General Contractor) የሀዋሳን ኮሪደር ልማት ጨምሮ በአዲስ አበባና በመላው ሀገሪቱ ጥራት ያላቸውን መንገዶች፣ ህንፃዎች እና የአፍሪካ ደረጃ ፏፏቴዎችን የሚገነባ ቀዳሚ ተቋራጭ ነው።",
    btnProjects: "ፕሮጀክቶቻችንን ይመልከቱ",
    btnContact: "የስራ ጥያቄ ያቅርቡ",
    metrics: [
      { value: "ደረጃ 1", label: "ጠቅላላ ሥራ ተቋራጭ (GC-1)" },
      { value: "100%", label: "ጥብቅ የጥራት ቁጥጥር" },
      { value: "35+", label: "ዘመናዊ ከባድ ማሽነሪዎች" },
      { value: "2 ማዕከላት", label: "ሀዋሳ እና አዲስ አበባ" },
    ],
    // Services
    servicesTitle: "የምንሰጣቸው ዋና ዋና አገልግሎቶች",
    servicesSub: "በደረጃ 1 የብቃት ማረጋገጫ እና በዘመናዊ ማሽነሪዎች የሚከናወኑ የኮንስትራክሽን ስራዎች።",
    services: [
      {
        title: "የከተማ ኮሪደርና የአስፋልት መንገዶች",
        desc: "የከተሞችን ገጽታ የሚቀይሩ የኮሪደር መንገዶች፣ የአስፋልት ስራ፣ የእግረኛ መንገዶች እና ደረጃቸውን የጠበቁ የፍሳሽ መስመሮች ግንባታ።",
        icon: Truck,
      },
      {
        title: "የህንፃ እና የንግድ ማዕከላት ግንባታ",
        desc: "ሁለገብ የንግድና የመኖሪያ ፎቆች ከመሰረት እስከ መጨረሻው የፊኒሺንግ ስራ ድረስ በከፍተኛ ጥራት ማከናወን።",
        icon: Building2,
      },
      {
        title: "የፏፏቴና የውሃ ምህንድስና ስራዎች",
        desc: "በአፍሪካ ደረጃ ምርጥ የሆኑ የሙዚቃና የብርሃን ቅንብር ያላቸው ግዙፍ የፏፏቴ ግንባታዎች።",
        icon: Waves,
      },
      {
        title: "ከባድ የመሬት ቁፋሮና ዝግጅት",
        desc: "ሳይቶችን ለግንባታ ማዘጋጀት፣ ጠረጋ፣ የጠጠር ንጣፍ እንዲሁም ጥልቅ የመሰረት ቁፋሮ ስራዎች።",
        icon: Ruler,
      },
    ],
    // Projects
    projectsTitle: "አሻራችን ያረፈባቸው ታላላቅ ፕሮጀክቶች",
    projectsSub: "በሀዋሳ እና በአዲስ አበባ በተግባር የተከናወኑ የስራ ማስረጃዎች።",
    projects: [
      {
        title: "የሀዋሳ ኮሪደር ልማት ስራ",
        subtitle: "Hawassa Corridor Development Project",
        category: "የከተማ ኮሪደር መንገድ",
        location: "ሀዋሳ (ሎጊታ - ገብርኤል እና ፒያሳ - መድኃኔዓለም)",
        status: "በስኬት የተጠናቀቀ / በስራ ላይ ያለ",
        desc: "የሀዋሳን ውበትና የትራፊክ እንቅስቃሴ የቀየረ ዘመናዊ የአስፋልት፣ የእግረኛ ንጣፍ እና በሌሊት የሚያበሩ ሀውልቶች ግንባታ።",
        image: "/hawassa-night.jpg",
      },
      {
        title: "የአዲስ አበባ ቦሌ ቡልቡላ ሳይት",
        subtitle: "#Addis_Abeba_Bole_Bulbulla_Site",
        category: "የህንፃ ግንባታ",
        location: "ቦሌ ቡልቡላ፣ አዲስ አበባ",
        status: "በግንባታ ሂደት ላይ ያለ",
        desc: "በዘመናዊ ፎርምወርክና በጠነከረ ኮንክሪት እየተገነባ ያለ ባለ ብዙ ፎቅ ዘመናዊ ህንፃ።",
        image: "/bole-bulbula.jpg",
      },
      {
        title: "የግዮን ሆቴል ዓለም-አቀፍ ደረጃውን የጠበቀ ፏፏቴ",
        subtitle: "Ghion Hotel Musical Fountain",
        category: "የፏፏቴ ምህንድስና",
        location: "ግዮን ሆቴል፣ አዲስ አበባ",
        status: "የመዲናዋ መለያ ምልክት",
        desc: "በመላው አፍሪካ ግንባር ቀደም የሆነ የሃይድሮሊክና የመብራት ቅንብር ያለው ውብ የፏፏቴ ስራ።",
        image: "/hawassa-sign.jpg",
      },
    ],
    // Heavy Fleet
    fleetTitle: "የድርጅታችን የከባድ ማሽነሪዎች ሀብት",
    fleetSub: "ስራዎችን ያለ ምንም መቆራረጥ በወቅቱ ለማጠናቀቅ የራሳችንን ከባድ ማሽነሪዎች እንጠቀማለን።",
    fleetItems: [
      { name: "ሄቪ ሞተር ግሬደሮች", desc: "ለመንገድ ጠረጋና ማስተካከል", img: "/fleet-grader.jpg" },
      { name: "ዛክሲስ (ZAXIS 350H) ኤክስካቫተሮች", desc: "ለከባድ የመሬት ቁፋሮና ቋጥኝ መስበር", img: "/fleet-excavator.jpg" },
      { name: "ኤክስ ሲ ኤም ጂ (XCMG) ሮለሮች", desc: "የአፈርና አስፋልት ማመቅደቂያ", img: "/fleet-roller.jpg" },
      { name: "ሲኖትራክ (HOWO) የጭነት መኪኖች", desc: "ቀጣይነት ያለው የጠጠርና አፈር ማጓጓዣ", img: "/fleet-truck.jpg" },
    ],
    // Leadership
    leadersTitle: "የድርጅቱ ከፍተኛ አመራሮች",
    leadersSub: "በሳይት ላይ በቀጥታ የሚገኙ፣ ከፍተኛ ልምድ ያላቸው መሃንዲሶችና ስራ አስኪያጆች።",
    leaders: [
      {
        name: "አቶ መልኩ አዳነ",
        title: "መሥራችና ዋና ሥራ አስኪያጅ (Founder & GM)",
        roleDesc: "የተቋሙን አጠቃላይ የስትራቴጂ አቅጣጫ፣ የጨረታና የሀገር አቀፍ የኮንስትራክሽን እድገት የሚመሩ።",
        image: "/owner.jpg",
      },
      {
        name: "አቶ ታረቀኝ ካሬሶ",
        title: "የኮንስትራክሽን ሥራዎች መምሪያ ኃላፊ (Head of Construction)",
        roleDesc: "የሳይት ስራዎችን ጥራት፣ የመሃንዲሶችን ቅንጅት፣ የማሽነሪዎች ስምሪትና የስራ ደህንነትን የሚቆጣጠሩ።",
        image: "/construction-leader.jpg",
      },
    ],
    // Contact
    contactTitle: "የስራ ወይም የጨረታ ጥያቄ ያቅርቡ",
    contactSub: "በሀዋሳም ሆነ በአዲስ አበባ ቢሮዎቻችን ፕሮጀክትዎን አብረን ለመገንባት ዝግጁ ነን።",
    formName: "ሙሉ ስም",
    formPhone: "ስልክ ቁጥር",
    formEmail: "ኢሜይል",
    formScope: "የስራው አይነት",
    formMessage: "የፕሮጀክቱ ዝርዝር መግለጫና ቦታ",
    formBtn: "መልእክት ይላኩ",
    footerText: "መብቱ በህግ የተጠበቀ ነው። መልኩ አዳነ ጠቅላላ ሥራ ተቋራጭ።",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = siteContent[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Bar with Language Toggle */}
      <header className="bg-slate-950 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.topLocation}
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.topHours}
            </span>
          </div>

          {/* Top English / Amharic Selector */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded text-xs font-black transition ${
                  lang === "en" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("am")}
                className={`px-3 py-1 rounded text-xs font-black transition ${
                  lang === "am" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"
                }`}
              >
                አማርኛ
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Melaku Adane General Contractor"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 block leading-tight">
                {lang === "en" ? "MELAKU ADANE" : "መልኩ አዳነ"}
              </span>
              <span className="text-[11px] uppercase font-bold tracking-wider text-amber-600 block">
                {lang === "en" ? "General Contractor GC-1" : "ጠቅላላ ሥራ ተቋራጭ (ደረጃ 1)"}
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#projects" className="hover:text-amber-600 transition">{t.navProjects}</a>
            <a href="#fleet" className="hover:text-amber-600 transition">{t.navFleet}</a>
            <a href="#leadership" className="hover:text-amber-600 transition">{t.navLeadership}</a>
            <a href="#services" className="hover:text-amber-600 transition">{t.navServices}</a>
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-lg font-black transition shadow-sm"
            >
              {t.navContact}
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-bold text-slate-800">{t.navProjects}</a>
            <a href="#fleet" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-bold text-slate-800">{t.navFleet}</a>
            <a href="#leadership" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-bold text-slate-800">{t.navLeadership}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-bold text-slate-800">{t.navServices}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-amber-500 text-slate-950 font-black py-2.5 rounded-lg">
              {t.navContact}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-wider font-extrabold mb-5">
              <HardHat className="w-4 h-4 text-amber-400" /> {t.heroTag}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {t.heroTitle}
            </h1>
            <p className="mt-3 text-sm sm:text-base font-bold tracking-wider text-amber-400 uppercase">
              {t.heroSlogan}
            </p>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 py-3.5 rounded-lg transition inline-flex items-center gap-2 shadow-lg"
              >
                {t.btnProjects} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-lg transition border border-slate-700"
              >
                {t.btnContact}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {t.metrics.map((m, idx) => (
            <div key={idx}>
              <p className="text-2xl sm:text-4xl font-black text-slate-900">{m.value}</p>
              <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600">
              {lang === "en" ? "Real Site Portfolio" : "የተከናወኑ ፕሮጀክቶች"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              {t.projectsTitle}
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              {t.projectsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.projects.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col group"
              >
                <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?q=80&w=1200";
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur text-amber-400 text-xs font-black px-3 py-1 rounded-full border border-slate-700">
                    {p.status}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">{p.category}</span>
                  <h3 className="text-xl font-black text-slate-900 mt-1 mb-1">{p.title}</h3>
                  <p className="text-xs text-slate-400 font-semibold mb-3">{p.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{p.desc}</p>
                  <p className="text-xs font-bold text-slate-500 flex items-center gap-1.5 mt-auto pt-4 border-t border-slate-100">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> {p.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heavy Machinery Fleet Section */}
      <section id="fleet" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600">
              {lang === "en" ? "Self-Sustaining Logistics" : "የማሽነሪ አቅማችን"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              {t.fleetTitle}
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              {t.fleetSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.fleetItems.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 group hover:shadow-md transition">
                <div className="relative h-48 bg-slate-800 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800";
                    }}
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-black text-slate-900 text-base">{item.name}</h4>
                  <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section id="leadership" className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">
              {lang === "en" ? "Company Leadership" : "የአመራር ቡድን"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              {t.leadersTitle}
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg">
              {t.leadersSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl"
              >
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden shrink-0 border-2 border-amber-500/30">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500";
                    }}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-black text-white">{leader.name}</h3>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mt-1 mb-3">
                    {leader.title}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {leader.roleDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600">
              {t.servicesTitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              {t.servicesSub}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <srv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Tender Consultation */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-600">
                {lang === "en" ? "Tenders & Inquiries" : "የጨረታና የስራ ግንኙነት"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                {t.contactTitle}
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                {t.contactSub}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      {lang === "en" ? "Head Office" : "ዋና መ/ቤት"}
                    </p>
                    <p className="font-black text-slate-900 text-sm">Hawassa, Sidama Region, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      {lang === "en" ? "Branch Office" : "ቅርንጫፍ ቢሮ"}
                    </p>
                    <p className="font-black text-slate-900 text-sm">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      {lang === "en" ? "Direct Lines" : "የስልክ መስመሮች"}
                    </p>
                    <p className="font-black text-slate-900 text-sm">+251 90 000 0000 / +251 91 100 0000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.formName}</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                      placeholder="e.g. Abebe / Melaku"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.formPhone}</label>
                    <input
                      type="tel"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                      placeholder="+251 9..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.formEmail}</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                    placeholder="contact@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.formScope}</label>
                  <select className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none">
                    <option>{lang === "en" ? "Hawassa / Regional Corridor Road Project" : "የኮሪደር መንገድ ግንባታ"}</option>
                    <option>{lang === "en" ? "Commercial or Residential Building" : "የህንፃ ግንባታ"}</option>
                    <option>{lang === "en" ? "Africa-Grade Fountain Engineering" : "የፏፏቴ ምህንድስና"}</option>
                    <option>{lang === "en" ? "Heavy Equipment Rental & Earthwork" : "የማሽነሪ ኪራይና ቁፋሮ"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{t.formMessage}</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                    placeholder={lang === "en" ? "Project location, timeline, and scope..." : "የስራው ቦታ፣ መጠን እና ዝርዝር..."}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3.5 rounded-lg transition shadow-md hover:shadow-lg"
                >
                  {t.formBtn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <div>
              <p className="font-black text-white">MELAKU ADANE GENERAL CONTRACTOR</p>
              <p className="text-[11px] text-slate-500">መልኩ አዳነ ጠቅላላ ሥራ ተቋራጭ</p>
            </div>
          </div>
          <p>© {new Date().getFullYear()} {t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}