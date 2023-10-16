import React, { useState } from 'react';
import { Button, Form, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enterContacts = contacts.some(
      (contact) =>
        (contact.name.toLowerCase() === name.toLowerCase() &&
          contact.phone === phone) ||
        contact.phone === phone
    );

    if (enterContacts) {
      alert(`${name} or ${phone} is already in contacts`);
    } else {
      const contact = {
        name,
        phone,
      };

      dispatch(addContact(contact));

      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Input
        type="tel"
        name="number"
        value={phone}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

