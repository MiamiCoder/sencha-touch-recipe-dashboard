Ext.define("dashboard.store.HrsAndValueByYear", {
    extend: "Ext.data.Store",
    config: {
        proxy: {
            type: 'ajax',
            url: '../../services/dashboard.php?metric=hrsandvaluebyyear',
            model: 'dashboard.model.HrsAndValueByYear',
            reader: {
                type: "json",
                rootProperty: "items"
            }
        },
        autoLoad: true
    }
    //config: {
    //    data: [
    //        { year: "2010", hrsbilled: 130000, hrsworked: 143000, valuebilled: 475000, valueworked: 500000 },
    //        { year: "2011", hrsbilled: 149000, hrsworked: 158000, valuebilled: 270000, valueworked: 285000 },
    //        { year: "2012", hrsbilled: 153000, hrsworked: 149000, valuebilled: 325000, valueworked: 380000 },
    //        { year: "2013", hrsbilled: 165000, hrsworked: 171000, valuebilled: 265000, valueworked: 270000 }
    //    ]
    //}
});