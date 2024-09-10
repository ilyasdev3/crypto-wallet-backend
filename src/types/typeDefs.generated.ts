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
      name: {
        kind: "Name",
        value: "CreateUserResponse",
        loc: { start: 158, end: 176 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 181, end: 188 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 190, end: 196 },
            },
            loc: { start: 190, end: 196 },
          },
          directives: [],
          loc: { start: 181, end: 196 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "token", loc: { start: 199, end: 204 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 206, end: 212 },
            },
            loc: { start: 206, end: 212 },
          },
          directives: [],
          loc: { start: 199, end: 212 },
        },
      ],
      loc: { start: 153, end: 214 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 221, end: 229 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 234, end: 244 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 245, end: 249 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 251, end: 260 },
                  },
                  loc: { start: 251, end: 260 },
                },
                loc: { start: 251, end: 261 },
              },
              directives: [],
              loc: { start: 245, end: 261 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateUserResponse",
              loc: { start: 264, end: 282 },
            },
            loc: { start: 264, end: 282 },
          },
          directives: [],
          loc: { start: 234, end: 282 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 285, end: 295 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 296, end: 298 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 300, end: 302 },
                  },
                  loc: { start: 300, end: 302 },
                },
                loc: { start: 300, end: 303 },
              },
              directives: [],
              loc: { start: 296, end: 303 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 305, end: 309 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 311, end: 320 },
                  },
                  loc: { start: 311, end: 320 },
                },
                loc: { start: 311, end: 321 },
              },
              directives: [],
              loc: { start: 305, end: 321 },
            },
          ],
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
          loc: { start: 285, end: 330 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 333, end: 343 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 344, end: 346 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 348, end: 350 },
                  },
                  loc: { start: 348, end: 350 },
                },
                loc: { start: 348, end: 351 },
              },
              directives: [],
              loc: { start: 344, end: 351 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 354, end: 360 },
            },
            loc: { start: 354, end: 360 },
          },
          directives: [],
          loc: { start: 333, end: 360 },
        },
      ],
      loc: { start: 216, end: 362 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 371, end: 377 } },
      directives: [],
      loc: { start: 364, end: 377 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 384, end: 388 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 393, end: 395 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 397, end: 399 },
              },
              loc: { start: 397, end: 399 },
            },
            loc: { start: 397, end: 400 },
          },
          directives: [],
          loc: { start: 393, end: 400 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 403, end: 412 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 414, end: 420 },
            },
            loc: { start: 414, end: 420 },
          },
          directives: [],
          loc: { start: 403, end: 420 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 423, end: 431 },
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
          loc: { start: 423, end: 439 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 442, end: 450 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 452, end: 458 },
              },
              loc: { start: 452, end: 458 },
            },
            loc: { start: 452, end: 459 },
          },
          directives: [],
          loc: { start: 442, end: 459 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "email", loc: { start: 462, end: 467 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 469, end: 475 },
            },
            loc: { start: 469, end: 475 },
          },
          directives: [],
          loc: { start: 462, end: 475 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "phone", loc: { start: 478, end: 483 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 485, end: 491 },
            },
            loc: { start: 485, end: 491 },
          },
          directives: [],
          loc: { start: 478, end: 491 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 494, end: 506 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 508, end: 514 },
            },
            loc: { start: 508, end: 514 },
          },
          directives: [],
          loc: { start: 494, end: 514 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 517, end: 524 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 526, end: 532 },
            },
            loc: { start: 526, end: 532 },
          },
          directives: [],
          loc: { start: 517, end: 532 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 535, end: 545 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 547, end: 554 },
            },
            loc: { start: 547, end: 554 },
          },
          directives: [],
          loc: { start: 535, end: 554 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 557, end: 566 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 568, end: 572 },
            },
            loc: { start: 568, end: 572 },
          },
          directives: [],
          loc: { start: 557, end: 572 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 575, end: 584 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 586, end: 590 },
            },
            loc: { start: 586, end: 590 },
          },
          directives: [],
          loc: { start: 575, end: 590 },
        },
      ],
      loc: { start: 379, end: 592 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: { kind: "Name", value: "UserInput", loc: { start: 600, end: 609 } },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 614, end: 622 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 624, end: 630 },
              },
              loc: { start: 624, end: 630 },
            },
            loc: { start: 624, end: 631 },
          },
          directives: [],
          loc: { start: 614, end: 631 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 634, end: 642 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 644, end: 650 },
              },
              loc: { start: 644, end: 650 },
            },
            loc: { start: 644, end: 651 },
          },
          directives: [],
          loc: { start: 634, end: 651 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 654, end: 663 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 665, end: 671 },
            },
            loc: { start: 665, end: 671 },
          },
          directives: [],
          loc: { start: 654, end: 671 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 674, end: 682 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 684, end: 690 },
            },
            loc: { start: 684, end: 690 },
          },
          directives: [],
          loc: { start: 674, end: 690 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "email", loc: { start: 693, end: 698 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 700, end: 706 },
            },
            loc: { start: 700, end: 706 },
          },
          directives: [],
          loc: { start: 693, end: 706 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "phone", loc: { start: 709, end: 714 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 716, end: 722 },
            },
            loc: { start: 716, end: 722 },
          },
          directives: [],
          loc: { start: 709, end: 722 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 725, end: 737 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 739, end: 745 },
            },
            loc: { start: 739, end: 745 },
          },
          directives: [],
          loc: { start: 725, end: 745 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 748, end: 755 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 757, end: 763 },
            },
            loc: { start: 757, end: 763 },
          },
          directives: [],
          loc: { start: 748, end: 763 },
        },
      ],
      loc: { start: 594, end: 765 },
    },
  ],
  loc: { start: 0, end: 766 },
} as unknown as DocumentNode;
