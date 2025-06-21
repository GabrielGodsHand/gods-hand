'use client';

import { useEffect, useRef, useState } from 'react';
import TiltedCard from './TiltedCard';

interface DisasterLocation {
  id: string;
  lat: number;
  lng: number;
  name: string;
  type: string;
  amount: number;
  country?: string; // Add country field to match disasters to countries
}

interface InteractiveGlobeProps {
  disasters: DisasterLocation[];
  onDisasterClick?: (disaster: DisasterLocation) => void;
}

export default function InteractiveGlobe({ disasters, onDisasterClick }: InteractiveGlobeProps) {
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<{
    country: string;
    disasters: DisasterLocation[];
    position: { x: number; y: number };
  } | null>(null);

  useEffect(() => {
    if (!globeContainerRef.current) return;

    console.log('Starting globe initialization...');
    console.log('Container dimensions:', globeContainerRef.current.clientWidth, globeContainerRef.current.clientHeight);
    console.log('Disasters data:', disasters);

    let renderer: any;
    let scene: any;
    let camera: any;
    let controls: any;
    let globe: any;
    let animationId: number;

    const initGlobe = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Dynamic imports to avoid SSR issues
        const [
          threeModule,
          threeGlobeModule,
          controlsModule
        ] = await Promise.all([
          import('three'),
          import('three-globe'),
          import('three/examples/jsm/controls/TrackballControls.js')
        ]);

        const THREE = threeModule;
        const ThreeGlobe = threeGlobeModule.default;
        const { TrackballControls } = controlsModule;

        console.log('Three.js modules loaded');

        console.log('Fetching country data...');
        // Fetch country data
        const res = await fetch('/ne_110m_admin_0_countries.geojson');
        if (!res.ok) {
          throw new Error(`Failed to load country data: ${res.status} ${res.statusText}`);
        }
        const countries = await res.json();
        console.log('Country data loaded:', countries.features?.length, 'countries');

        // Create a set of affected countries based on disaster locations
        const affectedCountries = new Set();
        
        console.log('All disaster locations:', disasters.map(d => d.name));
        
        // Create a comprehensive mapping of location variations to GeoJSON country names
        const locationToCountryMap: { [key: string]: string[] } = {
          'turkey': ['Turkey', 'Türkiye'],
          'syria': ['Syria', 'Syrian Arab Republic'],
          'morocco': ['Morocco'],
          'libya': ['Libya'],
          'pakistan': ['Pakistan'],
          'afghanistan': ['Afghanistan'],
          'haiti': ['Haiti'],
          'philippines': ['Philippines'],
          'indonesia': ['Indonesia'],
          'japan': ['Japan'],
          'nepal': ['Nepal'],
          'chile': ['Chile'],
          'new zealand': ['New Zealand'],
          'california': ['United States of America', 'United States'],
          'florida': ['United States of America', 'United States'],
          'texas': ['United States of America', 'United States'],
          'louisiana': ['United States of America', 'United States'],
          'puerto rico': ['Puerto Rico'],
          'australia': ['Australia'],
          'greece': ['Greece'],
          'italy': ['Italy'],
          'portugal': ['Portugal'],
          'spain': ['Spain'],
          'france': ['France'],
          'germany': ['Germany'],
          'canada': ['Canada'],
          'brazil': ['Brazil'],
          'india': ['India'],
          'china': ['China', 'People\'s Republic of China'],
          'thailand': ['Thailand'],
          'myanmar': ['Myanmar', 'Burma'],
          'bangladesh': ['Bangladesh'],
          'sri lanka': ['Sri Lanka'],
          'madagascar': ['Madagascar'],
          'mozambique': ['Mozambique'],
          'somalia': ['Somalia'],
          'kenya': ['Kenya'],
          'ethiopia': ['Ethiopia'],
          'sudan': ['Sudan'],
          'yemen': ['Yemen'],
          'iraq': ['Iraq'],
          'iran': ['Iran', 'Islamic Republic of Iran'],
          'ukraine': ['Ukraine'],
          'russia': ['Russia', 'Russian Federation'],
          'poland': ['Poland'],
          'romania': ['Romania'],
          'hungary': ['Hungary'],
          'united kingdom': ['United Kingdom'],
          'uk': ['United Kingdom'],
          'usa': ['United States of America', 'United States'],
          'united states': ['United States of America', 'United States'],
          'mexico': ['Mexico'],
          'colombia': ['Colombia'],
          'venezuela': ['Venezuela'],
          'ecuador': ['Ecuador'],
          'peru': ['Peru'],
          'bolivia': ['Bolivia'],
          'argentina': ['Argentina'],
          'south africa': ['South Africa'],
          'nigeria': ['Nigeria'],
          'egypt': ['Egypt'],
          'algeria': ['Algeria']
        };

        // First, let's see what countries are actually in the GeoJSON and their exact names
        console.log('Sample country properties:');
        countries.features.slice(0, 5).forEach((country: any, index: number) => {
          console.log(`Country ${index}:`, {
            allProperties: country.properties,
            NAME: country.properties.NAME,
            NAME_EN: country.properties.NAME_EN,
            NAME_LONG: country.properties.NAME_LONG,
            ADMIN: country.properties.ADMIN,
            propertyKeys: Object.keys(country.properties)
          });
        });

        // Look for Turkey, Syria, Japan specifically with all possible property names
        const testCountries = ['Turkey', 'Syria', 'Japan'];
        testCountries.forEach(testCountry => {
          console.log(`\nSearching for "${testCountry}":`);
          countries.features.forEach((country: any, index: number) => {
            const props = country.properties;
            const hasMatch = Object.values(props).some((value: any) => 
              typeof value === 'string' && value.toLowerCase().includes(testCountry.toLowerCase())
            );
            
            if (hasMatch) {
              console.log(`Found match in country ${index}:`, props);
            }
          });
        });

        console.log('Final affected countries set:', Array.from(affectedCountries));

        // Process actual disaster locations to find affected countries
        affectedCountries.clear();
        
        // Process each actual disaster location
        disasters.forEach(disaster => {
          const location = disaster.name.toLowerCase().trim();
          console.log(`\n--- Processing actual disaster location: "${location}" ---`);
          
          let matched = false;
          
          // Method 1: Direct mapping using our location-to-country mapping
          if (locationToCountryMap[location]) {
            locationToCountryMap[location].forEach(countryVariant => {
              // Find the exact country in GeoJSON that matches this variant
              const foundCountry = countries.features.find((country: any) => {
                const name = (country.properties.name || '').toLowerCase();
                return name === countryVariant.toLowerCase();
              });
              
              if (foundCountry) {
                const countryName = foundCountry.properties.name;
                affectedCountries.add(countryName);
                console.log(`✓ Matched "${location}" to "${countryName}" via direct mapping`);
                matched = true;
              }
            });
          }
          
          // Method 2: Direct search in GeoJSON if mapping failed
          if (!matched) {
            console.log(`Trying direct search for "${location}"`);
            countries.features.forEach((country: any) => {
              const countryName = (country.properties.name || '').toLowerCase();
              
              // Exact match
              if (countryName === location) {
                affectedCountries.add(country.properties.name);
                console.log(`✓ Exact match: "${location}" = "${country.properties.name}"`);
                matched = true;
              }
              // Partial match for longer location names
              else if (location.length > 4 && (countryName.includes(location) || location.includes(countryName))) {
                affectedCountries.add(country.properties.name);
                console.log(`✓ Partial match: "${location}" ~ "${country.properties.name}"`);
                matched = true;
              }
            });
          }
          
          if (!matched) {
            console.log(`✗ No match found for "${location}"`);
          }
        });
        
        console.log('Final affected countries from actual disasters:', Array.from(affectedCountries));

        // Create the globe with country coloring
        console.log('Creating globe...');
        globe = new ThreeGlobe()
          .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg') // Warmer earth texture
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.2) // Slightly less margin for smoother look
          .hexPolygonUseDots(false) // Use solid polygons instead of dots
          .hexPolygonColor((d: any) => {
            const props = d.properties;
            const countryName = props.name || props.NAME || props.NAME_EN || props.ADMIN || props.NAME_LONG || '';
            const isAffected = affectedCountries.has(countryName);
            
            // Reduce logging now that it's working
            if (Math.random() < 0.02) { // Log ~2% of countries instead of 10%
              console.log(`Coloring country: "${countryName}" -> ${isAffected ? 'RED (#dc2626)' : 'GOLDEN (#f7d794)'}`);
            }
            
            // Divine color scheme: red for affected, warm golden for unaffected
            return isAffected ? '#dc2626' : '#f7d794'; // Red vs warm golden
          })
          .hexPolygonAltitude(0.008) // Slightly lower elevation for elegance
          .atmosphereColor('#fbbf24') // Golden atmosphere
          .atmosphereAltitude(0.15); // Subtle golden glow

        console.log('Setting up renderer...');
        // Setup renderer with transparent background
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(globeContainerRef.current!.clientWidth, globeContainerRef.current!.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0); // Transparent background
        globeContainerRef.current!.appendChild(renderer.domElement);

        console.log('Setting up scene...');
        // Setup scene with divine lighting
        scene = new THREE.Scene();
        scene.add(globe);
        scene.add(new THREE.AmbientLight(0xfbbf24, Math.PI * 0.4)); // Warm golden ambient light
        scene.add(new THREE.DirectionalLight(0xfef3c7, 0.8 * Math.PI)); // Soft golden directional light

        console.log('Setting up camera...');
        // Setup camera - start closer for bigger appearance
        camera = new THREE.PerspectiveCamera();
        camera.aspect = globeContainerRef.current!.clientWidth / globeContainerRef.current!.clientHeight;
        camera.updateProjectionMatrix();
        camera.position.z = 250; // Closer than 500 for bigger globe

        console.log('Setting up controls...');
        // Setup controls - allow free interaction
        controls = new TrackballControls(camera, renderer.domElement);
        controls.minDistance = 120; // Minimum zoom distance
        controls.maxDistance = 800; // Maximum zoom distance
        controls.rotateSpeed = 2; // Slower rotation for better control
        controls.zoomSpeed = 0.5; // Slower zoom for better control
        controls.panSpeed = 1; // Allow panning
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.1; // Smoother movement

        // Handle window resize
        const handleResize = () => {
          if (!globeContainerRef.current) return;
          camera.aspect = globeContainerRef.current.clientWidth / globeContainerRef.current.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(globeContainerRef.current.clientWidth, globeContainerRef.current.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Handle clicks on affected countries
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const handleClick = (event: MouseEvent) => {
          if (!globeContainerRef.current) return;
          
          const rect = globeContainerRef.current.getBoundingClientRect();
          mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(scene.children, true);

          if (intersects.length > 0) {
            // Find the clicked country
            for (const intersect of intersects) {
              const object = intersect.object;
              if (object.userData && object.userData.feature) {
                const countryName = object.userData.feature.properties.name;
                
                // Check if this is an affected country
                if (affectedCountries.has(countryName)) {
                  // Find disasters for this country
                  const countryDisasters = disasters.filter(disaster => {
                    const location = disaster.name.toLowerCase().trim();
                    
                    // Check if disaster location matches this country
                    if (locationToCountryMap[location]) {
                      return locationToCountryMap[location].some(variant => 
                        variant.toLowerCase() === countryName.toLowerCase()
                      );
                    }
                    
                    // Direct name matching
                    return countryName.toLowerCase().includes(location) || 
                           location.includes(countryName.toLowerCase());
                  });

                  if (countryDisasters.length > 0) {
                    setSelectedCountry({
                      country: countryName,
                      disasters: countryDisasters,
                      position: { x: event.clientX, y: event.clientY }
                    });
                    console.log(`Clicked on ${countryName}, found ${countryDisasters.length} disasters`);
                    break;
                  }
                }
              }
            }
          } else {
            // Click outside countries - close popup
            setSelectedCountry(null);
          }
        };

        renderer.domElement.addEventListener('click', handleClick);

        console.log('Starting animation loop...');
        // Animation loop - exactly like working example
        const animate = () => {
          controls.update();
          renderer.render(scene, camera);
          animationId = requestAnimationFrame(animate);
        };
        animate();

        console.log('Globe initialization complete!');
        setIsLoading(false);

        // Cleanup function
        return () => {
          console.log('Cleaning up globe...');
          window.removeEventListener('resize', handleResize);
          renderer.domElement.removeEventListener('click', handleClick);
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
          if (renderer && renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
          if (renderer) {
            renderer.dispose();
          }
          if (controls) {
            controls.dispose();
          }
        };

      } catch (err) {
        console.error('Error loading globe:', err);
        setError(err instanceof Error ? err.message : 'Failed to load globe');
        setIsLoading(false);
      }
    };

    const cleanup = initGlobe();

    return () => {
      cleanup.then(cleanupFn => cleanupFn && cleanupFn());
    };
  }, [disasters]);

  if (error) {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center">
        <div className="text-center bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl">
          <div className="text-red-600 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p className="text-gray-900 font-['Cinzel'] text-xl mb-2">Failed to load interactive globe</p>
          <p className="text-gray-700 font-['Cinzel']">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-gray-900">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-900 border-t-transparent mx-auto mb-6"></div>
            <p className="font-['Cinzel'] text-xl">Loading Global Disasters...</p>
          </div>
        </div>
      )}
      <div 
        ref={globeContainerRef} 
        className="w-full h-full"
      />
      
      {/* Country Disaster Popup */}
      {selectedCountry && (
        <div 
          className="absolute z-20 bg-white/95 backdrop-blur-xl rounded-2xl border border-amber-200 shadow-2xl p-6 max-w-md"
          style={{
            left: Math.min(selectedCountry.position.x + 10, window.innerWidth - 400),
            top: Math.max(selectedCountry.position.y - 150, 10),
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-gray-900 font-['Cinzel']">{selectedCountry.country}</h3>
            <button
              onClick={() => setSelectedCountry(null)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-4 max-h-80 overflow-y-auto">
            {selectedCountry.disasters.map((disaster, index) => (
              <div key={index} className="relative">
                <TiltedCard
                  imageSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8L3N2Zz4K"
                  altText={`${disaster.name} disaster relief`}
                  captionText={disaster.name}
                  containerHeight="150px"
                  containerWidth="100%"
                  imageHeight="150px"
                  imageWidth="200px"
                  scaleOnHover={1.05}
                  rotateAmplitude={8}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="w-full h-full bg-gradient-to-br from-amber-100/90 to-amber-200/90 backdrop-blur-sm rounded-[15px] p-4 border border-amber-300/50">
                      <h4 className="font-bold text-gray-900 font-['Cinzel'] mb-2 text-sm">{disaster.name}</h4>
                      <div className="text-xs text-gray-800 font-['Cinzel'] space-y-1 mb-3">
                        <p><span className="font-semibold">Type:</span> {disaster.type}</p>
                        <p><span className="font-semibold">Available:</span> ${disaster.amount.toLocaleString()}</p>
                      </div>
                      {onDisasterClick && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDisasterClick(disaster);
                            setSelectedCountry(null);
                          }}
                          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-1.5 px-3 rounded-lg transition-all duration-200 text-xs font-['Cinzel']"
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 