import Navbar from "./navbar";
import { ThemeProvider } from "./theme-provider";

export default function Layout({ children }) {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <main>{children}</main>
      </ThemeProvider>
    </div>
  );
}
