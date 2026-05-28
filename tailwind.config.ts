import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "can-dark-green": "#144C1B",
                "can-lime-green": "#7CC704",
                "can-med-green": "#286C0B",
                "can-white": "#FFFFFF",
                "can-text-dark": "#333333",
                "can-bg-light": "#F4F7F4",
            },
            boxShadow: {
                "soft": "0 10px 30px rgba(20, 76, 27, 0.08)",
                "strong": "0 15px 40px rgba(20, 76, 27, 0.15)",
            },
            backgroundImage: {
                'gradient-can': 'linear-gradient(135deg, #144C1B 0%, #286C0B 100%)',
                'gradient-overlay': 'linear-gradient(to top, rgba(20, 76, 27, 0.75), transparent)',
            }
        },
    },
    plugins: [],
};

export default config;