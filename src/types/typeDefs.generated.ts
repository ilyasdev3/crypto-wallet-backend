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
            value: "ownerId",
            loc: { start: 3586, end: 3593 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3595, end: 3601 },
            },
            loc: { start: 3595, end: 3601 },
          },
          directives: [],
          loc: { start: 3586, end: 3601 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 3604, end: 3608 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3610, end: 3616 },
            },
            loc: { start: 3610, end: 3616 },
          },
          directives: [],
          loc: { start: 3604, end: 3616 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 3619, end: 3628 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3630, end: 3636 },
            },
            loc: { start: 3630, end: 3636 },
          },
          directives: [],
          loc: { start: 3619, end: 3636 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 3639, end: 3648 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3650, end: 3656 },
            },
            loc: { start: 3650, end: 3656 },
          },
          directives: [],
          loc: { start: 3639, end: 3656 },
        },
      ],
      loc: { start: 3420, end: 3658 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UserTransactionInput",
        loc: { start: 3666, end: 3686 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 3691, end: 3695 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3697, end: 3703 },
            },
            loc: { start: 3697, end: 3703 },
          },
          directives: [],
          loc: { start: 3691, end: 3703 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "filter",
            loc: { start: 3706, end: 3712 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3714, end: 3720 },
            },
            loc: { start: 3714, end: 3720 },
          },
          directives: [],
          loc: { start: 3706, end: 3720 },
        },
      ],
      loc: { start: 3660, end: 3722 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 3729, end: 3734 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getTransactions",
            loc: { start: 3739, end: 3754 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Transaction",
                loc: { start: 3757, end: 3768 },
              },
              loc: { start: 3757, end: 3768 },
            },
            loc: { start: 3756, end: 3769 },
          },
          directives: [],
          loc: { start: 3739, end: 3769 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserTransactions",
            loc: { start: 3772, end: 3791 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 3792, end: 3797 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "UserTransactionInput",
                  loc: { start: 3799, end: 3819 },
                },
                loc: { start: 3799, end: 3819 },
              },
              directives: [],
              loc: { start: 3792, end: 3819 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Transaction",
                loc: { start: 3823, end: 3834 },
              },
              loc: { start: 3823, end: 3834 },
            },
            loc: { start: 3822, end: 3835 },
          },
          directives: [],
          loc: { start: 3772, end: 3835 },
        },
      ],
      loc: { start: 3724, end: 3837 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3844, end: 3852 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createTransaction",
            loc: { start: 3857, end: 3874 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "transaction",
                loc: { start: 3875, end: 3886 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "TransactionInput",
                    loc: { start: 3888, end: 3904 },
                  },
                  loc: { start: 3888, end: 3904 },
                },
                loc: { start: 3888, end: 3905 },
              },
              directives: [],
              loc: { start: 3875, end: 3905 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Transaction",
              loc: { start: 3908, end: 3919 },
            },
            loc: { start: 3908, end: 3919 },
          },
          directives: [],
          loc: { start: 3857, end: 3919 },
        },
      ],
      loc: { start: 3839, end: 3921 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransactionInput",
        loc: { start: 3929, end: 3945 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 3950, end: 3956 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3958, end: 3961 },
            },
            loc: { start: 3958, end: 3961 },
          },
          directives: [],
          loc: { start: 3950, end: 3961 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3964, end: 3971 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3973, end: 3979 },
            },
            loc: { start: 3973, end: 3979 },
          },
          directives: [],
          loc: { start: 3964, end: 3979 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 3982, end: 3988 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3990, end: 3996 },
            },
            loc: { start: 3990, end: 3996 },
          },
          directives: [],
          loc: { start: 3982, end: 3996 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "senderWalletId",
            loc: { start: 3999, end: 4013 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4015, end: 4017 },
            },
            loc: { start: 4015, end: 4017 },
          },
          directives: [],
          loc: { start: 3999, end: 4017 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "receiverWalletId",
            loc: { start: 4020, end: 4036 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4038, end: 4040 },
            },
            loc: { start: 4038, end: 4040 },
          },
          directives: [],
          loc: { start: 4020, end: 4040 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "contractId",
            loc: { start: 4043, end: 4053 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4055, end: 4057 },
            },
            loc: { start: 4055, end: 4057 },
          },
          directives: [],
          loc: { start: 4043, end: 4057 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "transactionHash",
            loc: { start: 4060, end: 4075 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4077, end: 4083 },
            },
            loc: { start: 4077, end: 4083 },
          },
          directives: [],
          loc: { start: 4060, end: 4083 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "ownerId",
            loc: { start: 4086, end: 4093 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4095, end: 4101 },
            },
            loc: { start: 4095, end: 4101 },
          },
          directives: [],
          loc: { start: 4086, end: 4101 },
        },
      ],
      loc: { start: 3923, end: 4103 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 4109, end: 4114 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUser",
            loc: { start: 4119, end: 4126 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4127, end: 4129 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4131, end: 4133 },
                  },
                  loc: { start: 4131, end: 4133 },
                },
                loc: { start: 4131, end: 4134 },
              },
              directives: [],
              loc: { start: 4127, end: 4134 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4137, end: 4141 },
            },
            loc: { start: 4137, end: 4141 },
          },
          directives: [],
          loc: { start: 4119, end: 4141 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 4144, end: 4146 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4148, end: 4152 },
            },
            loc: { start: 4148, end: 4152 },
          },
          directives: [],
          loc: { start: 4144, end: 4152 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserFollowing",
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
            value: "getUserFollowers",
            loc: { start: 4191, end: 4207 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4208, end: 4210 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4212, end: 4214 },
                  },
                  loc: { start: 4212, end: 4214 },
                },
                loc: { start: 4212, end: 4215 },
              },
              directives: [],
              loc: { start: 4208, end: 4215 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4219, end: 4223 },
              },
              loc: { start: 4219, end: 4223 },
            },
            loc: { start: 4218, end: 4224 },
          },
          directives: [],
          loc: { start: 4191, end: 4224 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserWithName",
            loc: { start: 4227, end: 4242 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 4243, end: 4251 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4253, end: 4259 },
                  },
                  loc: { start: 4253, end: 4259 },
                },
                loc: { start: 4253, end: 4260 },
              },
              directives: [],
              loc: { start: 4243, end: 4260 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "getUserWithNameResponse",
              loc: { start: 4263, end: 4286 },
            },
            loc: { start: 4263, end: 4286 },
          },
          directives: [],
          loc: { start: 4227, end: 4286 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserById",
            loc: { start: 4289, end: 4300 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4301, end: 4303 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4305, end: 4307 },
                  },
                  loc: { start: 4305, end: 4307 },
                },
                loc: { start: 4305, end: 4308 },
              },
              directives: [],
              loc: { start: 4301, end: 4308 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4311, end: 4315 },
            },
            loc: { start: 4311, end: 4315 },
          },
          directives: [],
          loc: { start: 4289, end: 4315 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getTopUsers",
            loc: { start: 4318, end: 4329 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 4330, end: 4335 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 4337, end: 4340 },
                },
                loc: { start: 4337, end: 4340 },
              },
              directives: [],
              loc: { start: 4330, end: 4340 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4344, end: 4348 },
              },
              loc: { start: 4344, end: 4348 },
            },
            loc: { start: 4343, end: 4349 },
          },
          directives: [],
          loc: { start: 4318, end: 4349 },
        },
      ],
      loc: { start: 4104, end: 4351 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "getUserWithNameResponse",
        loc: { start: 4358, end: 4381 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4386, end: 4390 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4392, end: 4396 },
            },
            loc: { start: 4392, end: 4396 },
          },
          directives: [],
          loc: { start: 4386, end: 4396 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 4399, end: 4406 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4408, end: 4414 },
            },
            loc: { start: 4408, end: 4414 },
          },
          directives: [],
          loc: { start: 4399, end: 4414 },
        },
      ],
      loc: { start: 4353, end: 4416 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateUserResponse",
        loc: { start: 4423, end: 4441 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 4446, end: 4453 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4455, end: 4461 },
            },
            loc: { start: 4455, end: 4461 },
          },
          directives: [],
          loc: { start: 4446, end: 4461 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4464, end: 4469 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4471, end: 4477 },
            },
            loc: { start: 4471, end: 4477 },
          },
          directives: [],
          loc: { start: 4464, end: 4477 },
        },
      ],
      loc: { start: 4418, end: 4479 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4486, end: 4499 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 4504, end: 4511 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4513, end: 4519 },
            },
            loc: { start: 4513, end: 4519 },
          },
          directives: [],
          loc: { start: 4504, end: 4519 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4522, end: 4527 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4529, end: 4535 },
            },
            loc: { start: 4529, end: 4535 },
          },
          directives: [],
          loc: { start: 4522, end: 4535 },
        },
      ],
      loc: { start: 4481, end: 4537 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 4544, end: 4552 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 4557, end: 4567 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4568, end: 4572 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 4574, end: 4583 },
                  },
                  loc: { start: 4574, end: 4583 },
                },
                loc: { start: 4574, end: 4584 },
              },
              directives: [],
              loc: { start: 4568, end: 4584 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateUserResponse",
              loc: { start: 4587, end: 4605 },
            },
            loc: { start: 4587, end: 4605 },
          },
          directives: [],
          loc: { start: 4557, end: 4605 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginUser",
            loc: { start: 4608, end: 4617 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4618, end: 4622 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 4624, end: 4633 },
                  },
                  loc: { start: 4624, end: 4633 },
                },
                loc: { start: 4624, end: 4634 },
              },
              directives: [],
              loc: { start: 4618, end: 4634 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "LoginResponse",
              loc: { start: 4637, end: 4650 },
            },
            loc: { start: 4637, end: 4650 },
          },
          directives: [],
          loc: { start: 4608, end: 4650 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 4653, end: 4663 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4664, end: 4668 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UpdateUserInput",
                    loc: { start: 4670, end: 4685 },
                  },
                  loc: { start: 4670, end: 4685 },
                },
                loc: { start: 4670, end: 4686 },
              },
              directives: [],
              loc: { start: 4664, end: 4686 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4689, end: 4695 },
              },
              loc: { start: 4689, end: 4695 },
            },
            loc: { start: 4689, end: 4696 },
          },
          directives: [],
          loc: { start: 4653, end: 4696 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkUsername",
            loc: { start: 4699, end: 4712 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 4713, end: 4721 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4723, end: 4729 },
                  },
                  loc: { start: 4723, end: 4729 },
                },
                loc: { start: 4723, end: 4730 },
              },
              directives: [],
              loc: { start: 4713, end: 4730 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4733, end: 4739 },
            },
            loc: { start: 4733, end: 4739 },
          },
          directives: [],
          loc: { start: 4699, end: 4739 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 4742, end: 4752 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4753, end: 4755 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4757, end: 4759 },
                  },
                  loc: { start: 4757, end: 4759 },
                },
                loc: { start: 4757, end: 4760 },
              },
              directives: [],
              loc: { start: 4753, end: 4760 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4763, end: 4769 },
            },
            loc: { start: 4763, end: 4769 },
          },
          directives: [],
          loc: { start: 4742, end: 4769 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followUnfollowUser",
            loc: { start: 4772, end: 4790 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 4791, end: 4797 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4799, end: 4801 },
                  },
                  loc: { start: 4799, end: 4801 },
                },
                loc: { start: 4799, end: 4802 },
              },
              directives: [],
              loc: { start: 4791, end: 4802 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4805, end: 4811 },
            },
            loc: { start: 4805, end: 4811 },
          },
          directives: [],
          loc: { start: 4772, end: 4811 },
        },
      ],
      loc: { start: 4539, end: 4813 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UserInput",
        loc: { start: 4821, end: 4830 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 4835, end: 4843 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4845, end: 4851 },
              },
              loc: { start: 4845, end: 4851 },
            },
            loc: { start: 4845, end: 4852 },
          },
          directives: [],
          loc: { start: 4835, end: 4852 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4855, end: 4863 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4865, end: 4871 },
              },
              loc: { start: 4865, end: 4871 },
            },
            loc: { start: 4865, end: 4872 },
          },
          directives: [],
          loc: { start: 4855, end: 4872 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 4875, end: 4884 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4886, end: 4892 },
            },
            loc: { start: 4886, end: 4892 },
          },
          directives: [],
          loc: { start: 4875, end: 4892 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 4895, end: 4903 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4905, end: 4911 },
            },
            loc: { start: 4905, end: 4911 },
          },
          directives: [],
          loc: { start: 4895, end: 4911 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4914, end: 4919 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4921, end: 4927 },
            },
            loc: { start: 4921, end: 4927 },
          },
          directives: [],
          loc: { start: 4914, end: 4927 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 4930, end: 4935 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4937, end: 4943 },
            },
            loc: { start: 4937, end: 4943 },
          },
          directives: [],
          loc: { start: 4930, end: 4943 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 4946, end: 4958 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 4960, end: 4966 },
            },
            loc: { start: 4960, end: 4966 },
          },
          directives: [],
          loc: { start: 4946, end: 4966 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 4969, end: 4979 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 4981, end: 4987 },
            },
            loc: { start: 4981, end: 4987 },
          },
          directives: [],
          loc: { start: 4969, end: 4987 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4990, end: 4997 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4999, end: 5005 },
            },
            loc: { start: 4999, end: 5005 },
          },
          directives: [],
          loc: { start: 4990, end: 5005 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 5008, end: 5011 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5013, end: 5019 },
            },
            loc: { start: 5013, end: 5019 },
          },
          directives: [],
          loc: { start: 5008, end: 5019 },
        },
      ],
      loc: { start: 4815, end: 5021 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 5030, end: 5036 } },
      directives: [],
      loc: { start: 5023, end: 5036 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 5043, end: 5047 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5052, end: 5054 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5056, end: 5058 },
              },
              loc: { start: 5056, end: 5058 },
            },
            loc: { start: 5056, end: 5059 },
          },
          directives: [],
          loc: { start: 5052, end: 5059 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 5062, end: 5071 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5073, end: 5079 },
            },
            loc: { start: 5073, end: 5079 },
          },
          directives: [],
          loc: { start: 5062, end: 5079 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 5082, end: 5090 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5092, end: 5098 },
            },
            loc: { start: 5092, end: 5098 },
          },
          directives: [],
          loc: { start: 5082, end: 5098 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 5101, end: 5109 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5111, end: 5117 },
              },
              loc: { start: 5111, end: 5117 },
            },
            loc: { start: 5111, end: 5118 },
          },
          directives: [],
          loc: { start: 5101, end: 5118 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 5121, end: 5126 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5128, end: 5134 },
            },
            loc: { start: 5128, end: 5134 },
          },
          directives: [],
          loc: { start: 5121, end: 5134 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 5137, end: 5142 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5144, end: 5150 },
            },
            loc: { start: 5144, end: 5150 },
          },
          directives: [],
          loc: { start: 5137, end: 5150 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 5153, end: 5165 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5167, end: 5173 },
            },
            loc: { start: 5167, end: 5173 },
          },
          directives: [],
          loc: { start: 5153, end: 5173 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 5176, end: 5186 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5188, end: 5194 },
            },
            loc: { start: 5188, end: 5194 },
          },
          directives: [],
          loc: { start: 5176, end: 5194 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5197, end: 5204 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5206, end: 5212 },
            },
            loc: { start: 5206, end: 5212 },
          },
          directives: [],
          loc: { start: 5197, end: 5212 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 5215, end: 5225 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 5227, end: 5234 },
            },
            loc: { start: 5227, end: 5234 },
          },
          directives: [],
          loc: { start: 5215, end: 5234 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 5237, end: 5240 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5242, end: 5248 },
            },
            loc: { start: 5242, end: 5248 },
          },
          directives: [],
          loc: { start: 5237, end: 5248 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followers",
            loc: { start: 5251, end: 5260 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5263, end: 5265 },
              },
              loc: { start: 5263, end: 5265 },
            },
            loc: { start: 5262, end: 5266 },
          },
          directives: [],
          loc: { start: 5251, end: 5266 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "following",
            loc: { start: 5269, end: 5278 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5281, end: 5283 },
              },
              loc: { start: 5281, end: 5283 },
            },
            loc: { start: 5280, end: 5284 },
          },
          directives: [],
          loc: { start: 5269, end: 5284 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5287, end: 5296 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5298, end: 5302 },
            },
            loc: { start: 5298, end: 5302 },
          },
          directives: [],
          loc: { start: 5287, end: 5302 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 5305, end: 5314 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5316, end: 5320 },
            },
            loc: { start: 5316, end: 5320 },
          },
          directives: [],
          loc: { start: 5305, end: 5320 },
        },
      ],
      loc: { start: 5038, end: 5322 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UpdateUserInput",
        loc: { start: 5330, end: 5345 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 5350, end: 5358 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5360, end: 5366 },
            },
            loc: { start: 5360, end: 5366 },
          },
          directives: [],
          loc: { start: 5350, end: 5366 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 5369, end: 5377 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5379, end: 5385 },
            },
            loc: { start: 5379, end: 5385 },
          },
          directives: [],
          loc: { start: 5369, end: 5385 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 5388, end: 5397 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5399, end: 5405 },
            },
            loc: { start: 5399, end: 5405 },
          },
          directives: [],
          loc: { start: 5388, end: 5405 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 5408, end: 5416 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5418, end: 5424 },
            },
            loc: { start: 5418, end: 5424 },
          },
          directives: [],
          loc: { start: 5408, end: 5424 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 5427, end: 5432 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5434, end: 5440 },
            },
            loc: { start: 5434, end: 5440 },
          },
          directives: [],
          loc: { start: 5427, end: 5440 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 5443, end: 5448 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5450, end: 5456 },
            },
            loc: { start: 5450, end: 5456 },
          },
          directives: [],
          loc: { start: 5443, end: 5456 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 5459, end: 5471 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 5473, end: 5479 },
            },
            loc: { start: 5473, end: 5479 },
          },
          directives: [],
          loc: { start: 5459, end: 5479 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 5482, end: 5492 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 5494, end: 5500 },
            },
            loc: { start: 5494, end: 5500 },
          },
          directives: [],
          loc: { start: 5482, end: 5500 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5503, end: 5510 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5512, end: 5518 },
            },
            loc: { start: 5512, end: 5518 },
          },
          directives: [],
          loc: { start: 5503, end: 5518 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 5521, end: 5524 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5526, end: 5532 },
            },
            loc: { start: 5526, end: 5532 },
          },
          directives: [],
          loc: { start: 5521, end: 5532 },
        },
      ],
      loc: { start: 5324, end: 5534 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wallet", loc: { start: 5540, end: 5546 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 5551, end: 5557 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 5559, end: 5561 },
            },
            loc: { start: 5559, end: 5561 },
          },
          directives: [],
          loc: { start: 5551, end: 5561 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5564, end: 5571 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5573, end: 5579 },
            },
            loc: { start: 5573, end: 5579 },
          },
          directives: [],
          loc: { start: 5564, end: 5579 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 5582, end: 5592 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5594, end: 5600 },
            },
            loc: { start: 5594, end: 5600 },
          },
          directives: [],
          loc: { start: 5582, end: 5600 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 5603, end: 5612 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5614, end: 5620 },
            },
            loc: { start: 5614, end: 5620 },
          },
          directives: [],
          loc: { start: 5603, end: 5620 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 5623, end: 5631 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5633, end: 5639 },
            },
            loc: { start: 5633, end: 5639 },
          },
          directives: [],
          loc: { start: 5623, end: 5639 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 5642, end: 5649 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5651, end: 5657 },
            },
            loc: { start: 5651, end: 5657 },
          },
          directives: [],
          loc: { start: 5642, end: 5657 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5660, end: 5669 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5671, end: 5675 },
            },
            loc: { start: 5671, end: 5675 },
          },
          directives: [],
          loc: { start: 5660, end: 5675 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 5678, end: 5687 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5689, end: 5693 },
            },
            loc: { start: 5689, end: 5693 },
          },
          directives: [],
          loc: { start: 5678, end: 5693 },
        },
      ],
      loc: { start: 5535, end: 5695 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WalletInput",
        loc: { start: 5703, end: 5714 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5719, end: 5726 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5728, end: 5734 },
            },
            loc: { start: 5728, end: 5734 },
          },
          directives: [],
          loc: { start: 5719, end: 5734 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 5737, end: 5747 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5749, end: 5755 },
            },
            loc: { start: 5749, end: 5755 },
          },
          directives: [],
          loc: { start: 5737, end: 5755 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 5758, end: 5767 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5769, end: 5775 },
            },
            loc: { start: 5769, end: 5775 },
          },
          directives: [],
          loc: { start: 5758, end: 5775 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 5778, end: 5786 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5788, end: 5794 },
            },
            loc: { start: 5788, end: 5794 },
          },
          directives: [],
          loc: { start: 5778, end: 5794 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 5797, end: 5804 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5806, end: 5812 },
            },
            loc: { start: 5806, end: 5812 },
          },
          directives: [],
          loc: { start: 5797, end: 5812 },
        },
      ],
      loc: { start: 5697, end: 5814 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ChartData",
        loc: { start: 5821, end: 5830 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "labels",
            loc: { start: 5835, end: 5841 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5844, end: 5850 },
              },
              loc: { start: 5844, end: 5850 },
            },
            loc: { start: 5843, end: 5851 },
          },
          directives: [],
          loc: { start: 5835, end: 5851 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "datasets",
            loc: { start: 5854, end: 5862 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Dataset",
                loc: { start: 5865, end: 5872 },
              },
              loc: { start: 5865, end: 5872 },
            },
            loc: { start: 5864, end: 5873 },
          },
          directives: [],
          loc: { start: 5854, end: 5873 },
        },
      ],
      loc: { start: 5816, end: 5875 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Dataset", loc: { start: 5882, end: 5889 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "data",
            loc: { start: 5894, end: 5898 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 5901, end: 5906 },
              },
              loc: { start: 5901, end: 5906 },
            },
            loc: { start: 5900, end: 5907 },
          },
          directives: [],
          loc: { start: 5894, end: 5907 },
        },
      ],
      loc: { start: 5877, end: 5909 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CoinData",
        loc: { start: 5916, end: 5924 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5929, end: 5933 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5935, end: 5941 },
            },
            loc: { start: 5935, end: 5941 },
          },
          directives: [],
          loc: { start: 5929, end: 5941 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "symbol",
            loc: { start: 5944, end: 5950 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5952, end: 5958 },
            },
            loc: { start: 5952, end: 5958 },
          },
          directives: [],
          loc: { start: 5944, end: 5958 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 5961, end: 5966 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5968, end: 5974 },
            },
            loc: { start: 5968, end: 5974 },
          },
          directives: [],
          loc: { start: 5961, end: 5974 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 5977, end: 5982 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 5984, end: 5989 },
            },
            loc: { start: 5984, end: 5989 },
          },
          directives: [],
          loc: { start: 5977, end: 5989 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 5992, end: 5998 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6000, end: 6005 },
            },
            loc: { start: 6000, end: 6005 },
          },
          directives: [],
          loc: { start: 5992, end: 6005 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "changePercentage",
            loc: { start: 6008, end: 6024 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6026, end: 6031 },
            },
            loc: { start: 6026, end: 6031 },
          },
          directives: [],
          loc: { start: 6008, end: 6031 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "chartData",
            loc: { start: 6034, end: 6043 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ChartData",
              loc: { start: 6045, end: 6054 },
            },
            loc: { start: 6045, end: 6054 },
          },
          directives: [],
          loc: { start: 6034, end: 6054 },
        },
      ],
      loc: { start: 5911, end: 6056 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 6063, end: 6068 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getWallet",
            loc: { start: 6073, end: 6082 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Wallet",
              loc: { start: 6084, end: 6090 },
            },
            loc: { start: 6084, end: 6090 },
          },
          directives: [],
          loc: { start: 6073, end: 6090 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCoinData",
            loc: { start: 6093, end: 6104 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "currency",
                loc: { start: 6105, end: 6113 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 6115, end: 6121 },
                  },
                  loc: { start: 6115, end: 6121 },
                },
                loc: { start: 6115, end: 6122 },
              },
              directives: [],
              loc: { start: 6105, end: 6122 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "days",
                loc: { start: 6124, end: 6128 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 6130, end: 6133 },
                  },
                  loc: { start: 6130, end: 6133 },
                },
                loc: { start: 6130, end: 6134 },
              },
              directives: [],
              loc: { start: 6124, end: 6134 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CoinData",
                loc: { start: 6137, end: 6145 },
              },
              loc: { start: 6137, end: 6145 },
            },
            loc: { start: 6137, end: 6146 },
          },
          directives: [],
          loc: { start: 6093, end: 6146 },
        },
      ],
      loc: { start: 6058, end: 6148 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransferFundsResponse",
        loc: { start: 6155, end: 6176 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 6181, end: 6188 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6190, end: 6196 },
            },
            loc: { start: 6190, end: 6196 },
          },
          directives: [],
          loc: { start: 6181, end: 6196 },
        },
      ],
      loc: { start: 6150, end: 6198 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransferFundsInput",
        loc: { start: 6206, end: 6224 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 6229, end: 6235 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6237, end: 6243 },
              },
              loc: { start: 6237, end: 6243 },
            },
            loc: { start: 6237, end: 6244 },
          },
          directives: [],
          loc: { start: 6229, end: 6244 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 6247, end: 6255 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6257, end: 6263 },
              },
              loc: { start: 6257, end: 6263 },
            },
            loc: { start: 6257, end: 6264 },
          },
          directives: [],
          loc: { start: 6247, end: 6264 },
        },
      ],
      loc: { start: 6200, end: 6266 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WithdrawFundsResponse",
        loc: { start: 6273, end: 6294 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 6299, end: 6306 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6308, end: 6314 },
            },
            loc: { start: 6308, end: 6314 },
          },
          directives: [],
          loc: { start: 6299, end: 6314 },
        },
      ],
      loc: { start: 6268, end: 6316 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WithdrawFundsInput",
        loc: { start: 6324, end: 6342 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 6347, end: 6353 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6355, end: 6361 },
              },
              loc: { start: 6355, end: 6361 },
            },
            loc: { start: 6355, end: 6362 },
          },
          directives: [],
          loc: { start: 6347, end: 6362 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 6365, end: 6372 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6374, end: 6380 },
              },
              loc: { start: 6374, end: 6380 },
            },
            loc: { start: 6374, end: 6381 },
          },
          directives: [],
          loc: { start: 6365, end: 6381 },
        },
      ],
      loc: { start: 6318, end: 6383 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 6390, end: 6398 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createWallet",
            loc: { start: 6403, end: 6415 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 6416, end: 6422 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 6424, end: 6435 },
                  },
                  loc: { start: 6424, end: 6435 },
                },
                loc: { start: 6424, end: 6436 },
              },
              directives: [],
              loc: { start: 6416, end: 6436 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6439, end: 6445 },
            },
            loc: { start: 6439, end: 6445 },
          },
          directives: [],
          loc: { start: 6403, end: 6445 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateWallet",
            loc: { start: 6448, end: 6460 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 6461, end: 6463 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 6465, end: 6467 },
                  },
                  loc: { start: 6465, end: 6467 },
                },
                loc: { start: 6465, end: 6468 },
              },
              directives: [],
              loc: { start: 6461, end: 6468 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 6470, end: 6476 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 6478, end: 6489 },
                  },
                  loc: { start: 6478, end: 6489 },
                },
                loc: { start: 6478, end: 6490 },
              },
              directives: [],
              loc: { start: 6470, end: 6490 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6493, end: 6499 },
            },
            loc: { start: 6493, end: 6499 },
          },
          directives: [],
          loc: { start: 6448, end: 6499 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "transferFunds",
            loc: { start: 6502, end: 6515 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "transferFunds",
                loc: { start: 6516, end: 6529 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "TransferFundsInput",
                    loc: { start: 6531, end: 6549 },
                  },
                  loc: { start: 6531, end: 6549 },
                },
                loc: { start: 6531, end: 6550 },
              },
              directives: [],
              loc: { start: 6516, end: 6550 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "TransferFundsResponse",
              loc: { start: 6553, end: 6574 },
            },
            loc: { start: 6553, end: 6574 },
          },
          directives: [],
          loc: { start: 6502, end: 6574 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "withdrawFunds",
            loc: { start: 6577, end: 6590 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "withdrawFunds",
                loc: { start: 6591, end: 6604 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WithdrawFundsInput",
                    loc: { start: 6606, end: 6624 },
                  },
                  loc: { start: 6606, end: 6624 },
                },
                loc: { start: 6606, end: 6625 },
              },
              directives: [],
              loc: { start: 6591, end: 6625 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "WithdrawFundsResponse",
              loc: { start: 6628, end: 6649 },
            },
            loc: { start: 6628, end: 6649 },
          },
          directives: [],
          loc: { start: 6577, end: 6649 },
        },
      ],
      loc: { start: 6385, end: 6651 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 6660, end: 6666 } },
      directives: [],
      loc: { start: 6653, end: 6666 },
    },
  ],
  loc: { start: 0, end: 6667 },
} as unknown as DocumentNode;
