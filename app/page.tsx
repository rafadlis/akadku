import { BrideGroomChart } from "./_components/bride-groom-flow"
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
        <p className="text-lg text-center max-md:self-start font-serif">
          Akad, the wedding
        </p>
        <h1 className="text-9xl font-medium font-serif">
          Elin <span className="font-extralight">&</span> Fadli
        </h1>
      </PageSection>
      <PageSection>
        <div className="max-w-prose flex flex-col gap-4 group *:transition-colors duration-600">
          <h2 className="font-serif text-5xl">QS ar-rum 21,</h2>
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
      <PageSection>
        <div className="flex flex-col gap-4 items-center justify-center max-md:self-start">
          <p className="text-5xl text-center font-serif">Senin 7.7.2025,</p>
          <TimerToTarget
            targetDate="2025-07-07T10:00:00+07:00"
            className="text-lg text-center py-1 font-mono "
            labelClassName="text-muted-foreground text-base"
          />
        </div>
      </PageSection>
      <PageSection>
        <div className="max-w-prose flex flex-col gap-4">
          <h2 className="font-serif text-5xl">Bride & Groom,</h2>
          <BrideGroomChart />
        </div>
      </PageSection>
    </article>
  )
}
