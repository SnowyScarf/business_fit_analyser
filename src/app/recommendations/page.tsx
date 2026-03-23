'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { useAssessment } from '../../context/AssessmentContext';

const LaptopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="2" y1="20" x2="22" y2="20"></line>
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>
);

const ServerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const MOCK_RECOMMENDATIONS = [
  {
    id: 'freelance-design',
    title: 'Freelance Design',
    reason: 'Matches your interest in creativity and allows you to start with minimal capital using your existing laptop.',
    effort: 'Medium (20-30 hrs/wk)',
    capital: 'Low (< $500)',
    match: 95,
    Icon: LaptopIcon
  },
  {
    id: 'ecommerce-store',
    title: 'Drop-shipping E-Commerce',
    reason: 'Aligns with your desire for scalable income and flexible hours. Requires initial marketing spend.',
    effort: 'High (40+ hrs/wk)',
    capital: 'Medium ($1k - $3k)',
    match: 82,
    Icon: CartIcon
  },
  {
    id: 'tech-consulting',
    title: 'B2B Tech Consulting',
    reason: 'Leverages your technical background and requires almost zero startup costs, offering high margins.',
    effort: 'Low (10-20 hrs/wk)',
    capital: 'Low (< $100)',
    match: 78,
    Icon: ServerIcon
  }
];

export default function Recommendations() {
  const router = useRouter();
  const { state } = useAssessment();

  const handleSelect = (id: string) => {
    router.push(`/report?businessId=${id}`);
  };

  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <h1 className="gradient-text" style={{ textAlign: 'center', marginBottom: '1rem' }}>Your Top Matches</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.25rem' }}>
        Based on your profile, here are the 3 best business paths for you.
      </p>

      {/* Grid: 3 columns on desktop via minmax and max-width 1200px */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {MOCK_RECOMMENDATIONS.map((rec, index) => {
          const isTopMatch = index === 0;
          const matchColorBg = rec.match >= 90 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)';
          const matchColorText = rec.match >= 90 ? '#047857' : '#b45309';
          
          return (
            <Card key={rec.id} className="card-hover" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {isTopMatch && (
                <div style={{ position: 'absolute', top: '-15px', right: '20px', background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 'bold' }}>
                  Top Match
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0, display: 'flex' }}>
                    <rec.Icon />
                  </div>
                  <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: '1.2', fontWeight: 'bold' }}>
                    {rec.title}
                  </h2>
                </div>
                {/* Match Score Badge */}
                <div style={{ 
                  background: matchColorBg, 
                  color: matchColorText, 
                  fontWeight: '700', 
                  fontSize: '0.875rem',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                  marginLeft: '8px'
                }}>
                  {rec.match}% Match
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1, lineHeight: '1.6' }}>{rec.reason}</p>
              
              <div style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Effort:</span>
                  <span style={{ color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: '600' }}>{rec.effort}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Capital:</span>
                  <span style={{ color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: '600' }}>{rec.capital}</span>
                </div>
              </div>

              <Button 
                variant={isTopMatch ? 'primary' : 'outline'} 
                onClick={() => handleSelect(rec.id)} 
                style={{ width: '100%' }}
              >
                Validate this idea
              </Button>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
