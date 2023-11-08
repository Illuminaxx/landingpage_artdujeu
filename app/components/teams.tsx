'use client';
import { teamData } from '../lib/data';
import { useSectionInView } from '../lib/hook';
import Team from './team';
import SectionHeading from './section-heading';
import React from 'react';

export default function Teams() {
	const { ref } = useSectionInView('Notre équipe', 0.75);
	return (
		<section ref={ref} id="lequipe" className="scroll-mt-28 mb-28">
			<SectionHeading>Notre équipe</SectionHeading>
			<div>
				{teamData.map((team, index) => (
					<React.Fragment key={index}>
						<Team {...team} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
