var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="optlang.data";var REMOTE_PACKAGE_BASE="optlang.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","optlang",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/optlang","tests",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/optlang/tests","data",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","optlang-1.4.7-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:241641,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1115,2649,3783,4710,5927,6869,7543,8745,9822,10841,11649,12672,13732,14773,15466,16339,17243,18100,19102,20212,21226,22209,23352,24250,25624,26975,27996,28886,30197,31639,32581,33660,35207,36347,37808,39175,40260,41340,42290,43229,44380,45309,46155,47134,48036,49150,50384,51159,52187,53187,53868,55055,56393,57635,58494,59459,60417,61173,62308,63306,64050,64920,65703,66790,67836,68855,70227,71332,72114,72920,73863,74876,75989,77500,78896,79785,80881,81849,82926,84137,85196,86152,87126,88452,89536,90505,91496,92528,93809,95062,96517,97542,98785,99678,100723,101603,102336,103151,103996,105094,105949,107015,108407,109676,110668,111478,112582,113678,114634,115463,116423,117416,118418,119259,120574,121935,123016,124449,125427,126713,127698,128973,130463,131518,132431,133253,134219,135151,135913,136699,137614,138258,139061,139807,140792,141621,142388,142939,143571,144426,145061,145960,147220,148150,149260,150027,150586,151310,152464,153569,154584,155444,156372,157313,158135,158859,159620,160240,161048,161811,162477,163301,163952,164582,165791,166638,167272,167791,168739,169543,170292,171355,172423,173622,174767,175670,176515,177284,177930,178358,179281,180044,181162,182359,183202,184081,184958,185728,186243,186999,187803,188617,189253,190018,191223,192364,193120,193889,194685,195532,196155,197009,197934,198880,199581,200588,201283,202399,203447,204085,204939,205776,206591,207479,208564,209801,211016,211770,213093,214268,215175,216447,217595,218430,219752,220915,221812,222935,224203,225006,225975,226759,227706,228626,229891,230927,231893,232960,234183,235641,237017,238197,239537,240593,241449],sizes:[1115,1534,1134,927,1217,942,674,1202,1077,1019,808,1023,1060,1041,693,873,904,857,1002,1110,1014,983,1143,898,1374,1351,1021,890,1311,1442,942,1079,1547,1140,1461,1367,1085,1080,950,939,1151,929,846,979,902,1114,1234,775,1028,1e3,681,1187,1338,1242,859,965,958,756,1135,998,744,870,783,1087,1046,1019,1372,1105,782,806,943,1013,1113,1511,1396,889,1096,968,1077,1211,1059,956,974,1326,1084,969,991,1032,1281,1253,1455,1025,1243,893,1045,880,733,815,845,1098,855,1066,1392,1269,992,810,1104,1096,956,829,960,993,1002,841,1315,1361,1081,1433,978,1286,985,1275,1490,1055,913,822,966,932,762,786,915,644,803,746,985,829,767,551,632,855,635,899,1260,930,1110,767,559,724,1154,1105,1015,860,928,941,822,724,761,620,808,763,666,824,651,630,1209,847,634,519,948,804,749,1063,1068,1199,1145,903,845,769,646,428,923,763,1118,1197,843,879,877,770,515,756,804,814,636,765,1205,1141,756,769,796,847,623,854,925,946,701,1007,695,1116,1048,638,854,837,815,888,1085,1237,1215,754,1323,1175,907,1272,1148,835,1322,1163,897,1123,1268,803,969,784,947,920,1265,1036,966,1067,1223,1458,1376,1180,1340,1056,856,192],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_optlang.data")}Module["addRunDependency"]("datafile_optlang.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/optlang/__init__.py",start:0,end:2677,audio:0},{filename:"/lib/python3.8/site-packages/optlang/container.py",start:2677,end:9633,audio:0},{filename:"/lib/python3.8/site-packages/optlang/cplex_interface.py",start:9633,end:50581,audio:0},{filename:"/lib/python3.8/site-packages/optlang/duality.py",start:50581,end:58248,audio:0},{filename:"/lib/python3.8/site-packages/optlang/exceptions.py",start:58248,end:59716,audio:0},{filename:"/lib/python3.8/site-packages/optlang/expression_parsing.py",start:59716,end:65803,audio:0},{filename:"/lib/python3.8/site-packages/optlang/glpk_exact_interface.py",start:65803,end:71010,audio:0},{filename:"/lib/python3.8/site-packages/optlang/glpk_interface.py",start:71010,end:106498,audio:0},{filename:"/lib/python3.8/site-packages/optlang/gurobi_interface.py",start:106498,end:136466,audio:0},{filename:"/lib/python3.8/site-packages/optlang/inspyred_interface.py",start:136466,end:149443,audio:0},{filename:"/lib/python3.8/site-packages/optlang/interface.py",start:149443,end:210235,audio:0},{filename:"/lib/python3.8/site-packages/optlang/scipy_interface.py",start:210235,end:235067,audio:0},{filename:"/lib/python3.8/site-packages/optlang/symbolics.py",start:235067,end:239432,audio:0},{filename:"/lib/python3.8/site-packages/optlang/util.py",start:239432,end:249606,audio:0},{filename:"/lib/python3.8/site-packages/optlang/_version.py",start:249606,end:250103,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/__init__.py",start:250103,end:250714,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/abstract_test_cases.py",start:250714,end:290955,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_change_solver.py",start:290955,end:294712,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_container.py",start:294712,end:303786,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_cplex_interface.py",start:303786,end:336655,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_duality.py",start:336655,end:344458,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_elements.py",start:344458,end:350195,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_expression_parsing.py",start:350195,end:353692,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_glpk_exact_interface.py",start:353692,end:373191,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_glpk_interface.py",start:373191,end:397538,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_gurobi_interface.py",start:397538,end:424473,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_inspyred_interface.py",start:424473,end:426564,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_interface.py",start:426564,end:436223,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_io.py",start:436223,end:440184,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_netlib_cplex_interface.py",start:440184,end:447149,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_netlib_glpk_exact_interface.py",start:447149,end:453119,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_netlib_glpk_interface.py",start:453119,end:459640,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_netlib_gurobi_interface.py",start:459640,end:467018,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_scipy_interface.py",start:467018,end:479430,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_symbolics.py",start:479430,end:479685,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/test_util.py",start:479685,end:489301,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/data/__init__.py",start:489301,end:489301,audio:0},{filename:"/lib/python3.8/site-packages/optlang/tests/data/parse_the_final_netlib_results.py",start:489301,end:490877,audio:0},{filename:"/lib/python3.8/site-packages/optlang-1.4.7-py3.8.egg-info/PKG-INFO",start:490877,end:500314,audio:0},{filename:"/lib/python3.8/site-packages/optlang-1.4.7-py3.8.egg-info/SOURCES.txt",start:500314,end:501947,audio:0},{filename:"/lib/python3.8/site-packages/optlang-1.4.7-py3.8.egg-info/dependency_links.txt",start:501947,end:501948,audio:0},{filename:"/lib/python3.8/site-packages/optlang-1.4.7-py3.8.egg-info/requires.txt",start:501948,end:502014,audio:0},{filename:"/lib/python3.8/site-packages/optlang-1.4.7-py3.8.egg-info/top_level.txt",start:502014,end:502022,audio:0},{filename:"/lib/python3.8/site-packages/optlang-1.4.7-py3.8.egg-info/zip-safe",start:502022,end:502023,audio:0}],remote_package_size:245737,package_uuid:"230fcf84-ae1b-472b-a393-832f04c8913e"})})();