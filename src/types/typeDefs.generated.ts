import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 17, end: 25 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 12, end: 25 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Date", loc: { start: 34, end: 38 } },
      directives: [],
      loc: { start: 27, end: 38 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "JSON", loc: { start: 47, end: 51 } },
      directives: [],
      loc: { start: 40, end: 51 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 60, end: 66 } },
      directives: [],
      loc: { start: 53, end: 66 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "ObjectId", loc: { start: 75, end: 83 } },
      directives: [],
      loc: { start: 68, end: 83 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 92, end: 100 } },
      directives: [],
      loc: { start: 85, end: 100 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 106, end: 111 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUser",
            loc: { start: 116, end: 123 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 124, end: 126 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 128, end: 130 },
                  },
                  loc: { start: 128, end: 130 },
                },
                loc: { start: 128, end: 131 },
              },
              directives: [],
              loc: { start: 124, end: 131 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 134, end: 138 },
            },
            loc: { start: 134, end: 138 },
          },
          directives: [],
          loc: { start: 116, end: 138 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 141, end: 143 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 145, end: 149 },
            },
            loc: { start: 145, end: 149 },
          },
          directives: [],
          loc: { start: 141, end: 149 },
        },
      ],
      loc: { start: 101, end: 151 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 158, end: 166 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 171, end: 181 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 182, end: 186 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 188, end: 197 },
                  },
                  loc: { start: 188, end: 197 },
                },
                loc: { start: 188, end: 198 },
              },
              directives: [],
              loc: { start: 182, end: 198 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 201, end: 207 },
            },
            loc: { start: 201, end: 207 },
          },
          directives: [],
          loc: { start: 171, end: 207 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 210, end: 220 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 221, end: 223 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 225, end: 227 },
                  },
                  loc: { start: 225, end: 227 },
                },
                loc: { start: 225, end: 228 },
              },
              directives: [],
              loc: { start: 221, end: 228 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 230, end: 234 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 236, end: 245 },
                  },
                  loc: { start: 236, end: 245 },
                },
                loc: { start: 236, end: 246 },
              },
              directives: [],
              loc: { start: 230, end: 246 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 249, end: 255 },
            },
            loc: { start: 249, end: 255 },
          },
          directives: [],
          loc: { start: 210, end: 255 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 258, end: 268 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 269, end: 271 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 273, end: 275 },
                  },
                  loc: { start: 273, end: 275 },
                },
                loc: { start: 273, end: 276 },
              },
              directives: [],
              loc: { start: 269, end: 276 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 279, end: 285 },
            },
            loc: { start: 279, end: 285 },
          },
          directives: [],
          loc: { start: 258, end: 285 },
        },
      ],
      loc: { start: 153, end: 287 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 294, end: 298 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 303, end: 305 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 307, end: 309 },
              },
              loc: { start: 307, end: 309 },
            },
            loc: { start: 307, end: 310 },
          },
          directives: [],
          loc: { start: 303, end: 310 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 313, end: 322 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 324, end: 330 },
            },
            loc: { start: 324, end: 330 },
          },
          directives: [],
          loc: { start: 313, end: 330 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 333, end: 341 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 343, end: 349 },
            },
            loc: { start: 343, end: 349 },
          },
          directives: [],
          loc: { start: 333, end: 349 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 352, end: 360 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 362, end: 368 },
              },
              loc: { start: 362, end: 368 },
            },
            loc: { start: 362, end: 369 },
          },
          directives: [],
          loc: { start: 352, end: 369 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "email", loc: { start: 372, end: 377 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 379, end: 385 },
            },
            loc: { start: 379, end: 385 },
          },
          directives: [],
          loc: { start: 372, end: 385 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "phone", loc: { start: 388, end: 393 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 395, end: 401 },
            },
            loc: { start: 395, end: 401 },
          },
          directives: [],
          loc: { start: 388, end: 401 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 404, end: 411 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 413, end: 419 },
            },
            loc: { start: 413, end: 419 },
          },
          directives: [],
          loc: { start: 404, end: 419 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 422, end: 432 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 434, end: 441 },
            },
            loc: { start: 434, end: 441 },
          },
          directives: [],
          loc: { start: 422, end: 441 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 444, end: 453 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 455, end: 459 },
            },
            loc: { start: 455, end: 459 },
          },
          directives: [],
          loc: { start: 444, end: 459 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 462, end: 471 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 473, end: 477 },
            },
            loc: { start: 473, end: 477 },
          },
          directives: [],
          loc: { start: 462, end: 477 },
        },
      ],
      loc: { start: 289, end: 479 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: { kind: "Name", value: "UserInput", loc: { start: 487, end: 496 } },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 501, end: 509 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 511, end: 517 },
              },
              loc: { start: 511, end: 517 },
            },
            loc: { start: 511, end: 518 },
          },
          directives: [],
          loc: { start: 501, end: 518 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 521, end: 529 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 531, end: 537 },
              },
              loc: { start: 531, end: 537 },
            },
            loc: { start: 531, end: 538 },
          },
          directives: [],
          loc: { start: 521, end: 538 },
        },
      ],
      loc: { start: 481, end: 540 },
    },
  ],
  loc: { start: 0, end: 541 },
} as unknown as DocumentNode;
