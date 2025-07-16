"use client"
import type React from "react"
import { useState, useEffect } from "react"
import {
  Users,
  Heart,
  TrendingUp,
  Award,
  MapPin,
  Clock,
  GraduationCap,
  Briefcase,
  Calendar,
  Send,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  ChevronRight,
  Star,
  Coffee,
  Zap,
  Target,
  Building2,
} from "lucide-react"
import InteractiveFooter from "../components/interactive-footer"
import Header from "../components/header"

export default function CareersPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("benefits")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    motivation: "",
    availability: "",
    salary: "",
    portfolio: "",
    linkedin: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const companyBenefits = [
    {
      category: "健康・福利厚生",
      icon: Heart,
      color: "text-red-500",
      benefits: [
        "健康保険・厚生年金完備",
        "定期健康診断・人間ドック補助",
        "メンタルヘルスサポート",
        "フィットネスジム利用補助",
        "社員食堂・ドリンク無料",
        "インフルエンザ予防接種無料",
      ],
    },
    {
      category: "働き方・環境",
      icon: Coffee,
      color: "text-amber-500",
      benefits: [
        "フレックスタイム制度",
        "リモートワーク対応",
        "有給取得率90%以上",
        "最新設備のオフィス環境",
        "個人専用デスク・モニター",
        "カジュアルドレスコード",
      ],
    },
    {
      category: "成長・キャリア",
      icon: TrendingUp,
      color: "text-green-500",
      benefits: [
        "技術研修・資格取得支援",
        "外部セミナー参加費補助",
        "メンター制度",
        "キャリアパス相談",
        "社内勉強会・技術共有",
        "英語学習サポート",
      ],
    },
    {
      category: "報酬・手当",
      icon: Award,
      color: "text-blue-500",
      benefits: [
        "業績連動賞与（年2回）",
        "昇給年1回（4月）",
        "交通費全額支給",
        "住宅手当（条件あり）",
        "家族手当",
        "資格手当・技術手当",
      ],
    },
  ]

  const jobOpenings = [
    {
      id: "senior-engineer",
      title: "シニアシステムエンジニア",
      department: "技術部",
      location: "東京本社",
      type: "正社員",
      experience: "5年以上",
      salary: "600万円〜900万円",
      description: "政府機関向けシステム開発のリードエンジニアとして、要件定義から運用まで一貫して担当",
      requirements: [
        "Java、Python、またはC#での開発経験5年以上",
        "データベース設計・構築経験",
        "チームリーダー経験",
        "政府系プロジェクト経験（優遇）",
        "AWS/Azure等クラウド経験",
      ],
      responsibilities: [
        "システム設計・開発・テスト",
        "チームメンバーの技術指導",
        "顧客との技術要件調整",
        "プロジェクト進行管理",
        "品質管理・レビュー",
      ],
      skills: ["Java", "Python", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
      posted: "2025年1月10日",
      deadline: "2025年2月28日",
    },
    {
      id: "security-specialist",
      title: "サイバーセキュリティスペシャリスト",
      department: "セキュリティ部",
      location: "東京本社",
      type: "正社員",
      experience: "3年以上",
      salary: "550万円〜800万円",
      description: "政府標準セキュリティ対策の設計・実装・運用を担当するセキュリティエキスパート",
      requirements: [
        "情報セキュリティ関連資格（CISSP、CEH等）",
        "セキュリティ監査・診断経験",
        "ネットワークセキュリティ知識",
        "インシデント対応経験",
        "英語での技術文書読解能力",
      ],
      responsibilities: [
        "セキュリティ要件定義・設計",
        "脆弱性診断・ペネトレーションテスト",
        "セキュリティ監視・分析",
        "インシデント対応・復旧",
        "セキュリティ教育・啓発",
      ],
      skills: ["CISSP", "CEH", "SIEM", "Firewall", "IDS/IPS", "Forensics"],
      posted: "2025年1月8日",
      deadline: "2025年2月15日",
    },
    {
      id: "cloud-architect",
      title: "クラウドアーキテクト",
      department: "インフラ部",
      location: "東京本社・大阪支社",
      type: "正社員",
      experience: "4年以上",
      salary: "650万円〜950万円",
      description: "大規模クラウドインフラの設計・構築・運用を担当するクラウドエキスパート",
      requirements: [
        "AWS/Azure認定資格保有",
        "クラウドインフラ設計・構築経験",
        "Infrastructure as Code経験",
        "コンテナ技術（Docker/Kubernetes）",
        "DevOps/CI-CD経験",
      ],
      responsibilities: [
        "クラウドアーキテクチャ設計",
        "インフラ自動化・運用",
        "パフォーマンス最適化",
        "コスト最適化提案",
        "技術選定・評価",
      ],
      skills: ["AWS", "Azure", "Terraform", "Kubernetes", "Ansible", "Monitoring"],
      posted: "2025年1月5日",
      deadline: "2025年2月20日",
    },
    {
      id: "project-manager",
      title: "プロジェクトマネージャー",
      department: "PMO",
      location: "東京本社",
      type: "正社員",
      experience: "5年以上",
      salary: "700万円〜1000万円",
      description: "大規模政府系プロジェクトの企画・管理・推進を担当するプロジェクトリーダー",
      requirements: [
        "PMP資格またはそれに準ずる資格",
        "大規模プロジェクト管理経験",
        "ステークホルダー調整経験",
        "予算管理・リスク管理経験",
        "政府系プロジェクト経験（優遇）",
      ],
      responsibilities: [
        "プロジェクト計画策定・管理",
        "チーム編成・リソース管理",
        "顧客・関係者との調整",
        "品質・進捗・予算管理",
        "リスク管理・課題解決",
      ],
      skills: ["PMP", "Agile", "Scrum", "MS Project", "JIRA", "Risk Management"],
      posted: "2025年1月3日",
      deadline: "2025年2月10日",
    },
    {
      id: "ui-ux-designer",
      title: "UI/UXデザイナー",
      department: "デザイン部",
      location: "東京本社",
      type: "正社員",
      experience: "3年以上",
      salary: "500万円〜750万円",
      description: "政府系Webサービス・アプリケーションのUI/UX設計を担当するデザイナー",
      requirements: [
        "UI/UXデザイン実務経験3年以上",
        "Figma、Adobe XD等ツール習熟",
        "ユーザビリティテスト経験",
        "アクセシビリティ対応知識",
        "HTML/CSS基礎知識",
      ],
      responsibilities: [
        "UI/UX設計・プロトタイプ作成",
        "ユーザー調査・分析",
        "デザインシステム構築",
        "開発チームとの連携",
        "ユーザビリティ改善提案",
      ],
      skills: ["Figma", "Adobe XD", "Sketch", "Principle", "HTML/CSS", "User Research"],
      posted: "2025年1月1日",
      deadline: "2025年2月5日",
    },
    {
      id: "data-scientist",
      title: "データサイエンティスト",
      department: "AI・データ分析部",
      location: "東京本社",
      type: "正社員",
      experience: "2年以上",
      salary: "550万円〜850万円",
      description: "政府データの分析・AI活用による業務改善提案を担当するデータ専門家",
      requirements: [
        "Python/R等での分析経験",
        "機械学習・統計解析知識",
        "SQL・データベース操作",
        "データ可視化経験",
        "統計学・数学の基礎知識",
      ],
      responsibilities: [
        "データ分析・統計解析",
        "機械学習モデル構築",
        "データ可視化・レポート作成",
        "業務改善提案",
        "AI技術調査・検証",
      ],
      skills: ["Python", "R", "SQL", "TensorFlow", "Tableau", "Statistics"],
      posted: "2024年12月28日",
      deadline: "2025年1月31日",
    },
  ]

  const applicationSteps = [
    {
      step: "01",
      title: "応募書類提出",
      description: "履歴書・職務経歴書をオンラインフォームまたはメールで提出",
      duration: "随時受付",
      details: ["履歴書（写真付き）", "職務経歴書", "ポートフォリオ（該当職種）"],
    },
    {
      step: "02",
      title: "書類選考",
      description: "提出書類を基に一次選考を実施",
      duration: "1週間程度",
      details: ["経験・スキル評価", "志望動機確認", "カルチャーフィット判定"],
    },
    {
      step: "03",
      title: "一次面接",
      description: "人事担当者との面接（オンライン可）",
      duration: "1時間程度",
      details: ["自己紹介・経歴確認", "志望動機・キャリアプラン", "基本的な技術質問"],
    },
    {
      step: "04",
      title: "技術面接",
      description: "現場エンジニアとの技術面接・実技テスト",
      duration: "1.5時間程度",
      details: ["技術的な深掘り質問", "コーディングテスト", "システム設計課題"],
    },
    {
      step: "05",
      title: "最終面接",
      description: "役員・部門長との最終面接",
      duration: "1時間程度",
      details: ["経営方針との適合性", "リーダーシップ・協調性", "長期的なキャリアビジョン"],
    },
    {
      step: "06",
      title: "内定・入社",
      description: "条件調整後、内定通知・入社手続き",
      duration: "1週間程度",
      details: ["労働条件通知", "入社日調整", "必要書類準備"],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        education: "",
        motivation: "",
        availability: "",
        salary: "",
        portfolio: "",
        linkedin: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920&text=Team+Collaboration+Office"
            alt="Team collaboration in modern office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-[#058DD6] bg-opacity-90 text-white text-sm font-bold tracking-wider uppercase backdrop-blur-sm">
                採用情報
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              <span className="text-[#4FC3F7]">共に未来を</span>
              <br />
              <span>創造しませんか</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
              日本の行政サービス向上に貢献する
              <br />
              <span className="text-[#4FC3F7] font-semibold">最高のチームに参加しませんか</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-[#058DD6] bg-opacity-90 text-white px-10 py-5 font-bold text-lg hover:bg-opacity-100 transition-all duration-500 transform hover:-translate-y-2 flex items-center space-x-3 shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm">
                <span>求人情報を見る</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 font-bold text-lg hover:bg-white hover:text-[#058DD6] transition-all duration-500 flex items-center space-x-3 backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span>会社説明会予約</span>
              </button>
            </div>
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#4FC3F7] mb-2">180名</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">社員数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#4FC3F7] mb-2">15年</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">創業実績</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#4FC3F7] mb-2">95%</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">社員満足度</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">経営陣からのメッセージ</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">代表・役員からの採用メッセージ</p>
            <div className="w-16 h-1 bg-[#058DD6] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CEO Message */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-24 h-24 bg-gray-200 overflow-hidden flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=96&width=96&text=CEO"
                    alt="代表取締役社長 田中太郎"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-1">田中 太郎</h3>
                  <p className="text-[#058DD6] font-semibold mb-2">代表取締役社長</p>
                  <p className="text-sm text-[#6B7280]">最高経営責任者</p>
                </div>
              </div>
              <blockquote className="text-[#374151] leading-relaxed italic">
                「私たちは単なるIT企業ではありません。日本の行政サービスを変革し、国民の皆様により良い未来を提供する使命を担っています。
                この重要な仕事に情熱を持って取り組める仲間を求めています。技術力だけでなく、社会貢献への強い意志を持つ方々と共に、
                日本のデジタル変革を推進していきたいと考えています。」
              </blockquote>
            </div>

            {/* CTO Message */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-24 h-24 bg-gray-200 overflow-hidden flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=96&width=96&text=CTO"
                    alt="取締役CTO 佐藤花子"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-1">佐藤 花子</h3>
                  <p className="text-[#058DD6] font-semibold mb-2">取締役CTO</p>
                  <p className="text-sm text-[#6B7280]">最高技術責任者</p>
                </div>
              </div>
              <blockquote className="text-[#374151] leading-relaxed italic">
                「技術者として最も重要なのは、常に学び続ける姿勢です。当社では最新技術の習得を全面的にサポートし、
                個人の成長と会社の発展を両立させる環境を整えています。政府系プロジェクトという責任の重い仕事だからこそ、
                高い技術力と倫理観を持つエンジニアと共に、安全で信頼性の高いシステムを構築していきたいと思います。」
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">福利厚生・企業文化</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              社員が最高のパフォーマンスを発揮できる環境と制度
            </p>
            <div className="w-16 h-1 bg-[#058DD6] mx-auto mt-6"></div>
          </div>

          {/* Benefits Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["benefits", "culture", "growth"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 font-bold text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#058DD6] text-white shadow-lg"
                    : "bg-gray-100 text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#058DD6]"
                }`}
              >
                {tab === "benefits" && "福利厚生"}
                {tab === "culture" && "企業文化"}
                {tab === "growth" && "成長支援"}
              </button>
            ))}
          </div>

          {/* Benefits Content */}
          {activeTab === "benefits" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyBenefits.map((category, index) => (
                <div
                  key={index}
                  className="bg-[#F8F9FA] p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-4 shadow-md">
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1E3A8A]">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#374151]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Culture Content */}
          {activeTab === "culture" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-[#F8F9FA] hover:shadow-lg transition-all duration-300">
                <Target className="w-16 h-16 text-[#058DD6] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">ミッション重視</h3>
                <p className="text-[#374151] leading-relaxed">
                  日本の行政サービス向上という明確なミッションを共有し、社会貢献を実感できる仕事環境
                </p>
              </div>
              <div className="text-center p-8 bg-[#F8F9FA] hover:shadow-lg transition-all duration-300">
                <Users className="w-16 h-16 text-[#058DD6] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">チームワーク</h3>
                <p className="text-[#374151] leading-relaxed">
                  多様なバックグラウンドを持つメンバーが協力し、お互いの強みを活かしながら成果を創出
                </p>
              </div>
              <div className="text-center p-8 bg-[#F8F9FA] hover:shadow-lg transition-all duration-300">
                <Zap className="w-16 h-16 text-[#058DD6] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">イノベーション</h3>
                <p className="text-[#374151] leading-relaxed">
                  新しい技術やアイデアを積極的に取り入れ、常に改善と革新を追求する文化
                </p>
              </div>
            </div>
          )}

          {/* Growth Content */}
          {activeTab === "growth" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F8F9FA] p-8 hover:shadow-lg transition-all duration-300">
                <GraduationCap className="w-12 h-12 text-[#058DD6] mb-4" />
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">教育・研修制度</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[#374151]">新入社員研修（3ヶ月）</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[#374151]">技術研修・資格取得支援</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[#374151]">外部セミナー・カンファレンス参加</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[#374151]">英語・ビジネススキル研修</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F8F9FA] p-8 hover:shadow-lg transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-[#058DD6] mb-4" />
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">キャリア支援</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[#374151]">メンター制度</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[#374151]">定期キャリア面談</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[#374151]">社内異動・職種転換支援</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[#374151]">リーダーシップ研修</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">現在募集中のポジション</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">募集職種一覧</p>
            <div className="w-16 h-1 bg-[#058DD6] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  {/* Job Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-[#6B7280]">
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#058DD6] mb-1">{job.salary}</div>
                      <div className="text-sm text-[#6B7280]">{job.experience}</div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-[#374151] mb-6 leading-relaxed">{job.description}</p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1E3A8A] mb-3">必要スキル</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-[#EFF6FF] text-[#058DD6] text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Requirements Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1E3A8A] mb-3">応募要件（抜粋）</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#374151]">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Job Meta */}
                  <div className="flex items-center justify-between text-sm text-[#6B7280] mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>掲載: {job.posted}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>締切: {job.deadline}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="flex-1 bg-gray-100 text-[#374151] py-3 font-semibold hover:bg-gray-200 transition-all duration-300"
                    >
                      {selectedJob === job.id ? "詳細を閉じる" : "詳細を見る"}
                    </button>
                    <button className="flex-1 bg-[#058DD6] text-white py-3 font-semibold hover:bg-[#0571B8] transition-all duration-300 flex items-center justify-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>応募する</span>
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedJob === job.id && (
                  <div className="border-t border-gray-200 p-8 bg-[#F8F9FA] animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-[#1E3A8A] mb-4">応募要件</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#374151]">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1E3A8A] mb-4">主な業務内容</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Briefcase className="w-4 h-4 text-[#058DD6] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#374151]">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">応募から入社までの流れ</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">選考プロセスについて</p>
            <div className="w-16 h-1 bg-[#058DD6] mx-auto mt-6"></div>
          </div>

          <div className="space-y-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="bg-[#F8F9FA] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-24 h-full bg-[#058DD6] text-white flex items-center justify-center">
                    <div className="text-center py-8">
                      <div className="text-2xl font-bold mb-1">{step.step}</div>
                      <div className="text-xs opacity-75">STEP</div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-[#1E3A8A]">{step.title}</h3>
                      <div className="flex items-center space-x-2 text-[#6B7280]">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-[#374151] mb-6 leading-relaxed text-lg">{step.description}</p>

                    {/* Details */}
                    <div>
                      <h4 className="font-semibold text-[#1E3A8A] mb-4 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-[#058DD6]" />
                        詳細内容
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="bg-white p-3 text-center shadow-sm">
                            <span className="text-sm text-[#374151] font-medium">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">オンライン応募フォーム</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">こちらからご応募ください</p>
            <div className="w-16 h-1 bg-[#058DD6] mx-auto mt-6"></div>
          </div>

          <div className="bg-white p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-[#374151] mb-2">
                    姓 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="山田"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-[#374151] mb-2">
                    名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="太郎"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#374151] mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#374151] mb-2">
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              {/* Position and Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-[#374151] mb-2">
                    希望職種 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                  >
                    <option value="">選択してください</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.id}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-[#374151] mb-2">
                    経験年数 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                  >
                    <option value="">選択してください</option>
                    <option value="0-1">1年未満</option>
                    <option value="1-3">1-3年</option>
                    <option value="3-5">3-5年</option>
                    <option value="5-10">5-10年</option>
                    <option value="10+">10年以上</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-semibold text-[#374151] mb-2">
                  最終学歴 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                  placeholder="○○大学 ○○学部 ○○学科"
                />
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="availability" className="block text-sm font-semibold text-[#374151] mb-2">
                    入社可能時期
                  </label>
                  <input
                    type="text"
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="即日 / 2025年4月 / 要相談"
                  />
                </div>
                <div>
                  <label htmlFor="salary" className="block text-sm font-semibold text-[#374151] mb-2">
                    希望年収
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="600万円 / 要相談"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-semibold text-[#374151] mb-2">
                    ポートフォリオURL
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="https://portfolio.example.com"
                  />
                </div>
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-semibold text-[#374151] mb-2">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="https://linkedin.com/in/yourname"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-semibold text-[#374151] mb-2">
                  志望動機・自己PR <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="志望動機、これまでの経験、当社で実現したいことなどをご記入ください..."
                />
              </div>

              {/* File Upload Section */}
              <div className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#058DD6] transition-colors duration-300">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-[#374151] mb-2">履歴書・職務経歴書</h4>
                <p className="text-sm text-[#6B7280] mb-4">PDF形式でアップロードしてください（最大10MB）</p>
                <button
                  type="button"
                  className="bg-[#058DD6] text-white px-6 py-2 font-semibold hover:bg-[#0571B8] transition-colors duration-300"
                >
                  ファイルを選択
                </button>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#058DD6] hover:bg-[#0571B8] transform hover:-translate-y-1 hover:shadow-xl"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>送信中...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>応募する</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  <span>応募を受け付けました。1週間以内に書類選考の結果をご連絡いたします。</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 text-red-800">
                  <AlertCircle className="w-5 h-5" />
                  <span>送信に失敗しました。お手数ですが、再度お試しください。</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <InteractiveFooter />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#058DD6] text-white p-4 shadow-xl hover:bg-[#0571B8] transition-all duration-300 z-50 transform hover:-translate-y-2 hover:scale-110"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
