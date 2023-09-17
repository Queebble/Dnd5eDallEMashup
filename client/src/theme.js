// Define color tokens for the design system
export const tokens = {
  primaryblack: {
    500: "#1c1d21",
  },
  primaryred: {
    500: "#ce0000",
  },
  secondaryred: {
    500: "#AF0000",
  },
  background: {
    500: "#23242a",
  },
  textoffblack: {
    500: "#333333",
  },
  white: {
    500: "#ffffff",
  },
  fadedtext: {
    500: "#90909F",
  },
  buttonborder: {
    500: "#33343a",
  },
};

// Define theme settings for the design system
export const themeSettings = () => {
  return {
    palette: {
      primaryblack: {
        default: tokens.primaryblack[500],
      },
      primaryred: {
        default: tokens.primaryred[500],
      },
      secondaryred: {
        default: tokens.secondaryred[500],
      },
      background: {
        default: tokens.background[500],
        alt: tokens.background[600], // An alternate background color
      },
      textoffblack: {
        default: tokens.textoffblack[500],
      },
      white: {
        default: tokens.white[500],
      },
      fadedtext: {
        default: tokens.fadedtext[500],
      },
      buttonborder: {
        default: tokens.buttonborder[500],
      },
      text: {
        primary: tokens.white[500], // Primary text color
        secondary: tokens.fadedtext[500], // Secondary text color
        disabled: tokens.textoffblack[500], // Disabled text color
        hint: tokens.buttonborder[500], // Hint text color
      },
    },
    typography: {
      fontFamily: ["Helvetica", "sans-serif"].join(","), // Default font family
      fontSize: 12, // Default font size
      h1: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 40, // Heading 1 font size
      },
      h2: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 32, // Heading 2 font size
      },
      h3: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 24, // Heading 3 font size
      },
      h4: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 20, // Heading 4 font size
      },
      h5: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 16, // Heading 5 font size
      },
      h6: {
        fontFamily: ["Helvetica", "sans-serif"].join(","),
        fontSize: 14, // Heading 6 font size
      },
    },
  };
};
