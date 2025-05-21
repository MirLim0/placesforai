import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "../common/SearchBar";

export default function Header() {
  return (
    <div className="w-full pt-4">
      {/* md 이상: 한 줄 */}
      <header className="hidden md:flex w-full h-[55px] px-16 items-center justify-between">
        <Link href="/" className="mx-4 flex" prefetch={false}>
          <Image src="/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        <div className="flex items-center gap-4 mx-4">
          <SearchBar />
          <Button variant="outline">Log in</Button>
          <Button variant="outline">Sign up</Button>
        </div>
      </header>
      {/* md 이하: 두 줄 */}
      <header className="flex flex-col md:hidden px-8 gap-2">
        <div className="flex h-[55px] w-full items-center justify-between">
          <Link href="/" className="flex" prefetch={false}>
            <Image src="/logo.svg" alt="logo" width={24} height={24} />
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button variant="outline" size="sm">
              Sign up
            </Button>
          </div>
        </div>
        <div className="w-full">
          <SearchBar />
        </div>
      </header>
    </div>
  );
}
