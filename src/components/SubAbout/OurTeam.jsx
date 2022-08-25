import React from 'react'
import TitleHeadBroadcasts from '../TitleHeadBroadcasts';

function OurTeam() {
    const CaptionName = {
        Ourteam: "Our team",
        textOurTeam:"Given the great mission we have and we want to bring all the financial markets into the decentralized world, there are many enemies on our way! People who want this goal to be achieved and that's why we refrain from introducing our team's thinkers carefully! But our team consists of a group of strong and experienced investment managers who were project designers and enjoyed it! A team of artificial intelligence elites in the world's top universities with major projects and a dedicated and loyal executive team!"

    };
    return (
    <div className='container'>
        <div className="title-Broadcasts-box text-center">
            <TitleHeadBroadcasts CaptionHead={CaptionName.Ourteam} />
            <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>
        </div>
        <div className="text-Our-team-box">
            <p className="text-Our-team">
                {CaptionName.textOurTeam}
            </p>
        </div>

    </div>
  )
}

export default OurTeam