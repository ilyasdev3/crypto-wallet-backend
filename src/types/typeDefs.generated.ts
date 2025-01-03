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
            value: "getContracts",
            loc: { start: 1416, end: 1428 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Contract",
                loc: { start: 1431, end: 1439 },
              },
              loc: { start: 1431, end: 1439 },
            },
            loc: { start: 1430, end: 1440 },
          },
          directives: [],
          loc: { start: 1416, end: 1440 },
        },
      ],
      loc: { start: 1401, end: 1442 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Contract",
        loc: { start: 1449, end: 1457 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1462, end: 1466 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1468, end: 1474 },
            },
            loc: { start: 1468, end: 1474 },
          },
          directives: [],
          loc: { start: 1462, end: 1474 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "contractAddress",
            loc: { start: 1477, end: 1492 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1494, end: 1500 },
            },
            loc: { start: 1494, end: 1500 },
          },
          directives: [],
          loc: { start: 1477, end: 1500 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "provider",
            loc: { start: 1503, end: 1511 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1513, end: 1519 },
            },
            loc: { start: 1513, end: 1519 },
          },
          directives: [],
          loc: { start: 1503, end: 1519 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "abi", loc: { start: 1522, end: 1525 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "JSON",
              loc: { start: 1527, end: 1531 },
            },
            loc: { start: 1527, end: 1531 },
          },
          directives: [],
          loc: { start: 1522, end: 1531 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "network",
            loc: { start: 1534, end: 1541 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1543, end: 1549 },
            },
            loc: { start: 1543, end: 1549 },
          },
          directives: [],
          loc: { start: 1534, end: 1549 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1552, end: 1558 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1560, end: 1562 },
            },
            loc: { start: 1560, end: 1562 },
          },
          directives: [],
          loc: { start: 1552, end: 1562 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1565, end: 1574 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1576, end: 1580 },
            },
            loc: { start: 1576, end: 1580 },
          },
          directives: [],
          loc: { start: 1565, end: 1580 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1583, end: 1592 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1594, end: 1598 },
            },
            loc: { start: 1594, end: 1598 },
          },
          directives: [],
          loc: { start: 1583, end: 1598 },
        },
      ],
      loc: { start: 1444, end: 1600 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1607, end: 1615 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createContract",
            loc: { start: 1620, end: 1634 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "contract",
                loc: { start: 1635, end: 1643 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ContractInput",
                    loc: { start: 1645, end: 1658 },
                  },
                  loc: { start: 1645, end: 1658 },
                },
                loc: { start: 1645, end: 1659 },
              },
              directives: [],
              loc: { start: 1635, end: 1659 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateContractResponse",
              loc: { start: 1662, end: 1684 },
            },
            loc: { start: 1662, end: 1684 },
          },
          directives: [],
          loc: { start: 1620, end: 1684 },
        },
      ],
      loc: { start: 1602, end: 1686 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ContractInput",
        loc: { start: 1694, end: 1707 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1712, end: 1716 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1718, end: 1724 },
              },
              loc: { start: 1718, end: 1724 },
            },
            loc: { start: 1718, end: 1725 },
          },
          directives: [],
          loc: { start: 1712, end: 1725 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "contractAddress",
            loc: { start: 1728, end: 1743 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1745, end: 1751 },
              },
              loc: { start: 1745, end: 1751 },
            },
            loc: { start: 1745, end: 1752 },
          },
          directives: [],
          loc: { start: 1728, end: 1752 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "provider",
            loc: { start: 1755, end: 1763 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1765, end: 1771 },
            },
            loc: { start: 1765, end: 1771 },
          },
          directives: [],
          loc: { start: 1755, end: 1771 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "abi", loc: { start: 1774, end: 1777 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "JSON",
              loc: { start: 1779, end: 1783 },
            },
            loc: { start: 1779, end: 1783 },
          },
          directives: [],
          loc: { start: 1774, end: 1783 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "network",
            loc: { start: 1786, end: 1793 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1795, end: 1801 },
            },
            loc: { start: 1795, end: 1801 },
          },
          directives: [],
          loc: { start: 1786, end: 1801 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1804, end: 1810 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1812, end: 1814 },
            },
            loc: { start: 1812, end: 1814 },
          },
          directives: [],
          loc: { start: 1804, end: 1814 },
        },
      ],
      loc: { start: 1688, end: 1816 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateContractResponse",
        loc: { start: 1823, end: 1845 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 1850, end: 1857 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1859, end: 1865 },
            },
            loc: { start: 1859, end: 1865 },
          },
          directives: [],
          loc: { start: 1850, end: 1865 },
        },
      ],
      loc: { start: 1818, end: 1867 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 1876, end: 1882 } },
      directives: [],
      loc: { start: 1869, end: 1882 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1888, end: 1893 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserPosts",
            loc: { start: 1898, end: 1910 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1911, end: 1913 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1915, end: 1917 },
                  },
                  loc: { start: 1915, end: 1917 },
                },
                loc: { start: 1915, end: 1918 },
              },
              directives: [],
              loc: { start: 1911, end: 1918 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1922, end: 1926 },
              },
              loc: { start: 1922, end: 1926 },
            },
            loc: { start: 1921, end: 1927 },
          },
          directives: [],
          loc: { start: 1898, end: 1927 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCommunityPosts",
            loc: { start: 1930, end: 1947 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1948, end: 1950 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1952, end: 1954 },
                  },
                  loc: { start: 1952, end: 1954 },
                },
                loc: { start: 1952, end: 1955 },
              },
              directives: [],
              loc: { start: 1948, end: 1955 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1959, end: 1963 },
              },
              loc: { start: 1959, end: 1963 },
            },
            loc: { start: 1958, end: 1964 },
          },
          directives: [],
          loc: { start: 1930, end: 1964 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getPost",
            loc: { start: 1967, end: 1974 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1975, end: 1977 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1979, end: 1981 },
                  },
                  loc: { start: 1979, end: 1981 },
                },
                loc: { start: 1979, end: 1982 },
              },
              directives: [],
              loc: { start: 1975, end: 1982 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 1985, end: 1989 },
            },
            loc: { start: 1985, end: 1989 },
          },
          directives: [],
          loc: { start: 1967, end: 1989 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getAllPosts",
            loc: { start: 1992, end: 2003 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "filters",
                loc: { start: 2004, end: 2011 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "PostFilter",
                  loc: { start: 2013, end: 2023 },
                },
                loc: { start: 2013, end: 2023 },
              },
              directives: [],
              loc: { start: 2004, end: 2023 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 2027, end: 2031 },
              },
              loc: { start: 2027, end: 2031 },
            },
            loc: { start: 2026, end: 2032 },
          },
          directives: [],
          loc: { start: 1992, end: 2032 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getFollowingPosts",
            loc: { start: 2035, end: 2052 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 2055, end: 2059 },
              },
              loc: { start: 2055, end: 2059 },
            },
            loc: { start: 2054, end: 2060 },
          },
          directives: [],
          loc: { start: 2035, end: 2060 },
        },
      ],
      loc: { start: 1883, end: 2062 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostFilter",
        loc: { start: 2070, end: 2080 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2085, end: 2090 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2092, end: 2098 },
            },
            loc: { start: 2092, end: 2098 },
          },
          directives: [],
          loc: { start: 2085, end: 2098 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2101, end: 2108 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2110, end: 2116 },
            },
            loc: { start: 2110, end: 2116 },
          },
          directives: [],
          loc: { start: 2101, end: 2116 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "length",
            loc: { start: 2119, end: 2125 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 2127, end: 2130 },
            },
            loc: { start: 2127, end: 2130 },
          },
          directives: [],
          loc: { start: 2119, end: 2130 },
        },
      ],
      loc: { start: 2064, end: 2132 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostResponse",
        loc: { start: 2139, end: 2157 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 2162, end: 2169 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2171, end: 2177 },
            },
            loc: { start: 2171, end: 2177 },
          },
          directives: [],
          loc: { start: 2162, end: 2177 },
        },
      ],
      loc: { start: 2134, end: 2179 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostStats",
        loc: { start: 2186, end: 2195 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalLikes",
            loc: { start: 2200, end: 2210 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 2212, end: 2215 },
            },
            loc: { start: 2212, end: 2215 },
          },
          directives: [],
          loc: { start: 2200, end: 2215 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalComments",
            loc: { start: 2218, end: 2231 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 2233, end: 2236 },
            },
            loc: { start: 2233, end: 2236 },
          },
          directives: [],
          loc: { start: 2218, end: 2236 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalShares",
            loc: { start: 2239, end: 2250 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 2252, end: 2255 },
            },
            loc: { start: 2252, end: 2255 },
          },
          directives: [],
          loc: { start: 2239, end: 2255 },
        },
      ],
      loc: { start: 2181, end: 2257 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Post", loc: { start: 2264, end: 2268 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2273, end: 2278 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2280, end: 2286 },
            },
            loc: { start: 2280, end: 2286 },
          },
          directives: [],
          loc: { start: 2273, end: 2286 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2289, end: 2296 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2298, end: 2304 },
            },
            loc: { start: 2298, end: 2304 },
          },
          directives: [],
          loc: { start: 2289, end: 2304 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 2307, end: 2317 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2319, end: 2326 },
            },
            loc: { start: 2319, end: 2326 },
          },
          directives: [],
          loc: { start: 2307, end: 2326 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "communityId",
            loc: { start: 2329, end: 2340 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2342, end: 2344 },
            },
            loc: { start: 2342, end: 2344 },
          },
          directives: [],
          loc: { start: 2329, end: 2344 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 2347, end: 2352 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2354, end: 2360 },
            },
            loc: { start: 2354, end: 2360 },
          },
          directives: [],
          loc: { start: 2347, end: 2360 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2363, end: 2369 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2371, end: 2375 },
            },
            loc: { start: 2371, end: 2375 },
          },
          directives: [],
          loc: { start: 2363, end: 2375 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "community",
            loc: { start: 2378, end: 2387 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Community",
              loc: { start: 2389, end: 2398 },
            },
            loc: { start: 2389, end: 2398 },
          },
          directives: [],
          loc: { start: 2378, end: 2398 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "likes",
            loc: { start: 2401, end: 2406 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2409, end: 2411 },
              },
              loc: { start: 2409, end: 2411 },
            },
            loc: { start: 2408, end: 2412 },
          },
          directives: [],
          loc: { start: 2401, end: 2412 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stats",
            loc: { start: 2415, end: 2420 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PostStats",
              loc: { start: 2422, end: 2431 },
            },
            loc: { start: 2422, end: 2431 },
          },
          directives: [],
          loc: { start: 2415, end: 2431 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2434, end: 2443 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2445, end: 2449 },
            },
            loc: { start: 2445, end: 2449 },
          },
          directives: [],
          loc: { start: 2434, end: 2449 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2452, end: 2461 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2463, end: 2467 },
            },
            loc: { start: 2463, end: 2467 },
          },
          directives: [],
          loc: { start: 2452, end: 2467 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2470, end: 2472 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2474, end: 2476 },
            },
            loc: { start: 2474, end: 2476 },
          },
          directives: [],
          loc: { start: 2470, end: 2476 },
        },
      ],
      loc: { start: 2259, end: 2478 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 2485, end: 2489 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2494, end: 2496 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2498, end: 2500 },
            },
            loc: { start: 2498, end: 2500 },
          },
          directives: [],
          loc: { start: 2494, end: 2500 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 2503, end: 2512 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2514, end: 2520 },
            },
            loc: { start: 2514, end: 2520 },
          },
          directives: [],
          loc: { start: 2503, end: 2520 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 2523, end: 2531 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2533, end: 2539 },
            },
            loc: { start: 2533, end: 2539 },
          },
          directives: [],
          loc: { start: 2523, end: 2539 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 2542, end: 2550 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2552, end: 2558 },
            },
            loc: { start: 2552, end: 2558 },
          },
          directives: [],
          loc: { start: 2542, end: 2558 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 2561, end: 2573 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2575, end: 2581 },
            },
            loc: { start: 2575, end: 2581 },
          },
          directives: [],
          loc: { start: 2561, end: 2581 },
        },
      ],
      loc: { start: 2480, end: 2583 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 2590, end: 2597 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2602, end: 2604 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2606, end: 2608 },
            },
            loc: { start: 2606, end: 2608 },
          },
          directives: [],
          loc: { start: 2602, end: 2608 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2611, end: 2617 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2619, end: 2621 },
            },
            loc: { start: 2619, end: 2621 },
          },
          directives: [],
          loc: { start: 2611, end: 2621 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2624, end: 2628 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2630, end: 2634 },
            },
            loc: { start: 2630, end: 2634 },
          },
          directives: [],
          loc: { start: 2624, end: 2634 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2637, end: 2643 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2645, end: 2647 },
            },
            loc: { start: 2645, end: 2647 },
          },
          directives: [],
          loc: { start: 2637, end: 2647 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2650, end: 2657 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2659, end: 2665 },
            },
            loc: { start: 2659, end: 2665 },
          },
          directives: [],
          loc: { start: 2650, end: 2665 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2668, end: 2677 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2679, end: 2683 },
            },
            loc: { start: 2679, end: 2683 },
          },
          directives: [],
          loc: { start: 2668, end: 2683 },
        },
      ],
      loc: { start: 2585, end: 2685 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Share", loc: { start: 2692, end: 2697 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2702, end: 2704 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2706, end: 2708 },
            },
            loc: { start: 2706, end: 2708 },
          },
          directives: [],
          loc: { start: 2702, end: 2708 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2711, end: 2717 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2719, end: 2721 },
            },
            loc: { start: 2719, end: 2721 },
          },
          directives: [],
          loc: { start: 2711, end: 2721 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2724, end: 2730 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2732, end: 2734 },
            },
            loc: { start: 2732, end: 2734 },
          },
          directives: [],
          loc: { start: 2724, end: 2734 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2737, end: 2746 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2748, end: 2752 },
            },
            loc: { start: 2748, end: 2752 },
          },
          directives: [],
          loc: { start: 2737, end: 2752 },
        },
      ],
      loc: { start: 2687, end: 2754 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostInput",
        loc: { start: 2762, end: 2771 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2776, end: 2781 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2783, end: 2789 },
            },
            loc: { start: 2783, end: 2789 },
          },
          directives: [],
          loc: { start: 2776, end: 2789 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2792, end: 2799 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2801, end: 2807 },
            },
            loc: { start: 2801, end: 2807 },
          },
          directives: [],
          loc: { start: 2792, end: 2807 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 2810, end: 2820 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2822, end: 2829 },
            },
            loc: { start: 2822, end: 2829 },
          },
          directives: [],
          loc: { start: 2810, end: 2829 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "communityId",
            loc: { start: 2832, end: 2843 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2845, end: 2847 },
            },
            loc: { start: 2845, end: 2847 },
          },
          directives: [],
          loc: { start: 2832, end: 2847 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 2850, end: 2855 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 2857, end: 2863 },
            },
            loc: { start: 2857, end: 2863 },
          },
          directives: [],
          loc: { start: 2850, end: 2863 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2866, end: 2872 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2874, end: 2876 },
            },
            loc: { start: 2874, end: 2876 },
          },
          directives: [],
          loc: { start: 2866, end: 2876 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2879, end: 2888 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2890, end: 2894 },
            },
            loc: { start: 2890, end: 2894 },
          },
          directives: [],
          loc: { start: 2879, end: 2894 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2897, end: 2906 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2908, end: 2912 },
            },
            loc: { start: 2908, end: 2912 },
          },
          directives: [],
          loc: { start: 2897, end: 2912 },
        },
      ],
      loc: { start: 2756, end: 2914 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2921, end: 2929 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createPost",
            loc: { start: 2934, end: 2944 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "post",
                loc: { start: 2945, end: 2949 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PostInput",
                    loc: { start: 2951, end: 2960 },
                  },
                  loc: { start: 2951, end: 2960 },
                },
                loc: { start: 2951, end: 2961 },
              },
              directives: [],
              loc: { start: 2945, end: 2961 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreatePostResponse",
              loc: { start: 2964, end: 2982 },
            },
            loc: { start: 2964, end: 2982 },
          },
          directives: [],
          loc: { start: 2934, end: 2982 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "doLike",
            loc: { start: 2985, end: 2991 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "postId",
                loc: { start: 2992, end: 2998 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3000, end: 3002 },
                  },
                  loc: { start: 3000, end: 3002 },
                },
                loc: { start: 3000, end: 3003 },
              },
              directives: [],
              loc: { start: 2992, end: 3003 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3006, end: 3012 },
            },
            loc: { start: 3006, end: 3012 },
          },
          directives: [],
          loc: { start: 2985, end: 3012 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatePost",
            loc: { start: 3015, end: 3025 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3026, end: 3028 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3030, end: 3032 },
                  },
                  loc: { start: 3030, end: 3032 },
                },
                loc: { start: 3030, end: 3033 },
              },
              directives: [],
              loc: { start: 3026, end: 3033 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "post",
                loc: { start: 3035, end: 3039 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PostInput",
                    loc: { start: 3041, end: 3050 },
                  },
                  loc: { start: 3041, end: 3050 },
                },
                loc: { start: 3041, end: 3051 },
              },
              directives: [],
              loc: { start: 3035, end: 3051 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3054, end: 3060 },
            },
            loc: { start: 3054, end: 3060 },
          },
          directives: [],
          loc: { start: 3015, end: 3060 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deletePost",
            loc: { start: 3063, end: 3073 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3074, end: 3076 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3078, end: 3080 },
                  },
                  loc: { start: 3078, end: 3080 },
                },
                loc: { start: 3078, end: 3081 },
              },
              directives: [],
              loc: { start: 3074, end: 3081 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3084, end: 3090 },
            },
            loc: { start: 3084, end: 3090 },
          },
          directives: [],
          loc: { start: 3063, end: 3090 },
        },
      ],
      loc: { start: 2916, end: 3092 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 3098, end: 3103 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getShares",
            loc: { start: 3108, end: 3117 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3118, end: 3120 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3122, end: 3124 },
                  },
                  loc: { start: 3122, end: 3124 },
                },
                loc: { start: 3122, end: 3125 },
              },
              directives: [],
              loc: { start: 3118, end: 3125 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Share",
                loc: { start: 3129, end: 3134 },
              },
              loc: { start: 3129, end: 3134 },
            },
            loc: { start: 3128, end: 3135 },
          },
          directives: [],
          loc: { start: 3108, end: 3135 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserShares",
            loc: { start: 3138, end: 3151 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3152, end: 3154 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3156, end: 3158 },
                  },
                  loc: { start: 3156, end: 3158 },
                },
                loc: { start: 3156, end: 3159 },
              },
              directives: [],
              loc: { start: 3152, end: 3159 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Share",
                loc: { start: 3163, end: 3168 },
              },
              loc: { start: 3163, end: 3168 },
            },
            loc: { start: 3162, end: 3169 },
          },
          directives: [],
          loc: { start: 3138, end: 3169 },
        },
      ],
      loc: { start: 3093, end: 3171 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Share", loc: { start: 3178, end: 3183 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3188, end: 3194 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3196, end: 3198 },
            },
            loc: { start: 3196, end: 3198 },
          },
          directives: [],
          loc: { start: 3188, end: 3198 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 3201, end: 3207 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3209, end: 3211 },
            },
            loc: { start: 3209, end: 3211 },
          },
          directives: [],
          loc: { start: 3201, end: 3211 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 3214, end: 3223 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3225, end: 3229 },
            },
            loc: { start: 3225, end: 3229 },
          },
          directives: [],
          loc: { start: 3214, end: 3229 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 3232, end: 3241 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3243, end: 3247 },
            },
            loc: { start: 3243, end: 3247 },
          },
          directives: [],
          loc: { start: 3232, end: 3247 },
        },
      ],
      loc: { start: 3173, end: 3249 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3256, end: 3264 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createShare",
            loc: { start: 3269, end: 3280 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "share",
                loc: { start: 3281, end: 3286 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ShareInput",
                    loc: { start: 3288, end: 3298 },
                  },
                  loc: { start: 3288, end: 3298 },
                },
                loc: { start: 3288, end: 3299 },
              },
              directives: [],
              loc: { start: 3281, end: 3299 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateShareResponse",
              loc: { start: 3302, end: 3321 },
            },
            loc: { start: 3302, end: 3321 },
          },
          directives: [],
          loc: { start: 3269, end: 3321 },
        },
      ],
      loc: { start: 3251, end: 3323 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShareInput",
        loc: { start: 3331, end: 3341 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3346, end: 3352 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3354, end: 3356 },
            },
            loc: { start: 3354, end: 3356 },
          },
          directives: [],
          loc: { start: 3346, end: 3356 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 3359, end: 3365 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3367, end: 3369 },
            },
            loc: { start: 3367, end: 3369 },
          },
          directives: [],
          loc: { start: 3359, end: 3369 },
        },
      ],
      loc: { start: 3325, end: 3371 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateShareResponse",
        loc: { start: 3378, end: 3397 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 3402, end: 3409 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3411, end: 3417 },
            },
            loc: { start: 3411, end: 3417 },
          },
          directives: [],
          loc: { start: 3402, end: 3417 },
        },
      ],
      loc: { start: 3373, end: 3419 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Transaction",
        loc: { start: 3425, end: 3436 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3441, end: 3443 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3445, end: 3447 },
            },
            loc: { start: 3445, end: 3447 },
          },
          directives: [],
          loc: { start: 3441, end: 3447 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 3450, end: 3456 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3458, end: 3461 },
            },
            loc: { start: 3458, end: 3461 },
          },
          directives: [],
          loc: { start: 3450, end: 3461 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3464, end: 3471 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3473, end: 3479 },
            },
            loc: { start: 3473, end: 3479 },
          },
          directives: [],
          loc: { start: 3464, end: 3479 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 3482, end: 3488 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3490, end: 3496 },
            },
            loc: { start: 3490, end: 3496 },
          },
          directives: [],
          loc: { start: 3482, end: 3496 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "senderWalletId",
            loc: { start: 3499, end: 3513 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3515, end: 3517 },
            },
            loc: { start: 3515, end: 3517 },
          },
          directives: [],
          loc: { start: 3499, end: 3517 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "receiverWalletId",
            loc: { start: 3520, end: 3536 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3538, end: 3540 },
            },
            loc: { start: 3538, end: 3540 },
          },
          directives: [],
          loc: { start: 3520, end: 3540 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "contractId",
            loc: { start: 3543, end: 3553 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3555, end: 3557 },
            },
            loc: { start: 3555, end: 3557 },
          },
          directives: [],
          loc: { start: 3543, end: 3557 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "transactionHash",
            loc: { start: 3560, end: 3575 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3577, end: 3583 },
            },
            loc: { start: 3577, end: 3583 },
          },
          directives: [],
          loc: { start: 3560, end: 3583 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 3586, end: 3590 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3592, end: 3598 },
            },
            loc: { start: 3592, end: 3598 },
          },
          directives: [],
          loc: { start: 3586, end: 3598 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 3601, end: 3610 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3612, end: 3618 },
            },
            loc: { start: 3612, end: 3618 },
          },
          directives: [],
          loc: { start: 3601, end: 3618 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 3621, end: 3630 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3632, end: 3638 },
            },
            loc: { start: 3632, end: 3638 },
          },
          directives: [],
          loc: { start: 3621, end: 3638 },
        },
      ],
      loc: { start: 3420, end: 3640 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UserTransactionInput",
        loc: { start: 3648, end: 3668 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 3673, end: 3677 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3679, end: 3685 },
            },
            loc: { start: 3679, end: 3685 },
          },
          directives: [],
          loc: { start: 3673, end: 3685 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "filter",
            loc: { start: 3688, end: 3694 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3696, end: 3702 },
            },
            loc: { start: 3696, end: 3702 },
          },
          directives: [],
          loc: { start: 3688, end: 3702 },
        },
      ],
      loc: { start: 3642, end: 3704 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 3711, end: 3716 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getTransactions",
            loc: { start: 3721, end: 3736 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Transaction",
                loc: { start: 3739, end: 3750 },
              },
              loc: { start: 3739, end: 3750 },
            },
            loc: { start: 3738, end: 3751 },
          },
          directives: [],
          loc: { start: 3721, end: 3751 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserTransactions",
            loc: { start: 3754, end: 3773 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 3774, end: 3779 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "UserTransactionInput",
                  loc: { start: 3781, end: 3801 },
                },
                loc: { start: 3781, end: 3801 },
              },
              directives: [],
              loc: { start: 3774, end: 3801 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Transaction",
                loc: { start: 3805, end: 3816 },
              },
              loc: { start: 3805, end: 3816 },
            },
            loc: { start: 3804, end: 3817 },
          },
          directives: [],
          loc: { start: 3754, end: 3817 },
        },
      ],
      loc: { start: 3706, end: 3819 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3826, end: 3834 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createTransaction",
            loc: { start: 3839, end: 3856 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "transaction",
                loc: { start: 3857, end: 3868 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "TransactionInput",
                    loc: { start: 3870, end: 3886 },
                  },
                  loc: { start: 3870, end: 3886 },
                },
                loc: { start: 3870, end: 3887 },
              },
              directives: [],
              loc: { start: 3857, end: 3887 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Transaction",
              loc: { start: 3890, end: 3901 },
            },
            loc: { start: 3890, end: 3901 },
          },
          directives: [],
          loc: { start: 3839, end: 3901 },
        },
      ],
      loc: { start: 3821, end: 3903 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransactionInput",
        loc: { start: 3911, end: 3927 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 3932, end: 3938 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3940, end: 3943 },
            },
            loc: { start: 3940, end: 3943 },
          },
          directives: [],
          loc: { start: 3932, end: 3943 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3946, end: 3953 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3955, end: 3961 },
            },
            loc: { start: 3955, end: 3961 },
          },
          directives: [],
          loc: { start: 3946, end: 3961 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 3964, end: 3970 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3972, end: 3978 },
            },
            loc: { start: 3972, end: 3978 },
          },
          directives: [],
          loc: { start: 3964, end: 3978 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "senderWalletId",
            loc: { start: 3981, end: 3995 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3997, end: 3999 },
            },
            loc: { start: 3997, end: 3999 },
          },
          directives: [],
          loc: { start: 3981, end: 3999 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "receiverWalletId",
            loc: { start: 4002, end: 4018 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4020, end: 4022 },
            },
            loc: { start: 4020, end: 4022 },
          },
          directives: [],
          loc: { start: 4002, end: 4022 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "contractId",
            loc: { start: 4025, end: 4035 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4037, end: 4039 },
            },
            loc: { start: 4037, end: 4039 },
          },
          directives: [],
          loc: { start: 4025, end: 4039 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "transactionHash",
            loc: { start: 4042, end: 4057 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4059, end: 4065 },
            },
            loc: { start: 4059, end: 4065 },
          },
          directives: [],
          loc: { start: 4042, end: 4065 },
        },
      ],
      loc: { start: 3905, end: 4067 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 4073, end: 4078 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUser",
            loc: { start: 4083, end: 4090 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4091, end: 4093 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4095, end: 4097 },
                  },
                  loc: { start: 4095, end: 4097 },
                },
                loc: { start: 4095, end: 4098 },
              },
              directives: [],
              loc: { start: 4091, end: 4098 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4101, end: 4105 },
            },
            loc: { start: 4101, end: 4105 },
          },
          directives: [],
          loc: { start: 4083, end: 4105 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 4108, end: 4110 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4112, end: 4116 },
            },
            loc: { start: 4112, end: 4116 },
          },
          directives: [],
          loc: { start: 4108, end: 4116 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserFollowing",
            loc: { start: 4119, end: 4135 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4136, end: 4138 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4140, end: 4142 },
                  },
                  loc: { start: 4140, end: 4142 },
                },
                loc: { start: 4140, end: 4143 },
              },
              directives: [],
              loc: { start: 4136, end: 4143 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4147, end: 4151 },
              },
              loc: { start: 4147, end: 4151 },
            },
            loc: { start: 4146, end: 4152 },
          },
          directives: [],
          loc: { start: 4119, end: 4152 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserFollowers",
            loc: { start: 4155, end: 4171 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4172, end: 4174 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4176, end: 4178 },
                  },
                  loc: { start: 4176, end: 4178 },
                },
                loc: { start: 4176, end: 4179 },
              },
              directives: [],
              loc: { start: 4172, end: 4179 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4183, end: 4187 },
              },
              loc: { start: 4183, end: 4187 },
            },
            loc: { start: 4182, end: 4188 },
          },
          directives: [],
          loc: { start: 4155, end: 4188 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserWithName",
            loc: { start: 4191, end: 4206 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 4207, end: 4215 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4217, end: 4223 },
                  },
                  loc: { start: 4217, end: 4223 },
                },
                loc: { start: 4217, end: 4224 },
              },
              directives: [],
              loc: { start: 4207, end: 4224 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "getUserWithNameResponse",
              loc: { start: 4227, end: 4250 },
            },
            loc: { start: 4227, end: 4250 },
          },
          directives: [],
          loc: { start: 4191, end: 4250 },
        },
      ],
      loc: { start: 4068, end: 4252 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "getUserWithNameResponse",
        loc: { start: 4259, end: 4282 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4287, end: 4291 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4293, end: 4297 },
            },
            loc: { start: 4293, end: 4297 },
          },
          directives: [],
          loc: { start: 4287, end: 4297 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 4300, end: 4307 },
          },
          arguments: [],
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
      ],
      loc: { start: 4254, end: 4317 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateUserResponse",
        loc: { start: 4324, end: 4342 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 4347, end: 4354 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4356, end: 4362 },
            },
            loc: { start: 4356, end: 4362 },
          },
          directives: [],
          loc: { start: 4347, end: 4362 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4365, end: 4370 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4372, end: 4378 },
            },
            loc: { start: 4372, end: 4378 },
          },
          directives: [],
          loc: { start: 4365, end: 4378 },
        },
      ],
      loc: { start: 4319, end: 4380 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4387, end: 4400 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 4405, end: 4412 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4414, end: 4420 },
            },
            loc: { start: 4414, end: 4420 },
          },
          directives: [],
          loc: { start: 4405, end: 4420 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4423, end: 4428 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4430, end: 4436 },
            },
            loc: { start: 4430, end: 4436 },
          },
          directives: [],
          loc: { start: 4423, end: 4436 },
        },
      ],
      loc: { start: 4382, end: 4438 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 4445, end: 4453 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 4458, end: 4468 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4469, end: 4473 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 4475, end: 4484 },
                  },
                  loc: { start: 4475, end: 4484 },
                },
                loc: { start: 4475, end: 4485 },
              },
              directives: [],
              loc: { start: 4469, end: 4485 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateUserResponse",
              loc: { start: 4488, end: 4506 },
            },
            loc: { start: 4488, end: 4506 },
          },
          directives: [],
          loc: { start: 4458, end: 4506 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginUser",
            loc: { start: 4509, end: 4518 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4519, end: 4523 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 4525, end: 4534 },
                  },
                  loc: { start: 4525, end: 4534 },
                },
                loc: { start: 4525, end: 4535 },
              },
              directives: [],
              loc: { start: 4519, end: 4535 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "LoginResponse",
              loc: { start: 4538, end: 4551 },
            },
            loc: { start: 4538, end: 4551 },
          },
          directives: [],
          loc: { start: 4509, end: 4551 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 4554, end: 4564 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4565, end: 4569 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UpdateUserInput",
                    loc: { start: 4571, end: 4586 },
                  },
                  loc: { start: 4571, end: 4586 },
                },
                loc: { start: 4571, end: 4587 },
              },
              directives: [],
              loc: { start: 4565, end: 4587 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4590, end: 4596 },
              },
              loc: { start: 4590, end: 4596 },
            },
            loc: { start: 4590, end: 4597 },
          },
          directives: [],
          loc: { start: 4554, end: 4597 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkUsername",
            loc: { start: 4600, end: 4613 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 4614, end: 4622 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4624, end: 4630 },
                  },
                  loc: { start: 4624, end: 4630 },
                },
                loc: { start: 4624, end: 4631 },
              },
              directives: [],
              loc: { start: 4614, end: 4631 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4634, end: 4640 },
            },
            loc: { start: 4634, end: 4640 },
          },
          directives: [],
          loc: { start: 4600, end: 4640 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 4643, end: 4653 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4654, end: 4656 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4658, end: 4660 },
                  },
                  loc: { start: 4658, end: 4660 },
                },
                loc: { start: 4658, end: 4661 },
              },
              directives: [],
              loc: { start: 4654, end: 4661 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4664, end: 4670 },
            },
            loc: { start: 4664, end: 4670 },
          },
          directives: [],
          loc: { start: 4643, end: 4670 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followUnfollowUser",
            loc: { start: 4673, end: 4691 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 4692, end: 4698 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4700, end: 4702 },
                  },
                  loc: { start: 4700, end: 4702 },
                },
                loc: { start: 4700, end: 4703 },
              },
              directives: [],
              loc: { start: 4692, end: 4703 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4706, end: 4712 },
            },
            loc: { start: 4706, end: 4712 },
          },
          directives: [],
          loc: { start: 4673, end: 4712 },
        },
      ],
      loc: { start: 4440, end: 4714 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UserInput",
        loc: { start: 4722, end: 4731 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 4736, end: 4744 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4746, end: 4752 },
              },
              loc: { start: 4746, end: 4752 },
            },
            loc: { start: 4746, end: 4753 },
          },
          directives: [],
          loc: { start: 4736, end: 4753 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4756, end: 4764 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4766, end: 4772 },
              },
              loc: { start: 4766, end: 4772 },
            },
            loc: { start: 4766, end: 4773 },
          },
          directives: [],
          loc: { start: 4756, end: 4773 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 4776, end: 4785 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4787, end: 4793 },
            },
            loc: { start: 4787, end: 4793 },
          },
          directives: [],
          loc: { start: 4776, end: 4793 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 4796, end: 4804 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4806, end: 4812 },
            },
            loc: { start: 4806, end: 4812 },
          },
          directives: [],
          loc: { start: 4796, end: 4812 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4815, end: 4820 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4822, end: 4828 },
            },
            loc: { start: 4822, end: 4828 },
          },
          directives: [],
          loc: { start: 4815, end: 4828 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 4831, end: 4836 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4838, end: 4844 },
            },
            loc: { start: 4838, end: 4844 },
          },
          directives: [],
          loc: { start: 4831, end: 4844 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 4847, end: 4859 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 4861, end: 4867 },
            },
            loc: { start: 4861, end: 4867 },
          },
          directives: [],
          loc: { start: 4847, end: 4867 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 4870, end: 4880 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 4882, end: 4888 },
            },
            loc: { start: 4882, end: 4888 },
          },
          directives: [],
          loc: { start: 4870, end: 4888 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4891, end: 4898 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4900, end: 4906 },
            },
            loc: { start: 4900, end: 4906 },
          },
          directives: [],
          loc: { start: 4891, end: 4906 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 4909, end: 4912 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4914, end: 4920 },
            },
            loc: { start: 4914, end: 4920 },
          },
          directives: [],
          loc: { start: 4909, end: 4920 },
        },
      ],
      loc: { start: 4716, end: 4922 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 4931, end: 4937 } },
      directives: [],
      loc: { start: 4924, end: 4937 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4944, end: 4948 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4953, end: 4955 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4957, end: 4959 },
              },
              loc: { start: 4957, end: 4959 },
            },
            loc: { start: 4957, end: 4960 },
          },
          directives: [],
          loc: { start: 4953, end: 4960 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 4963, end: 4972 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4974, end: 4980 },
            },
            loc: { start: 4974, end: 4980 },
          },
          directives: [],
          loc: { start: 4963, end: 4980 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 4983, end: 4991 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4993, end: 4999 },
            },
            loc: { start: 4993, end: 4999 },
          },
          directives: [],
          loc: { start: 4983, end: 4999 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 5002, end: 5010 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5012, end: 5018 },
              },
              loc: { start: 5012, end: 5018 },
            },
            loc: { start: 5012, end: 5019 },
          },
          directives: [],
          loc: { start: 5002, end: 5019 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 5022, end: 5027 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5029, end: 5035 },
            },
            loc: { start: 5029, end: 5035 },
          },
          directives: [],
          loc: { start: 5022, end: 5035 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 5038, end: 5043 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5045, end: 5051 },
            },
            loc: { start: 5045, end: 5051 },
          },
          directives: [],
          loc: { start: 5038, end: 5051 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 5054, end: 5066 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5068, end: 5074 },
            },
            loc: { start: 5068, end: 5074 },
          },
          directives: [],
          loc: { start: 5054, end: 5074 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 5077, end: 5087 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5089, end: 5095 },
            },
            loc: { start: 5089, end: 5095 },
          },
          directives: [],
          loc: { start: 5077, end: 5095 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5098, end: 5105 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5107, end: 5113 },
            },
            loc: { start: 5107, end: 5113 },
          },
          directives: [],
          loc: { start: 5098, end: 5113 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 5116, end: 5126 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 5128, end: 5135 },
            },
            loc: { start: 5128, end: 5135 },
          },
          directives: [],
          loc: { start: 5116, end: 5135 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 5138, end: 5141 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5143, end: 5149 },
            },
            loc: { start: 5143, end: 5149 },
          },
          directives: [],
          loc: { start: 5138, end: 5149 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followers",
            loc: { start: 5152, end: 5161 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5164, end: 5166 },
              },
              loc: { start: 5164, end: 5166 },
            },
            loc: { start: 5163, end: 5167 },
          },
          directives: [],
          loc: { start: 5152, end: 5167 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "following",
            loc: { start: 5170, end: 5179 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5182, end: 5184 },
              },
              loc: { start: 5182, end: 5184 },
            },
            loc: { start: 5181, end: 5185 },
          },
          directives: [],
          loc: { start: 5170, end: 5185 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5188, end: 5197 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5199, end: 5203 },
            },
            loc: { start: 5199, end: 5203 },
          },
          directives: [],
          loc: { start: 5188, end: 5203 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 5206, end: 5215 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5217, end: 5221 },
            },
            loc: { start: 5217, end: 5221 },
          },
          directives: [],
          loc: { start: 5206, end: 5221 },
        },
      ],
      loc: { start: 4939, end: 5223 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UpdateUserInput",
        loc: { start: 5231, end: 5246 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 5251, end: 5259 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5261, end: 5267 },
            },
            loc: { start: 5261, end: 5267 },
          },
          directives: [],
          loc: { start: 5251, end: 5267 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 5270, end: 5278 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5280, end: 5286 },
            },
            loc: { start: 5280, end: 5286 },
          },
          directives: [],
          loc: { start: 5270, end: 5286 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 5289, end: 5298 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5300, end: 5306 },
            },
            loc: { start: 5300, end: 5306 },
          },
          directives: [],
          loc: { start: 5289, end: 5306 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 5309, end: 5317 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5319, end: 5325 },
            },
            loc: { start: 5319, end: 5325 },
          },
          directives: [],
          loc: { start: 5309, end: 5325 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 5328, end: 5333 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5335, end: 5341 },
            },
            loc: { start: 5335, end: 5341 },
          },
          directives: [],
          loc: { start: 5328, end: 5341 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 5344, end: 5349 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5351, end: 5357 },
            },
            loc: { start: 5351, end: 5357 },
          },
          directives: [],
          loc: { start: 5344, end: 5357 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 5360, end: 5372 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 5374, end: 5380 },
            },
            loc: { start: 5374, end: 5380 },
          },
          directives: [],
          loc: { start: 5360, end: 5380 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 5383, end: 5393 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 5395, end: 5401 },
            },
            loc: { start: 5395, end: 5401 },
          },
          directives: [],
          loc: { start: 5383, end: 5401 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5404, end: 5411 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5413, end: 5419 },
            },
            loc: { start: 5413, end: 5419 },
          },
          directives: [],
          loc: { start: 5404, end: 5419 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 5422, end: 5425 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5427, end: 5433 },
            },
            loc: { start: 5427, end: 5433 },
          },
          directives: [],
          loc: { start: 5422, end: 5433 },
        },
      ],
      loc: { start: 5225, end: 5435 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wallet", loc: { start: 5441, end: 5447 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 5452, end: 5458 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 5460, end: 5462 },
            },
            loc: { start: 5460, end: 5462 },
          },
          directives: [],
          loc: { start: 5452, end: 5462 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5465, end: 5472 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5474, end: 5480 },
            },
            loc: { start: 5474, end: 5480 },
          },
          directives: [],
          loc: { start: 5465, end: 5480 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 5483, end: 5493 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5495, end: 5501 },
            },
            loc: { start: 5495, end: 5501 },
          },
          directives: [],
          loc: { start: 5483, end: 5501 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 5504, end: 5513 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5515, end: 5521 },
            },
            loc: { start: 5515, end: 5521 },
          },
          directives: [],
          loc: { start: 5504, end: 5521 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 5524, end: 5532 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5534, end: 5540 },
            },
            loc: { start: 5534, end: 5540 },
          },
          directives: [],
          loc: { start: 5524, end: 5540 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 5543, end: 5550 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5552, end: 5558 },
            },
            loc: { start: 5552, end: 5558 },
          },
          directives: [],
          loc: { start: 5543, end: 5558 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5561, end: 5570 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5572, end: 5576 },
            },
            loc: { start: 5572, end: 5576 },
          },
          directives: [],
          loc: { start: 5561, end: 5576 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 5579, end: 5588 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5590, end: 5594 },
            },
            loc: { start: 5590, end: 5594 },
          },
          directives: [],
          loc: { start: 5579, end: 5594 },
        },
      ],
      loc: { start: 5436, end: 5596 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WalletInput",
        loc: { start: 5604, end: 5615 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5620, end: 5627 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5629, end: 5635 },
            },
            loc: { start: 5629, end: 5635 },
          },
          directives: [],
          loc: { start: 5620, end: 5635 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 5638, end: 5648 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5650, end: 5656 },
            },
            loc: { start: 5650, end: 5656 },
          },
          directives: [],
          loc: { start: 5638, end: 5656 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 5659, end: 5668 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5670, end: 5676 },
            },
            loc: { start: 5670, end: 5676 },
          },
          directives: [],
          loc: { start: 5659, end: 5676 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 5679, end: 5687 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5689, end: 5695 },
            },
            loc: { start: 5689, end: 5695 },
          },
          directives: [],
          loc: { start: 5679, end: 5695 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 5698, end: 5705 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5707, end: 5713 },
            },
            loc: { start: 5707, end: 5713 },
          },
          directives: [],
          loc: { start: 5698, end: 5713 },
        },
      ],
      loc: { start: 5598, end: 5715 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ChartData",
        loc: { start: 5722, end: 5731 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "labels",
            loc: { start: 5736, end: 5742 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5745, end: 5751 },
              },
              loc: { start: 5745, end: 5751 },
            },
            loc: { start: 5744, end: 5752 },
          },
          directives: [],
          loc: { start: 5736, end: 5752 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "datasets",
            loc: { start: 5755, end: 5763 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Dataset",
                loc: { start: 5766, end: 5773 },
              },
              loc: { start: 5766, end: 5773 },
            },
            loc: { start: 5765, end: 5774 },
          },
          directives: [],
          loc: { start: 5755, end: 5774 },
        },
      ],
      loc: { start: 5717, end: 5776 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Dataset", loc: { start: 5783, end: 5790 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "data",
            loc: { start: 5795, end: 5799 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 5802, end: 5807 },
              },
              loc: { start: 5802, end: 5807 },
            },
            loc: { start: 5801, end: 5808 },
          },
          directives: [],
          loc: { start: 5795, end: 5808 },
        },
      ],
      loc: { start: 5778, end: 5810 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CoinData",
        loc: { start: 5817, end: 5825 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5830, end: 5834 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5836, end: 5842 },
            },
            loc: { start: 5836, end: 5842 },
          },
          directives: [],
          loc: { start: 5830, end: 5842 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "symbol",
            loc: { start: 5845, end: 5851 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5853, end: 5859 },
            },
            loc: { start: 5853, end: 5859 },
          },
          directives: [],
          loc: { start: 5845, end: 5859 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 5862, end: 5867 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5869, end: 5875 },
            },
            loc: { start: 5869, end: 5875 },
          },
          directives: [],
          loc: { start: 5862, end: 5875 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 5878, end: 5883 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 5885, end: 5890 },
            },
            loc: { start: 5885, end: 5890 },
          },
          directives: [],
          loc: { start: 5878, end: 5890 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 5893, end: 5899 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 5901, end: 5906 },
            },
            loc: { start: 5901, end: 5906 },
          },
          directives: [],
          loc: { start: 5893, end: 5906 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "changePercentage",
            loc: { start: 5909, end: 5925 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 5927, end: 5932 },
            },
            loc: { start: 5927, end: 5932 },
          },
          directives: [],
          loc: { start: 5909, end: 5932 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "chartData",
            loc: { start: 5935, end: 5944 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ChartData",
              loc: { start: 5946, end: 5955 },
            },
            loc: { start: 5946, end: 5955 },
          },
          directives: [],
          loc: { start: 5935, end: 5955 },
        },
      ],
      loc: { start: 5812, end: 5957 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5964, end: 5969 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getWallet",
            loc: { start: 5974, end: 5983 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Wallet",
              loc: { start: 5985, end: 5991 },
            },
            loc: { start: 5985, end: 5991 },
          },
          directives: [],
          loc: { start: 5974, end: 5991 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCoinData",
            loc: { start: 5994, end: 6005 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "currency",
                loc: { start: 6006, end: 6014 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 6016, end: 6022 },
                  },
                  loc: { start: 6016, end: 6022 },
                },
                loc: { start: 6016, end: 6023 },
              },
              directives: [],
              loc: { start: 6006, end: 6023 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "days",
                loc: { start: 6025, end: 6029 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 6031, end: 6034 },
                  },
                  loc: { start: 6031, end: 6034 },
                },
                loc: { start: 6031, end: 6035 },
              },
              directives: [],
              loc: { start: 6025, end: 6035 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CoinData",
                loc: { start: 6038, end: 6046 },
              },
              loc: { start: 6038, end: 6046 },
            },
            loc: { start: 6038, end: 6047 },
          },
          directives: [],
          loc: { start: 5994, end: 6047 },
        },
      ],
      loc: { start: 5959, end: 6049 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransferFundsResponse",
        loc: { start: 6056, end: 6077 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 6082, end: 6089 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6091, end: 6097 },
            },
            loc: { start: 6091, end: 6097 },
          },
          directives: [],
          loc: { start: 6082, end: 6097 },
        },
      ],
      loc: { start: 6051, end: 6099 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransferFundsInput",
        loc: { start: 6107, end: 6125 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 6130, end: 6136 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6138, end: 6144 },
              },
              loc: { start: 6138, end: 6144 },
            },
            loc: { start: 6138, end: 6145 },
          },
          directives: [],
          loc: { start: 6130, end: 6145 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 6148, end: 6156 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6158, end: 6164 },
              },
              loc: { start: 6158, end: 6164 },
            },
            loc: { start: 6158, end: 6165 },
          },
          directives: [],
          loc: { start: 6148, end: 6165 },
        },
      ],
      loc: { start: 6101, end: 6167 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WithdrawFundsResponse",
        loc: { start: 6174, end: 6195 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 6200, end: 6207 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6209, end: 6215 },
            },
            loc: { start: 6209, end: 6215 },
          },
          directives: [],
          loc: { start: 6200, end: 6215 },
        },
      ],
      loc: { start: 6169, end: 6217 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WithdrawFundsInput",
        loc: { start: 6225, end: 6243 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 6248, end: 6254 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6256, end: 6262 },
              },
              loc: { start: 6256, end: 6262 },
            },
            loc: { start: 6256, end: 6263 },
          },
          directives: [],
          loc: { start: 6248, end: 6263 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 6266, end: 6273 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6275, end: 6281 },
              },
              loc: { start: 6275, end: 6281 },
            },
            loc: { start: 6275, end: 6282 },
          },
          directives: [],
          loc: { start: 6266, end: 6282 },
        },
      ],
      loc: { start: 6219, end: 6284 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 6291, end: 6299 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createWallet",
            loc: { start: 6304, end: 6316 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 6317, end: 6323 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 6325, end: 6336 },
                  },
                  loc: { start: 6325, end: 6336 },
                },
                loc: { start: 6325, end: 6337 },
              },
              directives: [],
              loc: { start: 6317, end: 6337 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6340, end: 6346 },
            },
            loc: { start: 6340, end: 6346 },
          },
          directives: [],
          loc: { start: 6304, end: 6346 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateWallet",
            loc: { start: 6349, end: 6361 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 6362, end: 6364 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 6366, end: 6368 },
                  },
                  loc: { start: 6366, end: 6368 },
                },
                loc: { start: 6366, end: 6369 },
              },
              directives: [],
              loc: { start: 6362, end: 6369 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 6371, end: 6377 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 6379, end: 6390 },
                  },
                  loc: { start: 6379, end: 6390 },
                },
                loc: { start: 6379, end: 6391 },
              },
              directives: [],
              loc: { start: 6371, end: 6391 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6394, end: 6400 },
            },
            loc: { start: 6394, end: 6400 },
          },
          directives: [],
          loc: { start: 6349, end: 6400 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "transferFunds",
            loc: { start: 6403, end: 6416 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "transferFunds",
                loc: { start: 6417, end: 6430 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "TransferFundsInput",
                    loc: { start: 6432, end: 6450 },
                  },
                  loc: { start: 6432, end: 6450 },
                },
                loc: { start: 6432, end: 6451 },
              },
              directives: [],
              loc: { start: 6417, end: 6451 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "TransferFundsResponse",
              loc: { start: 6454, end: 6475 },
            },
            loc: { start: 6454, end: 6475 },
          },
          directives: [],
          loc: { start: 6403, end: 6475 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "withdrawFunds",
            loc: { start: 6478, end: 6491 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "withdrawFunds",
                loc: { start: 6492, end: 6505 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WithdrawFundsInput",
                    loc: { start: 6507, end: 6525 },
                  },
                  loc: { start: 6507, end: 6525 },
                },
                loc: { start: 6507, end: 6526 },
              },
              directives: [],
              loc: { start: 6492, end: 6526 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "WithdrawFundsResponse",
              loc: { start: 6529, end: 6550 },
            },
            loc: { start: 6529, end: 6550 },
          },
          directives: [],
          loc: { start: 6478, end: 6550 },
        },
      ],
      loc: { start: 6286, end: 6552 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 6561, end: 6567 } },
      directives: [],
      loc: { start: 6554, end: 6567 },
    },
  ],
  loc: { start: 0, end: 6568 },
} as unknown as DocumentNode;
