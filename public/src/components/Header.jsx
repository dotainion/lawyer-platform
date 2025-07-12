import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes/Routes";
import { SvgLogo } from "../svgs/SvgLogo";
import { Fragment, useEffect, useRef } from "react";
import { MdMenu } from "react-icons/md";
import { Rating } from "./Rating";
import $ from "jquery";

export const Header = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    const navRef = useRef();
    const lawyerRef = useRef();

    const navs = [
        {
            title: 'Home',
            route: routes.home(),
        },{
            title: 'About us',
            route: routes.about(),
        },{
            title: 'Contact',
            route: routes.contact(),
        },{
            title: 'Services',
            route: routes.services(),
        },{
            title: 'Blogs',
            route: routes.blogs(),
        },{
            title: 'Practices',
            links: [
                {
                    title: 'Practice Areas',
                    route: routes.practiceAreas(),
                },{

                    title: 'Business Law',
                    route: routes.businessLaw(),
                },{

                    title: 'Criminal Defense',
                    route: routes.criminalDefense(),
                },{

                    title: 'Employment Law',
                    route: routes.employmentLaw(),
                },{

                    title: 'Estate Planning',
                    route: routes.estatePlanning(),
                },{

                    title: 'Family Law',
                    route: routes.familyLaw(),
                },{

                    title: 'Real Estate Law',
                    route: routes.realEstateLaw(),
                },
            ]
        },{
            title: 'Attorneys',
            route: routes.attorneys(),
        },
    ];
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    $(navRef.current).removeClass('position-fixed');
                }else{
                    $(navRef.current).addClass('position-fixed');
                }
            },
            {threshold: 0.1}
        );

        const current = lawyerRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return(
        <header>
            <div className="review d-none d-md-flex align-items-center justify-content-center p-2">
                <Rating readOnly>Reviews</Rating>
            </div>
            <div ref={lawyerRef} className="lawyer position-relative p-3">
                <div className="container d-flex align-items-center justify-content-between gap-3 m-0 m-md-auto">
                    <div className="d-flex gap-3">
                        <SvgLogo className="text-light" width={50} />
                        <div className="text-uppercase">
                            <div className="text-orange lh-1">The law office of</div>
                            <div className="fs-5 lh-1">Sherrine Francis</div>
                            <div className="text-orange lh-1">attorneys at law</div>
                        </div>
                    </div>
                    <div className="d-none d-md-flex flex-wrap gap-3">
                        <button className="btn btn-outline-orange rounded-0 text-uppercase">Contact us</button>
                        <button onClick={()=>navigate(routes.scheduleConsultation())} className="btn btn-orange rounded-0 text-uppercase">Schedule appointment</button>
                    </div>
                </div>
            </div>
            <nav ref={navRef} className="d-none d-md-block top-0 start-0 w-100 p-1">
                <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3 m-0 m-md-auto">
                    <div className="d-flex flex-wrap gap-lg-3">
                        {navs.map((nav)=>(
                            <Fragment key={nav.title}>
                                {
                                    nav.links?.length 
                                    ? <div className="dropdown">
                                        <button className={`btn rounded-0 border-0 ${location.pathname.includes(nav.route) ? 'active' : ''} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {nav.title}
                                        </button>
                                        <ul className="dropdown-menu">
                                            {nav.links.map((link, key)=>(
                                                <li key={`${link.title}-${key}`}>
                                                    <a onClick={()=>navigate(link.route)} className="dropdown-item pointer">{link.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    : <button
                                        onClick={()=>navigate(nav.route)}
                                        className={`btn rounded-0 border-0 ${location.pathname.includes(nav.route) ? 'active' : ''}`}
                                    >{nav.title}</button>
                                }                                
                            </Fragment>
                        ))}
                    </div>
                    <div>
                        <button onClick={()=>navigate(routes.reviews())} className="btn text-orange rounded-0">Reviews</button>
                    </div>
                </div>
            </nav>
            <div className="dropdown position-fixed d-block d-md-none top-0 end-0 p-2">
                <button className="btn text-orange d-flex align-items-center border-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MdMenu className="fs-1" />
                </button>
                <ul className="dropdown-menu">
                    {navs.map((nav, key)=>(
                        <Fragment key={`${nav.title}--${key}`}>
                            {[...(nav.links?.length ? nav.links : [nav])].map((link)=>(
                                <li key={`${link.title}-|-${key}`}>
                                    <button
                                        onClick={()=>navigate(link.route)}
                                        className={`dropdown-item ${location.pathname.includes(link.route) ? 'active' : ''}`}
                                    >{link.title}</button>
                                </li>
                            ))}
                        </Fragment>
                    ))}
                </ul>
            </div>
        </header>
    )
}