import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';

const Navbar = () => {
  return (
    <header className="h-14 flex justify-center items-center w-full">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center w-full">
          <div>
            <h1 className="font-bold">Event Rater</h1>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <span className="bg-gray-200 px-3 py-2 text-xs rounded-full">
                Feedback
              </span>
              <span className="bg-gray-200 px-3 py-2 text-xs rounded-full">
                Beta
              </span>

              <div className="right-1 ring-black">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Image
                      src="/rejaul.png"
                      height={100}
                      width={100}
                      alt="user"
                      className="h-8 w-8 object-contain rounded-full"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72 mr-10" side="bottom">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Invite users
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Email</DropdownMenuItem>
                            <DropdownMenuItem>Message</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>More...</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuItem disabled>API</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
