import React, { useState } from "react";
import { HiUserAdd, HiQuestionMarkCircle, HiCog } from "react-icons/hi";
import { MdApps } from "react-icons/md"; // Importing MdApps for Google Apps Menu

const Header = ({ searchQuery, onSearchChange }) => {
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                {/* Search Bar */}
                <div className="flex items-center bg-gray-100 p-2 rounded-md shadow-md w-9/12">
                    <HiUserAdd className="text-gray-600" size={20} />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="bg-gray-100 text-gray-700 p-1 ml-2 outline-none placeholder-gray-400 w-full"
                    />
                </div>

                {/* Icons Menu */}
                <div className="flex items-center space-x-4">
                    {/* Help Menu */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("help")}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                        >
                            <HiQuestionMarkCircle className="text-gray-600" size={24} />
                        </button>
                        {dropdownOpen === "help" && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                                <ul className="py-1">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Help Center</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQs</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact Support</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Settings Menu */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("settings")}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                        >
                            <HiCog className="text-gray-600" size={24} />
                        </button>
                        {dropdownOpen === "settings" && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                                <ul className="py-1">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile Settings</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account Settings</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Google Apps Menu */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("apps")}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                        >
                            <MdApps className="text-gray-600" size={24} />
                        </button>
                        {dropdownOpen === "apps" && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                                <ul className="py-1">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Gmail</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Drive</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Calendar</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Docs</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
