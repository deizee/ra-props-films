import PropTypes from 'prop-types';
import Star from "./Star/Star";
import shortid from "shortid";

const Stars = (props) => {
    if (props.count < 0 || props.count > 5) {
        return <p>Ошибка: невалидное значение рейтинга</p>;
    }

    let starsIndexArray = [];
    for (let i = 0; i < props.count; i++) {
        starsIndexArray.push(i);
    }

    const starsKeys = starsIndexArray.map((index) =>
        ({id: shortid.generate(), value: index})
    );

    const starsListArray = starsKeys.map((item) =>
        <Star key={item.id} />
    );

    return (
        <div className="rating-container">
            <h1>Рейтинг фильма ({props.count})</h1>
            <ul className="rating">{starsListArray}</ul>
        </div>
    );
}

Stars.propTypes = {
    counter: PropTypes.number
}

export default Stars;
