import Image from "next/image";

export default function Error() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Error!!!1!!1!
      </h1>
      <Image src={"/catjam.gif"} alt="catjam" width={200} height={200} />
    </div>
  );
}
