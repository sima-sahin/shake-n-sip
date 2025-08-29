import React, { useState } from "react";

const FilterModal = () => {
    // State to manage modal visibility
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-[#E17C55] text-white rounded-md cursor-pointer"
            >
                Filter
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-80">
                        <h2 className="text-lg font-bold mb-4">Select Category</h2>
                        {/* Burada kategorileri listeleyebilirsin */}
                        <ul className="space-y-2">
                            <li>Bitter</li>
                            <li>Sweet</li>
                            <li>Refreshing</li>
                            <li>Sour</li>
                        </ul>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 px-4 py-2 bg-gray-300 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterModal;
