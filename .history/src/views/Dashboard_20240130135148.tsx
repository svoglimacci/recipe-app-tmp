import { DashboardHeader } from '@/components';
import { Nav } from '@/components/Nav';


function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <div className="flex flex-row relative p-0 border-red-500">
      <Nav />
      <main className="container">
        <h1 className="text-4xl text-primary">Dashboard</h1>
      </main>
      </div>
    </>
  )
}

export { Dashboard };