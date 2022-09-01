import { typographySecondary, UIAccent } from '../styles/styles'
import { Menu, Transition } from '@headlessui/react'

import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline/index.js'

export interface MenuItemsProps {
    menuItems: { name: string, href: string, icon?: any }[]
}

const MenuItems: React.FC<MenuItemsProps> = ({ menuItems }) => (
    <Menu>
        {({ open }) => (
            <>
                <Menu.Button aria-label="navigation menu" className={`sm:hidden inline-flex items-start p-2
								rounded-md text-gray-500 hover:text-indigo-600 focus:ring-2 focus:ring-inset
								focus:ring-white`}>
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                </Menu.Button>
                {open && (<>
                    <Menu.Items static className="mt-3
                                flex flex-col
                                divide-y divide-gray-100
                                w-full items-center justify-center
                                sm:hidden 
                                rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 
                                overflow-hidden 
                                bg-white">
                        {menuItems.map((menuItem) => (
                            <Menu.Item key={menuItem.name}>
                                {({ active }) => (
                                    <a className={`${active && UIAccent} w-full py-4 px-4 ${typographySecondary}`}
                                        href={menuItem.href} target={menuItem.icon ? '_blank' : '_self'}>
                                        {menuItem.name}
                                        {menuItem.icon && <span className="p-1">
                                            <menuItem.icon className={"inline h-4 w-4 text-gray-500"}
                                                aria-hidden="true" />
                                        </span>}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                    </>)}
                
            </>
        )}
    </Menu>
)


export default MenuItems