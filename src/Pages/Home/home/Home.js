import React from 'react';
import Banner from './Banner/Banner';



import TeamMembers from './teammembers/TeamMembers';
import Topsold from './TopSold/Topsold';
import WatchItems from './WatchItem/WatchItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WatchItems></WatchItems>
            <TeamMembers></TeamMembers>
            <Topsold></Topsold>


        </div>
    );
};

export default Home;



