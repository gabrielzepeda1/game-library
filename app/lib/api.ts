import { json } from "@remix-run/node";

export async function getGames(query: string) {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const accessToken = process.env.TWITCH_ACCESS_TOKEN;

  if (!clientId || !accessToken) {
    return json({ error: "Missing API credentials." }, { status: 500 });
  }

  const response = await fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Client-ID": clientId,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: query,
  });

  if (!response.ok) {
    return json(
      { error: "Failed to fetch data from IGDB." },
      { status: response.status }
    );
  }

  return response.json();
}
