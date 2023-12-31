import React, { useState, useEffect } from "react";
import Card from "./components/card";
import Modal from "./components/modal";
import SearchBar from "./components/searchBar";

const apiUrl =
  "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json";

const Home = () => {
  const [cropData, setCropData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCropData(data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCropClick = (image) => {
    setSelectedCrop(image);
    setModalOpen(true);
  };

  const filteredCrops = cropData.filter((crop) =>
    crop.crop_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="top_wrapper">
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <div className="card-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          filteredCrops.map((crop) => (
            <Card
              crop={crop}
              handleCropClick={handleCropClick}
              key={crop?.id}
            />
          ))
        )}
      </div>

      {modalOpen && (
        <Modal setModalOpen={setModalOpen} selectedCrop={selectedCrop} />
      )}
    </div>
  );
};

export default Home;
