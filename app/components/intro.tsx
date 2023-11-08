'use client';

import { BsArrowRight } from 'react-icons/bs';
import { GiArchiveRegister } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '../context/active-section-context';
import { useSectionInView } from '../lib/hook';

export default function Intro() {
	const { ref } = useSectionInView('Accueil', 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section ref={ref} id="accueil" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[50rem]">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2
						}}
					>
						<Image
							src="/artdujeu.png"
							alt="Art du jeux logo"
							width="292"
							height="292"
							quality="95"
							priority={true}
							className="object-cover"
						/>
					</motion.div>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl dark:text-white"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				Découvrez sur Arras une boutique de jeux de société et une salle de jeux ouverts à tous !
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1
				}}
			>
				<Link
					href="#evenement"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection('Evenements & réservations');
						setTimeOfLastClick(Date.now());
					}}
				>
					Réservez ici <GiArchiveRegister className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>

				<Link
					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
					href="#contact"
					onClick={() => {
						setActiveSection('Contactez-nous');
						setTimeOfLastClick(Date.now());
					}}
				>
					Contactez-nous <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
				</Link>

				
			</motion.div>
		</section>
	);
}
