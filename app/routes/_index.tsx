import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "flowbite-react";

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
    body: "fields *; limit 10;",
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

  console.log(data);

  return (
    <div className="font-sans p-4">
      <h1>Game Library</h1>
      <ul>
        {data.map((game: any) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            {game.cover && <img src={game.cover}></img>}
          </li>
        ))}
      </ul>
      <Button>Click me</Button>
    </div>
  );
}
