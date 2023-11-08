'use client';
import { motion } from 'framer-motion';
import { useSectionInView } from '../lib/hook';
import SectionHeading from './section-heading';
import Card from './cardContact';
import { cardContactData } from '../lib/data';
import React from 'react';
import { FaDiscord, FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';
import SectionDivider from './section-divider';
import SocialMedia from './socialMedia';
export default function Contact() {
	const { ref } = useSectionInView('Contactez-nous');

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Nous contacter</SectionHeading>
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-center gap-4">
					{cardContactData.map((card, index) => (
						<React.Fragment key={index}>
							<Card {...card} />
						</React.Fragment>
					))}
				</div>
			</div>
		</motion.section>
	);
}
