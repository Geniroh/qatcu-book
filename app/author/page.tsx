import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  AirplayIcon as Spotify,
} from "lucide-react";

export default function Author() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <Image
              src="/author.jpg"
              alt="Author"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold mb-2">Angelina Odinma Uneze</h1>
            <p className="text-xl text-gray-600">
              Author, Evangelist, Chemical Engineer
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About the Author</h2>
            <p className="mb-4">
              Angelina Odinma Uneze is an evangelist and minister of the gospel,
              called to impact the lives of teenagers and children. She is a
              graduate of Chemical Engineering from the Federal University of
              Technology, Owerri, and has worked for several years in the oil
              and gas industry as a Process Engineer and Health and Safety
              Officer.
            </p>
            <p className="mb-4">
              Angelina devotes a significant amount of her time to raising
              teenagers in various areas, primarily through the ministry of
              Scripture Union and Anglican churches. Through her work with
              Scripture Union, she visits schools to speak to teens on topics
              such as chastity and other aspects of their lives.
            </p>
            <p>
              In conferences and camp meetings, she engages them in counseling
              sessions and spiritual exercises, with the sole aim of winning
              them over for Christ and helping them grow into well-balanced
              individuals who are valuable to their families and society.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Connect with Angelina</h2>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Listen to Angelina&apos;s Podcast
            </h2>
            <Button className="bg-[#1DB954] hover:bg-[#1DB954]/90">
              <Spotify className="mr-2 h-4 w-4" />
              Listen on Spotify
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
