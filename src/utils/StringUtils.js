export function capitialize(word) {
  const capitalizedWord =
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capitalizedWord;
}
