import { Phone, MessageSquare, Users, Clock, Shield, Settings, FileText, CreditCard, User, ArrowRight, Mail, Zap, Building2, Smartphone } from "lucide-react"

interface AboutServiceProps {
  language: "ja" | "en"
}

export default function AboutService({ language }: AboutServiceProps) {
  const translations = {
    ja: {
      sectionTitle: "About service",
      serviceQuestion: "fondesk ってどんなサービス？",
      mainHeadline: "会社・事務所の電話対応をオペレーターが代行し",
      mainSubheadline: "チャットやメールで内容をお知らせします",
      
      processStep1: {
        title: "お客様からの電話",
        description: "お客様が会社に電話をかけます"
      },
      processStep2: {
        title: "オペレーターが対応", 
        description: "ご用件を伺います"
      },
      processStep3: {
        title: "スタッフに通知",
        description: "お電話がありました"
      },
      
      autoForward: {
        title: "指定の番号に自動転送するだけ",
        description: "5分程度のオンライン手続きで明日開通。あとは電話を転送するだけですぐにオペレーターが対応を開始します。"
      },
      
      notifications: {
        title: "いつものチャンネルにお知らせ", 
        description: "電話のお知らせや通知先としてさまざまなサービスに対応しています。チャットに通知すればチーム内の共有もスムーズです。"
      },
      
      integrations: {
        title: "連携サービス"
      },
      
      myPage: {
        title: "便利なマイページ",
        description: "PCやスマートフォンから電話の履歴を確認できます。",
        description2: "電話応対の設定変更や支払いの手続きなどもすべてオンラインで完結します。",
        
        features: {
          callHistory: {
            title: "電話の履歴",
            description: "電話履歴を過去に遡って確認することができます。"
          },
          scheduling: {
            title: "名前や受付時間の変更",
            description: "設定はすぐにオペレーターの対応に反映されます。"
          },
          audioMessages: {
            title: "音声メッセージの指定",
            description: "数値上げた文章または音声データを指定できます。"
          },
          weeklyReport: {
            title: "週刊の振り分け",
            description: "あて先によって振り分け先を変えたりメンションを追加できます。"
          },
          blocklist: {
            title: "ブロックリスト", 
            description: "迷惑電話を事前に着信拒否できます。"
          },
          responseCards: {
            title: "応答カード・なまえ辞書",
            description: "対応に設定つ情報を登録し、電話内容の間違いを減らします。"
          }
        }
      }
    },
    en: {
      sectionTitle: "About service",
      serviceQuestion: "What kind of service is fondesk?",
      mainHeadline: "Operators handle your company's phone responses",
      mainSubheadline: "and notify you via chat and email",
      
      processStep1: {
        title: "Customer Call",
        description: "Customer calls your company"
      },
      processStep2: {
        title: "Operator Responds",
        description: "How may I help you?"
      },
      processStep3: {
        title: "Staff Notification", 
        description: "You received a call"
      },
      
      autoForward: {
        title: "Simply forward to designated number",
        description: "Setup takes about 5 minutes online and goes live tomorrow. Just forward calls and the operator starts handling them immediately."
      },
      
      notifications: {
        title: "Notify through your usual channels",
        description: "We support various services for call notifications and alerts. Chat notifications make team sharing seamless."
      },
      
      integrations: {
        title: "Integrated Services"
      },
      
      myPage: {
        title: "Convenient Dashboard",
        description: "View call history from PC or smartphone.",
        description2: "All call handling settings and billing procedures can be completed online.",
        
        features: {
          callHistory: {
            title: "Call History",
            description: "Review past call records and details."
          },
          scheduling: {
            title: "Name & Hours Settings", 
            description: "Settings are immediately reflected in operator responses."
          },
          audioMessages: {
            title: "Custom Audio Messages",
            description: "Specify custom text or audio data for responses."
          },
          weeklyReport: {
            title: "Call Routing",
            description: "Route calls by destination and add custom mentions."
          },
          blocklist: {
            title: "Block List",
            description: "Block spam calls in advance."
          },
          responseCards: {
            title: "Response Cards & Name Dictionary", 
            description: "Register information to reduce call handling errors."
          }
        }
      }
    }
  }

  const t = translations[language]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-6">{t.sectionTitle}</h2>
          <p className="text-xl text-teal-500 font-medium mb-8">{t.serviceQuestion}</p>
          
          <div className="space-y-3">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{t.mainHeadline}</h3>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{t.mainSubheadline}</h3>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="/images/client.svg" 
                  alt="Customer calling" 
                  className="w-80 h-60 mx-auto object-contain"
                />
                {/* Arrow */}
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path d="M24 1L31 8L24 15M31 8H1" stroke="#FBB040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t.processStep1.title}</h4>
              <p className="text-gray-600">{t.processStep1.description}</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="/images/call.svg" 
                  alt="AI responding to call" 
                  className="w-80 h-60 mx-auto object-contain"
                />
                {/* Speech bubble */}
                <div className="absolute -top-4 right-8 bg-white border-2 border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700">
                  {language === "ja" ? "ご用件を伺います" : "How may I help you?"}
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path d="M24 1L31 8L24 15M31 8H1" stroke="#FBB040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t.processStep2.title}</h4>
              <p className="text-gray-600">{t.processStep2.description}</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="/images/notified.svg" 
                  alt="Staff being notified" 
                  className="w-80 h-60 mx-auto object-contain"
                />
                {/* Speech bubble */}
                <div className="absolute -top-4 right-8 bg-white border-2 border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700">
                  {language === "ja" ? "お電話がありました" : "You received a call"}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t.processStep3.title}</h4>
              <p className="text-gray-600">{t.processStep3.description}</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Auto Forward */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="/images/company.svg" 
                alt="Company" 
                className="w-16 h-16 object-contain"
              />
              <img 
                src="/images/phone.svg" 
                alt="Phone system" 
                className="w-16 h-16 object-contain"
              />
              <img 
                src="/images/fondesk-logo.svg" 
                alt="Fondesk service" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{t.autoForward.title}</h4>
            <p className="text-gray-600 leading-relaxed text-sm">{t.autoForward.description}</p>
          </div>

          {/* Notifications */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{t.notifications.title}</h4>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t.notifications.description}</p>
            
            {/* Integration Icons - Professional service icons */}
            <div className="flex flex-wrap justify-center gap-3">
              {/* Slack */}
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M5.042 15.165c-1.106 0-2.003-.897-2.003-2.003s.897-2.003 2.003-2.003h2.003v2.003c0 1.106-.897 2.003-2.003 2.003z" fill="#E01E5A"/>
                  <path d="M8.048 15.165c0-1.106.897-2.003 2.003-2.003s2.003.897 2.003 2.003v5.042c0 1.106-.897 2.003-2.003 2.003s-2.003-.897-2.003-2.003v-5.042z" fill="#E01E5A"/>
                  <path d="M10.051 5.042c0-1.106.897-2.003 2.003-2.003s2.003.897 2.003 2.003v2.003h-2.003c-1.106 0-2.003-.897-2.003-2.003z" fill="#36C5F0"/>
                  <path d="M10.051 8.048c1.106 0 2.003.897 2.003 2.003s-.897 2.003-2.003 2.003H5.009c-1.106 0-2.003-.897-2.003-2.003s.897-2.003 2.003-2.003h5.042z" fill="#36C5F0"/>
                  <path d="M20.207 10.051c1.106 0 2.003.897 2.003 2.003s-.897 2.003-2.003 2.003h-2.003v-2.003c0-1.106.897-2.003 2.003-2.003z" fill="#2EB67D"/>
                  <path d="M17.201 10.051c0 1.106-.897 2.003-2.003 2.003s-2.003-.897-2.003-2.003V5.009c0-1.106.897-2.003 2.003-2.003s2.003.897 2.003 2.003v5.042z" fill="#2EB67D"/>
                  <path d="M15.198 20.207c0 1.106-.897 2.003-2.003 2.003s-2.003-.897-2.003-2.003v-2.003h2.003c1.106 0 2.003.897 2.003 2.003z" fill="#ECB22E"/>
                  <path d="M15.198 17.201c-1.106 0-2.003-.897-2.003-2.003s.897-2.003 2.003-2.003h5.042c1.106 0 2.003.897 2.003 2.003s-.897 2.003-2.003 2.003h-5.042z" fill="#ECB22E"/>
                </svg>
              </div>
              
              {/* Microsoft Teams */}
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#5059C9">
                  <path d="M21.53 4.306c.686 0 1.235.549 1.235 1.235v7.432c0 .686-.549 1.235-1.235 1.235h-4.706V9.882c0-.686-.549-1.235-1.235-1.235H7.647V4.306c0-.686.549-1.235 1.235-1.235h12.648zm-7.059 0v4.341h-7.412c-.686 0-1.235.549-1.235 1.235v7.412c0 .686.549 1.235 1.235 1.235h7.412v4.341c0 .686.549 1.235 1.235 1.235h7.412c.686 0 1.235-.549 1.235-1.235v-7.412c0-.686-.549-1.235-1.235-1.235h-7.412V5.541c0-.686-.549-1.235-1.235-1.235z"/>
                </svg>
              </div>
              
              {/* Line */}
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#06C755">
                  <path d="M12 0C5.373 0 0 4.837 0 10.8c0 5.338 4.736 9.804 11.127 10.692.433.094.589-.188.589-.417 0-.205-.008-.892-.012-1.613-3.338.724-4.043-1.416-4.043-1.416-.394-1.002-.962-1.269-.962-1.269-.786-.537.059-.526.059-.526.869.061 1.327.892 1.327.892.772 1.323 2.025.94 2.519.719.078-.559.302-.94.549-1.156-1.921-.218-3.94-.961-3.94-4.277 0-.944.337-1.716.892-2.321-.089-.219-.387-1.096.085-2.284 0 0 .726-.232 2.378.887.689-.192 1.428-.288 2.162-.291.734.003 1.473.099 2.162.291 1.652-1.119 2.378-.887 2.378-.887.472 1.188.174 2.065.085 2.284.555.605.892 1.377.892 2.321 0 3.325-2.023 4.056-3.952 4.271.311.268.588.797.588 1.605 0 1.158-.01 2.093-.01 2.378 0 .232.155.515.595.428C19.263 20.598 24 16.135 24 10.8 24 4.837 18.627 0 12 0z"/>
                </svg>
              </div>
              
              {/* Chatwork */}
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#00B04F">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              {/* Discord */}
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#5865F2">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              
              {/* Email */}
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
              
              {/* Webhook */}
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <Zap className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* My Page Section */}
        <div className="text-center mb-12">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">{t.myPage.title}</h4>
          <div className="max-w-2xl mx-auto space-y-2">
            <p className="text-gray-600 text-sm">{t.myPage.description}</p>
            <p className="text-gray-600 text-sm">{t.myPage.description2}</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          
          {/* Call History */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-2">{t.myPage.features.callHistory.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{t.myPage.features.callHistory.description}</p>
            </div>
          </div>

          {/* Scheduling */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-2">{t.myPage.features.scheduling.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{t.myPage.features.scheduling.description}</p>
            </div>
          </div>

          {/* Audio Messages */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-2">{t.myPage.features.audioMessages.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{t.myPage.features.audioMessages.description}</p>
            </div>
          </div>

          {/* Weekly Report */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-2">{t.myPage.features.weeklyReport.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{t.myPage.features.weeklyReport.description}</p>
            </div>
          </div>

          {/* Blocklist */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-2">{t.myPage.features.blocklist.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{t.myPage.features.blocklist.description}</p>
            </div>
          </div>

          {/* Response Cards */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-2">{t.myPage.features.responseCards.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{t.myPage.features.responseCards.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}