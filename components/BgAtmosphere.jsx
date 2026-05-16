export function BgAtmosphere() {
	return (
		<div
			aria-hidden="true"
			style={{
				position: "fixed",
				inset: 0,
				zIndex: 0,
				background: "#2A2F25",
				pointerEvents: "none",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "absolute",
					width: "900px",
					height: "700px",
					borderRadius: "50%",
					background:
						"radial-gradient(ellipse, rgba(203,170,106,0.13) 0%, rgba(203,170,106,0.04) 40%, transparent 70%)",
					filter: "blur(80px)",
					top: "-250px",
					left: "50%",
					transform: "translateX(-50%)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					width: "500px",
					height: "500px",
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(203,170,106,0.07) 0%, transparent 65%)",
					filter: "blur(100px)",
					bottom: "-150px",
					left: "-80px",
				}}
			/>
			<div
				style={{
					position: "absolute",
					width: "350px",
					height: "350px",
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(203,170,106,0.045) 0%, transparent 65%)",
					filter: "blur(70px)",
					top: "40%",
					right: "-60px",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					height: "200px",
					background:
						"linear-gradient(to top, rgba(20,19,15,0.5) 0%, transparent 100%)",
				}}
			/>
		</div>
	);
}
