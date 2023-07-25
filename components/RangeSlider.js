import React, { useEffect, useState, useRef } from 'react';
import styles from "@/styles/range.module.css"

const RangeSlider = ({ setRange }) => {
    const [sliderValue, setSliderValue] = useState(4);
    const [highlightWidth, setHighlightWidth] = useState(0);

    useEffect(() => {
        updateSlider();
        //eslint-disable-next-line
    }, [sliderValue]);

    const updateSlider = () => {
        let sliderValuePercentage = sliderValue;
        let sliderWidth = document.getElementById('range_slider_1').offsetWidth;

        setHighlightWidth((sliderWidth * sliderValuePercentage * 25) / 100);
        setRange(sliderValue)
    };

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };


    const handleWindowResize = () => {
        updateSlider();
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className='flex items-center space-x-12 text-sm font-bold'>

            <div className={styles.range_slider_container}>
                <div className={styles.range_track}></div>
                <div id="range-slider-1-track-highlight" className={`${styles.range_track} ${styles.track_highlight}`}
                    style={{ width: `${highlightWidth}px` }}></div>
                <input
                    type="range"
                    min="0"
                    max="4"
                    step="1"
                    value={sliderValue}
                    className={`${styles.slider} ${styles.range_slider_1}`}
                    id="range_slider_1"

                    onChange={(e) => {

                        handleSliderChange(e)
                    }}
                />
            </div>
        </div>
    );
};

export default RangeSlider;

