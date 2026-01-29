import Carousel from "../components/Carousel";
import ImageContainer from "../components/ImageContainer";

function Home() {
  return (
    <div className="bg-base-200">
      <section className="max-w-[1440px] mx-auto px-5 pt-10 pb-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
          <div className="space-y-6">
            <div className="badge badge-primary badge-outline">
              Yangi mavsum koleksiyasi
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Shu Market bilan xarid qilishni yanada oson qiling
            </h1>
            <p className="text-base-content/70 text-lg">
              1000+ original mahsulotlar, tez yetkazib berish va xavfsiz to‘lov
              — barchasi bir joyda. Eng trend mahsulotlarni biz bilan toping.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-primary">Xaridni boshlash</button>
              <button className="btn btn-outline btn-base-content">
                Katalogni ko‘rish
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "24/7 qo‘llab-quvvatlash", value: "Onlayn" },
                { title: "Yetkazib berish", value: "2 soat ichida" },
                { title: "Qaytarish", value: "14 kun" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-base-100 p-4 shadow-sm"
                >
                  <p className="text-sm text-base-content/60">{item.title}</p>
                  <p className="text-lg font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-secondary/30 blur-2xl" />
            <Carousel />
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-5 pb-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Premium sifat",
              desc: "Har bir mahsulot sifat nazoratidan o‘tgan.",
            },
            {
              title: "Qulay to‘lov",
              desc: "Karta, naqd yoki bo‘lib-bo‘lib to‘lash imkoniyati.",
            },
            {
              title: "Tez yetkazish",
              desc: "Shahar bo‘ylab eng tez logistika tarmog‘i.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-base-content/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ImageContainer />
    </div>
  );
}

export default Home;
