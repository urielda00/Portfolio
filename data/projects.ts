export type ProjectLink = {
	label: string;
	url: string;
};

export type ProjectImage = {
	src: string;
	alt: string;
};

export type Project = {
	slug: string;
	title: string;
	shortDescription: string;
	fullDescription: string;
	status: "Live" | "Private" | "Code Only" | "Prototype" | "Collaborative";
	featured: boolean;
	year: string;
	role: string;
	stack: string[];
	highlights: string[];
	links: ProjectLink[];
	images: ProjectImage[];
};

export const projects: Project[] = [
	{
		slug: "shopme",
		title: "SHOPME",
		shortDescription:
			"A full-stack MERN e-commerce platform built as a large-scale personal project and continuously refined over time.",
		fullDescription:
			"SHOPME is an end-to-end e-commerce platform built with a separated client-server architecture, a modern SPA frontend, and a secure REST API backend. It includes customer flows, admin tools, authentication, cart synchronization, Docker-based development, and a growing testing strategy. The project started as a self-built system developed over several months before AI tools became part of the workflow, and later evolved through ongoing upgrades and refinements.",
		status: "Live",
		featured: true,
		year: "2026",
		role: "Full ownership - architecture, backend, frontend, planning, implementation",
		stack: [
			"React",
			"Vite",
			"TypeScript",
			"Redux Toolkit",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Docker",
			"JWT",
			"Jest",
			"Supertest",
		],
		highlights: [
			"Built as a large independent project over several months",
			"Client-server separation with modular architecture",
			"End-to-end e-commerce flows for customers and admins",
			"Admin panel with product CRUD and operational flows",
			"JWT auth, password reset, and role-based access control",
			"Dockerized full-stack environment with backend testing",
		],
		links: [
			{ label: "Live Site", url: "https://shopme26.netlify.app/" },
			{ label: "GitHub", url: "https://github.com/urielda00/shopme26" },
		],
		images: [
			{
				src: "/images/projects/shopme.png",
				alt: "SHOPME storefront screenshot",
			},
			{
				src: "/images/projects/shopme2.png",
				alt: "SHOPME admin panel screenshot",
			},
		],
	},
	{
		slug: "lab-booker",
		title: "Lab Booker",
		shortDescription:
			"A production-facing lab room booking system that I restructured, stabilized, and actively continue developing at work.",
		fullDescription:
			"Lab Booker is a professional internal system for managing laboratory room bookings and operational workflows. I received the project in a broken and disorganized state, then redesigned the logic and code structure, led a major refactor, and continued building features and improvements as part of active development toward production. The project reflects real-world ownership, architecture decisions, iterative delivery, and ongoing collaboration.",
		status: "Private",
		featured: true,
		year: "2026",
		role: "Refactor leadership, architecture restructuring, active feature development",
		stack: ["MERN", "Redis", "Docker", "Automation", "Node.js", "React", "MongoDB"],
		highlights: [
			"Took over an unstable codebase and redesigned its logic",
			"Led a major structural refactor of the project",
			"Worked on real workflows and production-oriented delivery",
			"Integrated Redis, Docker, and operational automation",
			"Still actively developed and pushed toward production",
		],
		links: [{ label: "GitHub", url: "https://github.com/urielda00/LabBookerProject" }],
		images: [
			{
				src: "/images/projects/lab-booker.png",
				alt: "Lab Booker dashboard screenshot",
			},
		],
	},
	{
		slug: "geekcon-kaparot",
		title: "Geekcon 2025 (Hackathon)",
		shortDescription:
			"An AI-powered interactive art installation combining computer vision, hardware control, and real-time ritual storytelling.",
		fullDescription:
			"Built for Geekcon 2025, Kaparot is an interactive installation inspired by the traditional ritual and reimagined through AI, hardware, and live participant interaction. The system combines face analysis, gesture recognition, generated questions, personalized scoring, audio playback, session logging, and Arduino-controlled physical behavior. It was created as a hackathon-style project with strong experimentation, systems integration, and fast execution.",
		status: "Code Only",
		featured: true,
		year: "2025",
		role: "AI integration, software architecture, experimentation, rapid execution",
		stack: [
			"Python",
			"OpenAI",
			"OpenCV",
			"MediaPipe",
			"Arduino",
			"Pygame",
			"Async Processing",
			"JSON",
		],
		highlights: [
			"Interactive AI ritual system built for Geekcon",
			"Real-time face and gesture analysis",
			"OpenAI-generated questions, scoring, and sermon output",
			"Hardware integration with Arduino, servo motor, and LEDs",
			"Audio playback, session recording, and data logging",
		],
		links: [{ label: "GitHub", url: "https://github.com/urielda00/geekon2025" }],
		images: [
			{
				src: "/images/projects/geekcon.png",
				alt: "Geekon vision",
			},
		],
	},
	{
		slug: "agentium-forge",
		title: "Agentium-Forge",
		shortDescription:
			"An industrial-grade AI multi-agent orchestrator for autonomous software development.",
		fullDescription:
			"Agentium-Forge is a sophisticated multi-agent system designed to automate and manage complex software development tasks. Built with LangGraph, it features a hierarchy of specialized AI agents including a Tech Lead for planning, a Controller for orchestration, and dedicated workers for code and infrastructure. The system incorporates a 'Manager Gate' for human approval and a secure 'Sudo Mode' for direct production interventions, ensuring reliability and control in autonomous workflows. Currently under active development.",
		status: "Prototype",
		featured: true,
		year: "2026",
		role: "Lead Architect & Developer - system design, agent orchestration, security implementation",
		stack: [
			"Python",
			"LangGraph",
			"LangChain",
			"OpenAI (GPT-4o)",
			"SQLite",
			"Docker",
			"Pydantic",
		],
		highlights: [
			"Multi-agent architecture with specialized Tech Lead, Controller, and QA roles",
			"Human-in-the-loop 'Manager Gate' for granular process oversight and approval",
			"Secure 'Sudo Mode' for direct production deployment and destructive actions",
			"Context isolation for each sub-task to ensure high accuracy and token efficiency",
			"Full execution tracking and persistent state management via SQLite",
			"Automated self-healing through iterative QA-feedback loops",
		],
		links: [
			{ label: "GitHub", url: "https://github.com/urielda00/agentium-forge" },
		],
		images: [
			{
				src: "/images/projects/forge-architecture.png",
				alt: "Agentium-Forge system architecture diagram",
			},
		],
	},
	{
		slug: "eventlife",
		title: "EventLife",
		shortDescription:
			"A collaborative full-stack event planning platform built with Java, Spring Boot, and PostgreSQL.",
		fullDescription:
			"EventLife is a collaborative full-stack project focused on event creation, participant management, and item coordination. The backend exposes a clean REST API secured with JWT authentication and documented with Swagger. The project reflects teamwork, API design, and structured backend development using Java and Spring Boot.",
		status: "Collaborative",
		featured: false,
		year: "2025",
		role: "Collaborative development, product structure, frontend contribution, integration",
		stack: [
			"Java 21",
			"Spring Boot 3",
			"Spring Security",
			"JWT",
			"PostgreSQL",
			"Supabase",
			"Swagger",
			"Maven",
			"JavaScript",
		],
		highlights: [
			"REST API for users, events, participants, and items",
			"JWT-based authentication and secure password hashing",
			"Swagger documentation for testing and integration",
			"Built collaboratively as a full-stack team project",
		],
		links: [{ label: "GitHub", url: "https://github.com/orgs/EventLife123/repositories" }],
		images: [
			{
				src: "/images/projects/eventlife.png",
				alt: "EventLife project screenshot",
			},
		],
	},
	{
		slug: "cards-game",
		title: "Cards Game",
		shortDescription:
			"A MERN flashcard and memory-learning app built from a real personal need around English study workflows.",
		fullDescription:
			"Cards Game is a full-stack study application for creating and reviewing word lists with flashcards and related memory-oriented flows. It was built from a real-world need tied to English course study and includes both frontend and backend functionality. The project also supports AI-assisted bulk content preparation for adding word lists efficiently.",
		status: "Live",
		featured: false,
		year: "2026",
		role: "Full-stack development, problem solving, product thinking",
		stack: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
		highlights: [
			"Built from a real user need",
			"Custom word-list and flashcard flows",
			"Client-server setup with separate environments",
			"AI-assisted bulk content formatting workflow",
		],
		links: [
			{ label: "Live Site", url: "https://cards-gamee.netlify.app/" },
			{ label: "GitHub", url: "https://github.com/urielda00/cards-game" },
		],
		images: [
			{
				src: "/images/projects/cards-game-1.png",
				alt: "Cards Game screenshot",
			},
		],
	},
	{
		slug: "image-to-pdf",
		title: "Image to PDF",
		shortDescription:
			"A practical browser-based tool for converting images into A4 PDF files entirely on the client side.",
		fullDescription:
			"Image to PDF is a lightweight utility project built from a real need. It allows users to upload an image, preview it, assign a custom filename, and export it as an A4 PDF - all locally in the browser without sending files to a server. The project emphasizes simplicity, privacy, and practical usefulness.",
		status: "Live",
		featured: false,
		year: "2025",
		role: "Development, product thinking, utility-focused implementation",
		stack: ["HTML", "CSS", "JavaScript", "Client-side PDF processing"],
		highlights: [
			"Fully client-side image-to-PDF conversion",
			"No server required and no file upload risk",
			"Supports multiple image formats",
			"Built from a practical real-world need",
		],
		links: [
			{ label: "Live Site", url: "https://harmonious-mochi-d102df.netlify.app/" },
			{ label: "GitHub", url: "https://github.com/urielda00/img-to-pdf" },
		],
		images: [
			{
				src: "/images/projects/image-to-pdf-1.png",
				alt: "Image to PDF screenshot",
			},
		],
	},
	{
		slug: "landing-page",
		title: "Sample Landing Page",
		shortDescription:
			"A sample React-based landing page project focused on clean structure and presentation.",
		fullDescription:
			"A lightweight frontend project built as a sample landing page using React. It serves as a smaller showcase item that highlights implementation clarity, layout work, and delivery of a polished single-page experience.",
		status: "Live",
		featured: false,
		year: "2024",
		role: "Frontend implementation",
		stack: ["React", "JavaScript", "CSS"],
		highlights: [
			"Clean single-page implementation",
			"Focused presentation project",
			"Good supporting portfolio piece",
		],
		links: [
			{ label: "Live Site", url: "https://curious-alpaca-414f68.netlify.app/" },
			{ label: "GitHub", url: "https://github.com/urielda00/Sample-Landing-Page-2" },
		],
		images: [
			{
				src: "/images/projects/landing-page-1.png",
				alt: "Landing page screenshot",
			},
		],
	},
	{
		slug: "previous-personal-website",
		title: "Previous Personal Website",
		shortDescription:
			"A personal website built to present my profile, background, and projects in a clean and structured way.",
		fullDescription:
			"A personal portfolio website built with React, MUI, and TypeScript. The project was created to present my background and work in a clear way, with focus on clean structure, reusable components, and a polished personal web presence.",
		status: "Live",
		featured: false,
		year: "2024",
		role: "Personal project, frontend implementation, structure and presentation",
		stack: ["React.js", "MUI", "TypeScript"],
		highlights: [
			"Built as a personal presentation website",
			"Focused on clean structure and reusable UI components",
			"Created to showcase profile, projects, and background",
		],
		links: [
			{ label: "Live Site", url: "https://image-to-pdf.netlify.app/" },
			{ label: "GitHub", url: "https://github.com/urielda00/Personal-Portfolio-Website" },
		],
		images: [
			{
				src: "/images/projects/previous-personal-website.png",
				alt: "Previous personal website screenshot",
			},
		],
	},
];
