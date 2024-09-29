import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "../../node_modules/@cs-magic/shadcn/dist/**/*",
    "../../node_modules/@cs-magic/react/dist/**/*",
    "../../node_modules/@cs-magic/assistant-frontend-common/dist/**/*",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      fontFamily: {
        // 需要本地安装
        pingfang: ["PingFang SC"],
        songti: ["Songti SC", "STSong"],
        art: [
          "Zapfino", //这个花体最飘逸！
          // "Trebuchet MS",
          // "Snell Roundhand", // 这个花体还行
          // "SignPainter",
          // "Rockwell",
          // "Party LET",
          // "Optima",
          // "Menlo",
          // "HYShangWeiShouShu W",
          // "Helvetica Neue",
          // "Chalkduster",
          // "Brush Script MT",
          // "Apple Chancery",
        ],
      },
      colors: {
        wechat: "hsl(var(--wechat))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        primary2: {
          DEFAULT: "hsl(var(--primary2))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderStyle: {
        "wider-dashed": "dashed", // Name your custom style
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    require("@tailwindcss/forms"),

    // @ts-ignore
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".border-wider-dashed": {
          borderStyle: "dashed",
          borderWidth: "1px",
          backgroundImage:
            "repeating-linear-gradient(to right, transparent, transparent 10px, black 10px, black 40px)", // Adjust the spacing here
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },

    // todo: why not works
    // ref: https://github.com/pacocoursey/next-themes/issues/254#issuecomment-1951349710
    // eslint-disable-next-line @typescript-eslint/unbound-method
    plugin(function ({ addUtilities }) {
      const utilities = {
        // light, dark color scheme
        ".light": {
          "color-scheme": "light",
        },
        ".dark": {
          "color-scheme": "dark",
        },
      };
      addUtilities(utilities);
    }),
  ],
} satisfies Config;

export default config;
