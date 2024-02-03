import { DashboardHeader } from '@/components';
import { Nav } from '@/components/Nav';


function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <div className="flex flex-row relative p-0 ">
      <Nav />
      <main className="container bg-slate-900">
        <h1 className="text-4xl text-primary">Dashboard</h1>
      </main>
      </div>
    </>
  )
}

export { Dashboard };