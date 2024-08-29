import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

export default function Snip() {
  const router = useRouter();
  const id = router.query.uuid;
  const { toast } = useToast();
  return (
    <>
      <div className="flex flex-row justify-between p-4">
        <Button
          className="max-w-fit flex-row space-x-4"
          variant="ghost"
          onClick={() => {
            toast({
              title: "Link copied!",
              description: "Snippet link has been copied to the clipboard.",
            });
          }}
        >
          <ClipboardCopyIcon />
          <div className="text-lg font-semibold">Copy link</div>
        </Button>
        <Button className="max-w-fit">Delete snippet</Button>
      </div>
      <div className="p-4">
        <Textarea className="min-h-96" disabled />
      </div>
      <div className="flex flex-row justify-between p-4">
        <p className="text-2xl text-muted-foreground">Language</p>
        <Button onClick={() => router.back()}>New snippet</Button>
      </div>
    </>
  );
}
