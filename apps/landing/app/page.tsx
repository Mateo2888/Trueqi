const categories = [
  { emoji: "📚", name: "Libros" },
  { emoji: "🎓", name: "Tutorías" },
  { emoji: "💻", name: "Tecnología" },
  { emoji: "🛠️", name: "Servicios" },
];

const steps = [
  {
    number: "1",
    title: "Crea tu cuenta gratis",
    description:
      "Regístrate con tu correo universitario en menos de un minuto. Sin tarjeta de crédito.",
  },
  {
    number: "2",
    title: "Publica o explora",
    description:
      "Sube tus productos o servicios, o busca lo que necesitas entre miles de publicaciones.",
  },
  {
    number: "3",
    title: "Conecta y negocia",
    description:
      "Habla directamente con otros estudiantes y cierra tratos de forma segura.",
  },
];

const stats = [
  { value: "0%", label: "Comisión por venta" },
  { value: "100%", label: "Pagos seguros" },
  { value: "24/7", label: "Soporte disponible" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold" style={{ color: "#7c3aed" }}>
            Trueqi
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#como-funciona" className="hover:text-[#7c3aed] transition-colors">
              Cómo funciona
            </a>
            <a href="#categorias" className="hover:text-[#7c3aed] transition-colors">
              Categorías
            </a>
          </div>
          <a
            href="#"
            className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#7c3aed" }}
          >
            Publicar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <span
          className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
          style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}
        >
          Marketplace estudiantil · Colombia
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl mx-auto">
          El marketplace hecho para estudiantes colombianos
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-10">
          Compra, vende e intercambia libros, tutorías, tecnología y servicios
          con otros estudiantes. Sin comisiones. 100% seguro.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#categorias"
            className="rounded-full px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 w-full sm:w-auto text-center"
            style={{ backgroundColor: "#7c3aed" }}
          >
            Explorar productos
          </a>
          <a
            href="#"
            className="rounded-full px-8 py-3 text-base font-semibold transition-colors hover:bg-[#ede9fe] w-full sm:w-auto text-center border-2"
            style={{ borderColor: "#7c3aed", color: "#7c3aed" }}
          >
            Publicar gratis
          </a>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-5xl">{cat.emoji}</span>
              <span className="text-base font-semibold text-gray-800">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Cómo funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-white p-8 shadow-md flex flex-col gap-4"
              >
                <span
                  className="text-5xl font-extrabold"
                  style={{ color: "#7c3aed" }}
                >
                  {step.number}
                </span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: "#ede9fe" }}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span
                  className="text-5xl font-extrabold"
                  style={{ color: "#7c3aed" }}
                >
                  {stat.value}
                </span>
                <span className="text-gray-700 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center" style={{ backgroundColor: "#7c3aed" }}>
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Únete a miles de estudiantes colombianos que ya compran, venden e
            intercambian en Trueqi.
          </p>
          <a
            href="#"
            className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ color: "#7c3aed" }}
          >
            Crear cuenta gratis
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold" style={{ color: "#7c3aed" }}>
            Trueqi
          </span>
          <p className="text-sm text-gray-400">
            © 2024 Trueqi. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#7c3aed] transition-colors">
              Términos de uso
            </a>
            <a href="#" className="hover:text-[#7c3aed] transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
