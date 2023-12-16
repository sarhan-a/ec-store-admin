import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="py-4 px-4 flex h-full">
      <UserButton afterSignOutUrl="/" />
      <Button size="default">Orders</Button>
    </div>
  );
}
