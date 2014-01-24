Ext.define("dashboard.view.HrsBilledChart", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.hrsbilledchart",
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
                yField: "hrsbilled",
                title: "Hours Billed",
                style: {
                    stroke: "#6d0060",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "#6d0060",
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
                //minimum: 132000,
                //maximum: 180000,
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