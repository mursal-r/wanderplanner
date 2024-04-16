import React from 'react';
import { TouristAttractionCard } from '../TouristAttractionCard/TouristAttractionCard';
import './PopularDestinations.css';
import backgroundVideo from '../../assets/backgroundVideo.mp4'; // Import the video file

export default function PopularDestinations() {
    return (
        <div className="popular-destinations-container"> {/* Apply the class here */}
            <video autoPlay loop muted playsInline className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="popular-destinations tourist-attraction-container"> {/* Apply the class here */}
                <TouristAttractionCard
                    name="Eiffel Tower"
                    image="eiffelTower.png"
                    price={50}
                />
                <TouristAttractionCard
                    name="Taj Mahal"
                    image="tajMahal.png"
                    price={40}
                />
                <TouristAttractionCard
                    name="Niagara Falls"
                    image="niagaraFalls.png"
                    price={60}
                />
                <TouristAttractionCard
                    name="Colosseum"
                    image="colosseum.png"
                    price={45}
                />
            </div>
        </div>
    );
}
