"use client"
import { useState, useEffect } from "react"
import { Shield, Lightbulb, Server, Zap, CheckCircle, ArrowRight, ArrowUp, Star, Clock, Award } from "lucide-react"
import Header from "../components/header"
import InteractiveFooter from "../components/interactive-footer"

export default function ServicesPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const serviceCategories = [
    {
      id: "digital-transformation",
      title: "デジタル変革（DX）",
      subtitle: "Digital Transformation",
      icon: Zap,
      image: "/placeholder.svg?height=300&width=500&text=Digital+Transformation",
      description: "政府機関のデジタル化を包括的に支援し、効率的で透明性の高い行政サービスを実現します。",
      keyFeatures: [
        "レガシーシステムの現代化",
        "クラウドファースト戦略",
        "API統合とマイクロサービス化",
        "データ駆動型意思決定支援",
      ],
      services: [
        {
          name: "行政システム現代化",
          description: "レガシーシステムから最新クラウド基盤への移行を段階的に実施",
          features: ["マイクロサービス化", "API統合", "データ移行", "段階的移行計画"],
          benefits: ["運用コスト40%削減", "処理速度70%向上", "可用性99.9%達成", "セキュリティ強化"],
        },
        {
          name: "ペーパーレス化推進",
          description: "文書管理システムとワークフロー自動化による業務効率化",
          features: ["電子決裁システム", "文書検索AI", "承認フロー最適化", "セキュリティ強化"],
          benefits: ["処理時間80%短縮", "紙使用量90%削減", "検索効率95%向上", "コンプライアンス強化"],
        },
        {
          name: "市民サービスポータル",
          description: "オンライン申請・手続きシステムによる市民サービス向上",
          features: ["マイナンバー連携", "モバイル対応", "多言語対応", "アクセシビリティ"],
          benefits: ["利用者満足度95%", "手続き時間50%短縮", "窓口負荷30%軽減", "24時間サービス提供"],
        },
      ],
    },
    {
      id: "security",
      title: "サイバーセキュリティ",
      subtitle: "Cybersecurity Solutions",
      icon: Shield,
      image: "/placeholder.svg?height=300&width=500&text=Cybersecurity+Solutions",
      description: "政府標準に準拠した最高水準のセキュリティ対策で、重要な情報資産を保護します。",
      keyFeatures: [
        "NISC準拠セキュリティ基盤",
        "ゼロトラスト・アーキテクチャ",
        "24時間365日監視体制",
        "インシデント対応・復旧支援",
      ],
      services: [
        {
          name: "政府標準セキュリティ対策",
          description: "NISC準拠のセキュリティ基盤構築と運用",
          features: ["多層防御システム", "侵入検知・防止", "ログ監視・分析", "インシデント対応"],
          benefits: ["セキュリティ事故0件", "脅威検知率99%", "復旧時間90%短縮", "コンプライアンス100%"],
        },
        {
          name: "ゼロトラスト実装",
          description: "境界防御に依存しない新世代セキュリティモデル",
          features: ["ID・アクセス管理", "デバイス認証", "ネットワーク分離", "継続的監視"],
          benefits: ["不正アクセス防止", "内部脅威対策", "リモートワーク対応", "セキュリティ可視化"],
        },
        {
          name: "セキュリティ監査・診断",
          description: "定期的な脆弱性評価と改善提案",
          features: ["ペネトレーションテスト", "脆弱性スキャン", "セキュリティ教育", "BCP策定"],
          benefits: ["リスク可視化", "対策優先度明確化", "セキュリティ意識向上", "事業継続性確保"],
        },
      ],
    },
    {
      id: "infrastructure",
      title: "システム基盤構築",
      subtitle: "Infrastructure Development",
      icon: Server,
      image: "/placeholder.svg?height=300&width=500&text=Infrastructure+Development",
      description: "高可用性・拡張性・セキュリティを兼ね備えた次世代ITインフラを構築します。",
      keyFeatures: ["クラウドネイティブ設計", "高可用性・災害復旧対応", "自動スケーリング機能", "運用自動化・監視体制"],
      services: [
        {
          name: "クラウドインフラ設計",
          description: "AWS・Azure・GCPを活用した最適基盤設計",
          features: ["高可用性設計", "自動スケーリング", "災害復旧対応", "コスト最適化"],
          benefits: ["可用性99.99%", "運用コスト30%削減", "復旧時間95%短縮", "性能向上200%"],
        },
        {
          name: "データセンター統合",
          description: "複数拠点システムの統合・最適化",
          features: ["仮想化基盤", "ストレージ統合", "ネットワーク設計", "運用自動化"],
          benefits: ["運用効率50%向上", "電力消費40%削減", "管理コスト60%削減", "パフォーマンス向上"],
        },
        {
          name: "基幹システム開発",
          description: "業務特化型システムの設計・開発",
          features: ["要件定義支援", "アジャイル開発", "品質保証", "保守・運用"],
          benefits: ["開発期間30%短縮", "品質向上", "保守性向上", "ユーザビリティ改善"],
        },
      ],
    },
    {
      id: "consulting",
      title: "ITコンサルティング",
      subtitle: "IT Consulting & Strategy",
      icon: Lightbulb,
      image: "/placeholder.svg?height=300&width=500&text=IT+Consulting",
      description: "戦略的なIT活用により、組織の変革と競争力強化を支援します。",
      keyFeatures: ["IT戦略策定・実行支援", "業務プロセス改善", "新技術導入・定着支援", "人材育成・組織変革"],
      services: [
        {
          name: "IT戦略策定",
          description: "中長期IT計画の立案・実行支援",
          features: ["現状分析・評価", "ロードマップ作成", "予算計画", "効果測定"],
          benefits: ["戦略的IT投資", "ROI向上", "リスク軽減", "競争力強化"],
        },
        {
          name: "業務プロセス改善",
          description: "業務効率化とデジタル化推進",
          features: ["業務分析・可視化", "プロセス再設計", "RPA導入", "効果検証"],
          benefits: ["業務効率40%向上", "処理時間60%短縮", "エラー率90%削減", "従業員満足度向上"],
        },
        {
          name: "技術導入支援",
          description: "新技術の評価・導入・定着支援",
          features: ["技術調査・検証", "導入計画策定", "研修・教育", "運用定着化"],
          benefits: ["技術活用率向上", "導入リスク軽減", "スキル向上", "イノベーション創出"],
        },
      ],
    },
  ]

  const implementationProcess = [
    {
      step: "01",
      title: "現状分析・要件定義",
      description: "お客様の現状システムと業務プロセスを詳細に分析し、課題を明確化します。",
      duration: "2-4週間",
      deliverables: ["現状分析レポート", "要件定義書", "課題整理表", "改善提案書"],
    },
    {
      step: "02",
      title: "戦略策定・計画立案",
      description: "分析結果を基に、最適なソリューション戦略と実装計画を策定します。",
      duration: "2-3週間",
      deliverables: ["IT戦略書", "実装ロードマップ", "予算計画書", "リスク評価書"],
    },
    {
      step: "03",
      title: "設計・開発",
      description: "承認された計画に基づき、システム設計と開発を実施します。",
      duration: "8-24週間",
      deliverables: ["システム設計書", "開発成果物", "テスト結果", "品質保証書"],
    },
    {
      step: "04",
      title: "テスト・検証",
      description: "包括的なテストを実施し、品質と性能を検証します。",
      duration: "2-4週間",
      deliverables: ["テスト計画書", "テスト結果報告", "性能評価書", "セキュリティ監査"],
    },
    {
      step: "05",
      title: "導入・移行",
      description: "本番環境への導入と既存システムからの移行を安全に実施します。",
      duration: "1-2週間",
      deliverables: ["導入手順書", "移行完了報告", "運用マニュアル", "緊急時対応手順"],
    },
    {
      step: "06",
      title: "運用・保守",
      description: "継続的な運用サポートと定期的な改善提案を提供します。",
      duration: "継続",
      deliverables: ["運用レポート", "保守作業報告", "改善提案書", "定期健康診断"],
    },
  ]

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

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center overflow-hidden mt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920&text=Modern+Office+Technology"
            alt="Modern office with technology"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            {/* Animated Content from Left */}
            <div className="animate-slide-in-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#058DD6] bg-opacity-90 text-white text-sm font-semibold tracking-wide uppercase">
                  Our Services
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                デジタル変革で
                <br />
                <span className="text-[#4FC3F7]">未来を創造</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                政府機関・自治体のデジタル変革を支援する
                <br />
                包括的なITソリューションサービス
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#058DD6] text-white px-8 py-4 font-semibold text-lg hover:bg-[#0571B8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
                  <span>サービス詳細を見る</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#058DD6] transition-all duration-300 backdrop-blur-sm">
                  無料相談を申し込む
                </button>
              </div>
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#4FC3F7] mb-2">500+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">プロジェクト実績</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#4FC3F7] mb-2">15年</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">継続実績</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#4FC3F7] mb-2">98%</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">顧客満足度</div>
                </div>
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
          {/* Services Overview */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">私たちのサービス</h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
                15年間の実績に基づく、政府機関専門のデジタルソリューションで お客様の課題解決をサポートします
              </p>
              <div className="w-24 h-1 bg-[#058DD6] mx-auto mt-6"></div>
            </div>

            {/* Service Categories Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
                >
                  {/* Image Header */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <category.icon className="w-8 h-8 mb-2" />
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-lg opacity-90">{category.subtitle}</p>
                    </div>
                  </div>

                  {/* Category Content */}
                  <div className="p-8">
                    <p className="text-[#374151] mb-6 leading-relaxed">{category.description}</p>

                    {/* Key Features */}
                    <div className="space-y-3 mb-6">
                      {category.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                          <span className="text-[#374151]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Services Preview */}
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-semibold text-[#1E3A8A] mb-4">主要サービス</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {category.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="bg-gray-50 p-4 hover:bg-gray-100 transition-colors duration-300"
                          >
                            <h5 className="font-semibold text-[#1E3A8A] mb-2">{service.name}</h5>
                            <p className="text-sm text-[#6B7280] mb-3">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                                <span
                                  key={benefitIndex}
                                  className="inline-flex items-center space-x-1 text-xs bg-[#EFF6FF] text-[#058DD6] px-2 py-1"
                                >
                                  <Star className="w-3 h-3" />
                                  <span>{benefit}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className="w-full bg-[#058DD6] text-white py-3 font-semibold hover:bg-[#0571B8] transition-all duration-300 flex items-center justify-center space-x-2 group">
                        <span>詳細を見る</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Process */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">導入プロセス</h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
                確実で効率的なプロジェクト実行のための標準化されたプロセス
              </p>
              <div className="w-24 h-1 bg-[#058DD6] mx-auto mt-6"></div>
            </div>

            <div className="space-y-8">
              {implementationProcess.map((step, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
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

                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-[#1E3A8A] mb-4 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-[#F59E0B]" />
                          主な成果物
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="bg-[#EFF6FF] p-3 text-center">
                              <span className="text-sm text-[#058DD6] font-medium">{deliverable}</span>
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

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#058DD6] to-[#1E3A8A] text-white p-12 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">お客様のプロジェクトを成功に導きます</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              15年間の実績と専門知識を活かし、お客様の要件に最適なソリューションを提供いたします。
              まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#058DD6] px-8 py-4 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2">
                <span>無料相談を申し込む</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#058DD6] transition-all duration-300">
                資料ダウンロード
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
