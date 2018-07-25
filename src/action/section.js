import uuid from 'uuid/v4'

const create = ({ name }) => ({
  type: 'SECTION_CREATE',
  payload: {
    name,
    id: uuid,
    createdOn: new Date(),
    budget,
  }
});

const update = section => ({
  type: 'SECTION_UPDATE',
  payload: section,
});

const remove = section => ({
  type: 'SECTION_REMOVE',
  payload: section,
});

export { create, update, remove };
