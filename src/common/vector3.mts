interface Vector3 {
  q: number;
  r: number;
  s: number;
}

const sum = (a: Vector3, b: Vector3): Vector3 => {
  return {
    q: a.q + b.q,
    r: a.r + b.r,
    s: a.s + b.s
  };
};

const equal = (a: Vector3, b: Vector3): boolean => {
  return a.q === b.q && a.r === b.r && a.s === b.s;
};

export { Vector3, sum, equal };
