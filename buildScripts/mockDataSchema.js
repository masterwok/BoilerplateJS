const userMock = {
   // More objects..
   "type": "object",
   // Properties of this object...
   "properties": {
      "id": {
         "type": "number",
         "unique": true,
         "minimum": 1
      },
      "firstName": {
         "type": "string",
         // Use the faker library
         "faker": "name.firstName"
      },
      "lastName": {
         "type": "string",
         "faker": "name.lastName",
      },
      "email": {
         "type": "string",
         // Use faker library
         "faker": "internet.email",
      }
   },
   // These four properties will always be populated. If a property is removed
   // it will be nullable.
   required: ['id', 'firstName', 'lastName', 'email']

};


export const schema = {
   // Data structure
   "type": "object",
   // Properties of the object
   "properties": {
      // Users property
      "users": {
         // Of type...
         "type": "array",
         // Range to generate...
         "minItems": 3,
         "maxItems": 5,
         // What the array contains
         "items": userMock
      }
   },
   // Users will always have a value
   required: ['users']
};
