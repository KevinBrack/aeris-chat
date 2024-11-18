import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { CircleHelp } from 'lucide-react'

export function HelpMenu() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <CircleHelp className="h-6 w-6 text-primary cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <Link href="/terms">Terms of Service</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </DropdownMenuItem>
          <div className="px-2 py-2 text-xs text-muted-foreground border-t">
            © 2024 Kevin Brack
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
