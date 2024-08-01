/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        md: "0 4px 6px -1px #000000, 0 2px 4px -1px #000000",
        outline: "0 0 0 3px #000000",
      },
      colors: {
        primary: {
          light: "#4A5C92",
          dark: "#B4C5FF",
          DEFAULT: "#B4C5FF",
        },
        primaryGradient: {
          light: "linear-gradient(90deg, #4A5C92 0%, #585E72 100%)",
          dark: "linear-gradient(90deg, #B4C5FF 0%, #C1C6DD 100%)",
          DEFAULT: "linear-gradient(90deg, #4A5C92 0%, #C1C6DD 100%)",
        },
        surfaceTint: {
          light: "#4A5C92",
          dark: "#B4C5FF",
          DEFAULT: "#B4C5FF",
        },
        onPrimary: {
          light: "#FFFFFF",
          dark: "#1A2E60",
          DEFAULT: "#1A2E60",
        },
        primaryContainer: {
          light: "#DBE1FF",
          dark: "#324478",
          DEFAULT: "#324478",
        },
        onPrimaryContainer: {
          light: "#00174B",
          dark: "#DBE1FF",
          DEFAULT: "#DBE1FF",
        },
        secondary: {
          light: "#585E72",
          dark: "#C1C6DD",
          DEFAULT: "#C1C6DD",
        },
        onSecondary: {
          light: "#FFFFFF",
          dark: "#2A3042",
          DEFAULT: "#2A3042",
        },
        secondaryContainer: {
          light: "#DDE1F9",
          dark: "#414659",
          DEFAULT: "#414659",
        },
        onSecondaryContainer: {
          light: "#161B2C",
          dark: "#DDE1F9",
          DEFAULT: "#DDE1F9",
        },
        tertiary: {
          light: "#745470",
          dark: "#E2BBDC",
          DEFAULT: "#E2BBDC",
        },
        onTertiary: {
          light: "#FFFFFF",
          dark: "#422741",
          DEFAULT: "#422741",
        },
        tertiaryContainer: {
          light: "#FFD6F8",
          dark: "#5A3D58",
          DEFAULT: "#5A3D58",
        },
        onTertiaryContainer: {
          light: "#2B122B",
          dark: "#FFD6F8",
          DEFAULT: "#FFD6F8",
        },
        error: {
          light: "#BA1A1A",
          dark: "#FFB4AB",
          DEFAULT: "#FFB4AB",
        },
        onError: {
          light: "#FFFFFF",
          dark: "#690005",
          DEFAULT: "#690005",
        },
        errorContainer: {
          light: "#FFDAD6",
          dark: "#93000A",
          DEFAULT: "#93000A",
        },
        onErrorContainer: {
          light: "#410002",
          dark: "#FFDAD6",
          DEFAULT: "#FFDAD6",
        },
        background: {
          light: "#FAF8FF",
          dark: "#121318",
          DEFAULT: "#121318",
        },
        onBackground: {
          light: "#1A1B21",
          dark: "#E3E2E9",
          DEFAULT: "#E3E2E9",
        },
        surface: {
          light: "#FAF8FF",
          dark: "#121318",
          DEFAULT: "#121318",
        },
        onSurface: {
          light: "#1A1B21",
          dark: "#E3E2E9",
          DEFAULT: "#E3E2E9",
        },
        surfaceVariant: {
          light: "#E2E2EC",
          dark: "#45464F",
          DEFAULT: "#45464F",
        },
        onSurfaceVariant: {
          light: "#45464F",
          dark: "#C5C6D0",
          DEFAULT: "#C5C6D0",
        },
        outline: {
          light: "#757680",
          dark: "#8F909A",
          DEFAULT: "#8F909A",
        },
        outlineVariant: {
          light: "#C5C6D0",
          dark: "#45464F",
          DEFAULT: "#45464F",
        },
        shadow: {
          light: "#000000",
          dark: "#000000",
          DEFAULT: "#000000",
        },
        scrim: {
          light: "#000000",
          dark: "#000000",
          DEFAULT: "#000000",
        },
        inverseSurface: {
          light: "#2F3036",
          dark: "#E3E2E9",
          DEFAULT: "#E3E2E9",
        },
        inverseOnSurface: {
          light: "#F1F0F7",
          dark: "#2F3036",
          DEFAULT: "#2F3036",
        },
        inversePrimary: {
          light: "#B4C5FF",
          dark: "#4A5C92",
          DEFAULT: "#4A5C92",
        },
        primaryFixed: {
          light: "#DBE1FF",
          dark: "#DBE1FF",
          DEFAULT: "#DBE1FF",
        },
        onPrimaryFixed: {
          light: "#00174B",
          dark: "#00174B",
          DEFAULT: "#00174B",
        },
        primaryFixedDim: {
          light: "#B4C5FF",
          dark: "#B4C5FF",
          DEFAULT: "#B4C5FF",
        },
        onPrimaryFixedVariant: {
          light: "#324478",
          dark: "#324478",
          DEFAULT: "#324478",
        },
        secondaryFixed: {
          light: "#DDE1F9",
          dark: "#DDE1F9",
          DEFAULT: "#DDE1F9",
        },
        onSecondaryFixed: {
          light: "#161B2C",
          dark: "#161B2C",
          DEFAULT: "#161B2C",
        },
        secondaryFixedDim: {
          light: "#C1C6DD",
          dark: "#C1C6DD",
          DEFAULT: "#C1C6DD",
        },
        onSecondaryFixedVariant: {
          light: "#414659",
          dark: "#414659",
          DEFAULT: "#414659",
        },
        tertiaryFixed: {
          light: "#FFD6F8",
          dark: "#FFD6F8",
          DEFAULT: "#FFD6F8",
        },
        onTertiaryFixed: {
          light: "#2B122B",
          dark: "#2B122B",
          DEFAULT: "#2B122B",
        },
        tertiaryFixedDim: {
          light: "#E2BBDC",
          dark: "#E2BBDC",
          DEFAULT: "#E2BBDC",
        },
        onTertiaryFixedVariant: {
          light: "#5A3D58",
          dark: "#5A3D58",
          DEFAULT: "#5A3D58",
        },
        surfaceDim: {
          light: "#DAD9E0",
          dark: "#121318",
          DEFAULT: "#121318",
        },
        surfaceBright: {
          light: "#FAF8FF",
          dark: "#38393F",
          DEFAULT: "#38393F",
        },
        surfaceContainerLowest: {
          light: "#FFFFFF",
          dark: "#0D0E13",
          DEFAULT: "#0D0E13",
        },
        surfaceContainerLow: {
          light: "#F4F3FA",
          dark: "#1A1B21",
          DEFAULT: "#1A1B21",
        },
        surfaceContainer: {
          light: "#EEEDF4",
          dark: "#1E1F25",
          DEFAULT: "#1E1F25",
        },
        surfaceContainerHigh: {
          light: "#E8E7EF",
          dark: "#292A2F",
          DEFAULT: "#292A2F",
        },
        surfaceContainerHighest: {
          light: "#E3E2E9",
          dark: "#33343A",
          DEFAULT: "#33343A",
        },
      },
    },
  },
  plugins: [],
};
