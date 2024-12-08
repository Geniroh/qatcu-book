// import Link from "next/link";
// import { Facebook, Twitter } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function SiteHeader() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 container">
//       <div className="flex h-14 items-center">
//         <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
//           <div className="w-full flex-1 md:w-auto md:flex-none">
//             <Button className="bg-[#2A8B84] hover:bg-[#2A8B84]/90">
//               Get the Book
//             </Button>
//           </div>
//           <nav className="flex items-center">
//             <Link
//               href="https://twitter.com"
//               target="_blank"
//               rel="noreferrer"
//               className="mr-3"
//             >
//               <Twitter className="h-5 w-5 text-foreground/60 hover:text-foreground/80" />
//               <span className="sr-only">Twitter</span>
//             </Link>
//             <Link href="https://facebook.com" target="_blank" rel="noreferrer">
//               <Facebook className="h-5 w-5 text-foreground/60 hover:text-foreground/80" />
//               <span className="sr-only">Facebook</span>
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button className="bg-[#2A8B84] hover:bg-[#2A8B84]/90">
              Get the Book
            </Button>
          </div>
          <nav className="flex items-center">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="mr-3"
            >
              <Twitter className="h-5 w-5 text-foreground/60 hover:text-foreground/80" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="h-5 w-5 text-foreground/60 hover:text-foreground/80" />
              <span className="sr-only">Facebook</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
