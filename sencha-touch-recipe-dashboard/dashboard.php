<?php
$metric = $_GET["metric"];
$result = "";

switch ($metric) {
    
	case "hrsandvaluebyyear":
		$result = "{success:true,items:[{ year: '2010', hrsbilled: '130000', hrsworked: '143000', valuebilled: '475000', valueworked: '500000' },{ year: '2011', hrsbilled: '149000', hrsworked: '158000', valuebilled: '270000', valueworked: '285000' },{ year: '2012', hrsbilled: '153000', hrsworked: '149000', valuebilled: '325000', valueworked: '380000' },{ year: '2013', hrsbilled: '165000', hrsworked: '171000', valuebilled: '265000', valueworked: '270000'}]}";
		break;
}		

header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
echo($result);