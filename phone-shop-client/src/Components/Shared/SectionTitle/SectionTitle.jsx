import PropTypes from 'prop-types';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className="border-l-8 border-l-main px-5">
            <h1 className="text-3xl font-bold text-black">{title}</h1>
            <h4 className="text-xl font-medium text-gray-500">{subtitle}</h4>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export default SectionTitle;