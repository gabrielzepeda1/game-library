import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
