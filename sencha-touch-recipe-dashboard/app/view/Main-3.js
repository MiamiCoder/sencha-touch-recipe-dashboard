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
                        items:[
                            {
                                xtype: "container",
                                docked: "top",
                                html: "Hours Worked",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "container",
                                html: "Hours Worked Chart Placeholder",
                                margin: "15 0 0 15"
                            }
                        ]
                    },
                    {
                        xtype: "container",
                        flex: 1,
                        layout:"vbox",
                        items:[
                            {
                                xtype: "container",
                                docked: "top",
                                html: "Hours Billed",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "container",
                                html: "Hours Billed Chart Placeholder",
                                margin: "15 0 0 15"
                            }
                        ]
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
                        items: [
                            {
                                xtype: "container",
                                docked: "top",
                                html: "Value Worked",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "container",
                                html: "Walue Worked Chart Placeholder",
                                margin: "15 0 0 15"
                            }
                        ]
                    },
                    {
                        xtype: "container",
                        flex: 1,
                        layout: "vbox",
                        items: [
                            {
                                xtype: "container",
                                docked: "top",
                                html: "Value Billed",
                                margin: "15 0 0 15"
                            },
                            {
                                xtype: "container",
                                html: "Value Billed Chart Placeholder",
                                margin: "15 0 0 15"
                            }
                        ]
                    }
                ]
            }                
        ]
    }
});