import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import GameCard from "~/components/GameCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Game Library" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

//Fetch games from IGDB API
export async function loader({ request }: LoaderFunctionArgs) {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const accessToken = process.env.TWITCH_ACCESS_TOKEN;

  if (!clientId || !accessToken) {
    return json({ error: "Missing API credentials." }, { status: 500 });
  }

  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("searchTerm");
  const query = searchTerm
    ? `search "${searchTerm}"; fields name, summary, cover.*; limit 20;`
    : "fields name, summary, cover.*; limit 500;";

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

  const data = await response.json();

  return json({ data, searchTerm });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const searchTerm = formData.get("search");
  return json({ searchTerm: searchTerm });
}

export default function Index() {
  const { data, searchTerm } = useLoaderData<typeof loader>() as {
    data: any;
    searchTerm: string;
  };

  if (data.error) {
    return <div>Error: {data.error}</div>;
  }

  return (
    <Flowbite>
      <div className="font-sans p-4 bg-gray-100 dark:bg-slate-900">
        <div className="flex align-center justify-center mb-3 py-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Game Library
            </h1>
          </div>
          <div className="flex items-center ml-auto px-2 gap-1">
            <p className="text-lg font-semibold tracking-normal text-gray-900 dark:text-white">
              Dark Mode
            </p>
            <DarkThemeToggle />
          </div>
        </div>
        <div className="mb-3 py-3">
          <Form method="get" className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                name="searchTerm"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Games..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </Form>
          {searchTerm && (
            <p className="text-sm lg:text-lg text-gray-900 dark:text-gray-200 mt-1 ml-1">
              Showing results for...{" "}
              <span className="font-semibold">{searchTerm}</span>
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-6 space-y-3">
          {data.map((game: any) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </Flowbite>
  );
}
