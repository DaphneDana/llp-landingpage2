"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Lightbulb, TrendingUp, Users, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function AboutSection() {
  const [activeSection, setActiveSection] = useState("leadership")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const navigationItems = [
    { id: "leadership", label: "代表挨拶", title: "Leadership Message" },
    { id: "overview", label: "会社概要", title: "Company Overview" },
    { id: "philosophy", label: "企業理念", title: "Company Philosophy" },
    { id: "history", label: "沿革", title: "History" },
    { id: "certifications", label: "標識", title: "Certifications" },
    { id: "contact", label: "アクセス・営業所情報", title: "Contact & Access" },
  ]

  useEffect(() => {
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

    return () => {
      observer.disconnect()
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

  return (
    <section className="bg-[#F8F9FA] py-20 relative">
      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Sticky Sidebar Navigation */}
        <div className="sticky top-32 right-0 float-right w-72 bg-white shadow-lg p-6 z-30 hidden lg:block ml-6 mb-8">
          <h3 className="text-xl font-bold text-[#058DD6] mb-6">会社概要</h3>
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
          {/* Leadership Message Section */}
          <div id="leadership" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#058DD6] mb-4">代表挨拶</h2>
              <div className="w-16 h-1 bg-[#058DD6]"></div>
            </div>
            <div className="bg-white shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-80 flex-shrink-0">
                  <div className="w-full h-64 bg-gray-200 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=256&width=320"
                      alt="代表取締役社長 田中太郎"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-bold text-[#1E3A8A]">代表取締役社長</h3>
                    <p className="text-[#058DD6] font-semibold">田中 太郎</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-base leading-relaxed text-[#374151] space-y-4">
                    <p>
                      この度は、AEGIS LLP株式会社のウェブサイトをご覧いただき、誠にありがとうございます。
                      当社は2010年の創業以来、日本の政府機関および自治体の皆様に対し、最先端のデジタル技術を活用したソリューションを提供してまいりました。
                    </p>
                    <p>
                      急速に変化するデジタル社会において、政府機関には従来以上の効率性と透明性が求められています。
                      私たちは、この重要な使命を担う皆様のパートナーとして、確実で信頼性の高いシステム構築とサポートを提供することをお約束いたします。
                    </p>
                    <p>
                      技術的な卓越性と継続的な改善への取り組みを通じて、日本の行政サービスの向上に貢献し、
                      国民の皆様により良いサービスを提供できるよう、全社一丸となって努力してまいります。
                    </p>
                    <p>今後とも変わらぬご支援とご指導を賜りますよう、心よりお願い申し上げます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Overview Section */}
          <div id="overview" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#058DD6] mb-4">会社概要</h2>
              <div className="w-16 h-1 bg-[#058DD6]"></div>
            </div>
            <div className="bg-white shadow-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    { header: "会社名", content: "AEGIS LLP株式会社" },
                    { header: "創業", content: "2010年（平成22年）" },
                    { header: "設立", content: "2010年4月15日" },
                    { header: "資本金", content: "50,000万円" },
                    { header: "代表者", content: "代表取締役社長 田中 太郎" },
                    { header: "所在地", content: "〒100-0001 東京都千代田区丸の内1-1-1" },
                    { header: "従業員数", content: "180名" },
                    {
                      header: "事業内容",
                      content: "自治体向けデジタル変革・システム統合・セキュリティソリューション",
                    },
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
          </div>

          {/* Company Philosophy Section */}
          <div id="philosophy" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#058DD6] mb-4">企業理念</h2>
              <div className="w-16 h-1 bg-[#058DD6]"></div>
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
                <div key={index} className="bg-[#EFF6FF] border border-[#E0F2FE] p-6 border-l-4 border-l-[#058DD6]">
                  <philosophy.icon className="w-10 h-10 text-[#058DD6] mb-3" />
                  <h3 className="text-lg font-semibold text-[#1E3A8A] mb-3">{philosophy.title}</h3>
                  <p className="text-[#374151] leading-relaxed text-sm">{philosophy.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* History Section */}
          <div id="history" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#058DD6] mb-4">沿革</h2>
              <div className="w-16 h-1 bg-[#058DD6]"></div>
            </div>
            <div className="bg-white shadow-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    { year: "2010年", event: "AEGIS LLP設立、デジタル変革事業開始" },
                    { year: "2012年", event: "初の自治体システム統合プロジェクト完了" },
                    { year: "2015年", event: "セキュリティ事業部設立、ISO27001認証取得" },
                    { year: "2017年", event: "関西支社開設、事業エリア拡大" },
                    { year: "2019年", event: "AI・データ分析サービス開始" },
                    { year: "2021年", event: "COVID-19対応支援、リモートワーク支援システム提供" },
                    { year: "2023年", event: "全国47都道府県での実績達成" },
                    { year: "2025年", event: "次世代政府システム開発プロジェクト開始" },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="bg-[#058DD6] text-white font-semibold p-4 w-28 border-b border-white/20">
                        {row.year}
                      </td>
                      <td className="p-4 text-[#374151] border-b border-gray-200">{row.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Certifications Section */}
          <div id="certifications" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#058DD6] mb-4">標識</h2>
              <div className="w-16 h-1 bg-[#058DD6]"></div>
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

          {/* Contact Section */}
          <div id="contact" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#058DD6] mb-4">お問い合わせ・アクセス</h2>
              <div className="w-16 h-1 bg-[#058DD6]"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-4">AEGIS LLP株式会社</h3>
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
                      <Mail className="w-4 h-4 text-[#058DD6] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A8A] text-sm">メールアドレス</p>
                        <p className="text-[#374151] text-sm">info@aegisllp.co.jp</p>
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
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-10 h-10 mx-auto mb-2" />
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">Google Maps Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
