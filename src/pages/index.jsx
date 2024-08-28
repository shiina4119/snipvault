import LanguageSelector from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("");
  const [syntax, setSyntax] = useState(false);
  const [expiry, setExpiry] = useState(0);
  return (
    <>
      <div className="justify-between space-y-4 p-4 sm:flex sm:flex-row">
        <LanguageSelector setLang={setLang} />
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
        />
      </div>
      <div className="flex flex-row justify-end space-x-4 p-4">
        {console.log(expiry)}
        <Select
          value={expiry === 0 ? undefined : expiry}
          onValueChange={setExpiry}
        >
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Expire after..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="600">10 minutes</SelectItem>
            <SelectItem value="3600">1 hour</SelectItem>
            <SelectItem value="21600">6 hours</SelectItem>
            <SelectItem value="86400">24 hours</SelectItem>
            <SelectItem value="-1">Never</SelectItem>
          </SelectContent>
        </Select>
        <Button>Paste snippet</Button>
      </div>
    </>
  );
}
