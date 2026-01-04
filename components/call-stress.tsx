"use client"

interface CallStressSectionProps {
  language?: "ja" | "en"
}

export default function CallStressSection({ language = "ja" }: CallStressSectionProps) {
  const translations = {
    ja: {
      title: "クライアントの電話にストレスを感じる必要はありません",
      subtitle: "Datagrid AI電話エージェントは、クライアントの電話管理に必要な機能を備えています。初期の電話対応と最適化から、複数のクライアントとのやり取りの統合管理まで、誰でもストレスなく簡単に管理できます。",
      cards: {
        busy: {
          title: "忙しくて電話に出られない？",
          description: "私たちのAI電話エージェントは電話を見逃すことがありません。会議中、出張中、または単に対応できない時でも、Datagridがすべてのクライアントの電話にプロフェッショナルかつ迅速に対応し、24時間365日あなたのビジネスの評判を維持します。"
        },
        frustrated: {
          title: "電話にイライラしていませんか？",
          description: "電話関連のストレスやイライラにさようなら。Datagridの知能的なAIが困難な会話、繰り返しの問い合わせ、複雑な顧客の要求を忍耐強く専門的に処理し、あなたが最も重要なことに集中できるようにします。"
        },
        monitoring: {
          title: "電話の監視機能が不足？",
          description: "すべての電話でのやり取りを完全に把握できます。Datagridは包括的な通話監視、詳細な分析、リアルタイムの洞察を提供し、コミュニケーションフローの完全なコントロールと透明性を提供します。"
        }
      }
    },
    en: {
      title: "Don't let client calls stress you",
      subtitle: "Datagrid AI phone agent is equipped with the functionality necessary for managing client calls. From the initial call handling and optimization to the integrated management of multiple client interactions, anyone can easily manage it without stress.",
      cards: {
        busy: {
          title: "Busy can't pick up?",
          description: "Our AI phone agent never misses a call. Whether you're in meetings, traveling, or simply unavailable, Datagrid ensures every client call is answered professionally and promptly, maintaining your business reputation 24/7."
        },
        frustrated: {
          title: "Frustrated about the calls?",
          description: "Say goodbye to call-related stress and frustration. Datagrid's intelligent AI handles difficult conversations, repetitive inquiries, and complex customer requests with patience and expertise, letting you focus on what matters most."
        },
        monitoring: {
          title: "Lacking phone call monitoring?",
          description: "Get complete visibility into all your phone interactions. Datagrid provides comprehensive call monitoring, detailed analytics, and real-time insights, giving you full control and transparency over your communication flow."
        }
      }
    }
  } as const

  const t = translations[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Three Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-12">
          {/* Card 1 - Busy */}
          <div className="text-center space-y-8">
            <div className="mx-auto w-80 h-80 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
              <img 
                src="/images/data.svg" 
                alt="Busy can't pick up illustration"
                className="w-full h-full object-cover object-center scale-90"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {t.cards.busy.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                {t.cards.busy.description}
              </p>
            </div>
          </div>

          {/* Card 2 - Frustrated */}
          <div className="text-center space-y-8">
            <div className="mx-auto w-80 h-80 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
              <img 
                src="/images/data.svg" 
                alt="Frustrated about calls illustration"
                className="w-full h-full object-cover object-center scale-90"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {t.cards.frustrated.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                {t.cards.frustrated.description}
              </p>
            </div>
          </div>

          {/* Card 3 - Monitoring */}
          <div className="text-center space-y-8">
            <div className="mx-auto w-80 h-80 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
              <img 
                src="/images/data.svg" 
                alt="Phone call monitoring illustration"
                className="w-full h-full object-cover object-center scale-90"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {t.cards.monitoring.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                {t.cards.monitoring.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flying Line Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 mb-20">
        <div className="relative h-96">
          {/* Diagonal Dotted Flying Line */}
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 1000 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M50 0 Q300 50 500 100 Q700 150 850 100" 
              stroke="#3B82F6" 
              strokeWidth="3" 
              strokeDasharray="12,12" 
              fill="none"
              opacity="0.7"
            />
            {/* Paper plane pointing toward the image along the line */}
            <g transform="translate(750, 250) rotate(35)">
              <path 
                d="M0 8L16 0L12 8L16 16L0 8Z" 
                fill="#3B82F6" 
                opacity="0.9"
              />
              <path 
                d="M0 8L8 10L12 8" 
                stroke="#3B82F6" 
                strokeWidth="1" 
                fill="none"
              />
            </g>
          </svg>
          
          {/* Big Image at Bottom Right */}
          <div className="absolute bottom-0 right-0 lg:right-20 text-center">
            <div className="w-48 h-48 lg:w-60 lg:h-60 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg border-4 border-blue-100">
              <img 
                src="/images/data.svg" 
                alt="Datagrid coverage illustration"
                className="w-full h-full object-cover object-center scale-75"
              />
            </div>
            
            {/* Statement below image */}
            <div className="mt-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {language === "ja" ? "Datagridがサポートします" : "Datagrid has got you covered"}
              </h3>
              <p className="text-base text-gray-600 max-w-xs mx-auto">
                {language === "ja" 
                  ? "完全なAI電話サポート"
                  : "Complete AI phone support"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}