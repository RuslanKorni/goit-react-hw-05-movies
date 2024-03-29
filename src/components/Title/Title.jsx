import { TitleText } from "./Title.styled";
import PropTypes from 'prop-types';

const Title = ({title}) => {
    return (<><TitleText>{title}</TitleText></>)
    
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
  };

export default Title;

