"use client"

interface CaseStudiesSectionProps {
  language?: "ja" | "en"
}

export default function CaseStudiesSection({ language = "ja" }: CaseStudiesSectionProps) {
  const translations = {
    ja: {
      title: "導入事例",
      subtitle: "Datagrid AI電話エージェントを導入した企業の成功事例をご紹介します。",
      viewMore: "もっと見る",
      cases: [
        {
          company: "株式会社テクノロジー",
          industry: "IT・ソフトウェア",
          title: "AI電話エージェントで顧客対応時間を50%短縮！業務効率化により売上が150%向上した事例",
          description: "従来の電話対応では人的リソースが不足し、顧客満足度が低下していました。Datagrid導入後、24時間対応が可能となり、顧客満足度と売上が大幅に改善されました。",
          results: {
            before: "人的リソース不足で対応時間が長い",
            after: "50%時間短縮、150%売上向上"
          },
          metrics: "+150%",
          metricLabel: "売上向上"
        },
        {
          company: "山田商事株式会社",
          industry: "製造・卸売",
          title: "電話注文の自動化で人件費を30%削減。ミスのない注文処理を実現",
          description: "手動での電話注文処理でミスが多発し、顧客クレームが増加していました。AI電話エージェント導入により、正確性と効率性を両立できました。",
          results: {
            before: "手動処理でミスが多発",
            after: "30%人件費削減、ミス0%達成"
          },
          metrics: "-30%",
          metricLabel: "人件費削減"
        },
        {
          company: "サービス株式会社",
          industry: "サービス業",
          title: "夜間・休日対応で機会損失を80%削減。新規顧客獲得数が2倍に増加",
          description: "営業時間外の問い合わせ対応ができず、多くの機会損失が発生していました。Datagrid導入により24時間対応が実現し、新規顧客獲得が飛躍的に向上しました。",
          results: {
            before: "営業時間外の機会損失が多い",
            after: "80%機会損失削減、顧客獲得2倍"
          },
          metrics: "×2",
          metricLabel: "新規顧客獲得"
        }
      ]
    },
    en: {
      title: "Case Studies",
      subtitle: "Discover how companies have achieved success with Datagrid AI phone agent implementation.",
      viewMore: "View More",
      cases: [
        {
          company: "Technology Corp",
          industry: "IT & Software",
          title: "50% reduction in customer response time! 150% sales increase through business efficiency with AI phone agent",
          description: "Traditional phone support suffered from insufficient human resources and declining customer satisfaction. After implementing Datagrid, 24/7 support became possible, dramatically improving customer satisfaction and sales.",
          results: {
            before: "Long response times due to insufficient staff",
            after: "50% time reduction, 150% sales increase"
          },
          metrics: "+150%",
          metricLabel: "Sales Growth"
        },
        {
          company: "Yamada Trading Co.",
          industry: "Manufacturing & Wholesale",
          title: "30% labor cost reduction through automated phone orders. Achieved error-free order processing",
          description: "Manual phone order processing led to frequent errors and increasing customer complaints. AI phone agent implementation achieved both accuracy and efficiency.",
          results: {
            before: "Manual processing with frequent errors",
            after: "30% labor cost reduction, 0% errors"
          },
          metrics: "-30%",
          metricLabel: "Cost Reduction"
        },
        {
          company: "Service Corporation",
          industry: "Service Industry",
          title: "80% reduction in missed opportunities through 24/7 support. New customer acquisition doubled",
          description: "Unable to handle inquiries outside business hours, resulting in significant missed opportunities. Datagrid implementation enabled 24/7 support, dramatically improving new customer acquisition.",
          results: {
            before: "Many missed opportunities outside business hours",
            after: "80% opportunity loss reduction, 2x customer acquisition"
          },
          metrics: "×2",
          metricLabel: "Customer Acquisition"
        }
      ]
    }
  } as const

  const t = translations[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-12 mb-16">
          {t.cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section - Full Coverage */}
                <div className="lg:w-1/3 relative overflow-hidden">
                  <img 
                    src={`/images/data-${index + 1}.svg`}
                    alt={`${caseStudy.company} case study`}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  {/* Metrics Badge */}
                  <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {caseStudy.metrics}
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3 p-8">
                  <div className="mb-4">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{caseStudy.company}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {caseStudy.industry}
                      </span>
                    </div>
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {caseStudy.title}
                    </h4>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {caseStudy.description}
                  </p>

                  {/* Before/After Results */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">Before</span>
                        </div>
                        <span className="text-sm font-medium text-gray-500">課題</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {caseStudy.results.before}
                      </p>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">After</span>
                        </div>
                        <span className="text-sm font-medium text-gray-500">結果</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {caseStudy.results.after}
                      </p>
                    </div>
                  </div>

                  {/* Metric Label */}
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                      {caseStudy.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3">
            {t.viewMore}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}