export const colors = [
    'text-teal-500',
    'text-cyan-500',
    'text-sky-500',
    'text-lime-500',
    'text-emerald-500',
    'white'
  ]
  
export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}