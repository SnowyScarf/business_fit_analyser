import Link from 'next/link';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';

export default function Register() {
  return (
    <main style={{ padding: '4rem 2rem' }}>
      <Card style={{ maxWidth: '400px', width: '100%', padding: '2rem', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--text-main)' }}>Create Account</h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
            <Input type="text" placeholder="John Doe" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          
          <Link href="/assessment" style={{ width: '100%', marginTop: '1rem', display: 'block' }}>
            <Button style={{ width: '100%' }}>Sign Up (Mock)</Button>
          </Link>
        </form>

        <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Already have an account? <Link href="/login" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Login</Link>
        </p>
      </Card>
    </main>
  );
}
