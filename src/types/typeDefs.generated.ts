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
            value: "checkUsername",
            loc: { start: 333, end: 346 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 347, end: 355 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 357, end: 363 },
                  },
                  loc: { start: 357, end: 363 },
                },
                loc: { start: 357, end: 364 },
              },
              directives: [],
              loc: { start: 347, end: 364 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 367, end: 373 },
            },
            loc: { start: 367, end: 373 },
          },
          directives: [],
          loc: { start: 333, end: 373 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 376, end: 386 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 387, end: 389 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 391, end: 393 },
                  },
                  loc: { start: 391, end: 393 },
                },
                loc: { start: 391, end: 394 },
              },
              directives: [],
              loc: { start: 387, end: 394 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 397, end: 403 },
            },
            loc: { start: 397, end: 403 },
          },
          directives: [],
          loc: { start: 376, end: 403 },
        },
      ],
      loc: { start: 216, end: 405 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 414, end: 420 } },
      directives: [],
      loc: { start: 407, end: 420 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 427, end: 431 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 436, end: 438 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 440, end: 442 },
              },
              loc: { start: 440, end: 442 },
            },
            loc: { start: 440, end: 443 },
          },
          directives: [],
          loc: { start: 436, end: 443 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 446, end: 455 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 457, end: 463 },
            },
            loc: { start: 457, end: 463 },
          },
          directives: [],
          loc: { start: 446, end: 463 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 466, end: 474 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 476, end: 482 },
            },
            loc: { start: 476, end: 482 },
          },
          directives: [],
          loc: { start: 466, end: 482 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 485, end: 493 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 495, end: 501 },
              },
              loc: { start: 495, end: 501 },
            },
            loc: { start: 495, end: 502 },
          },
          directives: [],
          loc: { start: 485, end: 502 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "email", loc: { start: 505, end: 510 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 512, end: 518 },
            },
            loc: { start: 512, end: 518 },
          },
          directives: [],
          loc: { start: 505, end: 518 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "phone", loc: { start: 521, end: 526 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 528, end: 534 },
            },
            loc: { start: 528, end: 534 },
          },
          directives: [],
          loc: { start: 521, end: 534 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 537, end: 549 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 551, end: 557 },
            },
            loc: { start: 551, end: 557 },
          },
          directives: [],
          loc: { start: 537, end: 557 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 560, end: 567 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 569, end: 575 },
            },
            loc: { start: 569, end: 575 },
          },
          directives: [],
          loc: { start: 560, end: 575 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 578, end: 588 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 590, end: 597 },
            },
            loc: { start: 590, end: 597 },
          },
          directives: [],
          loc: { start: 578, end: 597 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 600, end: 609 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 611, end: 615 },
            },
            loc: { start: 611, end: 615 },
          },
          directives: [],
          loc: { start: 600, end: 615 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 618, end: 627 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 629, end: 633 },
            },
            loc: { start: 629, end: 633 },
          },
          directives: [],
          loc: { start: 618, end: 633 },
        },
      ],
      loc: { start: 422, end: 635 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: { kind: "Name", value: "UserInput", loc: { start: 643, end: 652 } },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 657, end: 665 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 667, end: 673 },
              },
              loc: { start: 667, end: 673 },
            },
            loc: { start: 667, end: 674 },
          },
          directives: [],
          loc: { start: 657, end: 674 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 677, end: 685 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 687, end: 693 },
              },
              loc: { start: 687, end: 693 },
            },
            loc: { start: 687, end: 694 },
          },
          directives: [],
          loc: { start: 677, end: 694 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 697, end: 706 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 708, end: 714 },
            },
            loc: { start: 708, end: 714 },
          },
          directives: [],
          loc: { start: 697, end: 714 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 717, end: 725 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 727, end: 733 },
            },
            loc: { start: 727, end: 733 },
          },
          directives: [],
          loc: { start: 717, end: 733 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "email", loc: { start: 736, end: 741 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 743, end: 749 },
            },
            loc: { start: 743, end: 749 },
          },
          directives: [],
          loc: { start: 736, end: 749 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "phone", loc: { start: 752, end: 757 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 759, end: 765 },
            },
            loc: { start: 759, end: 765 },
          },
          directives: [],
          loc: { start: 752, end: 765 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 768, end: 780 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 782, end: 788 },
            },
            loc: { start: 782, end: 788 },
          },
          directives: [],
          loc: { start: 768, end: 788 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 791, end: 798 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 800, end: 806 },
            },
            loc: { start: 800, end: 806 },
          },
          directives: [],
          loc: { start: 791, end: 806 },
        },
      ],
      loc: { start: 637, end: 808 },
    },
  ],
  loc: { start: 0, end: 809 },
} as unknown as DocumentNode;
