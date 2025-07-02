import TimerToTarget from "./_components/timer-to-target"
import { cn } from "@/lib/utils"

const PageSection = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <section
      className={cn(
        "h-dvh flex flex-col justify-center gap-6 items-center",
        className
      )}
    >
      {children}
    </section>
  )
}

export default function Akadku() {
  return (
    <article className="min-h-dvh flex flex-col items-center justify-center px-4">
      <PageSection>
        <p className="text-lg text-center font-black px-2.5 py-0.5 bg-foreground text-background max-md:self-start">
          AKAD
        </p>
        <h1 className="text-9xl font-medium font-serif">
          Elin <span className="font-extralight">&</span> Fadli
        </h1>
        <div className="flex flex-row gap-4 items-center justify-center max-md:self-start">
          <TimerToTarget
            targetDate="2025-07-07T10:00:00+07:00"
            className="text-lg text-center py-1 font-mono"
          />
          <p className="text-lg text-center font-mono mr-1">~</p>
          <p className="text-lg text-center py-1 font-mono">7.7.2025</p>
        </div>
      </PageSection>
      <PageSection>
        <div className="max-w-prose flex flex-col gap-4 group *:transition-colors duration-600">
          <p className="font-serif text-5xl">QS. ar-rum 21</p>
          <p className="text-muted-foreground *:duration-600">
            Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu{" "}
            <span className="md:group-hover:text-foreground font-medium max-md:text-foreground">
              pasangan hidup
            </span>{" "}
            dari jenismu sendiri supaya kamu dapat{" "}
            <span className="md:group-hover:text-foreground font-medium max-md:text-foreground">
              ketenangan hati
            </span>{" "}
            dan dijadikannya{" "}
            <span className="md:group-hover:text-foreground font-medium max-md:text-foreground">
              kasih sayang
            </span>{" "}
            di antara kamu. Sesungguhnya yang demikian menjadi{" "}
            <span className="md:group-hover:text-foreground font-medium max-md:text-foreground">
              tanda-tanda kebesaran-Nya
            </span>{" "}
            bagi orang-orang yang berpikir
          </p>
        </div>
      </PageSection>
    </article>
  )
}
