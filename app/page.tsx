import TimerToTarget from "./_components/timer-to-target"

export default function Akadku() {
  return (
    <article className="min-h-dvh flex flex-col items-center justify-center px-4">
      <section className="flex flex-col justify-start md:justify-center gap-6 items-center">
        <p className="text-lg text-center font-black px-2.5 py-0.5 bg-foreground text-background max-md:self-start">
          AKAD
        </p>
        <h1 className="text-9xl font-medium font-serif">
          Elin <span className="font-extralight">&</span> Fadli
        </h1>
        <div className="flex flex-row gap-2 items-center max-md:self-start">
          <TimerToTarget
            targetDate="2025-07-07T10:00:00+07:00"
            className="text-lg text-center font-black px-3 py-1"
          />
          <div className="size-3.5 bg-foreground rounded-full" />
          <p className="text-lg text-center font-black px-3 py-1">7.7.2025</p>
        </div>
      </section>
    </article>
  )
}
