"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ChevronLeft, ChevronRight, Briefcase, Code, Rocket, CheckCircle, AlertTriangle, Send, Settings, Activity, Clock, TrendingUp, Users, Edit, Power, PowerOff, LogIn, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FitAnalyzerPresentation() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  // Scroll to the top whenever the step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  return (
    <div className="w-full relative pb-40">
      <main className="w-full max-w-7xl mx-auto flex flex-col items-center p-4 md:p-8 pt-8">
        
        {/* VIEW 0: The Landing Page */}
        {currentStep === 0 && (
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-700 min-h-[70vh]">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-md">
              <Sparkles className="w-4 h-4" /> AI-Powered Business Fit
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
              Discover Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black/50">Perfect Business Match</span>
            </h1>
            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Our AI asks adaptive questions about your skills, budget, and goals to find the most suitable business ideas for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => setCurrentStep(1)}
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Start Assessment <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/login"
                className="px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 border-2 border-black/20 hover:border-black transition-all bg-white text-black shadow-sm"
              >
                <LogIn className="w-5 h-5" /> Login
              </Link>
            </div>
          </div>
        )}

        {/* VIEW 1: Stage 1 Chat (Context Gathering) */}
        {currentStep === 1 && (
          <div className="w-full max-w-3xl mx-auto flex flex-col animate-in fade-in duration-500 mt-4 md:mt-8">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Stage 1: Context Gathering</h2>
              <p className="text-black/60 font-medium">Simulated automated interaction</p>
            </div>
            <div className="glass w-full flex flex-col overflow-hidden shadow-2xl rounded-2xl border border-black/10">
              <div className="flex-1 p-6 flex flex-col gap-6" style={{ minHeight: '400px' }}>
                
                {/* Message 1 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="p-4 rounded-2xl max-w-[80%] bg-white text-black border border-black/10 rounded-tl-sm shadow-sm font-medium">
                    Hi! Welcome to the Business Fit Analyzer. To get started, what is your primary goal?
                  </div>
                </div>

                {/* Message 2 */}
                <div className="flex gap-4 flex-row-reverse">
                  <div className="p-4 rounded-2xl max-w-[80%] bg-black text-white rounded-tr-sm shadow-md font-medium">
                    I want to build a startup.
                  </div>
                </div>

                {/* Message 3 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="p-4 rounded-2xl max-w-[80%] bg-white text-black border border-black/10 rounded-tl-sm shadow-sm font-medium">
                    Got it. What is your budget, and where are you located?
                  </div>
                </div>

                {/* Message 4 */}
                <div className="flex gap-4 flex-row-reverse">
                  <div className="p-4 rounded-2xl max-w-[80%] bg-black text-white rounded-tr-sm shadow-md font-medium">
                    I have ₹2,00,000 and I am based in Manipal.
                  </div>
                </div>

                {/* Message 5 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="p-4 rounded-2xl max-w-[80%] bg-white text-black border border-black/10 rounded-tl-sm shadow-sm font-medium">
                    Great student hub. What are your core skills?
                  </div>
                </div>

                {/* Message 6 */}
                <div className="flex gap-4 flex-row-reverse">
                  <div className="p-4 rounded-2xl max-w-[80%] bg-black text-white rounded-tr-sm shadow-md font-medium">
                    Coding and Communication.
                  </div>
                </div>
              </div>

              {/* Disabled Input */}
              <div className="p-4 border-t border-black/10 bg-white/60">
                <div className="relative flex items-center opacity-60 pointer-events-none">
                  <input
                    type="text"
                    disabled
                    placeholder="Chat interaction is disabled in presentation mode..."
                    className="w-full pr-14 pl-6 py-4 rounded-full text-base border-2 border-transparent bg-white shadow-inner text-black/60 font-medium font-mono text-sm"
                  />
                  <button disabled className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-md">
                    <Send className="w-5 h-5 ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: Recommendations Dashboard (Stage 1 Output) */}
        {currentStep === 2 && (
          <div className="w-full max-w-5xl mx-auto flex flex-col animate-in slide-in-from-right-8 duration-500 mt-4 md:mt-8">
            <div className="text-center mb-10">
              <div className="inline-block bg-black/5 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-black/10">Stage 1 Output</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Recommended Ideas</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="glass p-8 rounded-3xl border border-black/10 flex flex-col gap-4 opacity-60 hover:opacity-100 transition-opacity grayscale-[30%]">
                <div className="w-14 h-14 rounded-2xl bg-black/10 text-black flex items-center justify-center">
                  <Rocket className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Student App</h3>
                  <div className="flex flex-col gap-1 mt-4">
                    <p className="text-black/80 font-medium bg-white/50 px-3 py-1.5 rounded-lg border border-black/5">Effort: <span className="font-bold text-black">High</span></p>
                    <p className="text-black/80 font-medium bg-white/50 px-3 py-1.5 rounded-lg border border-black/5">Capital: <span className="font-bold text-black">Medium</span></p>
                  </div>
                </div>
              </div>

              {/* Card 2 (Top Match) */}
              <div className="glass p-8 rounded-3xl border-2 border-black flex flex-col gap-4 relative shadow-2xl transform scale-105 z-10 bg-white/90">
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-widest shadow-sm">Top Match: 81%</div>
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shadow-lg">
                  <Code className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2 leading-tight mt-2">Freelancing <br/><span className="text-xl font-bold text-black/70">(Web/App Dev)</span></h3>
                  <div className="flex flex-col gap-1 mt-4">
                    <p className="text-black font-medium bg-black/5 px-3 py-1.5 rounded-lg border border-black/10">Effort: <span className="font-black text-black">Flexible</span></p>
                    <p className="text-black font-medium bg-black/5 px-3 py-1.5 rounded-lg border border-black/10">Capital: <span className="font-black text-black">Low</span></p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass p-8 rounded-3xl border border-black/10 flex flex-col gap-4 opacity-60 hover:opacity-100 transition-opacity grayscale-[30%]">
                <div className="w-14 h-14 rounded-2xl bg-black/10 text-black flex items-center justify-center">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">SaaS</h3>
                  <div className="flex flex-col gap-1 mt-4">
                    <p className="text-black/80 font-medium bg-white/50 px-3 py-1.5 rounded-lg border border-black/5">Effort: <span className="font-bold text-black">Very High</span></p>
                    <p className="text-black/80 font-medium bg-white/50 px-3 py-1.5 rounded-lg border border-black/5">Capital: <span className="font-bold text-black">High</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: The Final Report */}
        {currentStep === 3 && (
          <div className="w-full max-w-5xl mx-auto flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700 mt-4 md:mt-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-black/5 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-black/10">Stage 2 Validation Output</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Final Validation Report</h2>
              <p className="text-2xl font-bold text-black/60">Freelancing (Web/App Dev)</p>
            </div>

            <div className="glass p-6 md:p-8 rounded-2xl border-2 border-black/10 mb-8 bg-white/80 shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <span className="font-bold text-lg uppercase tracking-wider text-black/60">Verdict:</span>
                <span className="bg-green-100 text-green-900 border-2 border-green-300 px-5 py-2 rounded-xl font-black text-xl flex items-center gap-2 shadow-sm">
                  <CheckCircle className="w-6 h-6" /> STRONG FIT (81/100)
                </span>
                <span className="text-black/80 italic font-medium text-lg leading-snug max-w-md">
                  &quot;Good choice for a starting point, but partial mismatch with long-term startup goal.&quot;
                </span>
              </div>
            </div>

            <div className="glass overflow-hidden rounded-2xl border border-black/10 mb-8 shadow-xl">
              <div className="bg-black text-white p-4">
                <h3 className="font-bold tracking-widest uppercase text-sm">Scoring Breakdown</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-black/5 text-black border-b border-black/10">
                      <th className="p-4 font-bold text-sm tracking-wide">Factor</th>
                      <th className="p-4 font-bold text-sm tracking-wide">Max Score</th>
                      <th className="p-4 font-bold text-sm tracking-wide">Your Score</th>
                      <th className="p-4 font-bold text-sm tracking-wide">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10 text-base font-medium">
                    <tr className="hover:bg-black/5 bg-white transition-colors">
                      <td className="p-4 flex items-center gap-3"><span className="text-2xl">💰</span> Budget Fit</td>
                      <td className="p-4 text-black/50 font-bold">15</td>
                      <td className="p-4 font-black text-lg">15</td>
                      <td className="p-4 text-black/80">Freelancing needs very low investment</td>
                    </tr>
                    <tr className="hover:bg-black/5 bg-white transition-colors">
                      <td className="p-4 flex items-center gap-3"><span className="text-2xl">🧠</span> Skill Match</td>
                      <td className="p-4 text-black/50 font-bold">20</td>
                      <td className="p-4 font-black text-lg">17</td>
                      <td className="p-4 text-black/80">Coding present, but not advanced yet</td>
                    </tr>
                    <tr className="hover:bg-black/5 bg-white transition-colors">
                      <td className="p-4 flex items-center gap-3"><span className="text-2xl">📍</span> Location Advantage</td>
                      <td className="p-4 text-black/50 font-bold">10</td>
                      <td className="p-4 font-black text-lg">9</td>
                      <td className="p-4 text-black/80">Manipal = student + startup ecosystem</td>
                    </tr>
                    <tr className="hover:bg-black/5 bg-white transition-colors">
                      <td className="p-4 flex items-center gap-3"><span className="text-2xl">📁</span> Experience Level</td>
                      <td className="p-4 text-black/50 font-bold">15</td>
                      <td className="p-4 font-black text-lg">10</td>
                      <td className="p-4 text-black/80">Only student projects</td>
                    </tr>
                    <tr className="hover:bg-black/5 bg-white transition-colors">
                      <td className="p-4 flex items-center gap-3"><span className="text-2xl">📢</span> Client Acquisition</td>
                      <td className="p-4 text-black/50 font-bold">15</td>
                      <td className="p-4 font-black text-lg">13</td>
                      <td className="p-4 text-black/80">Good approach (network + social)</td>
                    </tr>
                    <tr className="hover:bg-black/5 bg-white transition-colors">
                      <td className="p-4 flex items-center gap-3"><span className="text-2xl">⏱️</span> Time Commitment</td>
                      <td className="p-4 text-black/50 font-bold">10</td>
                      <td className="p-4 font-black text-lg">7</td>
                      <td className="p-4 text-black/80">Flexible, not fully committed</td>
                    </tr>
                    <tr className="hover:bg-orange-50 bg-white transition-colors">
                      <td className="p-4 flex items-center gap-3"><span className="text-2xl">🎯</span> Goal Alignment</td>
                      <td className="p-4 text-black/50 font-bold">15</td>
                      <td className="p-4 font-black text-lg text-orange-600">10</td>
                      <td className="p-4 text-orange-600 font-bold italic">Freelancing ≠ startup (partial mismatch)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 md:p-8 rounded-2xl border-l-8 border-l-orange-500 shadow-xl border border-black/10 bg-white/90">
                <h3 className="text-xl font-black flex items-center gap-3 mb-6 uppercase tracking-wider text-black/80">
                  <AlertTriangle className="w-6 h-6 text-orange-500" /> Top Risks
                </h3>
                <ol className="list-decimal list-inside space-y-4 text-black font-semibold text-lg">
                  <li className="pl-2">Inconsistent Income.</li>
                  <li className="pl-2">Skill Gap vs Market.</li>
                  <li className="pl-2">Time Discipline.</li>
                </ol>
              </div>

              <div className="glass p-6 md:p-8 rounded-2xl border-l-8 border-l-red-500 shadow-xl border border-black/10 bg-white/90">
                <h3 className="text-xl font-black flex items-center gap-3 mb-6 uppercase tracking-wider text-black/80">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Readiness Gaps
                </h3>
                <ul className="space-y-4 text-black font-semibold text-lg">
                  <li className="flex gap-3"><span className="text-red-500 mt-1">•</span> Need real-world projects.</li>
                  <li className="flex gap-3"><span className="text-red-500 mt-1">•</span> Positioning gap (What exactly are you selling?).</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: Admin Dashboard */}
        {currentStep === 4 && (
          <div className="w-full max-w-6xl mx-auto flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700 mt-4 md:mt-8">
            <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-2 flex items-center justify-center md:justify-start gap-3">
                  <Settings className="w-8 h-8" /> Admin Control Center
                </h2>
                <p className="text-xl text-black/60 font-medium">Manage categories, rules, and view system trends.</p>
              </div>
            </div>

            {/* Top Section: System Trends */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass p-6 rounded-2xl border border-black/10 flex items-center gap-4 bg-white/80 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-black/5 text-black flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-black/50 uppercase tracking-widest">Total Sessions</p>
                  <p className="text-3xl font-black">1,245</p>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl border border-black/10 flex items-center gap-4 bg-white/80 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-black/5 text-black flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-black/50 uppercase tracking-widest">Top Recommended</p>
                  <p className="text-xl font-bold leading-tight">Freelancing<br/><span className="text-sm font-medium text-black/60">(Web/App)</span></p>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl border border-black/10 flex items-center gap-4 bg-white/80 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-black/5 text-black flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-black/50 uppercase tracking-widest">Avg. Completion Time</p>
                  <p className="text-3xl font-black">3m 12s</p>
                </div>
              </div>
            </div>

            {/* Bottom Section: Category Management */}
            <div className="glass overflow-hidden rounded-2xl border border-black/10 shadow-xl bg-white/90">
              <div className="bg-black text-white p-5 border-b border-black/10 flex items-center justify-between xl:px-8">
                <h3 className="font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Business Category Management
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-black/5 text-black border-b border-black/10">
                      <th className="p-4 xl:px-8 font-bold text-sm tracking-wide">Category Name</th>
                      <th className="p-4 font-bold text-sm tracking-wide">Status</th>
                      <th className="p-4 font-bold text-sm tracking-wide">Key Scoring Rules</th>
                      <th className="p-4 xl:px-8 font-bold text-sm tracking-wide text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10 text-base font-medium">
                    <tr className="hover:bg-black/5 bg-white transition-colors">
                      <td className="p-4 xl:px-8 font-bold">Freelancing (Web/App Dev)</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 border-2 border-green-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Active</span>
                      </td>
                      <td className="p-4 text-black/70 text-sm font-semibold">Skills: Coding, Budget: &lt; 10k</td>
                      <td className="p-4 xl:px-8 flex justify-end gap-2">
                        <button className="p-2 bg-black/5 hover:bg-black/10 border border-black/10 rounded-lg text-black transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg text-red-600 transition-colors" title="Deactivate">
                          <PowerOff className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-black/5 bg-white transition-colors">
                      <td className="p-4 xl:px-8 font-bold">Restaurant Franchise</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 border-2 border-green-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Active</span>
                      </td>
                      <td className="p-4 text-black/70 text-sm font-semibold">Budget: &gt; 10L, Interest: Food</td>
                      <td className="p-4 xl:px-8 flex justify-end gap-2">
                        <button className="p-2 bg-black/5 hover:bg-black/10 border border-black/10 rounded-lg text-black transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg text-red-600 transition-colors" title="Deactivate">
                          <PowerOff className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-black/5 bg-white transition-colors opacity-75">
                      <td className="p-4 xl:px-8 font-bold text-black/70">Cloud Kitchen</td>
                      <td className="p-4">
                        <span className="bg-gray-100 text-gray-500 border-2 border-gray-200 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Inactive</span>
                      </td>
                      <td className="p-4 text-black/60 text-sm font-semibold">Budget: 2L-5L, Interest: Food</td>
                      <td className="p-4 xl:px-8 flex justify-end gap-2">
                        <button className="p-2 bg-black/5 hover:bg-black/10 border border-black/10 rounded-lg text-black transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg text-green-700 transition-colors" title="Activate">
                          <Power className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Spacer to guarantee scroll clearance above fixed navbar */}
      <div className="h-32 w-full shrink-0 pointer-events-none"></div>

      {/* Global Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t-2 border-black/10 px-4 md:px-8 py-4 flex justify-between items-center z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all border-2 border-black/20 hover:border-black hover:bg-black/5 text-black disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft className="w-5 h-5" /> Previous
        </button>
        
        <div className="hidden md:flex flex-col items-center">
          <span className="text-xs font-black uppercase tracking-widest text-black/40 mb-2">Step {currentStep + 1} of 5</span>
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4].map(step => (
              <button 
                key={step}
                onClick={() => setCurrentStep(step)}
                className="group relative flex items-center justify-center p-2 -m-2"
                aria-label={`Go to step ${step + 1}`}
              >
                <div 
                  className={`h-2.5 rounded-full transition-all duration-500 ${currentStep === step ? 'w-10 bg-black' : 'w-2.5 bg-black/20 group-hover:bg-black/40'}`}
                />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentStep === 4}
          className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all bg-black text-white hover:bg-black/80 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none disabled:hover:scale-100 shadow-lg shadow-black/20"
        >
          Next <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
