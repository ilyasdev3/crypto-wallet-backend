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
            value: "createdAt",
            loc: { start: 3586, end: 3595 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3597, end: 3603 },
            },
            loc: { start: 3597, end: 3603 },
          },
          directives: [],
          loc: { start: 3586, end: 3603 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 3606, end: 3615 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3617, end: 3623 },
            },
            loc: { start: 3617, end: 3623 },
          },
          directives: [],
          loc: { start: 3606, end: 3623 },
        },
      ],
      loc: { start: 3420, end: 3625 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 3631, end: 3636 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUser",
            loc: { start: 3641, end: 3648 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3649, end: 3651 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3653, end: 3655 },
                  },
                  loc: { start: 3653, end: 3655 },
                },
                loc: { start: 3653, end: 3656 },
              },
              directives: [],
              loc: { start: 3649, end: 3656 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3659, end: 3663 },
            },
            loc: { start: 3659, end: 3663 },
          },
          directives: [],
          loc: { start: 3641, end: 3663 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3666, end: 3668 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3670, end: 3674 },
            },
            loc: { start: 3670, end: 3674 },
          },
          directives: [],
          loc: { start: 3666, end: 3674 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserFollowing",
            loc: { start: 3677, end: 3693 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3694, end: 3696 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3698, end: 3700 },
                  },
                  loc: { start: 3698, end: 3700 },
                },
                loc: { start: 3698, end: 3701 },
              },
              directives: [],
              loc: { start: 3694, end: 3701 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3705, end: 3709 },
              },
              loc: { start: 3705, end: 3709 },
            },
            loc: { start: 3704, end: 3710 },
          },
          directives: [],
          loc: { start: 3677, end: 3710 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserFollowers",
            loc: { start: 3713, end: 3729 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3730, end: 3732 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3734, end: 3736 },
                  },
                  loc: { start: 3734, end: 3736 },
                },
                loc: { start: 3734, end: 3737 },
              },
              directives: [],
              loc: { start: 3730, end: 3737 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3741, end: 3745 },
              },
              loc: { start: 3741, end: 3745 },
            },
            loc: { start: 3740, end: 3746 },
          },
          directives: [],
          loc: { start: 3713, end: 3746 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserWithName",
            loc: { start: 3749, end: 3764 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 3765, end: 3773 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3775, end: 3781 },
                  },
                  loc: { start: 3775, end: 3781 },
                },
                loc: { start: 3775, end: 3782 },
              },
              directives: [],
              loc: { start: 3765, end: 3782 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "getUserWithNameResponse",
              loc: { start: 3785, end: 3808 },
            },
            loc: { start: 3785, end: 3808 },
          },
          directives: [],
          loc: { start: 3749, end: 3808 },
        },
      ],
      loc: { start: 3626, end: 3810 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "getUserWithNameResponse",
        loc: { start: 3817, end: 3840 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 3845, end: 3849 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3851, end: 3855 },
            },
            loc: { start: 3851, end: 3855 },
          },
          directives: [],
          loc: { start: 3845, end: 3855 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 3858, end: 3865 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3867, end: 3873 },
            },
            loc: { start: 3867, end: 3873 },
          },
          directives: [],
          loc: { start: 3858, end: 3873 },
        },
      ],
      loc: { start: 3812, end: 3875 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateUserResponse",
        loc: { start: 3882, end: 3900 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 3905, end: 3912 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3914, end: 3920 },
            },
            loc: { start: 3914, end: 3920 },
          },
          directives: [],
          loc: { start: 3905, end: 3920 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 3923, end: 3928 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3930, end: 3936 },
            },
            loc: { start: 3930, end: 3936 },
          },
          directives: [],
          loc: { start: 3923, end: 3936 },
        },
      ],
      loc: { start: 3877, end: 3938 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 3945, end: 3958 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 3963, end: 3970 },
          },
          arguments: [],
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
          loc: { start: 3963, end: 3978 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 3981, end: 3986 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3988, end: 3994 },
            },
            loc: { start: 3988, end: 3994 },
          },
          directives: [],
          loc: { start: 3981, end: 3994 },
        },
      ],
      loc: { start: 3940, end: 3996 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 4003, end: 4011 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 4016, end: 4026 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4027, end: 4031 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 4033, end: 4042 },
                  },
                  loc: { start: 4033, end: 4042 },
                },
                loc: { start: 4033, end: 4043 },
              },
              directives: [],
              loc: { start: 4027, end: 4043 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateUserResponse",
              loc: { start: 4046, end: 4064 },
            },
            loc: { start: 4046, end: 4064 },
          },
          directives: [],
          loc: { start: 4016, end: 4064 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginUser",
            loc: { start: 4067, end: 4076 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4077, end: 4081 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 4083, end: 4092 },
                  },
                  loc: { start: 4083, end: 4092 },
                },
                loc: { start: 4083, end: 4093 },
              },
              directives: [],
              loc: { start: 4077, end: 4093 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "LoginResponse",
              loc: { start: 4096, end: 4109 },
            },
            loc: { start: 4096, end: 4109 },
          },
          directives: [],
          loc: { start: 4067, end: 4109 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 4112, end: 4122 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4123, end: 4127 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UpdateUserInput",
                    loc: { start: 4129, end: 4144 },
                  },
                  loc: { start: 4129, end: 4144 },
                },
                loc: { start: 4129, end: 4145 },
              },
              directives: [],
              loc: { start: 4123, end: 4145 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4148, end: 4154 },
              },
              loc: { start: 4148, end: 4154 },
            },
            loc: { start: 4148, end: 4155 },
          },
          directives: [],
          loc: { start: 4112, end: 4155 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkUsername",
            loc: { start: 4158, end: 4171 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 4172, end: 4180 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4182, end: 4188 },
                  },
                  loc: { start: 4182, end: 4188 },
                },
                loc: { start: 4182, end: 4189 },
              },
              directives: [],
              loc: { start: 4172, end: 4189 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4192, end: 4198 },
            },
            loc: { start: 4192, end: 4198 },
          },
          directives: [],
          loc: { start: 4158, end: 4198 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 4201, end: 4211 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4212, end: 4214 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4216, end: 4218 },
                  },
                  loc: { start: 4216, end: 4218 },
                },
                loc: { start: 4216, end: 4219 },
              },
              directives: [],
              loc: { start: 4212, end: 4219 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4222, end: 4228 },
            },
            loc: { start: 4222, end: 4228 },
          },
          directives: [],
          loc: { start: 4201, end: 4228 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followUnfollowUser",
            loc: { start: 4231, end: 4249 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 4250, end: 4256 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4258, end: 4260 },
                  },
                  loc: { start: 4258, end: 4260 },
                },
                loc: { start: 4258, end: 4261 },
              },
              directives: [],
              loc: { start: 4250, end: 4261 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4264, end: 4270 },
            },
            loc: { start: 4264, end: 4270 },
          },
          directives: [],
          loc: { start: 4231, end: 4270 },
        },
      ],
      loc: { start: 3998, end: 4272 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UserInput",
        loc: { start: 4280, end: 4289 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 4294, end: 4302 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4304, end: 4310 },
              },
              loc: { start: 4304, end: 4310 },
            },
            loc: { start: 4304, end: 4311 },
          },
          directives: [],
          loc: { start: 4294, end: 4311 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4314, end: 4322 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4324, end: 4330 },
              },
              loc: { start: 4324, end: 4330 },
            },
            loc: { start: 4324, end: 4331 },
          },
          directives: [],
          loc: { start: 4314, end: 4331 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 4334, end: 4343 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4345, end: 4351 },
            },
            loc: { start: 4345, end: 4351 },
          },
          directives: [],
          loc: { start: 4334, end: 4351 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 4354, end: 4362 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4364, end: 4370 },
            },
            loc: { start: 4364, end: 4370 },
          },
          directives: [],
          loc: { start: 4354, end: 4370 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4373, end: 4378 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4380, end: 4386 },
            },
            loc: { start: 4380, end: 4386 },
          },
          directives: [],
          loc: { start: 4373, end: 4386 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 4389, end: 4394 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4396, end: 4402 },
            },
            loc: { start: 4396, end: 4402 },
          },
          directives: [],
          loc: { start: 4389, end: 4402 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 4405, end: 4417 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 4419, end: 4425 },
            },
            loc: { start: 4419, end: 4425 },
          },
          directives: [],
          loc: { start: 4405, end: 4425 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4428, end: 4435 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4437, end: 4443 },
            },
            loc: { start: 4437, end: 4443 },
          },
          directives: [],
          loc: { start: 4428, end: 4443 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 4446, end: 4449 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4451, end: 4457 },
            },
            loc: { start: 4451, end: 4457 },
          },
          directives: [],
          loc: { start: 4446, end: 4457 },
        },
      ],
      loc: { start: 4274, end: 4459 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 4468, end: 4474 } },
      directives: [],
      loc: { start: 4461, end: 4474 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4481, end: 4485 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4490, end: 4492 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4494, end: 4496 },
              },
              loc: { start: 4494, end: 4496 },
            },
            loc: { start: 4494, end: 4497 },
          },
          directives: [],
          loc: { start: 4490, end: 4497 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 4500, end: 4509 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4511, end: 4517 },
            },
            loc: { start: 4511, end: 4517 },
          },
          directives: [],
          loc: { start: 4500, end: 4517 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 4520, end: 4528 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4530, end: 4536 },
            },
            loc: { start: 4530, end: 4536 },
          },
          directives: [],
          loc: { start: 4520, end: 4536 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 4539, end: 4547 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4549, end: 4555 },
              },
              loc: { start: 4549, end: 4555 },
            },
            loc: { start: 4549, end: 4556 },
          },
          directives: [],
          loc: { start: 4539, end: 4556 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4559, end: 4564 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4566, end: 4572 },
            },
            loc: { start: 4566, end: 4572 },
          },
          directives: [],
          loc: { start: 4559, end: 4572 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 4575, end: 4580 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4582, end: 4588 },
            },
            loc: { start: 4582, end: 4588 },
          },
          directives: [],
          loc: { start: 4575, end: 4588 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 4591, end: 4603 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4605, end: 4611 },
            },
            loc: { start: 4605, end: 4611 },
          },
          directives: [],
          loc: { start: 4591, end: 4611 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4614, end: 4621 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4623, end: 4629 },
            },
            loc: { start: 4623, end: 4629 },
          },
          directives: [],
          loc: { start: 4614, end: 4629 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 4632, end: 4642 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 4644, end: 4651 },
            },
            loc: { start: 4644, end: 4651 },
          },
          directives: [],
          loc: { start: 4632, end: 4651 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 4654, end: 4657 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4659, end: 4665 },
            },
            loc: { start: 4659, end: 4665 },
          },
          directives: [],
          loc: { start: 4654, end: 4665 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followers",
            loc: { start: 4668, end: 4677 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4680, end: 4682 },
              },
              loc: { start: 4680, end: 4682 },
            },
            loc: { start: 4679, end: 4683 },
          },
          directives: [],
          loc: { start: 4668, end: 4683 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "following",
            loc: { start: 4686, end: 4695 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4698, end: 4700 },
              },
              loc: { start: 4698, end: 4700 },
            },
            loc: { start: 4697, end: 4701 },
          },
          directives: [],
          loc: { start: 4686, end: 4701 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4704, end: 4713 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 4715, end: 4719 },
            },
            loc: { start: 4715, end: 4719 },
          },
          directives: [],
          loc: { start: 4704, end: 4719 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 4722, end: 4731 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 4733, end: 4737 },
            },
            loc: { start: 4733, end: 4737 },
          },
          directives: [],
          loc: { start: 4722, end: 4737 },
        },
      ],
      loc: { start: 4476, end: 4739 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UpdateUserInput",
        loc: { start: 4747, end: 4762 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 4767, end: 4775 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4777, end: 4783 },
            },
            loc: { start: 4777, end: 4783 },
          },
          directives: [],
          loc: { start: 4767, end: 4783 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4786, end: 4794 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4796, end: 4802 },
            },
            loc: { start: 4796, end: 4802 },
          },
          directives: [],
          loc: { start: 4786, end: 4802 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 4805, end: 4814 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4816, end: 4822 },
            },
            loc: { start: 4816, end: 4822 },
          },
          directives: [],
          loc: { start: 4805, end: 4822 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 4825, end: 4833 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4835, end: 4841 },
            },
            loc: { start: 4835, end: 4841 },
          },
          directives: [],
          loc: { start: 4825, end: 4841 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4844, end: 4849 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4851, end: 4857 },
            },
            loc: { start: 4851, end: 4857 },
          },
          directives: [],
          loc: { start: 4844, end: 4857 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 4860, end: 4865 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4867, end: 4873 },
            },
            loc: { start: 4867, end: 4873 },
          },
          directives: [],
          loc: { start: 4860, end: 4873 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 4876, end: 4888 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 4890, end: 4896 },
            },
            loc: { start: 4890, end: 4896 },
          },
          directives: [],
          loc: { start: 4876, end: 4896 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4899, end: 4906 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4908, end: 4914 },
            },
            loc: { start: 4908, end: 4914 },
          },
          directives: [],
          loc: { start: 4899, end: 4914 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 4917, end: 4920 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4922, end: 4928 },
            },
            loc: { start: 4922, end: 4928 },
          },
          directives: [],
          loc: { start: 4917, end: 4928 },
        },
      ],
      loc: { start: 4741, end: 4930 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wallet", loc: { start: 4936, end: 4942 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 4947, end: 4953 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4955, end: 4957 },
            },
            loc: { start: 4955, end: 4957 },
          },
          directives: [],
          loc: { start: 4947, end: 4957 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4960, end: 4967 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4969, end: 4975 },
            },
            loc: { start: 4969, end: 4975 },
          },
          directives: [],
          loc: { start: 4960, end: 4975 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 4978, end: 4988 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4990, end: 4996 },
            },
            loc: { start: 4990, end: 4996 },
          },
          directives: [],
          loc: { start: 4978, end: 4996 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 4999, end: 5008 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5010, end: 5016 },
            },
            loc: { start: 5010, end: 5016 },
          },
          directives: [],
          loc: { start: 4999, end: 5016 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 5019, end: 5027 },
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
          loc: { start: 5019, end: 5035 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 5038, end: 5045 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5047, end: 5053 },
            },
            loc: { start: 5047, end: 5053 },
          },
          directives: [],
          loc: { start: 5038, end: 5053 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5056, end: 5065 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5067, end: 5071 },
            },
            loc: { start: 5067, end: 5071 },
          },
          directives: [],
          loc: { start: 5056, end: 5071 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 5074, end: 5083 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5085, end: 5089 },
            },
            loc: { start: 5085, end: 5089 },
          },
          directives: [],
          loc: { start: 5074, end: 5089 },
        },
      ],
      loc: { start: 4931, end: 5091 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WalletInput",
        loc: { start: 5099, end: 5110 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5115, end: 5122 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5124, end: 5130 },
            },
            loc: { start: 5124, end: 5130 },
          },
          directives: [],
          loc: { start: 5115, end: 5130 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 5133, end: 5143 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5145, end: 5151 },
            },
            loc: { start: 5145, end: 5151 },
          },
          directives: [],
          loc: { start: 5133, end: 5151 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 5154, end: 5163 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5165, end: 5171 },
            },
            loc: { start: 5165, end: 5171 },
          },
          directives: [],
          loc: { start: 5154, end: 5171 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 5174, end: 5182 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5184, end: 5190 },
            },
            loc: { start: 5184, end: 5190 },
          },
          directives: [],
          loc: { start: 5174, end: 5190 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 5193, end: 5200 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5202, end: 5208 },
            },
            loc: { start: 5202, end: 5208 },
          },
          directives: [],
          loc: { start: 5193, end: 5208 },
        },
      ],
      loc: { start: 5093, end: 5210 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ChartData",
        loc: { start: 5217, end: 5226 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "labels",
            loc: { start: 5231, end: 5237 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5240, end: 5246 },
              },
              loc: { start: 5240, end: 5246 },
            },
            loc: { start: 5239, end: 5247 },
          },
          directives: [],
          loc: { start: 5231, end: 5247 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "datasets",
            loc: { start: 5250, end: 5258 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Dataset",
                loc: { start: 5261, end: 5268 },
              },
              loc: { start: 5261, end: 5268 },
            },
            loc: { start: 5260, end: 5269 },
          },
          directives: [],
          loc: { start: 5250, end: 5269 },
        },
      ],
      loc: { start: 5212, end: 5271 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Dataset", loc: { start: 5278, end: 5285 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "data",
            loc: { start: 5290, end: 5294 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 5297, end: 5302 },
              },
              loc: { start: 5297, end: 5302 },
            },
            loc: { start: 5296, end: 5303 },
          },
          directives: [],
          loc: { start: 5290, end: 5303 },
        },
      ],
      loc: { start: 5273, end: 5305 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CoinData",
        loc: { start: 5312, end: 5320 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5325, end: 5329 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5331, end: 5337 },
            },
            loc: { start: 5331, end: 5337 },
          },
          directives: [],
          loc: { start: 5325, end: 5337 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "symbol",
            loc: { start: 5340, end: 5346 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5348, end: 5354 },
            },
            loc: { start: 5348, end: 5354 },
          },
          directives: [],
          loc: { start: 5340, end: 5354 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 5357, end: 5362 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5364, end: 5370 },
            },
            loc: { start: 5364, end: 5370 },
          },
          directives: [],
          loc: { start: 5357, end: 5370 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 5373, end: 5378 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 5380, end: 5385 },
            },
            loc: { start: 5380, end: 5385 },
          },
          directives: [],
          loc: { start: 5373, end: 5385 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 5388, end: 5394 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 5396, end: 5401 },
            },
            loc: { start: 5396, end: 5401 },
          },
          directives: [],
          loc: { start: 5388, end: 5401 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "changePercentage",
            loc: { start: 5404, end: 5420 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 5422, end: 5427 },
            },
            loc: { start: 5422, end: 5427 },
          },
          directives: [],
          loc: { start: 5404, end: 5427 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "chartData",
            loc: { start: 5430, end: 5439 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ChartData",
              loc: { start: 5441, end: 5450 },
            },
            loc: { start: 5441, end: 5450 },
          },
          directives: [],
          loc: { start: 5430, end: 5450 },
        },
      ],
      loc: { start: 5307, end: 5452 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5459, end: 5464 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getWallet",
            loc: { start: 5469, end: 5478 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Wallet",
              loc: { start: 5480, end: 5486 },
            },
            loc: { start: 5480, end: 5486 },
          },
          directives: [],
          loc: { start: 5469, end: 5486 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCoinData",
            loc: { start: 5489, end: 5500 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "currency",
                loc: { start: 5501, end: 5509 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 5511, end: 5517 },
                  },
                  loc: { start: 5511, end: 5517 },
                },
                loc: { start: 5511, end: 5518 },
              },
              directives: [],
              loc: { start: 5501, end: 5518 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "days",
                loc: { start: 5520, end: 5524 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 5526, end: 5529 },
                  },
                  loc: { start: 5526, end: 5529 },
                },
                loc: { start: 5526, end: 5530 },
              },
              directives: [],
              loc: { start: 5520, end: 5530 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CoinData",
                loc: { start: 5533, end: 5541 },
              },
              loc: { start: 5533, end: 5541 },
            },
            loc: { start: 5533, end: 5542 },
          },
          directives: [],
          loc: { start: 5489, end: 5542 },
        },
      ],
      loc: { start: 5454, end: 5544 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransferFundsResponse",
        loc: { start: 5551, end: 5572 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 5577, end: 5584 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5586, end: 5592 },
            },
            loc: { start: 5586, end: 5592 },
          },
          directives: [],
          loc: { start: 5577, end: 5592 },
        },
      ],
      loc: { start: 5546, end: 5594 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransferFundsInput",
        loc: { start: 5602, end: 5620 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 5625, end: 5631 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5633, end: 5639 },
              },
              loc: { start: 5633, end: 5639 },
            },
            loc: { start: 5633, end: 5640 },
          },
          directives: [],
          loc: { start: 5625, end: 5640 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 5643, end: 5651 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5653, end: 5659 },
              },
              loc: { start: 5653, end: 5659 },
            },
            loc: { start: 5653, end: 5660 },
          },
          directives: [],
          loc: { start: 5643, end: 5660 },
        },
      ],
      loc: { start: 5596, end: 5662 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WithdrawFundsResponse",
        loc: { start: 5669, end: 5690 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 5695, end: 5702 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5704, end: 5710 },
            },
            loc: { start: 5704, end: 5710 },
          },
          directives: [],
          loc: { start: 5695, end: 5710 },
        },
      ],
      loc: { start: 5664, end: 5712 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WithdrawFundsInput",
        loc: { start: 5720, end: 5738 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 5743, end: 5749 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5751, end: 5757 },
              },
              loc: { start: 5751, end: 5757 },
            },
            loc: { start: 5751, end: 5758 },
          },
          directives: [],
          loc: { start: 5743, end: 5758 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5761, end: 5768 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5770, end: 5776 },
              },
              loc: { start: 5770, end: 5776 },
            },
            loc: { start: 5770, end: 5777 },
          },
          directives: [],
          loc: { start: 5761, end: 5777 },
        },
      ],
      loc: { start: 5714, end: 5779 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 5786, end: 5794 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createWallet",
            loc: { start: 5799, end: 5811 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 5812, end: 5818 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 5820, end: 5831 },
                  },
                  loc: { start: 5820, end: 5831 },
                },
                loc: { start: 5820, end: 5832 },
              },
              directives: [],
              loc: { start: 5812, end: 5832 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5835, end: 5841 },
            },
            loc: { start: 5835, end: 5841 },
          },
          directives: [],
          loc: { start: 5799, end: 5841 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateWallet",
            loc: { start: 5844, end: 5856 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 5857, end: 5859 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 5861, end: 5863 },
                  },
                  loc: { start: 5861, end: 5863 },
                },
                loc: { start: 5861, end: 5864 },
              },
              directives: [],
              loc: { start: 5857, end: 5864 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 5866, end: 5872 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 5874, end: 5885 },
                  },
                  loc: { start: 5874, end: 5885 },
                },
                loc: { start: 5874, end: 5886 },
              },
              directives: [],
              loc: { start: 5866, end: 5886 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5889, end: 5895 },
            },
            loc: { start: 5889, end: 5895 },
          },
          directives: [],
          loc: { start: 5844, end: 5895 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "transferFunds",
            loc: { start: 5898, end: 5911 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "transferFunds",
                loc: { start: 5912, end: 5925 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "TransferFundsInput",
                    loc: { start: 5927, end: 5945 },
                  },
                  loc: { start: 5927, end: 5945 },
                },
                loc: { start: 5927, end: 5946 },
              },
              directives: [],
              loc: { start: 5912, end: 5946 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "TransferFundsResponse",
              loc: { start: 5949, end: 5970 },
            },
            loc: { start: 5949, end: 5970 },
          },
          directives: [],
          loc: { start: 5898, end: 5970 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "withdrawFunds",
            loc: { start: 5973, end: 5986 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "withdrawFunds",
                loc: { start: 5987, end: 6000 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WithdrawFundsInput",
                    loc: { start: 6002, end: 6020 },
                  },
                  loc: { start: 6002, end: 6020 },
                },
                loc: { start: 6002, end: 6021 },
              },
              directives: [],
              loc: { start: 5987, end: 6021 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "WithdrawFundsResponse",
              loc: { start: 6024, end: 6045 },
            },
            loc: { start: 6024, end: 6045 },
          },
          directives: [],
          loc: { start: 5973, end: 6045 },
        },
      ],
      loc: { start: 5781, end: 6047 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 6056, end: 6062 } },
      directives: [],
      loc: { start: 6049, end: 6062 },
    },
  ],
  loc: { start: 0, end: 6063 },
} as unknown as DocumentNode;
