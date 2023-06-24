import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Meta Front-End Developer',
        title: 'Little Lemon',
        link: 'https://lpreets.github.io/meta-frontendcapstone'
    },
    {
        image: 'image-2',
        category: 'Meta Back-End Developer',
        title: 'Little Lemon API',
        link: 'https://lpreet.pythonanywhere.com'
    },
    {
        image: 'image-3',
        category: 'Projects',
        title: 'MovieWorld',
        link: 'https://lpreets.github.io/movieworld'
    },
    {
        image: 'image-4',
        category: 'Upcoming Projects',
        title: 'Makroner&Co',
    },
    {
        image: 'image-5',
        category: 'Upcoming Projects',
        title: 'NordlysBakeriet',
    },
    {
        image: 'image-5',
        category: 'Upcoming Projects',
        title: 'Baby World',
    }
];

class PortfolioList extends Component {
    render() {
        const { column, styevariation } = this.props;
        const list = PortfolioListContent.slice(0, this.props.item);
        return (
            <React.Fragment>
                {list.map((value, index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href={value.link}>{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.link}>View</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to={value.link}></Link>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default PortfolioList;
