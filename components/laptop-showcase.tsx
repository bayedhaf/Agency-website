import Image from "next/image";
import { User } from "lucide-react";

type TeamMember = {
  name: string;
  /** Either an image path (e.g. "/uploads/bayisa-ba.jpg") or a Tailwind
   *  gradient stop pair (e.g. "from-[#43363f] to-[#211a1f]") used as a
   *  placeholder tile when no photo is available yet. */
  image: string;
};

const TEAM: TeamMember[] = [
  { name: "Bayisa Balcha", image: "/uploads/bbb.jpg" },
  { name: "Aman Abdala", image: "/uploads/aman.jpg" },
  { name: "Girma Wekayo", image: "/uploads/bb.jpg" },
];

const KEY_ROWS = [14, 14, 13, 11, 8];

function isImagePath(value: string) {
  return value.startsWith("/") || value.startsWith("http");
}

export function LaptopShowcase() {
  return (
    <div
      aria-hidden
      className="laptop-perspective laptop-fade-mask pointer-events-none absolute inset-y-0 right-0 flex w-full items-center justify-center opacity-[0.75] sm:w-[58%] sm:justify-end sm:pr-2 lg:w-[50%] lg:pr-6"
    >
      <div className="laptop-rotate flex flex-col items-center">
        {/* screen: thin bezel, MacBook-style */}
        <div className="w-[300px] rounded-t-[10px] border border-[#c2c7cf] bg-gradient-to-b from-[#e8eaed] to-[#b7bcc4] p-[6px] shadow-[0_25px_70px_-15px_rgba(20,25,35,0.5)] sm:w-[440px] sm:rounded-t-[14px] sm:p-2">
          <div className="relative overflow-hidden rounded-[3px] bg-[#111316] sm:rounded-[5px]">
            {/* camera notch */}
            <div className="absolute left-1/2 top-1 z-10 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#3a3d42] sm:top-1.5 sm:h-1 sm:w-1" />

            {/* screen content: 3 portrait tiles + caption bar */}
            <div className="grid aspect-[16/10] grid-cols-3 gap-px bg-black pt-3 sm:pt-4">
              {TEAM.map((m) =>
                isImagePath(m.image) ? (
                  <div key={m.name} className="relative overflow-hidden bg-[#1a1d22]">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="140px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    key={m.name}
                    className={`flex flex-col items-center justify-center gap-1 bg-gradient-to-b ${m.image}`}
                  >
                    <User
                      className="h-5 w-5 text-[#9aa0aa] sm:h-10 sm:w-10"
                      strokeWidth={1.5}
                    />
                  </div>
                )
              )}
            </div>
            <div className="flex items-center justify-center bg-[#111316] py-1.5 sm:py-2.5">
              <span className="font-display text-[9px] font-bold tracking-[0.1em] text-white sm:text-[13px]">
                THE TRIO
              </span>
            </div>
          </div>
        </div>

        {/* hinge */}
        <div className="h-[2px] w-[94%] rounded-full bg-gradient-to-b from-[#9aa0aa] to-[#c7ccd4] sm:h-[3px]" />

        {/* keyboard deck: flat aluminum, MacBook-style */}
        <div
          className="w-[320px] rounded-b-[14px] border border-t-0 border-[#c2c7cf] bg-gradient-to-b from-[#e2e4e8] via-[#d3d7dc] to-[#a9aeb7] px-3 pb-4 pt-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_25px_40px_-20px_rgba(20,25,35,0.4)] sm:w-[470px] sm:rounded-b-[18px] sm:px-6 sm:pb-6 sm:pt-3.5"
          style={{ clipPath: "polygon(1.5% 0, 98.5% 0, 100% 100%, 0% 100%)" }}
        >
          <div className="rounded-[4px] bg-[#f1f2f4] p-1.5 shadow-inner sm:rounded-[6px] sm:p-2">
            <div className="space-y-[3px] sm:space-y-1">
              {KEY_ROWS.map((count, i) => (
                <div key={i} className="flex justify-center gap-[3px] sm:gap-1">
                  {Array.from({ length: count }).map((_, k) => (
                    <span
                      key={k}
                      className="h-[6px] flex-1 max-w-[13px] rounded-[2px] bg-[#3a3d42] sm:h-[9px]"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-2.5 h-5 w-24 rounded-[6px] border border-[#c2c7cf] bg-gradient-to-b from-[#eceef1] to-[#d6dade] shadow-inner sm:mt-3.5 sm:h-8 sm:w-40" />
        </div>
      </div>
    </div>
  );
}