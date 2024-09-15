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
            value: "getComments",
            loc: { start: 116, end: 127 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 128, end: 130 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 132, end: 134 },
                  },
                  loc: { start: 132, end: 134 },
                },
                loc: { start: 132, end: 135 },
              },
              directives: [],
              loc: { start: 128, end: 135 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Comment",
                loc: { start: 139, end: 146 },
              },
              loc: { start: 139, end: 146 },
            },
            loc: { start: 138, end: 147 },
          },
          directives: [],
          loc: { start: 116, end: 147 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserComments",
            loc: { start: 150, end: 165 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 166, end: 168 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 170, end: 172 },
                  },
                  loc: { start: 170, end: 172 },
                },
                loc: { start: 170, end: 173 },
              },
              directives: [],
              loc: { start: 166, end: 173 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Comment",
                loc: { start: 177, end: 184 },
              },
              loc: { start: 177, end: 184 },
            },
            loc: { start: 176, end: 185 },
          },
          directives: [],
          loc: { start: 150, end: 185 },
        },
      ],
      loc: { start: 101, end: 187 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 194, end: 201 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 206, end: 212 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 214, end: 216 } },
            loc: { start: 214, end: 216 },
          },
          directives: [],
          loc: { start: 206, end: 216 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 219, end: 225 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 227, end: 229 } },
            loc: { start: 227, end: 229 },
          },
          directives: [],
          loc: { start: 219, end: 229 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 232, end: 239 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 241, end: 247 },
            },
            loc: { start: 241, end: 247 },
          },
          directives: [],
          loc: { start: 232, end: 247 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 250, end: 259 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 261, end: 265 },
            },
            loc: { start: 261, end: 265 },
          },
          directives: [],
          loc: { start: 250, end: 265 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 268, end: 277 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 279, end: 283 },
            },
            loc: { start: 279, end: 283 },
          },
          directives: [],
          loc: { start: 268, end: 283 },
        },
      ],
      loc: { start: 189, end: 285 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 292, end: 300 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createComment",
            loc: { start: 305, end: 318 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "comment",
                loc: { start: 319, end: 326 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CommentInput",
                    loc: { start: 328, end: 340 },
                  },
                  loc: { start: 328, end: 340 },
                },
                loc: { start: 328, end: 341 },
              },
              directives: [],
              loc: { start: 319, end: 341 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateCommentResponse",
              loc: { start: 344, end: 365 },
            },
            loc: { start: 344, end: 365 },
          },
          directives: [],
          loc: { start: 305, end: 365 },
        },
      ],
      loc: { start: 287, end: 367 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommentInput",
        loc: { start: 375, end: 387 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 392, end: 398 },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 400, end: 402 } },
            loc: { start: 400, end: 402 },
          },
          directives: [],
          loc: { start: 392, end: 402 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 405, end: 411 },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 413, end: 415 } },
            loc: { start: 413, end: 415 },
          },
          directives: [],
          loc: { start: 405, end: 415 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 418, end: 425 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 427, end: 433 },
            },
            loc: { start: 427, end: 433 },
          },
          directives: [],
          loc: { start: 418, end: 433 },
        },
      ],
      loc: { start: 369, end: 435 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommentResponse",
        loc: { start: 442, end: 463 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 468, end: 475 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 477, end: 483 },
            },
            loc: { start: 477, end: 483 },
          },
          directives: [],
          loc: { start: 468, end: 483 },
        },
      ],
      loc: { start: 437, end: 485 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 491, end: 496 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserCommunities",
            loc: { start: 501, end: 519 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 520, end: 522 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 524, end: 526 },
                  },
                  loc: { start: 524, end: 526 },
                },
                loc: { start: 524, end: 527 },
              },
              directives: [],
              loc: { start: 520, end: 527 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Community",
                loc: { start: 531, end: 540 },
              },
              loc: { start: 531, end: 540 },
            },
            loc: { start: 530, end: 541 },
          },
          directives: [],
          loc: { start: 501, end: 541 },
        },
      ],
      loc: { start: 486, end: 543 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommunityResponse",
        loc: { start: 550, end: 573 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 578, end: 582 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 584, end: 590 },
            },
            loc: { start: 584, end: 590 },
          },
          directives: [],
          loc: { start: 578, end: 590 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 593, end: 604 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 606, end: 612 },
            },
            loc: { start: 606, end: 612 },
          },
          directives: [],
          loc: { start: 593, end: 612 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 615, end: 625 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 627, end: 634 },
            },
            loc: { start: 627, end: 634 },
          },
          directives: [],
          loc: { start: 615, end: 634 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 637, end: 643 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 645, end: 647 } },
            loc: { start: 645, end: 647 },
          },
          directives: [],
          loc: { start: 637, end: 647 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 650, end: 662 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 664, end: 670 },
            },
            loc: { start: 664, end: 670 },
          },
          directives: [],
          loc: { start: 650, end: 670 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 673, end: 683 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 685, end: 691 },
            },
            loc: { start: 685, end: 691 },
          },
          directives: [],
          loc: { start: 673, end: 691 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 694, end: 703 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 705, end: 709 },
            },
            loc: { start: 705, end: 709 },
          },
          directives: [],
          loc: { start: 694, end: 709 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 712, end: 721 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 723, end: 727 },
            },
            loc: { start: 723, end: 727 },
          },
          directives: [],
          loc: { start: 712, end: 727 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "_id", loc: { start: 730, end: 733 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 735, end: 737 } },
            loc: { start: 735, end: 737 },
          },
          directives: [],
          loc: { start: 730, end: 737 },
        },
      ],
      loc: { start: 545, end: 739 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 746, end: 754 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCommunity",
            loc: { start: 759, end: 774 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "community",
                loc: { start: 775, end: 784 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CommunityInput",
                    loc: { start: 786, end: 800 },
                  },
                  loc: { start: 786, end: 800 },
                },
                loc: { start: 786, end: 801 },
              },
              directives: [],
              loc: { start: 775, end: 801 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateCommunityResponse",
              loc: { start: 804, end: 827 },
            },
            loc: { start: 804, end: 827 },
          },
          directives: [],
          loc: { start: 759, end: 827 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCommunity",
            loc: { start: 830, end: 845 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 846, end: 848 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 850, end: 852 },
                  },
                  loc: { start: 850, end: 852 },
                },
                loc: { start: 850, end: 853 },
              },
              directives: [],
              loc: { start: 846, end: 853 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "community",
                loc: { start: 855, end: 864 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CommunityInput",
                    loc: { start: 866, end: 880 },
                  },
                  loc: { start: 866, end: 880 },
                },
                loc: { start: 866, end: 881 },
              },
              directives: [],
              loc: { start: 855, end: 881 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 884, end: 890 },
            },
            loc: { start: 884, end: 890 },
          },
          directives: [],
          loc: { start: 830, end: 890 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCommunity",
            loc: { start: 893, end: 908 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 909, end: 911 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 913, end: 915 },
                  },
                  loc: { start: 913, end: 915 },
                },
                loc: { start: 913, end: 916 },
              },
              directives: [],
              loc: { start: 909, end: 916 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 919, end: 925 },
            },
            loc: { start: 919, end: 925 },
          },
          directives: [],
          loc: { start: 893, end: 925 },
        },
      ],
      loc: { start: 741, end: 927 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 936, end: 942 } },
      directives: [],
      loc: { start: 929, end: 942 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Community", loc: { start: 949, end: 958 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 963, end: 967 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 969, end: 975 },
            },
            loc: { start: 969, end: 975 },
          },
          directives: [],
          loc: { start: 963, end: 975 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 978, end: 989 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 991, end: 997 },
            },
            loc: { start: 991, end: 997 },
          },
          directives: [],
          loc: { start: 978, end: 997 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 1000, end: 1010 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1012, end: 1019 },
            },
            loc: { start: 1012, end: 1019 },
          },
          directives: [],
          loc: { start: 1000, end: 1019 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1022, end: 1028 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1030, end: 1032 },
            },
            loc: { start: 1030, end: 1032 },
          },
          directives: [],
          loc: { start: 1022, end: 1032 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 1035, end: 1047 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1049, end: 1055 },
            },
            loc: { start: 1049, end: 1055 },
          },
          directives: [],
          loc: { start: 1035, end: 1055 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 1058, end: 1068 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1070, end: 1076 },
            },
            loc: { start: 1070, end: 1076 },
          },
          directives: [],
          loc: { start: 1058, end: 1076 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1079, end: 1088 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1090, end: 1094 },
            },
            loc: { start: 1090, end: 1094 },
          },
          directives: [],
          loc: { start: 1079, end: 1094 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1097, end: 1106 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1108, end: 1112 },
            },
            loc: { start: 1108, end: 1112 },
          },
          directives: [],
          loc: { start: 1097, end: 1112 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "_id", loc: { start: 1115, end: 1118 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1120, end: 1122 },
            },
            loc: { start: 1120, end: 1122 },
          },
          directives: [],
          loc: { start: 1115, end: 1122 },
        },
      ],
      loc: { start: 944, end: 1124 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommunityInput",
        loc: { start: 1132, end: 1146 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1151, end: 1155 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1157, end: 1163 },
              },
              loc: { start: 1157, end: 1163 },
            },
            loc: { start: 1157, end: 1164 },
          },
          directives: [],
          loc: { start: 1151, end: 1164 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1167, end: 1178 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1180, end: 1186 },
              },
              loc: { start: 1180, end: 1186 },
            },
            loc: { start: 1180, end: 1187 },
          },
          directives: [],
          loc: { start: 1167, end: 1187 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 1190, end: 1200 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1202, end: 1209 },
            },
            loc: { start: 1202, end: 1209 },
          },
          directives: [],
          loc: { start: 1190, end: 1209 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1212, end: 1218 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1220, end: 1222 },
              },
              loc: { start: 1220, end: 1222 },
            },
            loc: { start: 1220, end: 1223 },
          },
          directives: [],
          loc: { start: 1212, end: 1223 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 1226, end: 1238 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 1240, end: 1246 },
            },
            loc: { start: 1240, end: 1246 },
          },
          directives: [],
          loc: { start: 1226, end: 1246 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 1249, end: 1259 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 1261, end: 1267 },
            },
            loc: { start: 1261, end: 1267 },
          },
          directives: [],
          loc: { start: 1249, end: 1267 },
        },
      ],
      loc: { start: 1126, end: 1269 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1275, end: 1280 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getLikes",
            loc: { start: 1285, end: 1293 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1294, end: 1296 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1298, end: 1300 },
                  },
                  loc: { start: 1298, end: 1300 },
                },
                loc: { start: 1298, end: 1301 },
              },
              directives: [],
              loc: { start: 1294, end: 1301 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Like",
                loc: { start: 1305, end: 1309 },
              },
              loc: { start: 1305, end: 1309 },
            },
            loc: { start: 1304, end: 1310 },
          },
          directives: [],
          loc: { start: 1285, end: 1310 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserLikes",
            loc: { start: 1313, end: 1325 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1326, end: 1328 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1330, end: 1332 },
                  },
                  loc: { start: 1330, end: 1332 },
                },
                loc: { start: 1330, end: 1333 },
              },
              directives: [],
              loc: { start: 1326, end: 1333 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Like",
                loc: { start: 1337, end: 1341 },
              },
              loc: { start: 1337, end: 1341 },
            },
            loc: { start: 1336, end: 1342 },
          },
          directives: [],
          loc: { start: 1313, end: 1342 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getPostLikes",
            loc: { start: 1345, end: 1357 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1358, end: 1360 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1362, end: 1364 },
                  },
                  loc: { start: 1362, end: 1364 },
                },
                loc: { start: 1362, end: 1365 },
              },
              directives: [],
              loc: { start: 1358, end: 1365 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Like",
                loc: { start: 1369, end: 1373 },
              },
              loc: { start: 1369, end: 1373 },
            },
            loc: { start: 1368, end: 1374 },
          },
          directives: [],
          loc: { start: 1345, end: 1374 },
        },
      ],
      loc: { start: 1270, end: 1376 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Like", loc: { start: 1383, end: 1387 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1392, end: 1398 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1400, end: 1402 },
            },
            loc: { start: 1400, end: 1402 },
          },
          directives: [],
          loc: { start: 1392, end: 1402 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 1405, end: 1411 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1413, end: 1415 },
            },
            loc: { start: 1413, end: 1415 },
          },
          directives: [],
          loc: { start: 1405, end: 1415 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1418, end: 1427 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1429, end: 1433 },
            },
            loc: { start: 1429, end: 1433 },
          },
          directives: [],
          loc: { start: 1418, end: 1433 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1436, end: 1445 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1447, end: 1451 },
            },
            loc: { start: 1447, end: 1451 },
          },
          directives: [],
          loc: { start: 1436, end: 1451 },
        },
      ],
      loc: { start: 1378, end: 1453 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1460, end: 1468 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createLike",
            loc: { start: 1473, end: 1483 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "like",
                loc: { start: 1484, end: 1488 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "LikeInput",
                    loc: { start: 1490, end: 1499 },
                  },
                  loc: { start: 1490, end: 1499 },
                },
                loc: { start: 1490, end: 1500 },
              },
              directives: [],
              loc: { start: 1484, end: 1500 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateLikeResponse",
              loc: { start: 1503, end: 1521 },
            },
            loc: { start: 1503, end: 1521 },
          },
          directives: [],
          loc: { start: 1473, end: 1521 },
        },
      ],
      loc: { start: 1455, end: 1523 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LikeInput",
        loc: { start: 1531, end: 1540 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1545, end: 1551 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1553, end: 1555 },
            },
            loc: { start: 1553, end: 1555 },
          },
          directives: [],
          loc: { start: 1545, end: 1555 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 1558, end: 1564 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1566, end: 1568 },
            },
            loc: { start: 1566, end: 1568 },
          },
          directives: [],
          loc: { start: 1558, end: 1568 },
        },
      ],
      loc: { start: 1525, end: 1570 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateLikeResponse",
        loc: { start: 1577, end: 1595 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 1600, end: 1607 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1609, end: 1615 },
            },
            loc: { start: 1609, end: 1615 },
          },
          directives: [],
          loc: { start: 1600, end: 1615 },
        },
      ],
      loc: { start: 1572, end: 1617 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1623, end: 1628 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserPosts",
            loc: { start: 1633, end: 1645 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1646, end: 1648 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1650, end: 1652 },
                  },
                  loc: { start: 1650, end: 1652 },
                },
                loc: { start: 1650, end: 1653 },
              },
              directives: [],
              loc: { start: 1646, end: 1653 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1657, end: 1661 },
              },
              loc: { start: 1657, end: 1661 },
            },
            loc: { start: 1656, end: 1662 },
          },
          directives: [],
          loc: { start: 1633, end: 1662 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCommunityPosts",
            loc: { start: 1665, end: 1682 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1683, end: 1685 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1687, end: 1689 },
                  },
                  loc: { start: 1687, end: 1689 },
                },
                loc: { start: 1687, end: 1690 },
              },
              directives: [],
              loc: { start: 1683, end: 1690 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1694, end: 1698 },
              },
              loc: { start: 1694, end: 1698 },
            },
            loc: { start: 1693, end: 1699 },
          },
          directives: [],
          loc: { start: 1665, end: 1699 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getPost",
            loc: { start: 1702, end: 1709 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1710, end: 1712 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1714, end: 1716 },
                  },
                  loc: { start: 1714, end: 1716 },
                },
                loc: { start: 1714, end: 1717 },
              },
              directives: [],
              loc: { start: 1710, end: 1717 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 1720, end: 1724 },
            },
            loc: { start: 1720, end: 1724 },
          },
          directives: [],
          loc: { start: 1702, end: 1724 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getAllPosts",
            loc: { start: 1727, end: 1738 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "filters",
                loc: { start: 1739, end: 1746 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "PostFilter",
                  loc: { start: 1748, end: 1758 },
                },
                loc: { start: 1748, end: 1758 },
              },
              directives: [],
              loc: { start: 1739, end: 1758 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1762, end: 1766 },
              },
              loc: { start: 1762, end: 1766 },
            },
            loc: { start: 1761, end: 1767 },
          },
          directives: [],
          loc: { start: 1727, end: 1767 },
        },
      ],
      loc: { start: 1618, end: 1769 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostFilter",
        loc: { start: 1777, end: 1787 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1792, end: 1797 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1799, end: 1805 },
            },
            loc: { start: 1799, end: 1805 },
          },
          directives: [],
          loc: { start: 1792, end: 1805 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1808, end: 1815 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1817, end: 1823 },
            },
            loc: { start: 1817, end: 1823 },
          },
          directives: [],
          loc: { start: 1808, end: 1823 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "length",
            loc: { start: 1826, end: 1832 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1834, end: 1837 },
            },
            loc: { start: 1834, end: 1837 },
          },
          directives: [],
          loc: { start: 1826, end: 1837 },
        },
      ],
      loc: { start: 1771, end: 1839 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostResponse",
        loc: { start: 1846, end: 1864 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 1869, end: 1876 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1878, end: 1884 },
            },
            loc: { start: 1878, end: 1884 },
          },
          directives: [],
          loc: { start: 1869, end: 1884 },
        },
      ],
      loc: { start: 1841, end: 1886 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Post", loc: { start: 1893, end: 1897 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1902, end: 1907 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1909, end: 1915 },
            },
            loc: { start: 1909, end: 1915 },
          },
          directives: [],
          loc: { start: 1902, end: 1915 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1918, end: 1925 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1927, end: 1933 },
            },
            loc: { start: 1927, end: 1933 },
          },
          directives: [],
          loc: { start: 1918, end: 1933 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 1936, end: 1946 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1948, end: 1955 },
            },
            loc: { start: 1948, end: 1955 },
          },
          directives: [],
          loc: { start: 1936, end: 1955 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "communityId",
            loc: { start: 1958, end: 1969 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1971, end: 1973 },
            },
            loc: { start: 1971, end: 1973 },
          },
          directives: [],
          loc: { start: 1958, end: 1973 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 1976, end: 1980 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1982, end: 1988 },
            },
            loc: { start: 1982, end: 1988 },
          },
          directives: [],
          loc: { start: 1976, end: 1988 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1991, end: 1997 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1999, end: 2003 },
            },
            loc: { start: 1999, end: 2003 },
          },
          directives: [],
          loc: { start: 1991, end: 2003 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "community",
            loc: { start: 2006, end: 2015 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Community",
              loc: { start: 2017, end: 2026 },
            },
            loc: { start: 2017, end: 2026 },
          },
          directives: [],
          loc: { start: 2006, end: 2026 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2029, end: 2038 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2040, end: 2044 },
            },
            loc: { start: 2040, end: 2044 },
          },
          directives: [],
          loc: { start: 2029, end: 2044 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2047, end: 2056 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2058, end: 2062 },
            },
            loc: { start: 2058, end: 2062 },
          },
          directives: [],
          loc: { start: 2047, end: 2062 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2065, end: 2067 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2069, end: 2071 },
            },
            loc: { start: 2069, end: 2071 },
          },
          directives: [],
          loc: { start: 2065, end: 2071 },
        },
      ],
      loc: { start: 1888, end: 2073 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostInput",
        loc: { start: 2081, end: 2090 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2095, end: 2100 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2102, end: 2108 },
            },
            loc: { start: 2102, end: 2108 },
          },
          directives: [],
          loc: { start: 2095, end: 2108 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2111, end: 2118 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2120, end: 2126 },
            },
            loc: { start: 2120, end: 2126 },
          },
          directives: [],
          loc: { start: 2111, end: 2126 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 2129, end: 2139 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2141, end: 2148 },
            },
            loc: { start: 2141, end: 2148 },
          },
          directives: [],
          loc: { start: 2129, end: 2148 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "communityId",
            loc: { start: 2151, end: 2162 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2164, end: 2166 },
            },
            loc: { start: 2164, end: 2166 },
          },
          directives: [],
          loc: { start: 2151, end: 2166 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 2169, end: 2173 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 2175, end: 2181 },
            },
            loc: { start: 2175, end: 2181 },
          },
          directives: [],
          loc: { start: 2169, end: 2181 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2184, end: 2190 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2192, end: 2194 },
            },
            loc: { start: 2192, end: 2194 },
          },
          directives: [],
          loc: { start: 2184, end: 2194 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2197, end: 2206 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2208, end: 2212 },
            },
            loc: { start: 2208, end: 2212 },
          },
          directives: [],
          loc: { start: 2197, end: 2212 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2215, end: 2224 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2226, end: 2230 },
            },
            loc: { start: 2226, end: 2230 },
          },
          directives: [],
          loc: { start: 2215, end: 2230 },
        },
      ],
      loc: { start: 2075, end: 2232 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2239, end: 2247 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createPost",
            loc: { start: 2252, end: 2262 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "post",
                loc: { start: 2263, end: 2267 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PostInput",
                    loc: { start: 2269, end: 2278 },
                  },
                  loc: { start: 2269, end: 2278 },
                },
                loc: { start: 2269, end: 2279 },
              },
              directives: [],
              loc: { start: 2263, end: 2279 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreatePostResponse",
              loc: { start: 2282, end: 2300 },
            },
            loc: { start: 2282, end: 2300 },
          },
          directives: [],
          loc: { start: 2252, end: 2300 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatePost",
            loc: { start: 2303, end: 2313 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2314, end: 2316 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2318, end: 2320 },
                  },
                  loc: { start: 2318, end: 2320 },
                },
                loc: { start: 2318, end: 2321 },
              },
              directives: [],
              loc: { start: 2314, end: 2321 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "post",
                loc: { start: 2323, end: 2327 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PostInput",
                    loc: { start: 2329, end: 2338 },
                  },
                  loc: { start: 2329, end: 2338 },
                },
                loc: { start: 2329, end: 2339 },
              },
              directives: [],
              loc: { start: 2323, end: 2339 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2342, end: 2348 },
            },
            loc: { start: 2342, end: 2348 },
          },
          directives: [],
          loc: { start: 2303, end: 2348 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deletePost",
            loc: { start: 2351, end: 2361 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2362, end: 2364 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2366, end: 2368 },
                  },
                  loc: { start: 2366, end: 2368 },
                },
                loc: { start: 2366, end: 2369 },
              },
              directives: [],
              loc: { start: 2362, end: 2369 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2372, end: 2378 },
            },
            loc: { start: 2372, end: 2378 },
          },
          directives: [],
          loc: { start: 2351, end: 2378 },
        },
      ],
      loc: { start: 2234, end: 2380 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2386, end: 2391 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getShares",
            loc: { start: 2396, end: 2405 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2406, end: 2408 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2410, end: 2412 },
                  },
                  loc: { start: 2410, end: 2412 },
                },
                loc: { start: 2410, end: 2413 },
              },
              directives: [],
              loc: { start: 2406, end: 2413 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Share",
                loc: { start: 2417, end: 2422 },
              },
              loc: { start: 2417, end: 2422 },
            },
            loc: { start: 2416, end: 2423 },
          },
          directives: [],
          loc: { start: 2396, end: 2423 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserShares",
            loc: { start: 2426, end: 2439 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2440, end: 2442 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2444, end: 2446 },
                  },
                  loc: { start: 2444, end: 2446 },
                },
                loc: { start: 2444, end: 2447 },
              },
              directives: [],
              loc: { start: 2440, end: 2447 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Share",
                loc: { start: 2451, end: 2456 },
              },
              loc: { start: 2451, end: 2456 },
            },
            loc: { start: 2450, end: 2457 },
          },
          directives: [],
          loc: { start: 2426, end: 2457 },
        },
      ],
      loc: { start: 2381, end: 2459 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Share", loc: { start: 2466, end: 2471 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2476, end: 2482 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2484, end: 2486 },
            },
            loc: { start: 2484, end: 2486 },
          },
          directives: [],
          loc: { start: 2476, end: 2486 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2489, end: 2495 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2497, end: 2499 },
            },
            loc: { start: 2497, end: 2499 },
          },
          directives: [],
          loc: { start: 2489, end: 2499 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2502, end: 2511 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2513, end: 2517 },
            },
            loc: { start: 2513, end: 2517 },
          },
          directives: [],
          loc: { start: 2502, end: 2517 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2520, end: 2529 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2531, end: 2535 },
            },
            loc: { start: 2531, end: 2535 },
          },
          directives: [],
          loc: { start: 2520, end: 2535 },
        },
      ],
      loc: { start: 2461, end: 2537 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2544, end: 2552 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createShare",
            loc: { start: 2557, end: 2568 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "share",
                loc: { start: 2569, end: 2574 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ShareInput",
                    loc: { start: 2576, end: 2586 },
                  },
                  loc: { start: 2576, end: 2586 },
                },
                loc: { start: 2576, end: 2587 },
              },
              directives: [],
              loc: { start: 2569, end: 2587 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateShareResponse",
              loc: { start: 2590, end: 2609 },
            },
            loc: { start: 2590, end: 2609 },
          },
          directives: [],
          loc: { start: 2557, end: 2609 },
        },
      ],
      loc: { start: 2539, end: 2611 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShareInput",
        loc: { start: 2619, end: 2629 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2634, end: 2640 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2642, end: 2644 },
            },
            loc: { start: 2642, end: 2644 },
          },
          directives: [],
          loc: { start: 2634, end: 2644 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2647, end: 2653 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2655, end: 2657 },
            },
            loc: { start: 2655, end: 2657 },
          },
          directives: [],
          loc: { start: 2647, end: 2657 },
        },
      ],
      loc: { start: 2613, end: 2659 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateShareResponse",
        loc: { start: 2666, end: 2685 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 2690, end: 2697 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2699, end: 2705 },
            },
            loc: { start: 2699, end: 2705 },
          },
          directives: [],
          loc: { start: 2690, end: 2705 },
        },
      ],
      loc: { start: 2661, end: 2707 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2713, end: 2718 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUser",
            loc: { start: 2723, end: 2730 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2731, end: 2733 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2735, end: 2737 },
                  },
                  loc: { start: 2735, end: 2737 },
                },
                loc: { start: 2735, end: 2738 },
              },
              directives: [],
              loc: { start: 2731, end: 2738 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2741, end: 2745 },
            },
            loc: { start: 2741, end: 2745 },
          },
          directives: [],
          loc: { start: 2723, end: 2745 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 2748, end: 2750 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2752, end: 2756 },
            },
            loc: { start: 2752, end: 2756 },
          },
          directives: [],
          loc: { start: 2748, end: 2756 },
        },
      ],
      loc: { start: 2708, end: 2758 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateUserResponse",
        loc: { start: 2765, end: 2783 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 2788, end: 2795 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2797, end: 2803 },
            },
            loc: { start: 2797, end: 2803 },
          },
          directives: [],
          loc: { start: 2788, end: 2803 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 2806, end: 2811 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2813, end: 2819 },
            },
            loc: { start: 2813, end: 2819 },
          },
          directives: [],
          loc: { start: 2806, end: 2819 },
        },
      ],
      loc: { start: 2760, end: 2821 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 2828, end: 2841 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 2846, end: 2853 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2855, end: 2861 },
            },
            loc: { start: 2855, end: 2861 },
          },
          directives: [],
          loc: { start: 2846, end: 2861 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 2864, end: 2869 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2871, end: 2877 },
            },
            loc: { start: 2871, end: 2877 },
          },
          directives: [],
          loc: { start: 2864, end: 2877 },
        },
      ],
      loc: { start: 2823, end: 2879 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2886, end: 2894 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 2899, end: 2909 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 2910, end: 2914 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 2916, end: 2925 },
                  },
                  loc: { start: 2916, end: 2925 },
                },
                loc: { start: 2916, end: 2926 },
              },
              directives: [],
              loc: { start: 2910, end: 2926 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateUserResponse",
              loc: { start: 2929, end: 2947 },
            },
            loc: { start: 2929, end: 2947 },
          },
          directives: [],
          loc: { start: 2899, end: 2947 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginUser",
            loc: { start: 2950, end: 2959 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 2960, end: 2964 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 2966, end: 2975 },
                  },
                  loc: { start: 2966, end: 2975 },
                },
                loc: { start: 2966, end: 2976 },
              },
              directives: [],
              loc: { start: 2960, end: 2976 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "LoginResponse",
              loc: { start: 2979, end: 2992 },
            },
            loc: { start: 2979, end: 2992 },
          },
          directives: [],
          loc: { start: 2950, end: 2992 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 2995, end: 3005 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 3006, end: 3010 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UpdateUserInput",
                    loc: { start: 3012, end: 3027 },
                  },
                  loc: { start: 3012, end: 3027 },
                },
                loc: { start: 3012, end: 3028 },
              },
              directives: [],
              loc: { start: 3006, end: 3028 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3031, end: 3037 },
              },
              loc: { start: 3031, end: 3037 },
            },
            loc: { start: 3031, end: 3038 },
          },
          directives: [],
          loc: { start: 2995, end: 3038 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkUsername",
            loc: { start: 3041, end: 3054 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 3055, end: 3063 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3065, end: 3071 },
                  },
                  loc: { start: 3065, end: 3071 },
                },
                loc: { start: 3065, end: 3072 },
              },
              directives: [],
              loc: { start: 3055, end: 3072 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3075, end: 3081 },
            },
            loc: { start: 3075, end: 3081 },
          },
          directives: [],
          loc: { start: 3041, end: 3081 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 3084, end: 3094 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3095, end: 3097 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3099, end: 3101 },
                  },
                  loc: { start: 3099, end: 3101 },
                },
                loc: { start: 3099, end: 3102 },
              },
              directives: [],
              loc: { start: 3095, end: 3102 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3105, end: 3111 },
            },
            loc: { start: 3105, end: 3111 },
          },
          directives: [],
          loc: { start: 3084, end: 3111 },
        },
      ],
      loc: { start: 2881, end: 3113 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 3122, end: 3128 } },
      directives: [],
      loc: { start: 3115, end: 3128 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 3135, end: 3139 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3144, end: 3146 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3148, end: 3150 },
              },
              loc: { start: 3148, end: 3150 },
            },
            loc: { start: 3148, end: 3151 },
          },
          directives: [],
          loc: { start: 3144, end: 3151 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 3154, end: 3163 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3165, end: 3171 },
            },
            loc: { start: 3165, end: 3171 },
          },
          directives: [],
          loc: { start: 3154, end: 3171 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 3174, end: 3182 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3184, end: 3190 },
            },
            loc: { start: 3184, end: 3190 },
          },
          directives: [],
          loc: { start: 3174, end: 3190 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 3193, end: 3201 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3203, end: 3209 },
              },
              loc: { start: 3203, end: 3209 },
            },
            loc: { start: 3203, end: 3210 },
          },
          directives: [],
          loc: { start: 3193, end: 3210 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 3213, end: 3218 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3220, end: 3226 },
            },
            loc: { start: 3220, end: 3226 },
          },
          directives: [],
          loc: { start: 3213, end: 3226 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 3229, end: 3234 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3236, end: 3242 },
            },
            loc: { start: 3236, end: 3242 },
          },
          directives: [],
          loc: { start: 3229, end: 3242 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 3245, end: 3257 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3259, end: 3265 },
            },
            loc: { start: 3259, end: 3265 },
          },
          directives: [],
          loc: { start: 3245, end: 3265 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3268, end: 3275 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3277, end: 3283 },
            },
            loc: { start: 3277, end: 3283 },
          },
          directives: [],
          loc: { start: 3268, end: 3283 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 3286, end: 3296 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3298, end: 3305 },
            },
            loc: { start: 3298, end: 3305 },
          },
          directives: [],
          loc: { start: 3286, end: 3305 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 3308, end: 3311 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3313, end: 3319 },
            },
            loc: { start: 3313, end: 3319 },
          },
          directives: [],
          loc: { start: 3308, end: 3319 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 3322, end: 3331 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3333, end: 3337 },
            },
            loc: { start: 3333, end: 3337 },
          },
          directives: [],
          loc: { start: 3322, end: 3337 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 3340, end: 3349 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3351, end: 3355 },
            },
            loc: { start: 3351, end: 3355 },
          },
          directives: [],
          loc: { start: 3340, end: 3355 },
        },
      ],
      loc: { start: 3130, end: 3357 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UserInput",
        loc: { start: 3365, end: 3374 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 3379, end: 3387 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3389, end: 3395 },
              },
              loc: { start: 3389, end: 3395 },
            },
            loc: { start: 3389, end: 3396 },
          },
          directives: [],
          loc: { start: 3379, end: 3396 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 3399, end: 3407 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3409, end: 3415 },
              },
              loc: { start: 3409, end: 3415 },
            },
            loc: { start: 3409, end: 3416 },
          },
          directives: [],
          loc: { start: 3399, end: 3416 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 3419, end: 3428 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3430, end: 3436 },
            },
            loc: { start: 3430, end: 3436 },
          },
          directives: [],
          loc: { start: 3419, end: 3436 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 3439, end: 3447 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3449, end: 3455 },
            },
            loc: { start: 3449, end: 3455 },
          },
          directives: [],
          loc: { start: 3439, end: 3455 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 3458, end: 3463 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3465, end: 3471 },
            },
            loc: { start: 3465, end: 3471 },
          },
          directives: [],
          loc: { start: 3458, end: 3471 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 3474, end: 3479 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3481, end: 3487 },
            },
            loc: { start: 3481, end: 3487 },
          },
          directives: [],
          loc: { start: 3474, end: 3487 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 3490, end: 3502 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 3504, end: 3510 },
            },
            loc: { start: 3504, end: 3510 },
          },
          directives: [],
          loc: { start: 3490, end: 3510 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3513, end: 3520 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3522, end: 3528 },
            },
            loc: { start: 3522, end: 3528 },
          },
          directives: [],
          loc: { start: 3513, end: 3528 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 3531, end: 3534 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3536, end: 3542 },
            },
            loc: { start: 3536, end: 3542 },
          },
          directives: [],
          loc: { start: 3531, end: 3542 },
        },
      ],
      loc: { start: 3359, end: 3544 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UpdateUserInput",
        loc: { start: 3552, end: 3567 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 3572, end: 3580 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3582, end: 3588 },
            },
            loc: { start: 3582, end: 3588 },
          },
          directives: [],
          loc: { start: 3572, end: 3588 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 3591, end: 3599 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3601, end: 3607 },
            },
            loc: { start: 3601, end: 3607 },
          },
          directives: [],
          loc: { start: 3591, end: 3607 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 3610, end: 3619 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3621, end: 3627 },
            },
            loc: { start: 3621, end: 3627 },
          },
          directives: [],
          loc: { start: 3610, end: 3627 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 3630, end: 3638 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3640, end: 3646 },
            },
            loc: { start: 3640, end: 3646 },
          },
          directives: [],
          loc: { start: 3630, end: 3646 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 3649, end: 3654 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3656, end: 3662 },
            },
            loc: { start: 3656, end: 3662 },
          },
          directives: [],
          loc: { start: 3649, end: 3662 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 3665, end: 3670 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3672, end: 3678 },
            },
            loc: { start: 3672, end: 3678 },
          },
          directives: [],
          loc: { start: 3665, end: 3678 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 3681, end: 3693 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 3695, end: 3701 },
            },
            loc: { start: 3695, end: 3701 },
          },
          directives: [],
          loc: { start: 3681, end: 3701 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3704, end: 3711 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3713, end: 3719 },
            },
            loc: { start: 3713, end: 3719 },
          },
          directives: [],
          loc: { start: 3704, end: 3719 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 3722, end: 3725 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3727, end: 3733 },
            },
            loc: { start: 3727, end: 3733 },
          },
          directives: [],
          loc: { start: 3722, end: 3733 },
        },
      ],
      loc: { start: 3546, end: 3735 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wallet", loc: { start: 3741, end: 3747 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3752, end: 3758 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3760, end: 3762 },
            },
            loc: { start: 3760, end: 3762 },
          },
          directives: [],
          loc: { start: 3752, end: 3762 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3765, end: 3772 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3774, end: 3780 },
            },
            loc: { start: 3774, end: 3780 },
          },
          directives: [],
          loc: { start: 3765, end: 3780 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 3783, end: 3793 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3795, end: 3801 },
            },
            loc: { start: 3795, end: 3801 },
          },
          directives: [],
          loc: { start: 3783, end: 3801 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 3804, end: 3813 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3815, end: 3821 },
            },
            loc: { start: 3815, end: 3821 },
          },
          directives: [],
          loc: { start: 3804, end: 3821 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 3824, end: 3832 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3834, end: 3840 },
            },
            loc: { start: 3834, end: 3840 },
          },
          directives: [],
          loc: { start: 3824, end: 3840 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 3843, end: 3850 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3852, end: 3858 },
            },
            loc: { start: 3852, end: 3858 },
          },
          directives: [],
          loc: { start: 3843, end: 3858 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 3861, end: 3870 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3872, end: 3876 },
            },
            loc: { start: 3872, end: 3876 },
          },
          directives: [],
          loc: { start: 3861, end: 3876 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 3879, end: 3888 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3890, end: 3894 },
            },
            loc: { start: 3890, end: 3894 },
          },
          directives: [],
          loc: { start: 3879, end: 3894 },
        },
      ],
      loc: { start: 3736, end: 3896 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WalletInput",
        loc: { start: 3904, end: 3915 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3920, end: 3927 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3929, end: 3935 },
            },
            loc: { start: 3929, end: 3935 },
          },
          directives: [],
          loc: { start: 3920, end: 3935 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 3938, end: 3948 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3950, end: 3956 },
            },
            loc: { start: 3950, end: 3956 },
          },
          directives: [],
          loc: { start: 3938, end: 3956 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 3959, end: 3968 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3970, end: 3976 },
            },
            loc: { start: 3970, end: 3976 },
          },
          directives: [],
          loc: { start: 3959, end: 3976 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 3979, end: 3987 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3989, end: 3995 },
            },
            loc: { start: 3989, end: 3995 },
          },
          directives: [],
          loc: { start: 3979, end: 3995 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 3998, end: 4005 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4007, end: 4013 },
            },
            loc: { start: 4007, end: 4013 },
          },
          directives: [],
          loc: { start: 3998, end: 4013 },
        },
      ],
      loc: { start: 3898, end: 4015 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ChartData",
        loc: { start: 4022, end: 4031 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "labels",
            loc: { start: 4036, end: 4042 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4045, end: 4051 },
              },
              loc: { start: 4045, end: 4051 },
            },
            loc: { start: 4044, end: 4052 },
          },
          directives: [],
          loc: { start: 4036, end: 4052 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "datasets",
            loc: { start: 4055, end: 4063 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Dataset",
                loc: { start: 4066, end: 4073 },
              },
              loc: { start: 4066, end: 4073 },
            },
            loc: { start: 4065, end: 4074 },
          },
          directives: [],
          loc: { start: 4055, end: 4074 },
        },
      ],
      loc: { start: 4017, end: 4076 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Dataset", loc: { start: 4083, end: 4090 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "data",
            loc: { start: 4095, end: 4099 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 4102, end: 4107 },
              },
              loc: { start: 4102, end: 4107 },
            },
            loc: { start: 4101, end: 4108 },
          },
          directives: [],
          loc: { start: 4095, end: 4108 },
        },
      ],
      loc: { start: 4078, end: 4110 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CoinData",
        loc: { start: 4117, end: 4125 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4130, end: 4134 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4136, end: 4142 },
            },
            loc: { start: 4136, end: 4142 },
          },
          directives: [],
          loc: { start: 4130, end: 4142 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "symbol",
            loc: { start: 4145, end: 4151 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4153, end: 4159 },
            },
            loc: { start: 4153, end: 4159 },
          },
          directives: [],
          loc: { start: 4145, end: 4159 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 4162, end: 4167 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4169, end: 4175 },
            },
            loc: { start: 4169, end: 4175 },
          },
          directives: [],
          loc: { start: 4162, end: 4175 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 4178, end: 4183 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 4185, end: 4190 },
            },
            loc: { start: 4185, end: 4190 },
          },
          directives: [],
          loc: { start: 4178, end: 4190 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 4193, end: 4199 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 4201, end: 4206 },
            },
            loc: { start: 4201, end: 4206 },
          },
          directives: [],
          loc: { start: 4193, end: 4206 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "changePercentage",
            loc: { start: 4209, end: 4225 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 4227, end: 4232 },
            },
            loc: { start: 4227, end: 4232 },
          },
          directives: [],
          loc: { start: 4209, end: 4232 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "chartData",
            loc: { start: 4235, end: 4244 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ChartData",
              loc: { start: 4246, end: 4255 },
            },
            loc: { start: 4246, end: 4255 },
          },
          directives: [],
          loc: { start: 4235, end: 4255 },
        },
      ],
      loc: { start: 4112, end: 4257 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 4264, end: 4269 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getWallet",
            loc: { start: 4274, end: 4283 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Wallet",
              loc: { start: 4285, end: 4291 },
            },
            loc: { start: 4285, end: 4291 },
          },
          directives: [],
          loc: { start: 4274, end: 4291 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCoinData",
            loc: { start: 4294, end: 4305 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "currency",
                loc: { start: 4306, end: 4314 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4316, end: 4322 },
                  },
                  loc: { start: 4316, end: 4322 },
                },
                loc: { start: 4316, end: 4323 },
              },
              directives: [],
              loc: { start: 4306, end: 4323 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "days",
                loc: { start: 4325, end: 4329 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 4331, end: 4334 },
                  },
                  loc: { start: 4331, end: 4334 },
                },
                loc: { start: 4331, end: 4335 },
              },
              directives: [],
              loc: { start: 4325, end: 4335 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CoinData",
                loc: { start: 4338, end: 4346 },
              },
              loc: { start: 4338, end: 4346 },
            },
            loc: { start: 4338, end: 4347 },
          },
          directives: [],
          loc: { start: 4294, end: 4347 },
        },
      ],
      loc: { start: 4259, end: 4349 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 4356, end: 4364 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createWallet",
            loc: { start: 4369, end: 4381 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 4382, end: 4388 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 4390, end: 4401 },
                  },
                  loc: { start: 4390, end: 4401 },
                },
                loc: { start: 4390, end: 4402 },
              },
              directives: [],
              loc: { start: 4382, end: 4402 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4405, end: 4411 },
            },
            loc: { start: 4405, end: 4411 },
          },
          directives: [],
          loc: { start: 4369, end: 4411 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateWallet",
            loc: { start: 4414, end: 4426 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4427, end: 4429 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4431, end: 4433 },
                  },
                  loc: { start: 4431, end: 4433 },
                },
                loc: { start: 4431, end: 4434 },
              },
              directives: [],
              loc: { start: 4427, end: 4434 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 4436, end: 4442 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 4444, end: 4455 },
                  },
                  loc: { start: 4444, end: 4455 },
                },
                loc: { start: 4444, end: 4456 },
              },
              directives: [],
              loc: { start: 4436, end: 4456 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4459, end: 4465 },
            },
            loc: { start: 4459, end: 4465 },
          },
          directives: [],
          loc: { start: 4414, end: 4465 },
        },
      ],
      loc: { start: 4351, end: 4467 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 4476, end: 4482 } },
      directives: [],
      loc: { start: 4469, end: 4482 },
    },
  ],
  loc: { start: 0, end: 4483 },
} as unknown as DocumentNode;
