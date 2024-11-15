"use client";

import React, { useState, useEffect } from "react";

const NewProduct = () => {
  const [productName, setProductName] = useState("");
  const [driveType, setDriveType] = useState("");
  const [hddType, setHddType] = useState("");
  const [formFactor, setFormFactor] = useState("");
  const [hddCapacity, setHddCapacity] = useState("");
  const [ssdType, setSsdType] = useState("");
  const [ssdCapacity, setSsdCapacity] = useState("");
  const [cardType, setCardType] = useState("");
  const [networkType, setNetworkType] = useState("");
  const [pcieCapacity, setPcieCapacity] = useState("");
  const [pciePortType, setPciePortType] = useState("");
  const [ibSpeed, setIbSpeed] = useState("");
  const [ibPortType, setIbPortType] = useState("");
  const [ndcCapacity, setNdcCapacity] = useState("");
  const [ndcPortType, setNdcPortType] = useState("");
  const [ramType, setRamType] = useState("");
  const [ramGeneration, setRamGeneration] = useState("");
  const [ramSpeed, setRamSpeed] = useState("");
  const [ramCapacity, setRamCapacity] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [ssdFormFactor, setSsdFormFactor] = useState("");

  const productOptions = [
    "cards",
    "cables",
    "drives",
    "cmosBatteries",
    "ramDimm",
  ];
  const driveTypes = ["hdd", "ssd"];
  const hddTypes = ["sata", "nlsas", "10k", "15k"];
  const formFactors = ["2.5", "3.5"];
  const ssdTypes = ["sata", "vsas", "sas", "nvme"];
  const ssdFormFactorsMap = {
    sata: ["2.5 inch"],
    vsas: ["2.5 inch"],
    sas: ["2.5 inch"],
    nvme: ["m.2", "pcie"],
  };
  const ssdCapacities = [
    "120GB",
    "200GB",
    "240GB",
    "400GB",
    "480GB",
    "800GB",
    "960GB",
    "1.6TB",
    "1.92TB",
    "3.2TB",
    "3.84TB",
    "6.4TB",
    "7.68TB",
    "15.36TB",
    "30.72TB",
    "61.44TB",
    "100TB",
  ];
  const hddCapacitiesMap = {
    sata: {
      2.5: [
        "1 TB",
        "2 TB",
        "4 TB",
        "6 TB",
        "8 TB",
        "10 TB",
        "12 TB",
        "14 TB",
        "16 TB",
        "18 TB",
        "20 TB",
        "22 TB",
        "24 TB",
        "30 TB (coming)",
        "32 TB (coming)",
      ],
      3.5: [
        "1 TB",
        "2 TB",
        "4 TB",
        "6 TB",
        "8 TB",
        "10 TB",
        "12 TB",
        "14 TB",
        "16 TB",
        "18 TB",
        "20 TB",
        "22 TB",
        "24 TB",
        "30 TB (coming)",
        "32 TB (coming)",
      ],
    },
    nlsas: {
      2.5: [
        "1 TB",
        "2 TB",
        "4 TB",
        "6 TB",
        "8 TB",
        "10 TB",
        "12 TB",
        "14 TB",
        "16 TB",
        "18 TB",
        "20 TB",
        "22 TB",
        "24 TB",
        "30 TB (coming)",
        "32 TB (coming)",
      ],
      3.5: [
        "1 TB",
        "2 TB",
        "4 TB",
        "6 TB",
        "8 TB",
        "10 TB",
        "12 TB",
        "14 TB",
        "16 TB",
        "18 TB",
        "20 TB",
        "22 TB",
        "24 TB",
        "30 TB (coming)",
        "32 TB (coming)",
      ],
    },
    "10k": {
      2.5: ["300GB", "600GB", "1.2 TB", "2.4 TB"],
      3.5: [
        "1 TB",
        "2 TB",
        "4 TB",
        "6 TB",
        "8 TB",
        "10 TB",
        "12 TB",
        "14 TB",
        "16 TB",
        "18 TB",
        "20 TB",
        "22 TB",
        "24 TB",
        "30 TB (coming)",
        "32 TB (coming)",
      ],
    },
    "15k": {
      2.5: ["300GB", "600GB", "1.2 TB", "2.4 TB"],
      3.5: [
        "1 TB",
        "2 TB",
        "4 TB",
        "6 TB",
        "8 TB",
        "10 TB",
        "12 TB",
        "14 TB",
        "16 TB",
        "18 TB",
        "20 TB",
        "22 TB",
        "24 TB",
        "30 TB (coming)",
        "32 TB (coming)",
      ],
    },
  };

  const cardTypes = ["network", "raid", "boss"];
  const networkTypes = ["pcie", "ndc"];
  const pcieCapacities = ["gigi", "25gig", "10gig", "ib"];
  const portTypes = ["single", "dual", "quad"];
  const ibSpeeds = ["fdr", "hdr"];
  const ramTypes = ["rdimm", "lrdimm", "hbm", "cxl"];
  const ramGenerations = ["ddr3", "ddr4", "ddr5", "mcr", "cxl"];
  const ramSpeeds = [
    "1333",
    "1600",
    "1866",
    "2133",
    "2400",
    "2666",
    "3200",
    "4800",
    "5600",
    "8800",
  ];
  const ramCapacities = [
    "4GB",
    "8GB",
    "16GB",
    "32GB",
    "64GB",
    "96GB",
    "128GB",
    "256GB",
    "512GB",
  ];

  useEffect(() => {
    if (productName === "drives") {
      setCardType("");
      setNetworkType("");
      setPcieCapacity("");
      setPciePortType("");
      setIbSpeed("");
      setIbPortType("");
      setNdcCapacity("");
      setNdcPortType("");
      setRamType("");
      setRamGeneration("");
      setRamSpeed("");
      setRamCapacity("");
    } else if (productName === "cards") {
      setDriveType("");
      setHddType("");
      setFormFactor("");
      setHddCapacity("");
      setSsdType("");
      setSsdCapacity("");
      setSsdFormFactor("");
      setRamType("");
      setRamGeneration("");
      setRamSpeed("");
      setRamCapacity("");
    } else if (productName === "ramDimm") {
      setDriveType("");
      setHddType("");
      setFormFactor("");
      setHddCapacity("");
      setSsdType("");
      setSsdCapacity("");
      setSsdFormFactor("");
      setCardType("");
      setNetworkType("");
      setPcieCapacity("");
      setPciePortType("");
      setIbSpeed("");
      setIbPortType("");
      setNdcCapacity("");
      setNdcPortType("");
    }
  }, [productName]);

  useEffect(() => {
    if (driveType === "hdd") {
      setSsdType("");
      setSsdCapacity("");
      setSsdFormFactor("");
    } else if (driveType === "ssd") {
      setHddType("");
      setFormFactor("");
      setHddCapacity("");
    }
  }, [driveType]);

  useEffect(() => {
    if (ssdType) {
      setSsdFormFactor("");
    }
  }, [ssdType]);

  useEffect(() => {
    setHddCapacity("");
  }, [hddType, formFactor]);

  useEffect(() => {
    if (cardType === "network") {
      // Reset other card-related fields
    } else {
      setNetworkType("");
      setPcieCapacity("");
      setPciePortType("");
      setIbSpeed("");
      setIbPortType("");
      setNdcCapacity("");
      setNdcPortType("");
    }
  }, [cardType]);

  useEffect(() => {
    if (networkType === "pcie") {
      setNdcCapacity("");
      setNdcPortType("");
    } else if (networkType === "ndc") {
      setPcieCapacity("");
      setPciePortType("");
      setIbSpeed("");
      setIbPortType("");
    }
  }, [networkType]);

  useEffect(() => {
    if (["gigi", "25gig", "10gig"].includes(pcieCapacity)) {
      setIbSpeed("");
      setIbPortType("");
    } else if (pcieCapacity === "ib") {
      setPciePortType("");
    }
  }, [pcieCapacity]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(
  //     "Product Name: ",
  //     productName,
  //     "\nRam Type: ",
  //     ramType,
  //     "\nGeneration: ",
  //     ramGeneration,
  //     "\nSpeed: ",
  //     ramSpeed,
  //     "\nCapacity: ",
  //     ramCapacity,
  //     "\nQuantity: ",
  //     quantity
  //   );
  //   const formData = {
  //     ramType,
  //     ramGeneration,
  //     ramSpeed,
  //     ramCapacity,
  //     quantity: parseInt(quantity),
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData;

    if (productName === "drives") {
      // Handle drive-specific data
      formData = {
        ssdType: driveType === "ssd" ? ssdType : null,
        hddType: driveType === "hdd" ? hddType : null,
        formFactor,
        capacity: driveType === "ssd" ? ssdCapacity : hddCapacity,
        quantity: parseInt(quantity),
      };
    } else if (productName === "ramDimm") {
      // Handle RAM-specific data
      formData = {
        ramType,
        ramGeneration,
        ramSpeed,
        ramCapacity,
        quantity: parseInt(quantity),
      };
    } else if (productName === "cards") {
      // Handle card-specific data
      formData = {
        cardType,
        networkType,
        pcieCapacity,
        pciePortType,
        ibSpeed,
        ibPortType,
        ndcCapacity,
        ndcPortType,
        quantity: parseInt(quantity),
      };
    }
    try {
      const response = await fetch("/api/new-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      // You can add further actions here, such as showing a success message or resetting the form
    } catch (error) {
      console.log("Error:", error);
      // You can add error handling here, such as showing an error message to the user
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-600 to-yellow-100 text-gray-800 font-sans">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-80 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Add/Remove Product
        </h1>

        <select
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          className="p-2 mb-4 text-base border-none rounded-md bg-white"
        >
          <option value="">Select Product</option>
          {productOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {productName === "drives" && (
          <>
            <select
              value={driveType}
              onChange={(e) => setDriveType(e.target.value)}
              className="p-2 mb-4 text-base border-none rounded-md bg-white"
            >
              <option value="">Select Drive Type</option>
              {driveTypes.map((type) => (
                <option key={type} value={type}>
                  {type.toUpperCase()}
                </option>
              ))}
            </select>

            {driveType === "hdd" && (
              <>
                <select
                  value={hddType}
                  onChange={(e) => setHddType(e.target.value)}
                  className="p-2 mb-4 text-base border-none rounded-md bg-white"
                >
                  {hddTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.toUpperCase()}
                    </option>
                  ))}
                </select>

                <select
                  value={formFactor}
                  onChange={(e) => setFormFactor(e.target.value)}
                  className="p-2 mb-4 text-base border-none rounded-md bg-white"
                >
                  {formFactors.map((factor) => (
                    <option key={factor} value={factor}>
                      {factor} inch
                    </option>
                  ))}
                </select>

                {/* {hddCapacity && (
                  <select
                    value={hddCapacity}
                    onChange={(e) => setHddCapacity(e.target.value)}
                    className="p-2 mb-4 text-base border-none rounded-md bg-white"
                  >
                    {[
                      "1 TB",
                      "2 TB",
                      "4 TB",
                      "6 TB",
                      "8 TB",
                      "10 TB",
                      "12 TB",
                      "14 TB",
                      "16 TB",
                      "18 TB",
                      "20 TB",
                      "22 TB",
                      "24 TB",
                      "30 TB",
                      "32 TB",
                    ].map((capacity) => (
                      <option key={capacity} value={capacity}>
                        {capacity}
                      </option>
                    ))}
                  </select>
                )} */}
                {hddType && formFactor && (
                  <select
                    value={hddCapacity}
                    onChange={(e) => setHddCapacity(e.target.value)}
                    className="p-2 mb-4 text-base border-none rounded-md bg-white"
                  >
                    <option value="">Select HDD Capacity</option>
                    {hddCapacitiesMap[hddType]?.[formFactor]?.map(
                      (capacity) => (
                        <option key={capacity} value={capacity}>
                          {capacity}
                        </option>
                      )
                    )}
                  </select>
                )}
              </>
            )}

            {/* {driveType === "ssd" && (
              <>
                <select
                  value={ssdType}
                  onChange={(e) => setSsdType(e.target.value)}
                  className="p-2 mb-4 text-base border-none rounded-md bg-white"
                >
                  {ssdTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.toUpperCase()}
                    </option>
                  ))}
                </select>

                <select
                  value={ssdCapacity}
                  onChange={(e) => setSsdCapacity(e.target.value)}
                  className="p-2 mb-4 text-base border-none rounded-md bg-white"
                >
                  {ssdCapacities.map((capacity) => (
                    <option key={capacity} value={capacity}>
                      {capacity}
                    </option>
                  ))}
                </select>
              </>
            )} */}
            {driveType === "ssd" && (
              <>
                <select
                  value={ssdType}
                  onChange={(e) => setSsdType(e.target.value)}
                  className="p-2 mb-4 text-base border-none rounded-md bg-white"
                >
                  <option value="">Select SSD Type</option>
                  {ssdTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.toUpperCase()}
                    </option>
                  ))}
                </select>

                {ssdType && (
                  <select
                    value={ssdFormFactor}
                    onChange={(e) => setSsdFormFactor(e.target.value)}
                    className="p-2 mb-4 text-base border-none rounded-md bg-white"
                  >
                    <option value="">Select SSD Form Factor</option>
                    {ssdFormFactorsMap[ssdType]?.map((factor) => (
                      <option key={factor} value={factor}>
                        {factor}
                      </option>
                    ))}
                  </select>
                )}

                <select
                  value={ssdCapacity}
                  onChange={(e) => setSsdCapacity(e.target.value)}
                  className="p-2 mb-4 text-base border-none rounded-md bg-white"
                >
                  <option value="">Select SSD Capacity</option>
                  {ssdCapacities.map((capacity) => (
                    <option key={capacity} value={capacity}>
                      {capacity}
                    </option>
                  ))}
                </select>
              </>
            )}
          </>
        )}

        {productName === "cards" && (
          <>
            <select
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              className="p-2 mb-4 text-base border-none rounded-md bg-white"
            >
              <option value="">Select Card Type</option>
              {cardTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {cardType === "network" && (
              <>
                <select
                  value={networkType}
                  onChange={(e) => setNetworkType(e.target.value)}
                  className="p-2 mb-4 text-base border-none rounded-md bg-white"
                >
                  <option value="">Select Network Type</option>
                  {networkTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.toUpperCase()}
                    </option>
                  ))}
                </select>

                {networkType === "pcie" && (
                  <>
                    <select
                      value={pcieCapacity}
                      onChange={(e) => setPcieCapacity(e.target.value)}
                      className="p-2 mb-4 text-base border-none rounded-md bg-white"
                    >
                      {pcieCapacities.map((capacity) => (
                        <option key={capacity} value={capacity}>
                          {capacity}
                        </option>
                      ))}
                    </select>

                    {["gigi", "25gig", "10gig"].includes(pcieCapacity) && (
                      <select
                        value={pciePortType}
                        onChange={(e) => setPciePortType(e.target.value)}
                        className="p-2 mb-4 text-base border-none rounded-md bg-white"
                      >
                        {portTypes.map((type) => (
                          <option key={type} value={type}>
                            {type} Port
                          </option>
                        ))}
                      </select>
                    )}

                    {pcieCapacity === "ib" && (
                      <>
                        <select
                          value={ibSpeed}
                          onChange={(e) => setIbSpeed(e.target.value)}
                          className="p-2 mb-4 text-base border-none rounded-md bg-white"
                        >
                          {ibSpeeds.map((speed) => (
                            <option key={speed} value={speed}>
                              {speed.toUpperCase()}
                            </option>
                          ))}
                        </select>

                        <select
                          value={ibPortType}
                          onChange={(e) => setIbPortType(e.target.value)}
                          className="p-2 mb-4 text-base border-none rounded-md bg-white"
                        >
                          {portTypes.slice(0, 2).map((type) => (
                            <option key={type} value={type}>
                              {type} Port
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </>
                )}

                {networkType === "ndc" && (
                  <>
                    <select
                      value={ndcCapacity}
                      onChange={(e) => setNdcCapacity(e.target.value)}
                      className="p-2 mb-4 text-base border-none rounded-md bg-white"
                    >
                      {pcieCapacities.slice(0, 3).map((capacity) => (
                        <option key={capacity} value={capacity}>
                          {capacity}
                        </option>
                      ))}
                    </select>

                    <select
                      value={ndcPortType}
                      onChange={(e) => setNdcPortType(e.target.value)}
                      className="p-2 mb-4 text-base border-none rounded-md bg-white"
                    >
                      {portTypes.map((type) => (
                        <option key={type} value={type}>
                          {type} Port
                        </option>
                      ))}
                    </select>
                  </>
                )}
              </>
            )}
          </>
        )}

        {productName === "ramDimm" && (
          <>
            <select
              value={ramType}
              onChange={(e) => setRamType(e.target.value)}
              className="p-2 mb-4 text-base border-none rounded-md bg-white"
            >
              <option value="">Select RAM Type</option>
              {ramTypes.map((type) => (
                <option key={type} value={type}>
                  {type.toUpperCase()}
                </option>
              ))}
            </select>

            <select
              value={ramGeneration}
              onChange={(e) => setRamGeneration(e.target.value)}
              className="p-2 mb-4 text-base border-none rounded-md bg-white"
            >
              <option value="">Select Generation</option>
              {ramGenerations.map((gen) => (
                <option key={gen} value={gen}>
                  {gen.toUpperCase()}
                </option>
              ))}
            </select>

            <select
              value={ramSpeed}
              onChange={(e) => setRamSpeed(e.target.value)}
              className="p-2 mb-4 text-base border-none rounded-md bg-white"
            >
              <option value="">Select RAM Speed</option>
              {ramSpeeds.map((speed) => (
                <option key={speed} value={speed}>
                  {speed} MT/s
                </option>
              ))}
            </select>

            <select
              value={ramCapacity}
              onChange={(e) => setRamCapacity(e.target.value)}
              className="p-2 mb-4 text-base border-none rounded-md bg-white"
            >
              <option value="">Select RAM Capacity</option>
              {ramCapacities.map((capacity) => (
                <option key={capacity} value={capacity}>
                  {capacity}
                </option>
              ))}
            </select>
          </>
        )}

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
          className="p-2 mb-4 text-base border-none rounded-md bg-white"
        />

        <button
          type="submit"
          className="py-3 px-6 text-base cursor-pointer border-none bg-green-500 text-white rounded-full transition-all duration-300 shadow-md hover:bg-green-600 hover:scale-105"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
