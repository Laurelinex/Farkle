import {useEffect} from 'react';
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Four from "../images/4.png";
import Five from "../images/5.png";
import Six from "../images/6.png";

const DiceImage = ({die}) => {
    console.log("Die component")

    useEffect(() => {
        console.log("DiceImage UE triggered");
        // updateImage();
    }, [])
    
    // const attachImage = () => {
    //     if (die.value === 1) {
    //         return <img src={One} alt="1" />;
    //     } else if (die.value === 2) {
    //         return <img src={Two} alt="2" />;
    //     } else if (die.value === 3) {
    //         return <img src={Three} alt="3" />;
    //     } else if (die.value === 4) {
    //         return <img src={Four} alt="4" />;
    //     } else if (die.value === 5) {
    //         return <img src={Five} alt="5" />;
    //     } else if (die.value === 6) {
    //         return <img src={Six} alt="6" />;
    //     }
    // };

    // function updateImage() {
    //     var dieImage;
    //     for (var i = 0; i < 6; i++) {
    //             switch (diceArray[i].value) {						//update dice images
    //                 case 1: dieImage = "images/1.png";
    //                                 break;
    //                 case 2: dieImage = "images/2.png";
    //                                 break;
    //                 case 3: dieImage = "images/3.png";
    //                                 break;
    //                 case 4: dieImage = "images/4.png";
    //                                 break;
    //                 case 5: dieImage = "images/5.png";
    //                                 break;
    //                 case 6: dieImage = "images/6.png";
    //                                 break;
    //             }
                // (diceArray[i].id).attr("src", dieImage);
    //     }
    // }

    return (
        <>
            <p>{die.value}</p>
            <img src={die.picture}/>
        </>
    )
}

export default DiceImage;