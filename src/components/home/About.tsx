import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">لمحة عن المركز</h2>
          <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
            <p>
              نحن في مركز <span className="font-bold">MotorLab</span> نؤمن أن سلامتك تبدأ من سيارتك. لهذا السبب، نوفر لك تجربة فحص شاملة تعتمد على أحدث التقنيات العالمية وأكثر من 290 نقطة فحص تغطي أدق تفاصيل المركبة.
            </p>
            <p>
              فريقنا من المهندسين والفنيين المؤهلين موجود لخدمتك، ليقدّم لك تقريرًا واضحًا وشفافًا يساعدك على معرفة الحالة الحقيقية لسيارتك، ويمنحك راحة البال قبل أي قرار شراء أو صيانة.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-secondary">رؤيتنا</h3>
              <p className="text-gray-700">
                أن نكون الخيار الأول لكل من يبحث عن الثقة والشفافية في فحص المركبات، وأن نساهم في رفع مستوى السلامة على الطرق من خلال خدمات دقيقة ومعتمدة تواكب التطورات العالمية في هذا المجال.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-secondary">رسالتنا</h3>
              <p className="text-gray-700">
                تقديم خدمات فحص مركبات متميزة بأعلى معايير الجودة والدقة، مع التركيز على الشفافية والمصداقية في كل تقرير نقدمه، لنكون شريكاً موثوقاً في قرارات عملائنا المتعلقة بمركباتهم.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-secondary">قيمنا</h3>
              <p className="text-gray-700">
                الدقة، الشفافية، المصداقية، التميز، الاحترافية، والالتزام بأعلى معايير الجودة في كل ما نقدمه من خدمات لعملائنا.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-block bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              تعرف علينا أكثر
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
