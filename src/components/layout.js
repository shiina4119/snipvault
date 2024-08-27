import { ThemeProvider } from "./theme-provider";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
