Ext.define("dashboard.view.ValueWorkedChart", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.valueworkedchart",
    config: {
        flex: 1,
        xtype: "chart",
        store: "HrsAndValueByYear",
        cls: "chart",
        innerPadding: 10,
        animate: true,
        series: [
            {
                type: "line",
                xField: "year",
                yField: "valueworked",
                title: "Hours Worked",
                style: {
                    stroke: "#9d5d00",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "#9d5d00",
                    radius: 5,
                    lineWidth: 3
                }
            }
        ],
        axes: [
            {
                type: "numeric",
                position: "left",
                title: {
                    fontSize: 15,
                    text: "Hrs"
                },
                //minimum: 240000,
                //maximum: 500000,
                grid: {
                    even: {
                        fill: "#f9f9f9"
                    }
                }
            },
            {
                type: "category",
                position: "bottom"
            }
        ]
    }
});