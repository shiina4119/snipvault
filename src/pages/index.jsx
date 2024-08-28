import LanguageSelector from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("");
  return (
    <>
      <div className="justify-between space-y-4 p-4 sm:flex sm:flex-row">
        <LanguageSelector setLang={setLang} />
        {console.log(lang)}
        <div className="flex items-center space-x-2">
          <Label htmlFor="syntax">Syntax Highlighting</Label>
          <Switch id="syntax" />
        </div>
      </div>
      {/* Add code editor later */}
      <div className="p-4">
        <Textarea
          placeholder="Awesome code goes here..."
          className="min-h-96"
        />
      </div>
      <div className="flex flex-row justify-end space-x-4 p-4">
        <Button>Expire after</Button>
        <Button>Paste snippet</Button>
      </div>
    </>
  );
}
