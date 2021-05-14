const baseUrl = "https://rickandmortyapi.com/api";

export const fetchData = async (dataType) => {
  const response = await fetch(`${baseUrl}/${dataType}`);
  const data = await response.json();
  return data;
};

const getEpisodeIds = (episodeUrls) => {
  return episodeUrls.map((episodeUrl) => {
    const match = episodeUrl.match(/\d+$/);
    if (match && match.length > 0) {
      return match[0];
    }
    return "";
  });
};

export const getEpisodes = async (episodeUrls) => {
  const episodesInfoResponse = await fetch(
    `${baseUrl}/episode/${getEpisodeIds(episodeUrls).join(",")}`
  );

  const result = await episodesInfoResponse.json();

  return Array.isArray(result) ? result : [result];
};
