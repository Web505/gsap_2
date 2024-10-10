const screen_width = window.screen.width;
const screen_height = window.screen.height;

gsap.to(".element", {rotation: 360, x: screen_width / 2, duration: 3, opacity: 0.8, delay: 1.2, repeat: -1, scaleY: 1.5, scaleX: 1.5, yPercent: screen_height * -0.45});
