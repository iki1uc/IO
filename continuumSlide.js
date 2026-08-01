// IO · continuumSlide.js · RAW

// Unendlichkeits‑Operator
// K(t) = 1 / (1 - t)
function K(t) {
    return 1 / (1 - t);
}

// Φ‑Skalierung
// Φ(t) = φ∞ * K(t)
function PhiScale(phi_inf, t) {
    return phi_inf * K(t);
}

// Einzel‑Slide (für io oder oi)
function continuumSlide(element, dx, t) {
    const scale = dx * K(t);
    element.style.transform = `translateX(${scale}px)`;
    return scale;
}

// Dual‑Slide (io ↔ oi)
function continuumDual(io, oi, dx, t) {
    const scale = dx * K(t);
    io.style.transform = `translateX(${scale}px)`;
    oi.style.transform = `translateX(${-scale}px)`;
    return { io: scale, oi: -scale };
}

// Transport‑Rechnung
// T(t) = Δx * K(t)
function transport(dx, t) {
    return dx * K(t);
}

// Dual‑Transport‑Rechnung
function dualTransport(io, oi, dx, t) {
    const scale = dx * K(t);
    io.value = scale;
    oi.value = -scale;
    return { io: scale, oi: -scale };
}

// Export (RAW)
const IO_CONTINUUM = {
    K,
    PhiScale,
    continuumSlide,
    continuumDual,
    transport,
    dualTransport
};
