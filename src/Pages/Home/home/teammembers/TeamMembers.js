import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TeamMembers.css'

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
                                        <img className="img-responsive " src="https://scontent.fcgp4-1.fna.fbcdn.net/v/t39.30808-6/267462838_921433385155610_7771997153224572247_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHv04WQa6iAqp9R1RxtuRdn0cuJlow7t2DRy4mWjDu3YHbik_cuY6rM2JgGcpJsF-WKWR-0oCWdpkIMV0K1I0_1&_nc_ohc=H9Xy6iU3XwQAX_ppURR&_nc_zt=23&_nc_ht=scontent.fcgp4-1.fna&oh=00_AT8Fd-9SoRodwuuQZW_pLbygI78U7XOuV31fxzKdVONc3g&oe=6276E3B7" alt="" />
                                    </div>
                                    <h4>Md Soriful</h4>
                                    <span className="pos">CEO</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img className="img-responsive" src="https://w7.pngwing.com/pngs/332/126/png-transparent-t-shirt-dress-shirt-clothing-informal-attire-formal-attire-white-top-formal-wear-thumbnail.png" alt="" />
                                    </div>
                                    <h4>Lutfor Rahman Nayeem </h4>
                                    <span className="pos">Founder & CEO</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img className="img-responsive" src="https://rukminim2.flixcart.com/image/332/398/ktrk13k0/shirt/u/p/4/s-232tk127-selvia-original-imag7f8yfmfwwhtg.jpeg?q=50" alt="" />
                                    </div>
                                    <h4>Ilon mask</h4>
                                    <span className="pos">Co founder</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img className="img-responsive" src="https://media.istockphoto.com/photos/make-a-statement-with-your-confidence-picture-id973685852?b=1&k=20&m=973685852&s=170667a&w=0&h=18y-Hga3S8X-PcQ6KtNRntpPKxh3naUX0kDN0blE_Dk=" alt="" />
                                    </div>
                                    <h4>Jow Baiden</h4>
                                    <span className="pos">General Manager</span>
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





