import PropTypes from 'prop-types';
import Star from "./Star/Star";
import shortid from "shortid";

const Stars = (props) => {
    const { count } = props;
    if (count < 0 || count > 5 || !Number.isInteger(count)) {
        return null;
    }

    let starsList = [];
    for (let i = 0; i < count; i++) {
        starsList.push({
            key: shortid.generate()
        });
    }

    return (
        <div className="rating-card">
            <h2>Рейтинг фильма ({count})</h2>
            <ul className="card-body-stars u-clearfix">
                {starsList.map((el) => <Star key={el.key} />)}
            </ul>
        </div>
    );
}

Stars.defaultProps = {
    count: 0
}

Stars.propTypes = {
    counter: PropTypes.number
}

export default Stars;
