import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        group: {50:"#EFF4FF",100:"#DDE8FF",200:"#BBD0FF",300:"#97B7FF",400:"#6E96F5",500:"#3D69D6",600:"#2E53AA",700:"#234080",800:"#1C325F",900:"#142441"},
        gold: {50:"#FFF7E8",100:"#FEEBC8",200:"#FBD38D",300:"#F6C055",400:"#E9AD37",500:"#D9991F"},
        ink: {900:"#0f172a",800:"#1e293b",700:"#334155",600:"#475569",500:"#64748b"}
      },
      boxShadow: { card: "0 16px 48px rgba(2,32,71,.10)" },
      borderRadius: { xl2: "1rem" }
    }
  },
  plugins: []
};
export default config;
