import Waves from "./assets/contact-waves.svg";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Footer() {
	return (
		<section id="contact" className="mt-20 relative z-1 min-h-[90vh]">
			<div
				className="absolute left-[-50vw] aspect[1/2] w-[150vw] h-full bg-cover bg-center z-[-1]"
				style={{ backgroundImage: `url(${Waves})` }}
			></div>
			<div className="flex items-center justify-center mb-6">
				<div className="h-0.5 w-1/5 bg-[#2f3957] mx-4 rounded-3xl"></div>
				<h2 className="font-semibold text-4xl w-min sm:w-auto">Get in Touch</h2>
				<div className="h-0.5 w-1/5 bg-[#2f3957] mx-4 rounded-3xl"></div>
			</div>
			<p className="mx-auto w-4/5 md:w-1/2 text-center text-lg mix-blend-difference mb-10">
				I'm always keen for a chat whether you're looking to collaborate on
				something or just say hello, feel free to contact me.
			</p>
			<div className="flex justify-center items-center mb-8">
				<a href="https://github.com/arenclissold" className="mx-3">
					<GitHubIcon color="white" />
				</a>
				<a href="https://www.linkedin.com/in/arenclissold/" className="mx-3">
					<LinkedinIcon color="white" />
				</a>
			</div>
		</section>
	);
}
