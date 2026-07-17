// NOTE: TikTok/Facebook follower counts below are real (as of this build).
// Swap "Years of Excellence" for the clinic's actual founding year before sending this.
const stats = [
  { value: "54K+", label: "TikTok Followers" },
  { value: "47K+", label: "Facebook Followers" },
  { value: "10+", label: "Years of Excellence" },
]

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="font-display text-3xl font-medium text-[var(--brand-ink)] md:text-4xl">
            Trusted &amp; Proven
          </h2>
          <p className="mt-3 max-w-xs text-[15px] text-[var(--muted-foreground)]">
            Celebrating milestones that reflect our commitment to healthy,
            confident smiles.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-medium text-[var(--brand-ink)]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
