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
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 296, end: 302 } },
      directives: [],
      loc: { start: 289, end: 302 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 309, end: 313 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 318, end: 320 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 322, end: 324 },
              },
              loc: { start: 322, end: 324 },
            },
            loc: { start: 322, end: 325 },
          },
          directives: [],
          loc: { start: 318, end: 325 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 328, end: 337 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 339, end: 345 },
            },
            loc: { start: 339, end: 345 },
          },
          directives: [],
          loc: { start: 328, end: 345 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 348, end: 356 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 358, end: 364 },
            },
            loc: { start: 358, end: 364 },
          },
          directives: [],
          loc: { start: 348, end: 364 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 367, end: 375 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 377, end: 383 },
              },
              loc: { start: 377, end: 383 },
            },
            loc: { start: 377, end: 384 },
          },
          directives: [],
          loc: { start: 367, end: 384 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "email", loc: { start: 387, end: 392 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 394, end: 400 },
            },
            loc: { start: 394, end: 400 },
          },
          directives: [],
          loc: { start: 387, end: 400 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "phone", loc: { start: 403, end: 408 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 410, end: 416 },
            },
            loc: { start: 410, end: 416 },
          },
          directives: [],
          loc: { start: 403, end: 416 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 419, end: 431 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 433, end: 439 },
            },
            loc: { start: 433, end: 439 },
          },
          directives: [],
          loc: { start: 419, end: 439 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 442, end: 449 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 451, end: 457 },
            },
            loc: { start: 451, end: 457 },
          },
          directives: [],
          loc: { start: 442, end: 457 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 460, end: 470 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 472, end: 479 },
            },
            loc: { start: 472, end: 479 },
          },
          directives: [],
          loc: { start: 460, end: 479 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 482, end: 491 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 493, end: 497 },
            },
            loc: { start: 493, end: 497 },
          },
          directives: [],
          loc: { start: 482, end: 497 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 500, end: 509 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 511, end: 515 },
            },
            loc: { start: 511, end: 515 },
          },
          directives: [],
          loc: { start: 500, end: 515 },
        },
      ],
      loc: { start: 304, end: 517 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: { kind: "Name", value: "UserInput", loc: { start: 525, end: 534 } },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 539, end: 547 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 549, end: 555 },
              },
              loc: { start: 549, end: 555 },
            },
            loc: { start: 549, end: 556 },
          },
          directives: [],
          loc: { start: 539, end: 556 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 559, end: 567 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 569, end: 575 },
              },
              loc: { start: 569, end: 575 },
            },
            loc: { start: 569, end: 576 },
          },
          directives: [],
          loc: { start: 559, end: 576 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 579, end: 588 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 590, end: 596 },
            },
            loc: { start: 590, end: 596 },
          },
          directives: [],
          loc: { start: 579, end: 596 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 599, end: 607 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 609, end: 615 },
            },
            loc: { start: 609, end: 615 },
          },
          directives: [],
          loc: { start: 599, end: 615 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "email", loc: { start: 618, end: 623 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 625, end: 631 },
            },
            loc: { start: 625, end: 631 },
          },
          directives: [],
          loc: { start: 618, end: 631 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "phone", loc: { start: 634, end: 639 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 641, end: 647 },
            },
            loc: { start: 641, end: 647 },
          },
          directives: [],
          loc: { start: 634, end: 647 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 650, end: 662 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 664, end: 670 },
            },
            loc: { start: 664, end: 670 },
          },
          directives: [],
          loc: { start: 650, end: 670 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 673, end: 680 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 682, end: 688 },
            },
            loc: { start: 682, end: 688 },
          },
          directives: [],
          loc: { start: 673, end: 688 },
        },
      ],
      loc: { start: 519, end: 690 },
    },
  ],
  loc: { start: 0, end: 691 },
} as unknown as DocumentNode;
