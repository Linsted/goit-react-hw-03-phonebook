import PropTypes from 'prop-types';
import { Label } from './FilterContacts.styled';

export const FilterContacts = ({onFilter, filter}) => {
    return (
        <Label> Find contacts by name
            <input type="text" name='filter' onChange={onFilter} value={filter} /> 
        </Label>
)
}

FilterContacts.propTypes = {
    onFilter: PropTypes.func,  
     filter: PropTypes.string.isRequired,  
}