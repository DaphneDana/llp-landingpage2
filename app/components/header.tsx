"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Mail, Settings, Building, Users, User, Shield, Briefcase } from "lucide-react"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

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
      // Clear any existing timeout
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
        setDropdownTimeout(null)
      }
      setActiveDropdown(dropdown)
    }
  }

  const handleDropdownLeave = () => {
    if (!isMobile) {
      // Set a longer delay before closing dropdown
      const timeout = setTimeout(() => {
        setActiveDropdown(null)
      }, 800) // Increased to 800ms
      setDropdownTimeout(timeout)
    }
  }

  const handleDropdownContentEnter = () => {
    // Clear timeout when entering dropdown content
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
  }

  const handleDropdownContentLeave = () => {
    if (!isMobile) {
      // Set delay when leaving dropdown content
      const timeout = setTimeout(() => {
        setActiveDropdown(null)
      }, 500) // 500ms delay when leaving content
      setDropdownTimeout(timeout)
    }
  }

  return (
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
              <a href="/about" className="text-[#058DD6] hover:text-[#4A90E2] transition-colors font-medium">
                ▶ 会社概要
              </a>
              <a href="/careers" className="text-[#058DD6] hover:text-[#4A90E2] transition-colors font-medium">
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
            <a href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#058DD6] to-[#4A90E2] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
              </div>
              <h1 className="text-2xl font-bold text-[#1E3A8A]">AEGIS LLP</h1>
            </a>

            {/* Center Navigation */}
            <div className="flex items-center space-x-4">
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("about")}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="bg-[#058DD6] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#0571B8] transition-all duration-300 flex items-center space-x-2">
                  <span>会社案内</span>
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

              <a
                href="/contact"
                className="bg-[#FF8C00] text-white px-6 py-4 font-bold text-sm hover:bg-[#E6750E] transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>お問い合わせフォーム</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dropdown */}
      {activeDropdown === "about" && (
        <div
          className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-4 border-[#058DD6] z-40"
          onMouseEnter={handleDropdownContentEnter}
          onMouseLeave={handleDropdownContentLeave}
        >
          {/* Add padding to make it easier to hover */}
          <div className="pt-2">
            <div className="max-w-6xl mx-auto p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <a
                  href="/about"
                  className="group bg-white border border-gray-200 rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <Building className="w-8 h-8 text-[#058DD6] mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-1">会社概要</h3>
                  <p className="text-xs text-[#6B7280] leading-tight">企業理念・沿革</p>
                </a>

                <a
                  href="/services"
                  className="group bg-white border border-gray-200 rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <Settings className="w-8 h-8 text-[#058DD6] mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-1">サービス</h3>
                  <p className="text-xs text-[#6B7280] leading-tight">システム開発</p>
                </a>

                <a
                  href="/projects"
                  className="group bg-white border border-gray-200 rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <Briefcase className="w-8 h-8 text-[#058DD6] mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-1">実績</h3>
                  <p className="text-xs text-[#6B7280] leading-tight">プロジェクト事例</p>
                </a>

                <a
                  href="/technology"
                  className="group bg-white border border-gray-200 rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <Shield className="w-8 h-8 text-[#058DD6] mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-1">技術</h3>
                  <p className="text-xs text-[#6B7280] leading-tight">技術スタック</p>
                </a>

                <a
                  href="/contact"
                  className="group bg-white border border-gray-200 rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <Mail className="w-8 h-8 text-[#058DD6] mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-1">お問い合わせ</h3>
                  <p className="text-xs text-[#6B7280] leading-tight">ご相談・お見積り</p>
                </a>

                <a
                  href="/careers"
                  className="group bg-white border border-gray-200 rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <Users className="w-8 h-8 text-[#058DD6] mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-1">採用情報</h3>
                  <p className="text-xs text-[#6B7280] leading-tight">求人・エントリー</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Corporate Services Dropdown */}
      {activeDropdown === "corporate" && (
        <div
          className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-4 border-[#058DD6] z-40"
          onMouseEnter={handleDropdownContentEnter}
          onMouseLeave={handleDropdownContentLeave}
        >
          {/* Add padding to make it easier to hover */}
          <div className="pt-2">
            <div className="max-w-5xl mx-auto p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center">
                  <Briefcase className="w-8 h-8 text-[#058DD6] mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-1">企業向けソリューション</h3>
                  <p className="text-xs text-[#6B7280] leading-tight mb-2">民間企業向けITサービス</p>
                  <a href="#" className="text-[#058DD6] font-medium text-xs hover:underline">
                    詳細へ →
                  </a>
                </div>

                <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center">
                  <Settings className="w-8 h-8 text-[#058DD6] mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-1">クラウドサービス</h3>
                  <p className="text-xs text-[#6B7280] leading-tight mb-2">AWS・Azure導入支援</p>
                  <a href="#" className="text-[#058DD6] font-medium text-xs hover:underline">
                    詳細へ →
                  </a>
                </div>

                <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center">
                  <User className="w-8 h-8 text-[#058DD6] mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-[#1E3A8A] mb-1">人材派遣</h3>
                  <p className="text-xs text-[#6B7280] leading-tight mb-2">IT専門人材サービス</p>
                  <a href="#" className="text-[#058DD6] font-medium text-xs hover:underline">
                    詳細へ →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
