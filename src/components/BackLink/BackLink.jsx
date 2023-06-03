import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="14" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
