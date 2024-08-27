import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <>
      <div className="justify-between space-y-4 p-4 sm:flex sm:flex-row">
        <Button>Language</Button>
        <div className="flex items-center space-x-2">
          <Label htmlFor="syntax">Syntax Highlighting</Label>
          <Switch id="syntax" />
        </div>
      </div>
      <div>Code Area</div>
      <div className="flex flex-row justify-end space-x-4 p-4">
        <Button>Expire after</Button>
        <Button>Paste snippet</Button>
      </div>
    </>
  );
}
