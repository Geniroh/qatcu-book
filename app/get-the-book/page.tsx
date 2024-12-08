import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GetTheBook() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* <SiteHeader /> */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Get the Book</h1>

        {/* Amazon KDP Button */}
        <div className="text-center mb-12">
          <Button
            size="lg"
            className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-black"
          >
            Buy on Amazon KDP
          </Button>
        </div>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Pricing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>eBook</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$9.99</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Instant download</li>
                  <li>Read on any device</li>
                  <li>Searchable content</li>
                </ul>
                <Button className="w-full bg-[#2A8B84] hover:bg-[#2A8B84]/90">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Paperback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$19.99</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Physical copy</li>
                  <li>Free shipping</li>
                  <li>Ideal for gifting</li>
                </ul>
                <Button className="w-full bg-[#2A8B84] hover:bg-[#2A8B84]/90">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hardcover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$29.99</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Premium quality</li>
                  <li>Durable binding</li>
                  <li>Collector&apos;s edition</li>
                </ul>
                <Button className="w-full bg-[#2A8B84] hover:bg-[#2A8B84]/90">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#2A8B84] text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-center mb-6">
            Stay updated with parenting tips and exclusive offers!
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black"
            />
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
