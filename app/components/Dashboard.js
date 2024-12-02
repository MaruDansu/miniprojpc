import { useSession } from "next-auth/react";

const Dashboard = () => {
    const { data: session } = useSession();

    return (
        <div>
            <h1>Welcome, {session?.user?.name}</h1>
            {session?.user?.role === 'ADMIN' && (
                <button>Admin Only Action</button>
            )}
        </div>
    );
};

export default Dashboard;
