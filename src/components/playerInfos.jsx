import React from 'react';
import Flags from 'country-flag-icons/react/3x2'


function PlayersInfos(data) {
const  player=Object.values(data)[0]

  return (
    <div className="playerInfos">
        <span className='boardInfosContainer'>


                <span className='boardProfilImageContainer' >
                        <img  className='boardProfilImage' src={player.image}>
                        </img>
                </span>
                <span className='boardPlayersName'>{ player.name } ({ player.rating })</span>
                <span >
                    <Flags.NO title="Norway" className='boardPlayersFlag' width="15px"/>
                </span>
        </span>
       
       <span className='boardClockContainer'> <span className='boardClock'> 00:00 </span></span> 
     
    </div>
  );
}

export default PlayersInfos;