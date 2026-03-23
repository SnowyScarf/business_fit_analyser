'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../../components/ui/Button';

// Icons
const WarningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const ClipboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
);

function ReportContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const businessId = searchParams.get('businessId') || 'freelance-design';

  // Mock data mapping
  const titleMap: Record<string, string> = {
    'freelance-design': 'Freelance Design Agency',
    'ecommerce-store': 'Drop-shipping E-Commerce',
    'tech-consulting': 'B2B Tech Consulting'
  };

  const title = titleMap[businessId] || 'Selected Business';

  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/recommendations" style={{ color: 'var(--text-muted)', marginBottom: '2rem', display: 'inline-block', fontWeight: '500' }}>
        &larr; Back to Recommendations
      </Link>
      
      {/* Contained Report Document */}
      <div style={{ background: '#ffffff', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.1)', padding: '3rem 4rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 'bold' }}>Final Validation Report</h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>{title}</h2>
        </div>

        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 200px', background: '#ecfdf5', border: '1px solid #bbf7d0', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
            <h3 style={{ color: '#065f46', marginBottom: '0.5rem', fontWeight: '600' }}>Verdict</h3>
            <div style={{ color: '#065f46', fontSize: '2rem', fontWeight: 'bold' }}>Strong Fit</div>
          </div>
          <div style={{ flex: '2 1 300px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)', fontWeight: 'bold' }}>Why it works</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Your answers indicate high readiness in foundational skills and a timeline that perfectly matches the typical ramp-up period for this model. The capital requirements are well within your stated budget.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            Top Risks
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <WarningIcon />
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)' }}>Client Acquisition:</strong> You will need to actively sell your services in the first 3 months.</div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <WarningIcon />
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)' }}>Income Volatility:</strong> Month-to-month revenue can fluctuate wildly until retainer contracts are signed.</div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <WarningIcon />
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)' }}>Scope Creep:</strong> Without strict boundaries, projects may exceed estimated hours.</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            Readiness Gaps
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <ClipboardIcon />
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>No formalized portfolio website yet.</div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <ClipboardIcon />
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Basic understanding of business taxes needed.</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button onClick={() => window.print()} style={{ padding: '16px 32px', fontSize: '1rem' }}>Download Full Report</Button>
          <Button variant="outline" onClick={() => router.push('/')} style={{ padding: '16px 32px', fontSize: '1rem' }}>Start New Assessment</Button>
        </div>
      </div>
    </main>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-main)' }}>Loading report...</div>}>
      <ReportContent />
    </Suspense>
  );
}
