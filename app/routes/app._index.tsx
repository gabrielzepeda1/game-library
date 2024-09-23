import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GameCard from "~/components/GameCard";
import SearchForm from "~/components/SearchForm";
import { getGames } from "~/lib/api";

export const meta: MetaFunction = () => {
  return [
    { title: "Game Library" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

//Fetch games from IGDB API
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("searchTerm");
  if (searchTerm) {
    const query = `search "${searchTerm}"; fields name, summary, cover.*; limit 20;`;
    const data = await getGames(query);
    return json({ data: data, searchTerm: searchTerm });
  }
  return json({ data: [], searchTerm: null });
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
    <>
      <div className="mb-3 py-3">
        <SearchForm searchTerm={searchTerm} />
        {searchTerm && (
          <p className="text-sm lg:text-lg text-gray-900 dark:text-gray-200 mt-1 ml-1">
            Showing results for...{" "}
            <span className="font-semibold">{searchTerm}</span>
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-6 space-y-3 lg:px-3">
        {searchTerm !== null ? (
          data.map((game: any) => <GameCard key={game.id} game={game} />)
        ) : (
          <span className="text-xl text-gray-900 dark:text-white">
            Wow! You haven't searched for any games yet
          </span>
        )}
      </div>
    </>
  );
}
