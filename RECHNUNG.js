function transport(dx, t) {
    const K = 1 / (1 - t);
    return dx * K;
}
