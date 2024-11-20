import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
	Circle,
	GoogleMap,
	GoogleMapApiLoader,
	InfoWindow,
	Marker,
	MarkerClusterer,
	Polygon,
	Polyline,
	Rectangle,
} from "react-google-map-wrapper";
import { Divider, Typography } from "aspect-ui";

function App() {
	const locations = [
		{ lat: -31.56391, lng: 147.154312 },
		{ lat: -33.718234, lng: 150.363181 },
		{ lat: -33.727111, lng: 150.371124 },
		{ lat: -33.848588, lng: 151.209834 },
		{ lat: -33.851702, lng: 151.216968 },
		{ lat: -34.671264, lng: 150.863657 },
		{ lat: -35.304724, lng: 148.662905 },
		{ lat: -36.817685, lng: 175.699196 },
		{ lat: -36.828611, lng: 175.790222 },
		{ lat: -37.75, lng: 145.116667 },
		{ lat: -37.759859, lng: 145.128708 },
		{ lat: -37.765015, lng: 145.133858 },
		{ lat: -37.770104, lng: 145.143299 },
		{ lat: -37.7737, lng: 145.145187 },
		{ lat: -37.774785, lng: 145.137978 },
		{ lat: -37.819616, lng: 144.968119 },
		{ lat: -38.330766, lng: 144.695692 },
		{ lat: -39.927193, lng: 175.053218 },
		{ lat: -41.330162, lng: 174.865694 },
		{ lat: -42.734358, lng: 147.439506 },
		{ lat: -42.734358, lng: 147.501315 },
		{ lat: -42.735258, lng: 147.438 },
		{ lat: -43.999792, lng: 170.463352 },
	];
	const [isOpen, setOpen] = useState(false);
	const uluru = { lat: -25.363, lng: 131.044 };

	const flightPlanCoordinates = [
		{ lat: 37.772, lng: -122.214 },
		{ lat: 21.291, lng: -157.821 },
		{ lat: -18.142, lng: 178.431 },
		{ lat: -27.467, lng: 153.027 },
	];
	const triangleCoords = [
		{ lat: 25.774, lng: -80.19 },
		{ lat: 18.466, lng: -66.118 },
		{ lat: 32.321, lng: -64.757 },
	];
	const cityList = [
		{
			name: "chicago",
			center: { lat: 41.878, lng: -87.629 },
			population: 2714856,
		},
		{
			name: "newyork",
			center: { lat: 40.714, lng: -74.005 },
			population: 8405837,
		},
		{
			name: "losangeles",
			center: { lat: 34.052, lng: -118.243 },
			population: 3857799,
		},
		{
			name: "vancouver",
			center: { lat: 49.25, lng: -123.1 },
			population: 603502,
		},
	];
	const API = import.meta.env.VITE_MAP_API;

	return (
		<>
			<div>
				<Typography variant="display1" className="text-gray-200 mb-10">
					Google Map
				</Typography>
				<Typography variant="h2" className="text-gray-200 mb-4">
					Marker
				</Typography>
				<Suspense fallback={"Loading..."}>
					{/* Load the google map api */}
					<GoogleMapApiLoader apiKey={API} suspense>
						<GoogleMap
							className="h-[400px] w-[800px]"
							zoom={17}
							center={{ lat: 37.5709413, lng: 126.977787 }}>
							<Marker lat={37.5709413} lng={126.977787} />
						</GoogleMap>
					</GoogleMapApiLoader>
				</Suspense>
				<Divider className="my-10" />
				<Typography variant="h2" className="text-gray-200 mb-4">
					Marker Clusterer
				</Typography>
				<Suspense fallback={"Loading..."}>
					{/* Load the google map api */}
					<GoogleMapApiLoader apiKey={API} suspense>
						<GoogleMap
							className="h-[400px] w-[800px]"
							zoom={3}
							center={{ lat: -28.024, lng: 140.887 }}
							// {...}
						>
							<MarkerClusterer>
								{locations.map(({ lat, lng }, i) => (
									<Marker key={i} lat={lat} lng={lng} />
								))}
							</MarkerClusterer>
						</GoogleMap>
					</GoogleMapApiLoader>
				</Suspense>
				<Divider className="my-10" />
				<Typography variant="h2" className="text-gray-200 mb-4">
					Info Window
				</Typography>
				<Suspense fallback={"Loading..."}>
					{/* Load the google map api */}
					<GoogleMapApiLoader apiKey={API} suspense>
						<GoogleMap className="h-[400px] w-[800px]" zoom={4} center={uluru}>
							<InfoWindow
								ariaLabel="Uluru"
								content={<Content />}
								onCloseClick={() => setOpen(false)}
								open={isOpen}>
								<Marker
									{...uluru}
									title="Uluru (Ayers Rock)"
									onClick={() => setOpen(true)}
								/>
							</InfoWindow>
						</GoogleMap>
					</GoogleMapApiLoader>
				</Suspense>
				<Divider className="my-10" />
				<Typography variant="h2" className="text-gray-200 mb-4">
					Polyline
				</Typography>
				<Suspense fallback={"Loading..."}>
					{/* Load the google map api */}
					<GoogleMapApiLoader apiKey={API} suspense>
						<GoogleMap
							className="h-[400px] w-[800px]"
							initialZoom={3}
							initialCenter={{ lat: 0, lng: -180 }}>
							<Polyline
								path={flightPlanCoordinates}
								strokeColor="#FF0000"
								strokeOpacity={1.0}
								strokeWeight={2}
								geodesic
							/>
						</GoogleMap>
					</GoogleMapApiLoader>
				</Suspense>
				<Divider className="my-10" />
				<Typography variant="h2" className="text-gray-200 mb-4">
					Polyline
				</Typography>
				<Suspense fallback={"Loading..."}>
					{/* Load the google map api */}
					<GoogleMapApiLoader apiKey={API} suspense>
						<GoogleMap
							className="h-[400px] w-[800px]"
							initialZoom={5}
							initialCenter={{ lat: 24.886, lng: -70.268 }}
							mapOptions={{
								mapTypeId: "terrain",
							}}>
							<Polygon
								paths={triangleCoords}
								strokeColor="#FF0000"
								strokeOpacity={0.8}
								strokeWeight={2}
								fillColor="#FF0000"
								fillOpacity={0.35}
							/>
						</GoogleMap>
					</GoogleMapApiLoader>
				</Suspense>
				<Divider className="my-10" />
				<Typography variant="h2" className="text-gray-200 mb-4">
					Rectangle
				</Typography>
				<Suspense fallback={"Loading..."}>
					{/* Load the google map api */}
					<GoogleMapApiLoader apiKey={API} suspense>
						<GoogleMap
							className="h-[400px] w-[800px]"
							initialZoom={11}
							initialCenter={{ lat: 33.678, lng: -116.243 }}
							mapOptions={{
								mapTypeId: "terrain",
							}}>
							<Rectangle
								strokeColor="#FF0000"
								strokeOpacity={0.8}
								strokeWeight={2}
								fillColor="#FF0000"
								fillOpacity={0.35}
								bounds={{
									north: 33.685,
									south: 33.671,
									east: -116.234,
									west: -116.251,
								}}
							/>
						</GoogleMap>
					</GoogleMapApiLoader>
				</Suspense>
				<Divider className="my-10" />
				<Typography variant="h2" className="text-gray-200 mb-4">
					Circle
				</Typography>
				<Suspense fallback={"Loading..."}>
					{/* Load the google map api */}
					<GoogleMapApiLoader apiKey={API} suspense>
						<GoogleMap
							className="h-[400px] w-[800px]"
							initialZoom={4}
							initialCenter={{ lat: 37.09, lng: -95.712 }}
							mapOptions={{
								mapTypeId: "terrain",
							}}>
							{cityList.map(({ name, center, population }) => (
								<Circle
									key={name}
									strokeColor="#FF0000"
									strokeOpacity={0.8}
									strokeWeight={2}
									fillColor="#FF0000"
									fillOpacity={0.35}
									center={center}
									radius={Math.sqrt(population) * 100}
								/>
							))}
						</GoogleMap>
					</GoogleMapApiLoader>
				</Suspense>
			</div>
      
			<footer className="mt-10">
				Project Link{" "}
				<a href="https://github.com/NafisMahmudAyon/google-map">
					<span className="text-primary-500">Here</span>
				</a>
			</footer>
		</>
	);
}

export default App;

function Content() {
	return (
		<div id="content">
			<div id="siteNotice"></div>
			<h1 id="firstHeading" className="firstHeading">
				Uluru
			</h1>
			<div id="bodyContent">
				<p className="text-blue-500">
					<b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large
					sandstone rock formation in the southern part of the Northern
					Territory, central Australia. It lies 335&#160;km (208&#160;mi) south
					west of the nearest large town, Alice Springs; 450&#160;km
					(280&#160;mi) by road. Kata Tjuta and Uluru are the two major features
					of the Uluru - Kata Tjuta National Park. Uluru is sacred to the
					Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area.
					It has many springs, waterholes, rock caves and ancient paintings.
					Uluru is listed as a World Heritage Site.
				</p>
				<p>
					Attribution: Uluru,{" "}
					<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
						https://en.wikipedia.org/w/index.php?title=Uluru
					</a>{" "}
					(last visited June 22, 2009).
				</p>
			</div>
		</div>
	);
}

