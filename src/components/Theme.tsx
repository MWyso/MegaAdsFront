import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
colors: {
    blue: "#6200EE",
    green: "#34da58",
    white: "#fff",
    red: "#802020"
},
};

type Props = {
    children: ReactNode;
};

export const Theme = ({ children }: Props) => (
<ThemeProvider theme={theme}>{children}</ThemeProvider>
);