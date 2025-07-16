"use client"
import type React from "react"
import { useState, useEffect } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  Building2,
  MessageSquare,
  Calendar,
  ArrowUp,
  CheckCircle,
  AlertCircle,
  Globe,
  VoicemailIcon as Fax,
  Navigation,
  Car,
  Train,
  ChevronRight,
} from "lucide-react"
import InteractiveFooter from "../components/interactive-footer"
import Header from "../components/header"

export default function ContactPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    department: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
    preferredContact: "email",
    urgency: "normal",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [activeOffice, setActiveOffice] = useState("tokyo")

  const offices = [
    {
      id: "tokyo",
      name: "本社",
      nameEn: "Tokyo Headquarters",
      address: "〒100-0001 東京都千代田区丸の内1-1-1",
      addressEn: "1-1-1 Marunouchi, Chiyoda-ku, Tokyo 100-0001",
      phone: "03-1234-5678",
      fax: "03-1234-5679",
      email: "tokyo@aegisllp.co.jp",
      hours: "平日 8:30〜17:30",
      manager: "田中 太郎",
      employees: "120名",
      established: "2010年4月",
      services: ["デジタル変革", "セキュリティ", "システム統合", "コンサルティング"],
      access: {
        train: ["JR東京駅 徒歩5分", "地下鉄大手町駅 徒歩3分"],
        car: "首都高速都心環状線 大手町出口より3分",
        parking: "地下駐車場完備（30台）",
      },
      mapUrl:
        "https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3240.827853!2d139.7673068!3d35.6809591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzUxLjUiTiAxMznCsDQ2JzAyLjMiRQ!5e0!3m2!1sja!2sjp!4v1234567890",
    },
    {
      id: "osaka",
      name: "関西支社",
      nameEn: "Kansai Branch",
      address: "〒530-0001 大阪府大阪市北区梅田1-1-1",
      addressEn: "1-1-1 Umeda, Kita-ku, Osaka 530-0001",
      phone: "06-1234-5678",
      fax: "06-1234-5679",
      email: "kansai@aegisllp.co.jp",
      hours: "平日 8:30〜17:30",
      manager: "佐藤 花子",
      employees: "60名",
      established: "2017年10月",
      services: ["デジタル変革", "システム統合", "地方自治体支援"],
      access: {
        train: ["JR大阪駅 徒歩3分", "阪急梅田駅 徒歩5分", "地下鉄梅田駅 徒歩2分"],
        car: "阪神高速梅田出口より5分",
        parking: "提携駐車場あり（割引サービス）",
      },
      mapUrl:
        "https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3280.123456!2d135.4959506!3d34.7024854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzA5LjAiTiAxMzXCsDI5JzQ1LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890",
    },
  ]

  const inquiryTypes = [
    { value: "general", label: "一般的なお問い合わせ", icon: MessageSquare },
    { value: "consultation", label: "技術相談・コンサルティング", icon: User },
    { value: "project", label: "プロジェクトのご依頼", icon: Building2 },
    { value: "support", label: "サポート・保守", icon: CheckCircle },
    { value: "partnership", label: "パートナーシップ", icon: Globe },
    { value: "recruitment", label: "採用・求人", icon: Calendar },
  ]

  const urgencyLevels = [
    { value: "low", label: "低（1週間以内）", color: "text-green-600" },
    { value: "normal", label: "通常（3日以内）", color: "text-blue-600" },
    { value: "high", label: "高（24時間以内）", color: "text-orange-600" },
    { value: "urgent", label: "緊急（即日）", color: "text-red-600" },
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

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        department: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
        preferredContact: "email",
        urgency: "normal",
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

  const currentOffice = offices.find((office) => office.id === activeOffice) || offices[0]

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=400&width=1920&text=Contact+Us+Office"
            alt="Modern office contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-[#058DD6] bg-opacity-90 text-white text-sm font-bold tracking-wider uppercase backdrop-blur-sm">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">お問い合わせ</h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            お気軽にご相談ください。専門スタッフが迅速に対応いたします。
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
            <span>ホーム</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold">お問い合わせ</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-[#058DD6] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">お電話でのお問い合わせ</h3>
              <p className="text-2xl font-bold text-[#058DD6] mb-2">03-1234-5678</p>
              <p className="text-sm text-[#6B7280]">平日 8:30〜17:30</p>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-[#058DD6] flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">メールでのお問い合わせ</h3>
              <p className="text-lg font-semibold text-[#058DD6] mb-2">info@aegisllp.co.jp</p>
              <p className="text-sm text-[#6B7280]">24時間受付</p>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-[#058DD6] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">営業時間</h3>
              <p className="text-lg font-semibold text-[#374151] mb-2">平日 8:30〜17:30</p>
              <p className="text-sm text-[#6B7280]">土日祝日は休業</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8 flex items-center">
                <Send className="w-8 h-8 mr-3 text-[#058DD6]" />
                お問い合わせフォーム
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-3">お問い合わせ種別</label>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center p-3 border cursor-pointer transition-all duration-300 hover:border-[#058DD6] ${
                          formData.inquiryType === type.value
                            ? "border-[#058DD6] bg-[#EFF6FF]"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={formData.inquiryType === type.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <type.icon className="w-5 h-5 mr-2 text-[#058DD6]" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#374151] mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                      placeholder="山田 太郎"
                    />
                  </div>
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
                      placeholder="example@company.co.jp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[#374151] mb-2">
                      会社名・組織名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                      placeholder="株式会社サンプル"
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-semibold text-[#374151] mb-2">
                      部署名
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                      placeholder="情報システム部"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#374151] mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="03-1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#374151] mb-2">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    placeholder="お問い合わせの件名をご入力ください"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#374151] mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="お問い合わせの詳細をご記入ください..."
                  />
                </div>

                {/* Additional Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-semibold text-[#374151] mb-2">
                      希望連絡方法
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    >
                      <option value="email">メール</option>
                      <option value="phone">電話</option>
                      <option value="both">メール・電話両方</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-semibold text-[#374151] mb-2">
                      緊急度
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#058DD6] focus:outline-none transition-colors duration-300"
                    >
                      {urgencyLevels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
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
                        <span>送信する</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span>お問い合わせを受け付けました。担当者より3営業日以内にご連絡いたします。</span>
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

            {/* Office Information */}
            <div className="space-y-8">
              {/* Office Selector */}
              <div className="bg-white p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 flex items-center">
                  <Building2 className="w-8 h-8 mr-3 text-[#058DD6]" />
                  オフィス情報
                </h2>

                <div className="flex space-x-4 mb-8">
                  {offices.map((office) => (
                    <button
                      key={office.id}
                      onClick={() => setActiveOffice(office.id)}
                      className={`px-6 py-3 font-semibold transition-all duration-300 ${
                        activeOffice === office.id
                          ? "bg-[#058DD6] text-white shadow-lg"
                          : "bg-gray-100 text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#058DD6]"
                      }`}
                    >
                      {office.name}
                    </button>
                  ))}
                </div>

                {/* Office Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">{currentOffice.name}</h3>
                    <p className="text-lg text-[#6B7280] mb-4">{currentOffice.nameEn}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-[#058DD6] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-[#1E3A8A]">住所</p>
                          <p className="text-[#374151]">{currentOffice.address}</p>
                          <p className="text-sm text-[#6B7280]">{currentOffice.addressEn}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-[#058DD6] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-[#1E3A8A]">電話番号</p>
                          <p className="text-[#374151]">{currentOffice.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Fax className="w-5 h-5 text-[#058DD6] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-[#1E3A8A]">FAX</p>
                          <p className="text-[#374151]">{currentOffice.fax}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-[#058DD6] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-[#1E3A8A]">メール</p>
                          <p className="text-[#374151]">{currentOffice.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-[#058DD6] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-[#1E3A8A]">営業時間</p>
                          <p className="text-[#374151]">{currentOffice.hours}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-[#1E3A8A] mb-2">支社長</p>
                        <p className="text-[#374151]">{currentOffice.manager}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E3A8A] mb-2">従業員数</p>
                        <p className="text-[#374151]">{currentOffice.employees}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E3A8A] mb-2">設立</p>
                        <p className="text-[#374151]">{currentOffice.established}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E3A8A] mb-2">主要サービス</p>
                        <div className="flex flex-wrap gap-2">
                          {currentOffice.services.map((service, index) => (
                            <span key={index} className="px-3 py-1 bg-[#EFF6FF] text-[#058DD6] text-sm font-medium">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Access Information */}
              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center">
                  <Navigation className="w-6 h-6 mr-3 text-[#058DD6]" />
                  アクセス情報
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Train className="w-5 h-5 text-[#058DD6]" />
                      <h4 className="font-semibold text-[#1E3A8A]">電車でお越しの場合</h4>
                    </div>
                    <ul className="space-y-2 ml-7">
                      {currentOffice.access.train.map((route, index) => (
                        <li key={index} className="text-[#374151] flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#058DD6] rounded-full"></div>
                          <span>{route}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Car className="w-5 h-5 text-[#058DD6]" />
                      <h4 className="font-semibold text-[#1E3A8A]">お車でお越しの場合</h4>
                    </div>
                    <p className="text-[#374151] ml-7">{currentOffice.access.car}</p>
                    <p className="text-sm text-[#6B7280] ml-7 mt-1">{currentOffice.access.parking}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">地図</h3>
                <div className="w-full h-80 bg-gray-200 flex items-center justify-center border">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Interactive Map</p>
                    <p className="text-sm">Google Maps Integration</p>
                    <p className="text-xs mt-2">{currentOffice.address}</p>
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
          className="fixed bottom-8 right-8 bg-[#058DD6] text-white p-4 shadow-xl hover:bg-[#0571B8] transition-all duration-300 z-50 transform hover:-translate-y-2 hover:scale-110"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
