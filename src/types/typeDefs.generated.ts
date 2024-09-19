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
      name: { kind: "Name", value: "User", loc: { start: 194, end: 198 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 203, end: 205 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 207, end: 209 } },
            loc: { start: 207, end: 209 },
          },
          directives: [],
          loc: { start: 203, end: 209 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 212, end: 221 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 223, end: 229 },
            },
            loc: { start: 223, end: 229 },
          },
          directives: [],
          loc: { start: 212, end: 229 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 232, end: 240 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 242, end: 248 },
            },
            loc: { start: 242, end: 248 },
          },
          directives: [],
          loc: { start: 232, end: 248 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 251, end: 259 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 261, end: 267 },
            },
            loc: { start: 261, end: 267 },
          },
          directives: [],
          loc: { start: 251, end: 267 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 270, end: 282 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 284, end: 290 },
            },
            loc: { start: 284, end: 290 },
          },
          directives: [],
          loc: { start: 270, end: 290 },
        },
      ],
      loc: { start: 189, end: 292 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 299, end: 306 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 311, end: 313 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 315, end: 317 } },
            loc: { start: 315, end: 317 },
          },
          directives: [],
          loc: { start: 311, end: 317 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 320, end: 324 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 326, end: 330 },
            },
            loc: { start: 326, end: 330 },
          },
          directives: [],
          loc: { start: 320, end: 330 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 333, end: 339 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 341, end: 343 } },
            loc: { start: 341, end: 343 },
          },
          directives: [],
          loc: { start: 333, end: 343 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 346, end: 353 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 355, end: 361 },
            },
            loc: { start: 355, end: 361 },
          },
          directives: [],
          loc: { start: 346, end: 361 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 364, end: 373 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 375, end: 379 },
            },
            loc: { start: 375, end: 379 },
          },
          directives: [],
          loc: { start: 364, end: 379 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 382, end: 391 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 393, end: 397 },
            },
            loc: { start: 393, end: 397 },
          },
          directives: [],
          loc: { start: 382, end: 397 },
        },
      ],
      loc: { start: 294, end: 399 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 406, end: 414 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createComment",
            loc: { start: 419, end: 432 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "comment",
                loc: { start: 433, end: 440 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CommentInput",
                    loc: { start: 442, end: 454 },
                  },
                  loc: { start: 442, end: 454 },
                },
                loc: { start: 442, end: 455 },
              },
              directives: [],
              loc: { start: 433, end: 455 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateCommentResponse",
              loc: { start: 458, end: 479 },
            },
            loc: { start: 458, end: 479 },
          },
          directives: [],
          loc: { start: 419, end: 479 },
        },
      ],
      loc: { start: 401, end: 481 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommentInput",
        loc: { start: 489, end: 501 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "user", loc: { start: 506, end: 510 } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 512, end: 514 } },
            loc: { start: 512, end: 514 },
          },
          directives: [],
          loc: { start: 506, end: 514 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 517, end: 523 },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 525, end: 527 } },
            loc: { start: 525, end: 527 },
          },
          directives: [],
          loc: { start: 517, end: 527 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 530, end: 537 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 539, end: 545 },
            },
            loc: { start: 539, end: 545 },
          },
          directives: [],
          loc: { start: 530, end: 545 },
        },
      ],
      loc: { start: 483, end: 547 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommentResponse",
        loc: { start: 554, end: 575 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 580, end: 587 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 589, end: 595 },
            },
            loc: { start: 589, end: 595 },
          },
          directives: [],
          loc: { start: 580, end: 595 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comment",
            loc: { start: 598, end: 605 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Comment",
              loc: { start: 607, end: 614 },
            },
            loc: { start: 607, end: 614 },
          },
          directives: [],
          loc: { start: 598, end: 614 },
        },
      ],
      loc: { start: 549, end: 616 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 622, end: 627 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserCommunities",
            loc: { start: 632, end: 650 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 651, end: 653 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 655, end: 657 },
                  },
                  loc: { start: 655, end: 657 },
                },
                loc: { start: 655, end: 658 },
              },
              directives: [],
              loc: { start: 651, end: 658 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Community",
                loc: { start: 662, end: 671 },
              },
              loc: { start: 662, end: 671 },
            },
            loc: { start: 661, end: 672 },
          },
          directives: [],
          loc: { start: 632, end: 672 },
        },
      ],
      loc: { start: 617, end: 674 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommunityResponse",
        loc: { start: 681, end: 704 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 709, end: 713 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 715, end: 721 },
            },
            loc: { start: 715, end: 721 },
          },
          directives: [],
          loc: { start: 709, end: 721 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 724, end: 735 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 737, end: 743 },
            },
            loc: { start: 737, end: 743 },
          },
          directives: [],
          loc: { start: 724, end: 743 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 746, end: 756 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 758, end: 765 },
            },
            loc: { start: 758, end: 765 },
          },
          directives: [],
          loc: { start: 746, end: 765 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 768, end: 774 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 776, end: 778 } },
            loc: { start: 776, end: 778 },
          },
          directives: [],
          loc: { start: 768, end: 778 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 781, end: 793 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 795, end: 801 },
            },
            loc: { start: 795, end: 801 },
          },
          directives: [],
          loc: { start: 781, end: 801 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 804, end: 814 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 816, end: 822 },
            },
            loc: { start: 816, end: 822 },
          },
          directives: [],
          loc: { start: 804, end: 822 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 825, end: 834 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 836, end: 840 },
            },
            loc: { start: 836, end: 840 },
          },
          directives: [],
          loc: { start: 825, end: 840 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 843, end: 852 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 854, end: 858 },
            },
            loc: { start: 854, end: 858 },
          },
          directives: [],
          loc: { start: 843, end: 858 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "_id", loc: { start: 861, end: 864 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 866, end: 868 } },
            loc: { start: 866, end: 868 },
          },
          directives: [],
          loc: { start: 861, end: 868 },
        },
      ],
      loc: { start: 676, end: 870 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 877, end: 885 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCommunity",
            loc: { start: 890, end: 905 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "community",
                loc: { start: 906, end: 915 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CommunityInput",
                    loc: { start: 917, end: 931 },
                  },
                  loc: { start: 917, end: 931 },
                },
                loc: { start: 917, end: 932 },
              },
              directives: [],
              loc: { start: 906, end: 932 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateCommunityResponse",
              loc: { start: 935, end: 958 },
            },
            loc: { start: 935, end: 958 },
          },
          directives: [],
          loc: { start: 890, end: 958 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCommunity",
            loc: { start: 961, end: 976 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 977, end: 979 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 981, end: 983 },
                  },
                  loc: { start: 981, end: 983 },
                },
                loc: { start: 981, end: 984 },
              },
              directives: [],
              loc: { start: 977, end: 984 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "community",
                loc: { start: 986, end: 995 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CommunityInput",
                    loc: { start: 997, end: 1011 },
                  },
                  loc: { start: 997, end: 1011 },
                },
                loc: { start: 997, end: 1012 },
              },
              directives: [],
              loc: { start: 986, end: 1012 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1015, end: 1021 },
            },
            loc: { start: 1015, end: 1021 },
          },
          directives: [],
          loc: { start: 961, end: 1021 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCommunity",
            loc: { start: 1024, end: 1039 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1040, end: 1042 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1044, end: 1046 },
                  },
                  loc: { start: 1044, end: 1046 },
                },
                loc: { start: 1044, end: 1047 },
              },
              directives: [],
              loc: { start: 1040, end: 1047 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1050, end: 1056 },
            },
            loc: { start: 1050, end: 1056 },
          },
          directives: [],
          loc: { start: 1024, end: 1056 },
        },
      ],
      loc: { start: 872, end: 1058 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 1067, end: 1073 } },
      directives: [],
      loc: { start: 1060, end: 1073 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Community",
        loc: { start: 1080, end: 1089 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1094, end: 1098 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1100, end: 1106 },
            },
            loc: { start: 1100, end: 1106 },
          },
          directives: [],
          loc: { start: 1094, end: 1106 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1109, end: 1120 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1122, end: 1128 },
            },
            loc: { start: 1122, end: 1128 },
          },
          directives: [],
          loc: { start: 1109, end: 1128 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 1131, end: 1141 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1143, end: 1150 },
            },
            loc: { start: 1143, end: 1150 },
          },
          directives: [],
          loc: { start: 1131, end: 1150 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1153, end: 1159 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1161, end: 1163 },
            },
            loc: { start: 1161, end: 1163 },
          },
          directives: [],
          loc: { start: 1153, end: 1163 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 1166, end: 1178 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1180, end: 1186 },
            },
            loc: { start: 1180, end: 1186 },
          },
          directives: [],
          loc: { start: 1166, end: 1186 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 1189, end: 1199 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1201, end: 1207 },
            },
            loc: { start: 1201, end: 1207 },
          },
          directives: [],
          loc: { start: 1189, end: 1207 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1210, end: 1219 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1221, end: 1225 },
            },
            loc: { start: 1221, end: 1225 },
          },
          directives: [],
          loc: { start: 1210, end: 1225 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1228, end: 1237 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1239, end: 1243 },
            },
            loc: { start: 1239, end: 1243 },
          },
          directives: [],
          loc: { start: 1228, end: 1243 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "_id", loc: { start: 1246, end: 1249 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1251, end: 1253 },
            },
            loc: { start: 1251, end: 1253 },
          },
          directives: [],
          loc: { start: 1246, end: 1253 },
        },
      ],
      loc: { start: 1075, end: 1255 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommunityInput",
        loc: { start: 1263, end: 1277 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1282, end: 1286 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1288, end: 1294 },
              },
              loc: { start: 1288, end: 1294 },
            },
            loc: { start: 1288, end: 1295 },
          },
          directives: [],
          loc: { start: 1282, end: 1295 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1298, end: 1309 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1311, end: 1317 },
              },
              loc: { start: 1311, end: 1317 },
            },
            loc: { start: 1311, end: 1318 },
          },
          directives: [],
          loc: { start: 1298, end: 1318 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 1321, end: 1331 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1333, end: 1340 },
            },
            loc: { start: 1333, end: 1340 },
          },
          directives: [],
          loc: { start: 1321, end: 1340 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1343, end: 1349 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1351, end: 1353 },
              },
              loc: { start: 1351, end: 1353 },
            },
            loc: { start: 1351, end: 1354 },
          },
          directives: [],
          loc: { start: 1343, end: 1354 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 1357, end: 1369 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 1371, end: 1377 },
            },
            loc: { start: 1371, end: 1377 },
          },
          directives: [],
          loc: { start: 1357, end: 1377 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 1380, end: 1390 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 1392, end: 1398 },
            },
            loc: { start: 1392, end: 1398 },
          },
          directives: [],
          loc: { start: 1380, end: 1398 },
        },
      ],
      loc: { start: 1257, end: 1400 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1406, end: 1411 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserPosts",
            loc: { start: 1416, end: 1428 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1429, end: 1431 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1433, end: 1435 },
                  },
                  loc: { start: 1433, end: 1435 },
                },
                loc: { start: 1433, end: 1436 },
              },
              directives: [],
              loc: { start: 1429, end: 1436 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1440, end: 1444 },
              },
              loc: { start: 1440, end: 1444 },
            },
            loc: { start: 1439, end: 1445 },
          },
          directives: [],
          loc: { start: 1416, end: 1445 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCommunityPosts",
            loc: { start: 1448, end: 1465 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1466, end: 1468 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1470, end: 1472 },
                  },
                  loc: { start: 1470, end: 1472 },
                },
                loc: { start: 1470, end: 1473 },
              },
              directives: [],
              loc: { start: 1466, end: 1473 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1477, end: 1481 },
              },
              loc: { start: 1477, end: 1481 },
            },
            loc: { start: 1476, end: 1482 },
          },
          directives: [],
          loc: { start: 1448, end: 1482 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getPost",
            loc: { start: 1485, end: 1492 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1493, end: 1495 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1497, end: 1499 },
                  },
                  loc: { start: 1497, end: 1499 },
                },
                loc: { start: 1497, end: 1500 },
              },
              directives: [],
              loc: { start: 1493, end: 1500 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 1503, end: 1507 },
            },
            loc: { start: 1503, end: 1507 },
          },
          directives: [],
          loc: { start: 1485, end: 1507 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getAllPosts",
            loc: { start: 1510, end: 1521 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "filters",
                loc: { start: 1522, end: 1529 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "PostFilter",
                  loc: { start: 1531, end: 1541 },
                },
                loc: { start: 1531, end: 1541 },
              },
              directives: [],
              loc: { start: 1522, end: 1541 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1545, end: 1549 },
              },
              loc: { start: 1545, end: 1549 },
            },
            loc: { start: 1544, end: 1550 },
          },
          directives: [],
          loc: { start: 1510, end: 1550 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getFollowingPosts",
            loc: { start: 1553, end: 1570 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1573, end: 1577 },
              },
              loc: { start: 1573, end: 1577 },
            },
            loc: { start: 1572, end: 1578 },
          },
          directives: [],
          loc: { start: 1553, end: 1578 },
        },
      ],
      loc: { start: 1401, end: 1580 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostFilter",
        loc: { start: 1588, end: 1598 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1603, end: 1608 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1610, end: 1616 },
            },
            loc: { start: 1610, end: 1616 },
          },
          directives: [],
          loc: { start: 1603, end: 1616 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1619, end: 1626 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1628, end: 1634 },
            },
            loc: { start: 1628, end: 1634 },
          },
          directives: [],
          loc: { start: 1619, end: 1634 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "length",
            loc: { start: 1637, end: 1643 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1645, end: 1648 },
            },
            loc: { start: 1645, end: 1648 },
          },
          directives: [],
          loc: { start: 1637, end: 1648 },
        },
      ],
      loc: { start: 1582, end: 1650 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostResponse",
        loc: { start: 1657, end: 1675 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 1680, end: 1687 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1689, end: 1695 },
            },
            loc: { start: 1689, end: 1695 },
          },
          directives: [],
          loc: { start: 1680, end: 1695 },
        },
      ],
      loc: { start: 1652, end: 1697 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostStats",
        loc: { start: 1704, end: 1713 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalLikes",
            loc: { start: 1718, end: 1728 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1730, end: 1733 },
            },
            loc: { start: 1730, end: 1733 },
          },
          directives: [],
          loc: { start: 1718, end: 1733 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalComments",
            loc: { start: 1736, end: 1749 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1751, end: 1754 },
            },
            loc: { start: 1751, end: 1754 },
          },
          directives: [],
          loc: { start: 1736, end: 1754 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalShares",
            loc: { start: 1757, end: 1768 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1770, end: 1773 },
            },
            loc: { start: 1770, end: 1773 },
          },
          directives: [],
          loc: { start: 1757, end: 1773 },
        },
      ],
      loc: { start: 1699, end: 1775 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Post", loc: { start: 1782, end: 1786 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1791, end: 1796 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1798, end: 1804 },
            },
            loc: { start: 1798, end: 1804 },
          },
          directives: [],
          loc: { start: 1791, end: 1804 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1807, end: 1814 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1816, end: 1822 },
            },
            loc: { start: 1816, end: 1822 },
          },
          directives: [],
          loc: { start: 1807, end: 1822 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 1825, end: 1835 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1837, end: 1844 },
            },
            loc: { start: 1837, end: 1844 },
          },
          directives: [],
          loc: { start: 1825, end: 1844 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "communityId",
            loc: { start: 1847, end: 1858 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1860, end: 1862 },
            },
            loc: { start: 1860, end: 1862 },
          },
          directives: [],
          loc: { start: 1847, end: 1862 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1865, end: 1870 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1872, end: 1878 },
            },
            loc: { start: 1872, end: 1878 },
          },
          directives: [],
          loc: { start: 1865, end: 1878 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1881, end: 1887 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1889, end: 1893 },
            },
            loc: { start: 1889, end: 1893 },
          },
          directives: [],
          loc: { start: 1881, end: 1893 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "community",
            loc: { start: 1896, end: 1905 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Community",
              loc: { start: 1907, end: 1916 },
            },
            loc: { start: 1907, end: 1916 },
          },
          directives: [],
          loc: { start: 1896, end: 1916 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "likes",
            loc: { start: 1919, end: 1924 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1927, end: 1929 },
              },
              loc: { start: 1927, end: 1929 },
            },
            loc: { start: 1926, end: 1930 },
          },
          directives: [],
          loc: { start: 1919, end: 1930 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stats",
            loc: { start: 1933, end: 1938 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PostStats",
              loc: { start: 1940, end: 1949 },
            },
            loc: { start: 1940, end: 1949 },
          },
          directives: [],
          loc: { start: 1933, end: 1949 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1952, end: 1961 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1963, end: 1967 },
            },
            loc: { start: 1963, end: 1967 },
          },
          directives: [],
          loc: { start: 1952, end: 1967 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1970, end: 1979 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1981, end: 1985 },
            },
            loc: { start: 1981, end: 1985 },
          },
          directives: [],
          loc: { start: 1970, end: 1985 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1988, end: 1990 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1992, end: 1994 },
            },
            loc: { start: 1992, end: 1994 },
          },
          directives: [],
          loc: { start: 1988, end: 1994 },
        },
      ],
      loc: { start: 1777, end: 1996 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 2003, end: 2007 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2012, end: 2014 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2016, end: 2018 },
            },
            loc: { start: 2016, end: 2018 },
          },
          directives: [],
          loc: { start: 2012, end: 2018 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 2021, end: 2030 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2032, end: 2038 },
            },
            loc: { start: 2032, end: 2038 },
          },
          directives: [],
          loc: { start: 2021, end: 2038 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 2041, end: 2049 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2051, end: 2057 },
            },
            loc: { start: 2051, end: 2057 },
          },
          directives: [],
          loc: { start: 2041, end: 2057 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 2060, end: 2068 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2070, end: 2076 },
            },
            loc: { start: 2070, end: 2076 },
          },
          directives: [],
          loc: { start: 2060, end: 2076 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 2079, end: 2091 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2093, end: 2099 },
            },
            loc: { start: 2093, end: 2099 },
          },
          directives: [],
          loc: { start: 2079, end: 2099 },
        },
      ],
      loc: { start: 1998, end: 2101 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 2108, end: 2115 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2120, end: 2122 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2124, end: 2126 },
            },
            loc: { start: 2124, end: 2126 },
          },
          directives: [],
          loc: { start: 2120, end: 2126 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2129, end: 2135 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2137, end: 2139 },
            },
            loc: { start: 2137, end: 2139 },
          },
          directives: [],
          loc: { start: 2129, end: 2139 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2142, end: 2146 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2148, end: 2152 },
            },
            loc: { start: 2148, end: 2152 },
          },
          directives: [],
          loc: { start: 2142, end: 2152 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2155, end: 2161 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2163, end: 2165 },
            },
            loc: { start: 2163, end: 2165 },
          },
          directives: [],
          loc: { start: 2155, end: 2165 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2168, end: 2175 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2177, end: 2183 },
            },
            loc: { start: 2177, end: 2183 },
          },
          directives: [],
          loc: { start: 2168, end: 2183 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2186, end: 2195 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2197, end: 2201 },
            },
            loc: { start: 2197, end: 2201 },
          },
          directives: [],
          loc: { start: 2186, end: 2201 },
        },
      ],
      loc: { start: 2103, end: 2203 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Share", loc: { start: 2210, end: 2215 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2220, end: 2222 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2224, end: 2226 },
            },
            loc: { start: 2224, end: 2226 },
          },
          directives: [],
          loc: { start: 2220, end: 2226 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2229, end: 2235 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2237, end: 2239 },
            },
            loc: { start: 2237, end: 2239 },
          },
          directives: [],
          loc: { start: 2229, end: 2239 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2242, end: 2248 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2250, end: 2252 },
            },
            loc: { start: 2250, end: 2252 },
          },
          directives: [],
          loc: { start: 2242, end: 2252 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2255, end: 2264 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2266, end: 2270 },
            },
            loc: { start: 2266, end: 2270 },
          },
          directives: [],
          loc: { start: 2255, end: 2270 },
        },
      ],
      loc: { start: 2205, end: 2272 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostInput",
        loc: { start: 2280, end: 2289 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2294, end: 2299 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2301, end: 2307 },
            },
            loc: { start: 2301, end: 2307 },
          },
          directives: [],
          loc: { start: 2294, end: 2307 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2310, end: 2317 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2319, end: 2325 },
            },
            loc: { start: 2319, end: 2325 },
          },
          directives: [],
          loc: { start: 2310, end: 2325 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 2328, end: 2338 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2340, end: 2347 },
            },
            loc: { start: 2340, end: 2347 },
          },
          directives: [],
          loc: { start: 2328, end: 2347 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "communityId",
            loc: { start: 2350, end: 2361 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2363, end: 2365 },
            },
            loc: { start: 2363, end: 2365 },
          },
          directives: [],
          loc: { start: 2350, end: 2365 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 2368, end: 2373 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 2375, end: 2381 },
            },
            loc: { start: 2375, end: 2381 },
          },
          directives: [],
          loc: { start: 2368, end: 2381 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2384, end: 2390 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2392, end: 2394 },
            },
            loc: { start: 2392, end: 2394 },
          },
          directives: [],
          loc: { start: 2384, end: 2394 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2397, end: 2406 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2408, end: 2412 },
            },
            loc: { start: 2408, end: 2412 },
          },
          directives: [],
          loc: { start: 2397, end: 2412 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2415, end: 2424 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2426, end: 2430 },
            },
            loc: { start: 2426, end: 2430 },
          },
          directives: [],
          loc: { start: 2415, end: 2430 },
        },
      ],
      loc: { start: 2274, end: 2432 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2439, end: 2447 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createPost",
            loc: { start: 2452, end: 2462 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "post",
                loc: { start: 2463, end: 2467 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PostInput",
                    loc: { start: 2469, end: 2478 },
                  },
                  loc: { start: 2469, end: 2478 },
                },
                loc: { start: 2469, end: 2479 },
              },
              directives: [],
              loc: { start: 2463, end: 2479 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreatePostResponse",
              loc: { start: 2482, end: 2500 },
            },
            loc: { start: 2482, end: 2500 },
          },
          directives: [],
          loc: { start: 2452, end: 2500 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "doLike",
            loc: { start: 2503, end: 2509 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "postId",
                loc: { start: 2510, end: 2516 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2518, end: 2520 },
                  },
                  loc: { start: 2518, end: 2520 },
                },
                loc: { start: 2518, end: 2521 },
              },
              directives: [],
              loc: { start: 2510, end: 2521 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2524, end: 2530 },
            },
            loc: { start: 2524, end: 2530 },
          },
          directives: [],
          loc: { start: 2503, end: 2530 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatePost",
            loc: { start: 2533, end: 2543 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2544, end: 2546 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2548, end: 2550 },
                  },
                  loc: { start: 2548, end: 2550 },
                },
                loc: { start: 2548, end: 2551 },
              },
              directives: [],
              loc: { start: 2544, end: 2551 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "post",
                loc: { start: 2553, end: 2557 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PostInput",
                    loc: { start: 2559, end: 2568 },
                  },
                  loc: { start: 2559, end: 2568 },
                },
                loc: { start: 2559, end: 2569 },
              },
              directives: [],
              loc: { start: 2553, end: 2569 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2572, end: 2578 },
            },
            loc: { start: 2572, end: 2578 },
          },
          directives: [],
          loc: { start: 2533, end: 2578 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deletePost",
            loc: { start: 2581, end: 2591 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2592, end: 2594 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2596, end: 2598 },
                  },
                  loc: { start: 2596, end: 2598 },
                },
                loc: { start: 2596, end: 2599 },
              },
              directives: [],
              loc: { start: 2592, end: 2599 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2602, end: 2608 },
            },
            loc: { start: 2602, end: 2608 },
          },
          directives: [],
          loc: { start: 2581, end: 2608 },
        },
      ],
      loc: { start: 2434, end: 2610 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2616, end: 2621 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getShares",
            loc: { start: 2626, end: 2635 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2636, end: 2638 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2640, end: 2642 },
                  },
                  loc: { start: 2640, end: 2642 },
                },
                loc: { start: 2640, end: 2643 },
              },
              directives: [],
              loc: { start: 2636, end: 2643 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Share",
                loc: { start: 2647, end: 2652 },
              },
              loc: { start: 2647, end: 2652 },
            },
            loc: { start: 2646, end: 2653 },
          },
          directives: [],
          loc: { start: 2626, end: 2653 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserShares",
            loc: { start: 2656, end: 2669 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2670, end: 2672 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2674, end: 2676 },
                  },
                  loc: { start: 2674, end: 2676 },
                },
                loc: { start: 2674, end: 2677 },
              },
              directives: [],
              loc: { start: 2670, end: 2677 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Share",
                loc: { start: 2681, end: 2686 },
              },
              loc: { start: 2681, end: 2686 },
            },
            loc: { start: 2680, end: 2687 },
          },
          directives: [],
          loc: { start: 2656, end: 2687 },
        },
      ],
      loc: { start: 2611, end: 2689 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Share", loc: { start: 2696, end: 2701 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2706, end: 2712 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2714, end: 2716 },
            },
            loc: { start: 2714, end: 2716 },
          },
          directives: [],
          loc: { start: 2706, end: 2716 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2719, end: 2725 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2727, end: 2729 },
            },
            loc: { start: 2727, end: 2729 },
          },
          directives: [],
          loc: { start: 2719, end: 2729 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2732, end: 2741 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2743, end: 2747 },
            },
            loc: { start: 2743, end: 2747 },
          },
          directives: [],
          loc: { start: 2732, end: 2747 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2750, end: 2759 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2761, end: 2765 },
            },
            loc: { start: 2761, end: 2765 },
          },
          directives: [],
          loc: { start: 2750, end: 2765 },
        },
      ],
      loc: { start: 2691, end: 2767 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2774, end: 2782 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createShare",
            loc: { start: 2787, end: 2798 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "share",
                loc: { start: 2799, end: 2804 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ShareInput",
                    loc: { start: 2806, end: 2816 },
                  },
                  loc: { start: 2806, end: 2816 },
                },
                loc: { start: 2806, end: 2817 },
              },
              directives: [],
              loc: { start: 2799, end: 2817 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateShareResponse",
              loc: { start: 2820, end: 2839 },
            },
            loc: { start: 2820, end: 2839 },
          },
          directives: [],
          loc: { start: 2787, end: 2839 },
        },
      ],
      loc: { start: 2769, end: 2841 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShareInput",
        loc: { start: 2849, end: 2859 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2864, end: 2870 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2872, end: 2874 },
            },
            loc: { start: 2872, end: 2874 },
          },
          directives: [],
          loc: { start: 2864, end: 2874 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2877, end: 2883 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2885, end: 2887 },
            },
            loc: { start: 2885, end: 2887 },
          },
          directives: [],
          loc: { start: 2877, end: 2887 },
        },
      ],
      loc: { start: 2843, end: 2889 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateShareResponse",
        loc: { start: 2896, end: 2915 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 2920, end: 2927 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2929, end: 2935 },
            },
            loc: { start: 2929, end: 2935 },
          },
          directives: [],
          loc: { start: 2920, end: 2935 },
        },
      ],
      loc: { start: 2891, end: 2937 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2943, end: 2948 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUser",
            loc: { start: 2953, end: 2960 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2961, end: 2963 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2965, end: 2967 },
                  },
                  loc: { start: 2965, end: 2967 },
                },
                loc: { start: 2965, end: 2968 },
              },
              directives: [],
              loc: { start: 2961, end: 2968 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2971, end: 2975 },
            },
            loc: { start: 2971, end: 2975 },
          },
          directives: [],
          loc: { start: 2953, end: 2975 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 2978, end: 2980 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2982, end: 2986 },
            },
            loc: { start: 2982, end: 2986 },
          },
          directives: [],
          loc: { start: 2978, end: 2986 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserFollowing",
            loc: { start: 2989, end: 3005 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3006, end: 3008 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3010, end: 3012 },
                  },
                  loc: { start: 3010, end: 3012 },
                },
                loc: { start: 3010, end: 3013 },
              },
              directives: [],
              loc: { start: 3006, end: 3013 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3017, end: 3021 },
              },
              loc: { start: 3017, end: 3021 },
            },
            loc: { start: 3016, end: 3022 },
          },
          directives: [],
          loc: { start: 2989, end: 3022 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserFollowers",
            loc: { start: 3025, end: 3041 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3042, end: 3044 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3046, end: 3048 },
                  },
                  loc: { start: 3046, end: 3048 },
                },
                loc: { start: 3046, end: 3049 },
              },
              directives: [],
              loc: { start: 3042, end: 3049 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3053, end: 3057 },
              },
              loc: { start: 3053, end: 3057 },
            },
            loc: { start: 3052, end: 3058 },
          },
          directives: [],
          loc: { start: 3025, end: 3058 },
        },
      ],
      loc: { start: 2938, end: 3060 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateUserResponse",
        loc: { start: 3067, end: 3085 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 3090, end: 3097 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3099, end: 3105 },
            },
            loc: { start: 3099, end: 3105 },
          },
          directives: [],
          loc: { start: 3090, end: 3105 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 3108, end: 3113 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3115, end: 3121 },
            },
            loc: { start: 3115, end: 3121 },
          },
          directives: [],
          loc: { start: 3108, end: 3121 },
        },
      ],
      loc: { start: 3062, end: 3123 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 3130, end: 3143 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 3148, end: 3155 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3157, end: 3163 },
            },
            loc: { start: 3157, end: 3163 },
          },
          directives: [],
          loc: { start: 3148, end: 3163 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 3166, end: 3171 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3173, end: 3179 },
            },
            loc: { start: 3173, end: 3179 },
          },
          directives: [],
          loc: { start: 3166, end: 3179 },
        },
      ],
      loc: { start: 3125, end: 3181 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3188, end: 3196 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 3201, end: 3211 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 3212, end: 3216 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 3218, end: 3227 },
                  },
                  loc: { start: 3218, end: 3227 },
                },
                loc: { start: 3218, end: 3228 },
              },
              directives: [],
              loc: { start: 3212, end: 3228 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateUserResponse",
              loc: { start: 3231, end: 3249 },
            },
            loc: { start: 3231, end: 3249 },
          },
          directives: [],
          loc: { start: 3201, end: 3249 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginUser",
            loc: { start: 3252, end: 3261 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 3262, end: 3266 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 3268, end: 3277 },
                  },
                  loc: { start: 3268, end: 3277 },
                },
                loc: { start: 3268, end: 3278 },
              },
              directives: [],
              loc: { start: 3262, end: 3278 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "LoginResponse",
              loc: { start: 3281, end: 3294 },
            },
            loc: { start: 3281, end: 3294 },
          },
          directives: [],
          loc: { start: 3252, end: 3294 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 3297, end: 3307 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 3308, end: 3312 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UpdateUserInput",
                    loc: { start: 3314, end: 3329 },
                  },
                  loc: { start: 3314, end: 3329 },
                },
                loc: { start: 3314, end: 3330 },
              },
              directives: [],
              loc: { start: 3308, end: 3330 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3333, end: 3339 },
              },
              loc: { start: 3333, end: 3339 },
            },
            loc: { start: 3333, end: 3340 },
          },
          directives: [],
          loc: { start: 3297, end: 3340 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkUsername",
            loc: { start: 3343, end: 3356 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 3357, end: 3365 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3367, end: 3373 },
                  },
                  loc: { start: 3367, end: 3373 },
                },
                loc: { start: 3367, end: 3374 },
              },
              directives: [],
              loc: { start: 3357, end: 3374 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3377, end: 3383 },
            },
            loc: { start: 3377, end: 3383 },
          },
          directives: [],
          loc: { start: 3343, end: 3383 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 3386, end: 3396 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3397, end: 3399 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3401, end: 3403 },
                  },
                  loc: { start: 3401, end: 3403 },
                },
                loc: { start: 3401, end: 3404 },
              },
              directives: [],
              loc: { start: 3397, end: 3404 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3407, end: 3413 },
            },
            loc: { start: 3407, end: 3413 },
          },
          directives: [],
          loc: { start: 3386, end: 3413 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followUnfollowUser",
            loc: { start: 3416, end: 3434 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3435, end: 3441 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3443, end: 3445 },
                  },
                  loc: { start: 3443, end: 3445 },
                },
                loc: { start: 3443, end: 3446 },
              },
              directives: [],
              loc: { start: 3435, end: 3446 },
            },
          ],
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
          loc: { start: 3416, end: 3455 },
        },
      ],
      loc: { start: 3183, end: 3457 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 3466, end: 3472 } },
      directives: [],
      loc: { start: 3459, end: 3472 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 3479, end: 3483 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3488, end: 3490 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3492, end: 3494 },
              },
              loc: { start: 3492, end: 3494 },
            },
            loc: { start: 3492, end: 3495 },
          },
          directives: [],
          loc: { start: 3488, end: 3495 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 3498, end: 3507 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3509, end: 3515 },
            },
            loc: { start: 3509, end: 3515 },
          },
          directives: [],
          loc: { start: 3498, end: 3515 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 3518, end: 3526 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3528, end: 3534 },
            },
            loc: { start: 3528, end: 3534 },
          },
          directives: [],
          loc: { start: 3518, end: 3534 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 3537, end: 3545 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3547, end: 3553 },
              },
              loc: { start: 3547, end: 3553 },
            },
            loc: { start: 3547, end: 3554 },
          },
          directives: [],
          loc: { start: 3537, end: 3554 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 3557, end: 3562 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3564, end: 3570 },
            },
            loc: { start: 3564, end: 3570 },
          },
          directives: [],
          loc: { start: 3557, end: 3570 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 3573, end: 3578 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3580, end: 3586 },
            },
            loc: { start: 3580, end: 3586 },
          },
          directives: [],
          loc: { start: 3573, end: 3586 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 3589, end: 3601 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3603, end: 3609 },
            },
            loc: { start: 3603, end: 3609 },
          },
          directives: [],
          loc: { start: 3589, end: 3609 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3612, end: 3619 },
          },
          arguments: [],
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
          loc: { start: 3612, end: 3627 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 3630, end: 3640 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3642, end: 3649 },
            },
            loc: { start: 3642, end: 3649 },
          },
          directives: [],
          loc: { start: 3630, end: 3649 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 3652, end: 3655 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3657, end: 3663 },
            },
            loc: { start: 3657, end: 3663 },
          },
          directives: [],
          loc: { start: 3652, end: 3663 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followers",
            loc: { start: 3666, end: 3675 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3678, end: 3680 },
              },
              loc: { start: 3678, end: 3680 },
            },
            loc: { start: 3677, end: 3681 },
          },
          directives: [],
          loc: { start: 3666, end: 3681 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "following",
            loc: { start: 3684, end: 3693 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3696, end: 3698 },
              },
              loc: { start: 3696, end: 3698 },
            },
            loc: { start: 3695, end: 3699 },
          },
          directives: [],
          loc: { start: 3684, end: 3699 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 3702, end: 3711 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3713, end: 3717 },
            },
            loc: { start: 3713, end: 3717 },
          },
          directives: [],
          loc: { start: 3702, end: 3717 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 3720, end: 3729 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3731, end: 3735 },
            },
            loc: { start: 3731, end: 3735 },
          },
          directives: [],
          loc: { start: 3720, end: 3735 },
        },
      ],
      loc: { start: 3474, end: 3737 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UserInput",
        loc: { start: 3745, end: 3754 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 3759, end: 3767 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3769, end: 3775 },
              },
              loc: { start: 3769, end: 3775 },
            },
            loc: { start: 3769, end: 3776 },
          },
          directives: [],
          loc: { start: 3759, end: 3776 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 3779, end: 3787 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3789, end: 3795 },
              },
              loc: { start: 3789, end: 3795 },
            },
            loc: { start: 3789, end: 3796 },
          },
          directives: [],
          loc: { start: 3779, end: 3796 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 3799, end: 3808 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3810, end: 3816 },
            },
            loc: { start: 3810, end: 3816 },
          },
          directives: [],
          loc: { start: 3799, end: 3816 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 3819, end: 3827 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3829, end: 3835 },
            },
            loc: { start: 3829, end: 3835 },
          },
          directives: [],
          loc: { start: 3819, end: 3835 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 3838, end: 3843 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3845, end: 3851 },
            },
            loc: { start: 3845, end: 3851 },
          },
          directives: [],
          loc: { start: 3838, end: 3851 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 3854, end: 3859 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3861, end: 3867 },
            },
            loc: { start: 3861, end: 3867 },
          },
          directives: [],
          loc: { start: 3854, end: 3867 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 3870, end: 3882 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 3884, end: 3890 },
            },
            loc: { start: 3884, end: 3890 },
          },
          directives: [],
          loc: { start: 3870, end: 3890 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3893, end: 3900 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3902, end: 3908 },
            },
            loc: { start: 3902, end: 3908 },
          },
          directives: [],
          loc: { start: 3893, end: 3908 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 3911, end: 3914 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3916, end: 3922 },
            },
            loc: { start: 3916, end: 3922 },
          },
          directives: [],
          loc: { start: 3911, end: 3922 },
        },
      ],
      loc: { start: 3739, end: 3924 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UpdateUserInput",
        loc: { start: 3932, end: 3947 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 3952, end: 3960 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3962, end: 3968 },
            },
            loc: { start: 3962, end: 3968 },
          },
          directives: [],
          loc: { start: 3952, end: 3968 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 3971, end: 3979 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3981, end: 3987 },
            },
            loc: { start: 3981, end: 3987 },
          },
          directives: [],
          loc: { start: 3971, end: 3987 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 3990, end: 3999 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4001, end: 4007 },
            },
            loc: { start: 4001, end: 4007 },
          },
          directives: [],
          loc: { start: 3990, end: 4007 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 4010, end: 4018 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4020, end: 4026 },
            },
            loc: { start: 4020, end: 4026 },
          },
          directives: [],
          loc: { start: 4010, end: 4026 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4029, end: 4034 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4036, end: 4042 },
            },
            loc: { start: 4036, end: 4042 },
          },
          directives: [],
          loc: { start: 4029, end: 4042 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 4045, end: 4050 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4052, end: 4058 },
            },
            loc: { start: 4052, end: 4058 },
          },
          directives: [],
          loc: { start: 4045, end: 4058 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 4061, end: 4073 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 4075, end: 4081 },
            },
            loc: { start: 4075, end: 4081 },
          },
          directives: [],
          loc: { start: 4061, end: 4081 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4084, end: 4091 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4093, end: 4099 },
            },
            loc: { start: 4093, end: 4099 },
          },
          directives: [],
          loc: { start: 4084, end: 4099 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 4102, end: 4105 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4107, end: 4113 },
            },
            loc: { start: 4107, end: 4113 },
          },
          directives: [],
          loc: { start: 4102, end: 4113 },
        },
      ],
      loc: { start: 3926, end: 4115 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wallet", loc: { start: 4121, end: 4127 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 4132, end: 4138 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4140, end: 4142 },
            },
            loc: { start: 4140, end: 4142 },
          },
          directives: [],
          loc: { start: 4132, end: 4142 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4145, end: 4152 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4154, end: 4160 },
            },
            loc: { start: 4154, end: 4160 },
          },
          directives: [],
          loc: { start: 4145, end: 4160 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 4163, end: 4173 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4175, end: 4181 },
            },
            loc: { start: 4175, end: 4181 },
          },
          directives: [],
          loc: { start: 4163, end: 4181 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 4184, end: 4193 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4195, end: 4201 },
            },
            loc: { start: 4195, end: 4201 },
          },
          directives: [],
          loc: { start: 4184, end: 4201 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 4204, end: 4212 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4214, end: 4220 },
            },
            loc: { start: 4214, end: 4220 },
          },
          directives: [],
          loc: { start: 4204, end: 4220 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 4223, end: 4230 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4232, end: 4238 },
            },
            loc: { start: 4232, end: 4238 },
          },
          directives: [],
          loc: { start: 4223, end: 4238 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4241, end: 4250 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 4252, end: 4256 },
            },
            loc: { start: 4252, end: 4256 },
          },
          directives: [],
          loc: { start: 4241, end: 4256 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 4259, end: 4268 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 4270, end: 4274 },
            },
            loc: { start: 4270, end: 4274 },
          },
          directives: [],
          loc: { start: 4259, end: 4274 },
        },
      ],
      loc: { start: 4116, end: 4276 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WalletInput",
        loc: { start: 4284, end: 4295 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4300, end: 4307 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4309, end: 4315 },
            },
            loc: { start: 4309, end: 4315 },
          },
          directives: [],
          loc: { start: 4300, end: 4315 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 4318, end: 4328 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4330, end: 4336 },
            },
            loc: { start: 4330, end: 4336 },
          },
          directives: [],
          loc: { start: 4318, end: 4336 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 4339, end: 4348 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4350, end: 4356 },
            },
            loc: { start: 4350, end: 4356 },
          },
          directives: [],
          loc: { start: 4339, end: 4356 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 4359, end: 4367 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4369, end: 4375 },
            },
            loc: { start: 4369, end: 4375 },
          },
          directives: [],
          loc: { start: 4359, end: 4375 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 4378, end: 4385 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4387, end: 4393 },
            },
            loc: { start: 4387, end: 4393 },
          },
          directives: [],
          loc: { start: 4378, end: 4393 },
        },
      ],
      loc: { start: 4278, end: 4395 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ChartData",
        loc: { start: 4402, end: 4411 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "labels",
            loc: { start: 4416, end: 4422 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4425, end: 4431 },
              },
              loc: { start: 4425, end: 4431 },
            },
            loc: { start: 4424, end: 4432 },
          },
          directives: [],
          loc: { start: 4416, end: 4432 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "datasets",
            loc: { start: 4435, end: 4443 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Dataset",
                loc: { start: 4446, end: 4453 },
              },
              loc: { start: 4446, end: 4453 },
            },
            loc: { start: 4445, end: 4454 },
          },
          directives: [],
          loc: { start: 4435, end: 4454 },
        },
      ],
      loc: { start: 4397, end: 4456 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Dataset", loc: { start: 4463, end: 4470 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "data",
            loc: { start: 4475, end: 4479 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 4482, end: 4487 },
              },
              loc: { start: 4482, end: 4487 },
            },
            loc: { start: 4481, end: 4488 },
          },
          directives: [],
          loc: { start: 4475, end: 4488 },
        },
      ],
      loc: { start: 4458, end: 4490 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CoinData",
        loc: { start: 4497, end: 4505 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4510, end: 4514 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4516, end: 4522 },
            },
            loc: { start: 4516, end: 4522 },
          },
          directives: [],
          loc: { start: 4510, end: 4522 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "symbol",
            loc: { start: 4525, end: 4531 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4533, end: 4539 },
            },
            loc: { start: 4533, end: 4539 },
          },
          directives: [],
          loc: { start: 4525, end: 4539 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 4542, end: 4547 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4549, end: 4555 },
            },
            loc: { start: 4549, end: 4555 },
          },
          directives: [],
          loc: { start: 4542, end: 4555 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 4558, end: 4563 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 4565, end: 4570 },
            },
            loc: { start: 4565, end: 4570 },
          },
          directives: [],
          loc: { start: 4558, end: 4570 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 4573, end: 4579 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 4581, end: 4586 },
            },
            loc: { start: 4581, end: 4586 },
          },
          directives: [],
          loc: { start: 4573, end: 4586 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "changePercentage",
            loc: { start: 4589, end: 4605 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 4607, end: 4612 },
            },
            loc: { start: 4607, end: 4612 },
          },
          directives: [],
          loc: { start: 4589, end: 4612 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "chartData",
            loc: { start: 4615, end: 4624 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ChartData",
              loc: { start: 4626, end: 4635 },
            },
            loc: { start: 4626, end: 4635 },
          },
          directives: [],
          loc: { start: 4615, end: 4635 },
        },
      ],
      loc: { start: 4492, end: 4637 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 4644, end: 4649 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getWallet",
            loc: { start: 4654, end: 4663 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Wallet",
              loc: { start: 4665, end: 4671 },
            },
            loc: { start: 4665, end: 4671 },
          },
          directives: [],
          loc: { start: 4654, end: 4671 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCoinData",
            loc: { start: 4674, end: 4685 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "currency",
                loc: { start: 4686, end: 4694 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4696, end: 4702 },
                  },
                  loc: { start: 4696, end: 4702 },
                },
                loc: { start: 4696, end: 4703 },
              },
              directives: [],
              loc: { start: 4686, end: 4703 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "days",
                loc: { start: 4705, end: 4709 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 4711, end: 4714 },
                  },
                  loc: { start: 4711, end: 4714 },
                },
                loc: { start: 4711, end: 4715 },
              },
              directives: [],
              loc: { start: 4705, end: 4715 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CoinData",
                loc: { start: 4718, end: 4726 },
              },
              loc: { start: 4718, end: 4726 },
            },
            loc: { start: 4718, end: 4727 },
          },
          directives: [],
          loc: { start: 4674, end: 4727 },
        },
      ],
      loc: { start: 4639, end: 4729 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 4736, end: 4744 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createWallet",
            loc: { start: 4749, end: 4761 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 4762, end: 4768 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 4770, end: 4781 },
                  },
                  loc: { start: 4770, end: 4781 },
                },
                loc: { start: 4770, end: 4782 },
              },
              directives: [],
              loc: { start: 4762, end: 4782 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4785, end: 4791 },
            },
            loc: { start: 4785, end: 4791 },
          },
          directives: [],
          loc: { start: 4749, end: 4791 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateWallet",
            loc: { start: 4794, end: 4806 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4807, end: 4809 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4811, end: 4813 },
                  },
                  loc: { start: 4811, end: 4813 },
                },
                loc: { start: 4811, end: 4814 },
              },
              directives: [],
              loc: { start: 4807, end: 4814 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 4816, end: 4822 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 4824, end: 4835 },
                  },
                  loc: { start: 4824, end: 4835 },
                },
                loc: { start: 4824, end: 4836 },
              },
              directives: [],
              loc: { start: 4816, end: 4836 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4839, end: 4845 },
            },
            loc: { start: 4839, end: 4845 },
          },
          directives: [],
          loc: { start: 4794, end: 4845 },
        },
      ],
      loc: { start: 4731, end: 4847 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 4856, end: 4862 } },
      directives: [],
      loc: { start: 4849, end: 4862 },
    },
  ],
  loc: { start: 0, end: 4863 },
} as unknown as DocumentNode;
