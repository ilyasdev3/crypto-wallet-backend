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
      name: {
        kind: "Name",
        value: "Pagination",
        loc: { start: 3729, end: 3739 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalItems",
            loc: { start: 3744, end: 3754 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3756, end: 3759 },
            },
            loc: { start: 3756, end: 3759 },
          },
          directives: [],
          loc: { start: 3744, end: 3759 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalPages",
            loc: { start: 3762, end: 3772 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3774, end: 3777 },
            },
            loc: { start: 3774, end: 3777 },
          },
          directives: [],
          loc: { start: 3762, end: 3777 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "currentPage",
            loc: { start: 3780, end: 3791 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3793, end: 3796 },
            },
            loc: { start: 3793, end: 3796 },
          },
          directives: [],
          loc: { start: 3780, end: 3796 },
        },
      ],
      loc: { start: 3724, end: 3798 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransactionConnection",
        loc: { start: 3805, end: 3826 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "transactions",
            loc: { start: 3831, end: 3843 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Transaction",
                loc: { start: 3846, end: 3857 },
              },
              loc: { start: 3846, end: 3857 },
            },
            loc: { start: 3845, end: 3858 },
          },
          directives: [],
          loc: { start: 3831, end: 3858 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pageInfo",
            loc: { start: 3861, end: 3869 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Pagination",
              loc: { start: 3871, end: 3881 },
            },
            loc: { start: 3871, end: 3881 },
          },
          directives: [],
          loc: { start: 3861, end: 3881 },
        },
      ],
      loc: { start: 3800, end: 3883 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PaginationInput",
        loc: { start: 3891, end: 3906 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "limit",
            loc: { start: 3911, end: 3916 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3918, end: 3921 },
            },
            loc: { start: 3918, end: 3921 },
          },
          directives: [],
          loc: { start: 3911, end: 3921 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "page",
            loc: { start: 3924, end: 3928 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3930, end: 3933 },
            },
            loc: { start: 3930, end: 3933 },
          },
          directives: [],
          loc: { start: 3924, end: 3933 },
        },
      ],
      loc: { start: 3885, end: 3935 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 3942, end: 3947 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getTransactions",
            loc: { start: 3952, end: 3967 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 3968, end: 3973 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "PaginationInput",
                  loc: { start: 3975, end: 3990 },
                },
                loc: { start: 3975, end: 3990 },
              },
              directives: [],
              loc: { start: 3968, end: 3990 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "TransactionConnection",
              loc: { start: 3993, end: 4014 },
            },
            loc: { start: 3993, end: 4014 },
          },
          directives: [],
          loc: { start: 3952, end: 4014 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserTransactions",
            loc: { start: 4017, end: 4036 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 4037, end: 4042 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "UserTransactionInput",
                  loc: { start: 4044, end: 4064 },
                },
                loc: { start: 4044, end: 4064 },
              },
              directives: [],
              loc: { start: 4037, end: 4064 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "pagination",
                loc: { start: 4066, end: 4076 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "PaginationInput",
                  loc: { start: 4078, end: 4093 },
                },
                loc: { start: 4078, end: 4093 },
              },
              directives: [],
              loc: { start: 4066, end: 4093 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "TransactionConnection",
              loc: { start: 4096, end: 4117 },
            },
            loc: { start: 4096, end: 4117 },
          },
          directives: [],
          loc: { start: 4017, end: 4117 },
        },
      ],
      loc: { start: 3937, end: 4119 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 4126, end: 4134 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createTransaction",
            loc: { start: 4139, end: 4156 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "transaction",
                loc: { start: 4157, end: 4168 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "TransactionInput",
                    loc: { start: 4170, end: 4186 },
                  },
                  loc: { start: 4170, end: 4186 },
                },
                loc: { start: 4170, end: 4187 },
              },
              directives: [],
              loc: { start: 4157, end: 4187 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Transaction",
              loc: { start: 4190, end: 4201 },
            },
            loc: { start: 4190, end: 4201 },
          },
          directives: [],
          loc: { start: 4139, end: 4201 },
        },
      ],
      loc: { start: 4121, end: 4203 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransactionInput",
        loc: { start: 4211, end: 4227 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 4232, end: 4238 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 4240, end: 4243 },
            },
            loc: { start: 4240, end: 4243 },
          },
          directives: [],
          loc: { start: 4232, end: 4243 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4246, end: 4253 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4255, end: 4261 },
            },
            loc: { start: 4255, end: 4261 },
          },
          directives: [],
          loc: { start: 4246, end: 4261 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 4264, end: 4270 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4272, end: 4278 },
            },
            loc: { start: 4272, end: 4278 },
          },
          directives: [],
          loc: { start: 4264, end: 4278 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "senderWalletId",
            loc: { start: 4281, end: 4295 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4297, end: 4299 },
            },
            loc: { start: 4297, end: 4299 },
          },
          directives: [],
          loc: { start: 4281, end: 4299 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "receiverWalletId",
            loc: { start: 4302, end: 4318 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4320, end: 4322 },
            },
            loc: { start: 4320, end: 4322 },
          },
          directives: [],
          loc: { start: 4302, end: 4322 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "contractId",
            loc: { start: 4325, end: 4335 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4337, end: 4339 },
            },
            loc: { start: 4337, end: 4339 },
          },
          directives: [],
          loc: { start: 4325, end: 4339 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "transactionHash",
            loc: { start: 4342, end: 4357 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4359, end: 4365 },
            },
            loc: { start: 4359, end: 4365 },
          },
          directives: [],
          loc: { start: 4342, end: 4365 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "ownerId",
            loc: { start: 4368, end: 4375 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4377, end: 4383 },
            },
            loc: { start: 4377, end: 4383 },
          },
          directives: [],
          loc: { start: 4368, end: 4383 },
        },
      ],
      loc: { start: 4205, end: 4385 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 4391, end: 4396 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUser",
            loc: { start: 4401, end: 4408 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4409, end: 4411 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4413, end: 4415 },
                  },
                  loc: { start: 4413, end: 4415 },
                },
                loc: { start: 4413, end: 4416 },
              },
              directives: [],
              loc: { start: 4409, end: 4416 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4419, end: 4423 },
            },
            loc: { start: 4419, end: 4423 },
          },
          directives: [],
          loc: { start: 4401, end: 4423 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 4426, end: 4428 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4430, end: 4434 },
            },
            loc: { start: 4430, end: 4434 },
          },
          directives: [],
          loc: { start: 4426, end: 4434 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserFollowing",
            loc: { start: 4437, end: 4453 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4454, end: 4456 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4458, end: 4460 },
                  },
                  loc: { start: 4458, end: 4460 },
                },
                loc: { start: 4458, end: 4461 },
              },
              directives: [],
              loc: { start: 4454, end: 4461 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4465, end: 4469 },
              },
              loc: { start: 4465, end: 4469 },
            },
            loc: { start: 4464, end: 4470 },
          },
          directives: [],
          loc: { start: 4437, end: 4470 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserFollowers",
            loc: { start: 4473, end: 4489 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4490, end: 4492 },
              },
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
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4501, end: 4505 },
              },
              loc: { start: 4501, end: 4505 },
            },
            loc: { start: 4500, end: 4506 },
          },
          directives: [],
          loc: { start: 4473, end: 4506 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserWithName",
            loc: { start: 4509, end: 4524 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 4525, end: 4533 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4535, end: 4541 },
                  },
                  loc: { start: 4535, end: 4541 },
                },
                loc: { start: 4535, end: 4542 },
              },
              directives: [],
              loc: { start: 4525, end: 4542 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "getUserWithNameResponse",
              loc: { start: 4545, end: 4568 },
            },
            loc: { start: 4545, end: 4568 },
          },
          directives: [],
          loc: { start: 4509, end: 4568 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserById",
            loc: { start: 4571, end: 4582 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4583, end: 4585 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4587, end: 4589 },
                  },
                  loc: { start: 4587, end: 4589 },
                },
                loc: { start: 4587, end: 4590 },
              },
              directives: [],
              loc: { start: 4583, end: 4590 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4593, end: 4597 },
            },
            loc: { start: 4593, end: 4597 },
          },
          directives: [],
          loc: { start: 4571, end: 4597 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getTopUsers",
            loc: { start: 4600, end: 4611 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 4612, end: 4617 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 4619, end: 4622 },
                },
                loc: { start: 4619, end: 4622 },
              },
              directives: [],
              loc: { start: 4612, end: 4622 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4626, end: 4630 },
              },
              loc: { start: 4626, end: 4630 },
            },
            loc: { start: 4625, end: 4631 },
          },
          directives: [],
          loc: { start: 4600, end: 4631 },
        },
      ],
      loc: { start: 4386, end: 4633 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "getUserWithNameResponse",
        loc: { start: 4640, end: 4663 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4668, end: 4672 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 4674, end: 4678 },
            },
            loc: { start: 4674, end: 4678 },
          },
          directives: [],
          loc: { start: 4668, end: 4678 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 4681, end: 4688 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4690, end: 4696 },
            },
            loc: { start: 4690, end: 4696 },
          },
          directives: [],
          loc: { start: 4681, end: 4696 },
        },
      ],
      loc: { start: 4635, end: 4698 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateUserResponse",
        loc: { start: 4705, end: 4723 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 4728, end: 4735 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4737, end: 4743 },
            },
            loc: { start: 4737, end: 4743 },
          },
          directives: [],
          loc: { start: 4728, end: 4743 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4746, end: 4751 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4753, end: 4759 },
            },
            loc: { start: 4753, end: 4759 },
          },
          directives: [],
          loc: { start: 4746, end: 4759 },
        },
      ],
      loc: { start: 4700, end: 4761 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4768, end: 4781 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 4786, end: 4793 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4795, end: 4801 },
            },
            loc: { start: 4795, end: 4801 },
          },
          directives: [],
          loc: { start: 4786, end: 4801 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4804, end: 4809 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4811, end: 4817 },
            },
            loc: { start: 4811, end: 4817 },
          },
          directives: [],
          loc: { start: 4804, end: 4817 },
        },
      ],
      loc: { start: 4763, end: 4819 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 4826, end: 4834 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 4839, end: 4849 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4850, end: 4854 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 4856, end: 4865 },
                  },
                  loc: { start: 4856, end: 4865 },
                },
                loc: { start: 4856, end: 4866 },
              },
              directives: [],
              loc: { start: 4850, end: 4866 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateUserResponse",
              loc: { start: 4869, end: 4887 },
            },
            loc: { start: 4869, end: 4887 },
          },
          directives: [],
          loc: { start: 4839, end: 4887 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginUser",
            loc: { start: 4890, end: 4899 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4900, end: 4904 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 4906, end: 4915 },
                  },
                  loc: { start: 4906, end: 4915 },
                },
                loc: { start: 4906, end: 4916 },
              },
              directives: [],
              loc: { start: 4900, end: 4916 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "LoginResponse",
              loc: { start: 4919, end: 4932 },
            },
            loc: { start: 4919, end: 4932 },
          },
          directives: [],
          loc: { start: 4890, end: 4932 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 4935, end: 4945 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 4946, end: 4950 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UpdateUserInput",
                    loc: { start: 4952, end: 4967 },
                  },
                  loc: { start: 4952, end: 4967 },
                },
                loc: { start: 4952, end: 4968 },
              },
              directives: [],
              loc: { start: 4946, end: 4968 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4971, end: 4977 },
              },
              loc: { start: 4971, end: 4977 },
            },
            loc: { start: 4971, end: 4978 },
          },
          directives: [],
          loc: { start: 4935, end: 4978 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkUsername",
            loc: { start: 4981, end: 4994 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 4995, end: 5003 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 5005, end: 5011 },
                  },
                  loc: { start: 5005, end: 5011 },
                },
                loc: { start: 5005, end: 5012 },
              },
              directives: [],
              loc: { start: 4995, end: 5012 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5015, end: 5021 },
            },
            loc: { start: 5015, end: 5021 },
          },
          directives: [],
          loc: { start: 4981, end: 5021 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 5024, end: 5034 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 5035, end: 5037 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 5039, end: 5041 },
                  },
                  loc: { start: 5039, end: 5041 },
                },
                loc: { start: 5039, end: 5042 },
              },
              directives: [],
              loc: { start: 5035, end: 5042 },
            },
          ],
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
          loc: { start: 5024, end: 5051 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followUnfollowUser",
            loc: { start: 5054, end: 5072 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 5073, end: 5079 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 5081, end: 5083 },
                  },
                  loc: { start: 5081, end: 5083 },
                },
                loc: { start: 5081, end: 5084 },
              },
              directives: [],
              loc: { start: 5073, end: 5084 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5087, end: 5093 },
            },
            loc: { start: 5087, end: 5093 },
          },
          directives: [],
          loc: { start: 5054, end: 5093 },
        },
      ],
      loc: { start: 4821, end: 5095 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UserInput",
        loc: { start: 5103, end: 5112 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 5117, end: 5125 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5127, end: 5133 },
              },
              loc: { start: 5127, end: 5133 },
            },
            loc: { start: 5127, end: 5134 },
          },
          directives: [],
          loc: { start: 5117, end: 5134 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 5137, end: 5145 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5147, end: 5153 },
              },
              loc: { start: 5147, end: 5153 },
            },
            loc: { start: 5147, end: 5154 },
          },
          directives: [],
          loc: { start: 5137, end: 5154 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 5157, end: 5166 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5168, end: 5174 },
            },
            loc: { start: 5168, end: 5174 },
          },
          directives: [],
          loc: { start: 5157, end: 5174 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 5177, end: 5185 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5187, end: 5193 },
            },
            loc: { start: 5187, end: 5193 },
          },
          directives: [],
          loc: { start: 5177, end: 5193 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 5196, end: 5201 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5203, end: 5209 },
            },
            loc: { start: 5203, end: 5209 },
          },
          directives: [],
          loc: { start: 5196, end: 5209 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 5212, end: 5217 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5219, end: 5225 },
            },
            loc: { start: 5219, end: 5225 },
          },
          directives: [],
          loc: { start: 5212, end: 5225 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 5228, end: 5240 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 5242, end: 5248 },
            },
            loc: { start: 5242, end: 5248 },
          },
          directives: [],
          loc: { start: 5228, end: 5248 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 5251, end: 5261 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 5263, end: 5269 },
            },
            loc: { start: 5263, end: 5269 },
          },
          directives: [],
          loc: { start: 5251, end: 5269 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5272, end: 5279 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5281, end: 5287 },
            },
            loc: { start: 5281, end: 5287 },
          },
          directives: [],
          loc: { start: 5272, end: 5287 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 5290, end: 5293 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5295, end: 5301 },
            },
            loc: { start: 5295, end: 5301 },
          },
          directives: [],
          loc: { start: 5290, end: 5301 },
        },
      ],
      loc: { start: 5097, end: 5303 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 5312, end: 5318 } },
      directives: [],
      loc: { start: 5305, end: 5318 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 5325, end: 5329 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5334, end: 5336 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5338, end: 5340 },
              },
              loc: { start: 5338, end: 5340 },
            },
            loc: { start: 5338, end: 5341 },
          },
          directives: [],
          loc: { start: 5334, end: 5341 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 5344, end: 5353 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5355, end: 5361 },
            },
            loc: { start: 5355, end: 5361 },
          },
          directives: [],
          loc: { start: 5344, end: 5361 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 5364, end: 5372 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5374, end: 5380 },
            },
            loc: { start: 5374, end: 5380 },
          },
          directives: [],
          loc: { start: 5364, end: 5380 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 5383, end: 5391 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5393, end: 5399 },
              },
              loc: { start: 5393, end: 5399 },
            },
            loc: { start: 5393, end: 5400 },
          },
          directives: [],
          loc: { start: 5383, end: 5400 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 5403, end: 5408 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5410, end: 5416 },
            },
            loc: { start: 5410, end: 5416 },
          },
          directives: [],
          loc: { start: 5403, end: 5416 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 5419, end: 5424 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5426, end: 5432 },
            },
            loc: { start: 5426, end: 5432 },
          },
          directives: [],
          loc: { start: 5419, end: 5432 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 5435, end: 5447 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5449, end: 5455 },
            },
            loc: { start: 5449, end: 5455 },
          },
          directives: [],
          loc: { start: 5435, end: 5455 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 5458, end: 5468 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5470, end: 5476 },
            },
            loc: { start: 5470, end: 5476 },
          },
          directives: [],
          loc: { start: 5458, end: 5476 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5479, end: 5486 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5488, end: 5494 },
            },
            loc: { start: 5488, end: 5494 },
          },
          directives: [],
          loc: { start: 5479, end: 5494 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 5497, end: 5507 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 5509, end: 5516 },
            },
            loc: { start: 5509, end: 5516 },
          },
          directives: [],
          loc: { start: 5497, end: 5516 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 5519, end: 5522 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5524, end: 5530 },
            },
            loc: { start: 5524, end: 5530 },
          },
          directives: [],
          loc: { start: 5519, end: 5530 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followers",
            loc: { start: 5533, end: 5542 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5545, end: 5547 },
              },
              loc: { start: 5545, end: 5547 },
            },
            loc: { start: 5544, end: 5548 },
          },
          directives: [],
          loc: { start: 5533, end: 5548 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "following",
            loc: { start: 5551, end: 5560 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5563, end: 5565 },
              },
              loc: { start: 5563, end: 5565 },
            },
            loc: { start: 5562, end: 5566 },
          },
          directives: [],
          loc: { start: 5551, end: 5566 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5569, end: 5578 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5580, end: 5584 },
            },
            loc: { start: 5580, end: 5584 },
          },
          directives: [],
          loc: { start: 5569, end: 5584 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 5587, end: 5596 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5598, end: 5602 },
            },
            loc: { start: 5598, end: 5602 },
          },
          directives: [],
          loc: { start: 5587, end: 5602 },
        },
      ],
      loc: { start: 5320, end: 5604 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UpdateUserInput",
        loc: { start: 5612, end: 5627 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 5632, end: 5640 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5642, end: 5648 },
            },
            loc: { start: 5642, end: 5648 },
          },
          directives: [],
          loc: { start: 5632, end: 5648 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 5651, end: 5659 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5661, end: 5667 },
            },
            loc: { start: 5661, end: 5667 },
          },
          directives: [],
          loc: { start: 5651, end: 5667 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 5670, end: 5679 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5681, end: 5687 },
            },
            loc: { start: 5681, end: 5687 },
          },
          directives: [],
          loc: { start: 5670, end: 5687 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 5690, end: 5698 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5700, end: 5706 },
            },
            loc: { start: 5700, end: 5706 },
          },
          directives: [],
          loc: { start: 5690, end: 5706 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 5709, end: 5714 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5716, end: 5722 },
            },
            loc: { start: 5716, end: 5722 },
          },
          directives: [],
          loc: { start: 5709, end: 5722 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 5725, end: 5730 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5732, end: 5738 },
            },
            loc: { start: 5732, end: 5738 },
          },
          directives: [],
          loc: { start: 5725, end: 5738 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 5741, end: 5753 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 5755, end: 5761 },
            },
            loc: { start: 5755, end: 5761 },
          },
          directives: [],
          loc: { start: 5741, end: 5761 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 5764, end: 5774 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 5776, end: 5782 },
            },
            loc: { start: 5776, end: 5782 },
          },
          directives: [],
          loc: { start: 5764, end: 5782 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5785, end: 5792 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5794, end: 5800 },
            },
            loc: { start: 5794, end: 5800 },
          },
          directives: [],
          loc: { start: 5785, end: 5800 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 5803, end: 5806 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5808, end: 5814 },
            },
            loc: { start: 5808, end: 5814 },
          },
          directives: [],
          loc: { start: 5803, end: 5814 },
        },
      ],
      loc: { start: 5606, end: 5816 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wallet", loc: { start: 5822, end: 5828 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 5833, end: 5839 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 5841, end: 5843 },
            },
            loc: { start: 5841, end: 5843 },
          },
          directives: [],
          loc: { start: 5833, end: 5843 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 5846, end: 5853 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5855, end: 5861 },
            },
            loc: { start: 5855, end: 5861 },
          },
          directives: [],
          loc: { start: 5846, end: 5861 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 5864, end: 5874 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5876, end: 5882 },
            },
            loc: { start: 5876, end: 5882 },
          },
          directives: [],
          loc: { start: 5864, end: 5882 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 5885, end: 5894 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5896, end: 5902 },
            },
            loc: { start: 5896, end: 5902 },
          },
          directives: [],
          loc: { start: 5885, end: 5902 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 5905, end: 5913 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5915, end: 5921 },
            },
            loc: { start: 5915, end: 5921 },
          },
          directives: [],
          loc: { start: 5905, end: 5921 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 5924, end: 5931 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5933, end: 5939 },
            },
            loc: { start: 5933, end: 5939 },
          },
          directives: [],
          loc: { start: 5924, end: 5939 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5942, end: 5951 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5953, end: 5957 },
            },
            loc: { start: 5953, end: 5957 },
          },
          directives: [],
          loc: { start: 5942, end: 5957 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 5960, end: 5969 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 5971, end: 5975 },
            },
            loc: { start: 5971, end: 5975 },
          },
          directives: [],
          loc: { start: 5960, end: 5975 },
        },
      ],
      loc: { start: 5817, end: 5977 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WalletInput",
        loc: { start: 5985, end: 5996 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 6001, end: 6008 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6010, end: 6016 },
            },
            loc: { start: 6010, end: 6016 },
          },
          directives: [],
          loc: { start: 6001, end: 6016 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 6019, end: 6029 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6031, end: 6037 },
            },
            loc: { start: 6031, end: 6037 },
          },
          directives: [],
          loc: { start: 6019, end: 6037 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 6040, end: 6049 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6051, end: 6057 },
            },
            loc: { start: 6051, end: 6057 },
          },
          directives: [],
          loc: { start: 6040, end: 6057 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 6060, end: 6068 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6070, end: 6076 },
            },
            loc: { start: 6070, end: 6076 },
          },
          directives: [],
          loc: { start: 6060, end: 6076 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 6079, end: 6086 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6088, end: 6094 },
            },
            loc: { start: 6088, end: 6094 },
          },
          directives: [],
          loc: { start: 6079, end: 6094 },
        },
      ],
      loc: { start: 5979, end: 6096 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ChartData",
        loc: { start: 6103, end: 6112 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "labels",
            loc: { start: 6117, end: 6123 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6126, end: 6132 },
              },
              loc: { start: 6126, end: 6132 },
            },
            loc: { start: 6125, end: 6133 },
          },
          directives: [],
          loc: { start: 6117, end: 6133 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "datasets",
            loc: { start: 6136, end: 6144 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Dataset",
                loc: { start: 6147, end: 6154 },
              },
              loc: { start: 6147, end: 6154 },
            },
            loc: { start: 6146, end: 6155 },
          },
          directives: [],
          loc: { start: 6136, end: 6155 },
        },
      ],
      loc: { start: 6098, end: 6157 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Dataset", loc: { start: 6164, end: 6171 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "data",
            loc: { start: 6176, end: 6180 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 6183, end: 6188 },
              },
              loc: { start: 6183, end: 6188 },
            },
            loc: { start: 6182, end: 6189 },
          },
          directives: [],
          loc: { start: 6176, end: 6189 },
        },
      ],
      loc: { start: 6159, end: 6191 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CoinData",
        loc: { start: 6198, end: 6206 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 6211, end: 6215 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6217, end: 6223 },
            },
            loc: { start: 6217, end: 6223 },
          },
          directives: [],
          loc: { start: 6211, end: 6223 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "symbol",
            loc: { start: 6226, end: 6232 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6234, end: 6240 },
            },
            loc: { start: 6234, end: 6240 },
          },
          directives: [],
          loc: { start: 6226, end: 6240 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 6243, end: 6248 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6250, end: 6256 },
            },
            loc: { start: 6250, end: 6256 },
          },
          directives: [],
          loc: { start: 6243, end: 6256 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 6259, end: 6264 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6266, end: 6271 },
            },
            loc: { start: 6266, end: 6271 },
          },
          directives: [],
          loc: { start: 6259, end: 6271 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 6274, end: 6280 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6282, end: 6287 },
            },
            loc: { start: 6282, end: 6287 },
          },
          directives: [],
          loc: { start: 6274, end: 6287 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "changePercentage",
            loc: { start: 6290, end: 6306 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6308, end: 6313 },
            },
            loc: { start: 6308, end: 6313 },
          },
          directives: [],
          loc: { start: 6290, end: 6313 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "chartData",
            loc: { start: 6316, end: 6325 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ChartData",
              loc: { start: 6327, end: 6336 },
            },
            loc: { start: 6327, end: 6336 },
          },
          directives: [],
          loc: { start: 6316, end: 6336 },
        },
      ],
      loc: { start: 6193, end: 6338 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 6345, end: 6350 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getWallet",
            loc: { start: 6355, end: 6364 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Wallet",
              loc: { start: 6366, end: 6372 },
            },
            loc: { start: 6366, end: 6372 },
          },
          directives: [],
          loc: { start: 6355, end: 6372 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCoinData",
            loc: { start: 6375, end: 6386 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "currency",
                loc: { start: 6387, end: 6395 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 6397, end: 6403 },
                  },
                  loc: { start: 6397, end: 6403 },
                },
                loc: { start: 6397, end: 6404 },
              },
              directives: [],
              loc: { start: 6387, end: 6404 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "days",
                loc: { start: 6406, end: 6410 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 6412, end: 6415 },
                  },
                  loc: { start: 6412, end: 6415 },
                },
                loc: { start: 6412, end: 6416 },
              },
              directives: [],
              loc: { start: 6406, end: 6416 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CoinData",
                loc: { start: 6419, end: 6427 },
              },
              loc: { start: 6419, end: 6427 },
            },
            loc: { start: 6419, end: 6428 },
          },
          directives: [],
          loc: { start: 6375, end: 6428 },
        },
      ],
      loc: { start: 6340, end: 6430 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransferFundsResponse",
        loc: { start: 6437, end: 6458 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 6463, end: 6470 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6472, end: 6478 },
            },
            loc: { start: 6472, end: 6478 },
          },
          directives: [],
          loc: { start: 6463, end: 6478 },
        },
      ],
      loc: { start: 6432, end: 6480 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "TransferFundsInput",
        loc: { start: 6488, end: 6506 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 6511, end: 6517 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6519, end: 6525 },
              },
              loc: { start: 6519, end: 6525 },
            },
            loc: { start: 6519, end: 6526 },
          },
          directives: [],
          loc: { start: 6511, end: 6526 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 6529, end: 6537 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6539, end: 6545 },
              },
              loc: { start: 6539, end: 6545 },
            },
            loc: { start: 6539, end: 6546 },
          },
          directives: [],
          loc: { start: 6529, end: 6546 },
        },
      ],
      loc: { start: 6482, end: 6548 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WithdrawFundsResponse",
        loc: { start: 6555, end: 6576 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 6581, end: 6588 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6590, end: 6596 },
            },
            loc: { start: 6590, end: 6596 },
          },
          directives: [],
          loc: { start: 6581, end: 6596 },
        },
      ],
      loc: { start: 6550, end: 6598 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WithdrawFundsInput",
        loc: { start: 6606, end: 6624 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 6629, end: 6635 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6637, end: 6643 },
              },
              loc: { start: 6637, end: 6643 },
            },
            loc: { start: 6637, end: 6644 },
          },
          directives: [],
          loc: { start: 6629, end: 6644 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 6647, end: 6654 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6656, end: 6662 },
              },
              loc: { start: 6656, end: 6662 },
            },
            loc: { start: 6656, end: 6663 },
          },
          directives: [],
          loc: { start: 6647, end: 6663 },
        },
      ],
      loc: { start: 6600, end: 6665 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 6672, end: 6680 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createWallet",
            loc: { start: 6685, end: 6697 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 6698, end: 6704 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 6706, end: 6717 },
                  },
                  loc: { start: 6706, end: 6717 },
                },
                loc: { start: 6706, end: 6718 },
              },
              directives: [],
              loc: { start: 6698, end: 6718 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6721, end: 6727 },
            },
            loc: { start: 6721, end: 6727 },
          },
          directives: [],
          loc: { start: 6685, end: 6727 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateWallet",
            loc: { start: 6730, end: 6742 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 6743, end: 6745 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 6747, end: 6749 },
                  },
                  loc: { start: 6747, end: 6749 },
                },
                loc: { start: 6747, end: 6750 },
              },
              directives: [],
              loc: { start: 6743, end: 6750 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 6752, end: 6758 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 6760, end: 6771 },
                  },
                  loc: { start: 6760, end: 6771 },
                },
                loc: { start: 6760, end: 6772 },
              },
              directives: [],
              loc: { start: 6752, end: 6772 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6775, end: 6781 },
            },
            loc: { start: 6775, end: 6781 },
          },
          directives: [],
          loc: { start: 6730, end: 6781 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "transferFunds",
            loc: { start: 6784, end: 6797 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "transferFunds",
                loc: { start: 6798, end: 6811 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "TransferFundsInput",
                    loc: { start: 6813, end: 6831 },
                  },
                  loc: { start: 6813, end: 6831 },
                },
                loc: { start: 6813, end: 6832 },
              },
              directives: [],
              loc: { start: 6798, end: 6832 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "TransferFundsResponse",
              loc: { start: 6835, end: 6856 },
            },
            loc: { start: 6835, end: 6856 },
          },
          directives: [],
          loc: { start: 6784, end: 6856 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "withdrawFunds",
            loc: { start: 6859, end: 6872 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "withdrawFunds",
                loc: { start: 6873, end: 6886 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WithdrawFundsInput",
                    loc: { start: 6888, end: 6906 },
                  },
                  loc: { start: 6888, end: 6906 },
                },
                loc: { start: 6888, end: 6907 },
              },
              directives: [],
              loc: { start: 6873, end: 6907 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "WithdrawFundsResponse",
              loc: { start: 6910, end: 6931 },
            },
            loc: { start: 6910, end: 6931 },
          },
          directives: [],
          loc: { start: 6859, end: 6931 },
        },
      ],
      loc: { start: 6667, end: 6933 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 6942, end: 6948 } },
      directives: [],
      loc: { start: 6935, end: 6948 },
    },
  ],
  loc: { start: 0, end: 6949 },
} as unknown as DocumentNode;
