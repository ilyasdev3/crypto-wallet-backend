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
      ],
      loc: { start: 1401, end: 1552 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostFilter",
        loc: { start: 1560, end: 1570 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1575, end: 1580 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1582, end: 1588 },
            },
            loc: { start: 1582, end: 1588 },
          },
          directives: [],
          loc: { start: 1575, end: 1588 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1591, end: 1598 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1600, end: 1606 },
            },
            loc: { start: 1600, end: 1606 },
          },
          directives: [],
          loc: { start: 1591, end: 1606 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "length",
            loc: { start: 1609, end: 1615 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1617, end: 1620 },
            },
            loc: { start: 1617, end: 1620 },
          },
          directives: [],
          loc: { start: 1609, end: 1620 },
        },
      ],
      loc: { start: 1554, end: 1622 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostResponse",
        loc: { start: 1629, end: 1647 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 1652, end: 1659 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1661, end: 1667 },
            },
            loc: { start: 1661, end: 1667 },
          },
          directives: [],
          loc: { start: 1652, end: 1667 },
        },
      ],
      loc: { start: 1624, end: 1669 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostStats",
        loc: { start: 1676, end: 1685 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalLikes",
            loc: { start: 1690, end: 1700 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1702, end: 1705 },
            },
            loc: { start: 1702, end: 1705 },
          },
          directives: [],
          loc: { start: 1690, end: 1705 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalComments",
            loc: { start: 1708, end: 1721 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1723, end: 1726 },
            },
            loc: { start: 1723, end: 1726 },
          },
          directives: [],
          loc: { start: 1708, end: 1726 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "totalShares",
            loc: { start: 1729, end: 1740 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1742, end: 1745 },
            },
            loc: { start: 1742, end: 1745 },
          },
          directives: [],
          loc: { start: 1729, end: 1745 },
        },
      ],
      loc: { start: 1671, end: 1747 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Post", loc: { start: 1754, end: 1758 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1763, end: 1768 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1770, end: 1776 },
            },
            loc: { start: 1770, end: 1776 },
          },
          directives: [],
          loc: { start: 1763, end: 1776 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1779, end: 1786 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1788, end: 1794 },
            },
            loc: { start: 1788, end: 1794 },
          },
          directives: [],
          loc: { start: 1779, end: 1794 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 1797, end: 1807 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 1809, end: 1816 },
            },
            loc: { start: 1809, end: 1816 },
          },
          directives: [],
          loc: { start: 1797, end: 1816 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "communityId",
            loc: { start: 1819, end: 1830 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1832, end: 1834 },
            },
            loc: { start: 1832, end: 1834 },
          },
          directives: [],
          loc: { start: 1819, end: 1834 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1837, end: 1842 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1844, end: 1850 },
            },
            loc: { start: 1844, end: 1850 },
          },
          directives: [],
          loc: { start: 1837, end: 1850 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1853, end: 1859 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1861, end: 1865 },
            },
            loc: { start: 1861, end: 1865 },
          },
          directives: [],
          loc: { start: 1853, end: 1865 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "community",
            loc: { start: 1868, end: 1877 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Community",
              loc: { start: 1879, end: 1888 },
            },
            loc: { start: 1879, end: 1888 },
          },
          directives: [],
          loc: { start: 1868, end: 1888 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "likes",
            loc: { start: 1891, end: 1896 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1899, end: 1901 },
              },
              loc: { start: 1899, end: 1901 },
            },
            loc: { start: 1898, end: 1902 },
          },
          directives: [],
          loc: { start: 1891, end: 1902 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stats",
            loc: { start: 1905, end: 1910 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PostStats",
              loc: { start: 1912, end: 1921 },
            },
            loc: { start: 1912, end: 1921 },
          },
          directives: [],
          loc: { start: 1905, end: 1921 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1924, end: 1933 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1935, end: 1939 },
            },
            loc: { start: 1935, end: 1939 },
          },
          directives: [],
          loc: { start: 1924, end: 1939 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1942, end: 1951 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1953, end: 1957 },
            },
            loc: { start: 1953, end: 1957 },
          },
          directives: [],
          loc: { start: 1942, end: 1957 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1960, end: 1962 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1964, end: 1966 },
            },
            loc: { start: 1964, end: 1966 },
          },
          directives: [],
          loc: { start: 1960, end: 1966 },
        },
      ],
      loc: { start: 1749, end: 1968 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 1975, end: 1979 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1984, end: 1986 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1988, end: 1990 },
            },
            loc: { start: 1988, end: 1990 },
          },
          directives: [],
          loc: { start: 1984, end: 1990 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 1993, end: 2002 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2004, end: 2010 },
            },
            loc: { start: 2004, end: 2010 },
          },
          directives: [],
          loc: { start: 1993, end: 2010 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 2013, end: 2021 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2023, end: 2029 },
            },
            loc: { start: 2023, end: 2029 },
          },
          directives: [],
          loc: { start: 2013, end: 2029 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 2032, end: 2040 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2042, end: 2048 },
            },
            loc: { start: 2042, end: 2048 },
          },
          directives: [],
          loc: { start: 2032, end: 2048 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 2051, end: 2063 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2065, end: 2071 },
            },
            loc: { start: 2065, end: 2071 },
          },
          directives: [],
          loc: { start: 2051, end: 2071 },
        },
      ],
      loc: { start: 1970, end: 2073 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 2080, end: 2087 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2092, end: 2094 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2096, end: 2098 },
            },
            loc: { start: 2096, end: 2098 },
          },
          directives: [],
          loc: { start: 2092, end: 2098 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2101, end: 2107 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2109, end: 2111 },
            },
            loc: { start: 2109, end: 2111 },
          },
          directives: [],
          loc: { start: 2101, end: 2111 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2114, end: 2118 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2120, end: 2124 },
            },
            loc: { start: 2120, end: 2124 },
          },
          directives: [],
          loc: { start: 2114, end: 2124 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2127, end: 2133 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2135, end: 2137 },
            },
            loc: { start: 2135, end: 2137 },
          },
          directives: [],
          loc: { start: 2127, end: 2137 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2140, end: 2147 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2149, end: 2155 },
            },
            loc: { start: 2149, end: 2155 },
          },
          directives: [],
          loc: { start: 2140, end: 2155 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2158, end: 2167 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2169, end: 2173 },
            },
            loc: { start: 2169, end: 2173 },
          },
          directives: [],
          loc: { start: 2158, end: 2173 },
        },
      ],
      loc: { start: 2075, end: 2175 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Share", loc: { start: 2182, end: 2187 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2192, end: 2194 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2196, end: 2198 },
            },
            loc: { start: 2196, end: 2198 },
          },
          directives: [],
          loc: { start: 2192, end: 2198 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2201, end: 2207 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2209, end: 2211 },
            },
            loc: { start: 2209, end: 2211 },
          },
          directives: [],
          loc: { start: 2201, end: 2211 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2214, end: 2220 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2222, end: 2224 },
            },
            loc: { start: 2222, end: 2224 },
          },
          directives: [],
          loc: { start: 2214, end: 2224 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2227, end: 2236 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2238, end: 2242 },
            },
            loc: { start: 2238, end: 2242 },
          },
          directives: [],
          loc: { start: 2227, end: 2242 },
        },
      ],
      loc: { start: 2177, end: 2244 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostInput",
        loc: { start: 2252, end: 2261 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2266, end: 2271 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2273, end: 2279 },
            },
            loc: { start: 2273, end: 2279 },
          },
          directives: [],
          loc: { start: 2266, end: 2279 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2282, end: 2289 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2291, end: 2297 },
            },
            loc: { start: 2291, end: 2297 },
          },
          directives: [],
          loc: { start: 2282, end: 2297 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 2300, end: 2310 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2312, end: 2319 },
            },
            loc: { start: 2312, end: 2319 },
          },
          directives: [],
          loc: { start: 2300, end: 2319 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "communityId",
            loc: { start: 2322, end: 2333 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2335, end: 2337 },
            },
            loc: { start: 2335, end: 2337 },
          },
          directives: [],
          loc: { start: 2322, end: 2337 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 2340, end: 2345 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 2347, end: 2353 },
            },
            loc: { start: 2347, end: 2353 },
          },
          directives: [],
          loc: { start: 2340, end: 2353 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2356, end: 2362 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2364, end: 2366 },
            },
            loc: { start: 2364, end: 2366 },
          },
          directives: [],
          loc: { start: 2356, end: 2366 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2369, end: 2378 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2380, end: 2384 },
            },
            loc: { start: 2380, end: 2384 },
          },
          directives: [],
          loc: { start: 2369, end: 2384 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2387, end: 2396 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2398, end: 2402 },
            },
            loc: { start: 2398, end: 2402 },
          },
          directives: [],
          loc: { start: 2387, end: 2402 },
        },
      ],
      loc: { start: 2246, end: 2404 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2411, end: 2419 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createPost",
            loc: { start: 2424, end: 2434 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "post",
                loc: { start: 2435, end: 2439 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PostInput",
                    loc: { start: 2441, end: 2450 },
                  },
                  loc: { start: 2441, end: 2450 },
                },
                loc: { start: 2441, end: 2451 },
              },
              directives: [],
              loc: { start: 2435, end: 2451 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreatePostResponse",
              loc: { start: 2454, end: 2472 },
            },
            loc: { start: 2454, end: 2472 },
          },
          directives: [],
          loc: { start: 2424, end: 2472 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "doLike",
            loc: { start: 2475, end: 2481 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "postId",
                loc: { start: 2482, end: 2488 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2490, end: 2492 },
                  },
                  loc: { start: 2490, end: 2492 },
                },
                loc: { start: 2490, end: 2493 },
              },
              directives: [],
              loc: { start: 2482, end: 2493 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2496, end: 2502 },
            },
            loc: { start: 2496, end: 2502 },
          },
          directives: [],
          loc: { start: 2475, end: 2502 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatePost",
            loc: { start: 2505, end: 2515 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2516, end: 2518 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2520, end: 2522 },
                  },
                  loc: { start: 2520, end: 2522 },
                },
                loc: { start: 2520, end: 2523 },
              },
              directives: [],
              loc: { start: 2516, end: 2523 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "post",
                loc: { start: 2525, end: 2529 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PostInput",
                    loc: { start: 2531, end: 2540 },
                  },
                  loc: { start: 2531, end: 2540 },
                },
                loc: { start: 2531, end: 2541 },
              },
              directives: [],
              loc: { start: 2525, end: 2541 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2544, end: 2550 },
            },
            loc: { start: 2544, end: 2550 },
          },
          directives: [],
          loc: { start: 2505, end: 2550 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deletePost",
            loc: { start: 2553, end: 2563 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2564, end: 2566 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2568, end: 2570 },
                  },
                  loc: { start: 2568, end: 2570 },
                },
                loc: { start: 2568, end: 2571 },
              },
              directives: [],
              loc: { start: 2564, end: 2571 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2574, end: 2580 },
            },
            loc: { start: 2574, end: 2580 },
          },
          directives: [],
          loc: { start: 2553, end: 2580 },
        },
      ],
      loc: { start: 2406, end: 2582 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2588, end: 2593 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getShares",
            loc: { start: 2598, end: 2607 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2608, end: 2610 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2612, end: 2614 },
                  },
                  loc: { start: 2612, end: 2614 },
                },
                loc: { start: 2612, end: 2615 },
              },
              directives: [],
              loc: { start: 2608, end: 2615 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Share",
                loc: { start: 2619, end: 2624 },
              },
              loc: { start: 2619, end: 2624 },
            },
            loc: { start: 2618, end: 2625 },
          },
          directives: [],
          loc: { start: 2598, end: 2625 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUserShares",
            loc: { start: 2628, end: 2641 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2642, end: 2644 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2646, end: 2648 },
                  },
                  loc: { start: 2646, end: 2648 },
                },
                loc: { start: 2646, end: 2649 },
              },
              directives: [],
              loc: { start: 2642, end: 2649 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Share",
                loc: { start: 2653, end: 2658 },
              },
              loc: { start: 2653, end: 2658 },
            },
            loc: { start: 2652, end: 2659 },
          },
          directives: [],
          loc: { start: 2628, end: 2659 },
        },
      ],
      loc: { start: 2583, end: 2661 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Share", loc: { start: 2668, end: 2673 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2678, end: 2684 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2686, end: 2688 },
            },
            loc: { start: 2686, end: 2688 },
          },
          directives: [],
          loc: { start: 2678, end: 2688 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2691, end: 2697 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2699, end: 2701 },
            },
            loc: { start: 2699, end: 2701 },
          },
          directives: [],
          loc: { start: 2691, end: 2701 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2704, end: 2713 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2715, end: 2719 },
            },
            loc: { start: 2715, end: 2719 },
          },
          directives: [],
          loc: { start: 2704, end: 2719 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2722, end: 2731 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2733, end: 2737 },
            },
            loc: { start: 2733, end: 2737 },
          },
          directives: [],
          loc: { start: 2722, end: 2737 },
        },
      ],
      loc: { start: 2663, end: 2739 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2746, end: 2754 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createShare",
            loc: { start: 2759, end: 2770 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "share",
                loc: { start: 2771, end: 2776 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ShareInput",
                    loc: { start: 2778, end: 2788 },
                  },
                  loc: { start: 2778, end: 2788 },
                },
                loc: { start: 2778, end: 2789 },
              },
              directives: [],
              loc: { start: 2771, end: 2789 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateShareResponse",
              loc: { start: 2792, end: 2811 },
            },
            loc: { start: 2792, end: 2811 },
          },
          directives: [],
          loc: { start: 2759, end: 2811 },
        },
      ],
      loc: { start: 2741, end: 2813 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShareInput",
        loc: { start: 2821, end: 2831 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2836, end: 2842 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2844, end: 2846 },
            },
            loc: { start: 2844, end: 2846 },
          },
          directives: [],
          loc: { start: 2836, end: 2846 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 2849, end: 2855 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2857, end: 2859 },
            },
            loc: { start: 2857, end: 2859 },
          },
          directives: [],
          loc: { start: 2849, end: 2859 },
        },
      ],
      loc: { start: 2815, end: 2861 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateShareResponse",
        loc: { start: 2868, end: 2887 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 2892, end: 2899 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2901, end: 2907 },
            },
            loc: { start: 2901, end: 2907 },
          },
          directives: [],
          loc: { start: 2892, end: 2907 },
        },
      ],
      loc: { start: 2863, end: 2909 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2915, end: 2920 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getUser",
            loc: { start: 2925, end: 2932 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2933, end: 2935 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2937, end: 2939 },
                  },
                  loc: { start: 2937, end: 2939 },
                },
                loc: { start: 2937, end: 2940 },
              },
              directives: [],
              loc: { start: 2933, end: 2940 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2943, end: 2947 },
            },
            loc: { start: 2943, end: 2947 },
          },
          directives: [],
          loc: { start: 2925, end: 2947 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 2950, end: 2952 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 2954, end: 2958 },
            },
            loc: { start: 2954, end: 2958 },
          },
          directives: [],
          loc: { start: 2950, end: 2958 },
        },
      ],
      loc: { start: 2910, end: 2960 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateUserResponse",
        loc: { start: 2967, end: 2985 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 2990, end: 2997 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2999, end: 3005 },
            },
            loc: { start: 2999, end: 3005 },
          },
          directives: [],
          loc: { start: 2990, end: 3005 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 3008, end: 3013 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3015, end: 3021 },
            },
            loc: { start: 3015, end: 3021 },
          },
          directives: [],
          loc: { start: 3008, end: 3021 },
        },
      ],
      loc: { start: 2962, end: 3023 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 3030, end: 3043 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "message",
            loc: { start: 3048, end: 3055 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3057, end: 3063 },
            },
            loc: { start: 3057, end: 3063 },
          },
          directives: [],
          loc: { start: 3048, end: 3063 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 3066, end: 3071 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3073, end: 3079 },
            },
            loc: { start: 3073, end: 3079 },
          },
          directives: [],
          loc: { start: 3066, end: 3079 },
        },
      ],
      loc: { start: 3025, end: 3081 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3088, end: 3096 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createUser",
            loc: { start: 3101, end: 3111 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 3112, end: 3116 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 3118, end: 3127 },
                  },
                  loc: { start: 3118, end: 3127 },
                },
                loc: { start: 3118, end: 3128 },
              },
              directives: [],
              loc: { start: 3112, end: 3128 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreateUserResponse",
              loc: { start: 3131, end: 3149 },
            },
            loc: { start: 3131, end: 3149 },
          },
          directives: [],
          loc: { start: 3101, end: 3149 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginUser",
            loc: { start: 3152, end: 3161 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 3162, end: 3166 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UserInput",
                    loc: { start: 3168, end: 3177 },
                  },
                  loc: { start: 3168, end: 3177 },
                },
                loc: { start: 3168, end: 3178 },
              },
              directives: [],
              loc: { start: 3162, end: 3178 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "LoginResponse",
              loc: { start: 3181, end: 3194 },
            },
            loc: { start: 3181, end: 3194 },
          },
          directives: [],
          loc: { start: 3152, end: 3194 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateUser",
            loc: { start: 3197, end: 3207 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "user",
                loc: { start: 3208, end: 3212 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "UpdateUserInput",
                    loc: { start: 3214, end: 3229 },
                  },
                  loc: { start: 3214, end: 3229 },
                },
                loc: { start: 3214, end: 3230 },
              },
              directives: [],
              loc: { start: 3208, end: 3230 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3233, end: 3239 },
              },
              loc: { start: 3233, end: 3239 },
            },
            loc: { start: 3233, end: 3240 },
          },
          directives: [],
          loc: { start: 3197, end: 3240 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkUsername",
            loc: { start: 3243, end: 3256 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 3257, end: 3265 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3267, end: 3273 },
                  },
                  loc: { start: 3267, end: 3273 },
                },
                loc: { start: 3267, end: 3274 },
              },
              directives: [],
              loc: { start: 3257, end: 3274 },
            },
          ],
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
          loc: { start: 3243, end: 3283 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteUser",
            loc: { start: 3286, end: 3296 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3297, end: 3299 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3301, end: 3303 },
                  },
                  loc: { start: 3301, end: 3303 },
                },
                loc: { start: 3301, end: 3304 },
              },
              directives: [],
              loc: { start: 3297, end: 3304 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3307, end: 3313 },
            },
            loc: { start: 3307, end: 3313 },
          },
          directives: [],
          loc: { start: 3286, end: 3313 },
        },
      ],
      loc: { start: 3083, end: 3315 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 3324, end: 3330 } },
      directives: [],
      loc: { start: 3317, end: 3330 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 3337, end: 3341 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3346, end: 3348 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3350, end: 3352 },
              },
              loc: { start: 3350, end: 3352 },
            },
            loc: { start: 3350, end: 3353 },
          },
          directives: [],
          loc: { start: 3346, end: 3353 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 3356, end: 3365 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3367, end: 3373 },
            },
            loc: { start: 3367, end: 3373 },
          },
          directives: [],
          loc: { start: 3356, end: 3373 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 3376, end: 3384 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3386, end: 3392 },
            },
            loc: { start: 3386, end: 3392 },
          },
          directives: [],
          loc: { start: 3376, end: 3392 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 3395, end: 3403 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3405, end: 3411 },
              },
              loc: { start: 3405, end: 3411 },
            },
            loc: { start: 3405, end: 3412 },
          },
          directives: [],
          loc: { start: 3395, end: 3412 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 3415, end: 3420 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3422, end: 3428 },
            },
            loc: { start: 3422, end: 3428 },
          },
          directives: [],
          loc: { start: 3415, end: 3428 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 3431, end: 3436 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3438, end: 3444 },
            },
            loc: { start: 3438, end: 3444 },
          },
          directives: [],
          loc: { start: 3431, end: 3444 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 3447, end: 3459 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3461, end: 3467 },
            },
            loc: { start: 3461, end: 3467 },
          },
          directives: [],
          loc: { start: 3447, end: 3467 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3470, end: 3477 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3479, end: 3485 },
            },
            loc: { start: 3479, end: 3485 },
          },
          directives: [],
          loc: { start: 3470, end: 3485 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isVerified",
            loc: { start: 3488, end: 3498 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3500, end: 3507 },
            },
            loc: { start: 3500, end: 3507 },
          },
          directives: [],
          loc: { start: 3488, end: 3507 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 3510, end: 3513 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3515, end: 3521 },
            },
            loc: { start: 3515, end: 3521 },
          },
          directives: [],
          loc: { start: 3510, end: 3521 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "followers",
            loc: { start: 3524, end: 3533 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3536, end: 3538 },
              },
              loc: { start: 3536, end: 3538 },
            },
            loc: { start: 3535, end: 3539 },
          },
          directives: [],
          loc: { start: 3524, end: 3539 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "following",
            loc: { start: 3542, end: 3551 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3554, end: 3556 },
              },
              loc: { start: 3554, end: 3556 },
            },
            loc: { start: 3553, end: 3557 },
          },
          directives: [],
          loc: { start: 3542, end: 3557 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 3560, end: 3569 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3571, end: 3575 },
            },
            loc: { start: 3571, end: 3575 },
          },
          directives: [],
          loc: { start: 3560, end: 3575 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 3578, end: 3587 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 3589, end: 3593 },
            },
            loc: { start: 3589, end: 3593 },
          },
          directives: [],
          loc: { start: 3578, end: 3593 },
        },
      ],
      loc: { start: 3332, end: 3595 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UserInput",
        loc: { start: 3603, end: 3612 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 3617, end: 3625 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3627, end: 3633 },
              },
              loc: { start: 3627, end: 3633 },
            },
            loc: { start: 3627, end: 3634 },
          },
          directives: [],
          loc: { start: 3617, end: 3634 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 3637, end: 3645 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3647, end: 3653 },
              },
              loc: { start: 3647, end: 3653 },
            },
            loc: { start: 3647, end: 3654 },
          },
          directives: [],
          loc: { start: 3637, end: 3654 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 3657, end: 3666 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3668, end: 3674 },
            },
            loc: { start: 3668, end: 3674 },
          },
          directives: [],
          loc: { start: 3657, end: 3674 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 3677, end: 3685 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3687, end: 3693 },
            },
            loc: { start: 3687, end: 3693 },
          },
          directives: [],
          loc: { start: 3677, end: 3693 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 3696, end: 3701 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3703, end: 3709 },
            },
            loc: { start: 3703, end: 3709 },
          },
          directives: [],
          loc: { start: 3696, end: 3709 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 3712, end: 3717 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3719, end: 3725 },
            },
            loc: { start: 3719, end: 3725 },
          },
          directives: [],
          loc: { start: 3712, end: 3725 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 3728, end: 3740 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 3742, end: 3748 },
            },
            loc: { start: 3742, end: 3748 },
          },
          directives: [],
          loc: { start: 3728, end: 3748 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3751, end: 3758 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3760, end: 3766 },
            },
            loc: { start: 3760, end: 3766 },
          },
          directives: [],
          loc: { start: 3751, end: 3766 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 3769, end: 3772 } },
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
          loc: { start: 3769, end: 3780 },
        },
      ],
      loc: { start: 3597, end: 3782 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "UpdateUserInput",
        loc: { start: 3790, end: 3805 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 3810, end: 3818 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3820, end: 3826 },
            },
            loc: { start: 3820, end: 3826 },
          },
          directives: [],
          loc: { start: 3810, end: 3826 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 3829, end: 3837 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3839, end: 3845 },
            },
            loc: { start: 3839, end: 3845 },
          },
          directives: [],
          loc: { start: 3829, end: 3845 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "firstName",
            loc: { start: 3848, end: 3857 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3859, end: 3865 },
            },
            loc: { start: 3859, end: 3865 },
          },
          directives: [],
          loc: { start: 3848, end: 3865 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "lastName",
            loc: { start: 3868, end: 3876 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3878, end: 3884 },
            },
            loc: { start: 3878, end: 3884 },
          },
          directives: [],
          loc: { start: 3868, end: 3884 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 3887, end: 3892 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3894, end: 3900 },
            },
            loc: { start: 3894, end: 3900 },
          },
          directives: [],
          loc: { start: 3887, end: 3900 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "phone",
            loc: { start: 3903, end: 3908 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3910, end: 3916 },
            },
            loc: { start: 3910, end: 3916 },
          },
          directives: [],
          loc: { start: 3903, end: 3916 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "profileImage",
            loc: { start: 3919, end: 3931 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Upload",
              loc: { start: 3933, end: 3939 },
            },
            loc: { start: 3933, end: 3939 },
          },
          directives: [],
          loc: { start: 3919, end: 3939 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 3942, end: 3949 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3951, end: 3957 },
            },
            loc: { start: 3951, end: 3957 },
          },
          directives: [],
          loc: { start: 3942, end: 3957 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "bio", loc: { start: 3960, end: 3963 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3965, end: 3971 },
            },
            loc: { start: 3965, end: 3971 },
          },
          directives: [],
          loc: { start: 3960, end: 3971 },
        },
      ],
      loc: { start: 3784, end: 3973 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wallet", loc: { start: 3979, end: 3985 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3990, end: 3996 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3998, end: 4000 },
            },
            loc: { start: 3998, end: 4000 },
          },
          directives: [],
          loc: { start: 3990, end: 4000 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4003, end: 4010 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4012, end: 4018 },
            },
            loc: { start: 4012, end: 4018 },
          },
          directives: [],
          loc: { start: 4003, end: 4018 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 4021, end: 4031 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4033, end: 4039 },
            },
            loc: { start: 4033, end: 4039 },
          },
          directives: [],
          loc: { start: 4021, end: 4039 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 4042, end: 4051 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4053, end: 4059 },
            },
            loc: { start: 4053, end: 4059 },
          },
          directives: [],
          loc: { start: 4042, end: 4059 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 4062, end: 4070 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4072, end: 4078 },
            },
            loc: { start: 4072, end: 4078 },
          },
          directives: [],
          loc: { start: 4062, end: 4078 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 4081, end: 4088 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4090, end: 4096 },
            },
            loc: { start: 4090, end: 4096 },
          },
          directives: [],
          loc: { start: 4081, end: 4096 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4099, end: 4108 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 4110, end: 4114 },
            },
            loc: { start: 4110, end: 4114 },
          },
          directives: [],
          loc: { start: 4099, end: 4114 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 4117, end: 4126 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 4128, end: 4132 },
            },
            loc: { start: 4128, end: 4132 },
          },
          directives: [],
          loc: { start: 4117, end: 4132 },
        },
      ],
      loc: { start: 3974, end: 4134 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "WalletInput",
        loc: { start: 4142, end: 4153 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "address",
            loc: { start: 4158, end: 4165 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4167, end: 4173 },
            },
            loc: { start: 4167, end: 4173 },
          },
          directives: [],
          loc: { start: 4158, end: 4173 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "privateKey",
            loc: { start: 4176, end: 4186 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4188, end: 4194 },
            },
            loc: { start: 4188, end: 4194 },
          },
          directives: [],
          loc: { start: 4176, end: 4194 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "publicKey",
            loc: { start: 4197, end: 4206 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4208, end: 4214 },
            },
            loc: { start: 4208, end: 4214 },
          },
          directives: [],
          loc: { start: 4197, end: 4214 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "mnemonic",
            loc: { start: 4217, end: 4225 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4227, end: 4233 },
            },
            loc: { start: 4227, end: 4233 },
          },
          directives: [],
          loc: { start: 4217, end: 4233 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "balance",
            loc: { start: 4236, end: 4243 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4245, end: 4251 },
            },
            loc: { start: 4245, end: 4251 },
          },
          directives: [],
          loc: { start: 4236, end: 4251 },
        },
      ],
      loc: { start: 4136, end: 4253 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ChartData",
        loc: { start: 4260, end: 4269 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "labels",
            loc: { start: 4274, end: 4280 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4283, end: 4289 },
              },
              loc: { start: 4283, end: 4289 },
            },
            loc: { start: 4282, end: 4290 },
          },
          directives: [],
          loc: { start: 4274, end: 4290 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "datasets",
            loc: { start: 4293, end: 4301 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Dataset",
                loc: { start: 4304, end: 4311 },
              },
              loc: { start: 4304, end: 4311 },
            },
            loc: { start: 4303, end: 4312 },
          },
          directives: [],
          loc: { start: 4293, end: 4312 },
        },
      ],
      loc: { start: 4255, end: 4314 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Dataset", loc: { start: 4321, end: 4328 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "data",
            loc: { start: 4333, end: 4337 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 4340, end: 4345 },
              },
              loc: { start: 4340, end: 4345 },
            },
            loc: { start: 4339, end: 4346 },
          },
          directives: [],
          loc: { start: 4333, end: 4346 },
        },
      ],
      loc: { start: 4316, end: 4348 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CoinData",
        loc: { start: 4355, end: 4363 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4368, end: 4372 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4374, end: 4380 },
            },
            loc: { start: 4374, end: 4380 },
          },
          directives: [],
          loc: { start: 4368, end: 4380 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "symbol",
            loc: { start: 4383, end: 4389 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4391, end: 4397 },
            },
            loc: { start: 4391, end: 4397 },
          },
          directives: [],
          loc: { start: 4383, end: 4397 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 4400, end: 4405 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4407, end: 4413 },
            },
            loc: { start: 4407, end: 4413 },
          },
          directives: [],
          loc: { start: 4400, end: 4413 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 4416, end: 4421 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 4423, end: 4428 },
            },
            loc: { start: 4423, end: 4428 },
          },
          directives: [],
          loc: { start: 4416, end: 4428 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 4431, end: 4437 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 4439, end: 4444 },
            },
            loc: { start: 4439, end: 4444 },
          },
          directives: [],
          loc: { start: 4431, end: 4444 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "changePercentage",
            loc: { start: 4447, end: 4463 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 4465, end: 4470 },
            },
            loc: { start: 4465, end: 4470 },
          },
          directives: [],
          loc: { start: 4447, end: 4470 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "chartData",
            loc: { start: 4473, end: 4482 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ChartData",
              loc: { start: 4484, end: 4493 },
            },
            loc: { start: 4484, end: 4493 },
          },
          directives: [],
          loc: { start: 4473, end: 4493 },
        },
      ],
      loc: { start: 4350, end: 4495 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 4502, end: 4507 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getWallet",
            loc: { start: 4512, end: 4521 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Wallet",
              loc: { start: 4523, end: 4529 },
            },
            loc: { start: 4523, end: 4529 },
          },
          directives: [],
          loc: { start: 4512, end: 4529 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getCoinData",
            loc: { start: 4532, end: 4543 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "currency",
                loc: { start: 4544, end: 4552 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4554, end: 4560 },
                  },
                  loc: { start: 4554, end: 4560 },
                },
                loc: { start: 4554, end: 4561 },
              },
              directives: [],
              loc: { start: 4544, end: 4561 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "days",
                loc: { start: 4563, end: 4567 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 4569, end: 4572 },
                  },
                  loc: { start: 4569, end: 4572 },
                },
                loc: { start: 4569, end: 4573 },
              },
              directives: [],
              loc: { start: 4563, end: 4573 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CoinData",
                loc: { start: 4576, end: 4584 },
              },
              loc: { start: 4576, end: 4584 },
            },
            loc: { start: 4576, end: 4585 },
          },
          directives: [],
          loc: { start: 4532, end: 4585 },
        },
      ],
      loc: { start: 4497, end: 4587 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 4594, end: 4602 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createWallet",
            loc: { start: 4607, end: 4619 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 4620, end: 4626 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 4628, end: 4639 },
                  },
                  loc: { start: 4628, end: 4639 },
                },
                loc: { start: 4628, end: 4640 },
              },
              directives: [],
              loc: { start: 4620, end: 4640 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4643, end: 4649 },
            },
            loc: { start: 4643, end: 4649 },
          },
          directives: [],
          loc: { start: 4607, end: 4649 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateWallet",
            loc: { start: 4652, end: 4664 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4665, end: 4667 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4669, end: 4671 },
                  },
                  loc: { start: 4669, end: 4671 },
                },
                loc: { start: 4669, end: 4672 },
              },
              directives: [],
              loc: { start: 4665, end: 4672 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "wallet",
                loc: { start: 4674, end: 4680 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "WalletInput",
                    loc: { start: 4682, end: 4693 },
                  },
                  loc: { start: 4682, end: 4693 },
                },
                loc: { start: 4682, end: 4694 },
              },
              directives: [],
              loc: { start: 4674, end: 4694 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4697, end: 4703 },
            },
            loc: { start: 4697, end: 4703 },
          },
          directives: [],
          loc: { start: 4652, end: 4703 },
        },
      ],
      loc: { start: 4589, end: 4705 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Upload", loc: { start: 4714, end: 4720 } },
      directives: [],
      loc: { start: 4707, end: 4720 },
    },
  ],
  loc: { start: 0, end: 4721 },
} as unknown as DocumentNode;
