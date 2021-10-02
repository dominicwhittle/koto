// import { clamp } from "../util/clamp"
export const interpolateRGB = (color1, color2, factor) => {
    // factor = clamp(0, factor, 1)
    factor = factor > 1 ? 1 : factor < 0 ? 0 : factor; // clamp
    const [r1, g1, b1, a1 = 1] = color1;
    const [r2, g2, b2, a2 = 1] = color2;
    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));
    const a = a1 + factor * (a2 - a1); // Alpha 0-1
    return [r, g, b, a];
};
//# sourceMappingURL=color.js.map