"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <section className="relative bg-[#2A8B84] lg:rounded-bl-3xl lg:overflow-hidden">
        <div className="container px-4 py-24 max-w-[1200px] mx-auto">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-center">
            <div className="space-y-8 lg:col-span-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-white">
                Quality and Total Child Upbringing
              </h1>
              <p className="max-w-[600px] text-zinc-100 md:text-xl">
                A comprehensive guide to raising well-rounded, disciplined
                children who can become blessings to their family, nation, and
                the world at large.
              </p>
              <div className="space-x-4">
                <Button
                  className="bg-[#ff9900] hover:bg-zinc-100 hover:text-[#2A8B84]/90"
                  size={"lg"}
                  onClick={() => router.push("/get-the-book")}
                >
                  Get the Book
                </Button>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/book-cover.jpg"
                alt="Book Cover"
                className="object-contain max-h-[500px]"
                fill
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-[#2A8B84]/10 backdrop-blur-lg" />
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl">
            Core Principles of Child Upbringing
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Physical Health</h3>
              <p className="text-muted-foreground">
                Ensuring children maintain good physical health through proper
                nutrition and exercise.
              </p>
            </Card>
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Spiritual Nurture</h3>
              <p className="text-muted-foreground">
                Developing strong moral and spiritual foundations in children.
              </p>
            </Card>
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Mental Balance</h3>
              <p className="text-muted-foreground">
                Fostering intellectual growth and emotional intelligence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#2A8B84]/10">
        <div className="container px-4 max-w-[1200px] mx-auto">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-center">
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About the Author
              </h2>
              <p className="text-muted-foreground">
                An evangelist and minister of the gospel, dedicated to impacting
                the lives of teenagers and children. With a background in
                Chemical Engineering and years of experience in youth ministry,
                she brings a unique perspective to child upbringing.
              </p>
              <Button
                className="bg-[#2A8B84] hover:bg-[#2A8B84]/90"
                size="lg"
                onClick={() => router.push("/author")}
              >
                Read More
              </Button>
            </div>
            <div>
              <div className="relative aspect-video">
                <Image
                  src="/author.jpg"
                  alt="Angelina"
                  className="rounded-lg object-contain"
                  fill
                />
              </div>
              <div className="text-center">ANGELINA ODINMA UNEZE</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#2A8B84]">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Start Your Journey to Better Parenting Today
            </h2>
            <p className="text-zinc-100">
              Discover the art of raising well-rounded children through
              conscious and intentional effort.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#2A8B84] hover:bg-zinc-100"
            >
              Purchase the Book
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
