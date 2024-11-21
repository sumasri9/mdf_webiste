(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_new_product_page_jsx_86e8ea._.js", {

"[project]/src/app/new_product/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const NewProduct = ()=>{
    _s();
    const [productName, setProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [driveType, setDriveType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hddType, setHddType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formFactor, setFormFactor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hddCapacity, setHddCapacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ssdType, setSsdType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ssdCapacity, setSsdCapacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cardType, setCardType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [networkType, setNetworkType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pcieCapacity, setPcieCapacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pciePortType, setPciePortType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ibSpeed, setIbSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ibPortType, setIbPortType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ndcCapacity, setNdcCapacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ndcPortType, setNdcPortType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ramType, setRamType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ramGeneration, setRamGeneration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ramSpeed, setRamSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ramCapacity, setRamCapacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ssdFormFactor, setSsdFormFactor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const productOptions = [
        "cards",
        "cables",
        "drives",
        "cmosBatteries",
        "ramDimm"
    ];
    const driveTypes = [
        "hdd",
        "ssd"
    ];
    const hddTypes = [
        "sata",
        "nlsas",
        "10k",
        "15k"
    ];
    const formFactors = [
        "2.5",
        "3.5"
    ];
    const ssdTypes = [
        "sata",
        "vsas",
        "sas",
        "nvme"
    ];
    const ssdFormFactorsMap = {
        sata: [
            "2.5 inch"
        ],
        vsas: [
            "2.5 inch"
        ],
        sas: [
            "2.5 inch"
        ],
        nvme: [
            "m.2",
            "pcie"
        ]
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
        "100TB"
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
                "32 TB (coming)"
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
                "32 TB (coming)"
            ]
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
                "32 TB (coming)"
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
                "32 TB (coming)"
            ]
        },
        "10k": {
            2.5: [
                "300GB",
                "600GB",
                "1.2 TB",
                "2.4 TB"
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
                "32 TB (coming)"
            ]
        },
        "15k": {
            2.5: [
                "300GB",
                "600GB",
                "1.2 TB",
                "2.4 TB"
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
                "32 TB (coming)"
            ]
        }
    };
    const cardTypes = [
        "network",
        "raid",
        "boss"
    ];
    const networkTypes = [
        "pcie",
        "ndc"
    ];
    const pcieCapacities = [
        "gigi",
        "25gig",
        "10gig",
        "ib"
    ];
    const portTypes = [
        "single",
        "dual",
        "quad"
    ];
    const ibSpeeds = [
        "fdr",
        "hdr"
    ];
    const ramTypes = [
        "rdimm",
        "lrdimm",
        "hbm",
        "cxl"
    ];
    const ramGenerations = [
        "ddr3",
        "ddr4",
        "ddr5",
        "mcr",
        "cxl"
    ];
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
        "8800"
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
        "512GB"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        productName
    ]);
    // useEffect(() => {
    //   if (driveType === "hdd") {
    //     setSsdType("");
    //     setSsdCapacity("");
    //     setSsdFormFactor("");
    //   } else if (driveType === "ssd") {
    //     setHddType("");
    //     // setFormFactor("");
    //     setHddCapacity("");
    //   }
    // }, [driveType]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (driveType === "hdd") {
            setFormFactor(""); // Reset form factor for HDD
        } else if (driveType === "ssd") {
            setFormFactor(""); // Reset form factor for SSD
        }
    }, [
        driveType
    ]);
    // useEffect(() => {
    //   if (ssdType) {
    //     setSsdFormFactor("");
    //   }
    // }, [ssdType]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setHddCapacity("");
    }, [
        hddType,
        formFactor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        cardType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (networkType === "pcie") {
            setNdcCapacity("");
            setNdcPortType("");
        } else if (networkType === "ndc") {
            setPcieCapacity("");
            setPciePortType("");
            setIbSpeed("");
            setIbPortType("");
        }
    }, [
        networkType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ([
            "gigi",
            "25gig",
            "10gig"
        ].includes(pcieCapacity)) {
            setIbSpeed("");
            setIbPortType("");
        } else if (pcieCapacity === "ib") {
            setPciePortType("");
        }
    }, [
        pcieCapacity
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let formData;
        let apiEndpoint = "/api/new-product";
        if (productName === "cmosBatteries") {
            formData = {
                quantity: parseInt(quantity)
            };
            apiEndpoint = "/api/cmos_battery";
        }
        if (productName === "drives") {
            // Handle drive-specific data
            formData = {
                ssdType: driveType === "ssd" ? ssdType : null,
                hddType: driveType === "hdd" ? hddType : null,
                formFactor,
                // ssdFormFactor,
                capacity: driveType === "ssd" ? ssdCapacity : hddCapacity,
                quantity: parseInt(quantity)
            };
            apiEndpoint = "/api/drives";
        } else if (productName === "ramDimm") {
            // Handle RAM-specific data
            formData = {
                ramType,
                ramGeneration,
                ramSpeed,
                ramCapacity,
                quantity: parseInt(quantity)
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
                quantity: parseInt(quantity)
            };
        }
        try {
            const response = await fetch(apiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-600 to-yellow-100 text-gray-800 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "flex flex-col w-80 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-4 text-center",
                    children: "Add/Remove Product"
                }, void 0, false, {
                    fileName: "[project]/src/app/new_product/page.jsx",
                    lineNumber: 393,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: productName,
                    onChange: (e)=>setProductName(e.target.value),
                    required: true,
                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Select Product"
                        }, void 0, false, {
                            fileName: "[project]/src/app/new_product/page.jsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this),
                        productOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: option,
                                children: option
                            }, option, false, {
                                fileName: "[project]/src/app/new_product/page.jsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/new_product/page.jsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this),
                productName === "drives" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: driveType,
                            onChange: (e)=>setDriveType(e.target.value),
                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select Drive Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 418,
                                    columnNumber: 15
                                }, this),
                                driveTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: type,
                                        children: type.toUpperCase()
                                    }, type, false, {
                                        fileName: "[project]/src/app/new_product/page.jsx",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/new_product/page.jsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this),
                        driveType === "hdd" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: hddType,
                                    onChange: (e)=>setHddType(e.target.value),
                                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                    children: hddTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: type,
                                            children: type.toUpperCase()
                                        }, type, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 434,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 428,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formFactor,
                                    onChange: (e)=>setFormFactor(e.target.value),
                                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                    children: formFactors.map((factor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: factor,
                                            children: [
                                                factor,
                                                " inch"
                                            ]
                                        }, factor, true, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 446,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 440,
                                    columnNumber: 17
                                }, this),
                                hddType && formFactor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: hddCapacity,
                                    onChange: (e)=>setHddCapacity(e.target.value),
                                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select HDD Capacity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 487,
                                            columnNumber: 21
                                        }, this),
                                        hddCapacitiesMap[hddType]?.[formFactor]?.map((capacity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: capacity,
                                                children: capacity
                                            }, capacity, false, {
                                                fileName: "[project]/src/app/new_product/page.jsx",
                                                lineNumber: 490,
                                                columnNumber: 25
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 482,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true),
                        driveType === "ssd" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: ssdType,
                                    onChange: (e)=>setSsdType(e.target.value),
                                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select SSD Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 534,
                                            columnNumber: 19
                                        }, this),
                                        ssdTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: type,
                                                children: type.toUpperCase()
                                            }, type, false, {
                                                fileName: "[project]/src/app/new_product/page.jsx",
                                                lineNumber: 536,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 529,
                                    columnNumber: 17
                                }, this),
                                ssdType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: ssdFormFactor,
                                    onChange: (e)=>setSsdFormFactor(e.target.value),
                                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select SSD Form Factor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 548,
                                            columnNumber: 21
                                        }, this),
                                        ssdFormFactorsMap[ssdType]?.map((factor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: factor,
                                                children: factor
                                            }, factor, false, {
                                                fileName: "[project]/src/app/new_product/page.jsx",
                                                lineNumber: 550,
                                                columnNumber: 23
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 543,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: ssdCapacity,
                                    onChange: (e)=>setSsdCapacity(e.target.value),
                                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select SSD Capacity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 562,
                                            columnNumber: 19
                                        }, this),
                                        ssdCapacities.map((capacity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: capacity,
                                                children: capacity
                                            }, capacity, false, {
                                                fileName: "[project]/src/app/new_product/page.jsx",
                                                lineNumber: 564,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 557,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true),
                productName === "cards" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: cardType,
                            onChange: (e)=>setCardType(e.target.value),
                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select Card Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 581,
                                    columnNumber: 15
                                }, this),
                                cardTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: type,
                                        children: type
                                    }, type, false, {
                                        fileName: "[project]/src/app/new_product/page.jsx",
                                        lineNumber: 583,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/new_product/page.jsx",
                            lineNumber: 576,
                            columnNumber: 13
                        }, this),
                        cardType === "network" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: networkType,
                                    onChange: (e)=>setNetworkType(e.target.value),
                                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select Network Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 596,
                                            columnNumber: 19
                                        }, this),
                                        networkTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: type,
                                                children: type.toUpperCase()
                                            }, type, false, {
                                                fileName: "[project]/src/app/new_product/page.jsx",
                                                lineNumber: 598,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 591,
                                    columnNumber: 17
                                }, this),
                                networkType === "pcie" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: pcieCapacity,
                                            onChange: (e)=>setPcieCapacity(e.target.value),
                                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                            children: pcieCapacities.map((capacity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: capacity,
                                                    children: capacity
                                                }, capacity, false, {
                                                    fileName: "[project]/src/app/new_product/page.jsx",
                                                    lineNumber: 612,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 606,
                                            columnNumber: 21
                                        }, this),
                                        [
                                            "gigi",
                                            "25gig",
                                            "10gig"
                                        ].includes(pcieCapacity) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: pciePortType,
                                            onChange: (e)=>setPciePortType(e.target.value),
                                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                            children: portTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: type,
                                                    children: [
                                                        type,
                                                        " Port"
                                                    ]
                                                }, type, true, {
                                                    fileName: "[project]/src/app/new_product/page.jsx",
                                                    lineNumber: 625,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 619,
                                            columnNumber: 23
                                        }, this),
                                        pcieCapacity === "ib" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: ibSpeed,
                                                    onChange: (e)=>setIbSpeed(e.target.value),
                                                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                                    children: ibSpeeds.map((speed)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: speed,
                                                            children: speed.toUpperCase()
                                                        }, speed, false, {
                                                            fileName: "[project]/src/app/new_product/page.jsx",
                                                            lineNumber: 640,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/new_product/page.jsx",
                                                    lineNumber: 634,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: ibPortType,
                                                    onChange: (e)=>setIbPortType(e.target.value),
                                                    className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                                    children: portTypes.slice(0, 2).map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: type,
                                                            children: [
                                                                type,
                                                                " Port"
                                                            ]
                                                        }, type, true, {
                                                            fileName: "[project]/src/app/new_product/page.jsx",
                                                            lineNumber: 652,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/new_product/page.jsx",
                                                    lineNumber: 646,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true),
                                networkType === "ndc" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: ndcCapacity,
                                            onChange: (e)=>setNdcCapacity(e.target.value),
                                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                            children: pcieCapacities.slice(0, 3).map((capacity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: capacity,
                                                    children: capacity
                                                }, capacity, false, {
                                                    fileName: "[project]/src/app/new_product/page.jsx",
                                                    lineNumber: 670,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 664,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: ndcPortType,
                                            onChange: (e)=>setNdcPortType(e.target.value),
                                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                                            children: portTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: type,
                                                    children: [
                                                        type,
                                                        " Port"
                                                    ]
                                                }, type, true, {
                                                    fileName: "[project]/src/app/new_product/page.jsx",
                                                    lineNumber: 682,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/new_product/page.jsx",
                                            lineNumber: 676,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true),
                productName === "ramDimm" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: ramType,
                            onChange: (e)=>setRamType(e.target.value),
                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select RAM Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 701,
                                    columnNumber: 15
                                }, this),
                                ramTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: type,
                                        children: type.toUpperCase()
                                    }, type, false, {
                                        fileName: "[project]/src/app/new_product/page.jsx",
                                        lineNumber: 703,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/new_product/page.jsx",
                            lineNumber: 696,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: ramGeneration,
                            onChange: (e)=>setRamGeneration(e.target.value),
                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select Generation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 714,
                                    columnNumber: 15
                                }, this),
                                ramGenerations.map((gen)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: gen,
                                        children: gen.toUpperCase()
                                    }, gen, false, {
                                        fileName: "[project]/src/app/new_product/page.jsx",
                                        lineNumber: 716,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/new_product/page.jsx",
                            lineNumber: 709,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: ramSpeed,
                            onChange: (e)=>setRamSpeed(e.target.value),
                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select RAM Speed"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 727,
                                    columnNumber: 15
                                }, this),
                                ramSpeeds.map((speed)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: speed,
                                        children: [
                                            speed,
                                            " MT/s"
                                        ]
                                    }, speed, true, {
                                        fileName: "[project]/src/app/new_product/page.jsx",
                                        lineNumber: 729,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/new_product/page.jsx",
                            lineNumber: 722,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: ramCapacity,
                            onChange: (e)=>setRamCapacity(e.target.value),
                            className: "p-2 mb-4 text-base border-none rounded-md bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select RAM Capacity"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/new_product/page.jsx",
                                    lineNumber: 740,
                                    columnNumber: 15
                                }, this),
                                ramCapacities.map((capacity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: capacity,
                                        children: capacity
                                    }, capacity, false, {
                                        fileName: "[project]/src/app/new_product/page.jsx",
                                        lineNumber: 742,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/new_product/page.jsx",
                            lineNumber: 735,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    value: quantity,
                    onChange: (e)=>setQuantity(e.target.value),
                    placeholder: "Quantity",
                    required: true,
                    className: "p-2 mb-4 text-base border-none rounded-md bg-white"
                }, void 0, false, {
                    fileName: "[project]/src/app/new_product/page.jsx",
                    lineNumber: 750,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "py-3 px-6 text-base cursor-pointer border-none bg-green-500 text-white rounded-full transition-all duration-300 shadow-md hover:bg-green-600 hover:scale-105",
                    children: "Add Product"
                }, void 0, false, {
                    fileName: "[project]/src/app/new_product/page.jsx",
                    lineNumber: 759,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/new_product/page.jsx",
            lineNumber: 389,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/new_product/page.jsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
};
_s(NewProduct, "6AN1uP0WidehWtONWqPjPiFiPkU=");
_c = NewProduct;
const __TURBOPACK__default__export__ = NewProduct;
var _c;
__turbopack_refresh__.register(_c, "NewProduct");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/new_product/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_new_product_page_jsx_86e8ea._.js.map