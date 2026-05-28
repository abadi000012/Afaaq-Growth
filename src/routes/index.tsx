import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/afaq-logo.png";
import whatsappIcon from "@/assets/whatsapp-icon-gold.png";
import {
  Code2,
  Megaphone,
  Bot,
  Search,
  Sparkles,
  ArrowLeft,
  Compass,
  Rocket,
  Crown,
  Eye,
  Zap,
  BadgeCheck,
  ShieldCheck,
  Phone,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "آفاق النمو | شريكك التقني للتحليق بمشروعك" },
      {
        name: "description",
        content:
          "ندمج تطوير الويب المتقدم، حملات الذكاء الاصطناعي، وأبحاث العملاء الدقيقة لمضاعفة مبيعاتك.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Code2,
    title: "تطوير المواقع والمنصات",
    desc: "نصمم ونطور مواقع ومنصات احترافية سريعة ومتوافقة مع جميع الأجهزة، بهدف تحسين تجربة العميل وزيادة فرص التواصل والمبيعات.",
  },
  {
    icon: Megaphone,
    title: "الحملات التسويقية والإعلانية",
    desc: "نطلق حملات إعلانية مدروسة تساعدك على الوصول للعملاء المناسبين، رفع الوعي بعلامتك التجارية، وتحقيق نتائج واضحة بأفضل تكلفة ممكنة.",
  },
  {
    icon: Bot,
    title: "وكلاء الذكاء الاصطناعي (AI Agents)",
    desc: "نوفر مساعدين ذكيين للرد على العملاء، متابعة الاستفسارات، تأهيل العملاء المحتملين، وحجز المواعيد بشكل تلقائي وعلى مدار الساعة.",
  },
  {
    icon: Search,
    title: "أبحاث العملاء والفرص البيعية",
    desc: "نجمع بيانات وفرص عملاء محتملين بدقة، لمساعدة فريق المبيعات لديك على الوصول لعملاء مهتمين فعلياً بخدماتك أو منتجاتك.",
  },
  {
    icon: Sparkles,
    title: "تهيئة الظهور في محركات الذكاء الاصطناعي (AEO)",
    desc: "نهيئ موقعك ومحتواك ليظهر ضمن نتائج وإجابات منصات الذكاء الاصطناعي مثل ChatGPT ومحركات البحث الحديثة.",
  },
];

const firstImpressionFactors = [
  { icon: Eye, title: "شكل وتصميم الموقع", desc: "هل الانطباع البصري الأول مريح وجذاب؟" },
  { icon: Zap, title: "سرعة التحميل", desc: "هل يظهر المحتوى فوراً أم يختبر صبر العميل؟" },
  { icon: BadgeCheck, title: "مدى الاحترافية", desc: "هل يعكس موقعك جودة وقيمة خدماتك؟" },
  {
    icon: ShieldCheck,
    title: "الثقة والمصداقية",
    desc: "هل يشعر العميل بالأمان الكافي للتعامل معك؟",
  },
];

const steps = [
  {
    icon: Compass,
    num: "01",
    title: "الرؤية والتخطيط",
    desc: "نحلل سوقك ونضع استراتيجية مخصصة لاصطياد أفضل الفرص.",
  },
  {
    icon: Rocket,
    num: "02",
    title: "البناء والتطوير",
    desc: "نطلق منصتك الرقمية ونهيئ وكلاء الذكاء الاصطناعي الخاصين بك.",
  },
  {
    icon: Crown,
    num: "03",
    title: "الهيمنة والمبيعات",
    desc: "نطلق الحملات، نجمع العملاء المحتملين، ونضاعف أرقامك.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="آفاق النمو" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg text-primary tracking-wide">AFAQ GROWTH</div>
              <div className="text-xs text-muted-foreground">شريكك في النمو</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition">
              الخدمات
            </a>
            <a href="#how" className="hover:text-primary transition">
              آلية العمل
            </a>
            <a href="#contact" className="hover:text-primary transition">
              تواصل معنا
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-primary-foreground"
            style={{ background: "var(--gradient-gold)" }}
          >
            ابدأ الآن
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
          <img src={logo} alt="" className="h-32 md:h-40 mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.08] mb-6">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              رؤية ثاقبة:
            </span>{" "}
            حلول ذكية ترفع مبيعاتك وتنمّي أعمالك
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            شريكك التقني للتحليق بمشروعك. نساعد الشركات ورواد الأعمال على بناء حضور رقمي احترافي من
            خلال تصميم مواقع ومحتوى تسويقي يجذب انتباه العميل من اللحظة الأولى، ويعزز الثقة بعلامتك
            التجارية.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            ابدأ رحلة النمو الآن
            <ArrowLeft className="w-5 h-5" />
          </a>
        </div>

        <div className="absolute bottom-8 inset-x-0 flex justify-center z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
        </div>
      </section>

      {/* FIRST IMPRESSION */}
      <section className="relative py-28 px-6 border-b border-border/40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at top, oklch(0.78 0.13 80 / 0.16), transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-7">
              هل تعلم أن أغلب العملاء يقررون البقاء أو مغادرة موقعك خلال ثوانٍ معدودة؟
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              في هذه اللحظات الحاسمة، يحدد الزائر إما البقاء واستكشاف خدماتك، أو المغادرة فوراً إلى
              موقع منافسيك.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-5 rounded-[2rem] border border-primary/10" />
            <div
              className="relative p-7 md:p-8 rounded-2xl bg-card/70 backdrop-blur border border-border/50"
              style={{ boxShadow: "0 24px 80px -48px oklch(0.78 0.13 80 / 0.55)" }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {firstImpressionFactors.map((factor, i) => (
                  <div
                    key={i}
                    className="group rounded-xl border border-border/50 bg-background/35 p-5 text-center transition-all duration-500 hover:border-primary/50"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/30"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.78 0.13 80 / 0.16), transparent)",
                      }}
                    >
                      <factor.icon className="w-5.5 h-5.5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl mb-2">{factor.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{factor.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-primary text-sm tracking-[0.3em] mb-4">OUR SERVICES</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              خدمات تقنية وتسويقية
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                تبني إمبراطوريتك
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at top right, oklch(0.78 0.13 80 / 0.08), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 border border-primary/30"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.78 0.13 80 / 0.15), transparent)",
                    }}
                  >
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
            <div
              className="relative p-8 rounded-2xl border border-primary/40 flex flex-col justify-center items-center text-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.78 0.13 80 / 0.12), oklch(0.17 0.035 260))",
              }}
            >
              <Crown className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-2xl mb-3">حلول مخصصة لإمبراطوريتك</h3>
              <p className="text-muted-foreground mb-6">
                دعنا نبني خطة نمو مفصّلة على مقاس أهدافك.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium"
              >
                احجز استشارة <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section
        id="how"
        className="relative py-32 px-6 border-y border-border/40"
        style={{ background: "linear-gradient(180deg, transparent, oklch(0.1 0.03 260))" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-primary text-sm tracking-[0.3em] mb-4">HOW WE WORK</div>
            <h2 className="font-display text-4xl md:text-6xl">
              كيف نصل بك إلى{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                القمة؟
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="p-8 rounded-2xl bg-card/60 backdrop-blur border border-border/50 h-full text-center">
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center border border-primary/40"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.78 0.13 80 / 0.2), transparent)",
                      }}
                    >
                      <s.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="font-display text-5xl text-primary/30">{s.num}</span>
                  </div>
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.78 0.13 80 / 0.3), transparent 60%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <img src={logo} alt="" className="h-24 mx-auto mb-8 opacity-90" />
          <h2 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
            جاهز تنقل مشروعك إلى{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              مستوى أعلى؟
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            في آفاق النمو، نساعدك على بناء حضور رقمي احترافي يعكس قوة علامتك التجارية، ويزيد من فرص
            جذب العملاء وتحقيق المبيعات عبر حلول تقنية وتسويقية مصممة للسوق السعودي.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <a
              href="tel:+966594196930"
              className="group rounded-2xl bg-card/70 backdrop-blur border border-border/50 p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 border border-primary/30"
                style={{
                  background: "linear-gradient(135deg, oklch(0.78 0.13 80 / 0.16), transparent)",
                }}
              >
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-3">تحدث مع خبير</h3>
              <p className="text-muted-foreground" dir="ltr">
                +966 59 419 6930
              </p>
            </a>

            <a
              href="https://wa.me/966594196930"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-card/70 backdrop-blur border border-border/50 p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
            >
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-5 border border-primary/30"
                style={{
                  background: "linear-gradient(135deg, oklch(0.78 0.13 80 / 0.16), transparent)",
                }}
              >
                <img src={whatsappIcon} alt="" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="font-display text-2xl mb-3">ابدأ محادثة فورية</h3>
              <p className="text-muted-foreground" dir="ltr">
                +966 59 419 6930
              </p>
            </a>

            <div className="rounded-2xl bg-card/70 backdrop-blur border border-border/50 p-7 text-center">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 border border-primary/30"
                style={{
                  background: "linear-gradient(135deg, oklch(0.78 0.13 80 / 0.16), transparent)",
                }}
              >
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-3">موقعنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                شارع الأمير عبدالله الفيصل، أبحر الشمالية، جدة 23817
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
            <span className="font-display text-primary">AFAQ GROWTH</span>
          </div>
          <div>© {new Date().getFullYear()} آفاق النمو. جميع الحقوق محفوظة.</div>
        </div>
      </footer>
    </div>
  );
}
