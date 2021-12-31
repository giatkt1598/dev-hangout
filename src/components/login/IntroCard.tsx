export default function IntroCard() {
  return (
    <div className="bg-opacity-25 bg-white rounded-sm absolute right-8 bottom-8 left-8 text-white p-4
    backdrop-blur-sm">
      <div className="font-semibold text-lg">
            &quot;We&apos;ve been using Untitled to kick start every new project and can&apos;t imagine working without it.&quot;
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Andi Lane</h3>
          <span className="text-xs font-semibold">Founder, Catalog</span>
          <span className="text-xs font-light">Web Design Agency</span>
        </div>

        <div className="flex flex-col justify-between">
          <span className="tracking-widest">*****</span>
          <div>button</div>
        </div>
      </div>
    </div>
  )
}
