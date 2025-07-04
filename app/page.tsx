import {
  CalendarStarIcon,
  MapPinIcon,
  MapTrifoldIcon,
} from "@phosphor-icons/react/dist/ssr"
import { BrideGroomChart } from "./_components/bride-groom-flow"
import TimerToTarget from "./_components/timer-to-target"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Table, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { UcapanDoa } from "./_components/ucapan-doa"
import { SalinNoRekening } from "./_components/salin-no-rekening"

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
        "min-h-svh flex flex-col justify-center gap-6 items-center",
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
        <div className="max-w-prose flex flex-col gap-4 ">
          <h2 className="font-serif text-5xl">The Playlist,</h2>
          <p className="text-muted-foreground">
            Kami menyediakan musik untuk para pengunjung undangan, Anda dapat
            mendengarkan namun perlu{" "}
            <Link
              href="https://www.spotify.com/id/account/login/"
              target="_blank"
              className="underline"
            >
              login terlebih dahulu ke Spotify
            </Link>{" "}
            di browser Anda. Ini demi privacy & policy dari Spotify dan
            kebijakan penyiaran musik Indonesia.
          </p>
          <iframe
            id="embed-iframe"
            className="rounded-xl"
            src="https://open.spotify.com/embed/playlist/0JFWAQMElfCg7pZDKf2sLA?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </PageSection>
      <PageSection>
        <div className="flex flex-col gap-4 items-start justify-start max-md:self-start">
          <p className="text-5xl font-serif">Senin 7.7.2025,</p>
          <TimerToTarget
            targetDate="2025-07-07T10:00:00+07:00"
            className="text-lg text-center py-1 font-mono "
            labelClassName="text-muted-foreground text-base"
          />
          <Button
            size="sm"
            className="mt-1.5 cursor-pointer rounded-none"
            asChild
          >
            <Link
              href="https://calendar.app.google/UfFuh8WNdqXv3iAs7"
              target="_blank"
            >
              <CalendarStarIcon weight="fill" />
              Save The Date
            </Link>
          </Button>
        </div>
      </PageSection>
      <PageSection>
        <div className="max-w-prose flex flex-col gap-4">
          <h2 className="font-serif text-5xl">Bride & Groom,</h2>
          <BrideGroomChart />
        </div>
      </PageSection>
      <PageSection>
        <div className="max-w-prose flex flex-col gap-4">
          <h2 className="font-serif text-5xl">The Event,</h2>
          <p className="text-muted-foreground">
            Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud
            menyelenggarakan Akad Nikah putra-putri kami yang In Syaa Allah akan
            diselenggarakan pada:{" "}
          </p>
          <Table className="text-base">
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Hari/Tanggal
                </TableCell>
                <TableCell>Senin, 7 Juli 2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Waktu</TableCell>
                <TableCell>10.00-14.00 WIB</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Tempat</TableCell>
                <TableCell>
                  <div className="text-wrap">Vila Situ Bagendit</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Alamat</TableCell>
                <TableCell>
                  <div className="text-wrap">
                    Jl. H. Hasan Arif No.005, Kp. Rancakujang, Cipicung, Kec.
                    Banyuresmi, Kab. Garut, Jawa Barat
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex gap-2 justify-start items-center">
            <Button
              size="sm"
              className="cursor-pointer rounded-none"
              variant="outline"
              asChild
            >
              <Link
                href="https://maps.app.goo.gl/1RDeFyE1gxhwu4vM7"
                target="_blank"
              >
                <MapTrifoldIcon weight="fill" />
                Buka Peta
              </Link>
            </Button>
            <Button
              size="sm"
              className="cursor-pointer rounded-none"
              variant="outline"
              asChild
            >
              <Link
                href="https://calendar.app.google/UfFuh8WNdqXv3iAs7"
                target="_blank"
              >
                <CalendarStarIcon weight="fill" />
                Save The Date
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <UcapanDoa />
      </PageSection>
      <PageSection>
        <div className="max-w-prose flex flex-col gap-4">
          <h2 className="font-serif text-5xl">Amplop,</h2>
          <p className="text-muted-foreground">
            Bapak/Ibu/Saudara/i bagi yang mau memberikan Amplop secara digital,
            silahkan dapat mentransfer ke nomor rekening dibawah,
          </p>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Bank Jago
                </TableCell>
                <TableCell>
                  <div className="text-wrap">5098 7937 8625</div>
                </TableCell>
                <TableCell>
                  <SalinNoRekening noRekening="509879378625" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Bank BCA
                </TableCell>
                <TableCell>
                  <div className="text-wrap">1482112981</div>
                </TableCell>
                <TableCell>
                  <SalinNoRekening noRekening="1482112981" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </PageSection>

      <footer className="text-sm text-muted-foreground py-6">
        made{" "}
        <Link href="https://rafadlis.space" target="_blank">
          @Rafadlis
        </Link>
        {" - "}
        2025
      </footer>
    </article>
  )
}
