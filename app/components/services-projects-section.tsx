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
  Server,
  Zap,
  CheckCircle,
  Calendar,
  Award,
  Target,
  ArrowRight,
  Building2,
  Quote,
  Star,
} from "lucide-react"

export default function ServicesProjectsSection() {
  const [activeSection, setActiveSection] = useState("leadership")
  const [activeServiceTab, setActiveServiceTab] = useState("digital-transformation")
  const [activeProjectFilter, setActiveProjectFilter] = useState("all")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const navigationItems = [
    { id: "leadership", label: "代表挨拶", title: "Leadership Message" },
    { id: "overview", label: "会社概要", title: "Company Overview" },
    { id: "philosophy", label: "企業理念", title: "Company Philosophy" },
    { id: "history", label: "沿革", title: "History" },
    { id: "services", label: "サービス", title: "Services" },
    { id: "projects", label: "実績・プロジェクト", title: "Projects & Results" },
    { id: "testimonials", label: "お客様の声", title: "Testimonials" },
    { id: "contact", label: "アクセス・営業所情報", title: "Contact & Access" },
  ]

  const serviceCategories = [
    {
      id: "digital-transformation",
      title: "デジタル変革（DX）",
      subtitle: "Digital Transformation",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "行政システム現代化",
          description: "レガシーシステムから最新クラウド基盤への移行",
          features: ["マイクロサービス化", "API統合", "データ移行", "段階的移行計画"],
        },
        {
          name: "ペーパーレス化推進",
          description: "文書管理システムとワークフロー自動化",
          features: ["電子決裁システム", "文書検索AI", "承認フロー最適化", "セキュリティ強化"],
        },
        {
          name: "市民サービスポータル",
          description: "オンライン申請・手続きシステム構築",
          features: ["マイナンバー連携", "モバイル対応", "多言語対応", "アクセシビリティ"],
        },
      ],
    },
    {
      id: "security",
      title: "サイバーセキュリティ",
      subtitle: "Cybersecurity Solutions",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      services: [
        {
          name: "政府標準セキュリティ対策",
          description: "NISC準拠のセキュリティ基盤構築",
          features: ["多層防御システム", "侵入検知・防止", "ログ監視・分析", "インシデント対応"],
        },
        {
          name: "ゼロトラスト実装",
          description: "境界防御に依存しない新世代セキュリティ",
          features: ["ID・アクセス管理", "デバイス認証", "ネットワーク分離", "継続的監視"],
        },
        {
          name: "セキュリティ監査・診断",
          description: "脆弱性評価と改善提案",
          features: ["ペネトレーションテスト", "脆弱性スキャン", "セキュリティ教育", "BCP策定"],
        },
      ],
    },
    {
      id: "infrastructure",
      title: "システム基盤構築",
      subtitle: "Infrastructure Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "クラウドインフラ設計",
          description: "AWS・Azure・GCPを活用した最適基盤",
          features: ["高可用性設計", "自動スケーリング", "災害復旧対応", "コスト最適化"],
        },
        {
          name: "データセンター統合",
          description: "複数拠点システムの統合・最適化",
          features: ["仮想化基盤", "ストレージ統合", "ネットワーク設計", "運用自動化"],
        },
        {
          name: "基幹システム開発",
          description: "業務特化型システムの設計・開発",
          features: ["要件定義支援", "アジャイル開発", "品質保証", "保守・運用"],
        },
      ],
    },
    {
      id: "consulting",
      title: "ITコンサルティング",
      subtitle: "IT Consulting & Strategy",
      icon: Lightbulb,
      color: "from-purple-500 to-indigo-500",
      services: [
        {
          name: "IT戦略策定",
          description: "中長期IT計画の立案・実行支援",
          features: ["現状分析・評価", "ロードマップ作成", "予算計画", "効果測定"],
        },
        {
          name: "業務プロセス改善",
          description: "業務効率化とデジタル化推進",
          features: ["業務分析・可視化", "プロセス再設計", "RPA導入", "効果検証"],
        },
        {
          name: "技術導入支援",
          description: "新技術の評価・導入・定着支援",
          features: ["技術調査・検証", "導入計画策定", "研修・教育", "運用定着化"],
        },
      ],
    },
  ]

  const projectCategories = [
    { id: "all", label: "すべて", count: 47 },
    { id: "government", label: "中央省庁", count: 15 },
    { id: "prefecture", label: "都道府県", count: 18 },
    { id: "municipality", label: "市区町村", count: 14 },
  ]

  const featuredProjects = [
    {
      id: 1,
      category: "government",
      title: "内閣府統合情報システム",
      client: "内閣府",
      period: "2023年4月 - 2024年3月",
      budget: "15億円",
      description: "複数省庁間のデータ連携を実現する統合プラットフォームの構築",
      technologies: ["AWS", "Kubernetes", "React", "Node.js", "PostgreSQL"],
      achievements: ["処理速度70%向上", "運用コスト40%削減", "セキュリティレベル向上", "ユーザビリティ大幅改善"],
      image: "/placeholder.svg?height=300&width=400",
      status: "completed",
    },
    {
      id: 2,
      category: "prefecture",
      title: "東京都デジタル窓口システム",
      client: "東京都",
      period: "2022年10月 - 2023年9月",
      budget: "8億円",
      description: "都民向けオンライン申請・手続きシステムの全面刷新",
      technologies: ["Azure", "React Native", "Python", "MongoDB", "AI/ML"],
      achievements: ["申請処理時間80%短縮", "利用者満足度95%達成", "年間2000万件処理", "24時間365日稼働"],
      image: "/placeholder.svg?height=300&width=400",
      status: "completed",
    },
    {
      id: 3,
      category: "municipality",
      title: "横浜市スマートシティ基盤",
      client: "横浜市",
      period: "2024年1月 - 進行中",
      budget: "12億円",
      description: "IoT・AI活用による次世代都市管理システム",
      technologies: ["GCP", "IoT", "AI/ML", "Blockchain", "5G"],
      achievements: ["センサー1万台設置", "リアルタイム監視実現", "予測分析精度90%", "エネルギー効率20%向上"],
      image: "/placeholder.svg?height=300&width=400",
      status: "ongoing",
    },
    {
      id: 4,
      category: "government",
      title: "厚生労働省医療情報基盤",
      client: "厚生労働省",
      period: "2023年6月 - 2024年5月",
      budget: "20億円",
      description: "全国医療機関データ連携システムの構築",
      technologies: ["AWS", "FHIR", "HL7", "Blockchain", "React"],
      achievements: ["全国5000施設接続", "データ標準化100%", "セキュリティ認証取得", "災害時BCP対応"],
      image: "/placeholder.svg?height=300&width=400",
      status: "completed",
    },
    {
      id: 5,
      category: "prefecture",
      title: "大阪府教育DXプラットフォーム",
      client: "大阪府教育庁",
      period: "2023年4月 - 2024年3月",
      budget: "6億円",
      description: "府内全学校のデジタル教育環境整備",
      technologies: ["Microsoft 365", "Teams", "Power Platform", "Azure AD"],
      achievements: ["1200校導入完了", "教員研修100%実施", "学習効果30%向上", "運用コスト50%削減"],
      image: "/placeholder.svg?height=300&width=400",
      status: "completed",
    },
    {
      id: 6,
      category: "municipality",
      title: "福岡市防災情報システム",
      client: "福岡市",
      period: "2024年2月 - 進行中",
      budget: "4億円",
      description: "AI予測と多言語対応の次世代防災システム",
      technologies: ["AWS", "AI/ML", "GIS", "React Native", "WebRTC"],
      achievements: ["予測精度85%達成", "多言語対応10言語", "避難誘導時間50%短縮", "市民アプリ50万DL"],
      image: "/placeholder.svg?height=300&width=400",
      status: "ongoing",
    },
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

  const filteredProjects =
    activeProjectFilter === "all"
      ? featuredProjects.slice(0, 4)
      : featuredProjects.filter((project) => project.category === activeProjectFilter).slice(0, 4)

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

          {/* Services Section */}
          <div id="services" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#058DD6] mb-4">サービス</h2>
              <div className="w-16 h-1 bg-[#058DD6]"></div>
              <p className="text-lg text-[#6B7280] mt-4">
                政府機関・自治体のデジタル変革を支援する包括的なITソリューション
              </p>
            </div>

            {/* Service Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {serviceCategories.map((category) => {
                const isActive = activeServiceTab === category.id
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveServiceTab(category.id)
                    }}
                    className={`px-6 py-3 font-semibold text-sm transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? "bg-[#058DD6] text-white shadow-lg border-[#058DD6]"
                        : "bg-white text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#058DD6] border-gray-200"
                    }`}
                  >
                    <category.icon className="w-4 h-4 inline mr-2" />
                    {category.title}
                  </button>
                )
              })}
            </div>

            {/* Active Service Category Content */}
            <div className="bg-white shadow-lg overflow-hidden">
              {serviceCategories
                .filter((category) => category.id === activeServiceTab)
                .map((category) => (
                  <div key={category.id}>
                    {/* Category Header */}
                    <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                      <div className="flex items-center space-x-4">
                        <category.icon className="w-12 h-12" />
                        <div>
                          <h3 className="text-2xl font-bold">{category.title}</h3>
                          <p className="text-lg opacity-90">{category.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {category.services.map((service, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                          >
                            <h4 className="text-lg font-bold text-[#1E3A8A] mb-3">{service.name}</h4>
                            <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">{service.description}</p>
                            <div className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                                  <span className="text-sm text-[#374151]">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Services CTA */}
            <div className="text-center mt-8">
              <button className="bg-[#058DD6] text-white px-8 py-3 font-semibold hover:bg-[#0571B8] transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span>すべてのサービスを見る</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Projects Section */}
          <div id="projects" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#058DD6] mb-4">実績・プロジェクト</h2>
              <div className="w-16 h-1 bg-[#058DD6]"></div>
              <p className="text-lg text-[#6B7280] mt-4">全国47都道府県での豊富な実績と信頼の証</p>
            </div>

            {/* Project Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-[#058DD6] mb-2">47</div>
                <div className="text-sm text-[#6B7280]">都道府県実績</div>
              </div>
              <div className="bg-white p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-[#058DD6] mb-2">500+</div>
                <div className="text-sm text-[#6B7280]">プロジェクト完了</div>
              </div>
              <div className="bg-white p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-[#058DD6] mb-2">98%</div>
                <div className="text-sm text-[#6B7280]">顧客満足度</div>
              </div>
              <div className="bg-white p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-[#058DD6] mb-2">15年</div>
                <div className="text-sm text-[#6B7280]">継続実績</div>
              </div>
            </div>

            {/* Project Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {projectCategories.map((category) => {
                const isActive = activeProjectFilter === category.id
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveProjectFilter(category.id)
                    }}
                    className={`px-4 py-2 font-medium text-sm transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? "bg-[#058DD6] text-white shadow-lg border-[#058DD6]"
                        : "bg-white text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#058DD6] border-gray-200"
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                )
              })}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 text-xs font-semibold ${
                          project.status === "completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {project.status === "completed" ? "完了" : "進行中"}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-[#6B7280]">
                        <Building2 className="w-4 h-4" />
                        <span>{project.client}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{project.title}</h3>
                    <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">{project.description}</p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-[#058DD6]" />
                        <span className="text-[#6B7280]">{project.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-[#058DD6]" />
                        <span className="text-[#6B7280]">{project.budget}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-[#EFF6FF] text-[#058DD6] text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-[#1E3A8A]">主な成果</h4>
                      {project.achievements.slice(0, 2).map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                          <span className="text-sm text-[#374151]">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Projects Button */}
            <div className="text-center mt-8">
              <button className="bg-[#058DD6] text-white px-8 py-3 font-semibold hover:bg-[#0571B8] transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span>すべての実績を見る</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonials Section */}
          <div id="testimonials" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#058DD6] mb-4">お客様の声</h2>
              <div className="w-16 h-1 bg-[#058DD6]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow-lg">
                <Quote className="w-8 h-8 text-[#058DD6] mb-3 opacity-50" />
                <p className="text-[#374151] mb-4 text-sm leading-relaxed">
                  「システム統合により業務効率が大幅に向上し、職員の生産性が40%改善されました。」
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#058DD6] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A8A] text-sm">A県 情報政策課長</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#F59E0B] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 shadow-lg">
                <Quote className="w-8 h-8 text-[#058DD6] mb-3 opacity-50" />
                <p className="text-[#374151] mb-4 text-sm leading-relaxed">
                  「セキュリティ面での専門性が高く、政府標準準拠で安心してシステム運用できています。」
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#058DD6] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A8A] text-sm">B市 IT推進室長</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#F59E0B] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 shadow-lg">
                <Quote className="w-8 h-8 text-[#058DD6] mb-3 opacity-50" />
                <p className="text-[#374151] mb-4 text-sm leading-relaxed">
                  「市民サービスのデジタル化により、窓口業務効率化と市民満足度向上を実現できました。」
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#058DD6] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A8A] text-sm">C省 デジタル推進本部</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#F59E0B] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
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