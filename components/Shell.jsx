import { BgAtmosphere } from "./BgAtmosphere";
import { GrainOverlay } from "./GrainOverlay";
import { CornerNav } from "./CornerNav";

export function Shell({ children, postCount }) {
	return (
		<div style={{ position: "relative", minHeight: "100vh" }}>
			<BgAtmosphere />
			<CornerNav postCount={postCount} />
			<div style={{ position: "relative", zIndex: 10 }}>{children}</div>
			<GrainOverlay />
		</div>
	);
}
