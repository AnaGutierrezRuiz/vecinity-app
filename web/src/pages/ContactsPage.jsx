import React, { useState } from 'react';
import ContactsList from '../components/contacts/contacts-list/ContactsList';
import ContactForm from '../components/contacts/contact-form/ContactForm';
import PageLayout from '../components/layout/PageLayout';

function ContactsPage() {
  const [refreshContacts, setRefreshContacts] = useState(false);

  const toggleRefreixContacts = () => setRefreshContacts(!refreshContacts);
  return (
    <>
      <PageLayout title="Contacts">
        <ContactsList refresh={refreshContacts} />
        <ContactForm onContactCreated={toggleRefreixContacts} />
      </PageLayout>
    </>
  );
}

export default ContactsPage;

