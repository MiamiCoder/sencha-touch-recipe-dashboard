Ext.define("dashboard.view.Main", {
    extend: "Ext.Container",
    requires: [
        "Ext.TitleBar"
    ],
    alias: "widget.main",
    config: {
        layout: {
            type:"vbox"
        },
        items: [
            {
                xtype: "titlebar",
                docked: "top",
                title: "Executive Dashboard",
                items: [
                    {
                        iconCls: "refresh",
                        align: "right",
                        handler: function () {
                            var parent = this.up("titlebar").getParent();
                            parent.fireEvent("refreshRequestCmd", parent);
                        }
                    }
                ]
            },            
            {
                xtype: "container",
                flex: 1,
                layout: "hbox",
                html: "First row"
            }            ,
            {
                xtype: "container",
                flex: 1,
                layout: "hbox",
                html: "Second row"
            }                
        ]
    }
});