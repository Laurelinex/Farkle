import React from 'react';

const Instructions = () => {
    return(
        <div className="instructions">

            <h2>Farkle: The Rules!</h2>
            <p>Reprisals for basic mistakes will be swift and brutal so please attend carefuly.</p>

            <h3>Rolling, Selecting and Banking</h3>
            
            <p>
                Your round begins with the a roll of the dice (by clicking 'Roll Dice'). After your initial roll, you now click on the dice that you wish to score. Should you choose to continue rolling,  
                you click 'Roll Dice' once again. The total of your rolls will be added together for your round score. Should you wish to record your score for the round, you click 'Bank Score' and your   
                round's total will thus be added to your total score. The opposition player will then start their round by clicking on the 'Roll Dice' button.
            </p>

            <p>
                Should you mistakenly select a die (unacceptable, executionable offence of which you were well-warned), you may undo said cowardly mistake by clicking on it again. The current roll score
                will update as you click on the dice. 
            </p>

            <p>
                When the current roll score is zero, should you click 'Bank Score', all of your points for the round shall be thus forfeited to your evidently more capable rival. This is known as
                'Farkling'. (Death or exile is a suitable alternative)
            </p>

            <h3>Hot Dice</h3>

            <p>
                Scoring with all six dice will enable you to continue rolling with six new dice. You will be reminded in the action prompt should this occur. If you choose to roll again and fail to score,
                all points for this round shall be lost. And rightly so. Tread carefully. 
            </p>

            {/* <h3>Scoring</h3>

            <ul>
                <li>1x Five: 50 each</li>
                <li>1x One: 100 each</li>
                <li>3x Ones: 1000</li>
                <li>3x Twos: 200</li>
                <li>3x Threes: 300</li>
                <li>3x Fours: 400</li>
                <li>3x Fives: 500</li>
                <li>3x Sixes: 600</li>
                <li>Four of a Kind: multiply by 2</li>
                <li>Five of a Kind: multiply by 3</li>
                <li>Six of a Kind: multiply by 4</li>
            </ul> */}

            <h3>Winning</h3>

            <p>
                Play continues until such time as one player meets or exceeds a score of 10,000 points. The opposition player will then have one more round to prevent the unendurable shame of
                total defeat. The final score is then calculated with a winner triumphantly declared and a loser left to reflect on their ineptitude. Should the scores be equal, a tie shall be declared.
                In such an outcome, both players may choose to believe that their pride remains intact. Speaking frankly, this is not the case. You have not won. Shame on you and your kin. 
            </p>
        
        
        
        
        </div>

    )
    
}




export default Instructions;