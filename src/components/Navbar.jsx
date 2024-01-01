
import { Home, MenuSquare, Mail, CircleUserRound } from 'lucide-react';


const Navbar = () => {

    return (
        <div className="">
            <div class="sm:hidden">
                <label for="Tab" class="sr-only">Tab</label>

                <select id="Tab" class="w-full rounded-md border-gray-200">
                    <option>Home</option>
                    <option>About Us</option>
                    <option>Contact Us</option>
                    <option select>Profile</option>
                </select>
            </div>

            <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                    <nav class="-mb-px flex gap-6" aria-label="Tabs">
                        <a
                            href="#"
                            class="inline-flex shrink-0 items-center gap-2 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
                        >
                            <Home size={24} />
                            Home
                        </a>

                        <a
                            href="#"
                            class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            <MenuSquare size={24} />

                            About Us
                        </a>

                        <a
                            href="#"
                            class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            <Mail size={24} />

                            Contact Us
                        </a>

                        <a
                            href="#"
                            class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            <CircleUserRound size={24} />

                            Profile
                        </a>
                    </nav>
                </div>
            </div>
        </div>

    )

}

export default Navbar;