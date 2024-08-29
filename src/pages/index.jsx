import ExpiryDropdown from "@/components/expiry-dropdown";
import LanguageSelector from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [lang, setLang] = useState("");
  const [syntax, setSyntax] = useState(false);
  const [expiry, setExpiry] = useState(0);
  const [code, setCode] = useState("");

  async function handlePaste() {
    const response = await fetch("/api/paste", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: uuidv4(),
        lang: lang,
        code: code,
        expiry: expiry,
      }),
    });

    const result = await response.json();
  }

  return (
    <>
      <div className="justify-between space-y-4 p-4 sm:flex sm:flex-row">
        <LanguageSelector lang={lang} setLang={setLang} />
        <div className="flex items-center space-x-2">
          <Label htmlFor="syntax">Syntax Highlighting</Label>
          <Switch id="syntax" onCheckedChange={() => setSyntax(!syntax)} />
        </div>
      </div>
      {/* Add code editor later */}
      <div className="p-4">
        <Textarea
          placeholder="Awesome code goes here..."
          className="min-h-96"
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-end space-x-4 p-4">
        <ExpiryDropdown expiry={expiry} setExpiry={setExpiry} />
        <Button onClick={() => handlePaste()}>Paste snippet</Button>
      </div>
    </>
  );
}
