"use client"
import Header from "./components/header"
import InteractiveFooter from "./components/interactive-footer"
import ServicesProjectsSection from "./components/services-projects-section"

export default function AegisHeaderHero() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Enhanced Japanese Hero Section */}
      <section className="relative mt-32 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Traditional Japanese Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23058DD6' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Geometric Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#058DD6] opacity-20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#058DD6] opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#4A90E2] opacity-30 transform rotate-12"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
          {/* Japanese Subtitle */}
          <div className="mb-8">
            <p className="text-lg text-[#6B7280] font-medium tracking-wide">デジタル変革で未来を創造する</p>
            <div className="w-24 h-0.5 bg-[#058DD6] mx-auto mt-4"></div>
          </div>

          {/* Main Typography with Japanese Aesthetic */}
          <div className="relative">
            {/* Background Text */}
            <h1
              className="text-8xl lg:text-9xl font-black text-[#058DD6] opacity-10 absolute inset-0 flex items-center justify-center"
              style={{ letterSpacing: "0.1em" }}
            >
              COMPANY
            </h1>

            {/* Foreground Content */}
            <div className="relative z-10 py-16">
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1E3A8A] mb-6 leading-tight">
                信頼と革新で
                <br />
                <span className="text-[#058DD6]">未来を築く</span>
              </h2>

              <p className="text-xl text-[#6B7280] mb-8 max-w-3xl mx-auto leading-relaxed">
                政府機関専門のデジタルソリューションパートナーとして、
                <br />
                確実性と先進性を両立したサービスを提供いたします。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/services"
                  className="bg-[#058DD6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0571B8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  サービス詳細
                </a>
                <a
                  href="/contact"
                  className="border-2 border-[#058DD6] text-[#058DD6] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#058DD6] hover:text-white transition-all duration-300"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-[#058DD6] rounded-full"></div>
              <div className="w-2 h-2 bg-[#4A90E2] rounded-full"></div>
              <div className="w-2 h-2 bg-[#058DD6] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <ServicesProjectsSection />
      <InteractiveFooter />
    </div>
  )
}