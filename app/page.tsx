"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Mail, Settings, Building, Users, User, Shield, Briefcase } from "lucide-react"
import AboutSection from "./components/about-section"
import InteractiveFooter from "./components/interactive-footer"

export default function AegisHeaderHero() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleDropdownEnter = (dropdown: string) => {
    if (!isMobile) {
      setTimeout(() => setActiveDropdown(dropdown), 300)
    }
  }

  const handleDropdownLeave = () => {
    if (!isMobile) {
      setTimeout(() => setActiveDropdown(null), 200)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Main Header */}
        <div className="bg-white px-4 py-4">
          <div className="max-w-7xl mx-auto">
            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              {/* Left: Company tagline */}
              <div className="flex-1">
                <p className="text-sm text-gray-700 font-medium">
                  東京都で創業15年、政府機関専門のデジタルソリューション会社
                </p>
              </div>

              {/* Right: Links and Login */}
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-[#058DD6] hover:text-[#4A90E2] transition-colors font-medium">
                  ▶ 会社概要
                </a>
                <a href="#" className="text-[#058DD6] hover:text-[#4A90E2] transition-colors font-medium">
                  ▶ 採用情報
                </a>
                <button className="bg-[#E8F4FD] text-[#058DD6] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D1E9F6] transition-colors flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>お客様WEBサービスログイン</span>
                </button>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#058DD6] to-[#4A90E2] rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
                </div>
                <h1 className="text-2xl font-bold text-[#1E3A8A]">AEGIS LLP</h1>
              </div>

              {/* Center Navigation */}
              <div className="flex items-center space-x-4">
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter("government")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="bg-[#058DD6] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#0571B8] transition-all duration-300 flex items-center space-x-2">
                    <span>政府機関のお客様</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter("corporate")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="bg-[#058DD6] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#0571B8] transition-all duration-300 flex items-center space-x-2">
                    <span>法人のお客様</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Contact Info and Form Button */}
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-bold text-gray-800">TEL.</span>
                    <span className="text-2xl font-bold text-[#058DD6]">03-1234-5678</span>
                  </div>
                  <p className="text-xs text-gray-600">【営業時間】8:30～17:30</p>
                  <p className="text-xs text-gray-500">※ご利用料金の明細、ポイントのご確認</p>
                </div>

                <button className="bg-[#FF8C00] text-white px-6 py-4 font-bold text-sm hover:bg-[#E6750E] transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl">
                  <Mail className="w-5 h-5" />
                  <span>お問い合わせフォーム</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Government Services Dropdown */}
        {activeDropdown === "government" && (
          <div
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-4 border-[#058DD6] z-40"
            onMouseEnter={() => setActiveDropdown("government")}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="max-w-6xl mx-auto p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <Settings className="w-12 h-12 text-[#058DD6] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">デジタル変革</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">政府機関向けDXソリューション</p>
                    <a href="#" className="text-[#058DD6] font-medium text-sm hover:underline">
                      詳細へ →
                    </a>
                  </div>
                </div>

                <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <Shield className="w-12 h-12 text-[#058DD6] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">セキュリティ</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">サイバーセキュリティ対策</p>
                    <a href="#" className="text-[#058DD6] font-medium text-sm hover:underline">
                      詳細へ →
                    </a>
                  </div>
                </div>

                <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <Building className="w-12 h-12 text-[#058DD6] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">システム構築</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">基幹システム開発・運用</p>
                    <a href="#" className="text-[#058DD6] font-medium text-sm hover:underline">
                      詳細へ →
                    </a>
                  </div>
                </div>

                <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <Users className="w-12 h-12 text-[#058DD6] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">コンサルティング</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">IT戦略・業務改善支援</p>
                    <a href="#" className="text-[#058DD6] font-medium text-sm hover:underline">
                      詳細へ →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Corporate Services Dropdown */}
        {activeDropdown === "corporate" && (
          <div
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-4 border-[#058DD6] z-40"
            onMouseEnter={() => setActiveDropdown("corporate")}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="max-w-5xl mx-auto p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <Briefcase className="w-12 h-12 text-[#058DD6] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">企業向けソリューション</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">民間企業向けITサービス</p>
                    <a href="#" className="text-[#058DD6] font-medium text-sm hover:underline">
                      詳細へ →
                    </a>
                  </div>
                </div>

                <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <Settings className="w-12 h-12 text-[#058DD6] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">クラウドサービス</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">AWS・Azure導入支援</p>
                    <a href="#" className="text-[#058DD6] font-medium text-sm hover:underline">
                      詳細へ →
                    </a>
                  </div>
                </div>

                <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <User className="w-12 h-12 text-[#058DD6] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">人材派遣</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">IT専門人材サービス</p>
                    <a href="#" className="text-[#058DD6] font-medium text-sm hover:underline">
                      詳細へ →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Japanese Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
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
                <button className="bg-[#058DD6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0571B8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  サービス詳細
                </button>
                <button className="border-2 border-[#058DD6] text-[#058DD6] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#058DD6] hover:text-white transition-all duration-300">
                  お問い合わせ
                </button>
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

      <AboutSection />
      <InteractiveFooter />
    </div>
  )
}
