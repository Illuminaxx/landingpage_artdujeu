'use client';
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';
import { useSectionInView } from '../lib/hook';
import SectionHeading from './section-heading';

export default function SocialMedia() {
	const { ref } = useSectionInView('Contactez-nous');
	return (
		<div ref={ref} id="contact">
			<SectionHeading>Nos réseaux</SectionHeading>
			<div className="flex justify-center items-center gap-6 pt-8">
				<a
					className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://www.facebook.com/Lartdujeuarras"
					aria-label="Redirection vers la page facebook"
					target="_blank"
				>
					<FaFacebook />
				</a>

				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://www.instagram.com/lartdujeuarras/"
					aria-label="Redirection vers le profil Instagram"
					target="_blank"
				>
					<FaInstagram />
				</a>
				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://discord.gg/aQ6Vyr3zU9"
					aria-label="Redirection vers le discord de la société"
					target="_blank"
				>
					<FaDiscord />
				</a>
			</div>
		</div>
	);
}
