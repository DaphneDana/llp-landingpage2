"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, FileText, MapPin, Phone, Mail } from "lucide-react"

export default function InteractiveFooter() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      if (!footerRef.current) return

      setIsScrolling(true)
      clearTimeout(scrollTimeout)

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)

      const footerRect = footerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const footerTop = footerRect.top

      // Calculate scroll progress when footer comes into view
      if (footerTop <= windowHeight) {
        const scrollDistance = windowHeight - footerTop
        const maxScroll = 600
        const progress = Math.min(Math.max(scrollDistance / maxScroll, 0), 1)

        setScrollProgress(progress)
        setIsVideoVisible(progress > 0.1)

        // Control video playback
        if (videoRef.current) {
          if (progress > 0.2 && videoRef.current.paused) {
            videoRef.current.play().catch(() => {
              // Handle autoplay restrictions
            })
          } else if (progress <= 0.1 && !videoRef.current.paused) {
            videoRef.current.pause()
          }
        }
      } else {
        setScrollProgress(0)
        setIsVideoVisible(false)
        if (videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause()
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <>
      {/* Full-Page Video Background */}
      <div
        className="fixed inset-0 z-0 overflow-hidden"
        style={{
          opacity: scrollProgress * 0.9,
          transform: `scale(${1 + scrollProgress * 0.02})`,
          transition: isScrolling ? "none" : "transform 0.3s ease-out, opacity 0.3s ease-out",
        }}
      >
        <video ref={videoRef} className="w-full h-full object-cover" muted loop playsInline preload="metadata">
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          {/* Fallback background */}
          <div className="w-full h-full bg-gradient-to-br from-[#058DD6] to-[#4A90E2]"></div>
        </video>

        {/* Video Overlay Content - Full Page Layout */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center px-8"
          style={{
            opacity: scrollProgress > 0.3 ? (scrollProgress - 0.3) * 1.5 : 0,
            transform: `translateY(${(1 - scrollProgress) * 20}px)`,
            transition: isScrolling ? "none" : "transform 0.3s ease-out, opacity 0.3s ease-out",
          }}
        >
          {/* Elegant Script Typography - Centered */}
          <div className="text-center mb-8">
            <h2
              className="text-8xl lg:text-9xl font-bold text-[#058DD6] opacity-95 mb-4"
              style={{
                fontFamily: "'Dancing Script', cursive",
                textShadow: "3px 3px 6px rgba(0,0,0,0.4)",
              }}
            >
              Join us!
            </h2>

            {/* Japanese Tagline */}
            <div className="bg-black bg-opacity-50 px-8 py-4 backdrop-blur-sm inline-block">
              <h3
                className="text-3xl lg:text-4xl font-bold text-white"
                style={{
                  textShadow: "3px 3px 6px rgba(0,0,0,0.9)",
                }}
              >
                AEGIS LLPだから、できることがある。
              </h3>
            </div>
          </div>

          {/* CTA Cards - Centered at Bottom */}
          <div className="flex gap-6 justify-center items-center mt-16">
            {/* Recruitment Card - Sharp Corners, Smaller Size */}
            <div
              className="bg-white bg-opacity-95 backdrop-blur-sm p-6 w-64 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{
                transform: `translateY(${(1 - scrollProgress) * 20}px) scale(${0.85 + scrollProgress * 0.15})`,
                transition: isScrolling ? "none" : "transform 0.3s ease-out",
              }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-[#058DD6] bg-opacity-20 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-[#058DD6]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1E3A8A]">採用情報</h4>
                  <p className="text-xs text-[#6B7280]">Requirements</p>
                </div>
              </div>
            </div>

            {/* Entry Form Card - Sharp Corners, Smaller Size */}
            <div
              className="bg-[#058DD6] backdrop-blur-sm p-6 w-64 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{
                transform: `translateY(${(1 - scrollProgress) * 20}px) scale(${0.85 + scrollProgress * 0.15})`,
                transition: isScrolling ? "none" : "transform 0.3s ease-out",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-white" />
                  <div>
                    <h4 className="text-lg font-bold text-white">ENTRY</h4>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Footer */}
      <footer
        ref={footerRef}
        className="relative z-10 bg-white border-t border-gray-200"
        style={{
          transform: `translateY(${-scrollProgress * 400}px)`,
          minHeight: `${300 + scrollProgress * 600}px`,
          boxShadow: scrollProgress > 0 ? "0 -10px 30px rgba(0,0,0,0.2)" : "none",
          transition: isScrolling
            ? "none"
            : "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), min-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease-out",
        }}
      >
        <div className="max-w-6xl mx-auto px-8 py-12">
          {" "}
          {/* Reduced max-width and increased padding */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Logo & Company Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#058DD6] to-[#4A90E2] flex items-center justify-center">
                  {" "}
                  {/* Removed rounded corners */}
                  <div className="w-8 h-8 border-2 border-white transform rotate-45"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A]">AEGIS LLP</h3>
                  <p className="text-sm text-[#6B7280]">株式会社</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-[#6B7280]">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>
                    〒100-0001
                    <br />
                    東京都千代田区丸の内1-1-1
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <p>TEL.03-1234-5678</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <p>info@aegisllp.co.jp</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Home */}
              <div>
                <h4 className="text-sm font-medium text-[#058DD6] mb-4">— ホーム</h4>
                <ul className="space-y-3">
                  {["私たちの仕事", "施工実績", "ニュース情報"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-[#6B7280] hover:text-[#058DD6] transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Recruitment */}
              <div>
                <h4 className="text-sm font-medium text-[#058DD6] mb-4">— 採用情報</h4>
                <ul className="space-y-3">
                  {["職種紹介", "募集要項", "先輩社員インタビュー", "エントリーフォーム"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-[#6B7280] hover:text-[#058DD6] transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Legal */}
              <div>
                <h4 className="text-sm font-medium text-[#058DD6] mb-4">— プライバシーポリシー</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-[#6B7280] hover:text-[#058DD6] transition-colors duration-300">
                      サイトマップ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Additional Content When Expanded */}
          <div
            className="mt-12"
            style={{
              opacity: scrollProgress > 0.3 ? (scrollProgress - 0.3) * 1.5 : 0,
              transform: `translateY(${(1 - scrollProgress) * 20}px)`,
              transition: isScrolling ? "none" : "transform 0.4s ease-out, opacity 0.4s ease-out",
            }}
          >
            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#EFF6FF] p-4">
                  {" "}
                  {/* Removed rounded corners */}
                  <h5 className="font-semibold text-[#1E3A8A] mb-2">デジタル変革</h5>
                  <p className="text-xs text-[#6B7280]">政府機関のDXを推進</p>
                </div>
                <div className="bg-[#EFF6FF] p-4">
                  {" "}
                  {/* Removed rounded corners */}
                  <h5 className="font-semibold text-[#1E3A8A] mb-2">セキュリティ</h5>
                  <p className="text-xs text-[#6B7280]">最高水準の情報保護</p>
                </div>
                <div className="bg-[#EFF6FF] p-4">
                  {" "}
                  {/* Removed rounded corners */}
                  <h5 className="font-semibold text-[#1E3A8A] mb-2">システム統合</h5>
                  <p className="text-xs text-[#6B7280]">効率的なシステム構築</p>
                </div>
                <div className="bg-[#EFF6FF] p-4">
                  {" "}
                  {/* Removed rounded corners */}
                  <h5 className="font-semibold text-[#1E3A8A] mb-2">コンサルティング</h5>
                  <p className="text-xs text-[#6B7280]">専門的な技術支援</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-[#F3F4F6] py-4">
          <div className="max-w-6xl mx-auto px-8">
            {" "}
            {/* Reduced max-width and increased padding */}
            <p className="text-center text-xs text-[#9CA3AF]">©2025 AEGIS LLP. PRODUCED BY Leapy</p>
          </div>
        </div>
      </footer>
    </>
  )
}
