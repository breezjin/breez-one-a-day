import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mic2 } from 'lucide-react'

export function PodcastEmptyPlaceholder() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <Mic2 className="h-10 w-10 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">No episodes added</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          You have not added any podcasts. Add one below.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              Add Podcast
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Podcast</DialogTitle>
              <DialogDescription>
                Add a podcast to your library using the podcast RSS feed URL.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Podcast URL</Label>
                <Input
                  id="url"
                  placeholder="https://example.com/feed.xml"
                />
              </div>
            </div>
            <DialogFooter>
              <Button>Add Podcast</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

