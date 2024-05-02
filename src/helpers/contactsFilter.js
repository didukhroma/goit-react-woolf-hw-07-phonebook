export const contactsFilter = (contactsArray, filter) =>
  contactsArray.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
