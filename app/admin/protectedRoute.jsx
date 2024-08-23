import { useRouter } from 'next/navigation';
import { useAuth } from '../../lib/contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push('/login'); 
    return null;
  }

  return children; 
}