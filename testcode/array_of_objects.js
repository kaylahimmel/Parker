// array of objects (state code state name)
var stateCodes = [
     <option value="">None Selected</option>
     <option value="al" data-lat="32.806671" data-long="-86.791130" zoom="map.setZoomLevel(6)">Alabama</option>
     <option value="ak" data-lat="61.370716" data-long="-152.404419" zoom="map.setZoomLevel(3)">Alaska</option>
     <option value="as" data-lat="-14.22865935" data-long="-169.8503777" zoom="map.setZoomLevel(8)">American Samoa</option>
     <option value="az" data-lat="33.729759" data-long="-111.431221" zoom="map.setZoomLevel(6)">Arizona</option>
     <option value="ar" data-lat="34.969704" data-long="-92.373123" zoom="map.setZoomLevel(6)">Arkansas</option>
     <option value="ca" data-lat="36.116203" data-long="-119.681564" zoom="map.setZoomLevel(5)">California</option>
     <option value="co" data-lat="39.059811" data-long="-105.311104" zoom="map.setZoomLevel(6)">Colorado</option>
     <option value="ct" data-lat="41.597782" data-long="-72.755371" zoom="map.setZoomLevel(7)">Connecticut</option>
     <option value="de" data-lat="39.318523" data-long="-75.507141" zoom="map.setZoomLevel(7)">Delaware</option>
     <option value="dc" data-lat="38.897438" data-long="-77.026817" zoom="map.setZoomLevel(9)">District of Columbia</option>
     <option value="fl" data-lat="27.766279" data-long="-81.686783" zoom="map.setZoomLevel(6)">Florida</option>
     <option value="ga" data-lat="33.040619" data-long="-83.643074" zoom="map.setZoomLevel(6)">Georgia</option>
     <option value="gu" data-lat="13.43795691" data-long="144.6922461" zoom="map.setZoomLevel(8)">Guam</option>
     <option value="hi" data-lat="21.094318" data-long="-157.498337" zoom="map.setZoomLevel(7)">Hawaii</option>
     <option value="id" data-lat="44.240459" data-long="-114.478828" zoom="map.setZoomLevel(5)">Idaho</option>
     <option value="il" data-lat="40.349457" data-long="-88.986137" zoom="map.setZoomLevel(6)">Illinois</option>
     <option value="in" data-lat="39.849426" data-long="-86.258278" zoom="map.setZoomLevel(6)">Indiana</option>
     <option value="ia" data-lat="42.011539" data-long="-93.210526" zoom="map.setZoomLevel(6)">Iowa</option>
     <option value="ks" data-lat="38.526600" data-long="-96.726486" zoom="map.setZoomLevel(6)">Kansas</option>
     <option value="ky" data-lat="37.668140" data-long="-84.670067" zoom="map.setZoomLevel(6)">Kentucky</option>
     <option value="la" data-lat="31.169546" data-long="-91.867805" zoom="map.setZoomLevel(6)">Louisiana</option>
     <option value="me" data-lat="44.693947" data-long="-69.381927" zoom="map.setZoomLevel(6)">Maine</option>
     <option value="md" data-lat="39.063946" data-long="-76.802101" zoom="map.setZoomLevel(7)">Maryland</option>
     <option value="ma" data-lat="42.230171" data-long="-71.530106" zoom="map.setZoomLevel(7)">Massachusetts</option>
     <option value="mi" data-lat="43.326618" data-long="-84.536095" zoom="map.setZoomLevel(6)">Michigan</option>
     <option value="mn" data-lat="45.694454" data-long="-93.900192" zoom="map.setZoomLevel(6)">Minnesota</option>
     <option value="ms" data-lat="32.741646" data-long="-89.678696" zoom="map.setZoomLevel(6)">Mississippi</option>
     <option value="mo" data-lat="38.456085" data-long="-92.288368" zoom="map.setZoomLevel(6)">Missouri</option>
     <option value="mt" data-lat="46.921925" data-long="-110.454353" zoom="map.setZoomLevel(6)">Montana</option>
     <option value="ne" data-lat="41.125370" data-long="-98.268082" zoom="map.setZoomLevel(6)">Nebraska</option>
     <option value="nv" data-lat="38.313515" data-long="-117.055374" zoom="map.setZoomLevel(6)">Nevada</option>
     <option value="nh" data-lat="43.452492" data-long="-71.563896" zoom="map.setZoomLevel(6)">New Hampshire</option>
     <option value="nj" data-lat="40.298904" data-long="-74.521011" zoom="map.setZoomLevel(7)">New Jersey</option>
     <option value="nm" data-lat="34.840515" data-long="-106.248482" zoom="map.setZoomLevel(6)">New Mexico</option>
     <option value="ny" data-lat="42.165726" data-long="-74.948051" zoom="map.setZoomLevel(6)">New York</option>
     <option value="nc" data-lat="35.630066" data-long="-79.806419" zoom="map.setZoomLevel(6)">North Carolina</option>
     <option value="nd" data-lat="47.528912" data-long="-99.784012" zoom="map.setZoomLevel(6)">North Dakota</option>
     <option value="mp" data-lat="15.21680033" data-long="145.7231096" zoom="map.setZoomLevel(8)">Northern Mariana Islands</option>
     <option value="oh" data-lat="40.388783" data-long="-82.764915" zoom="map.setZoomLevel(6)">Ohio</option>
     <option value="ok" data-lat="35.565342" data-long="-96.928917" zoom="map.setZoomLevel(6)">Oklahoma</option>
     <option value="or" data-lat="44.572021" data-long="-122.070938" zoom="map.setZoomLevel(6)">Oregon</option>
     <option value="pa" data-lat="40.590752" data-long="-77.209755" zoom="map.setZoomLevel(6)">Pennsylvania</option>
     <option value="pr" data-lat="18.46873857" data-long="-66.11848623" zoom="map.setZoomLevel(8)">Puerto Rico</option>
     <option value="ri" data-lat="41.680893" data-long="-71.511780" zoom="map.setZoomLevel(8)">Rhode Island</option>
     <option value="sc" data-lat="33.856892" data-long="-80.945007" zoom="map.setZoomLevel(6)">South Carolina</option>
     <option value="sd" data-lat="44.299782" data-long="-99.438828" zoom="map.setZoomLevel(6)">South Dakota</option>
     <option value="tn" data-lat="35.747845" data-long="-86.692345" zoom="map.setZoomLevel(6)">Tennessee</option>
     <option value="tx" data-lat="31.054487" data-long="-97.563461" zoom="map.setZoomLevel(5)">Texas</option>
     <option value="ut" data-lat="40.150032" data-long="-111.862434" zoom="map.setZoomLevel(6)">Utah</option>
     <option value="vt" data-lat="44.045876" data-long="-72.710686" zoom="map.setZoomLevel(6)">Vermont</option>
     <option value="vi" data-lat="17.81026717" data-long="-64.6222179" zoom="map.setZoomLevel(9)">Virgin Islands</option>
     <option value="va" data-lat="37.769337" data-long="-78.169968" zoom="map.setZoomLevel(6)">Virginia</option>
     <option value="wa" data-lat="47.400902" data-long="-121.490494" zoom="map.setZoomLevel(6)">Washington</option>
     <option value="wv" data-lat="38.491226" data-long="-80.954453" zoom="map.setZoomLevel(6)">West Virginia</option>
     <option value="wi" data-lat="44.268543" data-long="-89.616508" zoom="map.setZoomLevel(6)">Wisconsin</option>
     <option value="wy" data-lat="42.755966" data-long="-107.302490" zoom="map.setZoomLevel(6)">Wyoming</option>
];