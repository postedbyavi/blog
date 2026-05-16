"use client";

import { useEffect, useRef } from "react";

const GRAIN_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function GrainOverlay() {
	const ref = useRef(null);

	useEffect(() => {
		const positions = [
			"0% 0%",
			"30% 70%",
			"70% 20%",
			"10% 80%",
			"90% 40%",
			"50% 10%",
			"20% 90%",
			"80% 60%",
		];
		let frame = 0;
		const id = setInterval(() => {
			if (ref.current) {
				ref.current.style.backgroundPosition =
					positions[frame % positions.length];
				frame++;
			}
		}, 80);
		return () => clearInterval(id);
	}, []);

	return (
		<div
			ref={ref}
			aria-hidden="true"
			style={{
				position: "fixed",
				inset: 0,
				zIndex: 9999,
				pointerEvents: "none",
				backgroundImage: GRAIN_URL,
				backgroundRepeat: "repeat",
				backgroundSize: "200px 200px",
				opacity: 0.09,
				mixBlendMode: "overlay",
				willChange: "background-position",
			}}
		/>
	);
}
