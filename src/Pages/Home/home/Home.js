import React from 'react';
import Banner from './Banner/Banner';



import TeamMembers from './teammembers/TeamMembers';
import Topsold from './TopSold/Topsold';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TeamMembers></TeamMembers>
            <Topsold></Topsold>


        </div>
    );
};

export default Home;



