import React from 'react';
import './TeamMembers.css'
import nayeem from '../../../../Images/nayeem'
import elon from '../../../../Images/elon.jpg'
import zareen from '../../../../Images/zareen'
import sharif from '../../../../Images/sharif.jpg'

const TeamMembers = () => {

    return (
        <div>

            <section className="page-section">
                <div className="container">
                    <div className=" text-center">

                        <p className='mt-5 h1 mb-3 heading_title'>Our Company Owners</p>
                        <h4 className='mb-5'>"We have proper dedication for our company ...we are employ friendly"</h4>
                    </div>

                    <div className="team-content">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img className="img-responsive " src={sharif} alt="" />
                                    </div>
                                    <h4>Md Shariful</h4>
                                    <span className="pos">CEO</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img className="img-responsive" src={nayeem} alt="" />
                                    </div>
                                    <h4>Lutfor Rahman Nayeem </h4>
                                    <span className="pos">Founder & CEO</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img className="img-responsive" src={elon} alt="" />
                                    </div>
                                    <h4>Ilon mask</h4>
                                    <span className="pos">General Manager</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img className="img-responsive" src={zareen} alt="" />
                                    </div>
                                    <h4>Zareeen Anan</h4>
                                    <span className="pos">Assistant General Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default TeamMembers;





