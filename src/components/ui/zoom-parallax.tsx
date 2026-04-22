'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	const placements = [
		{ x: '0vw', y: '0vh', w: '16vw', h: '16vh' },
		{ x: '18vw', y: '-30vh', w: '24vw', h: '20vh' },
		{ x: '-22vw', y: '-10vh', w: '14vw', h: '28vh' },
		{ x: '28vw', y: '-2vh', w: '18vw', h: '18vh' },
		{ x: '14vw', y: '26vh', w: '14vw', h: '18vh' },
		{ x: '-24vw', y: '26vh', w: '22vw', h: '18vh' },
		{ x: '30vw', y: '22vh', w: '12vw', h: '12vh' },
		{ x: '-8vw', y: '-34vh', w: '14vw', h: '14vh' },
		{ x: '-34vw', y: '-24vh', w: '12vw', h: '12vh' },
		{ x: '36vw', y: '-22vh', w: '12vw', h: '12vh' },
		{ x: '-36vw', y: '18vh', w: '14vw', h: '14vh' },
		{ x: '2vw', y: '34vh', w: '12vw', h: '12vh' },
	];

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];
					const placement = placements[index % placements.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className="absolute inset-0 flex items-center justify-center"
						>
							<div
								className="relative min-h-[72px] min-w-[72px]"
								style={{
									width: placement.w,
									height: placement.h,
									transform: `translate(${placement.x}, ${placement.y})`,
								}}
							>
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-contain p-3 md:p-4"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
