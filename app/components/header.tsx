'use client';
import { useActiveSectionContext } from '@/app/context/active-section-context';
import Link from 'next/link';
import { links } from '@/app/lib/data';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<header className="z-[999] relative">
			<motion.div
				className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 lg:top-6 sm:h-[3.25rem] sm:w-[52rem] lg:h-[4.25rem] lg:w-[62rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			/>

			<nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] lg:top-[2.4rem] sm:h-[initial] sm:py-0">
				<ul className="flex w-[42rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-4 lg:gap-10">
					{links.map((link) => (
						<motion.li
							className="h-3/4 flex items-center justify-center relative"
							key={link.hash}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								className={clsx(
									'flex w-full whitespace-nowrap items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
									{
										'text-gray-950 dark:text-gray-200': activeSection === link.name
									}
								)}
								href={link.hash}
								passHref
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
							>
								{link.name}

								{link.name === activeSection && (
									<motion.span
										className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
										layoutId="activeSection"
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30
										}}
									/>
								)}
							</Link>
						</motion.li>
					))}
					<motion.li
						className="h-3/4 flex items-center justify-center relative xs:invisible"
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
					/>
				</ul>
			</nav>
		</header>
	);
}