import { DashboardHeader } from '@/components';
import { Nav } from '@/components/Nav';


function Dashboard() {
  return (
    <>
    <div className="container relative p-0">
      <DashboardHeader />
      <div>
      <Nav />
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-primary">Dashboard</h1>
        <p className="text-primary">Welcome to the dashboard!</p>
      </main>
      </div>
    </div>
    </>
  )
}

export { Dashboard };