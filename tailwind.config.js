

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
      },
      colors: {
        primary: "#1a1a1a", // deep black
        secondary: "#c9a227", // golden accent
        bg: "#f9f9f9", // light background
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
    cormorant: ["Cormorant Garamond", "serif"],
    raleway: ["Raleway", "sans-serif"],
    playfair: ["Playfair Display", "serif"],
    serif: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
  },
      colors: {
        primary: "#1a1a1a", // deep black
        secondary: "#c9a227", // golden accent
        bg: "#f9f9f9", // light background
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)", // 🌸 Custom soft shadow
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)"
      },
      borderRadius: {
        DEFAULT: "12px", // md
        xl: "24px"
      }
    }
  }
};


{/*bg: "var(--bg)",
        surface: "var(--surface)",
        accent: "var(--accent)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)"
        },
        border: {
          subtle: "var(--border-subtle)",
          control: "var(--border-control)"
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        focus: "var(--focus)" */}