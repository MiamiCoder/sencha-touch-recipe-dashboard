Ext.define("dashboard.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            mainView:"main"
        },
        control: {
            mainView: {
                refreshRequestCmd: "onRefreshRequestCmd"
            }
        }
    },
    onRefreshRequestCmd: function (view) {
        Ext.getStore("HrsAndValueByYear").load();
        console.log("load");
    }
});