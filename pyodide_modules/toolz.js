var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="toolz.data";var REMOTE_PACKAGE_BASE="toolz.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","toolz",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/toolz","sandbox",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/toolz","curried",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/toolz","tests",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","tlz",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","toolz-0.10.0-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:99473,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1352,2117,2926,3869,4709,5272,5772,6509,7427,8588,9341,10511,11577,12551,13819,15009,16346,17539,18803,19810,20829,21943,23202,24266,25383,26745,28101,29083,30085,30712,31531,32506,33419,34752,36042,36920,37971,39134,40352,41641,42963,44275,45573,46793,47864,49117,50449,51793,53134,54566,56036,56953,58102,59254,60510,61141,61985,63134,64198,65250,66214,67316,68174,69254,70149,71265,72275,73381,74337,75119,75660,76301,77088,77842,78486,79685,80687,81725,82654,83538,84530,85515,86533,87359,88224,89306,90355,91105,91930,92553,93390,94515,95640,96737,97970,99006],sizes:[1352,765,809,943,840,563,500,737,918,1161,753,1170,1066,974,1268,1190,1337,1193,1264,1007,1019,1114,1259,1064,1117,1362,1356,982,1002,627,819,975,913,1333,1290,878,1051,1163,1218,1289,1322,1312,1298,1220,1071,1253,1332,1344,1341,1432,1470,917,1149,1152,1256,631,844,1149,1064,1052,964,1102,858,1080,895,1116,1010,1106,956,782,541,641,787,754,644,1199,1002,1038,929,884,992,985,1018,826,865,1082,1049,750,825,623,837,1125,1125,1097,1233,1036,467],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_toolz.data")}Module["addRunDependency"]("datafile_toolz.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/toolz/__init__.py",start:0,end:324,audio:0},{filename:"/lib/python3.8/site-packages/toolz/_signatures.py",start:324,end:22792,audio:0},{filename:"/lib/python3.8/site-packages/toolz/compatibility.py",start:22792,end:23949,audio:0},{filename:"/lib/python3.8/site-packages/toolz/dicttoolz.py",start:23949,end:32948,audio:0},{filename:"/lib/python3.8/site-packages/toolz/functoolz.py",start:32948,end:67453,audio:0},{filename:"/lib/python3.8/site-packages/toolz/itertoolz.py",start:67453,end:95115,audio:0},{filename:"/lib/python3.8/site-packages/toolz/recipes.py",start:95115,end:96402,audio:0},{filename:"/lib/python3.8/site-packages/toolz/utils.py",start:96402,end:96541,audio:0},{filename:"/lib/python3.8/site-packages/toolz/sandbox/__init__.py",start:96541,end:96609,audio:0},{filename:"/lib/python3.8/site-packages/toolz/sandbox/core.py",start:96609,end:100945,audio:0},{filename:"/lib/python3.8/site-packages/toolz/sandbox/parallel.py",start:100945,end:103776,audio:0},{filename:"/lib/python3.8/site-packages/toolz/curried/__init__.py",start:103776,end:106476,audio:0},{filename:"/lib/python3.8/site-packages/toolz/curried/exceptions.py",start:106476,end:106813,audio:0},{filename:"/lib/python3.8/site-packages/toolz/curried/operator.py",start:106813,end:107303,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_compatibility.py",start:107303,end:107848,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_curried.py",start:107848,end:111495,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_curried_doctests.py",start:111495,end:111769,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_dicttoolz.py",start:111769,end:120702,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_functoolz.py",start:120702,end:141039,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_inspect_args.py",start:141039,end:157255,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_itertoolz.py",start:157255,end:175458,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_recipes.py",start:175458,end:176278,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_serialization.py",start:176278,end:182136,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_signatures.py",start:182136,end:185063,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_tlz.py",start:185063,end:186572,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_utils.py",start:186572,end:186728,audio:0},{filename:"/lib/python3.8/site-packages/tlz/__init__.py",start:186728,end:187066,audio:0},{filename:"/lib/python3.8/site-packages/tlz/_build_tlz.py",start:187066,end:190413,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.10.0-py3.8.egg-info/PKG-INFO",start:190413,end:196627,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.10.0-py3.8.egg-info/SOURCES.txt",start:196627,end:197528,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.10.0-py3.8.egg-info/dependency_links.txt",start:197528,end:197529,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.10.0-py3.8.egg-info/not-zip-safe",start:197529,end:197530,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.10.0-py3.8.egg-info/top_level.txt",start:197530,end:197540,audio:0}],remote_package_size:103569,package_uuid:"b0a1acc6-a28c-4613-83e1-20987409099f"})})();