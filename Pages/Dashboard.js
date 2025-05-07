import { useSession } from '@supabase/auth-helpers-react';

export default function Dashboard() {
    const session = useSession();

    if (!session) {
        return <p>Please log in to view the dashboard.</p>;
    }

    return <h1>Welcome to the Dashboard, {session.user.email}!</h1>;
}
