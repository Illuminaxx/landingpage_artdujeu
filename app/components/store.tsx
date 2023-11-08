'use client';

import { motion } from 'framer-motion';
import { useSectionInView } from '../lib/hook';
import SectionHeading from './section-heading';
import Image from 'next/image';
export default function Store() {
	const { ref } = useSectionInView('Boutique & Salle de jeux');

	return (
		<motion.section
			ref={ref}
			className="mb-28 w-full text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="salledejeu"
		>
			<SectionHeading>Boutique & Salle de jeux</SectionHeading>
			<div className="flex flex-col mt-14 sm:flex-row items-center justify-between gap-10 sm:gap-13">
				{/* Text Container */}
				<div className="flex-1 px-4 sm:pr-8">
					<motion.h1
						className="mb-10 mt-4 px-4 text-[12px] sm:text-2xl font-bold leading-snug sm:leading-normal xs:text-lg"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
					>
						Comment L&apos;art du jeu est né ?
					</motion.h1>
					<div className="text-left mt-4">
						<p className="mb-4">
							Passionné de jeux depuis toujours, Maxime{' '}
							<span className="underline">
								{' '}
								adore partager sa passion en soirée entre amis ou en famille
							</span>. Il faisait découvrir une multitude de jeux à tout le monde et passait ses dimanches
							après-midi à jouer aux jeux de rôle.
						</p>{' '}
						<p className="mb-4">
							Auditeur en cabinet comptable, il voulait{' '}
							<span className="font-bold">pouvoir partager plus largement sa passion des jeux</span> et{' '}
							<span className="font-bold">
								aider les personnes à trouver le jeu qui convient à leurs besoins et leurs envies
							</span>.
						</p>{' '}
						<p>
							C&apos;est alors qu&apos;il a travaillé sur{' '}
							<span className="underline">
								l&apos;idée d&apos;ouvrir sa propre boutique de jeux de société
							</span>. Ayant vécu toute sa vie à Achicourt (hormis 5 ans sur Lille pour ses études),{' '}
							<span className="font-bold">Arras</span> s&apos;imposait comme la ville où installer{' '}
							<span className="font-extrabold">L&apos;art du jeu</span>.
						</p>
					</div>
				</div>

				{/* Image Container */}
				<div className="flex-1 self-stretch">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2
						}}
						className="flex h-full justify-center sm:justify-center sm:pl-4 lg:pl-8"
					>
						<Image
							src="/boutique.jpg"
							alt="Access autonomy"
							layout="responsive" // layout responsive pour maintenir le ratio de l'image
							width={900} // Vous devez définir une largeur
							height={500}
							quality="95"
							priority={true}
							className="object-cover overflow-hidden"
						/>
					</motion.div>
				</div>
			</div>
			<div className="flex flex-col mt-20 sm:flex-row items-center justify-between gap-8 sm:gap-12">
				{/* Image Container */}
				<div className="flex-1 self-stretch">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2
						}}
						className="flex h-full justify-center sm:justify-center sm:pl-4 lg:pl-8"
					>
						<Image
							src="/boutique.jpg"
							alt="Access autonomy"
							layout="responsive" // layout responsive pour maintenir le ratio de l'image
							width={900} // Vous devez définir une largeur
							height={500}
							quality="95"
							priority={true}
							className="object-cover overflow-hidden"
						/>
					</motion.div>
				</div>
				{/* Text Container */}
				<div className="flex-1 px-4 sm:pr-8">
					<motion.h1
						className="mb-10 mt-4 px-4 text-[12px] sm:text-2xl font-bold leading-snug sm:leading-normal xs:text-lg"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
					>
						Le concept de notre boutique et de notre salle de jeux ?
					</motion.h1>
					<div className="text-justify mt-4">
						<p className="mb-4">
							Ouvert à tous, notre souhait est de pouvoir démocratiser les jeux de société et permettre à
							des non connaisseurs comme à des connaisseurs de trouver leur bonheur 🙂
						</p>{' '}
						<div className="mb-4">
							A l&apos;intérieur, vous retrouverez :
							<ul className="mt-4">
								<li className="mb-4">
									🎲 Jeux de société : jeux d&apos;ambiance, entre amis, en famille, compétitif,
									coopératif, jeux de rôle, jeux de tuiles, jeux de carte, jeux de dés, escape game,
									puzzle…{' '}
								</li>
								<li className="mb-4">
									🤩 Jeux de cartes à collectionner : Magic, Pokémon, Yu-Gi-Oh!, 7 Fallen…{' '}
								</li>
								<li className="mb-4">
									🎨 Figurines à peindre : Games Workshop (Warhammer et Age of Sigmar) 🧩 Jeux pour
									enfants : jeux français en bois, jeux ludiques…
								</li>
								<li className="break-all">
									Vous ne savez pas quoi choisir ? L&apos;équipe sera là pour vous conseiller🙂
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col mt-20 sm:flex-row items-center justify-between gap-8 sm:gap-12">
				{/* Text Container */}
				<div className="flex-1 px-4 sm:pr-8">
					<motion.h1
						className="mb-10 mt-4 px-4 text-[12px] sm:text-2xl font-bold leading-snug sm:leading-normal xs:text-lg"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
					>
						Et pourquoi pas tester nos jeux dans la salle de jeux ?
					</motion.h1>
					<div className="text-justify mt-4">
						<p className="mb-4">
							La salle de jeux est accessible{' '}
							<span className="font-bold">du mardi au samedi de 10h à 19h</span> et également{' '}
							<span className="font-bold">le jeudi et vendredi de 19h à 22h</span>,{' '}
							<span className="font-extrabold">
								l&apos;entrée est gratuite (hors évènements particuliers)
							</span>.
						</p>{' '}
						<p>
							Dans la salle de jeux,{' '}
							<span className="underline">
								tout est zéro déchet : des serviettes de table aux filtres à thé
							</span>, vous pourrez consommer sur place{' '}
							<span className="underline">une sélection de boissons et nourritures locales</span>
							pour étancher votre soif et votre faim pendant vos parties de jeu.
						</p>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
