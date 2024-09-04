import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GameCard from "~/components/GameCard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

//Fetch games from IGDB API
export async function loader() {
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
    body: "fields name, summary, cover.*; limit 20;",
  });

  if (!response.ok) {
    return json(
      { error: "Failed to fetch data from IGDB." },
      { status: response.status }
    );
  }

  const data = await response.json();

  return json(data);
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  if (data.error) {
    return <div>Error: {data.error}</div>;
  }

  return (
    <div className="font-sans p-4">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-3 py-3">
        Game Library
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {data.map((game: any) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
