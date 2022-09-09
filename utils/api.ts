import { ApiRoute, backendUrl } from "../const";

export const getStatistics = async () => {
  const res = await fetch(`${backendUrl}${ApiRoute.WebsiteStat}`, {
    method: "POST",
  });
  const stat = await res.json();
  return stat;
};
