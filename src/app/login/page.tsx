import Link from 'next/link';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';

export default function Login() {
  return (
    <main style={{ padding: '4rem 2rem' }}>
      <Card style={{ maxWidth: '400px', width: '100%', padding: '2rem', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--text-main)' }}>Welcome Back</h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          
          <Link href="/assessment" style={{ width: '100%', marginTop: '1rem', display: 'block' }}>
            <Button style={{ width: '100%' }}>Login (Mock)</Button>
          </Link>
        </form>

        <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ height: '1px', background: 'var(--border)', flex: 1 }}></div>
          <span style={{ color: 'var(--text-muted)' }}>OR</span>
          <div style={{ height: '1px', background: 'var(--border)', flex: 1 }}></div>
        </div>

        <Link href="/assessment" style={{ width: '100%', display: 'block' }}>
          <Button variant="outline" style={{ width: '100%' }}>👉 Continue as Guest</Button>
        </Link>
        
        <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Don't have an account? <Link href="/register" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Sign up</Link>
        </p>
      </Card>
    </main>
  );
}
