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
                items: [
                    {
                        xtype: "container",
                        flex: 1,
                        layout:"vbox",
                        html: "First row - First column"
                    },
                    {
                        xtype: "container",
                        flex: 1,
                        layout:"vbox",
                        html: "First row - Second column"
                    }
                ]
            }            ,
            {
                xtype: "container",
                flex: 1,
                layout: "hbox",
                items: [
                    {
                        xtype: "container",
                        flex: 1,
                        layout: "vbox",
                        html: "Second row - First column"
                    },
                    {
                        xtype: "container",
                        flex: 1,
                        layout: "vbox",
                        html: "Second row - Second column"
                    }
                ]
            }                
        ]
    }
});