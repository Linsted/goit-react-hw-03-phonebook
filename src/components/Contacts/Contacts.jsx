import PropTypes from 'prop-types';
import { ListItem } from './Listitem';
import { List } from './Contacts.styled';

export const Contacts = ({contacts, onClick}) => {
    // console.log(onClick)
     
    return (
        <div>  
            <List>{contacts.map(contact => <ListItem key={contact.id} contact={contact} onClick={onClick} /> )}</List>
        </div>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired,).isRequired,
    onClick: PropTypes.func.isRequired,
}