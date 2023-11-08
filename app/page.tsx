import Intro from './components/intro';
import SectionDivider from './components/section-divider';
import Store from './components/store';
import Teams from './components/teams';
import Events from './components/events';
import Contact from './components/contact';
import SocialMedia from './components/socialMedia';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			<Intro />
			<SectionDivider />
			<Store />
			<SectionDivider />
			<Events />
			<SectionDivider />
			<Teams />
			<SectionDivider />
			<Contact />
			<SocialMedia />
		</main>
	);
}
