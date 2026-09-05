"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Building2, CheckCircle2, HardHat, Mail, MapPin, Menu, Phone, Ruler, Truck, Users, Waves, X } from "lucide-react";

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
};

const content = {
  en: {
    location: "Hawassa & Addis Ababa, Ethiopia",
    hours: "Mon – Sat · 8:00 AM – 6:00 PM",
    nav: ["About", "Services", "Projects", "Fleet", "Leadership", "Contact"],
    tag: "GENERAL CONTRACTOR",
    title: "Building infrastructure that moves communities forward.",
    desc: "Melaku Adane General Contractor delivers construction and civil-engineering work across roads, buildings, earthworks and specialized infrastructure.",
    primary: "Explore projects", secondary: "Start a conversation",
    stats: [["GC-1", "Contractor classification"], ["35+", "Fleet units*"], ["2", "Operating hubs*"], ["100%", "Quality-first delivery"]],
    aboutTitle: "Built around execution, safety and accountability.",
    aboutText: "From site preparation to structural construction and infrastructure delivery, our approach combines practical site management, experienced teams and dependable equipment.",
    servicesTitle: "What we deliver",
    services: [[Truck, "Roads & urban infrastructure", "Corridors, asphalt works, drainage, sidewalks and site infrastructure."], [Building2, "Building construction", "Commercial, residential and institutional structures from structure to finish."], [Ruler, "Earthworks & site preparation", "Excavation, grading, stabilization, compaction and substructure preparation."], [Waves, "Water & fountain works", "Specialized hydraulic and architectural water installations."]],
    projectsTitle: "Selected projects",
    projects: [["Hawassa Corridor Development", "Urban infrastructure", "Hawassa", photos.corridor], ["Bole Bulbula Development", "Building construction", "Addis Ababa", photos.building], ["Site & road construction works", "Civil engineering", "Hawassa", photos.roadWorks], ["Completed urban corridor works", "Urban infrastructure", "Hawassa", photos.finishedCorridor]],
    fleetTitle: "Equipment that keeps projects moving",
    fleetText: "Heavy equipment supports our road, earthwork and construction operations with dependable on-site capacity.",
    fleet: [["Motor graders", photos.grader], ["Excavators", photos.excavatorTruck], ["Vibratory rollers", photos.roller], ["Dump trucks", photos.dumpTruck], ["Water tanker", photos.tanker]],
    leadershipTitle: "Leadership on site",
    leadershipText: "A hands-on management approach keeps planning, engineering, safety and execution aligned.",
    contactTitle: "Let's discuss your next project.",
    contactText: "Send the basic project details and our team can follow up with the right point of contact.",
    name: "Full name", email: "Email address", phone: "Phone number", scope: "Project type", message: "Project scope and location", submit: "Send inquiry",
    footer: "Melaku Adane General Contractor",
  },
  am: {
    location: "ሀዋሳ እና አዲስ አበባ፣ ኢትዮጵያ",
    hours: "ሰኞ – ቅዳሜ · 2:00 – 12:00",
    nav: ["ስለ እኛ", "አገልግሎቶች", "ፕሮጀክቶች", "ማሽነሪዎች", "አመራር", "ያግኙን"],
    tag: "ጠቅላላ ሥራ ተቋራጭ",
    title: "ማህበረሰቦችን ወደፊት የሚያራምዱ መሠረተ ልማቶችን እንገነባለን።",
    desc: "መልኩ አዳነ ጠቅላላ ሥራ ተቋራጭ በመንገድ፣ በህንፃ፣ በመሬት ስራ እና በልዩ የግንባታ ስራዎች የሚሰራ የግንባታ ተቋራጭ ነው።",
    primary: "ፕሮጀክቶችን ይመልከቱ", secondary: "ያነጋግሩን",
    stats: [["GC-1", "የተቋራጭ ደረጃ"], ["35+", "ማሽነሪዎች*"], ["2", "የስራ ማዕከላት*"], ["100%", "የጥራት ትኩረት"]],
    aboutTitle: "በአፈጻጸም፣ በደህንነት እና በተጠያቂነት የተገነባ።",
    aboutText: "ከሳይት ዝግጅት እስከ ህንፃ ግንባታና መሠረተ ልማት ስራ ድረስ ተግባራዊ የሳይት አስተዳደርን፣ ልምድ ያላቸውን ቡድኖችን እና ታማኝ ማሽነሪዎችን እናጣምራለን።",
    servicesTitle: "የምናቀርባቸው ስራዎች",
    services: [[Truck, "መንገድና የከተማ መሠረተ ልማት", "ኮሪደር፣ አስፋልት፣ ፍሳሽ፣ እግረኛ መንገድ እና የሳይት መሠረተ ልማት።"], [Building2, "የህንፃ ግንባታ", "የንግድ፣ የመኖሪያ እና የተቋማት ህንፃዎች።"], [Ruler, "የመሬት ስራ", "ቁፋሮ፣ ደረጃ ማስተካከል፣ ማጠናከርና የመሠረት ዝግጅት።"], [Waves, "የውሃና ፏፏቴ ስራዎች", "ልዩ የሃይድሮሊክና የአርክቴክቸራል የውሃ ተከላዎች።"]],
    projectsTitle: "የተመረጡ ፕሮጀክቶች",
    projects: [["የሀዋሳ ኮሪደር ልማት", "የከተማ መሠረተ ልማት", "ሀዋሳ", photos.corridor], ["የቦሌ ቡልቡላ ልማት", "የህንፃ ግንባታ", "አዲስ አበባ", photos.building], ["የመንገድ ግንባታ ስራዎች", "የሲቪል ምህንድስና", "ሀዋሳ", photos.roadWorks], ["የተጠናቀቀ የከተማ ኮሪደር", "የከተማ መሠረተ ልማት", "ሀዋሳ", photos.finishedCorridor]],
    fleetTitle: "ፕሮጀክቶችን የሚያስኬዱ ማሽነሪዎች", fleetText: "ከባድ ማሽነሪዎች ለመንገድ፣ ለመሬት ስራ እና ለግንባታ ስራዎች የሳይት አቅምን ያጠናክራሉ።",
    fleet: [["ሞተር ግሬደር", photos.grader], ["ኤክስካቫተር", photos.excavatorTruck], ["ሮለር", photos.roller], ["ዳምፕ ትራክ", photos.dumpTruck], ["የውሃ ታንከር", photos.tanker]],
    leadershipTitle: "በሳይት የሚመራ አመራር", leadershipText: "ተግባራዊ አመራር እቅድ፣ ምህንድስና፣ ደህንነትና አፈጻጸምን በአንድ አቅጣጫ ያስቀምጣል።",
    contactTitle: "ስለ ቀጣዩ ፕሮጀክትዎ እንነጋገር።", contactText: "የፕሮጀክቱን መሰረታዊ መረጃ ይላኩልን።", name: "ሙሉ ስም", email: "ኢሜይል", phone: "ስልክ", scope: "የፕሮጀክት አይነት", message: "የፕሮጀክት ዝርዝርና ቦታ", submit: "ጥያቄ ላክ", footer: "መልኩ አዳነ ጠቅላላ ሥራ ተቋራጭ",
  }
} as const;

export default function Home() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [open, setOpen] = useState(false);
  const t = content[lang];
  const ids = ["about", "services", "projects", "fleet", "leadership", "contact"];

  return (
    <main id="top" className="min-h-screen bg-slate-50 text-slate-950">
      <div className="bg-slate-950 px-5 py-2 text-xs text-white/75"><div className="mx-auto flex max-w-7xl justify-between gap-4"><span>{t.location}</span><span className="hidden sm:block">{t.hours}</span></div></div>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"><a href="#top" className="flex items-center gap-3"><span className="grid size-11 place-items-center overflow-hidden rounded bg-white ring-1 ring-slate-200"><Image src={photos.logo} alt="Melaku Adane General Contractor logo" width={44} height={44} className="h-full w-full object-contain" priority /></span><span className="font-bold tracking-tight">Melaku Adane<span className="block text-[10px] uppercase tracking-[.25em] text-slate-500">General Contractor</span></span></a><nav className="hidden items-center gap-7 lg:flex">{t.nav.map((n,i)=><a key={n} href={`#${ids[i]}`} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">{n}</a>)}<button onClick={()=>setLang(lang==="en"?"am":"en")} className="rounded-full border px-3 py-1.5 text-xs font-bold">{lang==="en"?"አማ":"EN"}</button></nav><button aria-label="Open menu" onClick={()=>setOpen(!open)} className="lg:hidden">{open?<X/>:<Menu/>}</button></div>{open&&<div className="border-t bg-white px-5 py-4 lg:hidden">{t.nav.map((n,i)=><a onClick={()=>setOpen(false)} key={n} href={`#${ids[i]}`} className="block border-b py-3 text-sm font-medium">{n}</a>)}<button onClick={()=>setLang(lang==="en"?"am":"en")} className="mt-3 rounded-full border px-3 py-1.5 text-xs font-bold">{lang==="en"?"አማ":"EN"}</button></div>}</header>

      <section className="relative overflow-hidden"><div className="absolute inset-0"><Image src={photos.corridor} alt="Hawassa urban corridor project" fill className="object-cover" priority sizes="100vw" /></div><div className="absolute inset-0 bg-slate-950/70" /><div className="relative mx-auto grid min-h-[620px] max-w-7xl items-end px-5 pb-16 pt-24 lg:grid-cols-[1.15fr_.85fr] lg:pb-20"><div className="max-w-3xl text-white"><span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.16em] backdrop-blur"><ShieldMark />{t.tag}</span><h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">{t.title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{t.desc}</p><div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-sm font-bold text-slate-950">{t.primary}<ArrowRight size={16}/></a><a href="#contact" className="inline-flex items-center rounded border border-white/30 px-5 py-3 text-sm font-bold text-white">{t.secondary}</a></div></div><div className="mt-10 grid grid-cols-2 gap-2 lg:mt-0">{t.stats.map(([v,l])=><div key={l} className="border border-white/15 bg-white/10 p-5 text-white backdrop-blur"><div className="text-2xl font-semibold">{v}</div><div className="mt-1 text-xs leading-5 text-white/65">{l}</div></div>)}</div></div></section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:py-28"><div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-slate-200"><Image src={photos.siteTeam} alt="Melaku Adane team at a construction site" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" /></div><div className="self-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">About the company</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">{t.aboutTitle}</h2><p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">{t.aboutText}</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="flex gap-3 border-t pt-4"><CheckCircle2 className="mt-0.5 shrink-0" size={19}/><span className="text-sm text-slate-600">Site-focused project management</span></div><div className="flex gap-3 border-t pt-4"><CheckCircle2 className="mt-0.5 shrink-0" size={19}/><span className="text-sm text-slate-600">Safety and execution discipline</span></div><div className="flex gap-3 border-t pt-4"><CheckCircle2 className="mt-0.5 shrink-0" size={19}/><span className="text-sm text-slate-600">Heavy equipment capability</span></div><div className="flex gap-3 border-t pt-4"><CheckCircle2 className="mt-0.5 shrink-0" size={19}/><span className="text-sm text-slate-600">Infrastructure delivery experience</span></div></div></div></section>

      <section id="services" className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Capabilities</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{t.servicesTitle}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{t.services.map(([Icon,title,desc])=><article key={title} className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"><div className="grid size-11 place-items-center rounded-xl bg-slate-950 text-white"><Icon size={21}/></div><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p></article>)}</div></div></section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><div className="flex items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Portfolio</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{t.projectsTitle}</h2></div></div><div className="mt-10 grid gap-5 md:grid-cols-2">{t.projects.map(([title,category,location,image])=><article key={title} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200"><div className="relative aspect-[16/10] overflow-hidden"><Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="p-6"><div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[.14em] text-slate-500"><span>{category}</span><span>{location}</span></div><h3 className="mt-3 text-xl font-semibold">{title}</h3></div></article>)}</div></section>

      <section id="fleet" className="border-y border-slate-200 bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><p className="text-xs font-bold uppercase tracking-[.2em] text-white/50">Fleet</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{t.fleetTitle}</h2><p className="mt-5 max-w-2xl text-white/65">{t.fleetText}</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{t.fleet.map(([name,image])=><article key={name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"><div className="relative aspect-[4/3]"><Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 20vw" /></div><div className="p-4 font-semibold">{name}</div></article>)}</div></div></section>

      <section id="leadership" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-28"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Leadership</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{t.leadershipTitle}</h2><p className="mt-5 max-w-xl text-slate-600">{t.leadershipText}</p></div><div className="grid gap-5 sm:grid-cols-3"><div className="overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2"><div className="relative aspect-[4/3]"><Image src={photos.office} alt="Melaku Adane office" fill className="object-cover" sizes="(max-width: 640px) 100vw, 60vw" /></div><div className="p-5"><p className="font-semibold">Ato Melaku Adane</p><p className="mt-1 text-sm text-slate-500">Founder & General Manager</p></div></div><div className="overflow-hidden rounded-2xl bg-slate-100"><div className="relative aspect-[3/4]"><Image src={photos.leader} alt="Melaku Adane leadership portrait" fill className="object-cover" sizes="(max-width: 640px) 100vw, 30vw" /></div><div className="p-5"><p className="font-semibold">Leadership</p><p className="mt-1 text-sm text-slate-500">Management</p></div></div></div></section>

      <section id="contact" className="bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-28"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Contact</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{t.contactTitle}</h2><p className="mt-5 max-w-lg text-slate-600">{t.contactText}</p><div className="mt-8 space-y-4 text-sm text-slate-600"><div className="flex gap-3"><MapPin size={18}/>Hawassa & Addis Ababa, Ethiopia</div><div className="flex gap-3"><Phone size={18}/>Company phone — add verified number</div><div className="flex gap-3"><Mail size={18}/>Company email — add verified address</div></div></div><form className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2 sm:p-8" onSubmit={(e)=>e.preventDefault()}><input aria-label={t.name} placeholder={t.name} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-500"/><input aria-label={t.email} type="email" placeholder={t.email} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-500"/><input aria-label={t.phone} placeholder={t.phone} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-500"/><input aria-label={t.scope} placeholder={t.scope} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-500"/><textarea aria-label={t.message} placeholder={t.message} rows={6} className="sm:col-span-2 rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-500"/><button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white">{t.submit}<ArrowRight size={17}/></button></form></div></section>

      <footer className="border-t border-slate-200 bg-slate-50"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center overflow-hidden rounded bg-white ring-1 ring-slate-200"><Image src={photos.logo} alt="" width={36} height={36} className="h-full w-full object-contain" /></span><span>{t.footer}</span></div><span>© {new Date().getFullYear()} All rights reserved.</span></div></footer>
    </main>
  );
}

function ShieldMark() {
  return <span className="inline-block size-1.5 rounded-full bg-white" aria-hidden />;
}
