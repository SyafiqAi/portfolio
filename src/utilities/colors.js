export const colors = [
    'text-teal-500',
    'text-emerald-500',
    ''
  ]
  
let i = -1
export function changeColor() {
  i++
  if (i == colors.length) { i = 0}
  return colors[i];
}