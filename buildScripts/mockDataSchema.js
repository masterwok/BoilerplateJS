const userMock = {
   type: 'object',
   properties: {
      id: {
         type: 'number',
         unique: true,
         minimum: 1
      },
      facebook: {
         type: 'object',
         properties: {
            id: {
               type: 'string',
               unique: true,
               faker: 'random.uuid'
            },
            email: {
               type: 'string',
               faker: 'internet.email'
            },
            givenName: {
               type: 'string',
               faker: 'name.firstName'
            },
            'lastName': {
               type: 'string',
               faker: 'name.lastName',
            }
         },
         required: ['id', 'email', 'givenName', 'lastName']
      }
   },
   required: ['id', 'facebook']
};

const recipeMock = {
   type: 'object',
   properties: {
      id: {
         type: 'number',
         unique: true,
         minimum: 1
      },
      name: {
         type: 'string',
         faker: 'commerce.productName'
      },
      description: {
         type: 'string',
         faker: {
            'lorem.paragraphs': [2, '\r\n']
         }
      },
      createdOn: {
         type: 'string',
         faker: {
            'date.recent': [100]
         }
      },
      lastUpdated: {
         type: 'string',
         faker: {
            'date.recent': [40]
         }
      },
      imageUrl: {
         type: 'string',
         faker: {
            'image.imageUrl': [400, 400, 'food']
         }
      }
   },
   required: ['id', 'name', 'description', 'createdOn', 'imageUrl']
};

export const schema = {
   type: 'object',
   properties: {
      users: {
         type: 'array',
         minItems: 10,
         maxIems: 30,
         items: userMock
      },
      recipes: {
         type: 'array',
         minItems: 3,
         maxIems: 10,
         items: recipeMock
      }
   },
   // Users will always have a value
   required: ['users', 'recipies']
};
