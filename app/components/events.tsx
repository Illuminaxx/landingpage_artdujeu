'use client';
import { motion } from 'framer-motion';
import { useSectionInView } from '../lib/hook';
import SectionHeading from './section-heading';
import Image from 'next/image';
export default function Events() {
	const { ref } = useSectionInView('Evenements & réservations');

	return (
		<motion.section
			ref={ref}
			className="mb-28 w-full text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="evenement"
		>
			<SectionHeading>Évènements</SectionHeading>
			<div className="flex flex-col mt-14 sm:flex-row items-center justify-between gap-10 sm:gap-13">
				{/* Text Container */}
				<div className="flex-1 px-4 sm:pr-8">
					<div className="text-left mt-4">
						<p className="mb-4">
							Nous souhaitons réunir une communauté de joueur de jeu débutant ou confirmé afin que tous
							puissent partager des moments ensemble autour de jeux et puisse découvrir de nouveaux jeux.
						</p>{' '}
						<p className="mb-4">
							La salle de jeux est accessible du mardi au samedi de 10h à 19h et également sur réservation
							le jeudi et vendredi de 19h à 22h et dédié à des thèmes, l&apos;entrée est gratuite (hors
							évènements particuliers).
						</p>{' '}
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
							src="/Salledejeux2.jpg"
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
		</motion.section>
	);
}
