"use client";
import { useEffect, useRef, useState } from "react";
import { useSpring } from "@react-spring/web";
import createGlobe from "cobe";
import colors from "../utils/colors";

interface Marker {
  location: [number, number];
  size: number;
}

interface GlobeProps {
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
  markers?: Marker[];
  scale?: number;
  className?: string;
  rotateToLocation?: string | [number, number];
  autoRotate?: boolean;
  rotateCities?: string[];
  rotationSpeed?: number;
}

export const cityCoordinates: Record<string, [number, number]> = {
  "san francisco": [37.7749, -122.4194],
  "new york": [40.7128, -74.006],
  london: [51.5074, -0.1278],
  tokyo: [35.6762, 139.6503],
  paris: [48.8566, 2.3522],
  moscow: [55.7558, 37.6176],
  dubai: [25.2048, 55.2708],
  singapore: [1.3521, 103.8198],
  // Brasil - cidades (com e sem acento onde aplicável)
  "sao paulo": [-23.5505, -46.6333],
  "são paulo": [-23.5505, -46.6333],
  "rio de janeiro": [-22.9068, -43.1729],
  brasilia: [-15.8267, -47.9218],
  brasília: [-15.8267, -47.9218],
  "belo horizonte": [-19.9167, -43.9345],
  curitiba: [-25.4297, -49.2719],
  salvador: [-12.9777, -38.5016],
  "porto alegre": [-30.0277, -51.2287],
  // Países/regiões (ponto central aproximado)
  brazil: [-14.235, -51.9253],
  argentina: [-38.4161, -63.6167],
  chile: [-35.6751, -71.543],
  colombia: [4.5709, -74.2973],
  peru: [-9.19, -75.0152],
  mexico: [23.6345, -102.5528],
  canada: [56.1304, -106.3468],
  australia: [-25.2744, 133.7751],
  germany: [51.1657, 10.4515],
  spain: [40.4637, -3.7492],
  "south africa": [-30.5595, 22.9375],
  "south korea": [35.9078, 127.7669],
  japan: [36.2048, 138.2529],
  india: [20.5937, 78.9629],
  brazilia: [-15.8267, -47.9218],
  // Mais cidades globais
  sydney: [-33.8688, 151.2093],
  melbourne: [-37.8136, 144.9631],
  "mexico city": [19.4326, -99.1332],
  lisbon: [38.7223, -9.1393],
  cairo: [30.0444, 31.2357],
  mumbai: [19.076, 72.8777],
  bangkok: [13.7563, 100.5018],
  jakarta: [-6.2088, 106.8456],
  beijing: [39.9042, 116.4074],
};

const locationToAngles = (lat: number, long: number): [number, number] => [
  Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
  (lat * Math.PI) / 180,
];

interface GlobeRenderer {
  destroy: () => void;
}

export default function Globe({
  baseColor = [0.3, 0.3, 0.3],
  markerColor = [0.1, 0.8, 1],
  glowColor = [1, 1, 1],
  markers = [
    { location: [37.7595, -122.4367], size: 0.03 },
    { location: [40.7128, -74.006], size: 0.1 },
  ],
  scale = 1,
  className = "aspect-square w-full max-w-[600px]",
  rotateToLocation,
  autoRotate = true,
  rotateCities = [],
  rotationSpeed = 3000,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const focusRef = useRef<[number, number] | null>(null);
  const phiRef = useRef(0);
  const rotationInterval = useRef<number | null>(null);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const globeRef = useRef<GlobeRenderer | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const hexToRgbArray = (hex: string): [number, number, number] => {
    const sanitized = hex.replace("#", "").slice(0, 6);
    const r = parseInt(sanitized.substring(0, 2), 16) / 255;
    const g = parseInt(sanitized.substring(2, 4), 16) / 255;
    const b = parseInt(sanitized.substring(4, 6), 16) / 255;
    return [Number(r.toFixed(4)), Number(g.toFixed(4)), Number(b.toFixed(4))];
  };

  const resolvedBaseColor = baseColor || hexToRgbArray(colors.gunmetal);
  const resolvedMarkerColor = markerColor || hexToRgbArray(colors.cyan);
  const resolvedGlowColor = glowColor || hexToRgbArray(colors.khaki);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  useEffect(() => {
    if (rotateCities.length === 0) return;

    const rotateToNextCity = () => {
      const nextIndex = (currentCityIndex + 1) % rotateCities.length;
      const city = rotateCities[nextIndex].toLowerCase();
      const coordinates = cityCoordinates[city];

      if (coordinates) {
        focusRef.current = locationToAngles(...coordinates);
        setCurrentCityIndex(nextIndex);
      }
    };

    if (isVisible) {
      const city = rotateCities[currentCityIndex].toLowerCase();
      const coordinates = cityCoordinates[city];
      if (coordinates) {
        focusRef.current = locationToAngles(...coordinates);
      }

      rotationInterval.current = window.setInterval(
        rotateToNextCity,
        rotationSpeed
      );
    }

    return () => {
      if (rotationInterval.current) {
        clearInterval(rotationInterval.current);
      }
    };
  }, [rotateCities, currentCityIndex, rotationSpeed, isVisible]);

  useEffect(() => {
    if (!rotateToLocation) {
      focusRef.current = null;
      return;
    }

    let coordinates: [number, number];
    if (typeof rotateToLocation === "string") {
      const city = rotateToLocation.toLowerCase();
      coordinates = cityCoordinates[city] || [0, 0];
    } else {
      coordinates = rotateToLocation;
    }

    focusRef.current = locationToAngles(...coordinates);
  }, [rotateToLocation]);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    let width = canvasRef.current.offsetWidth || 300;
    const doublePi = Math.PI * 2;
    let currentPhi = 0;
    let currentTheta = 0;
    let animationFrame: number | null = null;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth || 300;
      }
    };

    window.addEventListener("resize", onResize);

    try {
      globeRef.current = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: resolvedBaseColor,
        markerColor: resolvedMarkerColor,
        glowColor: resolvedGlowColor,
        markers: markers || [],
        scale: scale || 1,
        onRender: (state: any) => {
          if (!state) return;

          if (autoRotate && !pointerInteracting.current && !focusRef.current) {
            phiRef.current += 0.01;
          }

          if (focusRef.current) {
            const [focusPhi, focusTheta] = focusRef.current;
            const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
            const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;

            currentPhi +=
              distPositive < distNegative
                ? distPositive * 0.08
                : -distNegative * 0.08;
            currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
          } else {
            currentPhi = phiRef.current + r.get();
          }

          state.phi = currentPhi;
          state.theta = focusRef.current ? currentTheta : 0;
          state.width = width * 2;
          state.height = width * 2;
        },
      });

      if (canvasRef.current) {
        setTimeout(() => {
          if (canvasRef.current) canvasRef.current.style.opacity = "1";
        }, 100);
      }
    } catch (error) {
      console.error("Error creating globe:", error);
    }

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
      window.removeEventListener("resize", onResize);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [
    baseColor,
    markerColor,
    glowColor,
    markers,
    scale,
    r,
    autoRotate,
    isVisible,
  ]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}      
        className="w-full h-full  opacity-0 transition-opacity duration-1000"
        style={{ contain: "layout paint size", touchAction: "none" }}
      />
    </div>
  );
}
