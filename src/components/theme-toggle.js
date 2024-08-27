import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {console.log(theme)}
      <Button
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
        variant="outline"
      >
        <SunIcon className="absolute transition-all scale-100 dark:scale-0" />
        <MoonIcon className="absolute transition-all scale-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
