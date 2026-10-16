import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, ArrowDown, MapPin, Mail, Menu, X, MoveUpRight, Server, Monitor, Cloud, Database, Code2, Network, Award, CheckCheck, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sculpture from '@/assets/portfolio-sculpture.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Jareena Abdul — Computer Science & Technology Portfolio' },
    { name: 'description', content: 'Explore Jareena Abdul’s work in computer vision, Windows infrastructure, cloud computing and data. Computer Science graduate based in Rajahmundry, India.' },
    { property: 'og:title', content: 'Jareena Abdul — Computer Science & Technology Portfolio' },
    { property: 'og:description', content: 'Thoughtful solutions, built with precision. Projects, skills and the journey of Computer Science graduate Jareena Abdul.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

const projects = [
  { title: 'Advanced Traffic Safety System', category: 'Computer vision · Major project', type: 'traffic', summary: 'Making roads safer through real-time object detection.', tags: ['Python', 'YOLOv7', 'Deep Learning', 'Computer Vision'], details: ['Developed a traffic safety system using YOLOv7 object detection to improve road safety and traffic monitoring.', 'Implemented real-time detection of vehicles and potential traffic violations using deep learning techniques.', 'Designed to support traffic law compliance, reduce road safety risks, and improve traffic management.'] },
  { title: 'Enterprise Windows Infrastructure', category: 'Systems & networking · Personal lab', type: 'infrastructure', summary: 'A hands-on domain network, from setup to troubleshooting.', tags: ['Windows Server', 'Active Directory', 'DNS', 'VirtualBox'], details: ['Built a sandbox domain network in Oracle VirtualBox with Windows Server 2022 as Domain Controller.', 'Configured DHCP scopes and DNS forward lookup zones; created and audited users, organizational units, groups and policies.', 'Troubleshot client-to-server connectivity and domain-joining errors to keep the lab available.'] },
  { title: 'Cloud Workload & Access Controls', category: 'Cloud computing · Personal lab', type: 'cloud', summary: 'Provisioning virtual machines with thoughtful network security.', tags: ['AWS', 'Azure', 'Security Groups', 'RDP / SSH'], details: ['Deployed Windows Server and Linux virtual machines on Azure and AWS.', 'Restricted network access with Security Groups.', 'Monitored instance performance and troubleshot remote servers over RDP and SSH.'] },
  { title: 'Personal Portfolio Website', category: 'Web development · Personal project', type: 'website', summary: 'A simple, considered space to share my work and skills.', tags: ['HTML', 'CSS', 'Web Development'], details: ['Designed and built a personal website to present skills and projects clearly.', 'Practised attention to detail in layout, content accuracy and presentation.'] },
];
const skillGroups = [
  { title: 'Data & analysis', icon: Database, skills: ['Python basics', 'SQL', 'MS Excel', 'Data Validation'] },
  { title: 'Systems & networking', icon: Network, skills: ['Windows 10/11', 'Linux basics', 'TCP/IP', 'DNS / DHCP', 'Active Directory', 'Group Policy'] },
  { title: 'Cloud & virtualization', icon: Cloud, skills: ['AWS basics', 'Azure basics', 'VirtualBox', 'VMware', 'Security Groups'] },
  { title: 'Monitoring & service tools', icon: Monitor, skills: ['Grafana', 'Prometheus', 'Node Exporter', 'ServiceNow', 'Jira'] },
  { title: 'How I work', icon: CheckCheck, skills: ['Attention to Detail', 'Troubleshooting', 'Documentation', 'Teamwork', 'SLA Focus'] },
];
const LINKEDIN_URL = 'https://www.linkedin.com/in/jareena-abdul-6a9726246';
const LINKEDIN_HANDLE = 'linkedin.com/in/jareena-abdul-6a9726246';
async function copyText(text: string) {
  try { await navigator.clipboard.writeText(text); return true; } catch {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch { ok = false; }
    document.body.removeChild(ta); return ok;
  }
}
function SocialLinks() {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => { const ok = await copyText(LINKEDIN_URL); if (ok) { setCopied(true); setTimeout(() => setCopied(false), 2000); } };
  return <div className="social-links">
    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={12}/></a>
    <span className="social-handle-row">
      <a className="social-handle" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">{LINKEDIN_HANDLE}</a>
      <Button type="button" variant="outline" size="sm" className="copy-link" onClick={onCopy} aria-label="Copy LinkedIn link">{copied ? <><CheckCheck size={12}/> Copied</> : 'Copy link'}</Button>
    </span>
  </div>;
}
function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) { return <div className="section-label eyebrow"><span>{number}</span> / {children}</div>; }
function ProjectVisual({ type }: { type: string }) {
  if(type === 'traffic') return <svg className="road-scene" viewBox="0 0 520 230" role="img" aria-label="Illustration of vehicle detection on a roadway"><path className="road" d="M-20 55H540V183H-20Z"/><path className="mark" d="M0 118H520" strokeWidth="2" strokeDasharray="24 24"/>{[85,255,402].map((x,i) => <g key={x} transform={`translate(${x} ${i===1 ? 146 : 84})`}><rect className="car" x="-24" y="-12" width="48" height="24" rx="5"/><rect className="road" x="-7" y="-9" width="18" height="18" rx="2"/><rect className="detect" x="-32" y="-19" width="64" height="38"/><text x="-31" y="-26">vehicle {i===1?'0.94':'0.98'}</text></g>)}<path className="detect" d="M30 28h15m-15 0v15M490 28h-15m15 0v15M30 201h15m-15 0v-15M490 201h-15m15 0v-15"/></svg>;
  if(type === 'website') return <div className="mini-browser" aria-hidden="true"><div className="browser-bar"><i/><i/><i/></div><p>COMPUTER SCIENCE & TECHNOLOGY</p><h4>Jareena Abdul<span className="text-primary">.</span></h4><p>Curiosity meets thoughtful problem-solving.</p><div className="mini-blocks"><span/><span/><span/></div></div>;
  return <div className="network-scene" aria-hidden="true"><div className="network-node">{type === 'cloud' ? <Cloud size={42} strokeWidth={1.2}/> : <Server size={38} strokeWidth={1.2}/>}<span>{type === 'cloud' ? 'Cloud infrastructure' : 'Domain controller'}</span></div><div className="network-branch"><div className="network-node"><Monitor size={21} strokeWidth={1.3}/><span>{type === 'cloud' ? 'Windows VM' : 'Windows client'}</span></div><div className="network-node">{type === 'cloud' ? <Code2 size={21} strokeWidth={1.3}/> : <Database size={21} strokeWidth={1.3}/>}<span>{type === 'cloud' ? 'Linux VM' : 'Users & policies'}</span></div></div></div>;
}
function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Work');
  const [selected, setSelected] = useState<number | null>(null);
  const project = selected === null ? null : projects[selected];
  return <>
    <div className="shell">
      <header className="site-header"><a className="wordmark" href="#home" aria-label="Jareena Abdul home">aj<span>.</span></a><nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">{[['Work','work'],['About','about'],['Skills','skills'],['Education','education']].map(([label,id]) => <a key={id} className={active===label ? 'active' : ''} href={`#${id}`} onClick={() => {setActive(label ?? 'Work');setMenuOpen(false);}}>{label}</a>)}<Button size="sm" variant="outline" asChild><a href="#contact" onClick={() => setMenuOpen(false)}>Let’s connect <ArrowUpRight/></a></Button></nav><Button className="mobile-menu" variant="ghost" size="icon" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></header>
      <main>
        <section className="hero reveal" id="home">
          <div className="hero-top"><span className="eyebrow text-muted-foreground">Curious mind. Detail-driven work.</span><span className="availability"><span className="status-dot"/> Open to opportunities</span></div>
          <h1 className="hero-title">Jareena Abdul<span>.</span></h1>
          <div className="hero-main"><div><h2 className="hero-subtitle">Computer Science graduate. Problem solver.</h2><p className="hero-description">From making sense of data to building reliable systems, I bring curiosity, precision, and a hands-on approach to technology.</p><div className="hero-actions"><Button asChild size="lg"><a href="#work">Explore my work <ArrowDown/></a></Button><Button asChild size="lg" variant="outline"><a href="mailto:jareenaaug0802@gmail.com">Get in touch <ArrowUpRight/></a></Button></div></div><div className="hero-note"><MoveUpRight size={35} strokeWidth={1}/><p>Interested in the intersection of<br/>data, maps, and technology.</p></div></div>
          <div className="hero-bottom"><span className="flex items-center gap-2"><MapPin size={13}/> Rajahmundry, Andhra Pradesh, India</span><SocialLinks/></div>
        </section>
        <section className="section" id="work"><div className="section-heading"><div><SectionLabel number="01">Selected work</SectionLabel><h2>Learning by building.</h2></div><p className="section-description">A selection of academic projects and personal labs. Real challenges. Hands-on learning.</p></div><div className="project-grid">{projects.map((p,i) => <article key={p.title}><div className={`project-visual ${p.type}`}><span className="project-index">0{i+1}</span><ProjectVisual type={p.type}/><span className="project-category">{p.category}</span></div><div className="project-heading"><h3>{p.title}</h3><Button variant="outline" size="icon" aria-label={`View ${p.title}`} title={`View ${p.title}`} onClick={() => setSelected(i)}><ArrowUpRight/></Button></div><p className="project-summary">{p.summary}</p><div className="tags">{p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div></article>)}</div></section>
        <section className="section" id="about"><div className="about-grid"><div><SectionLabel number="02">A little about me</SectionLabel><h2>Grounded in detail.<br/>Driven by curiosity.</h2><p className="about-copy">I’m a <strong>Computer Science graduate</strong> who enjoys understanding how things work—and making them work better. My journey spans data handling, computer vision, IT troubleshooting, and cloud infrastructure.</p><p className="about-copy">I’m keen to build a career in <strong>map data and navigation services</strong>, where accuracy and attention to detail make a real difference. I value clear communication, continuous learning, and being someone a team can rely on.</p><div className="about-facts"><div><strong>8.22</strong><span>B.Tech CGPA</span></div><div><strong>4</strong><span>Languages spoken</span></div><div><strong>2024</strong><span>Graduate year</span></div></div><img className="about-image" src={sculpture} alt="A sculptural looping pathway, reflecting a journey of continuous learning" width={1536} height={1024} loading="lazy"/></div><div id="skills"><SectionLabel number="03">My toolkit</SectionLabel><h3 className="skills-heading">Skills I bring to the table.</h3>{skillGroups.map(group => <div className="skill-group" key={group.title}><h4><group.icon size={14}/>{group.title}</h4><div className="tags">{group.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></div>)}<div className="skill-group"><h4><Globe size={14}/>Languages</h4><p className="text-xs text-muted-foreground">English · Hindi · Telugu · Urdu</p></div></div></div></section>
        <section className="section" id="education"><SectionLabel number="04">Education & certifications</SectionLabel><h2>A foundation to build on.</h2><div className="education-grid"><div>{[{date:'DEC 2021 — JUN 2024',name:'B.Tech in Computer Science',school:'Pragati Engineering College, Surampalem',grade:'CGPA 8.22'},{date:'JUL 2018 — SEP 2021',name:'Diploma in Computer Engineering',school:'Andhra Polytechnic College, Kakinada',grade:'CGPA 8.19'},{date:'2017 — 2018',name:'Secondary School Certificate',school:'MPL H School (Girls), Salipeta, Kakinada',grade:'GPA 8.0'}].map(item => <div className="education-row" key={item.name}><span className="date">{item.date}</span><h3>{item.name}</h3><p>{item.school}<br/>{item.grade}</p></div>)}</div><div><h3 className="skills-heading">Always learning.</h3>{[['AWS Cloud Practitioner','Amazon'],['Introduction to Networks','Cisco Networking Academy'],['Web Development','Internshala & Edureka · Webinar']].map(([name,issuer]) => <div className="cert-row" key={name}><Award size={24} strokeWidth={1.3}/><div><h4>{name}</h4><p>{issuer}</p></div></div>)}</div></div></section>
      </main>
    </div>
    <section className="contact-section" id="contact"><div className="shell contact-layout"><div><span className="eyebrow">Let’s connect</span><h2>Good work starts<br/>with a conversation.</h2><p>Open to fresher roles in data, maps, and IT.<br/>Available to join immediately · Open to rotational shifts</p></div><div className="contact-details"><a className="contact-email" href="mailto:jareenaaug0802@gmail.com">jareenaaug0802@gmail.com <ArrowUpRight size={21}/></a><a className="contact-phone" href="tel:+918341431720">+91 8341 43 1720</a><SocialLinks/></div></div></section>
    <footer className="shell footer"><span>© {new Date().getFullYear()} Jareena Abdul</span><span className="flex items-center gap-2">Made with curiosity & care <span className="status-dot"/></span><a href="#home" className="flex items-center gap-2" aria-label="Back to top">Back to top <ArrowUpRight size={12}/></a></footer>
    <Dialog.Root open={selected !== null} onOpenChange={open => { if(!open) setSelected(null); }}><Dialog.Portal><Dialog.Overlay className="dialog-overlay"/><Dialog.Content className="dialog-content"><Dialog.Close asChild><Button className="dialog-close" variant="ghost" size="icon" aria-label="Close project details"><X/></Button></Dialog.Close>{project && <><span className="eyebrow text-muted-foreground">{project.category}</span><Dialog.Title>{project.title}</Dialog.Title><Dialog.Description>{project.summary}</Dialog.Description><ul className="list-disc pl-5 my-5 space-y-3">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><Button asChild className="mt-6"><a href="mailto:jareenaaug0802@gmail.com">Discuss this project <Mail/></a></Button></>}</Dialog.Content></Dialog.Portal></Dialog.Root>
  </>;
}