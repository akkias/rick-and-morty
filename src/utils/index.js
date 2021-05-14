export const getCharacterIdfromUrl = (location) => {
  const characterUrlArr = location.split("-");
  const characterId = characterUrlArr[characterUrlArr.length - 1];
  return characterId;
};
export const getEpisodeIds = (episodeUrls) => {
  return episodeUrls.map((episodeUrl) => {
    const match = episodeUrl.match(/\d+$/);
    if (match && match.length > 0) {
      return match[0];
    }
    return "";
  });
};
