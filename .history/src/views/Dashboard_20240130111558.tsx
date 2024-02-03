import { Dashboard Header } from '@/components';

interface Props {
  children: React.ReactNode;

}

function Dashboard({ children }: Props) {
  return (
    <>
    <div className="container relative">
      DashboardHeader>
      {children}
    </div>
    </>
  )
}

export { Dashboard };