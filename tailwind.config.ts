import type { Config } from "tailwindcss";

const config: { content: string[]; theme: { extend: {} }; plugins: any[] } = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;