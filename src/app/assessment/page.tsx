'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useAssessment } from '../../context/AssessmentContext';

type Message = { id: number; role: 'ai' | 'user'; content: string };
type StepConfig = {
  question: string;
  chips: string[];
};

const SCRIPT: StepConfig[] = [
  {
    question: "Hi! Welcome to the Business Fit Analyzer. To get started, what kind of work excites you the most?",
    chips: ["Technology", "Food/Beverage", "Fitness", "Writing/Media"]
  },
  {
    question: "Great choice. How much time can you realistically commit per week?",
    chips: ["< 10 hours", "10-20 hours", "20-40 hours", "Full-time"]
  },
  {
    question: "Got it. Finally, what is your available capital for starting a new business?",
    chips: ["Bootstrapping (< $500)", "Modest ($500 - $5k)", "Funded ($5k+)"]
  },
  {
    question: "Perfect. Analyzing your profile...",
    chips: []
  }
];

const KEYS = ['interests', 'time', 'budget'];

export default function Assessment() {
  const router = useRouter();
  const { updateAnswer } = useAssessment();
  const [messages, setMessages] = useState<Message[]>([{ id: 1, role: 'ai', content: SCRIPT[0].question }]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    // Auto-focus input when the chat updates
    if (step < SCRIPT.length - 1) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, step]);

  const processAnswer = (userMsg: string) => {
    if (!userMsg.trim() || step >= SCRIPT.length - 1) return;
    
    setMessages(prev => [...prev, { id: Date.now(), role: 'user', content: userMsg }]);
    updateAnswer(KEYS[step], userMsg);
    setInput('');

    // Simulate AI typing delay
    setTimeout(() => {
      const nextStep = step + 1;
      setMessages(prev => [...prev, { id: Date.now(), role: 'ai', content: SCRIPT[nextStep].question }]);
      setStep(nextStep);

      if (nextStep === SCRIPT.length - 1) {
        setTimeout(() => {
          router.push('/recommendations');
        }, 1500);
      }
    }, 800);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    processAnswer(input);
  };

  // Only show chips if it's currently the user's turn
  const isUserTurn = messages[messages.length - 1].role === 'ai';
  const activeChips = step < SCRIPT.length - 1 && isUserTurn ? SCRIPT[step].chips : [];
  
  const progressPercent = Math.round((step / (SCRIPT.length - 1)) * 100);

  return (
    <main style={{ padding: '2rem', display: 'flex', justifyContent: 'center', height: 'calc(100vh - 72px)' }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '800px', 
        display: 'flex', 
        flexDirection: 'column', 
        background: 'var(--bg-card)', 
        borderRadius: '16px', 
        border: '1px solid var(--border)', 
        overflow: 'hidden', 
        backdropFilter: 'blur(16px)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' 
      }}>
        
        {/* Header */}
        <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', background: 'rgba(0,0,0,0.02)', position: 'relative' }}>
          {/* Progress Bar edge */}
          <div style={{ position: 'absolute', top: 0, left: 0, height: '4px', background: 'var(--primary)', width: `${progressPercent}%`, transition: 'width 0.4s ease' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 'bold' }}>AI Assessment</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>We ask, you answer. We find your fit.</p>
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '600', background: 'rgba(0,0,0,0.05)', padding: '6px 14px', borderRadius: '14px' }}>
              {step < SCRIPT.length - 1 ? `Question ${step + 1} of ${SCRIPT.length - 1}` : 'Complete'}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {messages.map((m) => (
            <div key={m.id} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', alignItems: 'flex-start', gap: '12px' }}>
              {m.role === 'ai' && (
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px', flexShrink: 0, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                  AI
                </div>
              )}
              <div style={{
                maxWidth: '75%',
                padding: '14px 18px',
                borderRadius: '16px',
                background: m.role === 'user' ? 'var(--primary)' : 'rgba(0,0,0,0.04)',
                color: m.role === 'user' ? 'white' : 'var(--text-main)',
                borderBottomRightRadius: m.role === 'user' ? '4px' : '16px',
                borderBottomLeftRadius: m.role === 'ai' ? '4px' : '16px',
                fontSize: '1rem',
                lineHeight: '1.5',
                boxShadow: m.role === 'user' ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
              }}>
                {m.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '1rem', borderTop: '1px solid var(--border)', background: 'rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Quick Reply Chips */}
          {activeChips.length > 0 && (
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {activeChips.map((chip, idx) => (
                <button 
                  key={idx}
                  onClick={() => processAnswer(chip)}
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    color: 'var(--text-main)',
                    transition: 'all 0.2s',
                    fontWeight: 500
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-main)';
                    e.currentTarget.style.background = 'var(--bg)';
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          )}
          
          <form onSubmit={handleSend} style={{ display: 'flex', gap: '0.5rem' }}>
            <Input 
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your answer or select an option above..."
              disabled={step >= SCRIPT.length - 1}
              style={{ flex: 1 }}
            />
            <Button type="submit" disabled={step >= SCRIPT.length - 1 || !input.trim()}>Send</Button>
          </form>
        </div>

      </div>
    </main>
  );
}
