import PropTypes from 'prop-types';

const StatisticList = ({statistic}) => (
    <ul className='statistic__list'>
        <li className='statistic__item'>Good: {statistic[0]}</li>
        <li className='statistic__item'>Neutral: {statistic[1]}</li>
        <li className='statistic__item'>Bad: {statistic[2]}</li> 
        <li className='statistic__item'>Total: {statistic[3]}</li>
        <li className='statistic__item'>Positive feedback: {statistic[4]}%</li>
    </ul>
);

StatisticList.propTypes = {
    statistic: PropTypes.array.isRequired,
}

export default StatisticList;
