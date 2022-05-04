import React from 'react';
import Banner from './Banner/Banner';
import ProgressBar from './ProgressBar/ProgressBar';
import TeamMembers from './teammembers/TeamMembers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TeamMembers></TeamMembers>
            <ProgressBar></ProgressBar>
        </div>
    );
};

export default Home;