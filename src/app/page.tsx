import Link from "next/link";

  export default function Home() {
    return (
      <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)]">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center min-h-screen p-8 sm:p-20">
          <main className="flex flex-col gap-8 items-center text-center text-white mt-[60vh]">
                        <p className="text-xl">Select your portal to continue:</p>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <Link
                href="/consumer"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-gray-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Consumer Portal
              </Link>
              <Link
                href="/staff"
                className="rounded-full border border-solid border-white/50 transition-colors flex items-center justify-center hover:bg-white/20 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Staff Portal
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }