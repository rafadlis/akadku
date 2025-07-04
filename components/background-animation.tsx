export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 bg-animation-container">
      <div className="round-element absolute top-10 left-10 bg-gradient-to-b from-primary to-primary/50 rounded-full size-30 blur-3xl" />
      <div className="round-element absolute top-20 right-20 bg-gradient-to-b from-secondary to-secondary/50 rounded-full size-30 blur-3xl" />
      <div className="round-element absolute top-1/2 left-1/4 bg-gradient-to-b from-accent to-accent/50 rounded-full size-30 blur-3xl" />
      <div className="round-element absolute bottom-20 right-10 bg-gradient-to-b from-foreground to-foreground/50 rounded-full size-30 blur-3xl" />
      <div className="round-element absolute bottom-10 left-20 bg-gradient-to-b from-background to-background/50 rounded-full size-30 blur-3xl" />
      <div className="round-element absolute top-1/3 right-1/3 bg-gradient-to-b from-card to-card/50 rounded-full size-30 blur-3xl" />
      <div className="round-element absolute bottom-1/3 left-1/2 bg-gradient-to-b from-input to-input/50 rounded-full size-30 blur-3xl" />
      <div className="round-element absolute top-2/3 right-1/4 bg-gradient-to-b from-ring to-ring/50 rounded-full size-30 blur-3xl" />
    </div>
  )
}
