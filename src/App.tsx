import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Smartphone,
  Globe,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Briefcase,
  User,
  Layers,
  Star,
  Award,
  Languages,
<<<<<<< HEAD
  ChevronRight,
=======
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
} from "lucide-react";

// Custom SVG icons for brands
const Github = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { name: "JavaScript", icon: "🟨", category: "Frontend", level: 85 },
  { name: "React.js", icon: "⚛️", category: "Frontend", level: 88 },
  { name: "Next.js", icon: "▲", category: "Frontend", level: 75 },
  { name: "Node.js", icon: "🟩", category: "Backend", level: 70 },
  { name: "Flutter", icon: "💙", category: "Mobile", level: 80 },
  { name: "Python", icon: "🐍", category: "Backend", level: 78 },
  { name: "MySQL", icon: "🗄️", category: "Database", level: 75 },
  { name: "OOP", icon: "🔷", category: "Concepts", level: 85 },
  { name: "Data Structures", icon: "📊", category: "Concepts", level: 80 },
  { name: "Problem Solving", icon: "🧩", category: "Concepts", level: 85 },
  { name: "UI/UX Design", icon: "🎨", category: "Design", level: 72 },
];

const PROJECTS = [
  {
    title: "Map My Campus",
<<<<<<< HEAD
    shortDesc: "Smart campus navigation system for students, professors, and visitors.",
    fullDesc:
      "A smart campus navigation system designed to help students, professors, and visitors easily navigate inside the university campus. The platform provides interactive maps, building locations, classroom directions, and route guidance to improve accessibility and reduce time spent searching for locations.",
    icon: "🗺️",
    tags: ["Navigation", "Maps", "Web App"],
    color: "from-blue-500 to-cyan-500",
    accentColor: "cyan",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    hoverBorder: "hover:border-cyan-400/60",
    features: [
      "Interactive campus map",
      "Real-time location navigation",
      "Building and classroom search",
      "User-friendly UI/UX design",
      "Responsive web interface",
    ],
    technologies: ["React.js", "JavaScript", "MySQL", "Node.js", "UI/UX Design Principles"],
    role: [
      "Designed and developed the frontend interface",
      "Worked on database integration",
      "Implemented navigation and search functionality",
      "Improved user experience and responsiveness",
    ],
  },
  {
    title: "Notes Management App",
    shortDesc: "Modern notes app — create, edit, and organize notes with a clean responsive UI.",
    fullDesc:
      "A modern notes management application that allows users to create, edit, organize, and manage notes efficiently through a clean and responsive interface.",
    icon: "📝",
    tags: ["React", "CRUD", "UI/UX"],
    color: "from-purple-500 to-pink-500",
    accentColor: "purple",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    hoverBorder: "hover:border-purple-400/60",
    features: [
      "Create, edit, and delete notes",
      "Organized note categories",
      "Responsive and modern UI",
      "Fast and smooth user experience",
      "Data storage and management",
    ],
    technologies: ["React.js", "Next.js", "JavaScript", "Node.js", "MySQL"],
    role: [
      "Built frontend components and layouts",
      "Implemented note management functionality",
      "Designed responsive user interfaces",
      "Connected frontend with backend/database",
    ],
  },
  {
    title: "SHARE_IT",
    shortDesc: "Secure file-sharing system with advanced SQL operations and session management.",
    fullDesc:
      "A secure file-sharing and transfer system developed to manage file uploads, downloads, transfers, and user sessions with advanced database operations.",
    icon: "📁",
    tags: ["MySQL", "File Sharing", "Backend"],
    color: "from-green-500 to-emerald-500",
    accentColor: "green",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    hoverBorder: "hover:border-green-400/60",
    features: [
      "File upload and sharing system",
      "User authentication and session management",
      "Transfer tracking and monitoring",
      "Advanced SQL queries and database management",
      "Secure data handling",
    ],
    technologies: ["MySQL", "SQL", "Node.js", "JavaScript", "Database Design & ERD Modeling"],
    role: [
      "Designed database schema and ERD",
      "Developed SQL queries and relationships",
      "Managed file transfer logic",
      "Worked on backend functionalities",
    ],
  },
  {
    title: "IoT Project",
    shortDesc: "IoT smart monitoring system detecting gas leaks and fire with mobile alerts.",
    fullDesc:
      "An IoT-based smart monitoring system that uses sensors to detect environmental dangers such as gas leaks or fire and sends notifications to users through a mobile application.",
    icon: "🔥",
    tags: ["IoT", "Sensors", "Python"],
    color: "from-orange-500 to-red-500",
    accentColor: "orange",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    hoverBorder: "hover:border-orange-400/60",
    features: [
      "Fire and gas leak detection",
      "Sensor integration",
      "Real-time alert notifications",
      "Mobile application monitoring",
      "Smart automation concepts",
    ],
    technologies: ["Flutter", "IoT Sensors", "Python", "Mobile Development"],
    role: [
      "Participated in system design",
      "Developed mobile application interface",
      "Connected sensors with notification system",
      "Improved usability and monitoring features",
    ],
  },
  {
    title: "Cartoon / Image Processing",
    shortDesc: "Computer vision app applying cartoon effects and facial attribute detection.",
    fullDesc:
      "An image processing application that applies cartoon effects and facial attribute processing using computer vision and image transformation techniques.",
    icon: "🎨",
    tags: ["Python", "OpenCV", "Computer Vision"],
    color: "from-yellow-500 to-orange-500",
    accentColor: "yellow",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    hoverBorder: "hover:border-yellow-400/60",
    features: [
      "Cartoon image transformation",
      "Image filtering and preprocessing",
      "Facial attribute detection",
      "Real-time image manipulation",
      "Computer vision implementation",
    ],
    technologies: ["Python", "OpenCV", "Image Processing Techniques", "Computer Vision"],
    role: [
      "Implemented image processing algorithms",
      "Applied computer vision techniques",
      "Worked on preprocessing and filtering",
      "Improved output image quality and performance",
    ],
=======
    desc: "Smart campus navigation system for students and visitors.",
    icon: "🗺️",
    tags: ["Navigation", "Maps", "Web App"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
  },
  {
    title: "Notes Management App",
    desc: "Application for creating and organizing notes with a modern UI.",
    icon: "📝",
    tags: ["React", "CRUD", "UI/UX"],
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
  },
  {
    title: "SHARE_IT",
    desc: "File-sharing system with database integration and advanced SQL queries.",
    icon: "📁",
    tags: ["MySQL", "File Sharing", "Backend"],
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
  },
  {
    title: "IoT Project",
    desc: "Sensor-based monitoring system for fire and gas leak detection.",
    icon: "🔥",
    tags: ["IoT", "Sensors", "Python"],
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
  },
  {
    title: "Cartoon / Image Processing",
    desc: "Image processing application using computer vision techniques.",
    icon: "🎨",
    tags: ["Python", "OpenCV", "Computer Vision"],
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
  },
];

const TECH_CATEGORIES = [
  { label: "Frontend", icon: <Globe size={18} />, color: "text-blue-400" },
  { label: "Backend", icon: <Code2 size={18} />, color: "text-green-400" },
  { label: "Mobile", icon: <Smartphone size={18} />, color: "text-purple-400" },
  { label: "Database", icon: <Database size={18} />, color: "text-yellow-400" },
  { label: "Concepts", icon: <Layers size={18} />, color: "text-cyan-400" },
  { label: "Design", icon: <Star size={18} />, color: "text-pink-400" },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function SkillBar({ skill, delay }: { skill: (typeof SKILLS)[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
          <span>{skill.icon}</span> {skill.name}
        </span>
        <span className="text-sm text-cyan-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>
    </div>
  );
}

<<<<<<< HEAD
// ─── PROJECT MODAL ───
function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof PROJECTS)[0] | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  const accentMap: Record<string, string> = {
    cyan: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    purple: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    green: "text-green-400 border-green-400/30 bg-green-400/10",
    orange: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    yellow: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  };

  const badgeClass = project ? (accentMap[project.accentColor] ?? accentMap["cyan"]) : "";

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />
          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-[110] overflow-y-auto rounded-2xl bg-[#07111f] border border-white/10 shadow-2xl"
          >
            {/* Header gradient strip */}
            <div className={`h-1 w-full bg-gradient-to-r ${project.color} rounded-t-2xl`} />

            <div className="p-8">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-gray-300" />
              </button>

              {/* Title */}
              <div className="flex items-center gap-4 mb-6 pr-10">
                <span className="text-5xl">{project.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 rounded-md text-xs font-medium border ${badgeClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-6">
                <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2">Overview</h4>
                <p className="text-gray-300 leading-relaxed">{project.fullDesc}</p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-300 text-sm">
                      <ChevronRight size={15} className={`mt-0.5 flex-shrink-0 ${badgeClass.split(" ")[0]}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* My Role */}
              <div className="mb-6">
                <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3">My Role</h4>
                <ul className="space-y-2">
                  {project.role.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-current ${badgeClass.split(" ")[0]}`} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* GitHub link */}
              <a
                href="https://github.com/mostafabeheiry24"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all hover:brightness-110 ${badgeClass}`}
              >
                <Github size={16} /> View on GitHub
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

=======
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [filterCat, setFilterCat] = useState("All");
<<<<<<< HEAD
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);
=======
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const filteredSkills =
    filterCat === "All" ? SKILLS : SKILLS.filter((s) => s.category === filterCat);

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif", background: "#050d1a" }}
    >
<<<<<<< HEAD
      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

=======
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000" />
<<<<<<< HEAD
=======
        {/* Grid */}
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#050d1a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Mostafa</span>
            <span className="text-cyan-400">/&gt;</span>
          </motion.div>

<<<<<<< HEAD
=======
          {/* Desktop nav */}
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  activeSection === link.href.slice(1)
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-200 ${
                    activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          <a
            href="https://github.com/mostafabeheiry24"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400/50 text-cyan-400 text-sm font-medium hover:bg-cyan-400/10 transition-all duration-200"
          >
            <Github size={16} /> GitHub
          </a>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

<<<<<<< HEAD
=======
        {/* Mobile menu */}
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-[#050d1a]/98 border-b border-white/10 px-6 pb-6"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left py-3 text-sm border-b border-white/5 ${
                    activeSection === link.href.slice(1) ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
<<<<<<< HEAD
=======
          {/* Text */}
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mostafa
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl">Beheiry</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Computer Science student passionate about{" "}
              <span className="text-cyan-400 font-medium">web development</span>,{" "}
              <span className="text-blue-400 font-medium">mobile apps</span>, and{" "}
              <span className="text-purple-400 font-medium">IoT systems</span>. Building modern
<<<<<<< HEAD
              solutions with React, Flutter &amp; Python.
=======
              solutions with React, Flutter & Python.
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo("#projects")}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <Layers size={18} /> View Projects
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-6 py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <Mail size={18} /> Contact Me
              </button>
            </div>

            <div className="flex items-center gap-6">
<<<<<<< HEAD
              <a href="https://github.com/mostafabeheiry24" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={22} /></a>
              <a href="https://linkedin.com/in/mostafa-beheiry-639049340" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={22} /></a>
              <a href="mailto:mostafa230105889@sut.edu.eg" className="text-gray-400 hover:text-cyan-400 transition-colors"><Mail size={22} /></a>
              <a href="tel:01550901536" className="text-gray-400 hover:text-green-400 transition-colors"><Phone size={22} /></a>
            </div>
          </motion.div>

=======
              <a
                href="https://github.com/mostafabeheiry24"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/mostafa-beheiry-639049340"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:mostafa230105889@sut.edu.eg"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={22} />
              </a>
              <a
                href="tel:01550901536"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Phone size={22} />
              </a>
            </div>
          </motion.div>

          {/* Photo */}
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
<<<<<<< HEAD
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-2xl opacity-20 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 scale-110 animate-spin" style={{ animationDuration: "12s" }} />
              <div className="absolute inset-0 rounded-full border border-blue-400/20 scale-125 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
=======
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-2xl opacity-20 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 scale-110 animate-spin" style={{ animationDuration: "12s" }} />
              <div className="absolute inset-0 rounded-full border border-blue-400/20 scale-125 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />

              {/* Image */}
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/profile.jpg"
                  alt="Mostafa Beheiry"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
<<<<<<< HEAD
                    target.parentElement!.style.background = "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)";
=======
                    target.parentElement!.style.background =
                      "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)";
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                    target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-8xl">👨‍💻</div>`;
                  }}
                />
              </div>
<<<<<<< HEAD
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -right-4 bg-[#0a1628] border border-cyan-400/40 rounded-xl px-3 py-2 shadow-xl">
=======

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-[#0a1628] border border-cyan-400/40 rounded-xl px-3 py-2 shadow-xl"
              >
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                <div className="flex items-center gap-2 text-xs">
                  <Code2 size={14} className="text-cyan-400" />
                  <span className="text-white font-medium">React Dev</span>
                </div>
              </motion.div>
<<<<<<< HEAD
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute -bottom-4 -left-4 bg-[#0a1628] border border-purple-400/40 rounded-xl px-3 py-2 shadow-xl">
=======

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-[#0a1628] border border-purple-400/40 rounded-xl px-3 py-2 shadow-xl"
              >
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                <div className="flex items-center gap-2 text-xs">
                  <Smartphone size={14} className="text-purple-400" />
                  <span className="text-white font-medium">Flutter Dev</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

<<<<<<< HEAD
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 text-gray-500 text-xs cursor-pointer" onClick={() => scrollTo("#about")}>
=======
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 text-xs cursor-pointer"
            onClick={() => scrollTo("#about")}
          >
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
            <span>Scroll Down</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: 5, suffix: "+", label: "Projects", icon: "🚀" },
              { val: 11, suffix: "+", label: "Technologies", icon: "💻" },
              { val: 2027, suffix: "", label: "Graduation", icon: "🎓" },
              { val: 1, suffix: "", label: "Internship", icon: "🏢" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300 hover:bg-cyan-400/5"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4"><User size={14} /> About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Who Am <span className="text-cyan-400">I?</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm a <span className="text-cyan-400 font-semibold">Computer Science student</span> at El Sewedy University of Technology with a passion for building impactful digital solutions. I work across the full stack — from crafting beautiful UIs with React to developing mobile apps with Flutter and backend systems with Python &amp; Node.js.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Beyond code, I'm driven by curiosity — exploring IoT systems, computer vision, and real-world engineering problems. I believe great software comes from combining technical depth with thoughtful design.
              </p>
=======
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4">
              <User size={14} /> About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Who Am <span className="text-cyan-400">I?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm a{" "}
                <span className="text-cyan-400 font-semibold">Computer Science student</span> at El
                Sewedy University of Technology with a passion for building impactful digital
                solutions. I work across the full stack — from crafting beautiful UIs with React to
                developing mobile apps with Flutter and backend systems with Python & Node.js.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Beyond code, I'm driven by curiosity — exploring IoT systems, computer vision, and
                real-world engineering problems. I believe great software comes from combining
                technical depth with thoughtful design.
              </p>

>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
              <div className="space-y-4">
                {[
                  { icon: <GraduationCap size={18} className="text-cyan-400" />, label: "University", value: "El Sewedy University of Technology" },
                  { icon: <Award size={18} className="text-yellow-400" />, label: "GPA", value: "2.7 / 4.0" },
                  { icon: <MapPin size={18} className="text-red-400" />, label: "Location", value: "Egypt" },
                  { icon: <Languages size={18} className="text-green-400" />, label: "Languages", value: "Arabic (Native), English (Good)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
<<<<<<< HEAD
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">{item.icon}</div>
=======
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

<<<<<<< HEAD
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center"><GraduationCap size={20} className="text-cyan-400" /></div>
=======
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Education card */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                    <GraduationCap size={20} className="text-cyan-400" />
                  </div>
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>
                <div className="border-l-2 border-cyan-400/30 pl-6">
                  <div className="text-white font-semibold text-lg">Bachelor of Computer Science</div>
                  <div className="text-cyan-400 text-sm font-medium mt-1">El Sewedy University of Technology (SU Tech)</div>
                  <div className="text-gray-400 text-sm mt-2 flex items-center gap-4">
                    <span>📅 Expected: 2027</span>
                    <span>📊 GPA: 2.7</span>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white mb-4">Interests &amp; Focus Areas</h3>
                <div className="flex flex-wrap gap-3">
                  {["Web Development", "Mobile Apps", "IoT Systems", "Computer Vision", "Problem Solving", "Software Engineering", "UI/UX Design", "Databases"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium">{tag}</span>
=======
              {/* Interest tags */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white mb-4">Interests & Focus Areas</h3>
                <div className="flex flex-wrap gap-3">
                  {["Web Development", "Mobile Apps", "IoT Systems", "Computer Vision", "Problem Solving", "Software Engineering", "UI/UX Design", "Databases"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium"
                    >
                      {tag}
                    </span>
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4"><Code2 size={14} /> Technical Skills</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">My <span className="text-cyan-400">Tech Stack</span></h2>
          </motion.div>

=======
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4">
              <Code2 size={14} /> Technical Skills
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="text-cyan-400">Tech Stack</span>
            </h2>
          </motion.div>

          {/* Filter */}
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", ...TECH_CATEGORIES.map((c) => c.label)].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filterCat === cat
                    ? "bg-cyan-400 text-[#050d1a]"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

<<<<<<< HEAD
          <div className="grid md:grid-cols-2 gap-8">
            <div>{filteredSkills.slice(0, Math.ceil(filteredSkills.length / 2)).map((skill, i) => (<SkillBar key={skill.name} skill={skill} delay={i * 0.1} />))}</div>
            <div>{filteredSkills.slice(Math.ceil(filteredSkills.length / 2)).map((skill, i) => (<SkillBar key={skill.name} skill={skill} delay={i * 0.1} />))}</div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-6">Also experienced with</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "REST APIs", "Tailwind CSS", "Firebase", "Arduino", "Linux", "VS Code", "Figma"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:border-cyan-400/30 hover:text-white transition-all">{tech}</span>
=======
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {filteredSkills.slice(0, Math.ceil(filteredSkills.length / 2)).map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
              ))}
            </div>
            <div>
              {filteredSkills.slice(Math.ceil(filteredSkills.length / 2)).map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Tech pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-6">Also experienced with</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "REST APIs", "Tailwind CSS", "Firebase", "Arduino", "Linux", "VS Code", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:border-cyan-400/30 hover:text-white transition-all"
                >
                  {tech}
                </span>
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4"><Layers size={14} /> Portfolio</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">My <span className="text-cyan-400">Projects</span></h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              A collection of projects spanning web, mobile, IoT, and computer vision. Click any card to see full details.
=======
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4">
              <Layers size={14} /> Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              A collection of projects spanning web, mobile, IoT, and computer vision domains.
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
<<<<<<< HEAD
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-2xl border ${project.border} ${project.bg} ${project.hoverBorder} p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl overflow-hidden`}
              >
=======
                className={`group relative rounded-2xl border ${project.border} ${project.bg} p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="text-5xl mb-4">{project.icon}</div>

<<<<<<< HEAD
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.shortDesc}</p>

                  {/* Features preview */}
                  <ul className="mb-4 space-y-1">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-gray-600">+{project.features.length - 3} more…</li>
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    <span>View Details</span>
                    <ChevronRight size={13} />
=======
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="https://github.com/mostafabeheiry24"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={14} /> View Code
                    </a>
                    <ExternalLink size={14} className="text-gray-500" />
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

<<<<<<< HEAD
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <a href="https://github.com/mostafabeheiry24" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/5 transition-all font-medium">
=======
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/mostafabeheiry24"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/5 transition-all font-medium"
            >
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
              <Github size={18} /> View All on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4"><Briefcase size={14} /> Work History</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">My <span className="text-cyan-400">Experience</span></h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent" />

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-20 pb-12">
              <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#050d1a] shadow-lg shadow-cyan-400/50" />
=======
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4">
              <Briefcase size={14} /> Work History
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="text-cyan-400">Experience</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-20 pb-12"
            >
              {/* Dot */}
              <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#050d1a] shadow-lg shadow-cyan-400/50" />

>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">IT Summer Internship</h3>
                    <div className="text-cyan-400 font-medium mt-1">El Sewedy Polymers</div>
                  </div>
<<<<<<< HEAD
                  <span className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium">Summer 2025</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">Completed a Summer Internship in the IT Department at El Sewedy Polymers in partnership with SU Tech. Gained hands-on experience in real-world IT operations within an industrial manufacturing environment.</p>
                <div className="flex flex-wrap gap-2">
                  {["IT Operations", "Industrial IT", "Networking", "Systems Management"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300">{tag}</span>
=======
                  <div className="flex-shrink-0">
                    <span className="px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium">
                      Summer 2025
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-4">
                  Completed a Summer Internship in the IT Department at El Sewedy Polymers in
                  partnership with SU Tech. Gained hands-on experience in real-world IT operations
                  within an industrial manufacturing environment.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["IT Operations", "Industrial IT", "Networking", "Systems Management"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300"
                    >
                      {tag}
                    </span>
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                  ))}
                </div>
              </div>
            </motion.div>

<<<<<<< HEAD
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="relative pl-20">
              <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-blue-400 border-4 border-[#050d1a] shadow-lg shadow-blue-400/50" />
=======
            {/* Education timeline item */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative pl-20"
            >
              <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-blue-400 border-4 border-[#050d1a] shadow-lg shadow-blue-400/50" />

>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Bachelor of Computer Science</h3>
                    <div className="text-blue-400 font-medium mt-1">El Sewedy University of Technology</div>
                  </div>
<<<<<<< HEAD
                  <span className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-blue-400/10 border border-blue-400/20 text-blue-300 text-sm font-medium">2023 – 2027</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">Currently pursuing a Bachelor's degree in Computer Science with a GPA of 2.7. Studying core subjects including algorithms, data structures, databases, software engineering, and computer networks.</p>
                <div className="flex flex-wrap gap-2">
                  {["Algorithms", "Data Structures", "Databases", "Software Engineering", "Networks"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300">{tag}</span>
=======
                  <div className="flex-shrink-0">
                    <span className="px-3 py-1.5 rounded-lg bg-blue-400/10 border border-blue-400/20 text-blue-300 text-sm font-medium">
                      2023 – 2027
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-4">
                  Currently pursuing a Bachelor's degree in Computer Science with a GPA of 2.7.
                  Studying core subjects including algorithms, data structures, databases, software
                  engineering, and computer networks.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Algorithms", "Data Structures", "Databases", "Software Engineering", "Networks"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300"
                    >
                      {tag}
                    </span>
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4"><Mail size={14} /> Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Let's <span className="text-cyan-400">Connect</span></h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">I'm open to internships, collaborations, and exciting new opportunities. Let's build something great together!</p>
=======
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-4">
              <Mail size={14} /> Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">
              I'm open to internships, collaborations, and exciting new opportunities. Let's build
              something great together!
            </p>
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
<<<<<<< HEAD
              { icon: <Mail size={22} className="text-cyan-400" />, label: "Email", value: "mostafa230105889@sut.edu.eg", href: "mailto:mostafa230105889@sut.edu.eg", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
              { icon: <Phone size={22} className="text-green-400" />, label: "Phone", value: "01550901536", href: "tel:01550901536", bg: "bg-green-400/10", border: "border-green-400/20" },
              { icon: <Linkedin size={22} className="text-blue-400" />, label: "LinkedIn", value: "mostafa-beheiry-639049340", href: "https://linkedin.com/in/mostafa-beheiry-639049340", bg: "bg-blue-400/10", border: "border-blue-400/20" },
              { icon: <Github size={22} className="text-purple-400" />, label: "GitHub", value: "mostafabeheiry24", href: "https://github.com/mostafabeheiry24", bg: "bg-purple-400/10", border: "border-purple-400/20" },
=======
              {
                icon: <Mail size={22} className="text-cyan-400" />,
                label: "Email",
                value: "mostafa230105889@sut.edu.eg",
                href: "mailto:mostafa230105889@sut.edu.eg",
                bg: "bg-cyan-400/10",
                border: "border-cyan-400/20",
              },
              {
                icon: <Phone size={22} className="text-green-400" />,
                label: "Phone",
                value: "01550901536",
                href: "tel:01550901536",
                bg: "bg-green-400/10",
                border: "border-green-400/20",
              },
              {
                icon: <Linkedin size={22} className="text-blue-400" />,
                label: "LinkedIn",
                value: "mostafa-beheiry-639049340",
                href: "https://linkedin.com/in/mostafa-beheiry-639049340",
                bg: "bg-blue-400/10",
                border: "border-blue-400/20",
              },
              {
                icon: <Github size={22} className="text-purple-400" />,
                label: "GitHub",
                value: "mostafabeheiry24",
                href: "https://github.com/mostafabeheiry24",
                bg: "bg-purple-400/10",
                border: "border-purple-400/20",
              },
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`flex items-center gap-4 p-6 rounded-2xl border ${item.border} ${item.bg} hover:brightness-110 transition-all duration-300 group`}
              >
<<<<<<< HEAD
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors break-all">{item.value}</div>
=======
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors break-all">
                    {item.value}
                  </div>
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
                </div>
                <ExternalLink size={16} className="text-gray-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

<<<<<<< HEAD
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Collaborate?</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">Whether you have a project idea, an opportunity, or just want to chat about tech — my inbox is always open.</p>
            <a href="mailto:mostafa230105889@sut.edu.eg" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25">
=======
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-10 text-center"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Collaborate?</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Whether you have a project idea, an opportunity, or just want to chat about tech — my
              inbox is always open.
            </p>
            <a
              href="mailto:mostafa230105889@sut.edu.eg"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
            >
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
              <Mail size={18} /> Send Me an Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<<<<<<< HEAD
          <div className="text-gray-500 text-sm">© 2025 Mostafa Mohamed Beheiry. Built with React &amp; ❤️</div>
=======
          <div className="text-gray-500 text-sm">
            © 2025 Mostafa Mohamed Beheiry. Built with React & ❤️
          </div>

>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
          <div className="flex items-center gap-3 text-xl font-bold">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">MB</span>
            <span className="text-cyan-400">/&gt;</span>
          </div>
<<<<<<< HEAD
          <div className="flex items-center gap-4">
            <a href="https://github.com/mostafabeheiry24" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com/in/mostafa-beheiry-639049340" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:mostafa230105889@sut.edu.eg" className="text-gray-500 hover:text-cyan-400 transition-colors"><Mail size={18} /></a>
=======

          <div className="flex items-center gap-4">
            <a href="https://github.com/mostafabeheiry24" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/mostafa-beheiry-639049340" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:mostafa230105889@sut.edu.eg" className="text-gray-500 hover:text-cyan-400 transition-colors">
              <Mail size={18} />
            </a>
>>>>>>> b96a140cf5f82e56e02d3c0082bb0629ef0dd0c4
          </div>
        </div>
      </footer>
    </div>
  );
}
