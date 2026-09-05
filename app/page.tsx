"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Truck,
  Users,
  Waves,
  X,
} from "lucide-react";

const img = (name: string) => `/melaku/${name}`;

const photos = {
  logo: img("1788597732045.jpg"),
  corridor: img("1788597744924.jpg"),
  graderWork: img("1788597747142.jpg"),
  finishedCorridor: img("1788597758311.jpg"),
  truckLoader: img("1788597770131.jpg"),
  companySign: img("1788597782300.jpg"),
  tanker: img("1788597789184.jpg"),
  landscaping: img("1788597797008.jpg"),
  building: img("1788597803219.jpg"),
  structure: img("1788597805524.jpg"),
  nightExcavator: img("1788597816186.jpg"),
  nightWorks: img("1788597817958.jpg"),
  dumpTruck: img("1788597827348.jpg"),
  roller: img("1788597829437.jpg"),
  roadWorks: img("1788597831401.jpg"),
  excavatorTruck: img("1788597839912.jpg"),
  grader: img("1788597842623.jpg"),
  siteTeam: img("1788597845717.jpg"),
  graderTruck: img("1788597854436.jpg"),
  buildingSite: img("1788597866220.jpg"),
  event: img("1788597876758.jpg"),
  office: img("1788597884155.jpg"),
  completedPath: img("1788597900056.jpg"),
  leader: img("1788597924758.jpg"),
  tarekegn: img("tarekegn.jpg"),
};

const content = {
  en: {
    location: "Hawassa & Addis Ababa, Ethiopia",
    hours: "Mon – Sat · 8:00 AM – 6:00 PM",
    nav: ["About", "Services", "Projects", "Fleet", "Leadership", "Gallery", "Contact"],
    tag: "GENERAL CONTRACTOR · CONSTRUCTION & CIVIL ENGINEERING",
    title: "Building infrastructure that moves communities forward.",
    desc: "Melaku Adane General Contractor delivers practical construction and civil-engineering work across roads, buildings, earthworks and specialist projects.",
    primary: "Explore projects",
    secondary: "Request a consultation",
    heroNote: "Execution · Safety · Accountability",
    aboutEyebrow: "WHO WE ARE",
    aboutTitle: "A field-focused contractor built around execution.",
    aboutText: "Our work brings together site management, construction teams, equipment and practical coordination from early site activity through handover.",
    points: ["Road and urban infrastructure execution", "Commercial, residential and institutional construction", "Earthworks, grading and site preparation", "Heavy equipment deployment and site logistics", "Water and fountain works", "Project coordination from site to handover"],
    servicesEyebrow: "CAPABILITIES",
    servicesTitle: "What we deliver",
    servicesText: "Core services presented around the work the company is equipped to execute.",
    services: [[Truck, "Roads & urban infrastructure", "Corridors, asphalt works, sidewalks, drainage and supporting site infrastructure."], [Building2, "Building construction", "Structural and finishing works for commercial, residential and institutional spaces."], [Ruler, "Earthworks & site preparation", "Excavation, grading, compaction, stabilization and substructure preparation."], [Waves, "Water & fountain works", "Specialized hydraulic and architectural water installations."], [HardHat, "Site management", "Day-to-day coordination of people, materials, equipment and construction activities."], [ShieldCheck, "Quality & safety", "Inspection, safe working practices and accountability throughout delivery."]],
    processEyebrow: "HOW WE WORK",
    processTitle: "A clear delivery process keeps work moving.",
    process: [["01", "Scope", "Understand the brief, site conditions and project priorities."], ["02", "Plan", "Coordinate resources, sequencing, equipment and milestones."], ["03", "Build", "Execute on site with active supervision and practical decisions."], ["04", "Control", "Monitor quality, safety, progress and corrective actions."], ["05", "Handover", "Complete outstanding work and close the project clearly."]],
    projectsEyebrow: "SELECTED WORK",
    projectsTitle: "Projects and field experience",
    projectsText: "A stronger project view using the company's own road, construction and equipment photography.",
    projects: [[photos.corridor, "Hawassa Corridor Development", "Urban infrastructure", "Hawassa"], [photos.roadWorks, "Road & site development", "Civil engineering", "Hawassa"], [photos.building, "Bole Bulbula Development", "Building construction", "Addis Ababa"], [photos.structure, "Structural construction", "Building construction", "Addis Ababa"], [photos.completedPath, "Completed public-space works", "Urban development", "Hawassa"], [photos.nightWorks, "Night construction operations", "Site execution", "Hawassa"]],
    fleetEyebrow: "FLEET",
    fleetTitle: "Heavy equipment close to the work",
    fleetText: "Real field images show the machines used across roadwork, earthmoving, hauling and compaction activities.",
    fleet: [[photos.grader, "Motor grader", "Road shaping and grading"], [photos.graderTruck, "Grader + haulage", "Roadwork support"], [photos.roller, "Vibratory roller", "Compaction"], [photos.excavatorTruck, "Excavator + truck", "Excavation and material handling"], [photos.dumpTruck, "Dump truck", "Material haulage"], [photos.tanker, "Water tanker", "Site and road support"]],
    leadershipEyebrow: "LEADERSHIP",
    leadershipTitle: "People behind the work",
    leadershipText: "Management and site activity stay connected so decisions can remain close to the project.",
    leadership: [[photos.leader, "Ato Melaku Adane", "Founder & General Manager"], [photos.tarekegn, "Tarrekegn Karesso", "Construction Sites Manager · Humble, hardworking & brilliant field leader"], [photos.office, "Construction management", "Office & project coordination"], [photos.siteTeam, "Field team", "Site supervision & execution"]],
    principlesEyebrow: "DELIVERY PRINCIPLES",
    principlesTitle: "What clients should expect",
    principles: [[CheckCircle2, "Clear scope", "Visible priorities and project requirements before execution."], [ShieldCheck, "Safety-minded work", "Safety considered in day-to-day planning and field activity."], [Award, "Quality control", "Inspection and correction built into the delivery cycle."], [Clock3, "Progress discipline", "Milestones and site issues tracked through the work."]],
    galleryEyebrow: "FIELD GALLERY",
    galleryTitle: "A broader view of the work",
    galleryText: "Construction progress, field equipment, completed spaces and company activity in one visual record.",
    faqEyebrow: "FAQ",
    faqTitle: "Common project questions",
    faqs: [["What types of work do you handle?", "Road and urban infrastructure, buildings, earthworks, site preparation and specialist water or fountain works are represented in this company profile."], ["Can you work outside Hawassa?", "The profile presented here includes Hawassa and Addis Ababa operations. Project availability and mobilization should be confirmed during consultation."], ["How can I request a quotation?", "Use the inquiry form below to provide the scope, project type and location. The final verified company email or phone destination can be connected before launch."], ["Can more projects be added?", "Yes. Additional verified project images, descriptions, locations and completion information can be added as the company provides approved material."]],
    contactEyebrow: "TENDERS & CONTACT",
    contactTitle: "Tell us what you are building.",
    contactText: "Share the basic project details so the right person can review the requirement. Verified company contact endpoints should be connected before the final launch.",
    name: "Full name", email: "Email address", phone: "Phone number", type: "Project type", projectLocation: "Project location", message: "Project scope and requirements", submit: "Prepare inquiry",
    success: "Your inquiry form is ready. Connect the company's verified email endpoint to activate direct submission.",
    footer: "Construction · Civil Engineering · Infrastructure",
  },
  am: {
    location: "ሀዋሳ እና አዲስ አበባ፣ ኢትዮጵያ",
    hours: "ሰኞ – ቅዳሜ · 2:00 – 12:00",
    nav: ["ስለ እኛ", "አገልግሎቶች", "ፕሮጀክቶች", "ማሽነሪ", "አመራር", "ጋለሪ", "ያግኙን"],
    tag: "ጠቅላላ ሥራ ተቋራጭ · ግንባታና ሲቪል ኢንጂነሪንግ",
    title: "ማህበረሰቦችን ወደፊት የሚያራምዱ መሠረተ ልማቶችን እንገነባለን።",
    desc: "መልኩ አዳነ ጠቅላላ ሥራ ተቋራጭ በመንገድ፣ በህንፃ፣ በመሬት ስራና በልዩ የግንባታ ስራዎች ላይ ያተኩራል።",
    primary: "ፕሮጀክቶችን ይመልከቱ", secondary: "የምክክር ጥያቄ ያቅርቡ", heroNote: "አፈጻጸም · ደህንነት · ተጠያቂነት",
    aboutEyebrow: "ስለ እኛ", aboutTitle: "በአፈጻጸም ላይ ያተኮረ የግንባታ ተቋርጭ።", aboutText: "የሳይት አስተዳደር፣ ቡድኖች፣ ማሽነሪና ተግባራዊ ማስተባበርን ከመጀመሪያ የሳይት ስራ እስከ ርክክብ እናጣምራለን።",
    points: ["የመንገድና የከተማ መሠረተ ልማት", "የንግድ፣ የመኖሪያና የተቋማት ህንፃዎች", "የመሬት ስራና የሳይት ዝግጅት", "ከባድ ማሽነሪና የሳይት ሎጂስቲክስ", "የውሃና የፏፏቴ ስራዎች", "ከሳይት እስከ ርክክብ የፕሮጀክት ማስተባበር"],
    servicesEyebrow: "አቅሞች", servicesTitle: "የምንሰራቸው", servicesText: "በሳይት አስተዳደርና በከባድ ማሽነሪ የተደገፉ ዋና የግንባታ አቅሞች።",
    services: [[Truck, "መንገድና የከተማ መሠረተ ልማት", "ኮሪደር፣ አስፋልት፣ እግረኛ መንገድና ፍሳሽ።"], [Building2, "የህንፃ ግንባታ", "የንግድ፣ የመኖሪያና የተቋማት ህንፃዎች።"], [Ruler, "የመሬት ስራ", "ቁፋሮ፣ ደረጃ ማስተካከል፣ ማጠናከርና የመሠረት ዝግጅት።"], [Waves, "የውሃና ፏፏቴ ስራ", "ልዩ የሃይድሮሊክና የውሃ ተከላዎች።"], [HardHat, "የሳይት አስተዳደር", "ሰው፣ ቁሳቁስ፣ ማሽነሪና የግንባታ ስራ ማስተባበር።"], [ShieldCheck, "ጥራትና ደህንነት", "ምርመራ፣ ደህንነትና ተጠያቂነት በስራ ሂደት ውስጥ።"]],
    processEyebrow: "የስራ ሂደት", processTitle: "ግልጽ ሂደት ስራን ያስኬዳል።", process: [["01", "ወሰን", "የስራ ዝርዝርና የሳይት ሁኔታ መረዳት።"], ["02", "እቅድ", "ሀብት፣ ማሽነሪና የስራ ቅደም ተከተል ማስተባበር።"], ["03", "ግንባታ", "በንቁ ክትትል ስራን በሳይት መፈጸም።"], ["04", "ቁጥጥር", "ጥራት፣ ደህንነትና እድገት መከታተል።"], ["05", "ርክክብ", "ቀሪ ስራዎችን ማጠናቀቅና ፕሮጀክትን መዝጋት።"]],
    projectsEyebrow: "የተመረጡ ስራዎች", projectsTitle: "ፕሮጀክቶችና የሳይት ልምድ", projectsText: "የመንገድ፣ የህንፃ፣ የማሽነሪና የግንባታ ስራዎች ምስላዊ መዝገብ።",
    projects: [[photos.corridor, "የሀዋሳ ኮሪደር ልማት", "የከተማ መሠረተ ልማት", "ሀዋሳ"], [photos.roadWorks, "የመንገድና ሳይት ልማት", "የሲቪል ምህንድስና", "ሀዋሳ"], [photos.building, "የቦሌ ቡልቡላ ልማት", "የህንፃ ግንባታ", "አዲስ አበባ"], [photos.structure, "የመዋቅር ግንባታ", "የህንፃ ግንባታ", "አዲስ አበባ"], [photos.completedPath, "የተጠናቀቀ የህዝብ ቦታ", "የከተማ ልማት", "ሀዋሳ"], [photos.nightWorks, "የሌሊት የግንባታ ስራ", "የሳይት አፈጻጸም", "ሀዋሳ"]],
    fleetEyebrow: "ማሽነሪ", fleetTitle: "ከባድ ማሽነሪዎች ከስራው ጋር", fleetText: "የራሳችን የማሽነሪ ስራ ምስሎች የመንገድ፣ የመሬትና የጭነት ስራዎችን ያሳያሉ።",
    fleet: [[photos.grader, "ሞተር ግሬደር", "የመንገድ ደረጃ ማስተካከያ"], [photos.graderTruck, "ግሬደር + ትራክ", "የመንገድ ስራ ድጋፍ"], [photos.roller, "ሮለር", "የአፈርና አስፋልት ማጠናከር"], [photos.excavatorTruck, "ኤክስካቫተር + ትራክ", "ቁፋሮና ቁሳቁስ አያያዝ"], [photos.dumpTruck, "ዳምፕ ትራክ", "ቁሳቁስ ማጓጓዝ"], [photos.tanker, "የውሃ ታንከር", "የሳይትና የመንገድ ስራ ድጋፍ"]],
    leadershipEyebrow: "አመራር", leadershipTitle: "ከስራው ጀርባ ያሉ ሰዎች", leadershipText: "አመራሩና የሳይት ቡድኑ ከቀጥታ ስራ ጋር ቅርብ ሆነው ይሰራሉ።",
    leadership: [[photos.leader, "አቶ መልኩ አዳነ", "መስራችና ጠቅላላ ሥራ አስኪያጅ"], [photos.tarekegn, "ታረቀኝ ካረሶ", "የግንባታ ሳይት አስተዳዳሪ · ትሁት፣ ታታሪና ብሩህ የሳይት መሪ"], [photos.office, "የግንባታ አስተዳደር", "ቢሮና የፕሮጀክት ማስተባበር"], [photos.siteTeam, "የሳይት ቡድን", "የሳይት ክትትልና አፈጻጸም"]],
    principlesEyebrow: "የስራ መርሆዎች", principlesTitle: "ደንበኞች ሊጠብቁት የሚገባው", principles: [[CheckCircle2, "ግልጽ የስራ ወሰን", "ስራ ከመጀመሩ በፊት ዋና መስፈርቶች ግልጽ መሆን።"], [ShieldCheck, "የደህንነት ትኩረት", "ደህንነትን በዕለታዊ ዕቅድና ስራ ውስጥ ማካተት።"], [Award, "የጥራት ቁጥጥር", "ምርመራና ማስተካከያ በስራ ሂደት ውስጥ።"], [Clock3, "የእድገት ቁጥጥር", "የስራ ደረጃዎችንና ችግኞችን መከታተል።"]],
    galleryEyebrow: "የሳይት ጋለሪ", galleryTitle: "ሰፊ የስራ ምስላዊ እይታ", galleryText: "የግንባታ ሂደት፣ ማሽነሪዎች፣ የተጠናቀቁ ቦታዎችና የድርጅት እንቅስቃሴ።",
    faqEyebrow: "ጥያቄና መልስ", faqTitle: "የተለመዱ የፕሮጀክት ጥያቄዎች", faqs: [["ምን ዓይነት ስራዎችን ትሰራላችሁ?", "የመንገድና የከተማ መሠረተ ልማት፣ ህንፃ፣ የመሬት ስራ፣ የሳይት ዝግጅትና ልዩ የውሃ ወይም ፏፏቴ ስራዎች።"], ["ከሀዋሳ ውጭ መስራት ይቻላል?", "የድርጅቱ መገለጫ ሀዋሳንና አዲስ አበባን ያካትታል። የፕሮጀክት መስራትና ማንቀሳቀስ በምክክር ይረጋገጣል።"], ["የዋጋ ጥያቄ እንዴት እጠይቃለሁ?", "በታችኛው ፎርም የፕሮጀክቱን ወሰን፣ አይነትና ቦታ ያስገቡ።"], ["ተጨማሪ ፕሮጀክቶች ሊጨመሩ ይችላሉ?", "አዎ። ተጨማሪ የተረጋገጡ ፎቶዎች፣ ዝርዝሮችና የማጠናቀቂያ መረጃዎች ሊጨመሩ ይችላሉ።"]],
    contactEyebrow: "ጨረታና እውቂያ", contactTitle: "ምን እየገነቡ እንደሆነ ይንገሩን።", contactText: "የፕሮጀክቱን መሰረታዊ መረጃ ያጋሩ። የተረጋገጠ የድርጅቱ ኢሜይል ወይም ስልክ በመጨመር ቀጥታ መላኪያ ሊነቃ ይችላል።",
    name: "ሙሉ ስም", email: "ኢሜይል", phone: "ስልክ", type: "የፕሮጀክት አይነት", projectLocation: "የፕሮጀክት ቦታ", message: "የስራ ወሰንና መስፈርቶች", submit: "ጥያቄ ያዘጋጁ", success: "ጥያቄዎ ተዘጋጅቷል። ለቀጥታ መላክ የድርጅቱን የተረጋገጠ ኢሜይል ማገናኘት ያስፈልጋል።",
    footer: "ግንባታ · ሲቪል ኢንጂነሪንግ · መሠረተ ልማት",
  },
} as const;

const gallery = [
  [photos.logo, "Company identity"], [photos.corridor, "Hawassa corridor"], [photos.graderWork, "Roadwork"], [photos.finishedCorridor, "Finished corridor"], [photos.truckLoader, "Heavy equipment"], [photos.companySign, "Company signage"],
  [photos.tanker, "Water tanker"], [photos.landscaping, "Landscaping"], [photos.building, "Building project"], [photos.structure, "Structural works"], [photos.nightExcavator, "Night construction"], [photos.nightWorks, "Night site work"],
  [photos.dumpTruck, "Dump truck"], [photos.roller, "Compaction"], [photos.roadWorks, "Road construction"], [photos.excavatorTruck, "Excavation"], [photos.grader, "Motor grader"], [photos.siteTeam, "Field team"],
  [photos.graderTruck, "Grader and truck"], [photos.buildingSite, "Building frame"], [photos.event, "Company event"], [photos.office, "Office"], [photos.completedPath, "Completed public space"], [photos.leader, "Leadership"], [photos.tarekegn, "Tarrekegn Karesso — Construction Sites Manager"],
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  const t = content[lang];
  const ids = ["about", "services", "projects", "fleet", "leadership", "gallery", "contact"];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return <main id="top" className="min-h-screen bg-[#f7f8fa] text-slate-950">
    <div className="bg-slate-950 text-xs text-white/70"><div className="mx-auto flex max-w-7xl justify-between gap-4 px-5 py-2.5"><span>{t.location}</span><span className="hidden sm:block">{t.hours}</span></div></div>

    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3"><div className="relative h-11 w-11 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><Image src={photos.logo} alt="Melaku Adane General Contractor logo" fill sizes="44px" className="object-contain p-1" priority /></div><div><p className="text-sm font-extrabold tracking-tight sm:text-base">Melaku Adane</p><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">General Contractor</p></div></a>
        <nav className="hidden items-center gap-5 xl:flex">{t.nav.map((label, i) => <a key={label} href={`#${ids[i]}`} className="text-sm font-semibold text-slate-600 transition hover:text-slate-950">{label}</a>)}<button type="button" onClick={() => setLang(lang === "en" ? "am" : "en")} className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-bold">{lang === "en" ? "አማ" : "EN"}</button></nav>
        <div className="flex items-center gap-2 xl:hidden"><button type="button" onClick={() => setLang(lang === "en" ? "am" : "en")} className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-bold">{lang === "en" ? "አማ" : "EN"}</button><button type="button" aria-label="Open navigation" onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2">{open ? <X size={19} /> : <Menu size={19} />}</button></div>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-5 py-3 xl:hidden">{t.nav.map((label, i) => <a key={label} href={`#${ids[i]}`} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-semibold">{label}</a>)}</div>}
    </header>

    <section className="overflow-hidden border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20"><div><p className="mb-5 inline-flex rounded-full bg-slate-950 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">{t.tag}</p><h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">{t.title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{t.desc}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white hover:bg-slate-800">{t.primary}<ArrowRight size={16} /></a><a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3.5 text-sm font-bold hover:bg-slate-50">{t.secondary}</a></div><p className="mt-5 text-xs font-bold tracking-wide text-slate-500">{t.heroNote}</p></div><div className="relative min-h-[500px]"><div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl"><Image src={photos.corridor} alt="Hawassa corridor road project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" /><div className="absolute bottom-0 p-7 text-white"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Selected field image</p><p className="mt-2 text-2xl font-black">Hawassa corridor works</p></div></div><div className="absolute -bottom-5 -left-4 hidden w-44 overflow-hidden rounded-2xl border-8 border-white shadow-xl sm:block"><div className="relative aspect-[4/5]"><Image src={photos.graderWork} alt="Motor grader during road work" fill sizes="176px" className="object-cover" /></div></div><div className="absolute -right-4 -top-5 hidden w-40 overflow-hidden rounded-2xl border-8 border-white shadow-xl sm:block"><div className="relative aspect-[4/5]"><Image src={photos.leader} alt="Company leadership" fill sizes="160px" className="object-cover" /></div></div></div></div></section>

    <section className="border-b border-slate-200 bg-slate-950 text-white"><div className="mx-auto grid max-w-7xl gap-px px-5 sm:grid-cols-2 lg:grid-cols-4">{["Road & urban works", "Building construction", "Heavy equipment", "Hawassa & Addis Ababa"].map(x => <div key={x} className="px-2 py-7 text-sm font-bold sm:px-6">{x}</div>)}</div></section>

    <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-slate-200"><Image src={photos.office} alt="Melaku Adane company office" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /><div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-lg"><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Melaku Adane General Contractor</p><p className="mt-1 text-lg font-extrabold">Execution close to the work.</p></div></div><div className="flex flex-col justify-center"><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t.aboutEyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.aboutTitle}</h2><p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{t.aboutText}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{t.points.map(p => <div key={p} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><CheckCircle2 size={18} className="mt-0.5 shrink-0" /><span className="text-sm font-semibold leading-6 text-slate-700">{p}</span></div>)}</div></div></div></section>

    <section id="services" className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t.servicesEyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.servicesTitle}</h2><p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{t.servicesText}</p><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{t.services.map(([Icon,title,desc]) => <article key={String(title)} className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"><div className="grid size-12 place-items-center rounded-2xl bg-slate-950 text-white"><Icon size={21}/></div><h3 className="mt-6 text-lg font-extrabold">{String(title)}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{String(desc)}</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Discuss capability <ArrowRight size={15}/></a></article>)}</div></div></section>

    <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-5 py-20 lg:py-24"><p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">{t.processEyebrow}</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.processTitle}</h2><div className="mt-10 grid overflow-hidden rounded-3xl border border-white/10 md:grid-cols-5">{t.process.map(([num,title,desc]) => <div key={num} className="border-b border-white/10 p-6 md:border-b-0 md:border-r last:border-0"><p className="text-xs font-black tracking-[0.18em] text-white/35">{num}</p><h3 className="mt-8 font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{desc}</p></div>)}</div></div></section>

    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t.projectsEyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.projectsTitle}</h2><p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{t.projectsText}</p></div><a href="#gallery" className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold">View field gallery <ArrowRight size={16}/></a></div><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{t.projects.map(([src,title,category,location]) => <article key={String(title)} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="relative aspect-[16/10] bg-slate-200"><Image src={src} alt={String(title)} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-500 hover:scale-105"/></div><div className="p-6"><p className="text-[11px] font-bold uppercase tracking-[0.13em] text-slate-500">{String(category)} · {String(location)}</p><h3 className="mt-3 text-xl font-extrabold tracking-tight">{String(title)}</h3></div></article>)}</div></section>

    <section id="fleet" className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t.fleetEyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.fleetTitle}</h2><p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{t.fleetText}</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{t.fleet.map(([src,title,desc]) => <article key={String(title)} className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><div className="relative aspect-[4/3] bg-slate-200"><Image src={src} alt={String(title)} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover"/></div><div className="p-5"><h3 className="font-extrabold">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{String(desc)}</p></div></article>)}</div></div></section>

    <section id="leadership" className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t.leadershipEyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.leadershipTitle}</h2><p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{t.leadershipText}</p><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{t.leadership.map(([src,name,title]) => <article key={String(name)} className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><div className="relative aspect-[4/4.1] bg-slate-200"><Image src={src} alt={String(name)} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover"/></div><div className="p-6"><h3 className="text-lg font-extrabold">{String(name)}</h3><p className="mt-1 text-sm font-semibold text-slate-500">{String(title)}</p></div></article>)}</div></section>

    <section className="border-y border-slate-200 bg-slate-100"><div className="mx-auto max-w-7xl px-5 py-20 lg:py-24"><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t.principlesEyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.principlesTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{t.principles.map(([Icon,title,desc]) => <article key={String(title)} className="rounded-3xl border border-slate-200 bg-white p-6"><Icon size={21}/><h3 className="mt-5 font-extrabold">{String(title)}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{String(desc)}</p></article>)}</div></div></section>

    <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t.galleryEyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.galleryTitle}</h2><p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{t.galleryText}</p><div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{gallery.map(([src,alt],i)=><div key={`${src}-${i}`} className={`relative overflow-hidden rounded-2xl bg-slate-200 ${i%8===0?"col-span-2 row-span-2":i%5===0?"row-span-2":""}`}><Image src={src} alt={alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition duration-500 hover:scale-105"/></div>)}</div></section>

    <section className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-5xl px-5 py-20 lg:py-28"><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t.faqEyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.faqTitle}</h2><div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-[#f8fafc]">{t.faqs.map(([question,answer],i)=>{const active=faq===i;return <button type="button" key={String(question)} onClick={()=>setFaq(active?null:i)} className="w-full px-5 py-5 text-left sm:px-6"><div className="flex items-center justify-between gap-5"><span className="font-extrabold">{String(question)}</span><ChevronDown className={`shrink-0 transition ${active?"rotate-180":""}`} size={18}/></div>{active&&<p className="mt-4 pr-5 text-sm leading-7 text-slate-600">{String(answer)}</p>}</button>})}</div></div></section>

    <section id="contact" className="bg-slate-950 text-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:py-28"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-white/45">{t.contactEyebrow}</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{t.contactTitle}</h2><p className="mt-5 max-w-xl text-base leading-8 text-white/65">{t.contactText}</p><div className="mt-8 space-y-3 text-sm text-white/75"><div className="flex items-center gap-3"><MapPin size={18}/> Hawassa & Addis Ababa, Ethiopia</div><div className="flex items-center gap-3"><Clock3 size={18}/> {t.hours}</div><div className="flex items-center gap-3"><Phone size={18}/> Verified company phone to be added</div><div className="flex items-center gap-3"><Mail size={18}/> Verified company email to be added</div><div className="flex items-center gap-3 border-t border-white/10 pt-5"><Users size={18}/> Tender, project and partnership inquiries</div></div></div><form onSubmit={submit} className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label><span className="text-xs font-bold uppercase tracking-wide text-slate-500">{t.name}</span><input required name="name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"/></label><label><span className="text-xs font-bold uppercase tracking-wide text-slate-500">{t.phone}</span><input name="phone" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"/></label><label><span className="text-xs font-bold uppercase tracking-wide text-slate-500">{t.email}</span><input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"/></label><label><span className="text-xs font-bold uppercase tracking-wide text-slate-500">{t.type}</span><input name="type" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"/></label><label className="sm:col-span-2"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">{t.projectLocation}</span><input name="location" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"/></label><label className="sm:col-span-2"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">{t.message}</span><textarea required name="message" rows={6} className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"/></label></div><button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-4 text-sm font-bold text-white hover:bg-slate-800">{t.submit}<ArrowRight size={16}/></button>{sent&&<p className="mt-4 rounded-xl bg-slate-100 p-4 text-sm font-semibold leading-6 text-slate-700">{t.success}</p>}</form></div></section>

    <footer className="bg-slate-950 text-white/50"><div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Melaku Adane General Contractor. All rights reserved.</span><span>{t.footer}</span></div></footer>
  </main>;
}
