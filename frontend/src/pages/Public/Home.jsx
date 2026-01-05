export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="font-heading text-5xl lg:text-6xl font-semibold leading-tight">
              Premium products
              <br />
              crafted for modern living
            </h1>

            <p className="mt-6 text-muted max-w-lg">
              Discover a curated collection designed with quality,
              elegance, and simplicity at its core.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-outline">Explore</button>
            </div>
          </div>

          {/* HERO VISUAL */}
         <div className="relative">
  <img
    src="/assets/spices-bg.jpg"
    alt="Hero"
    className="w-full aspect-[4/5] object-cover rounded-2xl shadow-soft"
  />

  {/* Floating card */}
  <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-xl shadow-soft">
    <p className="text-sm font-medium">Trusted by 10k+ users</p>
    <span className="text-xs text-muted">Worldwide</span>
    </div>
            {/* Floating card */}
            <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-xl shadow-soft">
              <p className="text-sm font-medium">Trusted by 10k+ users</p>
              <span className="text-xs text-muted">Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {["Quality", "Design", "Experience"].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-8 shadow-soft
                           transition-all duration-300 hover:shadow-hover"
              >
                <h3 className="font-heading text-xl font-semibold">
                  {item}
                </h3>
                <p className="mt-3 text-muted text-sm">
                  Crafted with attention to detail and a focus on long-lasting value.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-3xl font-semibold">
              Featured Products
            </h2>
            <button className="btn-outline">View All</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-white shadow-soft overflow-hidden
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
              >
               <img
                src="/assests/Images/Chilli.jpg"
                alt="Product"
                 className="w-full h-full object-cover"
/>

                <div className="p-4">
                  <h4 className="font-medium">Product Name</h4>
                  <p className="text-sm text-muted mt-1">$199</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand text-white">
        <div className="container text-center">
          <h2 className="font-heading text-4xl font-semibold">
            Elevate your lifestyle
          </h2>
          <p className="mt-4 text-white/80">
            Premium products designed to last.
          </p>
          <button className="mt-8 bg-white text-brand px-8 py-4 rounded-xl font-medium">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
