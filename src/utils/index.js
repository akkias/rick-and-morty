export const getCharacterIdfromUrl = (location) => {
  const characterUrlArr = location.split("-");
  const characterId = characterUrlArr[characterUrlArr.length - 1];
  return characterId;
};
