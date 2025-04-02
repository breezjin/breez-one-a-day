import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Menu() {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Music</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About Music</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Hide Music... <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Hide Others <MenubarShortcut>⇧⌘H</MenubarShortcut>
          </MenubarItem>
          <MenubarShortcut />
          <MenubarItem>
            Quit Music <MenubarShortcut>⌘Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="relative">File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Playlist <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            New Smart Playlist <MenubarShortcut>⇧⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Playlist Folder <MenubarShortcut>⌥⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Close Window <MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Import...</MenubarItem>
          <MenubarItem disabled>Export...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Convert <MenubarShortcut>⌥⌘C</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

