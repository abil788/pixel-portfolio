const clickSound = new Audio("/sounds/click.mp3");

clickSound.volume = 0.8;

export const playClick = () => {
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
};
