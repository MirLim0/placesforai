import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="containermx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-[55px] w-full shrink-0 items-center justify-between px-4 md:px-6">
        <Link href="#" className="mx-4 flex" prefetch={false}>
          <Image src="/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        <div className="flex items-center gap-4 mx-4">
          <Button variant="outline" className="rounded-none" size="sm">
            Log in
          </Button>
          <Button variant="outline" className="rounded-none" size="sm">
            Sign up
          </Button>
        </div>
      </header>
    </div>
  );
}
