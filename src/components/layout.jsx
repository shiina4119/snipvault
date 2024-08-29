import Navbar from "./navbar";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";

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
        <Toaster />
      </ThemeProvider>
    </div>
  );
}
