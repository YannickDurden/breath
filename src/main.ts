import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const $speed = document.getElementById('speed') as HTMLInputElement;
  const $circle = document.querySelector('.circle') as HTMLDivElement;

  $speed.addEventListener('change', function () {
    const speed = Number(this.value);
    const duration = speed * 100;
    $circle.style.animationDuration = `${duration}ms`;
    let scale = (speed / 100) * 1.5;
    scale = Math.round(scale * 100) / 100;
    console.log('scale', scale);

    $circle.style.transform = `scale(${scale})`;

  });
});