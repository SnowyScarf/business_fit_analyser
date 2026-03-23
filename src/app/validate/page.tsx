"use client";

import React, { useState } from "react";
import { Send, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ValidatePage() {
  const [inputValue, setInputValue] = useState("");

  const handleChipClick = (text: string) => {
    setInputValue(text);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      setInputValue("");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col p-4 md:p-8 animate-in fade-in duration-500">
      {/* Header Area */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="bg-white/80 backdrop-blur-md border border-black/10 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-sm">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
          </div>
          <span className="text-sm font-semibold tracking-wide text-black">Validating: B2B Tech Consulting</span>
        </div>
        
        <Link 
          href="/report" 
          className="btn-outline px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 bg-white/50 backdrop-blur-sm"
        >
          View Final Report
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Main Chat Area */}
      <div className="glass w-full max-w-3xl mx-auto flex flex-col overflow-hidden shadow-2xl relative">
        {/* Subtle top highlight */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>

        {/* Chat History */}
        <div className="flex-1 p-6 md:p-8 flex flex-col gap-8 overflow-y-auto" style={{ minHeight: '450px' }}>
          
          {/* AI Message */}
          <div className="flex gap-4 md:gap-5 animate-in slide-in-from-bottom-4 duration-500 fill-mode-both">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 shadow-lg ring-4 ring-white/50">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-3 max-w-[85%]">
              <div className="bg-white text-black p-5 rounded-2xl rounded-tl-sm border border-black/10 shadow-sm text-base md:text-lg leading-relaxed">
                Great choice! <strong>B2B Tech Consulting</strong> leverages your tech background perfectly. To start, do you already have a network of potential clients, or will you need to acquire your first customers from scratch?
              </div>
              
              {/* Quick Reply Chips */}
              <div className="flex flex-wrap gap-2.5 mt-2">
                {["I have warm leads", "Starting from scratch", "I have a small audience"].map((chip, index) => (
                  <button
                    key={chip}
                    onClick={() => handleChipClick(chip)}
                    className="px-5 py-2 rounded-full border border-black/20 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 text-black/80 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 animate-in slide-in-from-bottom-2 fill-mode-both"
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 border-t border-black/10 bg-white/60 backdrop-blur-md">
          <div className="relative flex items-center max-w-2xl mx-auto group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your response here..."
              className="w-full pr-16 pl-6 py-4 rounded-full text-base border-2 border-transparent bg-white shadow-inner focus:outline-none focus:border-black/20 focus:ring-4 focus:ring-black/5 transition-all text-black placeholder:text-black/40"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transition-all hover:bg-black/80 disabled:opacity-50 disabled:hover:bg-black shadow-md shadow-black/20"
            >
              <Send className="w-5 h-5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
