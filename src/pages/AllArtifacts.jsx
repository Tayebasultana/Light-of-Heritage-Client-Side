import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../components/ArtifactCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Optional: Default styles

const AllArtifacts = () => {
    const allArtifacts = useLoaderData();

    return (
        <div>
            {/* Tabs */}
            <Tabs>
                <TabList className=" items-center justify-center bg-gray-100 dark:bg-gray-600 p-4 rounded-lg shadow-lg gap-4 flex flex-wrap">
                    <Tab
                        className="px-6 py-2 rounded-lg cursor-pointer text-lg font-semibold hover:bg-blue-300 hover:text-black transition-all duration-300"
                        selectedClassName="bg-blue-200 text-white"
                    >
                        All
                    </Tab>
                    <Tab
                        className="px-6 py-2 rounded-lg cursor-pointer text-lg font-semibold hover:bg-blue-300 hover:text-black transition-all duration-300"
                        selectedClassName="bg-blue-200 text-white"
                    >
                        Tools
                    </Tab>
                    <Tab
                        className="px-6 py-2 rounded-lg cursor-pointer text-lg font-semibold hover:bg-blue-300 hover:text-black transition-all duration-300"
                        selectedClassName="bg-blue-200 text-white"
                    >
                        Weapons
                    </Tab>
                    <Tab
                        className="px-6 py-2 rounded-lg cursor-pointer text-lg font-semibold hover:bg-blue-300 hover:text-black transition-all duration-300"
                        selectedClassName="bg-blue-200 text-white"
                    >
                        Writings
                    </Tab>
                    <Tab
                        className="px-6 py-2 rounded-lg cursor-pointer text-lg font-semibold hover:bg-blue-300 hover:text-black transition-all duration-300"
                        selectedClassName="bg-blue-200 text-white"
                    >
                        Other
                    </Tab>
                </TabList>

                {/* TabPanels */}
                <TabPanel className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4  rounded-lg shadow-md">
                        {allArtifacts.map((artifact) => (
                            <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4  rounded-lg shadow-md">
                        {allArtifacts
                            .filter((artifact) => artifact.artifactType === "Tools")
                            .map((artifact) => (
                                <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
                            ))}
                    </div>
                </TabPanel>
                <TabPanel className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4 rounded-lg shadow-md">
                        {allArtifacts
                            .filter((artifact) => artifact.artifactType === "Weapons")
                            .map((artifact) => (
                                <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
                            ))}
                    </div>
                </TabPanel>
                <TabPanel className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4 rounded-lg shadow-md">
                        {allArtifacts
                            .filter((artifact) => artifact.artifactType === "Writings")
                            .map((artifact) => (
                                <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
                            ))}
                    </div>
                </TabPanel>
                <TabPanel className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4 rounded-lg shadow-md">
                        {allArtifacts
                            .filter((artifact) => artifact.artifactType === "Other")
                            .map((artifact) => (
                                <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
                            ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllArtifacts;
