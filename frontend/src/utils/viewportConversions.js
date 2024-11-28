export const pxToVw = (px) => {
  const vw = window.innerWidth;
  return (px / vw) * 100;
};

export const pxToVh = (px) => {
  const vh = window.innerHeight;
  return (px / vh) * 100;
};
