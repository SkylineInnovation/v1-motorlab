import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-secondary text-sm font-semibold tracking-wider uppercase mb-4">من نحن</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-cairo)' }}>لمحة عن المركز</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="text-white/80 leading-relaxed space-y-6 text-lg max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl">
              نحن في مركز <span className="font-bold text-secondary">MotorLab</span> نؤمن أن سلامتك تبدأ من سيارتك. لهذا السبب، نوفر لك تجربة فحص شاملة تعتمد على أحدث التقنيات العالمية وأكثر من 290 نقطة فحص تغطي أدق تفاصيل المركبة.
            </p>
            <p className="text-lg">
              فريقنا من المهندسين والفنيين المؤهلين موجود لخدمتك، ليقدّم لك تقريرًا واضحًا وشفافًا يساعدك على معرفة الحالة الحقيقية لسيارتك، ويمنحك راحة البال قبل أي قرار شراء أو صيانة.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden glass-dark border border-white/10 p-8 rounded-2xl hover:border-secondary/50 transition-all duration-300 hover-lift">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-cairo)' }}>رؤيتنا</h3>
                <p className="text-white/70 leading-relaxed">
                  أن نكون الخيار الأول لكل من يبحث عن الثقة والشفافية في فحص المركبات، وأن نساهم في رفع مستوى السلامة على الطرق من خلال خدمات دقيقة ومعتمدة تواكب التطورات العالمية في هذا المجال.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden glass-dark border border-white/10 p-8 rounded-2xl hover:border-secondary/50 transition-all duration-300 hover-lift">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-orange-600/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-secondary to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-cairo)' }}>رسالتنا</h3>
                <p className="text-white/70 leading-relaxed">
                  تقديم خدمات فحص مركبات متميزة بأعلى معايير الجودة والدقة، مع التركيز على الشفافية والمصداقية في كل تقرير نقدمه، لنكون شريكاً موثوقاً في قرارات عملائنا المتعلقة بمركباتهم.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden glass-dark border border-white/10 p-8 rounded-2xl hover:border-secondary/50 transition-all duration-300 hover-lift">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-cairo)' }}>قيمنا</h3>
                <p className="text-white/70 leading-relaxed">
                  الدقة، الشفافية، المصداقية، التميز، الاحترافية، والالتزام بأعلى معايير الجودة في كل ما نقدمه من خدمات لعملائنا.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover-lift"
            >
              تعرف علينا أكثر
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
