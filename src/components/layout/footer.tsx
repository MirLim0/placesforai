export default function Footer() {
  return (
    <div className="bg-gray-100 mx-auto px-4 md:px-6 lg:px-20 py-20">
      <footer className="flex h-auto w-full shrink-0 items-center justify-between px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4 items-baseline box-border w-full">
          <div className="col-span-3 font-bold text-sm">
            <div className="flex flex-col gap-2">
              <a href="/about">About & Features</a>
              <a href="/contribute">Contribute</a>
              <a href="/api">API</a>
              <a href="/ai">AI</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
