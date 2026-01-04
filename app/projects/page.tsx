"use client"
import { useState, useEffect } from "react"
import {
  Calendar,
  Target,
  Building2,
  ChevronRight,
  ArrowUp,
  Filter,
  Search,
  MapPin,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import InteractiveFooter from "../components/interactive-footer"
import Header from "../components/header"

export default function ProjectsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

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
      detailedDescription:
        "政府機関間の情報共有を効率化し、国民サービスの向上を図る大規模システム統合プロジェクト。マイクロサービス・アーキテクチャを採用し、高い拡張性とセキュリティを実現。",
      technologies: ["AWS", "Kubernetes", "React", "Node.js", "PostgreSQL"],
      achievements: ["処理速度70%向上", "運用コスト40%削減", "セキュリティレベル向上", "ユーザビリティ大幅改善"],
      image: "/placeholder.svg?height=300&width=500&text=Government+Integration+System",
      status: "completed",
      teamSize: "25名",
      challenges: ["複数システムの統合", "セキュリティ要件の厳格化", "24時間無停止運用"],
      solutions: ["段階的移行戦略", "ゼロダウンタイム・デプロイメント", "多層セキュリティ実装"],
    },
    {
      id: 2,
      category: "prefecture",
      title: "東京都デジタル窓口システム",
      client: "東京都",
      period: "2022年10月 - 2023年9月",
      budget: "8億円",
      description: "都民向けオンライン申請・手続きシステムの全面刷新",
      detailedDescription:
        "都民の利便性向上を目的とした次世代デジタル窓口システム。AI技術を活用した自動処理機能により、申請処理時間を大幅に短縮。",
      technologies: ["Azure", "React Native", "Python", "MongoDB", "AI/ML"],
      achievements: ["申請処理時間80%短縮", "利用者満足度95%達成", "年間2000万件処理", "24時間365日稼働"],
      image: "/placeholder.svg?height=300&width=500&text=Tokyo+Digital+Portal",
      status: "completed",
      teamSize: "18名",
      challenges: ["大量トランザクション処理", "多様な申請フォーム対応", "高可用性要件"],
      solutions: ["クラウドネイティブ設計", "マイクロサービス化", "自動スケーリング実装"],
    },
    {
      id: 3,
      category: "municipality",
      title: "横浜市スマートシティ基盤",
      client: "横浜市",
      period: "2024年1月 - 進行中",
      budget: "12億円",
      description: "IoT・AI活用による次世代都市管理システム",
      detailedDescription:
        "IoTセンサーとAI分析を組み合わせた革新的な都市管理プラットフォーム。リアルタイムデータ分析により、効率的な都市運営を実現。",
      technologies: ["GCP", "IoT", "AI/ML", "Blockchain", "5G"],
      achievements: ["センサー1万台設置", "リアルタイム監視実現", "予測分析精度90%", "エネルギー効率20%向上"],
      image: "/placeholder.svg?height=300&width=500&text=Smart+City+Platform",
      status: "ongoing",
      teamSize: "30名",
      challenges: ["大規模IoTデータ処理", "リアルタイム分析", "プライバシー保護"],
      solutions: ["エッジコンピューティング", "分散処理アーキテクチャ", "暗号化技術活用"],
    },
    {
      id: 4,
      category: "government",
      title: "厚生労働省医療情報基盤",
      client: "厚生労働省",
      period: "2023年6月 - 2024年5月",
      budget: "20億円",
      description: "全国医療機関データ連携システムの構築",
      detailedDescription:
        "全国の医療機関を結ぶ大規模な医療情報連携基盤。標準化されたデータフォーマットにより、医療の質向上と効率化を実現。",
      technologies: ["AWS", "FHIR", "HL7", "Blockchain", "React"],
      achievements: ["全国5000施設接続", "データ標準化100%", "セキュリティ認証取得", "災害時BCP対応"],
      image: "/placeholder.svg?height=300&width=500&text=Medical+Information+Platform",
      status: "completed",
      teamSize: "35名",
      challenges: ["医療データ標準化", "プライバシー保護", "災害時対応"],
      solutions: ["FHIR標準採用", "ブロックチェーン活用", "冗長化システム構築"],
    },
    {
      id: 5,
      category: "prefecture",
      title: "大阪府教育DXプラットフォーム",
      client: "大阪府教育庁",
      period: "2023年4月 - 2024年3月",
      budget: "6億円",
      description: "府内全学校のデジタル教育環境整備",
      detailedDescription:
        "府内1200校を対象とした包括的な教育DXプラットフォーム。教員・生徒・保護者をつなぐ統合的な学習環境を提供。",
      technologies: ["Microsoft 365", "Teams", "Power Platform", "Azure AD"],
      achievements: ["1200校導入完了", "教員研修100%実施", "学習効果30%向上", "運用コスト50%削減"],
      image: "/placeholder.svg?height=300&width=500&text=Education+DX+Platform",
      status: "completed",
      teamSize: "22名",
      challenges: ["大規模展開", "教員研修", "セキュリティ確保"],
      solutions: ["段階的ロールアウト", "包括的研修プログラム", "多層セキュリティ"],
    },
    {
      id: 6,
      category: "municipality",
      title: "福岡市防災情報システム",
      client: "福岡市",
      period: "2024年2月 - 進行中",
      budget: "4億円",
      description: "AI予測と多言語対応の次世代防災システム",
      detailedDescription:
        "AI技術を活用した災害予測機能と多言語対応により、市民の安全確保と外国人住民への情報提供を強化した防災システム。",
      technologies: ["AWS", "AI/ML", "GIS", "React Native", "WebRTC"],
      achievements: ["予測精度85%達成", "多言語対応10言語", "避難誘導時間50%短縮", "市民アプリ50万DL"],
      image: "/placeholder.svg?height=300&width=500&text=Disaster+Prevention+System",
      status: "ongoing",
      teamSize: "20名",
      challenges: ["災害予測精度", "多言語対応", "緊急時対応"],
      solutions: ["機械学習モデル最適化", "自動翻訳API活用", "冗長化通信システム"],
    },
  ]

  const filteredProjects = featuredProjects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
      <section className="relative h-screen flex items-center overflow-hidden mt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920&text=Government+Projects+Success"
            alt="Government projects and success"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            {/* Animated Content from Left */}
            <div className="animate-slide-in-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#058DD6] bg-opacity-90 text-white text-sm font-semibold tracking-wide uppercase">
                  Our Projects
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                実績と
                <br />
                <span className="text-[#F59E0B]">信頼の証</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                全国47都道府県での豊富な実績
                <br />
                政府機関から信頼される確かな技術力
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#058DD6] text-white px-8 py-4 font-semibold text-lg hover:bg-[#0571B8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
                  <span>プロジェクト一覧を見る</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#058DD6] transition-all duration-300 backdrop-blur-sm">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-6xl mx-auto px-8">
          {/* Projects Overview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">プロジェクト実績</h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              政府機関・自治体との長期的なパートナーシップにより実現した
              <br />
              革新的なデジタルソリューションプロジェクト
            </p>
            <div className="w-24 h-1 bg-[#058DD6] mx-auto mt-6"></div>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#EFF6FF] flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[#058DD6]" />
              </div>
              <div className="text-3xl font-bold text-[#058DD6] mb-2">500+</div>
              <div className="text-sm text-[#6B7280]">完了プロジェクト</div>
            </div>
            <div className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#FFF7ED] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <div className="text-3xl font-bold text-[#058DD6] mb-2">47</div>
              <div className="text-sm text-[#6B7280]">都道府県実績</div>
            </div>
            <div className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#EFF6FF] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#058DD6]" />
              </div>
              <div className="text-3xl font-bold text-[#058DD6] mb-2">1000+</div>
              <div className="text-sm text-[#6B7280]">プロジェクトメンバー</div>
            </div>
            <div className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#FFF7ED] flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <div className="text-3xl font-bold text-[#058DD6] mb-2">98%</div>
              <div className="text-sm text-[#6B7280]">顧客満足度</div>
            </div>
          </div>

          {/* Filter and Search */}
          <div className="bg-white shadow-lg p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-5 h-5" />
                <input
                  type="text"
                  placeholder="プロジェクト名、クライアント名で検索..."
                  value={searchTerm}
                  onChange={(e) => {
                    console.log("Search term:", e.target.value)
                    setSearchTerm(e.target.value)
                  }}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                />
              </div>
              {/* Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-[#6B7280]" />
                <div className="flex flex-wrap gap-2">
                  {projectCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        console.log("Filter clicked:", category.id)
                        setActiveFilter(category.id)
                      }}
                      className={`px-4 py-2 font-medium text-sm transition-all duration-300 cursor-pointer ${
                        activeFilter === category.id
                          ? "bg-[#058DD6] text-white shadow-lg"
                          : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"
                      }`}
                    >
                      {category.label} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold ${
                        project.status === "completed" ? "bg-[#058DD6] text-white" : "bg-[#F59E0B] text-white"
                      }`}
                    >
                      {project.status === "completed" ? "完了" : "進行中"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 text-xs">
                    {project.teamSize}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-2 text-[#6B7280]">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{project.client}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#6B7280] mb-6 leading-relaxed">{project.description}</p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
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
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1E3A8A] mb-3">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-[#EFF6FF] text-[#058DD6] text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1E3A8A] mb-3">主な成果</h4>
                    <div className="space-y-2">
                      {project.achievements.slice(0, 3).map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                          <span className="text-sm text-[#374151]">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-gray-200">
                    <button className="w-full bg-[#058DD6] text-white py-3 font-semibold hover:bg-[#0571B8] transition-all duration-300 flex items-center justify-center space-x-2 group">
                      <span>詳細を見る</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length > 0 && (
            <div className="text-center">
              <button className="bg-white border-2 border-[#058DD6] text-[#058DD6] px-8 py-3 font-semibold hover:bg-[#058DD6] hover:text-white transition-all duration-300">
                さらに読み込む
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">検索結果が見つかりません</h3>
              <p className="text-[#6B7280]">検索条件を変更してお試しください</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-[#058DD6] to-[#1E3A8A] text-white p-12 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">あなたのプロジェクトも成功に導きます</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              豊富な実績と専門知識を活かし、お客様の課題解決に最適なソリューションを提供いたします。
              まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#058DD6] px-8 py-4 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2">
                <span>プロジェクト相談</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#058DD6] transition-all duration-300">
                事例資料ダウンロード
              </button>
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

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }
      `}</style>
    </div>
  )
}