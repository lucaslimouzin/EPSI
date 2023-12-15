import React from "react";
import 'styles/home.css';
import homeBackground from 'assets/bg/home.png';


function Home(){

    return(
        <div id="container">    
            <p id="subtitleWork">Choisissez un bureau pour commencer</p>
                <img id="workSpaceImg" src={homeBackground} useMap="#image_map" alt="workSpace"/>
                    <map name="image_map">
                        <area alt="CardGame" title="CardGame" href="cardGame" coords="88,72 675,68 678,293 426,296 427,393 85,390 " shape="polygon"/>
                        <area alt="SituationGame" title="bureau2" href="situationGame" coords="84,568 544,569 548,782 82,781 " shape="polygon"/>
                        <area alt="bureau3" title="bureau3" href="lien3ici" coords="707,69 883,68 885,391 706,393 " shape="polygon"/>
                        <area alt="Shooter" title="Shooter" href="shooter" coords="865,412 1035,417 1047,796 866,787 " shape="polygon"/>
                        <area alt="toilette" title="toilette" href="lientoilette" coords="708,785 813,785 813,569 706,567 " shape="polygon"/>
                    </map>
            </div>
            
    )
    
}


export default Home;