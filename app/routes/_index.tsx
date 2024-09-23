import {
  type MetaFunction,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import Hero from "~/components/Hero";
import MainFeatures from "~/components/MainFeatures";
import Testimonials from "~/components/Testimonials";

export const meta: MetaFunction = () => {
  return [
    { title: "Game Library" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("searchTerm");

  if (searchTerm) {
    return redirect(`/app/?searchTerm=${searchTerm}`);
  }
  return null;
}

// export async function action({ request }: ActionFunctionArgs) {
//   const formData = await request.formData();
//   const searchParam = formData.get("searchTerm");

//   return json({ searchParam: searchParam });
// }

export default function Landing() {
  // const actionData = useActionData<typeof action>();
  // console.log(actionData);
  return (
    <>
      <Hero />
      <MainFeatures />
      <Testimonials />
    </>
  );
}
