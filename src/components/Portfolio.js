import React, { useState, useEffect } from "react";
import profile from "../assets/images/waleed3.jpg";
import healthFlow from "../assets/images/appointment-system.webp";
import adnanMotors from "../assets/images/carrental-portal.webp";
import portfolio from "../assets/images/portfolio.webp";
import ecommerce from "../assets/images/ecommerce-store.webp";
import metaSpark from "../assets/images/project-6.webp";
import french from "../assets/images/french.png";
import captain from "../assets/images/captain.png";
import divano from "../assets/images/divano.png";
import newsApp from "../assets/images/News app.png";
import ticTac from "../assets/images/tik-tac-toe.jpg";
import textUtils from "../assets/images/textutils.png";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Code,
  Palette,
  Search,
  Globe,
  Users,
  Pin,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Front-end web applications using modern frameworks like React, JavaScript, and cloud technologies.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies to improve search rankings and drive organic traffic to your website.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Digital Marketing",
      description:
        "Boosting brand visibility and conversions through smart, data-driven strategies.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Strategy",
      description:
        "Strategic planning and consulting to help businesses establish a strong digital presence.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Brand Identity",
      description:
        "Complete brand identity solutions including logo design, brand guidelines, and visual systems.",
    },
  ];

  const projects = [
    {
      title: "Captain Coin",
      description:
        "Collaborated in Front-end in a website built with HTML,CSS and JavaScript, surveying about Bit Coin's Market Survival.",
      image: captain,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Waleedcodeflakes/Captains-Coin-Pages",
      demo: "#",
    },
    {
      title: "French Learning Plateform",
      description:
        "Collaborated in Front-end in a French Learning Learning platform built with HTML,CSS and JavaScript.",
      image: french,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Waleedcodeflakes/French-Elite-Tutor-Academy",
      demo: "#",
    },
    {
      title: "E-Commerce Store",
      description:
        "A full-functional e-commerce platform built with Ecwid by Lightspeed, for Dutch Citizens.",
      image: divano,
      tags: ["Ecwid", "Lightspeed"],
      demo: "https://divano.company.site",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with HTML,CSS and PHP, featuring payment integration and admin dashboard.",
      image: ecommerce,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "https://www.furnista.ae",
    },
    {
      title: "Healthcare System (FYP)",
      description:
        "An online platform for patient appointment booking, medical record management, and streamlined healthcare operations.",
      image: healthFlow,
      tags: ["HTML", "CSS", "PHP", "MySQl"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website for a creative individual with smooth animations and modern design.",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "https://devwaleed.netlify.app",
    },
  ];

  const miniprojects = [
    {
      title: "News Monkey App",
      description:
        "Created news app using News API, created with HTML, CSS and ReactJs.",
      image: newsApp,
      tags: ["HTML", "CSS", "ReactJs"],
      github: "https://github.com/Waleedcodeflakes/News-Monkey-React-App",
      demo: "#",
    },
    {
      title: "My Text Utils",
      description:
        "This is text manipulation app having functions, triming text, case conversion etc.",
      image: textUtils,
      tags: ["HTML", "CSS", "ReactJs"],
      github: "https://github.com/Waleedcodeflakes/My-TextUtils",
      demo: "#",
    },
    {
      title: "Tic Tac Toe",
      description: "A game made with fun.",
      image: ticTac,
      tags: ["HTML", "ReactJs"],
      github: "https://github.com/Waleedcodeflakes/Tic-Tac-Toe",
      demo: "#",
    },
  ];

  const portfolioItems = [
    {
      category: "web",
      title: "Corporate Website",
      image: healthFlow,
    },
    {
      category: "web",
      title: "Adnan Motors",
      image: adnanMotors,
    },
    {
      category: "web",
      title: "SaaS Dashboard",
      image: metaSpark,
    },
    {
      category: "marketing",
      title: "Brand Identity",
      image: french,
    },
    {
      category: "web",
      title: "Landing Page",
      image: captain,
    },
    {
      category: "marketing",
      title: "Marketing",
      image: divano,
    },
  ];

  const [filter, setFilter] = useState("all");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const filteredPortfolio =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const validateForm = () => {
    const errors = {};
    if (!contactForm.name.trim()) errors.name = "Name is required";
    if (!contactForm.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(contactForm.email))
      errors.email = "Email is invalid";
    if (!contactForm.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", contactForm);
      alert("Thank you for your message! I'll get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md w-full text-left">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible.home
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            I'm Waleed Ahmed
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Front-end Developer & Digital Marketer crafting digital experiences
            that matter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Contact Me
            </button>
          </div>
          <div className="mt-16">
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-8">
                  <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center">
                    <img
                      className="w-100 h-100 object-cover rounded-full"
                      src={profile}
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  Hello, I'm Waleed Ahmed
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate Front-end Developer & Digital Marketer with
                  over 2 years of experience creating digital solutions that
                  bridge the gap between functionality and aesthetics. I
                  specialize in modern web technologies and have a keen eye for
                  design.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  When I'm not coding, you can find me exploring new design
                  trends, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-blue-400">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Python",
                      "MySQL",
                      "PHP",
                      "Laravel",
                      "Figma",
                      "Adobe Creative Suite",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-800 px-4 py-2 rounded-full text-sm border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-400">
                    Experience Timeline
                  </h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-500 pl-4 pb-4">
                      <h5 className="font-semibold">
                        Junior Back-end Developer
                      </h5>
                      <p className="text-blue-400 text-sm">
                        BlueGrid Ventures • 02-2025 - 04-2025
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Contributing to enterprise application development as a
                        Laravel intern
                      </p>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-4 pb-4">
                      <h5 className="font-semibold">Digital Marketer</h5>
                      <p className="text-purple-400 text-sm">
                        Divano Meubles • 2023 - 2025
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Successfully facilitated hundreds of orders in
                        collaboration with a European company
                      </p>
                    </div>
                    <div className="border-l-2 border-cyan-500 pl-4">
                      <h5 className="font-semibold">
                        Junior Front-end Developer
                      </h5>
                      <p className="text-cyan-400 text-sm">
                        Triox LLC. • 01-2023 - 07-2023
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Developed custom websites and web applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.services
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <div className="text-blue-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini Projects Section */}
      <section id="miniprojects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.miniprojects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mini Projects
            </h2>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {miniprojects.map((miniprojects, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                  <img
                    src={miniprojects.image}
                    alt={miniprojects.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {miniprojects.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {miniprojects.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {miniprojects.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={miniprojects.github}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={miniprojects.demo}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.portfolio
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio Gallery
            </h2>

            <div className="flex justify-center mb-12">
              <div className="flex gap-4 bg-gray-800 p-2 rounded-full border border-gray-700">
                {["all", "web", "marketing"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                      filter === category
                        ? "bg-blue-500 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPortfolio.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-blue-400 text-sm capitalize">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.contact
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  Let's Work Together
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and collaborations.
                  Whether you have a project in mind or just want to chat about
                  technology, feel free to reach out!
                </p>

                <div className="space-y-4">
                  <div className="items-center gap-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">
                        waleed.codeflakes@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+92 340 1901570</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Pin className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">
                        Abbottabad, Pakistan
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a
                      href="https://www.github.com/waleedcodeflakes"
                      className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/iamwaleedahmed"
                      className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="mailto:waleed.codeflakes@gmail.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        formErrors.name ? "border-red-500" : "border-gray-700"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        formErrors.email ? "border-red-500" : "border-gray-700"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                        formErrors.message
                          ? "border-red-500"
                          : "border-gray-700"
                      }`}></textarea>
                    {formErrors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Waleed Ahmed. All rights reserved.
            </div>
            <div className="flex gap-6">
              {navItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
