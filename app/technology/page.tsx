"use client"
import { useState, useEffect, useRef } from "react"
import {
  Code,
  Database,
  Cloud,
  Shield,
  Cpu,
  Layers,
  ArrowRight,
  ArrowUp,
  Play,
  Pause,
  Award,
  Wifi,
  Brain,
  Eye,
  Rocket,
  Zap,
  TrendingUp,
} from "lucide-react"
import InteractiveFooter from "../components/interactive-footer"
import Header from "../components/header"

export default function TechnologyPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeTab, setActiveTab] = useState("cloud")
  const [animationPlaying, setAnimationPlaying] = useState(true)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  const technologyAreas = [
    {
      id: "cloud",
      title: "クラウド・インフラ",
      subtitle: "Cloud & Infrastructure",
      icon: Cloud,
      description: "次世代クラウドアーキテクチャによる高可用性・拡張性を実現",
      technologies: [
        { name: "AWS", level: 95, category: "Platform" },
        { name: "Azure", level: 90, category: "Platform" },
        { name: "GCP", level: 85, category: "Platform" },
        { name: "Kubernetes", level: 92, category: "Orchestration" },
        { name: "Docker", level: 95, category: "Container" },
        { name: "Terraform", level: 88, category: "IaC" },
      ],
      features: [
        "マルチクラウド戦略",
        "コンテナオーケストレーション",
        "Infrastructure as Code",
        "自動スケーリング",
        "災害復旧対応",
        "コスト最適化",
      ],
      achievements: ["99.99%可用性達成", "運用コスト40%削減", "デプロイ時間90%短縮", "セキュリティ強化"],
    },
    {
      id: "ai",
      title: "AI・機械学習",
      subtitle: "Artificial Intelligence & ML",
      icon: Brain,
      description: "最先端AI技術による業務自動化と意思決定支援",
      technologies: [
        { name: "Python", level: 95, category: "Language" },
        { name: "TensorFlow", level: 88, category: "Framework" },
        { name: "PyTorch", level: 85, category: "Framework" },
        { name: "OpenAI API", level: 92, category: "Service" },
        { name: "Scikit-learn", level: 90, category: "Library" },
        { name: "MLOps", level: 85, category: "Operations" },
      ],
      features: ["自然言語処理", "画像認識・解析", "予測分析", "異常検知", "チャットボット", "自動化ワークフロー"],
      achievements: ["処理精度95%達成", "業務効率70%向上", "人的エラー90%削減", "24時間自動対応"],
    },
    {
      id: "security",
      title: "サイバーセキュリティ",
      subtitle: "Cybersecurity Solutions",
      icon: Shield,
      description: "政府標準準拠の多層防御セキュリティシステム",
      technologies: [
        { name: "Zero Trust", level: 95, category: "Architecture" },
        { name: "SIEM", level: 90, category: "Monitoring" },
        { name: "EDR", level: 88, category: "Detection" },
        { name: "WAF", level: 92, category: "Protection" },
        { name: "PKI", level: 85, category: "Encryption" },
        { name: "SOAR", level: 87, category: "Response" },
      ],
      features: [
        "多層防御システム",
        "リアルタイム監視",
        "脅威インテリジェンス",
        "インシデント対応",
        "コンプライアンス対応",
        "セキュリティ教育",
      ],
      achievements: ["セキュリティ事故0件", "脅威検知率99%", "対応時間95%短縮", "認証取得100%"],
    },
    {
      id: "data",
      title: "データ・アナリティクス",
      subtitle: "Data Analytics & BI",
      icon: Database,
      description: "ビッグデータ活用による戦略的意思決定支援",
      technologies: [
        { name: "Apache Spark", level: 90, category: "Processing" },
        { name: "Elasticsearch", level: 88, category: "Search" },
        { name: "Tableau", level: 92, category: "Visualization" },
        { name: "Power BI", level: 90, category: "BI Tool" },
        { name: "Apache Kafka", level: 85, category: "Streaming" },
        { name: "Snowflake", level: 87, category: "Warehouse" },
      ],
      features: [
        "リアルタイム分析",
        "データレイク構築",
        "BI・可視化",
        "予測モデリング",
        "データガバナンス",
        "ETL・データパイプライン",
      ],
      achievements: ["データ処理速度10倍", "分析精度85%向上", "意思決定時間50%短縮", "ROI 300%達成"],
    },
  ]

  const innovationShowcase = [
    {
      id: "quantum",
      title: "量子コンピューティング研究",
      description: "次世代暗号化技術の研究開発",
      icon: Cpu,
      status: "研究中",
      progress: 35,
      details: "量子暗号化による究極のセキュリティ実現",
    },
    {
      id: "blockchain",
      title: "ブロックチェーン基盤",
      description: "分散型台帳による透明性確保",
      icon: Layers,
      status: "実証実験",
      progress: 70,
      details: "政府データの改ざん防止と透明性向上",
    },
    {
      id: "edge",
      title: "エッジコンピューティング",
      description: "IoTデバイス向け分散処理",
      icon: Wifi,
      status: "導入済み",
      progress: 95,
      details: "リアルタイム処理による応答性向上",
    },
    {
      id: "twin",
      title: "デジタルツイン",
      description: "仮想空間でのシミュレーション",
      icon: Eye,
      status: "開発中",
      progress: 60,
      details: "都市インフラの最適化シミュレーション",
    },
  ]

  // Animated background canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.2,
      })
    }

    const animate = () => {
      if (!animationPlaying) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "#4FC3F7"
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = "#4FC3F7"
            ctx.globalAlpha = ((100 - distance) / 100) * 0.2
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animationPlaying])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/technology-hero.png"
            alt="Modern technology office"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Animated Canvas Overlay */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 opacity-80" />

        {/* Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-8">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-[#058DD6] bg-opacity-90 text-white text-sm font-bold tracking-wider uppercase backdrop-blur-sm">
                Technology & Innovation
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight text-white">
              <span className="text-[#4FC3F7]">最先端技術で</span>
              <br />
              <span>未来を創造</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
              最先端技術で政府機関のデジタル変革を加速
              <br />
              <span className="text-[#4FC3F7] font-semibold">未来を創造する技術力</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-[#058DD6] bg-opacity-90 text-white px-10 py-5 font-bold text-lg hover:bg-opacity-100 transition-all duration-500 transform hover:-translate-y-2 flex items-center space-x-3 shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm">
                <span>技術詳細を見る</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 font-bold text-lg hover:bg-white hover:text-[#058DD6] transition-all duration-500 flex items-center space-x-3 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span>デモを見る</span>
              </button>
            </div>
            {/* Animation Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setAnimationPlaying(!animationPlaying)}
                className="p-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300"
              >
                {animationPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
              </button>
              <span className="text-sm text-gray-200">
                {animationPlaying ? "アニメーション停止" : "アニメーション再生"}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="flex flex-col items-center text-[#4FC3F7]">
            <span className="text-sm mb-2">Explore Technology</span>
            <div className="w-6 h-10 border-2 border-[#4FC3F7] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#4FC3F7] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Areas Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-8">
              <span className="text-[#058DD6]">コア</span>テクノロジー
            </h2>
            <p className="text-xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
              政府機関の要求に応える最高水準の技術スタックと専門知識
            </p>
            <div className="w-32 h-1 bg-[#058DD6] mx-auto mt-8"></div>
          </div>

          {/* Technology Tabs with Enhanced Animations */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {technologyAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveTab(area.id)}
                className={`group px-8 py-4 font-bold text-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden ${
                  activeTab === area.id
                    ? "bg-[#058DD6] text-white shadow-2xl"
                    : "bg-white text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#058DD6] border border-gray-200 hover:border-[#058DD6] hover:shadow-xl"
                }`}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#058DD6] to-[#4FC3F7] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <area.icon
                  className={`w-6 h-6 inline mr-3 transition-transform duration-300 ${
                    activeTab === area.id ? "" : "group-hover:scale-110 group-hover:rotate-12"
                  }`}
                />
                {area.title}
                {/* Pulse effect for active tab */}
                {activeTab === area.id && (
                  <div className="absolute inset-0 bg-[#4FC3F7] opacity-20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Active Technology Content */}
          {technologyAreas
            .filter((area) => area.id === activeTab)
            .map((area) => (
              <div key={area.id} className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                  {/* Left: Description */}
                  <div className="space-y-8">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <div className="inline-flex items-center px-6 py-3 bg-[#058DD6] text-white mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <area.icon className="w-8 h-8 mr-3 animate-pulse" />
                        <div>
                          <h3 className="text-2xl font-bold">{area.title}</h3>
                          <p className="text-sm opacity-90">{area.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-xl text-[#374151] leading-relaxed">{area.description}</p>
                    </div>

                    {/* Features Grid with Stagger Animation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {area.features.map((feature, index) => (
                        <div
                          key={index}
                          className="group bg-white p-4 border border-gray-200 hover:border-[#058DD6] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                          style={{
                            animationDelay: `${index * 100}ms`,
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-[#058DD6] rounded-full group-hover:animate-ping"></div>
                            <span className="text-[#374151] font-medium group-hover:text-[#058DD6] transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements with Hover Effects */}
                    <div className="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                      <h5 className="text-lg font-bold text-[#1E3A8A] mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-[#F59E0B] animate-bounce" />
                        主な実績
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {area.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="bg-[#EFF6FF] p-3 text-center hover:bg-[#DBEAFE] transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                          >
                            <span className="text-[#058DD6] font-bold text-sm group-hover:text-[#0571B8]">
                              {achievement}
                            </span>
                            <TrendingUp className="w-4 h-4 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Technology Stack with Enhanced Animations */}
                  <div className="bg-white p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                    <h4 className="text-2xl font-bold text-[#1E3A8A] mb-8 flex items-center">
                      <Code className="w-6 h-6 mr-3 text-[#058DD6] animate-pulse" />
                      技術スタック
                    </h4>
                    <div className="space-y-6">
                      {area.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="group cursor-pointer"
                          onMouseEnter={() => setHoveredTech(tech.name)}
                          onMouseLeave={() => setHoveredTech(null)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <span className="text-[#1E3A8A] font-semibold group-hover:text-[#058DD6] transition-colors duration-300">
                                {tech.name}
                              </span>
                              <span className="text-xs text-[#6B7280] bg-gray-100 px-2 py-1 group-hover:bg-[#EFF6FF] group-hover:text-[#058DD6] transition-all duration-300">
                                {tech.category}
                              </span>
                            </div>
                            <span className="text-[#058DD6] font-bold group-hover:scale-110 transition-transform duration-300">
                              {tech.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 h-3 overflow-hidden relative">
                            <div
                              className={`h-full bg-[#058DD6] transition-all duration-1000 ease-out relative ${
                                hoveredTech === tech.name ? "bg-[#0571B8] animate-pulse" : ""
                              }`}
                              style={{
                                width: `${tech.level}%`,
                                transform: hoveredTech === tech.name ? "scaleY(1.2)" : "scaleY(1)",
                              }}
                            >
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-shimmer"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Innovation Showcase with Enhanced Cards */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">
                <span className="text-[#F59E0B]">イノベーション</span>ラボ
              </h3>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                未来技術の研究開発と実証実験による継続的なイノベーション
              </p>
              <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {innovationShowcase.map((innovation, index) => (
                <div
                  key={innovation.id}
                  className="group bg-white p-8 border border-gray-200 hover:border-[#058DD6] hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 cursor-pointer relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(innovation.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#058DD6] to-[#4FC3F7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                  {/* Floating particles effect */}
                  {hoveredCard === innovation.id && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-[#4FC3F7] rounded-full animate-float"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 200}ms`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  )}

                  <div className="text-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-[#058DD6] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0571B8] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                      <innovation.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                      {/* Ripple effect */}
                      {hoveredCard === innovation.id && (
                        <div className="absolute inset-0 bg-[#4FC3F7] animate-ping opacity-30"></div>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-[#1E3A8A] mb-2 group-hover:text-[#058DD6] transition-colors duration-300">
                      {innovation.title}
                    </h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-2 group-hover:text-[#374151] transition-colors duration-300">
                      {innovation.description}
                    </p>
                    {/* Additional details on hover */}
                    <div
                      className={`text-xs text-[#058DD6] font-medium transition-all duration-500 transform ${
                        hoveredCard === innovation.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      {innovation.details}
                    </div>
                  </div>

                  <div className="mb-4 relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#6B7280] group-hover:text-[#374151] transition-colors duration-300">
                        進捗状況
                      </span>
                      <span className="text-[#058DD6] font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        {innovation.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 overflow-hidden relative">
                      <div
                        className="h-full bg-[#058DD6] transition-all duration-1000 relative group-hover:bg-[#0571B8]"
                        style={{ width: `${innovation.progress}%` }}
                      >
                        {/* Animated progress shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transform -skew-x-12 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center relative z-10">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold transition-all duration-300 transform group-hover:scale-105 ${
                        innovation.status === "導入済み"
                          ? "bg-green-100 text-green-800 group-hover:bg-green-200"
                          : innovation.status === "実証実験"
                            ? "bg-blue-100 text-blue-800 group-hover:bg-blue-200"
                            : innovation.status === "開発中"
                              ? "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200"
                              : "bg-purple-100 text-purple-800 group-hover:bg-purple-200"
                      }`}
                    >
                      {innovation.status}
                    </span>
                  </div>

                  {/* Hover overlay with additional info */}
                  <div
                    className={`absolute inset-0 bg-[#058DD6] bg-opacity-95 flex items-center justify-center transition-all duration-500 transform ${
                      hoveredCard === innovation.id ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="text-center text-white p-4">
                      <Zap className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                      <p className="text-lg font-bold mb-2">詳細を見る</p>
                      <p className="text-sm opacity-90">クリックして詳細情報を表示</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#058DD6] to-[#1E3A8A] relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-4xl lg:text-5xl font-black text-white mb-8">
            最先端技術で
            <br />
            あなたの組織を変革
          </h3>
          <p className="text-xl text-white mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            15年間の実績と最新技術の融合により、政府機関のデジタル変革を確実に成功に導きます。
            まずは技術相談からお気軽にお声がけください。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-[#058DD6] px-10 py-5 font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl transform hover:-translate-y-1 hover:scale-105">
              <Rocket className="w-6 h-6 group-hover:animate-bounce" />
              <span>技術相談を申し込む</span>
            </button>
            <button className="group border-2 border-white text-white px-10 py-5 font-bold text-lg hover:bg-white hover:text-[#058DD6] transition-all duration-300 transform hover:-translate-y-1">
              技術資料ダウンロード
            </button>
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.5;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
