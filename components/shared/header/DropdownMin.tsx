import Link from 'next/link'
import React from 'react'
import { createPortal } from 'react-dom'

const DropdownMin = (props) => {
    return (
        <div className="text-black z-50 hidden sm:flex ml-auto">
            <ul className="gap-6 hidden sm:flex">
                {props.data.map((item, index) => (
                    <li key={index} className="text-white relative group">
                    <Link href={item.href} className="font-semibold">
                        {item.label}
                    </Link>
                    <div className="absolute hidden top-full right-[-50px] w-[400px] z-10 group-hover:block">
                        {item.dropdownItems && item.dropdownItems.length > 0 && (
                        <div
                            id="mega-menu-full-dropdown"
                            className="mt-1 bg-white border-gray-200 shadow-sm border-y rounded-lg dark:bg-gray-800 dark:border-gray-600"
                        >
                            <div className="grid max-w-screen-2xl px-4 py-5 mx-auto text-gray-900 dark:text-white ">
                            <ul className="grid">
                                {item.dropdownItems.map(
                                (dropdownItem, dropdownIndex) => (
                                    <li key={dropdownIndex} className="mb-2">
                                    <a
                                        href="#"
                                        className="block transition duration-300 ease-in-out transform hover:scale-105 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold text-base">
                                        {dropdownItem.label}
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {dropdownItem.excerpt}
                                        </p>
                                    </a>
                                    </li>
                                )
                                )}
                            </ul>
                            </div>
                        </div>
                        )}
                    </div>
                    </li>
                ))}
                </ul>
            </div>
    )
}

export default DropdownMin