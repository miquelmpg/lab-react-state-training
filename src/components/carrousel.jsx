
import { useState } from "react";

function Carousel( {images} ) {
    function LeftReStart() {
        if (image === 0) {
            return setImage(images.length);
        }
    }

    function RightReStart() {
        if (image === (images.length - 1)) {
            return setImage(-1);
        }
    }

    const [image, setImage] = useState(0);

    return (
        <div className="d-flex align-items-end">
            <button 
                onClick={() => {
                    LeftReStart();
                    setImage((image) => image - 1);
            }}
            >
                Left
            </button>
            <img
                className="pb-2"
                src={images[image]}
            />
            <button 
                onClick={() => {
                    RightReStart();
                    setImage((image) => image + 1);
                }}
            >
                Right
            </button>
        </div>
    );
}

export default Carousel;