'use client';

import Image from 'next/image';
import { cardContactData } from '../lib/data';

type cardContactprops = (typeof cardContactData)[number];
export default function cardContact({ title, description, imageUrl, desc }: cardContactprops) {
	return (
		<div className="max-w-sm rounded overflow-hidden p-4">
			<div className="flex justify-center items-center">
				{imageUrl && <Image width={32} height={32} src={imageUrl} alt="Sunset in the mountains" />}
			</div>

			<div className="px-6 py-6">
				<div className="font-bold text-xl mb-2 text-dark dark:text-white">{title}</div>
				<p className="text-gray-700 text-base">{description}</p>
                {desc && <p>{desc}</p>}
			</div>
            
		</div>
	);
}
