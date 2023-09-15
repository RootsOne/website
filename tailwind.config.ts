import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: '#18AC21',
                secondary: '#452FD3',
                green: {
                    900: "#064e3b",
                },
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                proxima: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
                "proxima-alt": ["Proxima Nova Alt", ...defaultTheme.fontFamily.sans],
                product: ["Product sans", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                "4.5xl": "2.5rem",
                "4.75xl": "2.75rem",
            },
            backgroundImage: {
                "dark-shape": "linear-gradient(160deg, transparent 60%,  black 60%)",
            },
            spacing: {
                5.5: "1.375rem",
            },
            maxWidth: {
                ...defaultTheme.spacing,
                prose: "65ch",
                fit: "fit-content",
            },
            minWidth: {
                ...defaultTheme.spacing,
                prose: "65ch",
                fit: "fit-content",
                none: "none",
            },
            minHeight: {
                ...defaultTheme.spacing,
                min: "min-content",
                max: "max-content",
                prose: "65ch",
            },
            maxHeight: {
                ...defaultTheme.spacing,
                min: "min-content",
                max: "max-content",
                prose: "65ch",
            },
            height: {
                fit: "fit-content",
            },
            width: {
                fit: "fit-content",
            },
        },
        variants: {},
        plugins: [require("@tailwindcss/typography")],
    }
}
