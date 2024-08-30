import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { languages } from "@/lib/languages";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

function lang(langSlug) {
  for (let l of languages) {
    if (l.value === langSlug) return l.label;
  }
}

export default function Page() {
  const { toast } = useToast();
  const router = useRouter();
  const { uuid } = router.query;
  const [data, setData] = useState(null);
  const [loading, isLoading] = useState(true);
  const [_, setCopied] = useState(false);

  useEffect(() => {
    fetch(`/api/fetch?id=${uuid}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        isLoading(false);
      });
  }, [uuid]);

  async function copyToClipboard(content) {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Snippet link has been copied to the clipboard.",
      });
    } catch (err) {
      setCopied(false);
      toast({
        variant: "Destructive",
        title: "Unable to copy",
        description: err,
      });
    }
  }

  return (
    <>
      <div className="flex flex-row justify-between p-4">
        <Button
          className="max-w-fit flex-row space-x-4"
          variant="ghost"
          onClick={async () => {
            // TODO: change it to use hostname (set it on .env)
            await copyToClipboard(`localhost:3000/snip/${uuid}`);
          }}
        >
          <ClipboardCopyIcon />
          <div className="text-lg font-semibold">Copy link</div>
        </Button>
        <Button className="max-w-fit">Delete snippet</Button>
      </div>
      <div className="p-4">
        {loading ? (
          <Skeleton />
        ) : (
          <Textarea className="min-h-96">{data.result.code}</Textarea>
        )}
      </div>
      <div className="flex flex-row justify-between p-4">
        <p className="text-2xl text-muted-foreground">
          {loading ? <Skeleton /> : lang(data.result.lang)}
        </p>
        <Button onClick={() => router.back()}>New snippet</Button>
      </div>
    </>
  );
}
