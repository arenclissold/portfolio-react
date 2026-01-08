import ProjectLinkIcon from "./icons/ProjectLinkIcon";
import AeonImg from "./assets/aeon.jpg";
import LeWagon from "./assets/lewagon.jpg";
import AARPlumbing from "./assets/aar-plumbing.jpg";

export default function Experience() {
	const link = (url, label) => {
		return `<a href={https://${url}} target="_blank" rel="noreferrer" class="text-primary">${label || url}</a>`;
	};

	const projectData = [
		{
			name: "Aeon - Full Stack Developer",
			description: `I currently work at an online philosophy magazine called Aeon. Apart from the main site, ${link("aeon.co")}, we also have ${link("psyche.co")}, a psychology magazine and ${link("sophiaclub.co")} which sells tickets to live philosophy events.`,
			technologies: ["Nextjs", "Rails", "Typescript", "AWS", "GraphQL"],
			website: "https://aeon.co/",
			img: AeonImg,
		},
		{
			name: "Le Wagon - Teacher Assistant",
			description: `${link("lewagon.com", "Le Wagon")} offers web develop bootcamps to teach students how to code as part of a team and get job ready. As a teachers assistant, I help students learning the basics of how to code up to building full stack projects.`,
			technologies: ["Ruby On Rails", "Postgresql", "JavaScript", "SCSS"],
			website: "https://www.lewagon.com/",
			img: LeWagon,
		},
		{
			name: "Free Lancing",
			description: `In additon to the above I also take on free lancing contracts to bring my clients ideas to life. Like ${link("aarplumbing.com.au")}, I can make your online dreams a reality. If you have something in mind, feel free to reah out.`,
			technologies: ["Astro", "Cloudflare", "Typescript", "Tailwind"],
			website: "https://aarplumbing.com.au/",
			img: AARPlumbing,
		},
	];

	const ExperienceCard = (props) => {
		return (
			<div className="h-80 shadow-lg md:shadow-none mt-28 relative">
				<a href={props.data.website} className="group">
					<div
						className={`transition-all duration-500 h-full w-full opacity-95 absolute z-[1] bg-[#001f54]
          md:hidden rounded right-0
          ${props.index % 2 === 1 && "right-0"}`}
					></div>
					<img
						className={`h-full w-full md:w-[55%] w- absolute z-0 rounded object-cover object-top
          transition-all duration-500 group-hover:scale-105 ${props.index % 2 === 1 && "right-0"}`}
						src={props.data.img}
						alt={props.data.name}
					/>
				</a>
				<div
					className={`z-[2] relative flex flex-col justify-between p-4 w-full h-full md:w-[55%] items-start
        ${props.index % 2 === 1 ? "" : "float-right  md:items-end"}`}
				>
					<h3 className="font-mono text-primary">{props.data.name}</h3>
					<p
						className=" md:bg-[#001f54] md:p-6 rounded md:shadow-lg"
						dangerouslySetInnerHTML={{ __html: props.data.description }}
					>
						{}
					</p>
					<p>
						{props.data.technologies.map((technology, i) =>
							i !== props.data.technologies.length - 1
								? `${technology} | `
								: technology,
						)}
					</p>
					<div className="flex lg:justify-end">
						<a href={props.data.website}>
							<ProjectLinkIcon />
						</a>
					</div>
				</div>
			</div>
		);
	};

	const projects = projectData.map((data, i) => (
		<ExperienceCard key={i} data={data} index={i} />
	));

	return (
		<section id="experience" className="mt-20">
			<div className="flex items-center">
				<h2 className="font-semibold text-4xl">Experience</h2>
				<div className="line" />
			</div>
			<div className="flex flex-col">{projects}</div>
		</section>
	);
}
