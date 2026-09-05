"use client";

import { useState } from "react";
import { ArrowRight, Building2, CheckCircle2, HardHat, Mail, MapPin, Menu, Phone, Ruler, ShieldCheck, Truck, Users, Waves, X } from "lucide-react";

const content = {
  en: {
    location: "Hawassa & Addis Ababa, Ethiopia",
    hours: "Mon – Sat · 8:00 AM – 6:00 PM",
    nav: ["About", "Services", "Projects", "Fleet", "Leadership", "Contact"],
    tag: "GENERAL CONTRACTOR",
    title: "Building infrastructure that moves communities forward.",
    desc: "Melaku Adane General Contractor delivers construction and civil-engineering work across roads, buildings, earthworks and specialized infrastructure.",
    primary: "Explore projects",
    secondary: "Start a conversation",
    stats: [
      ["GC-1", "Contractor classification"],
      ["35+", "Fleet units*"],
      ["2", "Operating hubs*"],
      ["100%", "Quality-first delivery"],
    ],
    aboutTitle: "Built around execution, safety and accountability.",
    aboutText: "From site preparation to structural construction and infrastructure delivery, our approach combines practical site management, experienced teams and dependable equipment.",
    servicesTitle: "What we deliver",
    services: [
      [Truck, "Roads & urban infrastructure", "Corridors, asphalt works, drainage, sidewalks and site infrastructure."],
      [Building2, "Building construction", "Commercial, residential and institutional structures from structure to finish."],
      [Ruler, "Earthworks & site preparation", "Excavation, grading, stabilization, compaction and substructure preparation."],
      [Waves, "Water & fountain works", "Specialized hydraulic and architectural water installations."],
    ],
    projectsTitle: "Selected projects",
    projects: [
      ["Hawassa Corridor Development", "Urban infrastructure", "Hawassa"],
      ["Bole Bulbula Development", "Building construction", "Addis Ababa"],
      ["Ghion Hotel Fountain", "Water & fountain engineering", "Addis Ababa"],
    ],
    fleetTitle: "Equipment that keeps projects moving",
    fleetText: "Heavy equipment supports our road, earthwork and construction operations with dependable on-site capacity.",
    fleet: ["Motor graders", "Excavators", "Vibratory rollers", "Dump trucks"],
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
    projects: [["የሀዋሳ ኮሪደር ልማት", "የከተማ መሠረተ ልማት", "ሀዋሳ"], ["የቦሌ ቡልቡላ ልማት", "የህንፃ ግንባታ", "አዲስ አበባ"], ["የግዮን ሆቴል ፏፏቴ", "የውሃና ፏፏቴ ምህንድስና", "አዲስ አበባ"]],
    fleetTitle: "ፕሮጀክቶችን የሚያስኬዱ ማሽነሪዎች", fleetText: "ከባድ ማሽነሪዎች ለመንገድ፣ ለመሬት ስራ እና ለግንባታ ስራዎች የሳይት አቅምን ያጠናክራሉ።", fleet: ["ሞተር ግሬደር", "ኤክስካቫተር", "ሮለር", "ዳምፕ ትራክ"],
    leadershipTitle: "በሳይት የሚመራ አመራር", leadershipText: "ተግባራዊ አመራር እቅድ፣ ምህንድስና፣ ደህንነትና አፈጻጸምን በአንድ አቅጣጫ ያስቀምጣል።",
    contactTitle: "ስለ ቀጣዩ ፕሮጀክትዎ እንነጋገር።", contactText: "የፕሮጀክቱን መሰረታዊ መረጃ ይላኩልን።", name: "ሙሉ ስም", email: "ኢሜይል", phone: "ስልክ", scope: "የፕሮጀክት አይነት", message: "የፕሮጀክት ዝርዝርና ቦታ", submit: "ጥያቄ ላክ", footer: "መልኩ አዳነ ጠቅላላ ሥራ ተቋራጭ",
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [open, setOpen] = useState(false);
  const t = content[lang];
  const ids = ["about", "services", "projects", "fleet", "leadership", "contact"];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="bg-slate-950 px-5 py-2 text-xs text-white/75"><div className="mx-auto flex max-w-7xl justify-between gap-4"><span>{t.location}</span><span className="hidden sm:block">{t.hours}</span></div></div>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3 font-bold"><span className="grid size-10 place-items-center bg-slate-950 text-white"><HardHat size={21}/></span><span>Melaku Adane<span className="block text-[10px] uppercase tracking-[.25em] text-slate-500">General Contractor</span></span></a>
          <nav className="hidden items-center gap-7 lg:flex">{t.nav.map((n,i)=><a key={n} href={`#${ids[i]}`} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">{n}</a>)}<button onClick={()=>setLang(lang==="en"?"am":"en")} className="rounded-full border px-3 py-1.5 text-xs font-bold">{lang==="en"?"አማ":"EN"}</button></nav>
          <button aria-label="Open menu" onClick={()=>setOpen(!open)} className="lg:hidden">{open?<X/>:<Menu/>}</button>
        </div>
        {open&&<div className="border-t bg-white px-5 py-4 lg:hidden">{t.nav.map((n,i)=><a onClick={()=>setOpen(false)} key={n} href={`#${ids[i]}`} className="block border-b py-3 text-sm font-medium">{n}</a>)}<button onClick={()=>setLang(lang==="en"?"am":"en")} className="mt-3 rounded-full border px-3 py-1.5 text-xs font-bold">{lang==="en"?"አማ":"EN"}</button></div>}
      </header>

      <section id="top" className="relative overflow-hidden bg-slate-950 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,.22),transparent_35%)]"/><div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 md:py-32 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold tracking-[.18em] text-white/80"><ShieldCheck size={15}/> {t.tag}</div><h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-tight md:text-7xl">{t.title}</h1><p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg">{t.desc}</p><div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-bold text-slate-950">{t.primary}<ArrowRight size={17}/></a><a href="#contact" className="border border-white/20 px-5 py-3 text-sm font-bold">{t.secondary}</a></div></div><div className="grid grid-cols-2 border border-white/10 bg-white/[.03]">{t.stats.map(([v,l])=><div key={l} className="border-b border-r border-white/10 p-6 last:border-0"><div className="text-3xl font-black">{v}</div><div className="mt-2 text-xs leading-5 text-white/50">{l}</div></div>)}</div></div></section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24"><div className="grid gap-12 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-slate-500">01 / About</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.aboutTitle}</h2></div><p className="max-w-xl text-lg leading-8 text-slate-600 lg:pt-10">{t.aboutText}</p></div></section>

      <section id="services" className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-5 py-24"><p className="text-xs font-bold uppercase tracking-[.25em] text-slate-500">02 / Services</p><h2 className="mt-4 text-4xl font-black">{t.servicesTitle}</h2><div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">{t.services.map(([Icon,title,desc])=><article key={title} className="bg-white p-8 transition hover:bg-slate-50"><Icon size={28}/><h3 className="mt-8 text-xl font-bold">{title as string}</h3><p className="mt-3 leading-7 text-slate-600">{desc as string}</p></article>)}</div></div></section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24"><p className="text-xs font-bold uppercase tracking-[.25em] text-slate-500">03 / Projects</p><h2 className="mt-4 text-4xl font-black">{t.projectsTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{t.projects.map(([title,cat,loc],i)=><article key={title} className="group min-h-72 overflow-hidden bg-slate-900 p-7 text-white"><div className="flex h-full flex-col justify-between"><div><span className="text-xs font-bold uppercase tracking-widest text-white/45">0{i+1}</span><h3 className="mt-20 text-2xl font-bold">{title}</h3></div><div className="flex justify-between gap-4 text-xs text-white/55"><span>{cat}</span><span>{loc}</span></div></div></article>)}</div></section>

      <section id="fleet" className="bg-slate-100"><div className="mx-auto max-w-7xl px-5 py-24"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-slate-500">04 / Fleet</p><h2 className="mt-4 text-4xl font-black">{t.fleetTitle}</h2><p className="mt-5 max-w-lg leading-7 text-slate-600">{t.fleetText}</p></div><div className="grid grid-cols-2 gap-3">{t.fleet.map((item,i)=><div key={item} className="flex min-h-32 flex-col justify-between bg-white p-5"><span className="text-xs font-bold text-slate-400">0{i+1}</span><span className="font-bold">{item}</span></div>)}</div></div></div></section>

      <section id="leadership" className="mx-auto max-w-7xl px-5 py-24"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-slate-500">05 / Leadership</p><h2 className="mt-4 text-4xl font-black">{t.leadershipTitle}</h2></div><div className="border-l-2 border-slate-950 pl-6"><Users/><p className="mt-5 text-xl font-semibold leading-8">{t.leadershipText}</p></div></div></section>

      <section id="contact" className="bg-slate-950 text-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-white/40">06 / Contact</p><h2 className="mt-4 text-4xl font-black md:text-5xl">{t.contactTitle}</h2><p className="mt-5 leading-7 text-white/55">{t.contactText}</p><div className="mt-10 space-y-4 text-sm text-white/70"><div className="flex gap-3"><MapPin size={18}/> {t.location}</div><div className="flex gap-3"><Phone size={18}/> Add verified company phone</div><div className="flex gap-3"><Mail size={18}/> Add verified company email</div></div></div><form className="grid gap-4 bg-white/[.04] p-6 md:grid-cols-2" onSubmit={(e)=>e.preventDefault()}><input required placeholder={t.name} className="border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35 focus:border-white/40"/><input type="email" required placeholder={t.email} className="border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35 focus:border-white/40"/><input placeholder={t.phone} className="border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35 focus:border-white/40"/><select className="border border-white/10 bg-slate-950 px-4 py-3 text-white/60"><option>{t.scope}</option></select><textarea required placeholder={t.message} rows={5} className="md:col-span-2 border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35 focus:border-white/40"/><button className="md:col-span-2 bg-white px-5 py-3 font-bold text-slate-950">{t.submit}</button></form></div></section>

      <footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-xs text-white/40"><div className="mx-auto flex max-w-7xl justify-between gap-4"><span>{t.footer}</span><span>© {new Date().getFullYear()} · All rights reserved</span></div></footer>
    </main>
  );
}
