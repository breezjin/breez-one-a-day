'use client';

import { Sidebar } from '@/components/music-sidebar';
import { playlists } from '@/data/playlists';
import { MainContent } from '@/components/main-content';
import { Menu } from '@/components/menu';

export default function MusicPage() {
  return (
    <div className="hidden md:block">
      <Menu />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar playlists={playlists} className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
