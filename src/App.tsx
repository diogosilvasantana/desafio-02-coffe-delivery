import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Intro />
    </ThemeProvider>
  );
}
