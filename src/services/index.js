import { getEpisodeIds } from "../utils";
const baseUrl = "https://rickandmortyapi.com/api";

export const getData = async (dataType) => {
  const response = await fetch(`${baseUrl}/${dataType}`);
  const data = await response.json();
  return data;
};

export const getEpisodes = async (episodeUrls) => {
  const episodesInfoResponse = await fetch(
    `${baseUrl}/episode/${getEpisodeIds(episodeUrls).join(",")}`
  );

  const result = await episodesInfoResponse.json();

  return Array.isArray(result) ? result : [result];
};
