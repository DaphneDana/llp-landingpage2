"use client"

import { useState, useEffect, useRef } from "react"
import {
  Shield,
  Lightbulb,
  TrendingUp,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Building2,
  ChevronRight,
  ArrowUp,
} from "lucide-react"
import Header from "../components/header"
import InteractiveFooter from "../components/interactive-footer"

export default function AboutUsPage() {
  const [activeSection, setActiveSection] = useState("philosophy")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const navigationItems = [
    { id: "philosophy", label: "企業理念", title: "Company Philosophy" },
    { id: "history", label: "沿革", title: "History" },
    { id: "logos", label: "標識", title: "Logos & Symbols" },
    { id: "profile", label: "会社概要", title: "Company Profile" },
  ]

  const companyLogos = [
    {
      name: "メインロゴ",
      description: "AEGIS LLPの基本ロゴマーク。信頼性と革新性を表現したデザイン。",
      usage: "公式文書、ウェブサイト、名刺等の基本用途",
      image: "/placeholder.svg?height=120&width=300&text=AEGIS+LLP+Main+Logo",
      colors: ["#058DD6", "#1E3A8A", "#FFFFFF"],
    },
    {
      name: "シンボルマーク",
      description: "盾をモチーフにしたシンボル。セキュリティと保護を象徴。",
      usage: "アプリアイコン、ファビコン、小サイズでの使用",
      image: "/placeholder.svg?height=120&width=120&text=Shield+Symbol",
      colors: ["#058DD6", "#4A90E2"],
    },
    {
      name: "横型ロゴ",
      description: "横長レイアウト用のロゴバリエーション。",
      usage: "ヘッダー、フッター、横長スペースでの使用",
      image: "/placeholder.svg?height=80&width=320&text=AEGIS+LLP+Horizontal",
      colors: ["#058DD6", "#1E3A8A", "#6B7280"],
    },
    {
      name: "モノクロ版",
      description: "単色印刷や特殊用途向けのモノクロバージョン。",
      usage: "新聞広告、FAX、単色印刷物",
      image: "/placeholder.svg?height=120&width=300&text=AEGIS+LLP+Mono",
      colors: ["#000000", "#FFFFFF", "#6B7280"],
    },
    {
      name: "政府機関向け",
      description: "政府機関との連携を表現する特別バージョン。",
      usage: "政府関連プロジェクト、公式提案書",
      image: "/placeholder.svg?height=120&width=300&text=AEGIS+Government",
      colors: ["#1E3A8A", "#DC2626", "#FFFFFF"],
    },
    {
      name: "記念ロゴ",
      description: "創業15周年を記念した限定ロゴ。",
      usage: "記念イベント、特別キャンペーン",
      image: "/placeholder.svg?height=120&width=300&text=15th+Anniversary",
      colors: ["#F59E0B", "#058DD6", "#1E3A8A"],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        sectionRefs.current[item.id] = element
        observer.observe(element)
      }
    })

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      const headerOffset = 120
      const elementPosition = element.offsetTop - headerOffset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-600 text-white py-32 mt-32 overflow-hidden">
        {/* Background geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 border-4 border-white/20 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
                <Building2 className="w-12 h-12 text-white/40" />
              </div>
            </div>
            {/* Connecting lines */}
            <div className="absolute top-1/2 left-0 w-32 h-0.5 bg-white/20 transform -translate-x-full -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-32 h-0.5 bg-white/20 transform translate-x-full -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-0.5 h-32 bg-white/20 transform -translate-x-1/2 -translate-y-full"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-32 bg-white/20 transform -translate-x-1/2 translate-y-full"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-left max-w-3xl">
            {/* Section Tag */}
            <div className="inline-block bg-[#058DD6] text-white px-4 py-2 text-sm font-bold mb-8 uppercase tracking-wider">
              ABOUT US
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              信頼と革新で
              <span className="block text-[#058DD6]">未来を創造</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed opacity-90">
              政府機関・自治体のデジタル変革を支援する
              <br />
              包括的なITソリューションサービス
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('philosophy')}
                className="bg-[#058DD6] hover:bg-[#0571B8] text-white px-8 py-4 font-bold transition-all duration-300 flex items-center justify-center group"
              >
                企業理念を見る
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('profile')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-600 px-8 py-4 font-bold transition-all duration-300 flex items-center justify-center"
              >
                会社概要を見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#F8F9FA] py-20 relative">
        <div className="max-w-6xl mx-auto px-8 relative">
          {/* Sticky Sidebar Navigation */}
          <div className="sticky top-32 right-0 float-right w-72 bg-white shadow-lg p-6 z-30 hidden lg:block ml-6 mb-8">
            <h3 className="text-xl font-bold text-[#058DD6] mb-6">目次</h3>
            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-0 text-sm font-medium transition-all duration-300 border-l-4 ${
                    activeSection === item.id
                      ? "text-[#058DD6] font-semibold border-[#058DD6] bg-[#EFF6FF] pl-4"
                      : "text-[#6B7280] border-transparent hover:text-[#1E3A8A] hover:pl-2"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:pr-80">
            {/* Company Philosophy Section */}
            <div id="philosophy" className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#058DD6] mb-4">企業理念</h2>
                <div className="w-16 h-1 bg-[#058DD6]"></div>
                <p className="text-lg text-[#6B7280] mt-4">私たちの価値観と行動指針</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "信頼性",
                    description:
                      "政府機関からの信頼を第一に、一貫した品質とサービスの提供を通じて、長期的なパートナーシップを構築します。",
                  },
                  {
                    icon: Lightbulb,
                    title: "技術革新",
                    description: "最新のデジタル技術を活用し、革新的なソリューションで行政のデジタル変革を推進します。",
                  },
                  {
                    icon: TrendingUp,
                    title: "継続的改善",
                    description: "常に改善を追求し、お客様のニーズに応える最適化されたサービスを提供し続けます。",
                  },
                  {
                    icon: Users,
                    title: "社会貢献",
                    description: "効率的な行政サービスの実現を通じて、国民の皆様の生活向上に貢献します。",
                  },
                ].map((philosophy, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg p-8 border-l-4 border-l-[#058DD6] hover:shadow-xl transition-all duration-300"
                  >
                    <philosophy.icon className="w-12 h-12 text-[#058DD6] mb-4" />
                    <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">{philosophy.title}</h3>
                    <p className="text-[#374151] leading-relaxed">{philosophy.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* History Section */}
            <div id="history" className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#058DD6] mb-4">沿革</h2>
                <div className="w-16 h-1 bg-[#058DD6]"></div>
                <p className="text-lg text-[#6B7280] mt-4">創業から現在まで、15年間の歩み</p>
              </div>

              <div className="bg-white shadow-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {[
                      { year: "2010年", event: "AEGIS LLP設立、デジタル変革事業開始", highlight: true },
                      { year: "2012年", event: "初の自治体システム統合プロジェクト完了" },
                      { year: "2015年", event: "セキュリティ事業部設立、ISO27001認証取得", highlight: true },
                      { year: "2017年", event: "関西支社開設、事業エリア拡大" },
                      { year: "2019年", event: "AI・データ分析サービス開始" },
                      { year: "2021年", event: "COVID-19対応支援、リモートワーク支援システム提供", highlight: true },
                      { year: "2023年", event: "全国47都道府県での実績達成" },
                      { year: "2025年", event: "次世代政府システム開発プロジェクト開始", highlight: true },
                    ].map((row, index) => (
                      <tr key={index} className={row.highlight ? "bg-[#EFF6FF]" : ""}>
                        <td className="bg-[#058DD6] text-white font-semibold p-4 w-28 border-b border-white/20">
                          {row.year}
                        </td>
                        <td className="p-4 text-[#374151] border-b border-gray-200 font-medium">
                          {row.event}
                          {row.highlight && <Award className="w-4 h-4 text-[#F59E0B] inline ml-2" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Certifications Section */}
            <div id="logos" className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#058DD6] mb-4">標識</h2>
                <div className="w-16 h-1 bg-[#058DD6]"></div>
                <p className="text-lg text-[#6B7280] mt-4">政府認定および国際標準認証の取得状況</p>
              </div>

              <div className="space-y-6">
                {/* Government Security Certification */}
                <div className="bg-white shadow-lg overflow-hidden">
                  <div className="bg-[#058DD6] text-white p-3 text-center">
                    <h3 className="text-base font-bold">政府セキュリティ認定事業者証</h3>
                  </div>
                  <table className="w-full">
                    <tbody>
                      {[
                        { header: "登録番号", content: "内閣官房 第GSRA2025001号" },
                        { header: "登録年月日", content: "2025年3月15日" },
                        { header: "氏名又は名称", content: "AEGIS LLP株式会社" },
                        { header: "代表者の氏名", content: "田中 太郎" },
                      ].map((row, index) => (
                        <tr key={index}>
                          <td className="bg-gray-50 font-semibold p-3 w-40 border-b border-gray-200">{row.header}</td>
                          <td className="p-3 text-[#374151] border-b border-gray-200">{row.content}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ISO Certifications */}
                <div className="bg-white shadow-lg overflow-hidden">
                  <div className="bg-[#058DD6] text-white p-3 text-center">
                    <h3 className="text-base font-bold">ISO認証取得状況</h3>
                  </div>
                  <table className="w-full">
                    <tbody>
                      {[
                        { header: "ISO 27001", content: "情報セキュリティマネジメントシステム" },
                        { header: "ISO 9001", content: "品質マネジメントシステム" },
                        { header: "ISO 20000", content: "ITサービスマネジメントシステム" },
                      ].map((row, index) => (
                        <tr key={index}>
                          <td className="bg-gray-50 font-semibold p-3 w-40 border-b border-gray-200">{row.header}</td>
                          <td className="p-3 text-[#374151] border-b border-gray-200">{row.content}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Company Profile Section */}
            <div id="profile" className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#058DD6] mb-4">会社概要</h2>
                <div className="w-16 h-1 bg-[#058DD6]"></div>
                <p className="text-lg text-[#6B7280] mt-4">AEGIS LLP株式会社の基本情報</p>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-[#058DD6] mb-2">15年</div>
                  <div className="text-sm text-[#6B7280]">創業からの実績</div>
                </div>
                <div className="bg-white p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-[#058DD6] mb-2">180名</div>
                  <div className="text-sm text-[#6B7280]">従業員数</div>
                </div>
                <div className="bg-white p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-[#058DD6] mb-2">47</div>
                  <div className="text-sm text-[#6B7280]">都道府県実績</div>
                </div>
                <div className="bg-white p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-[#058DD6] mb-2">500+</div>
                  <div className="text-sm text-[#6B7280]">プロジェクト完了</div>
                </div>
              </div>

              {/* Company Information Table */}
              <div className="bg-white shadow-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {[
                      { header: "会社名", content: "AEGIS LLP株式会社" },
                      { header: "英文社名", content: "AEGIS LLP Corporation" },
                      { header: "創業", content: "2010年（平成22年）" },
                      { header: "設立", content: "2010年4月15日" },
                      { header: "資本金", content: "50,000万円" },
                      { header: "代表者", content: "代表取締役社長 田中 太郎" },
                      { header: "本社所在地", content: "〒100-0001 東京都千代田区丸の内1-1-1" },
                      { header: "関西支社", content: "〒530-0001 大阪府大阪市北区梅田1-1-1" },
                      { header: "従業員数", content: "180名（2025年1月現在）" },
                      {
                        header: "事業内容",
                        content:
                          "政府機関・自治体向けデジタル変革支援、システム統合、セキュリティソリューション、ITコンサルティング",
                      },
                      { header: "主要取引先", content: "中央省庁、都道府県、市区町村、政府関連機関" },
                      { header: "認証・資格", content: "ISO27001、ISO9001、ISO20000、政府セキュリティ認定事業者" },
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="bg-[#058DD6] text-white font-semibold p-4 w-40 border-b border-white/20">
                          {row.header}
                        </td>
                        <td className="p-4 text-[#374151] border-b border-gray-200">{row.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Contact Information */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white shadow-lg p-6">
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-4 flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    本社
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-[#058DD6] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A8A] text-sm">所在地</p>
                        <p className="text-[#374151] text-sm">〒100-0001 東京都千代田区丸の内1-1-1</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-4 h-4 text-[#058DD6] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A8A] text-sm">電話番号</p>
                        <p className="text-[#374151] text-sm">TEL.03-1234-5678</p>
                        <p className="text-[#374151] text-sm">FAX.03-1234-5679</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 text-[#058DD6] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A8A] text-sm">営業時間</p>
                        <p className="text-[#374151] text-sm">平日 8:30〜17:30</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-lg p-6">
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-4 flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    関西支社
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-[#058DD6] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A8A] text-sm">所在地</p>
                        <p className="text-[#374151] text-sm">〒530-0001 大阪府大阪市北区梅田1-1-1</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-4 h-4 text-[#058DD6] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A8A] text-sm">電話番号</p>
                        <p className="text-[#374151] text-sm">TEL.06-1234-5678</p>
                        <p className="text-[#374151] text-sm">FAX.06-1234-5679</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-4 h-4 text-[#058DD6] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A8A] text-sm">メールアドレス</p>
                        <p className="text-[#374151] text-sm">kansai@aegisllp.co.jp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <InteractiveFooter />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#058DD6] text-white p-3 shadow-lg hover:bg-[#0571B8] transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}