
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMemo } from "react";
import L from "leaflet";
import companyDetails from "../../../config/site.jsx";


// Fix default marker icon issue in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const FooterMap = () => {
    const position = useMemo(
      () => [companyDetails.map.lat, companyDetails.map.lng],
      []
    );
  
    return (
      <div style={{ height: "220px", borderRadius: "12px", overflow: "hidden" }}>
        <MapContainer
          center={position}
          zoom={companyDetails.map.zoom}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
  
          <Marker position={position}>
            <Popup>
              <strong>{companyDetails.name}</strong>
              <br />
              {companyDetails.address}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  };
  
export default FooterMap;
  