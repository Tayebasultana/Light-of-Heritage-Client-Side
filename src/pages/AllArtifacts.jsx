import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../components/ArtifactCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const ITEMS_PER_PAGE = 8;

const AllArtifacts = () => {
    const allArtifacts = useLoaderData();
    const [currentTab, setCurrentTab] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const handleSelect = (index) => {
        setCurrentTab(index);
        setCurrentPage(1); // ট্যাব চেঞ্জ করলে প্রথম পেজে চলে যাক
    };

    const getFilteredArtifacts = () => {
        if (currentTab === 0) return allArtifacts;
        const types = ["Tools", "Weapons", "Writings", "Other"];
        return allArtifacts.filter((artifact) => artifact.artifactType === types[currentTab - 1]);
    };

    const filteredArtifacts = getFilteredArtifacts();

    const totalPages = Math.ceil(filteredArtifacts.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentArtifacts = filteredArtifacts.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    return (
        <div>
            <Tabs selectedIndex={currentTab} onSelect={handleSelect}>
                <TabList className="items-center justify-center bg-gray-100 dark:bg-gray-600 p-4 rounded-lg shadow-lg gap-4 flex flex-wrap">
                    {["All", "Tools", "Weapons", "Writings", "Other"].map((label) => (
                        <Tab
                            key={label}
                            className="px-6 py-2 rounded-lg cursor-pointer text-lg font-semibold hover:bg-blue-300 hover:text-black transition-all duration-300"
                            selectedClassName="bg-blue-200 text-white"
                        >
                            {label}
                        </Tab>
                    ))}
                </TabList>

                {[0, 1, 2, 3, 4].map((_, idx) => (
                    <TabPanel key={idx} className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4 rounded-lg shadow-md">
                            {currentArtifacts.map((artifact) => (
                                <ArtifactCard key={artifact._id} artifact={artifact} />
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center items-center mt-6 gap-2">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-4 py-2 rounded ${
                                        currentPage === i + 1
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200"
                                    } hover:bg-blue-400 transition`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default AllArtifacts;
