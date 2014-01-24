Ext.define("dashboard.model.HrsAndValueByYear", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "hrsbilled", type: "int" },
            { name: "hrsworked", type: "int" },
            { name: "valuebilled", type: "int" },
            { name: "valueworked", type: "int" },
            { name: "year", type: "int" }
        ]
    }
});